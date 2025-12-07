import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">PM</div>
            <p className="text-slate-500">
              Building AI systems and full-stack solutions that create real-world impact.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Work', href: '#work' },
                { label: 'Skills', href: '#skills' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Github, href: 'https://github.com/purumedhe', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/purushottam-medheb80617285', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:purushottamdmedhe@gmail.com', label: 'Email' },
              ].map(social => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:bg-cyan-500 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Purushottam Medhe. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Code2 size={16} />
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
