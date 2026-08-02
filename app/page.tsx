"use client";

import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';



export default function Home() {
  return (
    <>

      {/* 1. Load the dependencies in order */}
      <Script src="/js/noise.min.js" strategy="afterInteractive" />
      <Script src="/js/util.js" strategy="afterInteractive" />
      
      {/* 2. Manually kickstart the animation once pipeline.js is ready */}
      <Script 
        src="/js/pipeline.js" 
        strategy="afterInteractive" 
        onLoad={() => {
          window.dispatchEvent(new Event("load"));
        }} 
      />

      <main className="relative z-10 min-h-screen bg-[#020617] font-serif text-slate-100 p-8 md:p-16">
        
        {/* FULL SCREEN PIPELINE BACKGROUND - Locks to the top screen and scrolls away */}
        <div className="content--canvas absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none opacity-80 [&>canvas]:!absolute [&>canvas]:!top-0 [&>canvas]:!left-0 [&>canvas]:!w-full [&>canvas]:!h-full [&>canvas]:!object-cover"></div>

        {/* Bouncing Scroll Arrow - Centered on screen, scrolls away */}
        <div className="absolute top-0 left-0 w-full h-screen pointer-events-none flex justify-center items-end pb-8 z-20">
          <a 
            href="#education" 
            className="flex flex-col items-center text-center animate-bounce p-2 text-slate-400 hover:text-blue-400 transition-colors duration-300 pointer-events-auto"
            aria-label="Scroll to Education"
          >
            <span className="text-sm font-medium mb-1">See more</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="md:w-3/4">
            
  {/* About Me (Landing Page View) */}
            <section id="about" className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-8rem)] flex flex-col justify-center mb-32 z-10">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Hi, I'm Ethan</h1>
                <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl">
                  I'm studying Computer Engineering at the University of Michigan. <br />
                  My interests are in Digital Logic Design, including ASICs and FPGAs. <br /> <br />
                  Feel free to reach out at{' '}
                  <a 
                    href="mailto:etko@umich.edu" 
                    className="font-medium text-slate-100 underline decoration-slate-600 underline-offset-4 hover:text-blue-400 hover:decoration-blue-400 transition-all duration-300"
                  >
                    etko@umich.edu
                  </a>
                </p>
              </div>  
            </section>

            {/* The Rest of the Content (Scrolls into view on a clean background) */}
            <div className="space-y-24 pt-12">
              
              {/* Education */}
              <section id="education">
                <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">Education</h2>
                
                <div className="flex gap-6 items-start">
                  
                  {/* Clickable UMich Logo */}
                  <a href="https://ece.engin.umich.edu/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                    <Image 
                      src="/umich1.png" 
                      alt="University of Michigan Logo" 
                      width={96} 
                      height={96} 
                      className="rounded-lg object-cover shadow-sm border border-slate-700"
                    />
                  </a>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">University of Michigan, Ann Arbor</h3>
                    <p className="text-slate-300">Computer Engineering B.S.E.</p>
                    <p className="text-sm text-slate-400 mt-2">Relevant Coursework: Computer Architecture, Computer Organization, Computer Networks, Digital Logic Design, Digital Integrated Circuits, Data Structures & Algorithms, Embedded Systems, Signals & Systems</p>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section id="experience">
                <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">Experience</h2>
                <div className="space-y-10">
                  
                  {/* Job 1 */}
                  <div className="flex gap-6 items-start">
                    
                    {/* Clickable RTX Logo */}
                    <a href="https://www.rtx.com/collinsaerospace" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                      <Image 
                        src="/rtx1.png" 
                        alt="RTX Logo" 
                        width={56} 
                        height={56} 
                        className="rounded-lg object-cover shadow-sm border border-slate-700"
                      />
                    </a>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-xl font-semibold">FPGA Engineer Intern</h3>
                        <span className="text-sm text-slate-400 font-medium">May 2026 – Present</span>
                      </div>
                      <p className="text-slate-300 mb-2 font-medium">RTX - Collins Aerospace | Melbourne, FL</p>
                      <ul className="list-disc list-inside text-slate-400 space-y-1">
                        <li>Implemented a HIL testing framework for a Artix-7 FPGA to verify modules over Ethernet</li>
                        <li>Reduced test execution times by over 99% when compared to the baseline UART prototype</li>
                      

                        {/* <li>Developing and testing FPGA architectures.</li>
                        <li>Collaborating with senior engineers on aerospace hardware solutions.</li> */}
                      </ul>
                    </div>
                  </div>

                  {/* Job 2 */}
                  <div className="flex gap-6 items-start">
                    
                    {/* Clickable UMich Logo */}
                    <a href="https://eecs370.github.io/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                      <Image 
                        src="/umich_ece.png" 
                        alt="University of Michigan Logo" 
                        width={56} 
                        height={56} 
                        className="rounded-lg object-cover shadow-sm border border-slate-700"
                      />
                    </a>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-xl font-semibold">Computer Organization Class Grader</h3>
                        <span className="text-sm text-slate-400 font-medium">Jan 2026 – May 2026</span>
                      </div>
                      <p className="text-slate-300 mb-2 font-medium">University of Michigan - College of Engineering | Ann Arbor, MI</p>
                      <ul className="list-disc list-inside text-slate-400 space-y-1">
                        <li>EECS 370 - Winter '26 semester</li>
                        {/* <li>Evaluated student assignments and projects on computer architecture principles.</li>
                        <li>Provided detailed technical feedback on hardware design and assembly languages.</li> */}
                      </ul>
                    </div>
                  </div>

                </div>
              </section>

              {/* Projects */}
              <section id="projects">
                <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">Projects</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">2-Way Superscalar Processor</h3>
                    <p className="text-sm text-slate-400 mb-2 font-mono">March 2026 – May 2026 | SystemVerilog, Synopsys DC</p>
                    <p className="text-slate-300">Designed and implemented a synthesizable 2-way superscalar processor for a RISC-style instruction set architecture.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Smart Doorbell Lock</h3>
                    <p className="text-sm text-slate-400 mb-2 font-mono">March 2026 – May 2026 | Embedded C, STM32 IDE</p>
                    <p className="text-slate-300">Constructed a smart doorbell lock system utilizing an STM32, integrating peripheral sensors and logic control.</p>
                  </div>  

                  <div>
                    <h3 className="text-xl font-semibold mb-1">Four-Function Calculator</h3>
                    <p className="text-sm text-slate-400 mb-2 font-mono">May 2025 | Verilog, Quartus</p>
                    <p className="text-slate-300">Built a fully synthesizable, parameterized 11-bit calculator.</p>
                  </div>
                </div>
              </section>

              {/* Interests */}
              <section id="interests">
                <h2 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">Interests</h2>
                <div className="flex flex-wrap gap-3">
                  
                  <div className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/40 hover:bg-slate-700/50 transition-colors text-sm">
                    <strong className="text-slate-200 font-semibold mr-1">Clarinet</strong> 
                  </div>
                  
                  <div className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/40 hover:bg-slate-700/50 transition-colors text-sm">
                    <strong className="text-slate-200 font-semibold mr-1">Rock Climbing</strong> 
                  </div>

                  <div className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/40 hover:bg-slate-700/50 transition-colors text-sm">
                    <strong className="text-slate-200 font-semibold mr-1">Greco-Roman History</strong> 
                  </div>

                </div>
              </section>
            </div>
            
          </div>

          {/* FIXED SOCIAL / ACTION ICONS */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:right-8 lg:right-16 z-50">
            
            {/* Dock wrapper updated for dark mode readability */}
            <div className="flex flex-row md:flex-col gap-8 bg-slate-900/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none px-8 py-4 md:p-0 rounded-full shadow-xl md:shadow-none border border-slate-700 md:border-none items-center justify-center">
              
              {/* LinkedIn Icon */}
              <a 
                href="https://linkedin.com/in/etko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* GitHub Icon */}
              <a 
                href="https://github.com/etko18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Resume Document Icon */}
              <a 
                href="/Ethan_Ko_Resume.pdf" 
                download
                className="text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                aria-label="Download Resume"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <circle cx="12" cy="13" r="2"></circle>
                  <path d="M8 19c0-2.2 1.8-4 4-4s4 1.8 4 4"></path>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </main>
    </>
  );
}