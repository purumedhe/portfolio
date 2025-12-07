import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';


interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: 'collaboration',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            project_type: formData.projectType,
            message: formData.message,
          },
        ]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({ name: '', email: '', projectType: 'collaboration', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-cyan-600 font-semibold text-sm tracking-wide">GET IN TOUCH</p>
          <h2 className="text-5xl lg:text-5xl font-bold text-slate-900">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Whether you're
            looking for collaboration, hiring, or just want to chat about tech—reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Mail,
              title: 'Email',
              value: 'purushottamdmedhe@gmail.com',
              href: 'mailto:purushottamdmedhe@gmail.com',
            },
            {
              icon: Linkedin,
              title: 'LinkedIn',
              value: 'Connect with me',
              href: 'https://www.linkedin.com/in/purushottam-medheb80617285',
            },
            {
              icon: Github,
              title: 'GitHub',
              value: 'Follow my work',
              href: 'https://github.com/purumedhe',
            },
          ].map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-cyan-100 rounded-lg w-fit mb-4 group-hover:bg-cyan-500 transition-colors">
                  <Icon size={24} className="text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{contact.title}</h3>
                <p className="text-slate-600 text-sm group-hover:text-cyan-600 transition-colors">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Send Me a Message</h3>

          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle size={20} className="text-green-600" />
              <p className="text-green-800 font-medium">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">Error: {error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                Inquiry Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all bg-white"
              >
                <option value="collaboration">Collaboration</option>
                <option value="hiring">Hiring</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>

          <p className="text-sm text-slate-500 text-center mt-6">
            I typically respond within 24 hours. Can't wait to hear from you!
          </p>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-center">
          <p className="text-slate-700 mb-4">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse" />
            <span className="font-semibold">Currently available for opportunities</span>
          </p>
          <p className="text-slate-600">
            Open to internships, freelance projects, and full-time roles in AI/ML and full-stack development.
          </p>
        </div>
      </div>
    </section>
  );
}
