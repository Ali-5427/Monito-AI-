// HPI 1.5-V
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Shield, BarChart3, Users, DollarSign, Check, ChevronDown, Terminal, Activity, Lock } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { Image } from '../ui/image';
import { BaseCrudService } from '../../../integrations';
import {
  HowItWorksSteps,
  ProductFeatures,
  UseCases,
  UserTestimonials,
  PricingPlans,
  FrequentlyAskedQuestions,
} from '../../entities';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

// --- Utility Components for Motion & Layout ---

const AnimatedReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className || ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const NeonGridBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[#0D1117]" />
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)`,
        backgroundSize: '4rem 4rem',
        maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
      }}
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#0D1117]/50 to-[#0D1117]" />
  </div>
);

const GlowingCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative group border border-white/10 bg-white/5 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(100, 255, 218, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- Main Component ---

export default function HomePage() {
  // --- Data Fidelity Protocol: Canonical Data Sources ---
  const [howItWorksSteps, setHowItWorksSteps] = useState<HowItWorksSteps[]>([]);
  const [features, setFeatures] = useState<ProductFeatures[]>([]);
  const [useCases, setUseCases] = useState<UseCases[]>([]);
  const [testimonials, setTestimonials] = useState<UserTestimonials[]>([]);
  const [pricingPlans, setPricingPlans] = useState<PricingPlans[]>([]);
  const [faqs, setFaqs] = useState<FrequentlyAskedQuestions[]>([]);

  // --- Data Fetching (Preserved) ---
  useEffect(() => {
    const fetchData = async () => {
      const [stepsData, featuresData, useCasesData, testimonialsData, pricingData, faqsData] =
        await Promise.all([
          BaseCrudService.getAll<HowItWorksSteps>('howitworkssteps'),
          BaseCrudService.getAll<ProductFeatures>('productfeatures'),
          BaseCrudService.getAll<UseCases>('usecases'),
          BaseCrudService.getAll<UserTestimonials>('usertestimonials'),
          BaseCrudService.getAll<PricingPlans>('pricingplans'),
          BaseCrudService.getAll<FrequentlyAskedQuestions>('faqs'),
        ]);

      setHowItWorksSteps(stepsData.items.sort((a, b) => (a.stepNumber || 0) - (b.stepNumber || 0)));
      setFeatures(featuresData.items);
      setUseCases(useCasesData.items);
      setTestimonials(testimonialsData.items);
      setPricingPlans(pricingData.items);
      setFaqs(faqsData.items.filter((faq) => faq.isPublished).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
    };

    fetchData();
  }, []);

  // --- Scroll Progress for Parallax ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#0D1117] text-foreground font-paragraph selection:bg-primary/30 selection:text-primary-foreground overflow-x-clip">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <Header />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
        <NeonGridBackground />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="relative z-10 w-full max-w-[100rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
            <AnimatedReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono text-primary tracking-wider uppercase">Live Profit Tracking</span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={100}>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight text-white">
                Profitability, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                  Visualized.
                </span>
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={200}>
              <p className="font-paragraph text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Stop guessing. Monito AI fuses your Stripe revenue streams with AI provider costs to reveal the true unit economics of every single user in real-time.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="/app"
                  className="group relative px-8 py-4 bg-primary text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    Get Started Free <ArrowRight className="w-5 h-5" />
                  </span>
                </a>
                <a
                  href="/demo"
                  className="px-8 py-4 text-white border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors backdrop-blur-sm"
                >
                  View Live Demo
                </a>
              </div>
            </AnimatedReveal>

            {/* Trust Indicators */}
            <AnimatedReveal delay={400}>
              <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-sm font-mono text-gray-500">TRUSTED BY FOUNDERS AT</span>
                {/* Placeholder logos using text for now as per instructions to not invent data, but styling implies logos */}
                <div className="flex gap-6 font-heading font-bold text-white/50">
                  <span>ACME</span>
                  <span>NEXUS</span>
                  <span>ORBIT</span>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Hero Visual / Dashboard Preview */}
          <div className="lg:col-span-5 relative perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateY: -15, rotateX: 5 }}
              animate={{ opacity: 1, rotateY: -5, rotateX: 5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-[#0D1117]/80 backdrop-blur-xl">
                {/* Mock Browser Header */}
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                {/* Dashboard Content Image */}
                <div className="relative aspect-[4/3] group">
                  <Image
                    src="/images/hero-dashboard.jpg"
                    alt="Monito AI Dashboard Interface showing profit metrics"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Overlay Data Points */}
                  <div className="absolute top-1/4 right-10 bg-[#0D1117]/90 border border-primary/30 p-4 rounded-lg shadow-xl backdrop-blur-md animate-bounce-slow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1.5 bg-primary/20 rounded text-primary"><TrendingUp size={16} /></div>
                      <span className="text-xs text-gray-400 font-mono">NET MARGIN</span>
                    </div>
                    <div className="text-2xl font-bold text-white font-heading">+84.2%</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements behind dashboard */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-2xl -z-10 opacity-50" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to Analyze</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* --- STATS TICKER (Sticky/Parallax) --- */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: 'Revenue Tracked', value: '$2.4M+', icon: DollarSign, color: 'text-primary' },
              { label: 'Users Analyzed', value: '15K+', icon: Users, color: 'text-secondary' },
              { label: 'Cost Savings', value: '32%', icon: TrendingUp, color: 'text-green-400' },
              { label: 'Data Sources', value: '12+', icon: Activity, color: 'text-blue-400' },
            ].map((stat, index) => (
              <AnimatedReveal key={index} delay={index * 100} className="flex flex-col items-center text-center px-4">
                <stat.icon className={`w-6 h-6 ${stat.color} mb-3 opacity-80`} />
                <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (Sticky Scroll) --- */}
      <section id="how-it-works" className="relative py-32 px-6">
        <div className="max-w-[100rem] mx-auto">
          <AnimatedReveal className="mb-24 text-center">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              The <span className="text-primary">Profitability</span> Pipeline
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From raw data to actionable insights in three automated steps.
            </p>
          </AnimatedReveal>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Left Column: Sticky Visuals */}
            <div className="hidden lg:block relative h-[calc(100vh-200px)] sticky top-32">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full p-12 flex items-center justify-center">
                  {/* Abstract representation of the process - this would ideally change based on scroll position in a more complex implementation, 
                       but for this single-file robust version, we'll use a static complex visual that represents the whole flow */}
                  <div className="relative w-full aspect-square max-w-md">
                    <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-8 border border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/images/profitability-pipeline.jpg"
                        alt="Data processing visualization"
                        width={400}
                        height={400}
                        className="object-contain drop-shadow-[0_0_30px_rgba(100,255,218,0.3)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Scrolling Steps */}
            <div className="flex flex-col gap-32 py-12">
              {howItWorksSteps.map((step, index) => (
                <AnimatedReveal key={step._id} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#1E293B] border border-primary/30 flex items-center justify-center text-primary font-bold font-mono text-xl z-10 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      {step.stepNumber}
                    </div>
                    {index !== howItWorksSteps.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-primary/30 to-transparent my-4" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>
                    {step.icon && (
                      <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 mb-6 lg:hidden">
                        <Image
                          src={step.icon}
                          alt={step.title || "Step icon"}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {step.callToActionText && (
                      <a href="/app" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-mono text-sm uppercase tracking-wider">
                        {step.callToActionText} <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES (Bento Grid) --- */}
      <section id="features" className="py-32 px-6 bg-[#0D1117] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[100rem] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <AnimatedReveal>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-white">
                Intelligence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Unleashed</span>
              </h2>
            </AnimatedReveal>
            <AnimatedReveal delay={200}>
              <p className="text-gray-400 max-w-md text-right md:text-left">
                A comprehensive suite of tools designed to dissect your unit economics with surgical precision.
              </p>
            </AnimatedReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedReveal key={feature._id} delay={index * 50} className={index === 0 || index === 3 ? "md:col-span-2" : ""}>
                <GlowingCard className="h-full rounded-2xl p-8 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-primary">
                        <Zap className="w-6 h-6" />
                      </div>
                      {feature.isNew && (
                        <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold border border-secondary/20">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {feature.learnMoreUrl && (
                    <div className="mt-8 pt-6 border-t border-white/5">
                      <a href={feature.learnMoreUrl} className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                        Explore Feature <ArrowRight size={14} />
                      </a>
                    </div>
                  )}
                </GlowingCard>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- USE CASES (Split View) --- */}
      <section id="use-cases" className="py-32 px-6 bg-[#161b22] border-y border-white/5">
        <div className="max-w-[100rem] mx-auto">
          <AnimatedReveal className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Who is Monito AI for?
            </h2>
            <p className="text-gray-400">Built for the data-obsessed.</p>
          </AnimatedReveal>

          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <AnimatedReveal key={useCase._id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-8">
                  <div className="inline-block p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                    <Terminal className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-white">
                    {useCase.title}
                  </h3>
                  <div className="space-y-4">
                    {[useCase.descriptionPoint1, useCase.descriptionPoint2, useCase.descriptionPoint3].filter(Boolean).map((point, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                        <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-gray-300">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <Image
                      src={useCase.illustration || '/images/use-case-illustration.png'}
                      alt={useCase.title || "Use case illustration"}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (Masonry-ish) --- */}
      <section className="py-32 px-6 relative">
        <div className="max-w-[100rem] mx-auto">
          <AnimatedReveal className="mb-16">
            <h2 className="font-heading text-4xl font-bold text-white">Founder Stories</h2>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <AnimatedReveal key={testimonial._id} delay={index * 100}>
                <div className="h-full p-8 rounded-2xl bg-[#1E293B]/30 border border-white/10 backdrop-blur-sm hover:bg-[#1E293B]/50 transition-colors">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <Zap key={i} className="w-4 h-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    "{testimonial.testimonialQuote}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-black font-bold">
                      {testimonial.userName?.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.userName}</div>
                      <div className="text-sm text-gray-500">{testimonial.userTitleCompany}</div>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-32 px-6 bg-[#0D1117]">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-gray-400">Invest in clarity. Scale with confidence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {pricingPlans.map((plan, index) => (
              <AnimatedReveal key={plan._id} delay={index * 100} className="h-full">
                <div className={`relative h-full p-8 rounded-2xl border transition-all duration-300 flex flex-col ${plan.isMostPopular
                  ? 'bg-[#1E293B]/40 border-primary shadow-[0_0_40px_rgba(100,255,218,0.1)] scale-105 z-10'
                  : 'bg-[#1E293B]/20 border-white/10 hover:border-white/20'
                  }`}>
                  {plan.isMostPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-xs font-bold rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="font-heading text-xl font-bold text-white mb-2">{plan.tierName}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-500">/{plan.priceUnit}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features?.split('\n').map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.callToActionUrl || '/app'}
                    className={`w-full py-4 rounded-lg font-bold text-center transition-all ${plan.isMostPopular
                      ? 'bg-primary text-black hover:bg-primary/90'
                      : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                  >
                    {plan.callToActionText || 'Get Started'}
                  </a>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            System Inquiries
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq._id} value={faq._id} className="border border-white/10 bg-white/[0.02] rounded-lg px-4 overflow-hidden">
                <AccordionTrigger className="text-white hover:text-primary font-medium text-left py-6">
                  <span className="flex items-center gap-3">
                    <Terminal size={16} className="text-gray-500" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 pl-9 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] to-[#1E293B]" />
        <div className="absolute inset-0 opacity-30 bg-[url('/images/cubes-pattern.png')] mix-blend-overlay" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <AnimatedReveal>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8">
              Stop Flying Blind.
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the new wave of SaaS founders who know exactly where their profit comes from.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/app"
                className="px-10 py-5 bg-primary text-black font-bold rounded-lg text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(100,255,218,0.3)]"
              >
                Start Analyzing Now
              </a>
              <a
                href="/demo"
                className="px-10 py-5 text-white border border-white/20 rounded-lg text-lg hover:bg-white/5 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}