'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Github, 
  Youtube, 
  Newspaper, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Globe, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Award
} from 'lucide-react';
import { GuruphoriaLogo } from './logo';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export function Footer() {
  const [year, setYear] = useState(2024);
  const brandLogo = getPlaceholderImage('brand-logo');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    learning: [
      { name: 'AI Engineering', href: '/explore' },
      { name: 'LLM Mastery', href: '/courses' },
      { name: 'Agentic AI Labs', href: '/projects' },
      { name: 'Full-Stack Labs', href: '/courses' },
    ],
    resources: [
      { name: 'Technical Blog', href: 'https://puneetshivaay.medium.com/' },
      { name: 'GitHub Labs', href: 'https://github.com/PuneetShivaay' },
      { name: 'Cheat Sheets', href: '/resources' },
      { name: 'AI Prompts', href: '/resources' },
    ],
    company: [
      { name: 'About the Founder', href: '/about' },
      { name: 'Contact & Support', href: '/contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ]
  };

  return (
    <footer className="border-t border-white/5 bg-[#050816] pt-24 pb-12 relative overflow-hidden reveal-section">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group" prefetch={false}>
              <div className="bg-primary/20 p-1.5 rounded-xl group-hover:bg-primary/30 transition-all duration-300 overflow-hidden shadow-2xl group-hover:scale-110 active:scale-95">
                {brandLogo ? (
                  <Image 
                    src={brandLogo.imageUrl} 
                    alt="Guruphoria" 
                    width={48} 
                    height={48} 
                    className="h-10 w-10 object-contain rounded-lg transition-transform group-hover:scale-105"
                  />
                ) : (
                  <GuruphoriaLogo className="h-10 w-10 text-primary" />
                )}
              </div>
              <span className="text-2xl font-headline font-extrabold tracking-tighter uppercase text-white transition-all group-hover:text-primary group-hover:translate-x-1">Guruphoria</span>
            </Link>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
                Empowering the next generation of engineers through elite, project-based AI and Software Engineering education.
              </p>
              
              {/* Brand Metadata */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest transition-all hover:translate-x-1 cursor-default">
                  <ShieldCheck className="h-3 w-3 animate-pulse" />
                  <span>Educational Technology Platform</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest transition-all hover:translate-x-1 cursor-default">
                  <Zap className="h-3 w-3" />
                  <span>Built for Developers</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest transition-all hover:translate-x-1 cursor-default">
                  <Award className="h-3 w-3" />
                  <span>Founded in 2020</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: 'https://github.com/PuneetShivaay', label: 'GitHub' },
                { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@guruphoria', label: 'YouTube' },
                { icon: <Newspaper className="w-5 h-5" />, href: 'https://puneetshivaay.medium.com/', label: 'Medium' },
                { icon: <Linkedin className="w-5 h-5" />, href: 'https://in.linkedin.com/company/guruphoria', label: 'LinkedIn' },
                { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
              ].map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:-translate-y-1 active:scale-90 transition-all duration-300 border border-white/5 hover:border-primary/50"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Track Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2 group/title cursor-default">
              <span className="w-4 h-px bg-primary transition-all group-hover/title:w-8"></span> Learning Tracks
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {footerLinks.learning.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                    {link.name} <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resource Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2 group/title cursor-default">
              <span className="w-4 h-px bg-primary transition-all group-hover/title:w-8"></span> Resources
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                    {link.name} <ExternalLink className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter / Contact Column */}
          <div className="space-y-10">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2 group/title cursor-default">
                <span className="w-4 h-px bg-primary transition-all group-hover/title:w-8"></span> Newsletter
              </h4>
              <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest mb-4 transition-colors hover:text-white">Stay updated with latest technical labs.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs w-full focus:border-primary outline-none transition-all text-white font-medium hover:bg-white/10"
                />
                <button className="bg-primary text-white p-3 rounded-lg hover:scale-105 active:scale-90 transition-all shadow-[0_0_15px_rgba(14,165,255,0.3)] hover:shadow-primary/50">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2 group/title cursor-default">
                <span className="w-4 h-px bg-primary transition-all group-hover/title:w-8"></span> Direct Inquiry
              </h4>
              <Link href="mailto:guruphoria@gmail.com" className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-3 text-sm font-semibold group/mail">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/mail:bg-primary/10 transition-all border border-white/5 group-hover/mail:border-primary/50 group-hover/mail:scale-110 active:scale-90">
                  <Mail className="h-4 w-4 transition-transform group-hover/mail:rotate-12" />
                </div>
                <span className="group-hover/mail:translate-x-1 transition-transform">guruphoria@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em]">
            <p className="hover:text-white transition-colors cursor-default">© {year} GURUPHORIA. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 transition-all hover:bg-emerald-500/10 hover:border-emerald-500/30 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Made in India 🇮🇳</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-primary transition-all duration-300 hover:translate-y-[-1px]">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-all duration-300 hover:translate-y-[-1px]">Terms</Link>
            <Link href="#" className="hover:text-primary transition-all duration-300 hover:translate-y-[-1px]">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}