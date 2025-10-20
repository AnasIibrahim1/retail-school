"use client"
import { useState } from 'react'
import NewsCard from '../cards/NewsCard/NewsCard'
import GradiantButton from '../Buttons/GrediantButton/GradiantButton'
import './style.css'

interface NewsItem {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image: string;
  href: string;
}

interface NewsSectionProps {
  news: NewsItem[];
  initialCount?: number;
}

export default function NewsSection({ news, initialCount = 8 }: NewsSectionProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount)

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, news.length))
  }

  const visibleNews = news.slice(0, visibleCount)
  const hasMore = visibleCount < news.length

  return (
    <div className="news-section">
      <div className="news-grid">
        {visibleNews.map((item, index) => (
          <NewsCard
            key={item.id}
            title={item.title}
            author={item.author}
            date={item.date}
            image={item.image}
            href={item.href}
            index={index}
          />
        ))}
      </div>

      {hasMore && (
        <div className="news-show-more">
          <GradiantButton href="#"
            text="Show More" 
            ariaLabel="Show more news"
            onClick={handleShowMore}
          />
        </div>
      )}
    </div>
  )
}

