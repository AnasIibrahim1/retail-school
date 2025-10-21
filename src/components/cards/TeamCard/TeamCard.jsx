import React from 'react'
import './TeamCard.css'
import SocialButtons from '@/components/Buttons/Solcial Buttons/SocialButtons'

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.job
 * @param {string} props.image - public path or URL
 * @param {Array<{icon: React.ReactNode, href: string}>} props.socials
 * @param {Function} props.onAction - called when the action is pressed
 */
export default function TeamCard({ name, job, image, socials = [], onAction }) {
  return (
    <div className="team-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="team-card-overlay">
        <div className="team-card-info">
          <h3 className="team-card-name">{name}</h3>
          <p className="team-card-job">{job}</p>
        </div>
        <div className="team-card-socials">
          {socials.map((s, idx) => (
            <a key={idx} href={s.href} target="_blank" rel="noreferrer">
              <SocialButtons backgroundColor="transparent" borderColor="#ffffff" icon={s.icon} />
            </a>
          ))}
        </div>
        <button className="team-card-action" aria-label="Open profile" onClick={onAction}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  )
}
