import React from 'react';
import styles from './EssayLink.module.css';
import { Link } from 'react-router-dom';

const EssayLink = (props) => {
  const [mode, setMode] = [props.color, props.toggle];

  return (
    <div className={(mode === 'dark' ? styles.EssayLink_dark : styles.EssayLink_light)}>
      <p class={styles.essay_title}>{props.name}</p>
      <hr />
      <p class={styles.essay_highlight}>{props.highlight}</p>
      <Link to={props.link}><button className={styles.read}>Read</button></Link>
      <div id={styles.sep}>
        <hr />
        <p className={styles.date}>Posted: {props.posted}</p>
      </div>
    </div>
  );
};

export default EssayLink;
