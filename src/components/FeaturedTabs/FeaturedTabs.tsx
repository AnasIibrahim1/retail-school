"use client"
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import './style.css';

const TABS = [
  { label: "All Categories", key: "all" },
  { label: "Art", key: "art" },
  { label: "Exercise", key: "exercise" },
  { label: "Music", key: "music" },
  { label: "Software Development", key: "software" },
];

export type FeaturedTabsProps = {
  onChange?: (key: string) => void;
  initial?: string;
};

export default function FeaturedTabs({ onChange, initial = TABS[0].key }: FeaturedTabsProps) {
  const [selected, setSelected] = useState<string>(initial);

  const handleSelect = (key: string) => {
    setSelected(key);
    onChange?.(key);
  };

  return (
    <nav className="featured-tabs" aria-label="Featured categories">
      <ul className="featured-tabs__list">
        {TABS.map((tab) => {
          const isActive = tab.key === selected;
          return (
            <motion.li
              key={tab.key}
              className={`featured-tabs__item ${isActive ? 'is-active' : ''}`}
              initial={false}
              animate={{}}
              transition={{ duration: 0.2 }}
              onClick={() => handleSelect(tab.key)}
            >
              <span className="featured-tabs__label">{tab.label}</span>
              {isActive ? (
                <motion.div className="featured-tabs__underline" layoutId="featured-underline" />
              ) : null}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}


