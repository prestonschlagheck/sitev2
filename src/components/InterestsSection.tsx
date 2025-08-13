'use client';

import { motion } from 'framer-motion';

const InterestsSection = () => {
  return (
    <section id="interests" className="py-12 lg:py-8">
      <div className="section-container">
        
        {/* Using CSS Grid with explicit gaps for guaranteed spacing */}
        <div 
          style={{
            display: 'grid',
            gridTemplateRows: '12px auto 12px auto',
            gap: '8px',
            justifyItems: 'center',
            alignItems: 'center'
          }}
        >
          
          {/* Top Spacer */}
          <div style={{ height: '12px' }}></div>

          {/* Header */}
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center mb-12 text-white"
          >
            Let&apos;s Connect
          </motion.h2>

          {/* Spacer */}
          <div style={{ height: '12px' }}></div>

          {/* Content */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/preston-schlagheck/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">in</span>
              </div>
              <span className="text-lg font-medium">LinkedIn</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/prestonschlagheck"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="text-lg font-medium">GitHub</span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/preston.schlagheck/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 text-white hover:text-pink-400 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-lg font-medium">Instagram</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:preston.schlagheck@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 text-white hover:text-red-400 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Email</span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+12034567890"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 text-white hover:text-green-400 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Phone</span>
            </motion.a>

            {/* Resume */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 text-white hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Resume</span>
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-center" style={{ marginTop: '96px' }}>
            <p className="text-slate-400 text-sm">
              © 2025 Preston Schlagheck. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection; 