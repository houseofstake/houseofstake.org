import React, { useEffect, useState, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Header from './Header';
import styles from './Hero.module.css';
import {
  HouseOfStakeStats,
  fetchHouseOfStakeStatsWithCache,
} from '@site/src/services/nearApi';

const Hero: React.FC = () => {
  const [blockchainStats, setBlockchainStats] =
    useState<HouseOfStakeStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [displayValues, setDisplayValues] = useState<(string | number)[]>([
    0,
    0,
    '0',
  ]);
  const animationRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);

  // Parse value to number for animation
  const parseValue = (val: string | number): number => {
    if (typeof val === 'number') return val;
    const str = val.toString();
    if (str.endsWith('B')) return parseFloat(str) * 1000000000;
    if (str.endsWith('M')) return parseFloat(str) * 1000000;
    if (str.endsWith('K')) return parseFloat(str) * 1000;
    return parseInt(str) || 0;
  };

  // Format number for display
  const formatValue = (num: number, type: string): string | number => {
    if (type === 'venear') {
      if (num >= 1000000000) return `${(num / 1000000000).toFixed(2)}B`;
      if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    }
    // Format regular numbers with K, M, B as well
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return Math.floor(num);
  };

  // Fetch stats on mount
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await fetchHouseOfStakeStatsWithCache();
        setBlockchainStats(data);
      } catch (err) {
        console.error('Failed to fetch House of Stake stats:', err);
        // Set fallback values on error
        setBlockchainStats({
          participants: 0,
          proposals: 0,
          veNearStaked: '0',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Refresh stats every 10 minutes (to avoid rate limiting)
    const interval = setInterval(fetchStats, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  // Animate numbers when data arrives
  useEffect(() => {
    if (!loading && blockchainStats && !hasAnimated.current) {
      hasAnimated.current = true;

      const targets = [
        blockchainStats.participants || 0,
        blockchainStats.proposals || 0,
        blockchainStats.veNearStaked || '0',
      ];

      const targetNums = targets.map((t) => parseValue(t));
      const startTime = performance.now();
      const duration = 1200;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out quad - faster completion
        const eased = 1 - Math.pow(1 - progress, 2);

        const newValues = targetNums.map((target, idx) => {
          const current = Math.floor(target * eased);
          const type = idx === 2 ? 'venear' : 'other';
          return formatValue(current, type);
        });

        setDisplayValues(newValues);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Set final values
          setDisplayValues(targets);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [loading, blockchainStats]);

  // Stats data
  const statsData = [
    {
      value: displayValues[0],
      label: 'Participants',
    },
    {
      value: displayValues[1],
      label: 'Proposals',
    },
    {
      value: displayValues[2],
      label: 'veNEAR staked',
    },
  ];

  return (
    <section id="hero" className={styles.hero}>
      <Header />
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `url('${useBaseUrl('/img/hero.png')}')`,
        }}
      />
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.textContentWrapper}>
            <div className={styles.textContentTitle}>
              <div className={styles.titleWrapper}>
                <p className={styles.subtitle}>House of Stake</p>
                <h1 className={styles.title}>
                  Governance of the NEAR Ecosystem
                </h1>
              </div>
              <a
                href="https://gov.houseofstake.org"
                className={styles.specialButton}
              >
                <div className={styles.logoIcon}>
                  <img src={useBaseUrl('/img/near-logo.svg')} alt="NEAR Logo" />
                </div>
                <span className={styles.buttonLabel}>Govern</span>
              </a>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            {statsData.map((s, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardValue}>{s.value}</div>
                <div className={styles.cardLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
