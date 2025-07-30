"use client";
import React, { useEffect, useState } from 'react';
import Layout from './Layout';

/**
 * ProjectGallery component fetches and displays a gallery of projects from JSON.
 * Copilot: Uses useEffect to load projects and maps them to styled cards.
 */
const ProjectGallery = () => {
  // Copilot: State for loaded projects
  const [projects, setProjects] = useState([]);

  /**
   * Loads project data from /projects.json on mount.
   * Copilot: Fetches and sets projects state.
   */
  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <Layout>
      {/* Copilot: Gallery section with project cards */}
      <section id="gallery" style={{ padding: '2rem 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '1.5rem', color: '#2563eb', letterSpacing: '1px' }}>
          Project Gallery
        </h2>
        <div className="gallery-grid">
          {projects.map((project, idx) => (
            <div className="gallery-item" key={idx} style={{ boxShadow: '0 4px 24px rgba(37,99,235,0.10)', border: '1px solid #e0e7ff', borderRadius: '1.2rem', background: '#fff', padding: '2rem 1.5rem', transition: 'transform 0.2s', minHeight: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', maxWidth: '180px', borderRadius: '0.7rem', marginBottom: '1.2rem', boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }} />
              <h3 style={{ color: '#2563eb', margin: '0.5rem 0 0.25rem', fontSize: '1.3rem' }}>{project.title}</h3>
              <p style={{ color: '#444', fontSize: '1.05rem', marginBottom: '1rem', flex: 1 }}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#fff', background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', padding: '0.5rem 1.25rem', borderRadius: '2rem', textDecoration: 'none', fontWeight: 500, fontSize: '1rem', transition: 'background 0.2s' }}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectGallery;
