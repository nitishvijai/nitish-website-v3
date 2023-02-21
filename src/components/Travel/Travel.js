import { React, useRef, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Travel.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const Travel = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:1024px)');
  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  let moveGradient = (e) => {
    let x = e.pageX - 0;
    let y = e.pageY - 0;
    gradient.current.style.setProperty('--x', x + 'px');
    gradient.current.style.setProperty('--y', y + 'px');
  };

  let destinations = [
    {
      'name': 'Cochin, Kerala, India',
      'date': '1/3/2023 - 1/5/2023',
      'pics': [1, 2, 3]
    },
    {
      'name': 'Dubai, United Arab Emirates',
      'date': '12/19/2022 - 12/22/2022',
      'pics': [1, 2, 3]
    },
    {
      'name': 'Cairo, Egypt',
      'date': '12/18/2022 - 12/19/2022',
      'pics': [1, 2, 3]
    }
  ];

  return (
    <div className={mobilePortrait ? (mode === 'dark' ? styles.darkgradient_mobile : styles.lightgradient_mobile) : (mode === 'dark' ? styles.darkgradient : styles.lightgradient)}  onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar selected='5' toggle={setMode} mode={mode} />
      <h1 id={styles.header}>Travels</h1>
      <p id={styles.subheader}>Check out some cool pics from the places I've recently visited!</p>
      <h1 className={styles.fact}>27 US states visited</h1>
      <h1 className={styles.fact}>14 countries visited</h1>
      <h1 className={styles.fact}>5 Indian states visited</h1>
      <h1 className={styles.fact}>4 continents visited</h1>
      <h1 className={styles.fact}>1 planet visited</h1>
      <h1 className={styles.fact}>and counting...</h1>
      <div className={styles.destList}>
        {destinations.map((dest, i) =>
          <div key={i}>
            <p><strong>{dest.name} -</strong> {dest.date}</p>
            <div class={styles.row}>
              {dest.pics.map((image, i) =>
                <div className={styles.column}>
                  <img className={styles.pic} src="/unavailable.png" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Travel;
