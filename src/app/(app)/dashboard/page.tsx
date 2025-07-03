import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Clock, Target, TrendingUp } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Mission Control</h2>
        <p className="text-muted-foreground">Welcome back, adventurer!</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Habits
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 of 5 completed</div>
            <p className="text-xs text-muted-foreground">
              Keep up the great work!
            </p>
            <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>15 min workout</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>Read 10 pages</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-primary"/><span>No junk food</span></div>
                <div className="flex items-center gap-3 opacity-60"><Circle className="h-5 w-5"/><span>Morning Hydration</span></div>
                <div className="flex items-center gap-3 opacity-60"><Circle className="h-5 w-5"/><span>Plan tomorrow</span></div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Tasks
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 Critical Tasks</div>
             <p className="text-xs text-muted-foreground">
              Due in the next 24 hours
            </p>
            <ul className="mt-6 space-y-3 list-disc list-inside text-sm">
                <li>Finish project proposal for QuestForge</li>
                <li>Call the blacksmith about enchanted sword</li>
                <li>Buy dragon scales from the market</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88%</div>
            <p className="text-xs text-muted-foreground">
              On track to meet your weekly goal
            </p>
             <Progress value={88} className="mt-6 h-3 [&>div]:bg-accent" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
