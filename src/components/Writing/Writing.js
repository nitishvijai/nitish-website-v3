import { React, useRef, useEffect } from 'react';
import styles from './Writing.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import EssayLink from '../EssayLink/EssayLink';

const Writing = (props) => {

  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  useEffect(() => {
    document.title = 'Writing - Nitish Vijai';
  }, []);

  let moveGradient = (e) => {
    let x = e.pageX - 0;
    let y = e.pageY - 0;

    gradient.current.style.setProperty('--x', x + 'px');
    gradient.current.style.setProperty('--y', y + 'px');
  }

  let essays = [
    {
      'name': '2020: Parting Thoughts',
      'link': '/blog-posts/2020-parting-thoughts',
      'highlight': 'One of the worst (yet most eye-opening) years of my life.',
      'posted': 'December 31st, 2020'
    },
    {
      'name': 'The Science of the Growth Mindset',
      'link': '/blog-posts/growth-mindset',
      'highlight': 'An analysis of its applications in engineering, education, and life',
      'posted': 'August 18th, 2019'
    },
    {
      'name': 'Running Linux on Windows via the Windows Subsystem for Linux',
      'link': '/blog-posts/wsl',
      'highlight': 'Attaining the full power of UNIX on the Windows platform',
      'posted': 'July 14th, 2019'
    },
    {
      'name': 'First Post',
      'link': '/blog-posts/first-post',
      'highlight': 'My first post, more to follow...',
      'posted': 'June 9th, 2019'
    }
  ];

  return (
    <div className={(mode === 'dark' ? 'darkgradient' : 'lightgradient')} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar selected='4' toggle={setMode} mode={mode} />
      <h1 id='header'>Writing</h1>
      <p id='subheader'>Check out some of my favorite articles I've written!</p>
      <div id={styles.essayList}>
        {essays.map((essay, i) => 
          <EssayLink key={i} name={essay.name} link={essay.link} posted={essay.posted} highlight={essay.highlight} toggle={setMode} color={mode}/>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Writing;
