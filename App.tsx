import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Section } from './components/Layout/Section';
import { GradientText } from './components/UI/GradientText';
import { Button } from './components/UI/Button';
import { 
  ArrowRight, 
  Wind, 
  Zap, 
  Globe, 
  Award, 
  FileText, 
  CheckCircle2,
  Download,
  Newspaper,
  MapPin,
  Leaf,
  Factory,
  Building2,
  Users,
  ChevronRight,
  Target,
  PenTool,
  Calendar,
  Landmark,
  GraduationCap,
  ArrowUpRight,
  Search,
  Filter,
  Clock,
  Monitor,
  BarChart3
} from 'lucide-react';
import { INITIATORS, MEMBER_LOGOS, IMPACT_STATS, STANDARDS, NEWS_DATA, SAMPLE_MEMBERS, CASES } from './constants';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  // --- Members Filter State ---
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('All');
  const [filterYear, setFilterYear] = useState('All');

  // Derive unique options
  const industries = useMemo(() => ['All', ...Array.from(new Set(SAMPLE_MEMBERS.map(m => m.industry)))], []);
  const years = useMemo(() => ['All', ...Array.from(new Set(SAMPLE_MEMBERS.map(m => m.targetYear))).sort()], []);

  // Filter Logic
  const filteredMembers = useMemo(() => {
    return SAMPLE_MEMBERS.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = filterIndustry === 'All' || member.industry === filterIndustry;
      const matchesYear = filterYear === 'All' || member.targetYear === filterYear;
      return matchesSearch && matchesIndustry && matchesYear;
    });
  }, [searchTerm, filterIndustry, filterYear]);

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 overflow-hidden relative font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      
      {/* Scroll Snap Container - Enabled on all devices */}
      <div className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth snap-container">
        
        {/* =================================================================
           1. 首页 (Home)
           ================================================================= */}

        {/* --- Screen 1: Intro + Banner --- */}
        <Section id="home" className="bg-black" backgroundImage="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop">
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-0"></div>
           
           <div className="relative z-10 max-w-6xl mx-auto text-center space-y-3 md:space-y-6 text-white px-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-1 md:mb-2">
              Green Electricity 100%
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-white drop-shadow-xl">
              绿电百分百<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">行动倡议 (GE1OO)</span>
            </h1>
            <p className="text-xs md:text-xl text-slate-100 leading-relaxed max-w-3xl mx-auto font-light tracking-wide opacity-90 line-clamp-4 md:line-clamp-none">
              GE1OO行动倡议于2023年6月发起，作为国内首个聚焦绿电消费的行动倡议，旨在推动可再生能源的广泛利用，助力中国碳中和目标。目前已得到近百家知名企业和权威机构的支持。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 pt-3 md:pt-8">
              <Button 
                size="md"
                className="bg-white text-emerald-900 hover:bg-emerald-50 border-0 w-1/2 sm:w-auto md:px-8 md:py-3.5 md:text-lg" 
                onClick={() => document.getElementById('join')?.scrollIntoView({behavior: 'smooth'})}
              >
                加入我们
              </Button>
              <Button 
                size="md"
                className="bg-black/30 backdrop-blur-md border border-white/30 text-white hover:bg-white/10 w-1/2 sm:w-auto md:px-8 md:py-3.5 md:text-lg" 
                onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
              >
                了解更多
              </Button>
            </div>
          </div>
        </Section>

        {/* --- Screen 2: Partners & Members --- */}
        <Section id="home-partners" className="bg-white bg-pattern-waves">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col justify-center h-full">
            
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-4 tracking-tight">
                共建<GradientText>绿色生态</GradientText>
              </h2>
              <p className="text-xs md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
                汇聚行业权威机构与领军企业，共同定义绿色用能新标准。
              </p>
            </div>

            {/* Initiators */}
            <div className="mb-6 md:mb-8">
               <div className="flex items-center justify-center gap-4 mb-3 md:mb-4">
                 <div className="h-px w-6 md:w-8 bg-slate-200"></div>
                 <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">联合发起单位</span>
                 <div className="h-px w-6 md:w-8 bg-slate-200"></div>
               </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-1 md:px-4">
                 {[
                    { name: "中国电力发展促进会", en: "CEPPC", icon: Zap },
                    { name: "中国工业节能与清洁生产协会", en: "CIECCPA", icon: Factory },
                    { name: "清华大学气候变化与可持续发展研究院", en: "ICCSD", icon: Landmark },
                    { name: "2060零碳企业行动倡议", en: "0CCI", icon: Target }
                 ].map((item, index) => (
                     <div key={index} className="group relative bg-gradient-to-br from-emerald-50 to-emerald-50/20 rounded-xl p-3 md:p-5 border border-slate-100 shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.15)] hover:border-emerald-200 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                         
                         {/* Decorative Top Line */}
                         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                         
                         {/* Icon Container with Layered Effect */}
                         <div className="relative mb-2 md:mb-4">
                             {/* Glow effect behind icon */}
                             <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                             
                             <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-50/20 border border-slate-100 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500 group-hover:border-emerald-100 group-hover:shadow-md">
                                <item.icon 
                                  className="w-5 h-5 md:w-7 md:h-7 text-emerald-600 fill-emerald-600/20 group-hover:scale-110 transition-all duration-500" 
                                  strokeWidth={1.5}
                                />
                             </div>
                         </div>

                         {/* Text */}
                         <h4 className="font-bold text-slate-800 text-[10px] md:text-sm leading-snug mb-1 md:mb-2 group-hover:text-slate-900 transition-colors min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center">
                            {item.name.includes('清洁生产协会') ? <>中国工业节能与<br/>清洁生产协会</> : item.name.includes('清华') ? <>清华大学<br/>气候变化与可持续发展研究院</> : item.name.includes('2060') ? <>2060零碳企业<br/>行动倡议</> : item.name}
                         </h4>
                         
                         {/* Badge */}
                         {item.en && (
                             <span className="inline-block px-2 py-0.5 rounded text-[8px] md:text-[9px] font-bold tracking-wider text-slate-400 bg-slate-50 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors border border-slate-100 group-hover:border-emerald-100">
                                {item.en}
                             </span>
                         )}
                     </div>
                 ))}
              </div>
            </div>

            {/* Members - Moved Up */}
            <div>
               <div className="flex items-center justify-center gap-4 mb-2 md:mb-3">
                 <div className="h-px w-6 md:w-8 bg-slate-200"></div>
                 <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">成员单位</span>
                 <div className="h-px w-6 md:w-8 bg-slate-200"></div>
               </div>
               <div className="w-full relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="overflow-hidden flex py-2">
                    <div className="flex gap-8 md:gap-20 whitespace-nowrap animate-marquee">
                      {[...MEMBER_LOGOS, ...MEMBER_LOGOS, ...MEMBER_LOGOS].map((logo, i) => (
                        <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 cursor-default">
                          <span className="text-base md:text-xl font-bold text-slate-800">
                            {logo}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </Section>

        {/* --- Screen 3: Impact & Core Values --- */}
        <Section id="home-impact" className="bg-[#F8FAFC] overflow-hidden relative">
          
          {/* Background: Animated Water Ripple (No Dot) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white/50"></div>
             <div className="absolute bottom-[5%] left-[5%] flex items-center justify-center">
                 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_40px_rgba(16,185,129,0.05)]"
                        initial={{ width: 0, height: 0, opacity: 0.8 }}
                        animate={{ width: '220vmax', height: '220vmax', opacity: 0 }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity, 
                          delay: i * 2, 
                          ease: "linear"
                        }}
                      />
                    ))}
                 </div>
             </div>
             <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-b from-emerald-50/30 to-transparent blur-3xl rounded-full opacity-60 pointer-events-none"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center relative z-10 py-2 md:py-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-8 lg:gap-12 items-center h-full content-center">
               
               {/* Left Column: Title & Staggered Stats - Compacted */}
               <div className="lg:col-span-5 flex flex-col self-center w-full justify-center">
                  <div className="mb-2 md:mb-8 text-center md:text-left shrink-0">
                     <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] md:text-xs font-bold rounded-full mb-1 md:mb-4 border border-emerald-100">IMPACT & VALUES</div>
                     <h2 className="text-2xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-1 md:mb-4 tracking-tight">
                       影响力与<br className="hidden md:block"/>
                       <GradientText>核心价值</GradientText>
                     </h2>
                     <p className="text-slate-500 text-xs md:text-lg font-light leading-relaxed max-w-sm mx-auto md:mx-0 line-clamp-1 md:line-clamp-none">
                        连接政策、技术与市场，构建绿电消费生态闭环。
                     </p>
                  </div>

                  {/* Redesigned Stats: Staggered Floating Cards - Compacted Spacing */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 relative shrink-0">
                      {/* Decorative connecting line */}
                      <div className="absolute top-10 bottom-10 left-1/2 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>

                      <div className="space-y-2 md:space-y-4">
                         {/* Stat 1 */}
                         <div className="p-2 md:p-5 bg-white rounded-xl md:rounded-2xl md:rounded-tr-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group">
                            <div className="flex justify-between items-start mb-1 md:mb-2">
                               <Users className="w-3 h-3 md:w-5 md:h-5 text-emerald-100 group-hover:text-emerald-500 transition-colors" />
                               <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-slate-300 hidden md:block" />
                            </div>
                            <div className="text-xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-600 mb-0.5 md:mb-1">30<span className="text-emerald-500 text-sm md:text-2xl align-top">+</span></div>
                            <div className="text-[9px] md:text-xs text-slate-500 font-medium">零碳联盟专家</div>
                         </div>
                         {/* Stat 3 */}
                         <div className="p-2 md:p-5 bg-white rounded-xl md:rounded-2xl md:rounded-bl-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group">
                             <div className="flex justify-between items-start mb-1 md:mb-2">
                               <Building2 className="w-3 h-3 md:w-5 md:h-5 text-emerald-100 group-hover:text-emerald-500 transition-colors" />
                               <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-slate-300 hidden md:block" />
                            </div>
                            <div className="text-xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-600 mb-0.5 md:mb-1">10<span className="text-emerald-500 text-sm md:text-2xl align-top">+</span></div>
                            <div className="text-[9px] md:text-xs text-slate-500 font-medium">早期成员单位</div>
                         </div>
                      </div>

                      <div className="space-y-2 md:space-y-4 md:pt-8">
                         {/* Stat 2 */}
                         <div className="p-2 md:p-5 bg-white rounded-xl md:rounded-2xl md:rounded-tl-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group">
                             <div className="flex justify-between items-start mb-1 md:mb-2">
                               <FileText className="w-3 h-3 md:w-5 md:h-5 text-emerald-100 group-hover:text-emerald-500 transition-colors" />
                               <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-slate-300 hidden md:block" />
                            </div>
                            <div className="text-xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-600 mb-0.5 md:mb-1">50<span className="text-emerald-500 text-sm md:text-2xl align-top">+</span></div>
                            <div className="text-[9px] md:text-xs text-slate-500 font-medium">标准参编单位</div>
                         </div>
                         {/* Stat 4 */}
                         <div className="p-2 md:p-5 bg-white rounded-xl md:rounded-2xl md:rounded-br-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300 group">
                             <div className="flex justify-between items-start mb-1 md:mb-2">
                               <Users className="w-3 h-3 md:w-5 md:h-5 text-emerald-100 group-hover:text-emerald-500 transition-colors" />
                               <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-slate-300 hidden md:block" />
                            </div>
                            <div className="text-xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-600 mb-0.5 md:mb-1">200<span className="text-emerald-500 text-sm md:text-2xl align-top">+</span></div>
                            <div className="text-[9px] md:text-xs text-slate-500 font-medium">机构参与研讨会</div>
                         </div>
                      </div>
                  </div>
               </div>

               {/* Right Column: Content Cards - Compacted */}
               <div className="lg:col-span-7 flex flex-col gap-2 md:gap-5 overflow-visible shrink-0">
                  
                  {/* Card 1: Standards - Reduced padding */}
                  <div className="group relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-[2rem] p-3 md:p-8 border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.1)] transition-all duration-500 overflow-hidden">
                     <div className="absolute top-0 right-0 w-16 h-16 md:w-32 md:h-32 bg-emerald-50/50 rounded-bl-[40px] md:rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110 origin-top-right hidden md:block"></div>
                     <div className="relative z-10">
                         <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                            <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg md:rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                <Award className="w-3 h-3 md:w-5 md:h-5" />
                            </div>
                            <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-slate-900">深度参与标准共建</h3>
                         </div>
                         <p className="text-slate-600 leading-relaxed mb-2 md:mb-6 pl-1 text-[10px] md:text-base line-clamp-2 md:line-clamp-none hidden md:block">
                             GE1OO主导编制了多个对齐国际绿电规范和中国本土行业经验的团体标准。加入GE1OO的单位有机会优先推荐技术骨干参与标准编制。
                         </p>
                         <div className="bg-slate-50/80 rounded-lg md:rounded-2xl p-2 md:p-4 border border-slate-100 space-y-1 md:space-y-2">
                            <div className="flex items-start gap-1.5 md:gap-3">
                                <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-emerald-500 mt-0.5 shrink-0" />
                                <span className="text-slate-700 font-medium text-[9px] md:text-sm leading-tight">提升企业技术公信力，确立行业地位</span>
                            </div>
                            <div className="flex items-start gap-1.5 md:gap-3">
                                <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-emerald-500 mt-0.5 shrink-0" />
                                <span className="text-slate-700 font-medium text-[9px] md:text-sm leading-tight">衔接国际认证与标准，规避贸易壁垒</span>
                            </div>
                         </div>
                     </div>
                  </div>

                  {/* Card 2: Seminars - Reduced padding */}
                  <div className="group relative bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm rounded-xl md:rounded-[2rem] p-3 md:p-8 border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.1)] transition-all duration-500">
                     <div className="relative z-10">
                         <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
                            <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg md:rounded-2xl bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                                <Globe className="w-3 h-3 md:w-5 md:h-5" />
                            </div>
                            <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-slate-900">强化行业领导力</h3>
                         </div>
                         <p className="text-slate-600 leading-relaxed mb-2 md:mb-6 pl-1 text-[10px] md:text-base line-clamp-2 md:line-clamp-none hidden md:block">
                            通过定期举办的行业研讨会及重磅峰会论坛，发布绿电转型成果、行业白皮书及创新产品，抢占市场差异化优势。
                         </p>
                         
                         {/* Inner Special Box */}
                         <div className="relative overflow-hidden rounded-lg md:rounded-2xl border border-emerald-100 bg-white p-0.5 md:p-1">
                             <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                             <div className="flex items-center gap-2 md:gap-5 p-2 md:p-4">
                                 <div className="shrink-0 flex flex-col items-center justify-center w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-emerald-50 text-emerald-700">
                                     <Award className="w-3 h-3 md:w-5 md:h-5 mb-0.5 md:mb-1" />
                                     <span className="text-[5px] md:text-[9px] font-bold uppercase">Award</span>
                                 </div>
                                 <div>
                                     <div className="text-[9px] md:text-xs font-bold text-emerald-600 mb-0 md:mb-1 uppercase tracking-wider">重点推荐</div>
                                     <p className="text-[9px] md:text-sm font-medium text-slate-800 leading-tight">
                                         成员项目可优先参评“碳生产力”优秀案例，并收录《优秀项目案例集》。
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                  </div>

               </div>
            </div>
          </div>
        </Section>

        {/* =================================================================
           2. 关于倡议 (About Us)
           ================================================================= */}

        {/* --- Screen 4: Goals --- */}
        <Section id="about" className="bg-white bg-pattern-waves">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 items-center max-w-7xl mx-auto w-full h-full md:h-auto content-center">
             
             {/* Image Column - Mobile Order 2 (Bottom) */}
             <div className="relative h-32 xs:h-40 md:h-full flex flex-col justify-center order-2 md:order-1 shrink-0">
                <div className="relative rounded-xl md:rounded-[2rem] overflow-hidden shadow-2xl aspect-video md:aspect-[4/3] group h-full w-full">
                   <img 
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop" 
                    alt="Sustainable Future" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   <div className="absolute bottom-2 left-3 md:bottom-8 md:left-8 text-white">
                      <div className="text-xl md:text-4xl font-bold">2050</div>
                      <div className="text-[10px] md:text-sm opacity-80">实现100%绿电转型目标</div>
                   </div>
                </div>
             </div>

             {/* Text Column - Mobile Order 1 (Top) */}
             <div className="space-y-2 md:space-y-10 order-1 md:order-2 flex flex-col justify-center">
                <div className="shrink-0">
                  <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 bg-emerald-50 text-emerald-700 text-[10px] md:text-xs font-bold rounded-full mb-1 md:mb-4">OUR MISSION</div>
                  <h2 className="text-2xl md:text-5xl font-bold mb-1 md:mb-6 leading-tight">
                    倡议<GradientText>目标</GradientText>
                  </h2>
                  <p className="text-xs md:text-lg text-slate-600 leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                    作为国内首个聚焦绿电消费的行动倡议，GE1OO围绕绿电消费信息披露标准建设，着重解决绿电消费在企业碳核算、可持续信息披露等领域规范衔接与标准互认问题。
                  </p>
                </div>

                <div className="space-y-2 md:space-y-4 shrink-0">
                   <h3 className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-widest">三大核心方向</h3>
                   <div className="space-y-1.5 md:space-y-4">
                     {[
                       "推动企业披露绿电使用占比",
                       "拓展终端场景绿电消纳",
                       "引导更多企业于2050年前实现100%绿电转型"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-2 md:gap-4 p-2 md:p-5 rounded-lg md:rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all">
                          <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                            <ChevronRight className="w-3 h-3 md:w-5 md:h-5" />
                          </div>
                          <span className="text-xs md:text-lg font-medium text-slate-800 line-clamp-1 md:line-clamp-none">{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          </div>
        </Section>

        {/* --- Screen 5: Framework --- */}
        <Section id="about-framework" className="bg-slate-50 bg-pattern-grid">
          {/* Added h-full and justify-center for vertical centering */}
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center space-y-4 md:space-y-16 px-1 md:px-0">
             <div className="max-w-3xl mx-auto text-center shrink-0">
               <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-6">
                 “绿电百分百”<br/><GradientText>行动目标框架</GradientText>
               </h2>
               <p className="text-slate-500 text-xs md:text-lg">
                 为加入GE1OO的企业提供明确的行动路径与指导
               </p>
             </div>

             {/* Mobile: Horizontal Scroll, Desktop: Grid */}
             <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-2 md:pb-0 px-1 md:px-0">
                {[
                  { 
                    title: "01. 设定绿电100%目标", 
                    desc: "设定不晚于2050年的“绿电100%”目标，优先实现自身运营“全绿电”，积极推动价值链绿电全覆盖。",
                    icon: <FileText className="w-5 h-5 md:w-10 md:h-10" />,
                    color: "emerald"
                  },
                  { 
                    title: "02. 推动绿电价值链创新", 
                    desc: "推动扩大绿电消费、提升与电力系统友好互动的技术与产业协同创新，拓展更多绿电消费解决方案。",
                    icon: <Target className="w-5 h-5 md:w-10 md:h-10" />,
                    color: "teal"
                  },
                  { 
                    title: "03. 开展绿电消费信息披露", 
                    desc: "定期公开披露绿电消费信息，持续提升绿电消费比例和质量。",
                    icon: <Zap className="w-5 h-5 md:w-10 md:h-10" />,
                    color: "cyan"
                  }
                ].map((card, i) => (
                   <div key={i} className="min-w-[80vw] md:min-w-0 snap-center bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group h-auto md:h-full justify-center">
                      <div className={`w-12 h-12 md:w-24 md:h-24 rounded-full bg-${card.color}-50 text-${card.color}-600 flex items-center justify-center mb-3 md:mb-8 group-hover:scale-110 transition-transform duration-300`}>
                        {card.icon}
                      </div>
                      <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-2 md:mb-4">{card.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-[10px] md:text-sm line-clamp-4 md:line-clamp-none">
                        {card.desc}
                      </p>
                   </div>
                ))}
             </div>
             
             {/* Mobile Hint */}
             <div className="md:hidden flex justify-center items-center gap-1 text-[10px] text-slate-400 font-medium animate-pulse">
                <span>滑动查看更多</span> <ArrowRight className="w-3 h-3" />
             </div>
          </div>
        </Section>

        {/* --- Screen 6: 2025 Consensus --- */}
        <Section id="about-consensus" className="bg-white bg-pattern-waves">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto w-full">
            <div className="space-y-5 md:space-y-8 md:pr-10 order-2 md:order-1">
               <div className="inline-block px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs md:text-sm font-bold border border-emerald-100">里程碑事件</div>
               <h2 className="text-2xl md:text-5xl font-bold leading-tight">
                 《绿电百分百·<br/><GradientText>2025共识</GradientText>》
               </h2>
               <div className="space-y-4 md:space-y-6 text-slate-600 text-sm md:text-lg leading-relaxed">
                 <p>
                   2025年9月，GE1OO研讨会在北京举行，正式发布2025共识。共识提出<span className="text-slate-900 font-bold">信息披露</span>、<span className="text-slate-900 font-bold">目标设定</span>与<span className="text-slate-900 font-bold">协同创新</span>三大行动方向。
                 </p>
                 <div className="p-4 md:p-6 bg-slate-50 rounded-xl md:rounded-2xl border-l-4 border-emerald-500">
                   <p className="text-slate-700 font-medium text-xs md:text-base">
                     11月，共识在<strong className="text-slate-900">联合国气候变化大会（COP30）</strong>中国角边会上面向全球发布，获得跨行业20余家领先机构联合响应，贡献可落地的中国方案。
                   </p>
                 </div>
               </div>
               
               <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
                 <Button className="gap-2 text-sm">
                   阅读共识全文
                 </Button>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 relative order-1 md:order-2">
               <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop" 
                alt="Global Nature" 
                className="rounded-2xl md:rounded-3xl shadow-lg w-full h-32 md:h-64 object-cover translate-y-3 md:translate-y-8"
               />
               <img 
                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop" 
                alt="Signing" 
                className="rounded-2xl md:rounded-3xl shadow-lg w-full h-32 md:h-64 object-cover -translate-y-3 md:-translate-y-8"
               />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-white/50 text-center w-32 md:w-48">
                  <div className="text-xl md:text-3xl font-bold text-emerald-600">20+</div>
                  <div className="text-[8px] md:text-xs text-slate-500 uppercase font-bold mt-1">联合响应机构</div>
               </div>
            </div>
          </div>
        </Section>

        {/* =================================================================
           3. 加入GE1OO (Join Us)
           ================================================================= */}

        {/* --- Screen 7: Process & Docs --- */}
        <Section id="join" className="bg-white bg-pattern-waves">
           <div className="max-w-7xl mx-auto w-full flex flex-col justify-center h-full items-center">
              
              {/* Header - Reduced margins */}
              <div className="text-center mb-6 md:mb-10">
                 <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">
                   加入<GradientText>流程</GradientText>
                 </h2>
                 <p className="text-slate-500 text-sm md:text-xl font-light max-w-sm mx-auto md:max-w-none">
                    成为GE1OO成员，只需简单的三个步骤。我们提供全程指导与技术支持。
                 </p>
              </div>

              {/* Steps Visualization - Reduced margins */}
              <div className="w-full relative mb-8 md:mb-12 px-0 md:px-0">
                 {/* Connecting Line - Absolute centered vertically behind icons */}
                 <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-emerald-100 -z-10"></div>
                 
                 <div className="grid grid-cols-3 gap-2 md:gap-8">
                    {[
                      { 
                         icon: <FileText className="w-5 h-5 md:w-8 md:h-8 text-emerald-600" />, 
                         title: "注册企业信息", 
                         desc: "提交申请表格，包括基本信息、用电规模及核算边界。" 
                      },
                      { 
                         icon: <PenTool className="w-5 h-5 md:w-8 md:h-8 text-emerald-600" />, 
                         title: "签署承诺", 
                         desc: "签署倡议目标承诺书。承诺24个月内提交目标文件并发布进展。" 
                      },
                      { 
                         icon: <Award className="w-5 h-5 md:w-8 md:h-8 text-emerald-600" />, 
                         title: "审查与公布", 
                         desc: "通过审核后成为正式成员，目标将在GE1OO官网公布。" 
                      }
                    ].map((step, i) => (
                       <div key={i} className="flex flex-col items-center text-center group">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-emerald-50/50 border border-emerald-100 shadow-sm flex items-center justify-center mb-3 md:mb-6 group-hover:border-emerald-400 group-hover:shadow-md transition-all duration-300 relative z-10">
                             {step.icon}
                          </div>
                          <h3 className="text-xs md:text-lg font-bold text-slate-900 mb-1 md:mb-3">{step.title}</h3>
                          <p className="text-slate-500 text-[10px] md:text-sm leading-relaxed max-w-xs mx-auto line-clamp-3 md:line-clamp-none">
                             {step.desc}
                          </p>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Downloads Area - Compacted */}
              <div className="w-full max-w-4xl bg-slate-50 rounded-2xl border border-slate-100 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                  <div className="flex items-center gap-4 md:gap-6">
                     <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                        <Download className="w-5 h-5 md:w-6 md:h-6" />
                     </div>
                     <div className="text-left">
                        <h4 className="text-sm md:text-lg font-bold text-slate-900">下载相关文档</h4>
                        <p className="text-xs md:text-sm text-slate-500">Target Framework & Technical Docs</p>
                     </div>
                  </div>
                  <div className="flex flex-row gap-2 md:gap-4 w-full md:w-auto">
                     <a href="https://www.wjx.top/vm/hJmnRdz.aspx" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-initial">
                        <Button variant="outline" size="sm" className="w-full bg-white hover:bg-emerald-50 border-slate-200 hover:border-emerald-200 text-slate-600 hover:text-emerald-700 text-xs md:text-sm">
                           目标框架文档 ↳
                        </Button>
                     </a>
                     <Button variant="outline" size="sm" className="bg-white hover:bg-emerald-50 border-slate-200 hover:border-emerald-200 text-slate-600 hover:text-emerald-700 flex-1 md:flex-initial text-xs md:text-sm">
                        技术指南 PDF ↳
                     </Button>
                  </div>
              </div>

           </div>
        </Section>

        {/* --- Screen 8: Contact Form --- */}
        <Section id="join-form" className="bg-slate-50 bg-pattern-grid">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 max-w-7xl mx-auto w-full items-center h-full md:h-auto">
              {/* Swapped order on mobile: Text first (order-1), Form second (order-2) */}
              <div className="lg:col-span-5 space-y-4 md:space-y-8 order-1 lg:order-1">
                 <h2 className="text-2xl md:text-4xl font-bold">
                   申请加入<br/><GradientText>GE1OO 倡议</GradientText>
                 </h2>
                 <p className="text-sm md:text-lg text-slate-600 leading-relaxed">
                   若您审阅上述资料并确认符合GE1OO成员资格条件，请在右侧填写详细信息，我们将尽快与您联系。
                 </p>
                 
              </div>

              <div className="lg:col-span-7 bg-white p-5 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden order-2 lg:order-2">
                 <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16"></div>
                 <form className="space-y-3 md:space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-3 md:gap-5">
                       <div className="space-y-1 md:space-y-2">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">姓名</label>
                          <input type="text" className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-xs md:text-base" placeholder="您的姓名" />
                       </div>
                       <div className="space-y-1 md:space-y-2">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">职务</label>
                          <input type="text" className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-xs md:text-base" placeholder="您的职务" />
                       </div>
                    </div>
                    
                    <div className="space-y-1 md:space-y-2">
                       <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">单位名称</label>
                       <input type="text" className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-xs md:text-base" placeholder="企业/机构全称" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-5">
                       <div className="space-y-1 md:space-y-2">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">邮箱</label>
                          <input type="email" className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-xs md:text-base" placeholder="name@company.com" />
                       </div>
                       <div className="space-y-1 md:space-y-2">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">联系电话</label>
                          <input type="tel" className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-xs md:text-base" placeholder="+86 1XX XXXX XXXX" />
                       </div>
                    </div>

                    <Button size="lg" className="w-full mt-2 font-bold shadow-lg shadow-emerald-500/20 py-3 md:py-3.5 text-sm md:text-lg">提交申请</Button>
                 </form>
              </div>
           </div>
        </Section>

        {/* =================================================================
           4. 资源中心 (Resources) - OPTIMIZED FOR MOBILE
           ================================================================= */}

        {/* --- Screen 9: Standards & Cases --- */}
        <Section id="resources" className="bg-white bg-pattern-waves">
           <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-evenly md:justify-center gap-2 md:gap-6 lg:gap-8 p-1 md:p-0 md:translate-y-7">
              
              {/* Header: Compact on Mobile */}
              <div className="flex flex-row items-end justify-between gap-2 shrink-0 md:mb-2">
                 <div>
                    <h2 className="text-2xl md:text-4xl font-bold">
                      资源<GradientText>中心</GradientText>
                    </h2>
                    <p className="text-slate-500 mt-1 md:mt-2 text-xs md:text-lg">引领行业规范，定义绿色未来</p>
                 </div>
                 <Button variant="outline" size="sm" className="hidden xs:flex scale-75 origin-right md:scale-100 self-center md:self-auto text-xs md:text-base whitespace-nowrap">查看更多</Button>
              </div>

              {/* Standards List: Horizontal Scroll on Mobile */}
              <div className="w-full shrink-0">
                 <div className="flex items-center gap-2 mb-2 md:mb-4">
                    <div className="w-1 h-3 md:h-5 bg-emerald-500 rounded-full"></div>
                    <h3 className="text-xs md:text-xl font-bold text-slate-800">团体标准</h3>
                 </div>
                 
                 <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory no-scrollbar px-1 md:px-0">
                   {STANDARDS.map((std, i) => (
                     <div key={i} className="min-w-[85vw] md:min-w-0 snap-center group p-4 md:p-5 rounded-2xl md:rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between h-auto md:h-40">
                        <div>
                          <div className="inline-flex self-start px-2 py-1 bg-white rounded border border-slate-200 text-[10px] font-mono text-slate-500 mb-2 md:mb-3 font-bold">
                            {std.code}
                          </div>
                          <h3 className="text-sm md:text-base font-bold text-slate-900 mb-1 md:mb-2 leading-snug line-clamp-2">
                            {std.title}
                          </h3>
                        </div>
                        <div className="text-[10px] md:text-xs text-slate-400 pt-2 border-t border-slate-200/50 truncate">
                          {std.publisher}
                        </div>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Cases Grid: Horizontal Scroll on Mobile */}
              <div className="w-full shrink-0">
                 <div className="flex items-center gap-2 mb-2 md:mb-4">
                    <div className="w-1 h-3 md:h-5 bg-emerald-500 rounded-full"></div>
                    <h3 className="text-xs md:text-xl font-bold text-slate-800">优秀案例</h3>
                 </div>

                 <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory no-scrollbar px-1 md:px-0">
                   {CASES.map((c, i) => (
                      <div key={i} className={`min-w-[70vw] md:min-w-0 snap-center group relative aspect-[16/9] md:aspect-auto md:h-44 rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-slate-100 ${i === 2 ? 'md:col-span-1' : ''}`}>
                         <img src={c.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Case" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 md:p-5">
                            <span className="text-emerald-400 text-[8px] md:text-xs font-bold uppercase mb-0.5 md:mb-1 tracking-wider">{c.subtitle}</span>
                            <h4 className="text-white font-bold text-xs md:text-base leading-snug line-clamp-2">{c.title}</h4>
                         </div>
                      </div>
                   ))}
                 </div>
              </div>

           </div>
        </Section>

        {/* --- New Section: Services --- */}
        <Section id="services" className="bg-slate-50 bg-pattern-grid">
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
            {/* Title */}
            <div className="text-center mb-4 md:mb-16 shrink-0">
               <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                 应用<GradientText>工具</GradientText>
               </h2>
               <p className="text-slate-500 text-xs md:text-xl">
                 为GE1OO成员单位提供碳效应用工具
               </p>
            </div>

            {/* Cards - Vertical Stack on Mobile (Compact), Grid on Desktop */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-12 px-4 md:px-0 items-stretch justify-center h-auto md:h-auto">
                {/* App 1 */}
                <div className="group bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-10 shadow-lg md:shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-emerald-200 transition-all hover:-translate-y-2 relative overflow-hidden flex flex-col h-auto md:h-full">
                     <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <BarChart3 className="w-20 h-20 md:w-32 md:h-32" />
                     </div>
                     <div className="relative z-10 flex flex-col h-full items-start">
                         {/* Mobile: Icon + Title Row. Desktop: Icon top, Title bottom */}
                         <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0 mb-3 md:mb-6 w-full">
                             <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 md:mb-6">
                                <Monitor className="w-5 h-5 md:w-7 md:h-7" />
                             </div>
                             <h3 className="text-base md:text-2xl font-bold text-slate-900 leading-tight">产品碳足迹数智服务应用</h3>
                         </div>
                         
                         <p className="text-slate-600 text-xs md:text-base mb-4 md:mb-8 flex-grow leading-relaxed line-clamp-2 md:line-clamp-none">为企业提供综合性碳足迹服务平台</p>
                         <a href="http://cclca.ccmatch.net/login?redirect=%2Flca" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                            <Button className="w-full justify-between group-hover:shadow-emerald-500/30 text-xs md:text-base py-2 md:py-2.5">
                               立即使用 <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Button>
                         </a>
                     </div>
                </div>

                {/* App 2 */}
                <div className="group bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-10 shadow-lg md:shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all hover:-translate-y-2 relative overflow-hidden flex flex-col h-auto md:h-full">
                     <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Globe className="w-20 h-20 md:w-32 md:h-32" />
                     </div>
                     <div className="relative z-10 flex flex-col h-full items-start">
                         {/* Mobile: Icon + Title Row. Desktop: Icon top, Title bottom */}
                         <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-0 mb-3 md:mb-6 w-full">
                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 md:mb-6">
                                <FileText className="w-5 h-5 md:w-7 md:h-7" />
                            </div>
                            <h3 className="text-base md:text-2xl font-bold text-slate-900 leading-tight">CBAM 辅助填报应用</h3>
                         </div>

                         <p className="text-slate-600 text-xs md:text-base mb-4 md:mb-8 flex-grow leading-relaxed line-clamp-2 md:line-clamp-none">帮助企业快速生成欧盟碳边境调节机制（CBAM）报告</p>
                         <a href="http://cclca.ccmatch.net/cbam" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                            <Button className="w-full justify-between bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-blue-500/30 text-xs md:text-base py-2 md:py-2.5">
                               立即使用 <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Button>
                         </a>
                     </div>
                </div>
            </div>
          </div>
        </Section>

        {/* --- Screen 10: Event Submission --- */}
        <Section id="resources-events" className="bg-white bg-pattern-waves">
           {/* Added h-full and justify-center to parent to center vertical content */}
           <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
              
              {/* Horizontal Scroll Wrapper for Mobile */}
              <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-16 items-center overflow-x-auto snap-x snap-mandatory no-scrollbar w-full px-0 md:px-0 pb-2 md:pb-0">
                  
                  {/* Left Column: Event Preview */}
                  {/* Updated to min-w-[100vw] container and w-[92vw] inner for perfect centering and full width feel */}
                  <div className="min-w-[100vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-center items-center md:items-stretch">
                     <div className="w-[92vw] md:w-full space-y-3 md:space-y-8 lg:pr-8 p-1 md:p-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
                           <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        
                        <div className="space-y-2 md:space-y-4">
                           <h2 className="text-2xl md:text-4xl font-bold text-slate-900">
                             活动<GradientText>预告</GradientText>
                           </h2>
                           <p className="text-slate-600 text-sm md:text-lg leading-relaxed line-clamp-2 md:line-clamp-none">
                              GE1OO定期举办行业研讨会及重磅峰会论坛活动。欢迎成员单位积极申报案例，共塑行业标杆。
                           </p>
                        </div>

                        {/* Event Cards */}
                        <div className="space-y-3 md:space-y-4">
                           {/* Card 1 */}
                           <div className="relative bg-white rounded-xl md:rounded-2xl border border-slate-200 shadow-sm p-1 transition-all group overflow-hidden">
                               <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                               <div className="flex items-center gap-3 p-2 md:p-4 pl-4">
                                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-600">
                                        <span className="text-[9px] uppercase font-bold opacity-60">12月</span>
                                        <span className="text-lg md:text-2xl font-bold leading-none">19</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-700 mb-1">即将开始</span>
                                        <h3 className="text-sm md:text-base font-bold text-slate-900 truncate">碳生产力圆桌会议</h3>
                                        <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
                                            <MapPin className="w-3 h-3" /> <span>杭州</span>
                                        </div>
                                    </div>
                                    <div className="pr-1">
                                        <ArrowRight className="w-4 h-4 text-slate-300" />
                                    </div>
                               </div>
                           </div>

                           {/* Card 2 */}
                           <div className="relative bg-white rounded-xl md:rounded-2xl border border-slate-200 shadow-sm p-1 transition-all group overflow-hidden">
                               <div className="absolute top-0 left-0 w-1.5 h-full bg-sky-500"></div>
                               <div className="flex items-center gap-3 p-2 md:p-4 pl-4">
                                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-600">
                                        <span className="text-[9px] uppercase font-bold opacity-60">2026</span>
                                        <span className="text-lg md:text-2xl font-bold leading-none">1月</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-100 text-sky-700 mb-1">年度评审</span>
                                        <h3 className="text-sm md:text-base font-bold text-slate-900 truncate">碳生产力优秀案例评审</h3>
                                        <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
                                            <Clock className="w-3 h-3" /> <span>2026年1月</span>
                                        </div>
                                    </div>
                                    <div className="pr-1">
                                        <ArrowRight className="w-4 h-4 text-slate-300" />
                                    </div>
                               </div>
                           </div>
                        </div>
                        
                        {/* Mobile Hint */}
                        <div className="md:hidden flex items-center gap-1 text-[10px] text-slate-400 font-medium pt-1 animate-pulse">
                           <span>向左滑动申报案例</span> <ArrowRight className="w-3 h-3" />
                        </div>
                     </div>
                  </div>

                  {/* Right Column: Submission Form */}
                  {/* Updated to min-w-[100vw] container and w-[92vw] inner */}
                  <div className="min-w-[100vw] md:min-w-0 snap-center shrink-0 flex flex-col justify-center items-center md:items-stretch">
                     <div className="w-[92vw] md:w-full bg-white p-4 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                        <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-4 md:mb-8">申报<GradientText>碳生产力案例</GradientText></h3>
                        
                        <form className="space-y-3 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                           <div className="space-y-1">
                              <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">企业名称</label>
                              <input type="text" className="w-full h-9 md:h-12 px-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none text-xs md:text-sm" placeholder="请输入企业全称" />
                           </div>

                           <div className="space-y-1">
                              <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">联系邮箱</label>
                              <input type="email" className="w-full h-9 md:h-12 px-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none text-xs md:text-sm" placeholder="example@company.com" />
                           </div>

                           <div className="space-y-1">
                              <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">案例简介</label>
                              <textarea className="w-full h-20 md:h-32 p-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none resize-none text-xs md:text-sm" placeholder="简要描述案例亮点..."></textarea>
                           </div>

                           <button className="w-full py-2.5 md:py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2 text-sm md:text-base">
                              提交申报 <ChevronRight className="w-4 h-4" />
                           </button>
                        </form>
                     </div>
                  </div>
                  
              </div>
           </div>
        </Section>

        {/* --- Screen 11: News --- */}
        <Section id="news" className="bg-white bg-pattern-waves">
          <div className="max-w-7xl mx-auto w-full">
             <div className="flex items-end justify-between mb-6 md:mb-12 border-b border-slate-100 pb-4 md:pb-6">
               <h2 className="text-3xl md:text-4xl font-bold">
                 新闻<GradientText>动态</GradientText>
               </h2>
               <Button variant="outline" className="hidden md:flex">查看所有新闻</Button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
               {NEWS_DATA.map((news) => (
                 <div key={news.id} className="group flex flex-row md:flex-col gap-3 md:gap-4 cursor-pointer items-center md:items-stretch">
                   <div className="aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl relative bg-slate-100 w-1/3 md:w-full">
                     <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg text-[10px] md:text-xs font-bold text-slate-800 shadow-sm border border-white/50 hidden md:block">
                        {news.date}
                     </div>
                   </div>
                   <div className="flex-1 flex flex-col justify-center">
                     <div className="md:hidden text-[10px] text-slate-400 font-bold mb-1">{news.date}</div>
                     <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-1 md:mb-3 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                       {news.title}
                     </h3>
                     <div className="mt-auto pt-0 md:pt-2 flex items-center text-xs md:text-sm font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                       阅读全文 <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                     </div>
                   </div>
                 </div>
               ))}
               <Button variant="outline" className="md:hidden flex w-full justify-center text-sm">查看所有新闻</Button>
             </div>
          </div>
        </Section>

        {/* =================================================================
           5. 成员单位 (Members)
           ================================================================= */}
        
        {/* --- Screen 12: Members Database --- */}
        <Section id="members" className="bg-slate-50 bg-pattern-grid">
          {/* Padding handled by Section wrapper on mobile, but added extra top padding on desktop to clear nav */}
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col md:pt-36 pb-2 md:pb-10">
            {/* Header */}
            <div className="mb-2 md:mb-4 flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold">
                  成员<GradientText>单位</GradientText>
                </h2>
                <p className="text-slate-500 mt-1 md:mt-2 text-xs md:text-lg">汇聚行业领袖，共创可持续未来</p>
              </div>
              <div className="bg-white px-2 py-1.5 md:px-3 md:py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 shadow-sm flex items-center gap-2 w-fit">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="font-bold text-slate-800 text-sm md:text-base leading-none">{filteredMembers.length}</span>
                 <span className="text-[10px] md:text-xs">家成员单位</span>
              </div>
            </div>

            {/* Search Bar - Compact */}
            <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-sm mb-2 flex flex-col md:flex-row gap-1">
               {/* Search Input */}
               <div className="flex-1 relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                    <Search className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="搜索企业名称..." 
                    className="w-full pl-8 md:pl-9 pr-3 py-1.5 rounded-lg bg-slate-50 border-transparent focus:bg-white focus:ring-1 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-400 font-medium text-[10px] md:text-xs text-slate-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
               
               <div className="flex gap-1 w-full md:w-auto">
                 {/* Industry Select */}
                 <div className="flex-1 md:w-48 relative group">
                     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                       <Factory className="w-3 h-3 md:w-3.5 md:h-3.5" />
                     </div>
                     <select 
                       className="w-full pl-7 md:pl-8 pr-5 md:pr-6 py-1.5 rounded-lg bg-slate-50 border-transparent focus:bg-white focus:ring-1 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer font-medium text-[10px] md:text-xs text-slate-700"
                       value={filterIndustry}
                       onChange={(e) => setFilterIndustry(e.target.value)}
                     >
                        {industries.map(ind => (
                          <option key={ind} value={ind}>{ind === 'All' ? '所有行业' : ind}</option>
                        ))}
                     </select>
                     <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 rotate-90" />
                     </div>
                 </div>

                 {/* Year Select */}
                 <div className="flex-1 md:w-40 relative group">
                     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors pointer-events-none">
                       <Target className="w-3 h-3 md:w-3.5 md:h-3.5" />
                     </div>
                     <select 
                       className="w-full pl-7 md:pl-8 pr-5 md:pr-6 py-1.5 rounded-lg bg-slate-50 border-transparent focus:bg-white focus:ring-1 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer font-medium text-[10px] md:text-xs text-slate-700"
                       value={filterYear}
                       onChange={(e) => setFilterYear(e.target.value)}
                     >
                        {years.map(yr => (
                          <option key={yr} value={yr}>{yr === 'All' ? '目标年份' : yr}</option>
                        ))}
                     </select>
                     <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 rotate-90" />
                     </div>
                 </div>
               </div>
            </div>
            
            {/* Table - Font Sizes Increased */}
            <div className="flex-1 overflow-auto bg-white rounded-xl md:rounded-[2rem] border border-slate-200 shadow-xl custom-scrollbar relative min-h-0">
              <table className="w-full text-left border-collapse min-w-[300px] md:min-w-[600px]">
                <thead className="bg-slate-50/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200">
                  <tr>
                    <th className="py-2 md:py-3 px-3 md:px-4 text-xs md:text-base font-bold text-slate-500 uppercase tracking-wider pl-4 md:pl-6">公司名称</th>
                    <th className="py-2 md:py-3 px-3 md:px-4 text-xs md:text-base font-bold text-slate-500 uppercase tracking-wider text-right md:text-left">成员级别</th>
                    <th className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-lg font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">行业</th>
                    <th className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-lg font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">总部</th>
                    <th className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-lg font-bold text-slate-500 uppercase tracking-wider text-right pr-6 hidden md:table-cell">目标年份</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredMembers.length > 0 ? (
                    filteredMembers.map((m, i) => (
                      <tr key={i} className="group hover:bg-emerald-50/30 transition-colors cursor-pointer">
                        <td className="py-2 md:py-3 px-3 md:px-4 pl-4 md:pl-6">
                           <div className="font-bold text-slate-900 text-base md:text-xl group-hover:text-emerald-700 transition-colors">{m.name}</div>
                           <div className="md:hidden text-[10px] text-slate-500 mt-0.5 flex items-center gap-1 opacity-80">
                              <span className="font-mono">{m.targetYear}</span> • {m.industry}
                           </div>
                        </td>
                        <td className="py-2 md:py-3 px-3 md:px-4 text-right md:text-left">
                          <span className={`inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-base font-bold border ${
                            m.level.includes('铂金') || m.level.includes('发起') 
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}>
                            {m.level}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 hidden md:table-cell font-medium text-lg">
                           <div className="flex items-center gap-1.5">
                              {m.industry.includes('制造') || m.industry.includes('能源') ? <Factory className="w-5 h-5 opacity-40"/> : <Building2 className="w-5 h-5 opacity-40"/>}
                              {m.industry}
                           </div>
                        </td>
                        <td className="py-3 px-4 text-slate-600 hidden md:table-cell text-lg">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-5 h-5 opacity-40" />
                            {m.location}
                          </div>
                        </td>
                        <td className="py-3 px-4 pr-6 text-right font-mono font-bold text-slate-900 text-xl group-hover:text-emerald-600 hidden md:table-cell">{m.targetYear}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-8 md:p-12 text-center text-slate-400">
                        <div className="flex flex-col items-center gap-2">
                           <Filter className="w-6 h-6 md:w-8 md:h-8 opacity-20" />
                           <span className="text-xs md:text-base">未找到匹配的成员单位</span>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="mt-2 md:mt-4 flex justify-center text-[10px] md:text-xs text-slate-400 pb-0">
               <div className="text-center">
                  ©2025 GE1OO  技术支持：湖州新能源云碳中和研究院   备案号：浙ICP备2024078405号-2
               </div>
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}

export default App;