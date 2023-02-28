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
      'pics': ['website_pics/Cochin1.jpg', 'website_pics/Cochin2.jpg', 'website_pics/Cochin3.jpg']
    },
    {
      'name': 'Dubai, United Arab Emirates',
      'date': '12/19/2022 - 12/22/2022',
      'pics': ['website_pics/Dubai1.jpg', 'website_pics/Dubai2.jpg', 'website_pics/Dubai3.jpg']
    },
    {
      'name': 'Cairo, Egypt',
      'date': '12/18/2022 - 12/19/2022',
      'pics': ['website_pics/Egypt1.jpg', 'website_pics/Egypt2.jpg', 'website_pics/Egypt3.jpg']
    }
  ];

  return (
    <div className={mobilePortrait ? (mode === 'dark' ? styles.darkgradient_mobile : styles.lightgradient_mobile) : (mode === 'dark' ? styles.darkgradient : styles.lightgradient)}  onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar selected='5' toggle={setMode} mode={mode} />
      <h1 id={styles.header}>Travels</h1>
      <p id={styles.subheader}>Check out some cool pics from the places I've recently visited!</p>
      <table>
        <tr>
          <td className={styles.number}>27</td>
          <td className={styles.number}>14</td>
          <td className={styles.number}>5</td>
          <td className={styles.number}>4</td>
          <td className={styles.number}>1</td>
        </tr>
        <tr>
          <td>U.S. STATES VISITED</td>
          <td>COUNTRIES VISITED</td>
          <td>INDIAN STATES VISITED</td>
          <td>CONTINENTS VISITED</td>
          <td>PLANETS VISITED</td>
        </tr>
      </table>
      <h1 className={styles.fact}>and counting...</h1>
      <div className={styles.destList}>
        {destinations.map((dest, i) =>
          <div key={i}>
            <p><strong>{dest.name} -</strong> {dest.date}</p>
            <div class={styles.row}>
              {dest.pics.map((image, i) =>
                <div className={styles.column}>
                  <img className={styles.pic} src={image} height="95"/>
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
