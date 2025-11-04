import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Academic Management System (AMS)"
      description="Centralized platform for attendance, scheduling, and student performance tracking"
    >
      <main className={styles.heroSection}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Academic Management System</h1>
            <p className={styles.subtitle}>
              Streamline your academic workflows — from attendance to analytics —
              with a unified and intelligent platform.
            </p>
            <div className={styles.buttons}>
              <Link className={styles.primaryButton} to="/docs/intro">
                📘 Get Started
              </Link>
              <Link className={styles.secondaryButton} to="/docs/developer/setup_guide">
                🧠 Developer Docs
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h3>🎓 Student Dashboard</h3>
            <p>
              Access attendance, grades, timetable, and personalized course suggestions in one place.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>👩‍🏫 Faculty Tools</h3>
            <p>
              Simplify class management, attendance tracking, and student evaluation with real-time insights.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>🛠️ Admin Control</h3>
            <p>
              Automate timetable generation, resolve scheduling conflicts, and manage users seamlessly.
            </p>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to explore AMS?</h2>
          <p>
            Learn, build, and contribute to the next-generation academic management experience.
          </p>
          <Link className={styles.ctaButton} to="/docs/intro">
            Explore Documentation →
          </Link>
        </section>
      </main>
    </Layout>
  );
}
