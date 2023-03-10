import React from 'react';
import styles from './EssayLink.module.css';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const EssayLink = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:600px) and (orientation:portrait)');
  const mobileLandscape = useMediaQuery('(min-width:600px) and (max-width:1023px) and (orientation:landscape)');

  const [mode, setMode] = [props.color, props.toggle];

  return (
    <div className={(mode === 'dark' ? styles.EssayLink_dark : styles.EssayLink_light)}>
      <p className={styles.essay_title}>{props.name}</p>
      <hr />
      <p className={styles.essay_highlight}>{props.highlight}</p>
      <Link to={props.link}><button className={styles.read}>Read</button></Link>
      <div id={styles.sep}>
        <hr />
        <p className={styles.date}>Posted: {props.posted}</p>
      </div>
    </div>
  );
};

export default EssayLink;
