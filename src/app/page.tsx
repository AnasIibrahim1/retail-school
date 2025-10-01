"use client"

import GradiantButton from '@/components/Buttons/GrediantButton/GradiantButton';
import Wave from '@/components/AnimationShapes/Wave/Wave';
import Circle from '@/components/AnimationShapes/Circle/Circle';
import HoverWords from '@/components/HoverWords/HoverWords';
import FeaturedTabs from '@/components/FeaturedTabs/FeaturedTabs';
import React, { useMemo, useState } from 'react';
import FeaturedCourse from '@/components/Cards/FeatureCourse/FeaturedCourse';

import './style.css';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

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
    setSelectedTab(key);
    setCurrentPage(1);
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
<section className='featured-courses'>
  <div className='featured-courses-title'>
    <div className='featured-courses-heading'>
      <HoverWords
        text="Featured Courses"
        style={{fontSize: 'calc(1rem + 2vw)', fontWeight: 700, color: '#2A254D'}}
      />
      <HoverWords
        text="Discover your perfect program in our courses."
        style={{fontSize: 'calc(0.5rem + 0.5vw)', fontWeight: 400, color: '#77838F'}}
      />
    </div>
    <FeaturedTabs onChange={handleTabChange} initial={selectedTab} />
  </div>
  <div className='featured-courses-content' aria-live='polite'>
    <div className='featured-grid-wrap'>
      <button
        className={`pager-arrow pager-arrow--left ${currentPage > 1 ? 'is-active' : ''}`}
        aria-label='Previous page'
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M16 10H4"/>
          <path d="M8 6L4 10L8 14"/>
        </svg>
      </button>
      <div className='featured-grid' ref={gridRef}>
      {pagedItems.map((txt) => (
        <FeaturedCourse key={txt} />
      ))}
      </div>
      <button
        className={`pager-arrow pager-arrow--right ${currentPage < pageCount ? 'is-active' : ''}`}
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
    <div className='featured-pagination' role='navigation' aria-label='Pagination'>
      <div className='pager-dots' role='tablist' aria-label='Pages'>
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            className={`pager-dot ${p === currentPage ? 'is-active' : ''}`}
            onClick={() => setCurrentPage(p)}
            aria-label={`Page ${p}`}
            aria-current={p === currentPage ? 'page' : undefined}
          />
        ))}
      </div>
    </div>
  </div>


</section>
</>
  );
}