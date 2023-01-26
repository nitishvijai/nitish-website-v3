import React from 'react';
import styles from './EssayLink.module.css';

const EssayLink = (props) => (
  <div className={styles.EssayLink}>
    <h2 class={styles.essay_title}>{props.name}</h2>
    <button className={styles.read}>Read</button>
    <div id={styles.sep}>
      <hr />
      <p className={styles.date}><strong>Posted</strong>: {props.posted}</p>
    </div>
  </div>
);

export default EssayLink;
