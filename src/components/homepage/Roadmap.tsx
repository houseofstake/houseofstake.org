import React, { useState, useRef, useEffect } from 'react';
import styles from './Roadmap.module.css';
import { fetchGitHubProjectData, RoadmapItem } from '../../services/github';
import { 
  CiCircleCheck, 
  CiClock1, 
  CiCalendar, 
  CiPause1, 
  CiCircleMore 
} from 'react-icons/ci';


const Roadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roadmapItems, setRoadmapItems] = useState<RoadmapItem[]>([]);
  const [statusGroups, setStatusGroups] = useState<Map<string, RoadmapItem[]>>(new Map());
  const [availableStatuses, setAvailableStatuses] = useState<string[]>([]);
  const [statusColors, setStatusColors] = useState<Map<string, string>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from GitHub on component mount
  useEffect(() => {
    const loadRoadmapData = async () => {
      try {
        setIsLoading(true);
        const projectData = await fetchGitHubProjectData();
        
        if (projectData.error) {
          setError(projectData.error);
        } else {
          setRoadmapItems(projectData.items);
          setStatusColors(projectData.statuses);
          
          // Use columns from API if available, otherwise use ordered list
          const statusOrder = projectData.columns.length > 0 
            ? projectData.columns 
            : getStatusOrder(projectData.statuses);
          setAvailableStatuses(statusOrder);
          
          // Group items by status
          const groups = new Map<string, RoadmapItem[]>();
          // Initialize all statuses with empty arrays
          statusOrder.forEach(status => {
            groups.set(status, []);
          });
          // Add items to their respective groups
          projectData.items.forEach(item => {
            const existing = groups.get(item.status) || [];
            groups.set(item.status, [...existing, item]);
          });
          setStatusGroups(groups);
        }
      } catch (err) {
        console.error('Failed to fetch roadmap data:', err);
        setError('Failed to load roadmap data');
      } finally {
        setIsLoading(false);
      }
    };

    loadRoadmapData();
  }, []);

  // Get ordered list of statuses
  const getStatusOrder = (statuses: Map<string, string>): string[] => {
    const statusArray = Array.from(statuses.keys());
    
    // Define priority order for known status types
    const orderPriority: Record<string, number> = {
      'todo': 1,
      'backlog': 1,
      'next': 2,
      'on deck': 2,
      'upcoming': 2,
      'this sprint': 3,
      'current': 3,
      'in progress': 3,
      'paused': 4,
      'blocked': 4,
      'done': 5,
      'complete': 5,
      'closed': 5
    };
    
    // Sort statuses based on priority
    return statusArray.sort((a, b) => {
      const aPriority = Object.entries(orderPriority).find(([key]) => 
        a.toLowerCase().includes(key)
      )?.[1] || 99;
      const bPriority = Object.entries(orderPriority).find(([key]) => 
        b.toLowerCase().includes(key)
      )?.[1] || 99;
      
      return aPriority - bPriority;
    });
  };

  // Get appropriate icon for status
  const getStatusIcon = (status: string, color: string) => {
    const statusLower = status.toLowerCase();
    const iconProps = { size: 16, color: color, style: { strokeWidth: 1.5 } };
    
    // Done/Complete statuses - check circle icon
    if (statusLower.includes('done') || statusLower.includes('complete') || statusLower.includes('closed')) {
      return <CiCircleCheck {...iconProps} />;
    }
    
    // In Progress/Current statuses - clock icon
    if (statusLower.includes('this sprint') || statusLower.includes('current') || statusLower.includes('in progress')) {
      return <CiClock1 {...iconProps} />;
    }
    
    // Next/Upcoming statuses - calendar icon
    if (statusLower.includes('next') || statusLower.includes('on deck') || statusLower.includes('upcoming')) {
      return <CiCalendar {...iconProps} />;
    }
    
    // Paused/Blocked statuses - pause icon
    if (statusLower.includes('paused') || statusLower.includes('blocked')) {
      return <CiPause1 {...iconProps} />;
    }
    
    // Todo/Backlog statuses (default) - circle icon
    return <CiCircleMore {...iconProps} />;
  };


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

  if (isLoading) {
    return (
      <section className={styles.roadmapSection}>
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Roadmap</h2>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.roadmapContent}>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            Loading roadmap data...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.roadmapSection}>
        <div className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Roadmap</h2>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.roadmapContent}>
          <div style={{ textAlign: 'center', padding: '40px', color: '#ff6b6b' }}>
            Failed to load roadmap data. Please try again later.
          </div>
        </div>
      </section>
    );
  }

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
          {availableStatuses.map((status, statusIndex) => {
            const items = statusGroups.get(status) || [];
            const isCurrentStatus = status.toLowerCase().includes('this sprint') || 
                                   status.toLowerCase().includes('current') ||
                                   status.toLowerCase().includes('in progress');
            
            return (
              <div key={status} className={styles.statusColumn}>
                <div className={styles.statusHeader}>
                  <div className={styles.timelineLine} />
                  <div className={`${styles.timelineDot} ${isCurrentStatus ? styles.current : ''}`} />
                  <div className={styles.timelineLine} />
                </div>
                <h3 className={styles.statusLabel}>{status}</h3>
                <div className={styles.cardsContainer}>
                  {items.length === 0 ? (
                    <div className={styles.emptyState}>
                      <span>No items</span>
                    </div>
                  ) : (
                    items.map((item) => (
                      <a 
                        key={item.id} 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.roadmapCard}
                        style={{ textDecoration: 'none' }}
                      >
                        <div className={styles.cardContent}>
                          <div className={styles.categoryBadge}>
                            <span className={`${styles.categoryText} ${styles[item.category]}`}>
                              {item.category === 'governance' ? 'GOVERNANCE & PRODUCT' : 'AI & RESEARCH'}
                            </span>
                          </div>
                          <h4 className={styles.cardTitle}>{item.title}</h4>
                          <span className={styles.issueNumber}>#{item.issueNumber}</span>
                        </div>
                        <div 
                          className={styles.statusBadge}
                          style={{ backgroundColor: item.statusColor }}
                        >
                          {getStatusIcon(item.status, item.statusTextColor)}
                          <span style={{ color: item.statusTextColor }}>{item.status}</span>
                        </div>
                      </a>
                    ))
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