import { React, useRef, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './BlogPost.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

const BlogPost = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:600px) and (orientation:portrait)');
  const mobileLandscape = useMediaQuery('(min-width:600px) and (max-width:1023px) and (orientation:landscape)');

  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [posted, setPosted] = useState('');

  const [body, setBody] = useState(null);
  const [relFooter, setRel] = useState(false);

  useEffect(() => TransformPost(), [])

  let moveGradient = (e) => {
    let x = e.pageX - 0;
    let y = e.pageY - 0;

    gradient.current.style.setProperty('--x', x + 'px');
    gradient.current.style.setProperty('--y', y + 'px');
  }

  const TransformPost = () => {
    gradient.current.style.setProperty('height', '100%');
    const xml_post = props.filename;
    fetch(xml_post).then(
      (res) => res.text())
      .then(xmlString => {
        const doc = new window.DOMParser().parseFromString(xmlString, "text/xml");

        setTitle(doc.getElementsByTagName("Title")[0].childNodes[0].nodeValue);
        setSubtitle(doc.getElementsByTagName("Subtitle")[0].childNodes[0].nodeValue);
        setPosted(doc.getElementsByTagName("Posted")[0].childNodes[0].nodeValue);

        document.title = doc.getElementsByTagName("Title")[0].childNodes[0].nodeValue + " - Writing - Nitish Vijai";

        let rendered_HTML = [];

        let content = doc.getElementsByTagName("Content")[0];
        for (let i = 0; i < content.children.length; ++i) {
          let text = content.children[i].innerHTML;
          let type = content.children[i].nodeName;

          if (type === "Paragraph") {
            rendered_HTML.push(<p className={styles.paragraph}>{text}</p>);
          }
          else if (type === "Heading") {
            rendered_HTML.push(<h3 className={styles.heading}>{text}</h3>);
          }
          else if (type === "Subheading") {
            rendered_HTML.push(<h4 className={styles.subheading}>{text}</h4>);
          }
          else if (type === "Image") {
            rendered_HTML.push(<a href={text}><img src={text} height="240px" className={mobilePortrait || mobileLandscape ? styles.img_mobile : styles.img} /></a>);
          }
          else if (type === "Caption") {
            rendered_HTML.push(<h6 className={styles.caption}>{text}</h6>);
          }
          else if (type === "List") {
            let actions = [];
            for (let action = 0; action < content.children[i].children.length; ++action) {
              let actionItem = content.children[i].children[action].attributes[0]["nodeValue"];
              let desc = content.children[i].children[action].innerHTML;
              actions.push([actionItem, desc]);
            }
            rendered_HTML.push(<ol className={styles.list}>{actions.map((action) => <li className={styles.action}><strong>{action[0]}</strong> {action[1]}</li>)}</ol>);
          }
          else if (type === "Code") {
            rendered_HTML.push(<code>{text}</code>)
          }
          else if (type === "Ending") {
            rendered_HTML.push(<p className={styles.ending}>{text}</p>);
          }
        }
        console.log(rendered_HTML);
        setBody(rendered_HTML);

        if (mobilePortrait || mobileLandscape) {
          gradient.current.style.setProperty('height', 'auto');
          setRel(true);
        }
        else if (!mobileLandscape && !mobilePortrait) {
          if (gradient.current.clientHeight < 800) {
            gradient.current.style.setProperty('height', '100%');
            setRel(false);
          }
          else {
            gradient.current.style.setProperty('height', 'auto');
            setRel(true);
          }
        }
        
      });

  }

  return (
    <div className={mobilePortrait ? (mode === 'dark' ? "darkgradient_mobile" : "lightgradient_mobile") : (mode === 'dark' ? "darkgradient" : "lightgradient")} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar selected='4' toggle={setMode} mode={mode} />
      <div className={mobilePortrait ? styles.blog_header_mobile : styles.blog_header}>
        <Link to="/essays" className={mobilePortrait || mobileLandscape ? styles.pgLink_mobile : "pgLink"}>Back to all Essays</Link>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.published}>Posted on: {posted}</p>
      </div>
      <div className={mobilePortrait ? styles.blog_content_mobile : styles.blog_content}>
        {body}
      </div>
      {relFooter ? <Footer projects='true' /> : <Footer />}
    </div>
  );

};

export default BlogPost;
