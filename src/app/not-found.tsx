/* eslint-disable @next/next/no-img-element */
import GradiantButton from '@/components/Buttons/GrediantButton/GradiantButton'
import './style.css'

export default function NotFound() {
  return (
    <section style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '60px 20px',
      position: 'relative'
    }}>
        <div style={{position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0}}>
            <div className="circle-1 circu"></div>
            <div className="circle-2 circu"></div>
            <div className="circle-3 circu"></div>
            <div className="circle-4 circu"></div>
        </div>
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, display: 'flex', justifyContent: 'end'}}>
            <img src="/shapes/slider_body.svg" alt="404" />
        </div>
      <div style={{maxWidth: 640, position: 'relative', zIndex: 1}}>
        <div style={{
          fontSize: '8rem',
          fontWeight: 800,
          lineHeight: 1,
          color: '#2A254D',
          letterSpacing: '-0.04em'
        }}>404</div>
        <h1 style={{
          fontSize: '1.75rem',
          color: '#2A254D',
          margin: '10px 0 8px'
        }}>Page not found</h1>
        <p style={{
          color: '#77838F',
          marginBottom: 24
        }}>Sorry, we can’t find the page you’re looking for. It might have been moved or deleted.</p>
        <div style={{display:'flex', gap: 12, justifyContent:'center'}}>
<GradiantButton href="/" ariaLabel="Courses" text="Home" padding="12px 18px" />
<GradiantButton href="/courses" ariaLabel="Courses" text="Browse courses" padding="12px 18px" />
        </div>
      </div>
    </section>
  )
}


