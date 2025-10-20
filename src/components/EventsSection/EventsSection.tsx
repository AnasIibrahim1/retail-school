"use client"
import EventCard from '../cards/EventCard/EventCard'
import './style.css'

interface Event {
  id: string;
  title: string;
  time: string;
  location: string;
  date: {
    day: string;
    month: string;
  };
  image: string;
  href: string;
}

interface EventsSectionProps {
  events: Event[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <div className="events-section">
      <div className="events-grid">
        {events.map((event, index) => (
          <EventCard
            key={event.id}
            title={event.title}
            time={event.time}
            location={event.location}
            date={event.date}
            image={event.image}
            href={event.href}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

