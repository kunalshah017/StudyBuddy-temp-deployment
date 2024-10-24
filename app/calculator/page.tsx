"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Subject {
  id: number;
  name: string;
  expectedGPA: number;
  requiredMarks: number;
}

export default function CalculatorPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subjectName, setSubjectName] = useState("");
  const [expectedGPA, setExpectedGPA] = useState("");

  const addSubject = () => {
    let gpa = parseFloat(expectedGPA);
    if (gpa > 10) gpa = 10; // Limit GPA to 10

    const newSubject: Subject = {
      id: subjects.length + 1,
      name: subjectName,
      expectedGPA: gpa,
      requiredMarks: gpa * 10, // Example calculation
    };
    setSubjects([...subjects, newSubject]);
    setSubjectName("");
    setExpectedGPA("");
  };

  const calculateTotalGPA = () => {
    if (subjects.length === 0) return 0;
    const totalGPA = subjects.reduce(
      (sum, subject) => sum + subject.expectedGPA,
      0
    );
    return totalGPA / subjects.length;
  };

  return (
    <div className="py-10 px-3 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">GPA Calculator</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Add your subjects and expected GPA to calculate the required marks.
        </p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="flex flex-col md:flex-row justify-start gap-3">
          <Input
            placeholder="Subject Name"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <Input
            placeholder="Expected GPA"
            value={expectedGPA}
            onChange={(e) => setExpectedGPA(e.target.value)}
          />
          <Button onClick={addSubject}>Add Subject</Button>
        </div>

        <div className="space-y-4">
          {subjects.map((subject) => (
            <Card key={subject.id} className="p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{subject.name}</h3>
                  <p className="text-muted-foreground">
                    Expected GPA: {subject.expectedGPA}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Required Marks: {subject.requiredMarks}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Total GPA</h2>
          <p className="text-muted-foreground">
            Your total GPA for the semester is: {calculateTotalGPA().toFixed(2)}
          </p>
        </div>
      </Card>
    </div>
  );
}
