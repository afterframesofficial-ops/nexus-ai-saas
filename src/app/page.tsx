"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Zap, Shield, LineChart, Code, Bot, 
  Terminal, Check, ChevronDown, Github, Twitter, Linkedin, Menu, X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- REUSABLE UI COMPONENTS ---
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost', size?: 'sm' | 'md' | 'lg' }>(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-primary-foreground shadow-[0_0_20px_rgba(124,58,237,0.3)]",
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10",
    ghost: "hover:bg-white/5 text-zinc-400 hover:text-white"
  };
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-6 text-sm font-medium",
    lg: "h-12 px-8 text-base font-medium"
  };
  return (
    <button ref={ref} className={cn("inline-flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", variants[variant], sizes[size], className)} {...props} />
  );
});
Button.displayName = "Button";

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm", className)}>
    {children}
  </div>
);

// --- SECTIONS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">Nexus AI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#showcase" className="hover:text-white transition-colors">Product</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Start Free</Button>
        </div>

        <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <Badge className="mb-6">v2.0 is now live 🚀</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gradient leading-[1.1]">
            Build AI workflows without engineering bottlenecks.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl">
            The production-ready AI infrastructure for modern startups. Connect models, orchestrate logic, and scale globally in minutes—not months.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group">
              Start Free 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative lg:h-[600px] w-full rounded-2xl glass-panel p-2 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-2xl" />
          <div className="w-full h-full bg-[#111113]/90 rounded-xl border border-white/5 overflow-hidden flex flex-col">
            {/* Mockup Header */}
            <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="ml-4 text-xs font-mono text-zinc-500">nexus-dashboard / production</div>
            </div>
            {/* Mockup Body */}
            <div className="p-6 flex-1 flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="h-24 w-1/3 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                  <div className="text-xs text-zinc-400">Total Requests</div>
                  <div className="text-2xl font-bold">2.4M</div>
                </div>
                <div className="h-24 w-1/3 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                  <div className="text-xs text-zinc-400">Avg Latency</div>
                  <div className="text-2xl font-bold text-emerald-400">42ms</div>
                </div>
                <div className="h-24 w-1/3 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                  <div className="text-xs text-zinc-400">Error Rate</div>
                  <div className="text-2xl font-bold">0.01%</div>
                </div>
              </div>
              <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/5 p-4 relative overflow-hidden">
                <div className="absolute left-0 top-1/2 w-full h-[1px] bg-primary/20" />
                <svg className="w-full h-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#7C3AED" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustedBy = () => {
  const logos = ['OpenAI', 'Vercel', 'Notion', 'GitHub', 'Supabase', 'Stripe'];
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-zinc-500 mb-8">POWERING NEXT-GENERATION TEAMS AT</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-40 grayscale">
          {logos.map((logo) => (
            <div key={logo} className="text-xl md:text-2xl font-bold tracking-tighter">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const features = [
    { icon: Bot, title: "AI Automation", desc: "Build multi-step AI agents that execute complex tasks autonomously." },
    { icon: LineChart, title: "Smart Analytics", desc: "Real-time token usage, cost tracking, and model performance metrics." },
    { icon: Code, title: "API Integration", desc: "Drop-in SDKs for Next.js, Python, and Node. Native GraphQL support." },
    { icon: Shield, title: "Enterprise Security", desc: "SOC2 compliant, end-to-end encryption, and custom data retention." },
    { icon: Terminal, title: "Real-time Monitoring", desc: "Debug prompts and view exact inputs/outputs with distributed tracing." },
    { icon: Zap, title: "Edge Inference", desc: "Route requests to the nearest edge node for sub-50ms global latency." },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Everything you need to scale AI.</h2>
          <p className="text-zinc-400 text-lg">Stop building plumbing. We provide the complete infrastructure stack so you can focus on your product.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feat.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feat.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Visual Builder", "Code Export", "Analytics"];

  return (
    <section id="showcase" className="py-24 bg-surface/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Designed for developers.</h2>
          <p className="text-zinc-400 text-lg">Seamlessly bridge the gap between visual orchestration and production code.</p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                activeTab === i 
                  ? "bg-white text-black shadow-lg" 
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="glass-panel rounded-2xl h-[500px] w-full flex items-center justify-center p-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex items-center justify-center"
            >
              {activeTab === 0 && (
                <div className="w-full h-full border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center bg-white/[0.01]">
                  <p className="text-zinc-500 font-mono text-sm">Drag-and-drop canvas UI visualization</p>
                </div>
              )}
              {activeTab === 1 && (
                <div className="w-full h-full rounded-xl bg-[#0d0d0f] border border-white/10 p-6 text-left overflow-hidden">
                  <pre className="text-sm text-emerald-400 font-mono">
                    <code>
{`import { NexusClient } from '@nexus/sdk';

const client = new NexusClient(process.env.NEXUS_API_KEY);

export async function POST(req: Request) {
  const { prompt } = await req.json();
  
  const stream = await client.workflows.run('content-gen', {
    inputs: { prompt },
    stream: true
  });

  return new Response(stream);
}`}
                    </code>
                  </pre>
                </div>
              )}
              {activeTab === 2 && (
                <div className="w-full h-full border border-white/10 rounded-xl bg-gradient-to-b from-white/5 to-transparent flex items-end p-8 gap-4">
                  {[40, 70, 45, 90, 65, 85, 120].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/50 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
        {[
          { label: "Workflows Automated", value: "2M+" },
          { label: "Global Uptime", value: "99.99%" },
          { label: "Execution Speed", value: "<50ms" },
          { label: "Active Teams", value: "10k+" },
        ].map((stat, i) => (
          <div key={i} className="pl-8 first:pl-0 first:border-0 border-white/10">
            <div className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
            <div className="text-sm font-medium text-zinc-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for indie hackers and side projects.",
      price: isAnnual ? "29" : "39",
      features: ["10,000 API calls/mo", "Basic analytics", "Community support", "3 Active Workflows"],
      highlight: false
    },
    {
      name: "Pro",
      desc: "For scaling startups needing power and reliability.",
      price: isAnnual ? "99" : "129",
      features: ["500,000 API calls/mo", "Advanced analytics", "Priority email support", "Unlimited Workflows", "Custom Domains"],
      highlight: true
    },
    {
      name: "Enterprise",
      desc: "Custom limits and dedicated infrastructure.",
      price: "Custom",
      features: ["Unlimited API calls", "Dedicated success manager", "24/7 Phone support", "SSO & SAML", "On-premise deployment"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Simple, transparent pricing.</h2>
          <div className="flex items-center justify-center gap-3 text-sm">
            <span className={cn("transition-colors", !isAnnual ? "text-white font-medium" : "text-zinc-500")}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 bg-white/10 rounded-full relative p-1 transition-colors hover:bg-white/20 focus:outline-none"
            >
              <motion.div 
                className="w-4 h-4 bg-primary rounded-full"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={cn("transition-colors flex items-center gap-2", isAnnual ? "text-white font-medium" : "text-zinc-500")}>
              Annually <Badge className="py-0.5 px-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Save 20%</Badge>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={cn(
                "rounded-3xl p-8 glass-panel relative",
                plan.highlight ? "border-primary/50 shadow-[0_0_40px_rgba(124,58,237,0.15)] md:-mt-8 md:mb-8" : "border-white/5"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-6 h-10">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold tracking-tight">{plan.price === "Custom" ? "Custom" : `$${plan.price}`}</span>
                {plan.price !== "Custom" && <span className="text-zinc-500">/mo</span>}
              </div>
              <Button variant={plan.highlight ? "primary" : "secondary"} className="w-full mb-8">
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
              <ul className="space-y-4">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How does the API integration work?", a: "We provide comprehensive SDKs for all major languages. You can integrate our service into your existing codebase with just three lines of code." },
    { q: "Is my data secure?", a: "Absolutely. We are SOC2 Type II compliant. We encrypt all data at rest and in transit, and we do not train our models on your proprietary data." },
    { q: "Can I self-host the infrastructure?", a: "Yes, our Enterprise plan includes an on-premise deployment option via Docker and Kubernetes Helm charts." },
    { q: "What happens if I exceed my API limits?", a: "We never hard-cap your production traffic. You'll simply be billed for overages at your plan's standard rate at the end of the billing cycle." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 border-y border-white/5">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-panel border-white/5 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between font-medium text-left focus:outline-none"
              >
                {faq.q}
                <ChevronDown className={cn("w-5 h-5 text-zinc-500 transition-transform", openIdx === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-zinc-400 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-primary/10 blur-[100px]" />
    <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gradient">
        Launch faster with production-ready AI infrastructure.
      </h2>
      <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
        Join thousands of modern teams building the future of software. Get started for free today.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="w-full sm:w-auto">Start Building Free</Button>
        <Button variant="secondary" size="lg" className="w-full sm:w-auto">Read the Docs</Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 pt-16 pb-8">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center">
              <Zap className="h-3 w-3 text-white" />
            </div>
            <span className="font-bold tracking-tight">Nexus AI</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs mb-6">
            The infrastructure layer for modern AI applications. Built for scale, designed for developers.
          </p>
          <div className="flex gap-4 text-zinc-500">
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 gap-4">
        <p>© {new Date().getFullYear()} Nexus AI Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <FeaturesGrid />
      <ProductShowcase />
      <Stats />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
