import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from 'lucide-react'

interface Webinar {
  id: string
  title: string
  date: string
  time: string
  speaker: string
  registrationLink: string
}

interface WebinarSectionProps {
  webinars: Webinar[]
}

export default function WebinarSection({ webinars }: WebinarSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Próximos Webinars y Conferencias</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {webinars.map((webinar) => (
          <Card key={webinar.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{webinar.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  {new Date(webinar.date).toLocaleDateString()}
                </p>
                <p className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  {webinar.time}
                </p>
                <p className="flex items-center text-gray-600">
                  <User className="h-5 w-5 mr-2" />
                  {webinar.speaker}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={webinar.registrationLink} target="_blank" rel="noopener noreferrer">
                  Registrarse
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

