import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronRight, Code, Cpu, Wrench, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const projects = [
    {
      id: 'inductive-sensing',
      title: 'Inductive Sensing Trigger for Power Tools',
      company: 'Texas Instruments',
      date: 'Aug 2025 - Present',
      tags: ['PCB Design', 'Firmware', 'MSPM0', 'Analog'],
      brief: 'Custom PCB layouts for inductive sensing trigger systems in power tool applications',
      images: ['/images/inductive-sensing-1.jpg', '/images/inductive-sensing-2.jpg'],
      details: [
        'Designing custom PCB layouts for inductive sensing trigger systems in power tool applications',
        'Programming MSPM0 microcontroller firmware to process sensor data and output analog/PWM signals',
        'Tested and debugged analog interface circuits using oscilloscope and spectrum analyzer',
        'Converting prototype EVM systems into production-ready PCB designs for industrial applications'
      ],
      github: '#'
    },
    {
      id: 'autonomous-vehicle',
      title: 'Autonomous Vehicle System',
      company: 'NC State - Embedded Systems',
      date: 'Jan 2025 - May 2025',
      tags: ['MSP430', 'IoT', 'WiFi', 'Motor Control'],
      brief: 'IoT-enabled autonomous car with line-following and WiFi navigation capabilities',
      images: ['/images/autonomous-vehicle-1.jpg', '/images/autonomous-vehicle-2.jpg'],
      details: [
        'Built IoT-enabled autonomous car using MSP430 with analog sensors, motor drivers, and LCD',
        'Programmed ADC-based detection logic for line-following with PWM motors and H-Bridge control',
        'Integrated ESP32 module for Wi-Fi navigation with UART debug output',
        'Demonstrated autonomous operation with WiFi commands and independent navigation'
      ],
      github: 'https://github.com/AkilaA25/AutoNav-IoT-LineFollower'
    },
    {
      id: 'underwater-drone',
      title: 'Underwater Drone',
      company: 'AquaPack Robotics',
      date: 'Aug 2024 - Present',
      tags: ['STM32', 'AUV', 'Embedded Systems', 'PCB'],
      brief: 'Autonomous Underwater Vehicle with embedded systems and threat detection',
      images: ['/images/underwater-drone-1.jpg', '/images/underwater-drone-2.jpg'],
      details: [
        'Electrical team member developing Autonomous Underwater Vehicle',
        'Designed critical alert systems using STM32 and AD3 for threat detection display',
        'Prototyped and validated analog interface circuits before PCB layout',
        'Migrated embedded firmware across hardware platforms'
      ],
      github: 'https://github.com/ncsurobotics'
    },
    {
      id: 'pipeline-simulator',
      title: 'Computer Architecture Pipeline Simulator',
      company: 'NC State University',
      date: 'Aug 2025 - Dec 2025',
      tags: ['C/C++', 'Computer Architecture', 'Performance Analysis'],
      brief: 'Cycle-accurate simulator modeling complete pipeline with out-of-order execution',
      images: [],
      details: [
        'Designed cycle-accurate simulator in C/C++ modeling complete pipeline architecture',
        'Developed two-level cache hierarchy with LRU replacement and write-back policies',
        'Implemented out-of-order superscalar execution with register renaming',
        'Analyzed SPEC benchmarks using Python/MATLAB with CACTI evaluation'
      ],
      github: 'https://github.com/AkilaA25/Computer-Arch-Pipeline-Sim'
    }
  ];

  const workExperience = [
    {
      id: 'sdr-researcher',
      title: 'SDR Systems Researcher',
      company: 'North Carolina State University',
      location: 'Raleigh, NC',
      date: 'Aug 2025 - Present',
      summary: 'Collaborating with Lockheed Martin engineers on RF signal processing pipeline',
      images: [],
      description: [
        'Collaborating with Lockheed Martin engineers on RF signal processing pipeline',
        'Implementing GNU Radio workflows and UHD interfaces for real-time SDR processing',
        'Designed PCB enclosures for drone-mounted software-defined radios',
        'Integrating spectrum analyzer and SDR hardware with embedded testbed infrastructure'
      ]
    },
    {
      id: 'firmware-intern',
      title: 'Firmware Intern',
      company: 'Joint School of Nanoscience and Nanoengineering',
      location: 'Greensboro, NC',
      date: 'Summer 2025',
      summary: 'Conducted research on automated large-scale IoT firmware analysis',
      images: ['/images/firmware-intern-1.jpg', '/images/firmware-intern-2.jpg', '/images/firmware-intern-3.jpg'],
      poster: '/documents/research-poster.pdf',
      description: [
        'Conducted research on automated large-scale IoT firmware analysis',
        'Automated system emulation for 500+ firmware images',
        'Developed bash and python scripts for metadata extraction at scale',
        'Implemented static code analysis techniques across firmware binaries'
      ]
    }
  ];

  const HomePage = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Akila Abeykoon</h1>
        <p className="text-xl text-gray-600 mb-6">Computer & Electrical Engineering Student</p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Specializing in embedded systems, firmware development, and digital circuit design. 
          Passionate about building autonomous systems and signal processing applications.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:akilaabeykoon25@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Mail size={20} /> Contact Me
          </a>
          <a href="https://github.com/AkilaA25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Github size={20} /> GitHub
          </a>
        </div>
      </section>

      {/* Education Preview */}
      <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="text-blue-600" /> Education
          </h2>
          <button 
            onClick={() => setCurrentPage('education')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            View Details <ChevronRight size={20} />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-semibold">North Carolina State University</h3>
          <p className="text-gray-600">B.S. Computer and Electrical Engineering</p>
          <p className="text-gray-500">Aug 2023 - Dec 2026 | GPA: 3.84</p>
        </div>
      </section>

      {/* Work Experience Preview */}
      <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Wrench className="text-blue-600" /> Work Experience
          </h2>
          <button 
            onClick={() => setCurrentPage('work')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            View All <ChevronRight size={20} />
          </button>
        </div>
        <div className="space-y-4">
          {workExperience.map((job) => (
            <div 
              key={job.id} 
              className="border-l-4 border-blue-600 pl-4 cursor-pointer hover:bg-gray-50 p-3 rounded transition-colors"
              onClick={() => setCurrentPage(`work-${job.id}`)}
            >
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-600">{job.company} | {job.date}</p>
              <p className="text-gray-700 mt-2">{job.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Code className="text-blue-600" /> Featured Projects
          </h2>
          <button 
            onClick={() => setCurrentPage('projects')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            View All Projects <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map(project => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                 onClick={() => setCurrentPage(`project-${project.id}`)}>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.company} | {project.date}</p>
              <p className="text-gray-700 mb-4">{project.brief}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Cpu className="text-blue-600" /> Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-lg">Programming</h3>
            <p className="text-gray-700">C, C++, Python, Assembly, Verilog, Java, MATLAB, C#, React, Node.js, Flask, Linux</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg">Hardware/Tools</h3>
            <p className="text-gray-700">Oscilloscope, Spectrum Analyzer, Signal Generators, Analog Discovery 3, PCB Design, SDR</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg">Software/Tools</h3>
            <p className="text-gray-700">Git/GitHub, KiCAD, Vivado, Code Composer Studio, STM32Cube, Visual Studio, IntelliJ, CLion</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg">Technical Skills</h3>
            <p className="text-gray-700">Analog Circuit Design, Digital Circuit Design, Circuit Simulation, CMOS Design, PCB Layout, Data Analysis</p>
          </div>
        </div>
      </section>
    </div>
  );

  const EducationPage = () => (
    <div className="space-y-8">
      <button onClick={() => setCurrentPage('home')} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-4">
        ← Back to Home
      </button>
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-2">North Carolina State University</h2>
        <p className="text-xl text-gray-700 mb-2">Bachelor of Science in Computer and Electrical Engineering</p>
        <p className="text-gray-600 mb-6">August 2023 - December 2026 | GPA: 3.84</p>
        
        <h3 className="text-xl font-semibold mb-3">Relevant Coursework</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">Embedded Systems</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">Microprocessor Architecture</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">Embedded System Architectures</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">Data Structures and OOP</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">Design of Complex Digital Systems</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-medium">Digital Logic Design</p>
          </div>
        </div>
      </div>
    </div>
  );

  const WorkPage = () => (
    <div className="space-y-8">
      <button onClick={() => setCurrentPage('home')} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-4">
        ← Back to Home
      </button>
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="space-y-6">
        {workExperience.map((job) => (
          <div 
            key={job.id} 
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setCurrentPage(`work-${job.id}`)}
          >
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
            <p className="text-xl text-gray-700 mb-1">{job.company}</p>
            <p className="text-gray-600 mb-4">{job.location} | {job.date}</p>
            <p className="text-gray-700 mb-4">{job.summary}</p>
            <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              View Details <ChevronRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const WorkDetailPage = ({ workId }) => {
    const job = workExperience.find(w => w.id === workId);
    if (!job) return <HomePage />;

    return (
      <div className="space-y-8">
        <button onClick={() => setCurrentPage('work')} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-4">
          ← Back to Work Experience
        </button>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
          <p className="text-xl text-gray-700 mb-2">{job.company}</p>
          <p className="text-gray-600 mb-8">{job.location} | {job.date}</p>

          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <ul className="space-y-3 mb-8">
            {job.description.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          {job.images && job.images.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Project Images</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {job.images.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`${job.title} - Image ${idx + 1}`}
                    className="w-full rounded-lg shadow-sm"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {job.poster && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Research Poster</h3>
              <a 
                href={job.poster} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <ExternalLink size={20} /> View Research Poster (PDF)
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  const ProjectsPage = () => (
    <div className="space-y-8">
      <button onClick={() => setCurrentPage('home')} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-4">
        ← Back to Home
      </button>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
               onClick={() => setCurrentPage(`project-${project.id}`)}>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{project.company} | {project.date}</p>
            <p className="text-gray-700 mb-4">{project.brief}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              View Details <ChevronRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectDetailPage = ({ projectId }) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return <HomePage />;

    return (
      <div className="space-y-8">
        <button onClick={() => setCurrentPage('projects')} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-4">
          ← Back to Projects
        </button>
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.company} | {project.date}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <ul className="space-y-3 mb-8">
            {project.details.map((detail, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-blue-600 mt-1">•</span>
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>

          {project.images && project.images.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Project Images</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`${project.title} - Image ${idx + 1}`}
                    className="w-full rounded-lg shadow-sm"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
              <Github size={20} /> View Code on GitHub
            </a>
          )}
        </div>
      </div>
    );
  };

  const ContactPage = () => (
    <div className="space-y-8">
      <button onClick={() => setCurrentPage('home')} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-4">
        ← Back to Home
      </button>
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <p className="text-lg text-gray-700 mb-8">
          I'm always interested in discussing embedded systems, firmware development, or potential collaboration opportunities.
          Feel free to reach out!
        </p>
        <div className="space-y-4">
          <a href="mailto:akilaabeykoon25@gmail.com" className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600">
            <Mail size={24} className="text-blue-600" />
            akilaabeykoon25@gmail.com
          </a>
          <a href="tel:6099981682" className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600">
            <Phone size={24} className="text-blue-600" />
            (609) 998-1682
          </a>
          <a href="https://www.linkedin.com/in/akila-abeykoon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600">
            <Linkedin size={24} className="text-blue-600" />
            linkedin.com/in/akila-abeykoon
          </a>
          <a href="https://github.com/AkilaA25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg text-gray-700 hover:text-blue-600">
            <Github size={24} className="text-blue-600" />
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );

  const ResumePage = () => (
    <div className="space-y-8">
      <button onClick={() => setCurrentPage('home')} className="text-blue-600 hover:text-blue-700 flex items-center gap-1 mb-4">
        ← Back to Home
      </button>
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <div className="bg-gray-100 p-8 rounded-lg text-center">
          <p className="text-gray-600 mb-4">Download my complete resume</p>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <ExternalLink size={20} /> Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  );

  // Navigation
  const Nav = () => (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-gray-900 hover:text-blue-600">
            Akila Abeykoon
          </button>
          <div className="flex gap-6">
            <button onClick={() => setCurrentPage('education')} className="text-gray-700 hover:text-blue-600">Education</button>
            <button onClick={() => setCurrentPage('work')} className="text-gray-700 hover:text-blue-600">Work</button>
            <button onClick={() => setCurrentPage('projects')} className="text-gray-700 hover:text-blue-600">Projects</button>
            <button onClick={() => setCurrentPage('resume')} className="text-gray-700 hover:text-blue-600">Resume</button>
            <button onClick={() => setCurrentPage('contact')} className="text-gray-700 hover:text-blue-600">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'education' && <EducationPage />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'resume' && <ResumePage />}
        {currentPage.startsWith('project-') && <ProjectDetailPage projectId={currentPage.replace('project-', '')} />}
        {currentPage.startsWith('work-') && <WorkDetailPage workId={currentPage.replace('work-', '')} />}
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2024 Akila Abeykoon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;