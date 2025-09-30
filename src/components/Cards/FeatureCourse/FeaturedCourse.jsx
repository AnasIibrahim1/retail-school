"use client"
import OverlayIconButton, { EyeIcon, HeartIcon } from "@/components/Buttons/OverlayIconButton/OverlayIconButton";

const BookIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="16" height="16" {...props}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5V5a2 2 0 0 1 2-2h14z"/>
    </svg>
);

const ClockIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="16" height="16" {...props}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
    </svg>
);

export default function FeaturedCourse({
    image = "/test/photo.jpg",
    best_seller = true,
    category = "Photography",
    title = "Fashion Photography From Professional",
    rating = 4.87,
    reviews = 3800,
    lessons = 5,
    duration = "8h 12m",
    price = 415.99,
    oldPrice = 959,
    authorAvatar = "/test/ppl.png",
}) {
    return (
        <article className="fc-card">
            <div className="fc-media">
                <img className="fc-img" src={image} alt={title} />
                <div className="fc-media-bottom">
                {best_seller && <span className="fc-badge">BEST SELLER</span>}
                </div>
                <div className="fc-media-top">
                    <div className="fc-actions">
                        <OverlayIconButton label="Preview" Icon={EyeIcon} />
                        <OverlayIconButton label="Wishlist" Icon={HeartIcon} />
                    </div>
                </div>
            </div>
            <div className="fc-content">
                <div className="fc-author">
                    <div className="fc-avatar-wrap">
                        <img className="fc-avatar" src={authorAvatar} alt="Author" />
                        <span className="fc-avatar-ring" />
                    </div>
                </div>
                <div className="fc-meta">{category}</div>
                <h3 className="fc-title">{title}</h3>
                <div className="fc-rating">
                    <span className="fc-stars">★★★★★</span>
                    <span className="fc-reviews">{rating} ({Math.round(reviews/100)/10}k+ Reviews)</span>
                </div>
                <div className="fc-row">
                    <span style={{display:'inline-flex',alignItems:'center',gap:6}}><BookIcon/> {lessons} lessons</span>
                    <span style={{display:'inline-flex',alignItems:'center',gap:6}}><ClockIcon/> {duration}</span>
                    <div className="fc-price">
                        {oldPrice ? <del className="fc-old">${oldPrice}</del> : null}
                        <span className="fc-new">${price}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}


