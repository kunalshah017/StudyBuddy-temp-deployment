"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckSquare, Clock, AlertCircle } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Mathematics Assignment",
    description: "Complete exercises 4.1 to 4.5",
    dueDate: "2024-03-25",
    points: 100,
    status: "pending",
    type: "teacher",
  },
  {
    id: 2,
    title: "Physics Lab Report",
    description: "Write report for today's experiment",
    dueDate: "2024-03-23",
    points: 150,
    status: "completed",
    type: "teacher",
  },
  {
    id: 3,
    title: "Study for CS Quiz",
    description: "Review chapters 5 and 6",
    dueDate: "2024-03-24",
    points: 0,
    status: "pending",
    type: "personal",
  },
];

export default function TasksPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "all") return true;
    return task.type === activeTab;
  });

  return (
    <div className="w-full px-5 py-10 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Task Manager</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Keep track of your assignments and personal tasks in one place.
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-20">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="teacher">Assignments</TabsTrigger>
          <TabsTrigger value="personal">Personal Tasks</TabsTrigger>
        </TabsList>

        <TabsContent
          value="all"
          className="space-y-4 w-full flex items-center flex-col "
        >
          {filteredTasks.map((task) => (
            <Card key={task.id} className="p-6 w-[70%]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                    {task.type === "teacher" && (
                      <Badge variant="secondary">{task.points} Points</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{task.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      Due: {task.dueDate}
                    </span>
                    <Badge
                      variant={
                        task.status === "completed" ? "secondary" : "default"
                      }
                    >
                      {task.status === "completed" ? (
                        <CheckSquare className="mr-1 h-4 w-4" />
                      ) : (
                        <AlertCircle className="mr-1 h-4 w-4" />
                      )}
                      {task.status.charAt(0).toUpperCase() +
                        task.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant={task.status === "completed" ? "outline" : "default"}
                >
                  {task.status === "completed" ? "Completed" : "Mark Complete"}
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent
          value="teacher"
          className="space-y-4 w-full flex items-center flex-col "
        >
          {/* Teacher assignments will be shown here */}
          {filteredTasks.map((task) => (
            <Card key={task.id} className="p-6 w-[70%]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                    {task.type === "teacher" && (
                      <Badge variant="secondary">{task.points} Points</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{task.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      Due: {task.dueDate}
                    </span>
                    <Badge
                      variant={
                        task.status === "completed" ? "secondary" : "default"
                      }
                    >
                      {task.status === "completed" ? (
                        <CheckSquare className="mr-1 h-4 w-4" />
                      ) : (
                        <AlertCircle className="mr-1 h-4 w-4" />
                      )}
                      {task.status.charAt(0).toUpperCase() +
                        task.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant={task.status === "completed" ? "outline" : "default"}
                >
                  {task.status === "completed" ? "Completed" : "Mark Complete"}
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent
          value="personal"
          className="space-y-4 w-full flex items-center flex-col "
        >
          {/* Personal tasks will be shown here */}
          {filteredTasks.map((task) => (
            <Card key={task.id} className="p-6 w-[70%]">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                    {task.type === "teacher" && (
                      <Badge variant="secondary">{task.points} Points</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">{task.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      Due: {task.dueDate}
                    </span>
                    <Badge
                      variant={
                        task.status === "completed" ? "secondary" : "default"
                      }
                    >
                      {task.status === "completed" ? (
                        <CheckSquare className="mr-1 h-4 w-4" />
                      ) : (
                        <AlertCircle className="mr-1 h-4 w-4" />
                      )}
                      {task.status.charAt(0).toUpperCase() +
                        task.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant={task.status === "completed" ? "outline" : "default"}
                >
                  {task.status === "completed" ? "Completed" : "Mark Complete"}
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
