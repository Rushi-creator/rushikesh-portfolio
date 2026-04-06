"use client";

import React from "react";
import { SectionHeader } from "./section-header";
import "./about-me.css";

const aboutCards = [
  {
    number: "01",
    title: "Who I Am",
    content: (
      <>
        <p>
          Hi, I'm <strong>Rushikesh Gawande</strong>, a developer based in{" "}
          <strong>Pune, India</strong>.
        </p>
        <p>
          I work as a <strong>Full Stack Developer, Web Developer, Software Developer, and Frontend Developer</strong>{" "}
          focused on building scalable web applications, improving UI/UX, and creating immersive digital experiences.
        </p>
        <p>
          I enjoy transforming ideas into powerful digital systems and interactive platforms, including modern{" "}
          <strong>3D scrolling websites</strong> and high-performance web applications.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Tech Stack",
    content: (
      <>
        <p>My development stack includes modern web technologies and cloud tools.</p>
        <p>
          Core skills include <strong>HTML5, CSS3, TypeScript, React, Next.js, Node.js, Python, Java, Supabase, Firebase, MySQL, MongoDB, Git, GitHub, AWS, and Vercel</strong>.
        </p>
        <p>
          I also actively work with AI-assisted development tools and modern coding environments to build scalable, efficient, and maintainable applications.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Professional Journey",
    content: (
      <>
        <p>
          I am currently a <strong>B.E Information Technology student</strong>, working as a{" "}
          <strong>Freelancer and Technical Faculty</strong>, while also gaining industry experience as an{" "}
          <strong>Intern at Inventure</strong>.
        </p>
        <p>
          My experience combines academic learning, real-world development projects, and teaching technical concepts. This combination allows me to approach software development analytically while designing user-focused digital solutions.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Education & Interests",
    content: (
      <>
        <div className="about-education">
          <h4>Education Roadmap</h4>
          <ul>
            <li>
              <strong>B.E Information Technology</strong>
              <span>Savitri Bai Phule Pune University</span>
              <span className="highlight">CGPA: 8.00</span>
            </li>
            <li>
              <strong>12th — Shiv Educational Secondary High School</strong>
              <span className="highlight">86%</span>
            </li>
            <li>
              <strong>10th — D.R. Patil High School</strong>
              <span className="highlight">96%</span>
            </li>
          </ul>
        </div>
        <div className="about-interests">
          <h4>Personal Interests</h4>
          <div className="interest-tags">
            <span>Teaching Mathematics</span>
            <span>Swimming</span>
            <span>Sketching</span>
            <span>Exploring AI Tools</span>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "05",
    title: "What I'm Building Now",
    content: (
      <>
        <p>
          Currently I am working on multiple projects including scalable web platforms, automation systems, and interactive web experiences.
        </p>
        <p>
          My focus is on combining <strong>modern web technologies with AI-assisted development</strong> to create high-performance applications and visually engaging user experiences.
        </p>
      </>
    ),
  },
];

const AboutMeSection = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="about-header">
        <SectionHeader id="about-me" title="About Me" />
      </div>

      <ul id="about-cards">
        {aboutCards.map((card, index) => (
          <li key={index} className="about-card">
            <div className="about-card__content">
              <span className="about-number">{card.number}</span>
              <h2 className="about-card-title">{card.title}</h2>
              <div className="about-card-text">{card.content}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMeSection;
