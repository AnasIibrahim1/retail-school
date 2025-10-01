"use client"
import { useState, useEffect, useRef, useMemo } from 'react'
import InstructorCard from '../Cards/InstructorCard/InstructorCard'
import './style.css'

interface Instructor {
  id: string;
  name: string;
  jobTitle: string;
  image: string;
  href: string;
}

interface InstructorsSectionProps {
  instructors: Instructor[];
}

export default function InstructorsSection({ instructors }: InstructorsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [containerWidth, setContainerWidth] = useState(0)
  const gridRef = useRef<HTMLDivElement | null>(null)
  
  const CARD_WIDTH = 280
  const GAP = 12
  
  const PAGE_SIZE = useMemo(() => {
    if (!containerWidth) return 4
    const fit = Math.max(1, Math.floor((containerWidth + GAP) / (CARD_WIDTH + GAP)))
    return fit
  }, [containerWidth])

  useEffect(() => {
    if (!gridRef.current) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect
        setContainerWidth(cr.width)
      }
    })
    ro.observe(gridRef.current)
    return () => ro.disconnect()
  }, [])

  const pageCount = Math.max(1, Math.ceil(instructors.length / PAGE_SIZE))
  const pagedInstructors = instructors.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <div className="instructors-section">
      <div className="instructors-grid-wrap">
        <button
          className={`instructor-pager-arrow instructor-pager-arrow--left ${currentPage > 1 ? 'is-active' : ''}`}
          aria-label='Previous page'
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M16 10H4"/>
            <path d="M8 6L4 10L8 14"/>
          </svg>
        </button>
        
        <div className='instructors-grid' ref={gridRef}>
          {pagedInstructors.map((instructor, index) => (
            <InstructorCard
              key={instructor.id}
              name={instructor.name}
              jobTitle={instructor.jobTitle}
              image={instructor.image}
              href={instructor.href}
              index={index}
            />
          ))}
        </div>
        
        <button
          className={`instructor-pager-arrow instructor-pager-arrow--right ${currentPage < pageCount ? 'is-active' : ''}`}
          aria-label='Next page'
          disabled={currentPage === pageCount}
          onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4 10H16"/>
            <path d="M12 6L16 10L12 14"/>
          </svg>
        </button>
      </div>
      
      <div className='instructors-pagination' role='navigation' aria-label='Pagination'>
        <div className='instructor-pager-dots' role='tablist' aria-label='Pages'>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              className={`instructor-pager-dot ${p === currentPage ? 'is-active' : ''}`}
              onClick={() => setCurrentPage(p)}
              aria-label={`Page ${p}`}
              aria-current={p === currentPage ? 'page' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

