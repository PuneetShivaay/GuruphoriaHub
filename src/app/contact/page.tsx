'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Mail, 
  Youtube, 
  Github, 
  Newspaper, 
  Linkedin, 
  Twitter, 
  Send, 
  Sparkles, 
  MessageSquare, 
  Briefcase, 
  Code2, 
  Mic2, 
  Users, 
  CheckCircle2, 
  Clock, 
  Search,
  ArrowRight,
  Zap,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState('general');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      category: category,
      message: formData.get('message'),
      _subject: "New Contact Request from Guruphoria Website",
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/guruphoria@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
        setCategory('general');
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    { name: 'Email', icon: <Mail />, desc: 'Direct professional inquiries.', link: 'mailto:guruphoria@gmail.com', color: 'text-primary' },
    { name: 'YouTube', icon: <Youtube />, desc: 'Tutorial comments & community.', link: 'https://www.youtube.com/@guruphoria', color: 'text-[#EA3323]' },
    { name: 'GitHub', icon: <Github />, desc: 'Code issues & contributions.', link: 'https://github.com/PuneetShivaay', color: 'text-white' },
    { name: 'Medium', icon: <Newspaper />, desc: 'Article discussions.', link: 'https://puneetshivaay.medium.com/', color: 'text-primary' },
    { name: 'LinkedIn', icon: <Linkedin />, desc: 'Professional networking.', link: 'https://in.linkedin.com/company/guruphoria', color: 'text-[#0077B5]' },
    { name: 'Twitter/X', icon: <Twitter />, desc: 'Daily updates & tech tips.', link: '#', color: 'text-white' },
  ];

  const workWithMe = [
    { title: 'AI Workshops', icon: <Sparkles />, desc: 'Hands-on training for teams on LLMs and Agentic AI.' },
    { title: 'Engineering Mentorship', icon: <Code2 />, desc: '1-on-1 guidance for career growth in Software Engineering.' },
    { title: 'Technical Consulting', icon: <Briefcase />, desc: 'Architecture reviews and AI integration strategies.' },
    { title: 'Code Reviews', icon: <Search />, desc: 'Deep dives into codebase for optimization and security.' },
    { title: 'Guest Speaking', icon: <Mic2 />, desc: 'Insights on AI trends at conferences and meetups.' },
    { title: 'Content Collaboration', icon: <Users />, desc: 'Partnering for high-quality technical content.' },
  ];

  const faqs = [
    { q: "How can I collaborate?", a: "I'm always open to meaningful collaborations. Please use the contact form and select 'Collaboration' or 'Partnership' as the category." },
    { q: "Can I request tutorials?", a: "Absolutely! Most of my content is driven by community requests. You can suggest topics via the contact form or YouTube comments." },
    { q: "Do you provide mentoring?", a: "Yes, I offer limited 1-on-1 mentoring slots for engineers looking to specialize in AI and Full-Stack development." },
    { q: "How can I contribute?", a: "You can contribute to our open-source projects on GitHub or join the discussion on our Discord (coming soon)." },
  ];

  const timeline = [
    { step: 'Message Received', desc: 'Your inquiry is securely logged.' },
    { step: 'Review', desc: 'I personally review the details and urgency.' },
    { step: 'Response', desc: 'You receive a detailed reply within 48 hours.' },
    { step: 'Meeting', desc: 'If needed, we schedule a call to dive deeper.' },
  ];

  return (
    <div className="flex flex-col bg-[#050816] text-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
          <Badge variant="outline" className="border-primary/30 text-primary py-1 px-4 text-xs glass uppercase tracking-widest">
            🤝 Get in Touch
          </Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight">
            Let's Build Something <br />
            <span className="text-gradient">Amazing Together</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have a question, collaboration idea, workshop request, speaking invitation, or simply want to connect, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 text-lg font-semibold neon-glow" asChild>
              <Link href="mailto:guruphoria@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg font-semibold glass hover:bg-white/5 border-white/10">
              <Link href="https://www.youtube.com/@guruphoria" target="_blank">
                <Youtube className="mr-2 h-5 w-5" /> Subscribe on YouTube
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {contactCards.map((card) => (
              <Card key={card.name} className="glass p-6 group hover:border-primary/50 transition-all bg-[#101828]/50 border-white/5 text-center flex flex-col items-center">
                <div className={`${card.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h4 className="font-bold text-sm mb-1">{card.name}</h4>
                <p className="text-[10px] text-muted-foreground mb-4">{card.desc}</p>
                <Button variant="link" asChild className="p-0 h-auto text-primary text-xs">
                  <Link href={card.link} target="_blank">Connect</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interaction Area */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Send a Message</h2>
                <p className="text-muted-foreground">I read every inquiry and try to respond as fast as possible.</p>
              </div>
              <Card className="glass p-8 border-white/10 bg-[#101828]/60">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden FormSubmit Fields */}
                  <input type="hidden" name="_subject" value="New Contact Request from Guruphoria Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                      <Input name="name" placeholder="John Doe" className="bg-black/20 border-white/10 focus:border-primary/50 rounded-xl py-6" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                      <Input name="email" type="email" placeholder="john@example.com" className="bg-black/20 border-white/10 focus:border-primary/50 rounded-xl py-6" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                      <Input name="subject" placeholder="How can I help?" className="bg-black/20 border-white/10 focus:border-primary/50 rounded-xl py-6" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="bg-black/20 border-white/10 focus:border-primary/50 rounded-xl py-6">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#101828] border-white/10 text-white">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="project">Project Discussion</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="speaking">Speaking</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                    <Textarea 
                      name="message"
                      placeholder="Tell me more about your inquiry..." 
                      className="bg-black/20 border-white/10 focus:border-primary/50 rounded-xl min-h-[150px] p-4" 
                      required 
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 rounded-full h-12 font-bold text-lg neon-glow">
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* FAQs & Timeline */}
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <MessageSquare className="text-primary h-8 w-8" /> FAQs
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="glass border-white/5 rounded-2xl overflow-hidden px-6">
                      <AccordionTrigger className="hover:no-underline font-bold text-left py-6">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Clock className="text-primary h-8 w-8" /> Response Timeline
                </h2>
                <div className="relative space-y-8 pl-8 border-l-2 border-primary/20">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#101828] border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <h4 className="font-bold text-primary text-lg">{item.step}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Me */}
      <section className="py-24 px-6 bg-[#101828]/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Work With Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Specialized professional services for developers and organizations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workWithMe.map((item, idx) => (
              <Card key={idx} className="glass p-8 group hover:bg-primary/5 transition-all border-white/5 bg-[#101828]/50">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{item.desc}</p>
                <Button variant="outline" className="w-full glass border-white/10 rounded-full group-hover:border-primary/50">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'YouTube', stat: '10k+ Subscribers', icon: <Youtube />, link: 'https://www.youtube.com/@guruphoria' },
              { name: 'GitHub', stat: 'Open Source Labs', icon: <Github />, link: 'https://github.com/PuneetShivaay' },
              { name: 'Medium', stat: '30+ Articles', icon: <Newspaper />, link: 'https://puneetshivaay.medium.com/' },
              { name: 'LinkedIn', stat: 'Professional Network', icon: <Linkedin />, link: 'https://in.linkedin.com/company/guruphoria' },
            ].map((comm) => (
              <Card key={comm.name} className="glass p-8 text-center group bg-[#101828]/40 border-white/5 hover:border-primary/30 transition-all">
                <div className="text-primary flex justify-center mb-6 group-hover:scale-110 transition-transform">{comm.icon}</div>
                <h4 className="font-bold text-lg mb-1">{comm.name}</h4>
                <p className="text-xs text-muted-foreground mb-6">{comm.stat}</p>
                <Button asChild className="w-full bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10">
                  <Link href={comm.link} target="_blank">Join Now</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <Card className="glass p-12 lg:p-20 relative overflow-hidden text-center max-w-4xl mx-auto rounded-[3rem] bg-[#101828]/60 border-white/10">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold leading-tight">Never Miss a New Tutorial</h2>
              <p className="text-muted-foreground text-lg">Receive updates whenever a new YouTube video, Medium article, project, or AI resource is published.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-6 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-3 outline-none focus:border-primary transition-colors text-white"
                />
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-3 h-auto font-bold neon-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
