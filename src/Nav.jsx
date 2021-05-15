import React, { useState } from 'react';
import classes from './styles/Nav.module.scss';


export default function Nav({ activeSection }) {
  return (
    <nav className={classes.nav}>
      <Menu activeSection={activeSection}></Menu>
    </nav>
  );
}

function Menu({ activeSection }) {
  return (
    <ul className={classes.menu} onScroll={() => { console.log("hates"); }}>
      <Item text="Start" href="#hero" active={activeSection === 0 ? true : false}></Item>
      <Item text="Projects" href="#projects" active={activeSection == 1 ? true : false}></Item>
      <Item text="Contact" href="#contact" active={activeSection == 2 ? true : false} ></Item>
    </ul>
  );
}


function Item({ text, href, active }) {
  return (
    <li className={`${classes.item} ${active ? classes.itemActive : null}`}>
      <a href={href}>
        {text}
      </a>
    </li>

  );
}