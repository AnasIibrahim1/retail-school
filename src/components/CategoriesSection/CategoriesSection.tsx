"use client"
import { useState, useEffect } from 'react'
import CategoryCard from '../Cards/CategoryCard/CategoryCard'
import './style.css'

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
}

interface CategoriesSectionProps {
  categories: Category[];
}

export default function CategoriesSection({ categories }: CategoriesSectionProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(6)

  // Detect if we're on mobile/tablet
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2) // Mobile: 2 items per page
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(4) // Tablet: 4 items per page
      } else {
        setItemsPerPage(6) // Desktop: show all
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const pageCount = Math.ceil(categories.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCategories = categories.slice(startIndex, endIndex)

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage(prev => Math.min(pageCount, prev + 1))
  }

  return (
    <div className="categories-section">
      <div className="categories-grid">
        {currentCategories.map((category, index) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            icon={category.icon}
            href={category.href}
            index={index}
          />
        ))}
      </div>

      {/* Pagination (only show on mobile/tablet) */}
      {pageCount > 1 && (
        <div className="categories-pagination">
          <button
            className={`cat-pager-arrow cat-pager-arrow--left ${currentPage > 1 ? 'is-active' : ''}`}
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M16 10H4"/>
              <path d="M8 6L4 10L8 14"/>
            </svg>
          </button>

          <div className="cat-pager-dots">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`cat-pager-dot ${page === currentPage ? 'is-active' : ''}`}
                onClick={() => setCurrentPage(page)}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              />
            ))}
          </div>

          <button
            className={`cat-pager-arrow cat-pager-arrow--right ${currentPage < pageCount ? 'is-active' : ''}`}
            onClick={handleNext}
            disabled={currentPage === pageCount}
            aria-label="Next page"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10H16"/>
              <path d="M12 6L16 10L12 14"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

