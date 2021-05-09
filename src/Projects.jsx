import React from 'react';
import classes from './styles/Projects.module.scss';
import projectBrocolioCipher from "./img/project_brocolio-cipher.jpg";
import projectTravelly from "./img/project_travelly.jpg";
import projectBrocolioCalculator from "./img/project_brocolio-calculator.jpg";

export default function Projects() {
  return (
    <section className={classes.container} id="projects">
      <ProjectCard imageUrl={projectBrocolioCipher} title='Brocolio Cipher' repositoryLink="https://github.com/lprapopostigo/brocolio-cipher.git" liveSiteLink="https://brocolio-cipher.netlify.app" description="Client-side image cipher tool"></ProjectCard>

      <ProjectCard imageUrl={projectTravelly} title='Travelly' repositoryLink="https://github.com/lprapopostigo/travelly" liveSiteLink="https://travelly-brocolio.netlify.app" description="Travel agency landing page concept"></ProjectCard>

      <ProjectCard imageUrl={projectBrocolioCalculator} title='Brocolio Calculator' repositoryLink="https://github.com/lprapopostigo/web-calculator" liveSiteLink="https://brocolio-calculator.netlify.app" description="Responsive flat design web calculator"></ProjectCard>
    </section>

  );
}

function ProjectCard({ imageUrl, title, repositoryLink, liveSiteLink, description }) {
  return (
    <div className={classes.card}>
      <img src={imageUrl} className={classes.cardImage}></img>
      <div className={classes.cardInfo}>
        <h1>{title}</h1>

        <div className={classes.cardLinks}>

          <a href={liveSiteLink} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#073B4C"><path d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z" /></svg>
          </a>
          <a href={repositoryLink}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#073B4C"><path d="M23.55,10.93,13.07.45a1.56,1.56,0,0,0-2.19,0L8.71,2.63l2.76,2.76a1.83,1.83,0,0,1,2.32,2.34l2.66,2.66a1.84,1.84,0,1,1-1.1,1L12.87,9v6.52a2.32,2.32,0,0,1,.49.35,1.84,1.84,0,1,1-2.6,0,1.71,1.71,0,0,1,.6-.4V8.83a1.71,1.71,0,0,1-.6-.4,1.83,1.83,0,0,1-.4-2L7.64,3.7.45,10.88a1.56,1.56,0,0,0,0,2.19L10.93,23.55a1.56,1.56,0,0,0,2.19,0L23.55,13.12a1.56,1.56,0,0,0,0-2.19" /></svg>
          </a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}