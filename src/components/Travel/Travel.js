import { React, useRef, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Travel.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const Travel = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:600px) and (orientation:portrait)');
  const mobileLandscape = useMediaQuery('(min-width:600px) and (max-width:1023px) and (orientation:landscape)');

  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  useEffect(() => {
    document.title = 'Traveling - Nitish Vijai';
  }, []);

  let moveGradient = (e) => {
    let x = e.pageX - 0;
    let y = e.pageY - 0;

    if (!mobilePortrait && !mobileLandscape) {
      gradient.current.style.setProperty('--x', x + 'px');
      gradient.current.style.setProperty('--y', y + 'px');
    }
    else {
      gradient.current.style.setProperty('--x', '0px');
      gradient.current.style.setProperty('--y', '0px');
    }
  };

  let destinations = [
    {
      'name': 'Ensenada, BC, Mexico',
      'date': '5/17/2023',
      'pics': ['unavailable.png', 'unavailable.png', 'unavailable.png']
    },
    {
      'name': 'Catalina Island',
      'date': '5/16/2023',
      'pics': ['unavailable.png', 'unavailable.png', 'unavailable.png']
    },
    {
      'name': 'Los Angeles, CA',
      'date': '5/13/2023 - 5/15/2023',
      'pics': ['unavailable.png', 'unavailable.png', 'unavailable.png']
    },
    {
      'name': 'Cochin, Kerala, India',
      'date': '1/3/2023 - 1/5/2023',
      'pics': ['website_pics/Cochin1.jpg', 'website_pics/Cochin2.jpg', 'website_pics/Cochin3.jpg']
    },
    {
      'name': 'Dubai, UAE',
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
      {!mobilePortrait && <table>
        <tr>
          <td className={styles.number}>26</td>
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
          <td>PLANET(S) VISITED</td>
        </tr>
      </table>}
      {mobilePortrait && <div>
        <h1 className={styles.fact}>26 U.S. states visited</h1>
      <h1 className={styles.fact}>14 countries visited</h1>
      <h1 className={styles.fact}>5 Indian states visited</h1>
      <h1 className={styles.fact}>4 continents visited</h1>
      <h1 className={styles.fact}>1 planet visited</h1>
      </div>}
      <h1 className={styles.fact}>and counting...</h1>
      {!mobilePortrait && <div className={styles.maps}>
        <div className={styles.world} style={{maxWidth: '490px', margin: '5px auto 10px auto', fontSize: '14px'}}><div style={{position: 'relative', padding: '0 0 67% 0', height: 0, overflow: 'hidden'}}><iframe style={{position: 'absolute', width: '100%', height: '100%'}} src="https://www.fla-shop.com/visited-countries/embed/?st=AE%2CBE%2CBS%2CCA%2CCH%2CDE%2CEG%2CFR%2CIN%2CJM%2CLU%2CMX%2CNL%2CUS&vc=1ca032&uc=b3c3ca&hc=40bfa6&bc=ffffff&ss=on" frameborder="0" scrolling="no" title="Visited Countries around the World"></iframe></div></div>
        <div className={styles.america} style={{maxWidth: '490px', fontSize: '14px'}}><div style={{position: 'relative', padding: '0 0 70% 0', height: 0, overflow: 'hidden'}}><iframe style={{position: 'absolute', width: '100%', height: '100%'}} src="//www.fla-shop.com/visited-states/embed/?st=CA%2CCO%2CDC%2CFL%2CGA%2CID%2CIL%2CIN%2CKY%2CMA%2CMD%2CMI%2CMO%2CNC%2CNJ%2CNV%2CNY%2COH%2CPA%2CSC%2CTN%2CTX%2CVA%2CWA%2CWI%2CWV&vc=ff0000&uc=90cfea&hc=40bfa6&bc=ffffff&ss=on&sl=on" frameborder="0" scrolling="no" title="Visited U.S. States"></iframe></div></div>
      </div>}
      <div className={mobilePortrait || mobileLandscape ? styles.destList_mobile : styles.destList}>
        {destinations.map((dest, i) =>
          <div key={i}>
            <p><strong>{dest.name} -</strong> {dest.date}</p>
            <div class={styles.row}>
              {dest.pics.map((image, i) =>
                <div className={styles.column}>
                  <a href={image}><img className={styles.pic} src={image} height="120" alt=""/></a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {mobilePortrait ? <Footer projects="true"/> :<Footer />}
    </div>
  );
};

export default Travel;
