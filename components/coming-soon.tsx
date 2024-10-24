"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

interface ComingSoonProps {
  title: string
  description?: string
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  const router = useRouter()

  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="text-xl text-muted-foreground">
          {description || "This feature is coming soon. We're working hard to bring you something amazing!"}
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => router.back()} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}