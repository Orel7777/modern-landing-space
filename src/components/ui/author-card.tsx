
"use client"

import { cn } from "@/lib/utils"

interface AuthorCardProps {
  className?: string
  backgroundImage?: string
  author: {
    name: string
    avatar: string
    readTime?: string
  }
  content: {
    title: string
    description: string
  }
}

export const AuthorCard = ({ 
  className,
  backgroundImage,
  author,
  content
}: AuthorCardProps) => {
  return (
    <div className="max-w-xs w-full group/card mx-auto">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-60 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover",
          className
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60" />
      </div>
    </div>
  )
}
