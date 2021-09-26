import React from 'react';
import * as styles from './category-title.module.css';

export default function CategoryTitle({
  title,
  description
}: {
  title: string;
  description: string;
}): JSX.Element {
  return (
    <header className={styles.headerTitleWrapper}>
      <div className={styles.headerTitleContainer}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <span className={styles.text}>{description}</span>
      </div>
    </header>
  );
}
