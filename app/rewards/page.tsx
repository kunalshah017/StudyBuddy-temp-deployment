import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Gift, Coffee, Book, Pizza, Music, Movie, ShoppingBag } from "lucide-react"

const rewards = [
  {
    name: "Coffee Shop Voucher",
    points: 500,
    description: "Get a free coffee at participating cafes",
    icon: Coffee,
    discount: "100% OFF",
    partners: ["Starbucks", "Costa Coffee"]
  },
  {
    name: "Bookstore Discount",
    points: 750,
    description: "20% off on academic books",
    icon: Book,
    discount: "20% OFF",
    partners: ["Barnes & Noble", "Academic Press"]
  },
  {
    name: "Pizza Deal",
    points: 600,
    description: "Buy one get one free on medium pizzas",
    icon: Pizza,
    discount: "BOGO",
    partners: ["Domino's", "Pizza Hut"]
  },
  {
    name: "Music Streaming",
    points: 1000,
    description: "1 month premium subscription",
    icon: Music,
    discount: "1 MONTH FREE",
    partners: ["Spotify", "Apple Music"]
  },
  {
    name: "Movie Tickets",
    points: 800,
    description: "Get 2 movie tickets at 50% off",
    icon: Movie,
    discount: "50% OFF",
    partners: ["AMC", "Regal Cinemas"]
  },
  {
    name: "Shopping Voucher",
    points: 1500,
    description: "$50 shopping voucher at select stores",
    icon: ShoppingBag,
    discount: "$50 VALUE",
    partners: ["Amazon", "Target"]
  }
]

export default function RewardsPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Rewards Store</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Redeem your hard-earned points for exclusive rewards from our partners.
          Complete assignments and maintain good attendance to earn more points!
        </p>
        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="text-lg px-4 py-1">
            <Gift className="w-4 h-4 mr-2" />
            Your Points: 1,250
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => {
          const Icon = reward.icon
          return (
            <Card key={reward.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{reward.points} Points</Badge>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold">{reward.name}</h3>
                  <p className="text-muted-foreground mt-1">{reward.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Badge variant="outline" className="text-sm">
                      {reward.discount}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Partners: {reward.partners.join(", ")}
                  </p>
                </div>

                <Button className="w-full" variant={reward.points > 1250 ? "outline" : "default"}>
                  {reward.points > 1250 ? "Not Enough Points" : "Redeem Now"}
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}