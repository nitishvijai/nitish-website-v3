import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Travel.module.css';

const Travel = () => {
  let moveGradient = (e) => {
    let btn = document.querySelector('.Travel_gradient__j3U9A, a');
    let x = e.pageX - 0;
    let y = e.pageY - 0;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
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
    <div className={`${styles.gradient}`}  onMouseMove={(e) => moveGradient(e)}>
      <Navbar selected='5' />
      <h1 id={styles.header}>Travels</h1>
      <p id={styles.subheader}>Check out some cool pics from the places I've recently visited!</p>
      <h1 className={styles.fact}>27 US states visited</h1>
      <h1 className={styles.fact}>14 countries visited</h1>
      <h1 className={styles.fact}>5 Indian states visited</h1>
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
      <Footer projects='true'/>
    </div>
  );
};

export default Travel;
