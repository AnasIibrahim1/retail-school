/* eslint-disable @next/next/no-img-element */
"use client"

import GradiantButton from '@/components/Buttons/GrediantButton/GradiantButton';
import Wave from '@/components/AnimationShapes/Wave/Wave';
import Circle from '@/components/AnimationShapes/Circle/Circle';
import HoverWords from '@/components/HoverWords/HoverWords';
import FeaturedTabs from '@/components/FeaturedTabs/FeaturedTabs';
import React, { useMemo, useState } from 'react';
import FeaturedCourse from '@/components/cards/FeatureCourse/FeaturedCourse';
import CategoriesSection from '@/components/CategoriesSection/CategoriesSection';
import EventsSection from '@/components/EventsSection/EventsSection';
import NewsSection from '@/components/NewsSection/NewsSection';
import InstructorsSection from '@/components/InstructorsSection/InstructorsSection';
import SubscribeSection from '@/components/SubscribeSection/SubscribeSection';
import { categories } from '@/data/categories';
import { upcomingEvents } from '@/data/events';
import { latestNews } from '@/data/news';
import { topInstructors } from '@/data/instructors';

import './style.css';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const gridRef = React.useRef<HTMLDivElement | null>(null);
  const CARD_WIDTH = 320;
  const GAP = 12;
  const PAGE_SIZE = useMemo(() => {
    if (!containerWidth) return 3;
    const fit = Math.max(1, Math.floor((containerWidth + GAP) / (CARD_WIDTH + GAP)));
    return fit;
  }, [containerWidth]);

  const itemsByTab = useMemo(() => {
    const make = (prefix: string) => Array.from({ length: 15 }, (_, i) => `${prefix} ${i + 1}`);
    return {
      all: make('text'),
      art: make('art'),
      exercise: make('exercise'),
      music: make('music'),
      software: make('software'),
    } as Record<string, string[]>;
  }, []);

  const allItems = itemsByTab[selectedTab] ?? [];
  const pageCount = Math.max(1, Math.ceil(allItems.length / PAGE_SIZE));
  const pagedItems = allItems.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  React.useEffect(() => {
    if (!gridRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        setContainerWidth(cr.width);
      }
    });
    ro.observe(gridRef.current);
    return () => ro.disconnect();
  }, []);

  const handleTabChange = (key: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedTab(key);
      setCurrentPage(1);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
<>
{/* Landing page */}
<section className='landing-page'>
<div className='landing-page-content'>
<HoverWords
  text="Find the Best Courses"
  style={{fontWeight: 700, color: '#2A254D'}}
/>
  <p>Technology is bringing a massive wave of evolution on learning 
  things in different ways.</p>
  <GradiantButton href="/courses" ariaLabel="Courses" text="View Courses" padding="20px 30px" /> 
</div>
<div className='landing-page-circle' style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative',minWidth: '400px'}}>
  <div className="circle-1 circu">
  </div>
  <div className="circle-2 circu"></div>
  <div className="circle-3 circu"></div>
  <div className="circle-4 circu"></div>
<div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative',zIndex: 2}}>
<Circle/>
</div>
<div className='landing-page-circle-dots' style={{position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', zIndex: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', transform:'rotate(180deg)'}}>
  <img src="/shapes/pattern_bg.svg" alt="" style={{width: '100%', height: '100%'}} />
</div>
  </div>


<div style={{position: 'absolute', top: 0, left: 0, zIndex: 0, height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', transform:'rotate(180deg)'}}>
  <img src="/shapes/slider_body.svg" alt="" />
</div>
<div className="wave">
  <Wave/>
</div>

</section>

{/* Featured Courses */}
<section className='featured-courses unpad bm'>
  <div className='featured-courses-title'>
    <div className='titles-wrap'>
      <HoverWords
        text="Featured Courses"
        style={{fontSize: 'calc(1.1rem + 2vw)', fontWeight: 700, color: '#2A254D'}}
      />
        <p>Discover your perfect program in our courses.</p>
    </div>
    <FeaturedTabs onChange={handleTabChange} initial={selectedTab} />
  </div>
  <div className='featured-courses-content' aria-live='polite'>
    <div className='featured-grid-wrap'>
      <button
        className={`pager-arrow pager-arrow--left ${currentPage > 1 ? 'is-active' : ''}`}
        aria-label='Previous page'
        disabled={currentPage === 1}
        onClick={handlePrevPage}
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M16 10H4"/>
          <path d="M8 6L4 10L8 14"/>
        </svg>
      </button>
      <div className={`featured-grid ${isTransitioning ? 'page-transition' : ''}`} ref={gridRef}>
      {pagedItems.map((txt) => (
        <FeaturedCourse key={txt} />
      ))}
      </div>
      <button
        className={`pager-arrow pager-arrow--right ${currentPage < pageCount ? 'is-active' : ''}`}
        aria-label='Next page'
        disabled={currentPage === pageCount}
        onClick={handleNextPage}
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M4 10H16"/>
          <path d="M12 6L16 10L12 14"/>
        </svg>
      </button>
    </div>
    <div className='featured-pagination' role='navigation' aria-label='Pagination'>
      <div className='pagination-wrapper'>
        <div className='page-counter' aria-live='polite'>
          <span className='current-page'>{currentPage}</span>
          <span className='page-separator'>/</span>
          <span className='total-pages'>{pageCount}</span>
        </div>
        <div className='pager-dots' role='tablist' aria-label='Pages'>
          <div className='pager-dots-container' style={{
            ['--active-index' as string]: currentPage - 1,
            ['--dot-count' as string]: pageCount
          }}>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`pager-dot ${p === currentPage ? 'is-active' : ''}`}
                onClick={() => handlePageChange(p)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft' && p > 1) {
                    handlePageChange(p - 1);
                  } else if (e.key === 'ArrowRight' && p < pageCount) {
                    handlePageChange(p + 1);
                  }
                }}
                aria-label={`Page ${p}`}
                aria-current={p === currentPage ? 'page' : undefined}
              />
            ))}
          </div>
          <div className='pagination-progress-bar'>
            <div className='pagination-progress-fill' style={{
              width: `${((currentPage) / pageCount) * 100}%`
            }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>


</section>

{/* Trending Categories */}
<section className='trending-categories bm'>
  <div className='titles-wrap'>
    <HoverWords
      text="Trending Categories"
      style={{fontSize: 'calc(1.1rem + 2vw)', fontWeight: 700, color: '#2A254D'}}
    />
    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
  </div>
  <CategoriesSection categories={categories} />
</section>

{/* Upcoming Events */}
<section className='upcoming-events bm'>
  <div className='titles-wrap'>
    <HoverWords
      text="Upcoming Events"
      style={{fontSize: 'calc(1.1rem + 2vw)', fontWeight: 700, color: '#2A254D'}}
    />
    <p>Join us for exciting learning opportunities and networking events.</p>
  </div>
  <EventsSection events={upcomingEvents} />
</section>

{/* latest News */}
<section className='latest-news bm'>
  <div className='titles-wrap'>
    <HoverWords
      text="Latest News"
      style={{fontSize: 'calc(1.1rem + 2vw)', fontWeight: 700, color: '#2A254D'}}
    />
    <p>Stay updated with the latest news and insights from our community.</p>
  </div>
  <NewsSection news={latestNews} />
</section>

{/* Top Rating instructors */}
<section className='top-rating-instructors bm'>
  <div className='titles-wrap'>
    <HoverWords
      text="Top Rating Instructors"
      style={{fontSize: 'calc(1.1rem + 2vw)', fontWeight: 700, color: '#2A254D'}}
    />
    <p>Meet our expert instructors who are passionate about teaching and learning.</p>
  </div>
  <InstructorsSection instructors={topInstructors} />
</section>

{/* Subscribe Ad */}
<section className='subscribe-ad bm'>
  <SubscribeSection />
</section>
</>
  );
}