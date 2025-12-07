import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 space-y-4">
          <p className="text-cyan-600 font-semibold text-sm tracking-wide">MY JOURNEY</p>
          <h2 className="text-5xl lg:text-5xl font-bold text-slate-900">
            From Curiosity to Creation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The Path to AI Engineering
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                My journey began with curiosity about how machines see and understand the world. During my polytechnic years, I fell in love with computer vision and AI, building projects that weren't just academically interesting but solved real problems.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Now, pursuing a B.Tech in Computer Science with AI/ML specialization at Alliance University, I'm deepening my expertise while continuing to build systems that push the boundaries of what's possible with AI.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Why I Build
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every project I undertake answers the question: "How can I make this technology more accessible or solve a real human problem?" Whether it's enabling virtual fashion try-ons or helping the deaf and hard-of-hearing community communicate more freely, impact drives every line of code I write.
              </p>
            </div>

            <div className="pt-8">
              <h4 className="font-bold text-slate-900 mb-6">Education & Background</h4>
              <div className="space-y-4">
                {[
                  {
                    year: '2027',
                    title: 'B.Tech Computer Science Engineering (AI/ML)',
                    org: 'Alliance University, Bengaluru',
                    detail: 'CGPA: 7.8',
                  },
                  {
                    year: '2024',
                    title: '12th Grade',
                    org: 'K.K. Wagh Polytechnic, Nashik',
                    detail: '81.11%',
                  },
                  {
                    year: '2021',
                    title: '10th Grade',
                    org: 'K.N. Kela High School',
                    detail: '78.60%',
                  },
                ].map((edu, idx) => (
                  <div key={idx} className="pb-4 border-b border-slate-200 last:border-0">
                    <div className="flex items-start gap-4">
                      <span className="text-sm font-bold text-cyan-600 min-w-fit">{edu.year}</span>
                      <div>
                        <h5 className="font-bold text-slate-900">{edu.title}</h5>
                        <p className="text-slate-600 text-sm">{edu.org}</p>
                        <p className="text-slate-500 text-sm">{edu.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Technical Philosophy</h4>
              <ul className="space-y-4">
                {[
                  'Write code that scales and performs, not just works',
                  'Prioritize user experience in every technical decision',
                  'Build systems that are maintainable and well-documented',
                  'Embrace continuous learning and emerging technologies',
                  'Contribute to projects that create social impact',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Interests Beyond Code</h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                When I'm not coding, you'll find me exploring new AI applications, contributing to open-source projects, or mentoring junior developers. I'm passionate about making technology education accessible to everyone.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Open Source', 'Mentoring', 'AI Ethics', 'Tech Speaking', 'Innovation'].map(
                  interest => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-white text-cyan-700 text-sm font-medium rounded-full border border-cyan-200"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Current Focus</h4>
              <p className="text-slate-700 mb-4">
                I'm currently focused on:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Advanced computer vision applications</li>
                <li>• Real-time system optimization</li>
                <li>• Full-stack AI product development</li>
                <li>• Open source contributions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
