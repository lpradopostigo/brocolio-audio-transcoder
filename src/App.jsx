import React from 'react';
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";


export default function App() {

  return (
    <>
      <Nav activeSection={4} ></Nav >
      <Hero></Hero>
      <Projects></Projects>
      <Contact></Contact>
    </>);
}
