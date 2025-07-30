import React from 'react';
import Layout from './Layout';

/**
 * AboutMePage component displays the About Me section with bio and contact info.
 * Copilot: Used as the About page in the portfolio, wrapped in Layout.
 */
export default function AboutMePage() {
  return (
    <Layout>
      {/* Copilot: Main About section with heading, bio, and contact details */}
      <section id="about">
        <h2>About Me</h2>
        <p>Hello! I'm a passionate web developer with a love for building beautiful and functional user experiences. I specialize in React, JavaScript, and modern web technologies.</p>
        <p>I enjoy solving complex problems, learning new frameworks, and collaborating with creative teams. My portfolio showcases a range of projects from personal websites to full-stack applications.</p>
        <p>In my free time, I like to contribute to open-source, write technical blogs, and explore the latest trends in frontend development. Let's connect and create something amazing together!</p>
        <ul>
          <li><strong>Location:</strong> Bangalore, India</li>
          <li><strong>Email:</strong> your.email@example.com</li>
          <li><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</li>
        </ul>
      </section>
    </Layout>
  );
}
