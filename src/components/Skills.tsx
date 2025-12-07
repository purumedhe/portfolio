import {
  Code2,
  Brain,
  Database,
  Zap,
  Server,
  Palette,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'AI/ML & Computer Vision',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', proficiency: 'Advanced' },
      { name: 'OpenCV', proficiency: 'Advanced' },
      { name: 'Mediapipe', proficiency: 'Advanced' },
      { name: 'Deep Learning', proficiency: 'Intermediate' },
      { name: 'Neural Networks', proficiency: 'Intermediate' },
      { name: 'Image Processing', proficiency: 'Advanced' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', proficiency: 'Advanced' },
      { name: 'JavaScript', proficiency: 'Intermediate' },
      { name: 'HTML/CSS', proficiency: 'Intermediate' },
      { name: 'PHP', proficiency: 'Beginner' },
      { name: 'C', proficiency: 'Intermediate' },
    ],
  },
  {
    title: 'Databases & Platforms',
    icon: Database,
    skills: [
      { name: 'MySQL', proficiency: 'Advanced' },
      { name: 'MongoDB', proficiency: 'Intermediate' },
      { name: 'SQLite', proficiency: 'Intermediate' },
      { name: 'Oracle', proficiency: 'Beginner' },
      { name: 'Azure AI', proficiency: 'Certified' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Zap,
    skills: [
      { name: 'Git', proficiency: 'Advanced' },
      { name: 'Docker', proficiency: 'Intermediate' },
      { name: 'VS Code', proficiency: 'Advanced' },
      { name: 'Flask', proficiency: 'Intermediate' },
      { name: 'React', proficiency: 'Intermediate' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: [
      { name: 'Flask', proficiency: 'Intermediate' },
      { name: 'React', proficiency: 'Intermediate' },
      { name: 'NLP', proficiency: 'Intermediate' },
      { name: 'PyTorch', proficiency: 'Beginner' },
    ],
  },
  {
    title: 'Design & Collaboration',
    icon: Palette,
    skills: [
      { name: 'Figma', proficiency: 'Intermediate' },
      { name: 'UI/UX Design', proficiency: 'Beginner' },
      { name: 'Problem Solving', proficiency: 'Advanced' },
      { name: 'Technical Documentation', proficiency: 'Advanced' },
    ],
  },
];

function ProficiencyBadge({ proficiency }: { proficiency: string }) {
  const colors: Record<string, string> = {
    Advanced: 'bg-cyan-100 text-cyan-700',
    Intermediate: 'bg-blue-100 text-blue-700',
    Beginner: 'bg-slate-100 text-slate-700',
    Certified: 'bg-amber-100 text-amber-700',
  };
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded ${colors[proficiency] || ''}`}>
      {proficiency}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 space-y-4">
          <p className="text-cyan-600 font-semibold text-sm tracking-wide">EXPERTISE</p>
          <h2 className="text-5xl lg:text-5xl font-bold text-slate-900">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Proficient in cutting-edge AI/ML frameworks, full-stack development, and a growing
            ecosystem of modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-white rounded-xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 100}ms backwards`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-100 rounded-lg group-hover:bg-cyan-500 transition-colors">
                    <Icon size={24} className="text-cyan-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map(skill => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <span className="font-medium text-slate-800">{skill.name}</span>
                      <ProficiencyBadge proficiency={skill.proficiency} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
