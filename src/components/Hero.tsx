import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const techStack = ['Python', 'TensorFlow', 'OpenCV', 'React', 'Docker'];

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 overflow-hidden relative bg-gradient-to-br from-slate-50 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-8"
            style={{
              opacity: 1 - scrollY / 500,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Building AI Systems That
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Solve Real Problems
                  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
  
</div>

                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Computer Vision Engineer • AI/ML Developer • 2nd Prize Winner State-Level Competition
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-900 px-6 py-3 rounded-lg font-medium hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300"
              >
                Let's Connect
              </a>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3 font-medium">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/purumedhe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 text-slate-700 hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/purushottam-medheb80617285"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 text-slate-700 hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:purushottamdmedhe@gmail.com"
                className="p-3 rounded-lg bg-slate-100 text-slate-700 hover:bg-cyan-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>

          <div
            className="relative hidden lg:block h-96 lg:h-full"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl opacity-10 blur-2xl" />
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-8 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full opacity-30" />
              <img
                src="/images/profile.jpg"
                alt="Professional profile"
                className="absolute inset-12 w-40 h-40 rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
