"use client"
import GradiantButton from '@/components/Buttons/GrediantButton/GradiantButton';
import Wave from '@/components/AnimationShapes/Wave/Wave';

import './style.css';
import Circle from '@/components/AnimationShapes/Circle/Circle';
import HoverWords from '@/components/HoverWords/HoverWords';

export default function Home() {

  return (
<>
{/* Landing page */}
<section className='landing-page'>
<div className='landing-page-content'>
<HoverWords
  text="Find the Best Courses"
  style={{fontSize: 'calc(2rem + 2vw)', fontWeight: 700, color: '#2A254D'}}
/>
  <p>Technology is bringing a massive wave of evolution on learning 
  things in different ways.</p>
  <GradiantButton href="/courses" ariaLabel="Courses" text="View Courses" padding="20px 30px" /> 
</div>
<div style={{width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative',minWidth: '600px'}}>
  <div className="circles"></div>
<Circle/>
  </div>


<div className="wave">
  <Wave/>
</div>

</section>
</>
  );
}