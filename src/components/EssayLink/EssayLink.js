import React from 'react';
import styles from './EssayLink.module.css';

const EssayLink = (props) => (
  <div className={styles.EssayLink}>
    <h2 class={styles.essay_title}>{props.name}</h2>
    <button>Read</button>
    <hr />
    <p><strong>Posted</strong>: {props.posted}</p>
  </div>
);

export default EssayLink;
