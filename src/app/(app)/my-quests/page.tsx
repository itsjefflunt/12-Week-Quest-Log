import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function MyQuestsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">My Quests</h2>
      </div>
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Your Epic Sagas</CardTitle>
          <CardDescription>
            This is where your list of 12-week quests will be forged. This part of the realm is still under construction.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Check back soon to begin your legendary journey!</p>
        </CardContent>
      </Card>
    </div>
  )
}
