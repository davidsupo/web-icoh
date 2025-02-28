import { Footer } from "@/components/Footer"
import Abstracts from "./abstract"

export default function AbstractsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Abstracts />
      </main>
      <Footer />
    </div>
  )
}
