import React, { useState, useRef } from 'react';
import styles from './Roadmap.module.css';

interface RoadmapItem {
  id: string;
  category: 'governance' | 'research';
  title: string;
  status: 'complete' | 'in-progress' | 'scheduled';
}

interface Quarter {
  id: string;
  label: string;
  items: RoadmapItem[];
}

const roadmapData: Quarter[] = [
  {
    id: 'q1-2025',
    label: 'Q1 2025',
    items: [
      {
        id: 'initial-delegate',
        category: 'governance',
        title: 'Initial Delegate Selection',
        status: 'complete',
      },
      {
        id: 'agora-contract',
        category: 'governance',
        title: 'Agora Contract',
        status: 'complete',
      },
      {
        id: 'backend-contracts',
        category: 'governance',
        title: 'Backend Contracts',
        status: 'complete',
      },
      {
        id: 'first-meetings',
        category: 'governance',
        title: 'First Delegate Meetings, Form Working Groups',
        status: 'complete',
      },
      {
        id: 'audit-backend',
        category: 'governance',
        title: 'Audit Backend',
        status: 'complete',
      },
    ],
  },
  {
    id: 'q2-2025',
    label: 'Q2 2025',
    items: [
      {
        id: 'research-practices',
        category: 'governance',
        title: 'Research Best Practices, Constitution',
        status: 'in-progress',
      },
      {
        id: 'first-proposals',
        category: 'governance',
        title: 'First Draft Proposals',
        status: 'in-progress',
      },
      {
        id: 'finalize-params',
        category: 'governance',
        title: 'Finalize HoS 1.0 & 2.0 Params',
        status: 'in-progress',
      },
      {
        id: 'hire-governance',
        category: 'governance',
        title: 'Hire Head of Governance',
        status: 'in-progress',
      },
      {
        id: 'hos-alpha',
        category: 'governance',
        title: 'HoS Alpha Complete',
        status: 'scheduled',
      },
      {
        id: 'hos-alpha-research',
        category: 'research',
        title: 'HoS Alpha Complete',
        status: 'scheduled',
      },
    ],
  },
  {
    id: 'q3-2025',
    label: 'Q3 2025',
    items: [
      {
        id: 'research-practices-q3',
        category: 'governance',
        title: 'Research Best Practices, Constitution',
        status: 'in-progress',
      },
      {
        id: 'first-proposals-q3',
        category: 'governance',
        title: 'First Draft Proposals',
        status: 'in-progress',
      },
      {
        id: 'finalize-params-q3',
        category: 'governance',
        title: 'Finalize HoS 1.0 & 2.0 Params',
        status: 'in-progress',
      },
      {
        id: 'hire-governance-q3',
        category: 'governance',
        title: 'Hire Head of Governance',
        status: 'in-progress',
      },
      {
        id: 'hos-alpha-q3',
        category: 'governance',
        title: 'HoS Alpha Complete',
        status: 'scheduled',
      },
      {
        id: 'hos-alpha-research-q3',
        category: 'research',
        title: 'HoS Alpha Complete',
        status: 'scheduled',
      },
    ],
  },
  {
    id: 'q4-2025',
    label: 'Q4 2025',
    items: [
      {
        id: 'research-practices-q4',
        category: 'governance',
        title: 'Research Best Practices, Constitution',
        status: 'in-progress',
      },
      {
        id: 'first-proposals-q4',
        category: 'governance',
        title: 'First Draft Proposals',
        status: 'in-progress',
      },
      {
        id: 'finalize-params-q4',
        category: 'governance',
        title: 'Finalize HoS 1.0 & 2.0 Params',
        status: 'in-progress',
      },
      {
        id: 'hire-governance-q4',
        category: 'governance',
        title: 'Hire Head of Governance',
        status: 'in-progress',
      },
      {
        id: 'hos-alpha-q4',
        category: 'governance',
        title: 'HoS Alpha Complete',
        status: 'scheduled',
      },
      {
        id: 'hos-alpha-research-q4',
        category: 'research',
        title: 'HoS Alpha Complete',
        status: 'scheduled',
      },
    ],
  },
];

const Roadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine current quarter based on current date
  const getCurrentQuarter = () => {
    const now = new Date();
    const month = now.getMonth() + 1; // getMonth() returns 0-11
    const year = now.getFullYear();
    
    if (year < 2025) return -1;
    if (year > 2025) return 4;
    
    // For 2025
    if (month <= 3) return 0; // Q1
    if (month <= 6) return 1; // Q2
    if (month <= 9) return 2; // Q3
    return 3; // Q4
  };

  const currentQuarter = getCurrentQuarter();

  const handlePrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.roadmapSection}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Roadmap</h2>
          <div className={styles.navigationControls}>
            <button 
              className={styles.navButton} 
              aria-label="Previous"
              onClick={handlePrevious}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 24L12 16L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className={styles.navButton} 
              aria-label="Next"
              onClick={handleNext}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24L20 16L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.divider} />
      </div>

      <div className={styles.roadmapContent}>
        <div className={styles.timelineContainer} ref={containerRef}>
          {roadmapData.map((quarter, quarterIndex) => (
            <div key={quarter.id} className={styles.quarterColumn}>
              <div className={styles.quarterHeader}>
                <div className={styles.timelineLine} />
                <div className={`${styles.timelineDot} ${quarterIndex === currentQuarter ? styles.current : ''}`} />
                <div className={styles.timelineLine} />
              </div>
              <h3 className={styles.quarterLabel}>{quarter.label}</h3>
              <div className={styles.cardsContainer}>
                {quarter.items.map((item) => (
                  <div key={item.id} className={styles.roadmapCard}>
                    <div className={styles.cardContent}>
                      <div className={styles.categoryBadge}>
                        <span className={`${styles.categoryText} ${styles[item.category]}`}>
                          {item.category === 'governance' ? 'GOVERNANCE & PRODUCT' : 'AI & RESEARCH'}
                        </span>
                      </div>
                      <h4 className={styles.cardTitle}>{item.title}</h4>
                    </div>
                    <div className={`${styles.statusBadge} ${styles[item.status]}`}>
                      {item.status === 'complete' && (
                        <>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 4L6 12L2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Complete</span>
                        </>
                      )}
                      {item.status === 'in-progress' && (
                        <>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2"/>
                            <path d="M8 4V8L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>In Progress</span>
                        </>
                      )}
                      {item.status === 'scheduled' && (
                        <>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2"/>
                            <path d="M3 7H13" stroke="currentColor" strokeWidth="2"/>
                            <path d="M6 2V4M10 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>Scheduled</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;