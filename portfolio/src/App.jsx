import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';
// The import statement
import { div, link, title } from 'framer-motion/client';
import { motion } from 'framer-motion';
import { projects, skills } from '../data.js';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed right-0 top-0 h-full w-20 z-50 bg-transparent flex flex-col items-center py-8">
        <div className="flex flex-col space-y-6 flex-1">
          {[
            { name: 'About', icon: <Palette size={24} /> },
            { name: 'Projects', icon: <Zap size={24} /> },
            { name: 'Skills', icon: <Code size={24} /> },
            { name: 'GitHub', icon: <Github size={24} /> },
            { name: 'Contact', icon: <Mail size={24} /> }
            
          ].map((item, index) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.name.toLowerCase())}
              className="group relative w-12 h-12 md:w-16 md:h-16 md:text-lg bg-gray-900/50 hover:bg-blue-900/40 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center border border-blue-900/20 hover:border-blue-600/50 hover:cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              title={item.name}
            >
              <span className="text-blue-400 text-xl group-hover:text-blue-300 transition-colors">
                {item.icon}
              </span>
              
              {/* Tooltip */}
              <div className="absolute right-18 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-blue-900/30">
                {item.name}
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-auto">
          <a href="https://drive.google.com/file/d/1usbfKdVELRkrjT_uzo3x-Xj4EL12s5Ox/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="w-12 h-12 md:w-16 md:h-16 md:text-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center text-white font-bold text-xs hover:cursor-pointer" title="Download Resume">
            CV
          </button>
          </a>
        </div>
      </nav>

      

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-40 left-20 w-48 h-48 bg-blue-300/5 rounded-full blur-2xl animate-bounce-slow"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div 
            className="transform transition-all duration-1000 ease-out"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            {/* Profile Image */}
            <div className="mb-8 animate-fade-in">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 animate-bounce-img">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full animate-spin-slow opacity-75"></div>
                <div className="absolute inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
                <img
                  src=""
                  alt="Developer Profile"
                  className="absolute inset-2 w-full h-full rounded-full object-cover border-2 border-blue-400/30 hover:scale-105 transition-transform duration-500 "
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-lg animate-pulse"></div>
              </div>
            </div>
            <motion.h1
              {...title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent animate-fade-in"
            >
              Soumil Shamak
            </motion.h1>
            
            <div className="flex justify-center space-x-6 mb-12">
              <a
                  href="https://www.github.com/shamak24"
                  className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 animate-fade-in-up"
                  target='_blank'
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/soumil-shamak"
                  className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 animate-fade-in-up"
                  target='_blank'
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:shamaksoumil@gmail.com"
                  className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 animate-fade-in-up"
                  target='_blank'
                >
                  <Mail size={24} />
                </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi, I'm Soumil a Full Stack Developer with hands-on experience in designing, developing, and deploying scalable web applications. I specialize in building robust frontend interfaces and powerful backend architectures using modern technologies such as React, Node.js, and Django.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I actively implement DevOps practices to streamline development workflows, automate deployments, and ensure high system reliability through tools like Docker, GitHub Actions, and cloud platforms including AWS. I also leverage my Data Science knowledge to analyze data, uncover insights, and integrate intelligent features into applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll probably find me reading up on the latest tech news or probably watching movies after all I'm a cinephile.
              </p>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl rotate-6 hover:rotate-12 transition-transform duration-500">
              </div>
              <div className="absolute inset-0 w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-2xl -rotate-6 hover:-rotate-12 transition-transform duration-500">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent pb-2">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 border border-blue-900/20 animate-fade-in-up hover:border-blue-700/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 hover:opacity-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-4 flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.web_link ? (
                        <a href={project.web_link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={30} className="text-white cursor-pointer hover:text-blue-400 hover:scale-125 transition-all duration-200" />
                        </a>
                      ) : null}
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github size={30} className="text-white cursor-pointer hover:text-blue-400 hover:scale-125 transition-all duration-200" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-800/30 hover:bg-blue-800/40 hover:border-blue-600/50 transition-all duration-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
        <section id="skills" className="py-20 px-6 justify-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent pb-2">
          Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-500 border border-blue-900/20 group animate-slide-up hover:shadow-xl hover:shadow-blue-500/10 align-center">
              <div className="inline-flex p-4 bg-blue-900/30 rounded-full mb-6 group-hover:bg-blue-800/40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ">
            <span className='text-2xl'>
              {skill.icon}
            </span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
            {skill.type}
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
            {skill.list.map((item, i) => (
              <li key={i} className="flex items-center space-x-2">
                <span className={`icon-${item.icon} text-blue-400`}></span>
                <span className="text-gray-200">{item.name}</span>
              </li>
            ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section id="github" className="py-20 px-6 bg-gradient-to-b from-black to-blue-950/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent pb-2">
            GitHub Statistics
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* GitHub Stats Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/20 hover:border-blue-700/50 transition-all duration-300 hover:scale-105 animate-fade-in-up">
              <h3 className="text-xl font-bold mb-4 text-center text-blue-400">Overall Stats</h3>
              <div className="flex justify-center">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=shamak24&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=3b82f6&icon_color=60a5fa&text_color=e5e7eb&ring_color=3b82f6"
                  alt="GitHub Stats"
                  className="rounded-lg max-w-full h-auto"
                />
              </div>
            </div>

            {/* Top Languages Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/20 hover:border-blue-700/50 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-400">Most Used Languages</h3>
              <div className="flex justify-center">
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=shamak24&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=3b82f6&text_color=e5e7eb"
                  alt="Top Languages"
                  className="rounded-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* GitHub Streak Stats */}
          {/* <div className="flex justify-center mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/20 hover:border-blue-700/50 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-400">Contribution Streak</h3>
              <div className="flex justify-center">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=shamak24&theme=tokyonight&hide_border=true&background=00000000&stroke=3b82f6&ring=3b82f6&fire=60a5fa&currStreakLabel=e5e7eb&sideLabels=e5e7eb&currStreakNum=3b82f6&sideNums=3b82f6"
                  alt="GitHub Streak"
                  className="rounded-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div> */}

          {/* Activity Graph */}
          {/* <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/20 hover:border-blue-700/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-4 text-center text-blue-400">Contribution Activity</h3>
            <div className="flex justify-center overflow-x-auto">
              <img 
                src="https://github-readme-activity-graph.vercel.app/graph?username=shamak24&theme=tokyo-night&bg_color=00000000&color=3b82f6&line=60a5fa&point=e5e7eb&area=true&hide_border=true"
                alt="GitHub Activity Graph"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-t from-blue-950/20 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent pb-2">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's create something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center space-x-2 animate-pulse-glow">
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/20 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Soumil Shamak
          </p>
          <div className="flex justify-center space-x-4 mt-4 align-center">
            <a
                  href="https://www.github.com/shamak24"
                  className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 animate-fade-in-up"
                  target='_blank'
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/soumil-shamak"
                  className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 animate-fade-in-up"
                  target='_blank'
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:shamaksoumil@gmail.com"
                  className="p-3 bg-blue-900/30 hover:bg-blue-800/50 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 animate-fade-in-up"
                  target='_blank'
                >
                  <Mail size={24} />
                </a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(15px) translateX(-15px) rotate(2deg); }
          66% { transform: translateY(-10px) translateX(15px) rotate(-2deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.2); }
        }
        @keyframes bounce-img {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-img {
          animation: bounce-img 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-progress-bar {
          animation: progress-bar 1.5s ease-out both;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}