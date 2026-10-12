
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './index.css';
import profileImage from './assets/profile.jpeg';

export default function Portfolio() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  // Update form data whenever the user types
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Send the contact form through EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_utukvsp',
        'template_5tmgyl1',
        formRef.current,
        'GJogW-z6nqWkI60Jj'
      );

      alert('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);

      alert(
        'Failed to send message. Please check your EmailJS settings and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Project details
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'An online shopping platform featuring product listings, shopping cart, checkout, and payment integration.',
      technologies: ['React', '.NET', 'SQL Server'],
      liveUrl: '',
      codeUrl: '',
    },
    {
      title: 'Task Management App',
      description:
        'A task management application designed to organize tasks and help teams collaborate efficiently.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: '',
      codeUrl: '',
    },
    {
      title: 'AI Image Generator',
      description:
        'An AI-powered image generation application with customizable prompts and creative features.',
      technologies: ['React', 'OpenAI', 'Python'],
      liveUrl: '',
      codeUrl: '',
    },
  ];

  return (
    <div className="portfolio-container">

      {/* Profile Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        src={profileImage}
        alt="Nishan Gyawali"
        className="profile-image"
      />

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="main-title">
          Hi, I'm <span className="highlight-text">Nishan Gyawali</span>
        </h1>

        <p className="sub-title">
          Electronics, Communication & Information Engineering student
          passionate about technology and software development. I study at
          Himalaya College of Engineering, Chyasal, Lalitpur. I enjoy building
          responsive web applications and interactive user interfaces using
          React and modern web technologies. I am also interested in .NET,
          electronics, and creating useful digital solutions.
        </p>

        {/* Social and Navigation Buttons */}
        <div className="social-buttons">

          <motion.a
            href="https://github.com/NishanGyawali"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="btn-pill"
          >
            GitHub
          </motion.a>

          <motion.a
            href="https://YOUR-CURITECH-WEBSITE.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="btn-pill"
          >
            Curitech Solution
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="btn-pill"
          >
            Contact Me
          </motion.a>

        </div>
      </motion.div>

      {/* Featured Projects Section */}
      <section
        id="projects"
        style={{ marginTop: '50px' }}
      >
        <h2 className="section-title">Featured Projects</h2>

        <p className="section-desc">
          Explore some of my projects and development interests.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="project-card"
            >
              <h4>{project.title}</h4>

              <p>{project.description}</p>

              <div className="tech-tags">
                {project.technologies.map((technology) => (
                  <span
                    className="tech-tag"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="card-actions">

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-view"
                  >
                    Live View
                  </a>
                ) : (
                  <span className="btn-view">
                    Coming Soon
                  </span>
                )}

                {project.codeUrl ? (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-code"
                  >
                    Code
                  </a>
                ) : (
                  <span className="btn-code">
                    Coming Soon
                  </span>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="contact-container"
      >
        <h2 className="section-title text-center">
          Get in Touch
        </h2>

        <p className="section-desc text-center">
          Have a project or opportunity in mind? Send me a message.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
        >

          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">
              Your Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">
              Your Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message">
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={4}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </section>

      {/* Footer */}
      <footer className="footer-text">
        <p>
          © {new Date().getFullYear()} Nishan Gyawali.
          Built with React & Framer Motion.
        </p>
      </footer>

    </div>
  );
}