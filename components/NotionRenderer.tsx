"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface NotionRendererProps {
  notionPageId: string
  className?: string
}

export function NotionRenderer({ notionPageId, className }: NotionRendererProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading Notion content
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [notionPageId])

  return (
    <div className={`notion-content ${className || ""}`}>
      {isLoading ? (
        <div className="space-y-4 p-4">
          <div className="h-8 bg-muted rounded animate-pulse w-3/4"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-4/5"></div>
          <div className="h-32 bg-muted rounded animate-pulse w-full mt-6"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-full mt-6"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-4/5"></div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-muted-foreground">
            This is a placeholder for Notion content. In a real implementation, this would render the actual content
            from Notion using the Notion API.
          </p>
          <p className="text-muted-foreground">
            The content would include rich text, images, code blocks, and other elements from the Notion page with ID:{" "}
            <code>{notionPageId}</code>
          </p>
        </motion.div>
      )}
    </div>
  )
}
