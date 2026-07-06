"use client";

import { motion } from "framer-motion";
import {
  GlobalSearchIcon,
  SmartPhone01Icon,
  CheckmarkCircle01Icon,
  DashboardSquare01Icon,
  MagicWandIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "../../lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

const FEATURES = [
  {
    id: "varunya",
    label: "Varunya Technologies",
    icon: MagicWandIcon,
    image: "/project_thumb/Varunya_thumbnail.png",
    description: "A modern digital agency website showcasing custom AI solutions and premium web development.",
    link: "https://varunyatechnologies.com/",
    repo: "Private",
  },
  {
    id: "manasvi",
    label: "Manasvi Fashion",
    icon: SmartPhone01Icon,
    image: "/project_thumb/manasvi_thumbnail.png",
    description: "An elegant fashion e-commerce platform built with product variants and robust checkout experience.",
    link: "https://manasvifashionsurat.com/",
    repo: "Private",
  },
  {
    id: "exhibition",
    label: "Textile Exhibition",
    icon: GlobalSearchIcon,
    image: "/project_thumb/STE_thumbnail.png",
    description: "A premium B2B event platform designed to connect global textile buyers and local Surat exhibitors.",
    link: "https://stefinalprototype.vercel.app/",
    repo: "Private",
  },
  {
    id: "shiveshwar",
    label: "Shiveshwar Textiles",
    icon: CheckmarkCircle01Icon,
    image: "/project_thumb/Shivehswar_textiles.png",
    description: "A professional corporate website featuring global export capabilities and textile product catalogs.",
    link: "https://www.shiveshwartextiles.com/",
    repo: "Private",
  },
  {
    id: "nifty",
    label: "Nifty Pulse",
    icon: DashboardSquare01Icon,
    image: "/project_thumb/Nifty%20Pulse.png",
    description: "An intelligent FinTech analytics dashboard providing real-time market data visualizations.",
    link: "https://root-six-gamma.vercel.app/",
    repo: "https://github.com/princepatel04477-web/",
  },
];

const ITEM_HEIGHT = 65;

interface FeatureCarouselProps {
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
}

export function FeatureCarousel({ currentIndex = 0, onIndexChange }: FeatureCarouselProps) {
  const handleChipClick = (index: number) => {
    if (onIndexChange) {
      onIndexChange(index);
    }
  };

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return "active";
    if (diff === -1) return "prev";
    if (diff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="carousel-outer-wrapper">
      <div className="carousel-container">
        <div className="carousel-left-panel">
          <div className="carousel-fade-top" />
          <div className="carousel-fade-bottom" />
          <div className="carousel-chips-container">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    top: `calc(50% - ${ITEM_HEIGHT / 2}px)`,
                  }}
                  animate={{
                    y: distance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(distance) * 0.25,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="carousel-chip-wrapper"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    className={cn(
                      "carousel-chip-button",
                      isActive && "active"
                    )}
                  >
                    <div className="carousel-chip-icon">
                      <HugeiconsIcon
                        icon={feature.icon}
                        size={18}
                        strokeWidth={2}
                      />
                    </div>

                    <span>
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="carousel-right-panel">
          <div className="carousel-card-frame">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                    mass: 0.8,
                  }}
                  className={cn(
                    "carousel-card",
                    isActive && "active"
                  )}
                >
                  <div className="carousel-card-image-container">
                    <img
                      src={feature.image}
                      alt={feature.label}
                      className="carousel-card-image"
                    />
                  </div>

                  <div className="carousel-card-info-panel">
                    <div>
                      <div className="carousel-card-badge">
                        {index + 1} • {feature.label}
                      </div>
                      <p className="carousel-card-desc">
                        {feature.description}
                      </p>
                    </div>

                    <div className="carousel-card-links-row">
                      {feature.link && (
                        <a
                          href={feature.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="carousel-project-link-button"
                          style={{
                            flex: 1,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            backgroundColor: "#C5A880",
                            color: "#08080c",
                            padding: "0.75rem 1.25rem",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            fontSize: "13px",
                            fontWeight: 600,
                            pointerEvents: "auto",
                            transition: "all 0.2s ease"
                          }}
                        >
                          <span>Live Website</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </a>
                      )}
                      
                      {feature.repo === "Private" ? (
                        <span className="carousel-repo-badge private">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                          Private
                        </span>
                      ) : (
                        <a
                          href={feature.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="carousel-project-link repo"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.3rem",
                            backgroundColor: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            color: "#ffffff",
                            padding: "0.75rem 1.25rem",
                            borderRadius: "9999px",
                            textDecoration: "none",
                            fontSize: "13px",
                            fontWeight: 500,
                            pointerEvents: "auto",
                            transition: "all 0.2s ease"
                          }}
                        >
                          <span>Code</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
