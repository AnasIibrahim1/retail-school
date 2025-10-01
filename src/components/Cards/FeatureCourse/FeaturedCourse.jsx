"use client"
import OverlayIconButton, { EyeIcon, HeartIcon } from "@/components/Buttons/OverlayIconButton/OverlayIconButton";
import { BookIcon, ClockIcon } from "./icons";
import "./style.css";

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
                <img className=" g" src={image} alt={title} />
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


