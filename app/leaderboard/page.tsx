import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const students = [
  { name: "Alice Johnson", rollNumber: "20230000001", points: 1200 },
  { name: "Bob Smith", rollNumber: "20230000002", points: 1150 },
  { name: "Charlie Brown", rollNumber: "20230000003", points: 1100 },
  { name: "David Wilson", rollNumber: "20230000004", points: 1050 },
  { name: "Eva Green", rollNumber: "20230000005", points: 1000 },
];

export default function LeaderboardPage() {
  return (
    <div className="px-10 py-10 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Leaderboard</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Compete with your peers and track your progress on our leaderboard!
        </p>
      </div>

      <div className="space-y-6">
        {students.map((student, index) => (
          <Card
            key={student.rollNumber}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{student.name}</h3>
                <p className="text-muted-foreground">
                  Roll Number: {student.rollNumber}
                </p>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="whitespace-nowrap">
                  {student.points} Points
                </Badge>
                <p className="text-muted-foreground">Rank: {index + 1}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
