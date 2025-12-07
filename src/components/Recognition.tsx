import { Trophy, Award, Zap, BookOpen, Mic } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const achievements = [
  {
    id: 1,
    category: 'Award',
    title: '2nd Prize - State-Level Competition',
    description: 'Maharashtra State-Level Project Competition for Virtual Try-On Project',
    icon: Trophy,
    color: 'from-amber-400 to-amber-600',
    year: '2024',
  },
  {
    id: 2,
    category: 'Achievement',
    title: 'Expert Talk Speaker',
    description: 'Delivered technical talk to 3rd-Year Students at K.K. Wagh Polytechnic, Nashik',
    icon: Mic,
    color: 'from-cyan-400 to-cyan-600',
    year: '2024',
  },
  {
    id: 3,
    category: 'Hackathon',
    title: 'Internal College Hackathon Winner',
    description: 'Won the internal college hackathon for Smart India Hackathon (SIH)',
    icon: Zap,
    color: 'from-green-400 to-green-600',
    year: '2024',
  },
  {
    id: 4,
    category: 'Certification',
    title: 'Microsoft Certified: Azure AI Fundamentals',
    description: 'Professional certification in Azure AI services and fundamentals',
    icon: Award,
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 5,
    category: 'Certification',
    title: 'Introduction to Machine Learning',
    description: 'Comprehensive ML fundamentals course completion',
    icon: BookOpen,
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 6,
    category: 'Certification',
    title: 'Reinforcement Learning Fundamentals',
    description: 'University of Alberta - Advanced RL concepts and applications',
    icon: Brain,
    color: 'from-rose-400 to-rose-600',
  },
];

import { Brain } from 'lucide-react';

function AchievementCard({
  achievement,
  isVisible,
  index,
}: {
  achievement: (typeof achievements)[0];
  isVisible: boolean;
  index: number;
}) {
  const Icon = achievement.icon;

  return (
    <div
      className={`opacity-0 transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="group relative bg-white rounded-xl p-8 border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

        <div className="relative z-10">
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} text-white group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {achievement.category}
                </span>
                {achievement.year && (
                  <span className="text-xs text-slate-400">{achievement.year}</span>
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                {achievement.title}
              </h3>
            </div>
          </div>

          <p className="mt-4 text-slate-600 leading-relaxed">
            {achievement.description}
          </p>

          <div className="mt-6 pt-6 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
            <a
              href="#"
              className="text-sm font-medium text-cyan-600 hover:text-cyan-700 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Verify credential →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Recognition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(achievements.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && containerRef.current) {
          const children = containerRef.current.children;
          Array.from(children).forEach((child, index) => {
            const cardObserver = new IntersectionObserver(
              ([cardEntry]) => {
                if (cardEntry.isIntersecting) {
                  setVisibleCards(prev => {
                    const newVisible = [...prev];
                    newVisible[index] = true;
                    return newVisible;
                  });
                }
              },
              { threshold: 0.2 }
            );
            cardObserver.observe(child);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 space-y-4">
          <p className="text-cyan-600 font-semibold text-sm tracking-wide">RECOGNITION</p>
          <h2 className="text-5xl lg:text-5xl font-bold text-slate-900">
            Awards & Certifications
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Proven expertise through industry recognition, competitive achievements, and professional
            certifications from leading organizations.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              isVisible={visibleCards[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
