import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export interface Newsletter {
  type: "newsletter"
  title: string
  subtitle: string
  description: string
  description2: string
  year: string
  volume: string
  buttonText: string
  pdfUrl: string,
  imageUrl?: string
  maxWidth?: string
}

export interface Article {
  type: "article"
  title: string
  author: string
  description: string
  buttonText: string
  pdfUrl: string,
  imageUrl?: string,
  maxWidth?: string
}

interface ArticlesSectionProps {
  articles: (Newsletter | Article)[]
  sectionTitle: string
}

export default function ArticlesSection({ articles, sectionTitle }: ArticlesSectionProps) {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold text-[--primary] mb-6 sm:mb-8 font-open">{sectionTitle}</h2>
      <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2">
        {articles.map((article, index) => (
          <Card key={index} className={`${
  article.imageUrl
    ? 'md:col-span-2'
    : ''
} ${article.imageUrl ? 'flex flex-col md:flex-row' : 'flex flex-col'}`}>
  
  <div className={`${article.imageUrl ? 'flex-1' : 'w-full'} flex flex-col`}>
    <CardHeader className="p-4 sm:p-6">
      <CardTitle className="text-lg sm:text-xl font-open font-semibold text-[--accent] line-clamp-2">
        {article.title}
      </CardTitle>
      {article.type === "newsletter" && (
        <p className="text-sm font-work font-semibold text-gray-700 mt-2">
          {article.subtitle} - {article.year} {article.volume}
        </p>
      )}
      {article.type === "article" && article.author && (
        <p className="text-sm font-work font-semibold text-gray-700 mt-2">Por: {article.author}</p>
      )}
    </CardHeader>
    <CardContent className="flex-grow p-4 sm:p-6 pt-0 sm:pt-0">
      <p className="text-sm sm:text-base text-gray-600 mb-4">{article.description}</p>
      {article.type === "newsletter" && article.description2 && (
        <p className="text-sm sm:text-base text-gray-600">{article.description2}</p>
      )}
    </CardContent>
    { article.imageUrl && (
    <div className="p-4 sm:p-6 flex items-center sm:hidden justify-center">
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        className={`w-full max-w-[${article.maxWidth || '300'}px] object-cover rounded-md`}
      />
    </div>
  )}
    { article.buttonText && (<CardFooter className="p-4 sm:p-6">
      <Button
        asChild
        className="w-full sm:w-auto bg-[--primary] text-white hover:bg-[--accent] text-sm sm:text-base"
      >
        <a
          href={article.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          {article.type === "newsletter" ? (
            <Download className="h-4 w-4 mr-2" />
          ) : (
            <FileText className="h-4 w-4 mr-2" />
          )}
          {article.buttonText}
        </a>
      </Button>
    </CardFooter>) }
  </div>
  
  { article.imageUrl && (
    <div className="p-4 sm:p-6 flex items-center hidden sm:block justify-center">
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        className={`w-full max-w-[${article.maxWidth || '300'}px] object-cover rounded-md`}
      />
    </div>
  )}
</Card>
        ))}
      </div>
    </section>
  )
}

