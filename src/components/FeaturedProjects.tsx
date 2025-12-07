import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Virtual Try-On',
    award: '2nd Prize - State Competition',
    description:
      'AI-powered virtual try-on system that detects body landmarks in real-time and overlays clothing items, enabling users to preview outfits digitally.',
    impact: 'Real-time detection at 30+ FPS with 95% accuracy on diverse body types',
    tech: ['Python', 'OpenCV', 'Mediapipe', 'Deep Learning', 'Flask'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    badge: 'Featured',
  },
  {
    id: 2,
    title: 'Sign Speak',
    description:
      'Autonomous system that recognizes sign language gestures in real-time and converts them into synthesized speech, making communication more accessible.',
    impact: 'Recognizes 100+ sign language gestures with real-time audio synthesis',
    tech: ['Python', 'TensorFlow', 'Mediapipe', 'OpenCV', 'NLP'],
    image: 'https://images.unsplash.com/photo-1516534775068-bb57c9c00bb1?w=600&h=400&fit=crop',
    badge: 'Social Impact',
  },
  {
    id: 3,
    title: 'College Management System',
    description:
      'Full-stack web application for managing student records, attendance, departments, and faculty information with secure authentication and data retrieval.',
    impact: 'Manages 500+ students across multiple departments with 99% uptime',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    badge: 'Full-Stack',
  },
];

function ProjectCard({
  project,
  isVisible,
  index,
}: {
  project: (typeof projects)[0];
  isVisible: boolean;
  index: number;
}) {
  return (
    <div
      className={`opacity-0 transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20 ${index % 2 === 1 ? 'lg:grid-cols-2 lg:auto-cols-fr' : ''}`}>
        <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full">
                {project.badge}
              </span>
              {project.award && (
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                  {project.award}
                </span>
              )}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900">
              {project.title}
            </h3>
          </div>

          <p className="text-slate-600 leading-relaxed text-lg">
            {project.description}
          </p>

          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
            <p className="text-sm font-medium text-slate-600 mb-1">Key Achievement</p>
            <p className="text-slate-900 font-semibold">{project.impact}</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-600">Technology Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium group"
            >
              View Case Study
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/purumedhe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"
            >
              <Github size={18} />
              Code
            </a>
          </div>
        </div>

        <div className={`relative group overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observers = projects.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.2 }
      );

      const element = containerRef.current?.children[index];
      if (element) observer.observe(element);

      return observer;
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return (
    <section id="work" className="py-24 px-4 bg-white relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 space-y-4">
          <p className="text-cyan-600 font-semibold text-sm tracking-wide">FEATURED WORK</p>
          <h2 className="text-5xl lg:text-5xl font-bold text-slate-900">
            Projects That Make an Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Each project represents deep technical expertise, creative problem-solving, and
            real-world impact across AI, computer vision, and full-stack development.
          </p>
        </div>

        <div ref={containerRef} className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isVisible={visibleCards[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
