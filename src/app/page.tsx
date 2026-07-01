'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { fetchLatestVideos } from '@/lib/youtube';
import { fetchLatestArticles } from '@/lib/medium';
import { fetchGitHubRepositories } from '@/lib/github';
import type { YouTubeVideo, MediumArticle, GitHubRepository } from '@/lib/types';
import { 
  ArrowRight, 
  Youtube, 
  Cpu, 
  Code2, 
  Database, 
  Brain, 
  Zap, 
  Layers,
  Sparkles,
  Search,
  BookOpen,
  Calendar,
  Clock,
  Cloud,
  Terminal,
  ExternalLink,
  Github,
  Loader2,
  Star,
  GitFork
} from 'lucide-react';

export default function Home() {
  const heroImage = getPlaceholderImage('brand-hero');
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [latestVideos, latestArticles, latestRepos] = await Promise.all([
        fetchLatestVideos(2),
        fetchLatestArticles(2),
        fetchGitHubRepositories(3)
      ]);
      setVideos(latestVideos);
      setArticles(latestArticles);
      setRepos(latestRepos);
      setIsLoadingVideos(false);
      setIsLoadingArticles(false);
      setIsLoadingRepos(false);
    }
    loadData();
  }, []);

  const technologies = [
    { name: 'Agentic AI', icon: <Brain className="h-6 w-6" />, desc: 'Building autonomous agents that can think and act.' },
    { name: 'LLM Engineering', icon: <Cpu className="h-6 w-6" />, desc: 'Optimizing and scaling large language models.' },
    { name: 'React', icon: <Zap className="h-6 w-6" />, desc: 'Building modern user interfaces with React.' },
    { name: 'Next.js', icon: <Layers className="h-6 w-6" />, desc: 'Production-grade full-stack React applications.' },
    { name: 'Firebase', icon: <Database className="h-6 w-6" />, desc: 'Real-time databases and serverless architecture.' },
    { name: 'Python', icon: <Code2 className="h-6 w-6" />, desc: 'The backbone of modern AI and data science.' },
    { name: 'Machine Learning', icon: <Sparkles className="h-6 w-6" />, desc: 'Algorithms that learn and make decisions.' },
    { name: 'Automation', icon: <Terminal className="h-6 w-6" />, desc: 'Streamlining workflows with intelligent systems.' },
    { name: 'Cloud', icon: <Cloud className="h-6 w-6" />, desc: 'Scaling applications globally.' },
    { name: 'System Design', icon: <Search className="h-6 w-6" />, desc: 'Architecting large-scale software systems.' },
  ];

  const roadmaps = [
    { title: 'AI Engineering Roadmap', time: '12 Weeks', difficulty: 'Advanced', color: 'from-blue-500 to-cyan-400' },
    { title: 'React Developer Roadmap', time: '8 Weeks', difficulty: 'Intermediate', color: 'from-purple-500 to-pink-500' },
    { title: 'Firebase Mastery', time: '4 Weeks', difficulty: 'Beginner', color: 'from-orange-500 to-yellow-500' },
    { title: 'Full Stack Development', time: '16 Weeks', difficulty: 'Advanced', color: 'from-indigo-500 to-purple-400' },
    { title: 'Prompt Engineering', time: '2 Weeks', difficulty: 'Beginner', color: 'from-green-500 to-emerald-400' },
    { title: 'Automation with AI', time: '6 Weeks', difficulty: 'Intermediate', color: 'from-rose-500 to-orange-400' },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-[#050816]">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary/30 text-primary py-1 px-4 text-sm glass uppercase tracking-widest">
              ✨ Redefining Tech Education
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-[1.1]">
              Master <span className="text-gradient">AI.</span><br />
              Build Software.<br />
              Shape the Future.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              Helping developers and students learn AI, LLM Engineering, Agentic AI, Firebase, React, Next.js, Automation, Machine Learning, and Software Engineering through practical real-world tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 text-lg font-semibold neon-glow transition-all">
                <Link href="https://www.youtube.com/@guruphoria" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5" /> Watch on YouTube
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg font-semibold glass hover:bg-white/5 border-white/10">
                <Link href="/courses">
                  Explore Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition duration-1000"></div>
            <div className="relative glass rounded-3xl p-4 overflow-hidden animate-float border-white/10">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={800}
                  height={800}
                  className="rounded-2xl w-full object-cover aspect-square grayscale-[20%] group-hover:grayscale-0 transition duration-500"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              {/* Decorative AI Graphics */}
              <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs font-mono space-y-2">
                <div className="text-primary">import &#123; AI &#125; from 'guruphoria'</div>
                <div className="text-green-400">await AI.generate(future)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full py-24 bg-[#050816] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What You'll <span className="text-primary">Learn</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Deep dive into the most relevant technologies shaping the software industry today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {technologies.map((tech) => (
              <Card key={tech.name} className="glass p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden bg-[#101828]/50 border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 space-y-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-bold">{tech.name}</h3>
                  <p className="text-muted-foreground text-xs">{tech.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="w-full py-24 bg-[#101828]/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Featured Learning <span className="text-primary">Paths</span></h2>
              <p className="text-muted-foreground">Master complex topics with these structured roadmaps.</p>
            </div>
            <Button asChild variant="link" className="text-primary p-0 h-auto">
              <Link href="/courses">
                View all roadmaps <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmaps.map((path) => (
              <Card key={path.title} className="glass p-6 group hover:-translate-y-2 transition-transform duration-300 bg-[#101828]/50 border-white/5">
                <div className={`h-1 w-full bg-gradient-to-r ${path.color} rounded-full mb-6 opacity-80 group-hover:opacity-100`}></div>
                <h3 className="text-xl font-bold mb-4">{path.title}</h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {path.time}</span>
                  <span className="bg-white/5 px-2 py-1 rounded border border-white/10">{path.difficulty}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="w-full py-24 bg-[#050816]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* YouTube Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Youtube className="text-[#EA3323] h-8 w-8" /> Latest Videos
                </h2>
                <Button asChild variant="ghost" className="text-sm hover:text-primary">
                  <Link href="https://www.youtube.com/@guruphoria" target="_blank" rel="noopener noreferrer">Visit Channel</Link>
                </Button>
              </div>
              <div className="grid gap-6">
                {isLoadingVideos ? (
                  Array.from({ length: 2 }).map((_, i) => (
                    <Card key={i} className="glass overflow-hidden bg-[#101828]/50 border-white/5 animate-pulse">
                      <div className="aspect-video bg-white/5" />
                      <div className="p-6 space-y-3">
                        <div className="h-6 bg-white/5 rounded w-3/4" />
                        <div className="h-4 bg-white/5 rounded w-1/2" />
                      </div>
                    </Card>
                  ))
                ) : (
                  videos.map((video) => (
                    <Card key={video.id} className="glass overflow-hidden group bg-[#101828]/50 border-white/5">
                      <div className="relative aspect-video">
                        <Image 
                          src={video.thumbnail} 
                          alt={video.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          data-ai-hint="video thumbnail"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors"></div>
                        <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[10px] font-bold border border-white/10">{video.duration}</div>
                      </div>
                      <div className="p-6 space-y-3">
                        <h4 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h4>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {video.publishedAt}</span>
                          <span>{video.viewCount} views</span>
                        </div>
                        <Button asChild variant="outline" size="sm" className="w-full mt-2 glass border-white/10">
                          <Link href={video.videoUrl} target="_blank" rel="noopener noreferrer">Watch Now</Link>
                        </Button>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>

            {/* Articles Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <BookOpen className="text-primary h-8 w-8" /> Medium Stories
                </h2>
                <Button asChild variant="ghost" className="text-sm hover:text-primary">
                  <Link href="https://puneetshivaay.medium.com/" target="_blank" rel="noopener noreferrer">Read all</Link>
                </Button>
              </div>
              <div className="grid gap-6">
                {isLoadingArticles ? (
                  Array.from({ length: 2 }).map((_, i) => (
                    <Card key={i} className="glass p-6 flex gap-6 bg-[#101828]/50 border-white/5 animate-pulse">
                      <div className="w-32 h-32 bg-white/5 rounded-xl shrink-0" />
                      <div className="space-y-3 flex-grow">
                        <div className="h-4 bg-white/5 rounded w-1/4" />
                        <div className="h-6 bg-white/5 rounded w-3/4" />
                        <div className="h-4 bg-white/5 rounded w-1/2" />
                      </div>
                    </Card>
                  ))
                ) : (
                  articles.map((article) => (
                    <Card key={article.id} className="glass p-6 flex gap-6 group bg-[#101828]/50 border-white/5">
                      <div className="hidden sm:block relative w-32 h-32 rounded-xl overflow-hidden shrink-0 border border-white/5">
                        <Image 
                          src={article.coverImage} 
                          alt={article.title} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          data-ai-hint="article header"
                        />
                      </div>
                      <div className="space-y-3 flex-grow flex flex-col">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] uppercase w-fit">
                          {article.category}
                        </Badge>
                        <h4 className="font-bold text-xl group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{article.readingTime}</span>
                            <span>{article.publishedAt}</span>
                          </div>
                          <Button asChild variant="link" className="p-0 h-auto text-primary">
                            <Link href={article.url} target="_blank" rel="noopener noreferrer">Read Article</Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-24 bg-[#101828]/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="text-primary">Projects</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Open-source tools and experimental applications built with modern AI stacks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoadingRepos ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="glass p-8 bg-[#101828]/50 border-white/5 animate-pulse">
                  <div className="w-12 h-12 rounded-xl bg-white/5 mb-6" />
                  <div className="h-8 bg-white/5 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-white/5 rounded w-full mb-2" />
                  <div className="h-4 bg-white/5 rounded w-2/3 mb-8" />
                  <div className="flex gap-4">
                    <div className="flex-1 h-10 bg-white/5 rounded" />
                    <div className="flex-1 h-10 bg-white/5 rounded" />
                  </div>
                </Card>
              ))
            ) : (
              repos.map((repo) => (
                <Card key={repo.name} className="glass p-8 group hover:border-primary/50 transition-all duration-300 bg-[#101828]/50 border-white/5">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{repo.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{repo.description}</p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground">{repo.language}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3" /> {repo.stars}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <GitFork className="h-3 w-3" /> {repo.forks}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button asChild variant="outline" size="sm" className="flex-1 glass border-white/10 hover:bg-white/5">
                      <Link href={repo.url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/20">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Why Guruphoria */}
      <section className="w-full py-24 bg-[#050816]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Learn by Building', desc: 'Practical projects that mirror real-world industry requirements.' },
              { title: 'Industry Experience', desc: 'Insights from an active Software Development Engineer and Educator.' },
              { title: 'Modern AI Tech', desc: 'Master Agentic AI, LLMs, and modern engineering frameworks.' },
              { title: 'Project-Based', desc: 'Every lesson culminates in a tangible project for your portfolio.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-white/5 bg-[#101828]/40 space-y-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-24">
        <div className="container mx-auto px-6">
          <Card className="glass p-12 lg:p-20 relative overflow-hidden text-center max-w-5xl mx-auto rounded-[3rem] bg-[#101828]/60 border-white/10">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Stay Updated with AI & Software Engineering</h2>
              <p className="text-muted-foreground text-lg">Join 10,000+ developers getting exclusive insights on LLMs, Agentic AI, and full-stack development.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 outline-none focus:border-primary transition-colors text-white text-lg"
                />
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-10 py-4 h-auto text-lg font-bold neon-glow">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
