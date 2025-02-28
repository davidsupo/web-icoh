import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
}

interface UpcomingEventsSectionProps {
  events: Event[]
  title: string
  subtitle: string
}

export default function UpcomingEventsSection({ events, title, subtitle }: UpcomingEventsSectionProps) {
  return (
    <section className="mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-[--primary] mb-3 sm:mb-4 font-open">{title}</h2>
      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 font-work">{subtitle}</p>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl font-semibold text-[--accent] font-open">
                {event.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow p-4 sm:p-6 pt-0 sm:pt-0">
              <div className="space-y-3">
                <p className="flex items-center text-sm sm:text-base text-gray-600 font-work">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                  {event.date}
                </p>
                <p className="flex items-center text-sm sm:text-base text-gray-600 font-work">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                  {event.time}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

