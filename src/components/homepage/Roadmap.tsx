import React, { useRef, useState, useEffect } from 'react';
import styles from './Roadmap.module.css';
import {
  CiCircleCheck,
  CiPlay1,
  CiCalendar,
  CiCircleMore,
} from 'react-icons/ci';

interface RoadmapItem {
  id: string;
  title: string;
  status: string;
  statusColor: string;
  statusTextColor: string;
  category: 'governance' | 'research';
  issueNumber: number;
  quarter: string;
}

const Roadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(false);

  // Hardcoded roadmap data from Figma design
  const roadmapData: RoadmapItem[] = [
    // Q1 2025 - All Complete
    {
      id: '1',
      title: 'Initial Delegate Selection',
      status: 'Complete',
      statusColor: '#C7F5D8',
      statusTextColor: '#096D50',
      category: 'governance',
      issueNumber: 1,
      quarter: 'Q1 2025',
    },
    {
      id: '2',
      title: 'Agora Contract',
      status: 'Complete',
      statusColor: '#C7F5D8',
      statusTextColor: '#096D50',
      category: 'governance',
      issueNumber: 2,
      quarter: 'Q1 2025',
    },
    {
      id: '3',
      title: 'Backend Contracts',
      status: 'Complete',
      statusColor: '#C7F5D8',
      statusTextColor: '#096D50',
      category: 'governance',
      issueNumber: 3,
      quarter: 'Q1 2025',
    },
    {
      id: '4',
      title: 'First Delegate Meetings, Form Working Groups',
      status: 'Complete',
      statusColor: '#C7F5D8',
      statusTextColor: '#096D50',
      category: 'governance',
      issueNumber: 4,
      quarter: 'Q1 2025',
    },
    {
      id: '5',
      title: 'Audit Backend',
      status: 'Complete',
      statusColor: '#C7F5D8',
      statusTextColor: '#096D50',
      category: 'governance',
      issueNumber: 5,
      quarter: 'Q1 2025',
    },
    // Q2 2025 - Governance & Product Column
    {
      id: '6',
      title: 'Research Best Practices, Constitution',
      status: 'In Progress',
      statusColor: '#ADFCF3',
      statusTextColor: '#0282A2',
      category: 'governance',
      issueNumber: 6,
      quarter: 'Q2 2025',
    },
    {
      id: '7',
      title: 'First Draft Proposals',
      status: 'In Progress',
      statusColor: '#ADFCF3',
      statusTextColor: '#0282A2',
      category: 'governance',
      issueNumber: 7,
      quarter: 'Q2 2025',
    },
    {
      id: '8',
      title: 'Finalize HoS 1.0 & 2.0 Params',
      status: 'In Progress',
      statusColor: '#ADFCF3',
      statusTextColor: '#0282A2',
      category: 'governance',
      issueNumber: 8,
      quarter: 'Q2 2025',
    },
    {
      id: '9',
      title: 'Hire Head of Governance',
      status: 'In Progress',
      statusColor: '#ADFCF3',
      statusTextColor: '#0282A2',
      category: 'governance',
      issueNumber: 9,
      quarter: 'Q2 2025',
    },
    {
      id: '10',
      title: 'First In-person Event',
      status: 'In Progress',
      statusColor: '#ADFCF3',
      statusTextColor: '#0282A2',
      category: 'governance',
      issueNumber: 10,
      quarter: 'Q2 2025',
    },
    {
      id: '11',
      title: 'HoS Dashboard Launch',
      status: 'In Progress',
      statusColor: '#ADFCF3',
      statusTextColor: '#0282A2',
      category: 'governance',
      issueNumber: 11,
      quarter: 'Q2 2025',
    },
    {
      id: '12',
      title: 'HoS Alpha Complete',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'governance',
      issueNumber: 12,
      quarter: 'Q2 2025',
    },
    // Q2 2025 - AI & Research Column
    {
      id: '13',
      title: 'HoS Alpha Complete',
      status: 'In Progress',
      statusColor: '#ADFCF3',
      statusTextColor: '#0282A2',
      category: 'research',
      issueNumber: 13,
      quarter: 'Q2 2025',
    },
    {
      id: '14',
      title: 'Finalize Research Partnership',
      status: 'In Progress',
      statusColor: '#ADFCF3',
      statusTextColor: '#0282A2',
      category: 'research',
      issueNumber: 14,
      quarter: 'Q2 2025',
    },
    {
      id: '15',
      title: 'AI Assistant',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'research',
      issueNumber: 15,
      quarter: 'Q2 2025',
    },
    // Q3 2025 - Governance & Product Column
    {
      id: '16',
      title: 'HoS Beta Complete',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'governance',
      issueNumber: 16,
      quarter: 'Q3 2025',
    },
    {
      id: '17',
      title: 'First Final Proposals',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'governance',
      issueNumber: 17,
      quarter: 'Q3 2025',
    },
    {
      id: '18',
      title: 'HoS 1.0 Go Live',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'governance',
      issueNumber: 18,
      quarter: 'Q3 2025',
    },
    {
      id: '19',
      title: 'First Staking',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'governance',
      issueNumber: 19,
      quarter: 'Q3 2025',
    },
    {
      id: '20',
      title: 'First Vote',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'governance',
      issueNumber: 20,
      quarter: 'Q3 2025',
    },
    {
      id: '21',
      title: 'Finalize HoS 2.0 Design',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'governance',
      issueNumber: 21,
      quarter: 'Q3 2025',
    },
    {
      id: '22',
      title: 'Target 10% Staking',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'governance',
      issueNumber: 22,
      quarter: 'Q3 2025',
    },
    // Q3 2025 - AI & Research Column
    {
      id: '23',
      title: 'Hire First Researchers',
      status: 'In Progress',
      statusColor: '#ADFCF3',
      statusTextColor: '#0282A2',
      category: 'research',
      issueNumber: 23,
      quarter: 'Q3 2025',
    },
    {
      id: '24',
      title: 'Research Lab Launch',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'research',
      issueNumber: 24,
      quarter: 'Q3 2025',
    },
    {
      id: '25',
      title: 'First AI Delegate Prototype (Public Goods Funding)',
      status: 'Scheduled',
      statusColor: '#DCDCF9',
      statusTextColor: '#4D3BC2',
      category: 'research',
      issueNumber: 25,
      quarter: 'Q3 2025',
    },
  ];

  // Group items by quarter and category
  const quarters = ['Q1 2025', 'Q2 2025', 'Q3 2025'];

  // Create a structure for quarter -> category -> items
  const getItemsForQuarterAndCategory = (
    quarter: string,
    category: 'governance' | 'research'
  ) => {
    return roadmapData.filter(
      (item) => item.quarter === quarter && item.category === category
    );
  };

  // Get appropriate icon for status
  const getStatusIcon = (status: string, color: string) => {
    const statusLower = status.toLowerCase();
    const iconProps = { size: 16, color: color, style: { strokeWidth: 1.5 } };

    if (statusLower.includes('complete')) {
      return <CiCircleCheck {...iconProps} />;
    }

    if (statusLower.includes('in progress')) {
      return <CiPlay1 {...iconProps} />;
    }

    if (statusLower.includes('scheduled')) {
      return <CiCalendar {...iconProps} />;
    }

    return <CiCircleMore {...iconProps} />;
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  // Check if quarter is current - hardcoded to Q2 2025
  const isCurrentQuarter = (quarter: string): boolean => {
    return quarter === 'Q2 2025';
  };

  // Check scroll position and update gradient visibility
  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      // Show left gradient if not at the start
      setShowLeftGradient(scrollLeft > 0);

      // Show right gradient if not at the end
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    // Check initial scroll state
    checkScroll();

    // Add resize observer to check when container size changes
    const resizeObserver = new ResizeObserver(() => {
      checkScroll();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section id="roadmap" className={styles.roadmapSection}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Roadmap</h2>
          <div className={styles.navigationControls}>
            <button
              className={styles.navButton}
              aria-label="Previous"
              onClick={handlePrevious}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 24L12 16L20 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={styles.navButton}
              aria-label="Next"
              onClick={handleNext}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 24L20 16L12 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.divider} />
      </div>

      <div className={styles.roadmapContent}>
        {showLeftGradient && <div className={styles.gradientLeft} />}
        {showRightGradient && <div className={styles.gradientRight} />}
        <div
          className={styles.timelineContainer}
          ref={containerRef}
          onScroll={checkScroll}
        >
          {quarters.map((quarter) => {
            const isCurrent = isCurrentQuarter(quarter);
            const governanceItems = getItemsForQuarterAndCategory(
              quarter,
              'governance'
            );
            const researchItems = getItemsForQuarterAndCategory(
              quarter,
              'research'
            );

            return (
              <div key={quarter} className={styles.quarterSection}>
                <div className={styles.statusHeader}>
                  <div className={styles.timelineLine} />
                  <div
                    className={`${styles.timelineDot} ${isCurrent ? styles.current : ''}`}
                  />
                </div>
                <h3 className={styles.statusLabel}>{quarter}</h3>
                <div className={styles.quarterColumns}>
                  {/* Governance & Product Column */}
                  {governanceItems.length > 0 && (
                    <div className={styles.categoryColumn}>
                      <div className={styles.cardsContainer}>
                        {governanceItems.map((item) => (
                          <div key={item.id} className={styles.roadmapCard}>
                            <div className={styles.cardContent}>
                              <div className={styles.categoryBadge}>
                                <img
                                  src="/img/governance-icon.svg"
                                  alt="Governance icon"
                                  width="14"
                                  height="14"
                                />
                                <span
                                  className={`${styles.categoryText} ${styles.governance}`}
                                >
                                  GOVERNANCE & PRODUCT
                                </span>
                              </div>
                              <h4 className={styles.cardTitle}>{item.title}</h4>
                            </div>
                            <div
                              className={styles.statusBadge}
                              style={{ backgroundColor: item.statusColor }}
                            >
                              {getStatusIcon(item.status, item.statusTextColor)}
                              <span style={{ color: item.statusTextColor }}>
                                {item.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* AI & Research Column */}
                  {researchItems.length > 0 && (
                    <div className={styles.categoryColumn}>
                      <div className={styles.cardsContainer}>
                        {researchItems.map((item) => (
                          <div key={item.id} className={styles.roadmapCard}>
                            <div className={styles.cardContent}>
                              <div className={styles.categoryBadge}>
                                <img
                                  src="/img/research-icon.svg"
                                  alt="Research icon"
                                  width="14"
                                  height="14"
                                />
                                <span
                                  className={`${styles.categoryText} ${styles.research}`}
                                >
                                  AI & RESEARCH
                                </span>
                              </div>
                              <h4 className={styles.cardTitle}>{item.title}</h4>
                            </div>
                            <div
                              className={styles.statusBadge}
                              style={{ backgroundColor: item.statusColor }}
                            >
                              {getStatusIcon(item.status, item.statusTextColor)}
                              <span style={{ color: item.statusTextColor }}>
                                {item.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
