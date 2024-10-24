"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";

const subjects = [
  { id: 1, name: "Mathematics", attended: 15, total: 18, required: 75 },
  { id: 2, name: "Physics", attended: 12, total: 15, required: 75 },
  { id: 3, name: "Computer Science", attended: 20, total: 22, required: 75 },
  { id: 4, name: "English", attended: 14, total: 16, required: 75 },
];

export default function AttendancePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="py-10 px-3 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Attendance Manager
        </h1>
        <p className="text-muted-foreground max-w-[700px]">
          Track and manage your attendance across all subjects. Stay on top of
          your attendance requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Attendance Overview</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Attended</TableHead>
                <TableHead>Total Classes</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => {
                const percentage = (subject.attended / subject.total) * 100;
                const status =
                  percentage >= subject.required ? "default" : "destructive";
                return (
                  <TableRow key={subject.id}>
                    <TableCell className="font-medium">
                      {subject.name}
                    </TableCell>
                    <TableCell>{subject.attended}</TableCell>
                    <TableCell>{subject.total}</TableCell>
                    <TableCell>{percentage.toFixed(1)}%</TableCell>
                    <TableCell>
                      <Badge variant={status}>
                        {status === "default" ? "On Track" : "At Risk"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>

        <Card className="p-6 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-4">Mark Attendance</h2>
          <div className="space-y-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <Button className="w-full">Mark Present</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
