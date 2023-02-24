import React from 'react';
import styles from './EssayLink.module.css';

const EssayLink = (props) => {
  const [mode, setMode] = [props.color, props.toggle];

  return (
    <div className={(mode === 'dark' ? styles.EssayLink_dark : styles.EssayLink_light)}>
      <h2 class={styles.essay_title}>{props.name}</h2>
      <button className={styles.read} onClick={setMode}>Read</button>
      <div id={styles.sep}>
        <hr />
        <p className={styles.date}><strong>Posted</strong>: {props.posted}</p>
      </div>
    </div>
  );
};

export default EssayLink;
