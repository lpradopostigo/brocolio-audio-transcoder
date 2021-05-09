
import React from 'react';
import classes from './styles/Hero.module.scss';
export default function Hero() {

  return (
    <section id="hero">
      <div className={classes.text}>
        <h1>
          Luis Angel <br />
          Prado Postigo
        </h1>
        <h2>software developer</h2>
      </div>
      <div className={classes.image}></div>

    </section>
  );
}
