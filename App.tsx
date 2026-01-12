
import React, { useState } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Section } from './components/Layout/Section';
import { GradientText } from './components/UI/GradientText';
import { Button } from './components/UI/Button';
import { 
  ArrowRight, 
  Zap, 
  Globe, 
  Award, 
  FileText, 
  CheckCircle2,
  Download,
  MapPin,
  Factory,
  Building2,
  Users,
  ChevronRight,
  Target,
  PenTool,
  Calendar,
  Landmark,
  ArrowUpRight,
  Clock,
  Monitor,
  BarChart3,
  X,
  ChevronLeft,
  Phone,
  MessageCircle,
  Info
} from 'lucide-react';
import { MEMBER_LOGOS, STANDARDS, NEWS_DATA, CASES } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedEvent(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 overflow-hidden relative font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      
      {/* Scroll Snap Container */}
      <div className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth snap-container">
        
        {/* --- Screen 1: Home --- */}
        <Section id="home" className="bg-black" backgroundImage="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop">
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-0"></div>
           <div className="relative z-10 max-w-6xl mx-auto text-center space-y-3 md:space-y-6 text-white px-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-1 md:mb-2 text-center mx-auto">
              Green Electricity 100%
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-white drop-shadow-xl">
              绿电百分百<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">行动倡议 (GE1OO)</span>
            </h1>
            <p className="text-xs md:text-xl text-slate-100 leading-relaxed max-w-3xl mx-auto font-light tracking-wide opacity-90 line-clamp-4 md:line-clamp-none">
              GE1OO行动倡议于2023年6月发起，作为国内首个聚焦绿电消费的行动倡议，旨在推动可再生能源的广泛利用，助力中国碳中和目标。目前已得到近百家知名企业 and 权威机构的支持。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 pt-3 md:pt-8">
              <Button size="md" className="bg-white text-emerald-900 hover:bg-emerald-50 border-0 w-1/2 sm:w-auto md:px-8 md:py-3.5 md:text-lg" onClick={() => document.getElementById('join')?.scrollIntoView({behavior: 'smooth'})}>加入我们</Button>
              <Button size="md" className="bg-black/30 backdrop-blur-md border border-white/30 text-white hover:bg-white/10 w-1/2 sm:w-auto md:px-8 md:py-3.5 md:text-lg" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>了解更多</Button>
            </div>
          </div>
        </Section>

        {/* --- Screen 2: Partners & Members --- */}
        <Section id="home-partners" className="bg-white bg-pattern-waves">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col justify-center h-full">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-4 tracking-tight">共建<GradientText>绿色生态</GradientText></h2>
              <p className="text-xs md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">汇聚行业权威机构与领军企业，共同定义绿色用能新标准。</p>
            </div>
            <div className="mb-6 md:mb-8">
               <div className="flex items-center justify-center gap-4 mb-3 md:mb-4">
                 <div className="h-px w-6 md:w-8 bg-slate-200"></div>
                 <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">联合发起单位</span>
                 <div className="h-px w-6 md:w-8 bg-slate-200"></div>
               </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-1 md:px-4">
                 {[
                    { name: "中国工业节能与清洁生产协会工业碳效专委会", en: "CIECCPA", icon: Factory },
                    { name: "中国电力发展促进会双碳专委会", en: "CEPPC", icon: Zap },
                    { name: "清华大学气候变化与可持续发展研究院", en: "ICCSD", icon: Landmark },
                    { name: "2060零碳企业行动倡议", en: "0CCI", icon: Target }
                 ].map((item, index) => (
                     <div key={index} className="group relative bg-gradient-to-br from-emerald-50 to-emerald-50/20 rounded-xl p-3 md:p-5 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                         <div className="relative mb-2 md:mb-4">
                             <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                                <item.icon className="w-5 h-5 md:w-7 md:h-7 text-emerald-600" />
                             </div>
                         </div>
                         <h4 className="font-bold text-slate-800 text-[10px] md:text-sm leading-snug mb-1 md:mb-2 min-h-[2.5rem] flex items-center">
                            {item.name.includes('协会') ? <>中国工业节能与清洁生产协会<br/>工业碳效专委会</> : item.name.includes('促进会') ? <>中国电力发展促进会<br/>双碳专委会</> : item.name.includes('清华') ? <>清华大学<br/>气候变化与可持续发展研究院</> : item.name}
                         </h4>
                         <span className="text-[8px] md:text-[9px] font-bold text-slate-400">{item.en}</span>
                     </div>
                 ))}
              </div>
            </div>
            <div className="overflow-hidden flex py-4">
              <div className="flex gap-10 md:gap-20 whitespace-nowrap animate-marquee">
                {[...MEMBER_LOGOS, ...MEMBER_LOGOS].map((logo, i) => (
                  <span key={i} className="text-sm md:text-lg font-bold text-slate-400">{logo}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* --- ... (Other Sections) ... --- */}

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
                    title: "01. 开展绿电消费信息披露", 
                    desc: "定期公开披露绿电消费信息，持续提升绿电消费比例和质量。",
                    icon: <FileText className="w-5 h-5 md:w-10 md:h-10" />,
                    color: "emerald"
                  },
                  { 
                    title: "02. 设定绿电100%目标", 
                    desc: "设定不晚于2050年的“绿电100%”目标，优先实现自身运营“全绿电”，积极推动价值链绿电全覆盖。",
                    icon: <Target className="w-5 h-5 md:w-10 md:h-10" />,
                    color: "teal"
                  },
                  { 
                    title: "03. 推动绿电价值链创新", 
                    desc: "推动扩大绿电消费、提升与电力系统友好互动的技术与产业协同创新，拓展更多绿电消费解决方案。",
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
                  </div>
              </div>

           </div>
        </Section>

        {/* --- Screen 8: Contact Form --- */}
        <Section id="join-form" className="bg-slate-50 bg-pattern-grid" justify="start">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-12 max-w-7xl mx-auto w-full pt-24 md:pt-40 h-full flex flex-col">
              {/* Swapped order on mobile: Text first (order-1), Form second (order-2) */}
              <div className="lg:col-span-5 space-y-2 md:space-y-8 order-1 lg:order-1 px-4 md:px-0">
                 <h2 className="text-2xl md:text-4xl font-bold">
                   申请加入<br/><GradientText>GE1OO 倡议</GradientText>
                 </h2>
                 <p className="text-xs md:text-lg text-slate-600 leading-tight md:leading-relaxed">
                   若您审阅上述资料并确认符合GE1OO成员资格条件，请填写详细信息，我们将尽快与您联系。
                 </p>
              </div>

              <div className="lg:col-span-7 bg-white p-4 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden order-2 lg:order-2 flex-grow mb-4 md:mb-0">
                 <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16"></div>
                 <form className="space-y-2 md:space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-2 md:gap-5">
                       <div className="space-y-1">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">姓名</label>
                          <input type="text" className="w-full px-3 py-1.5 md:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 transition-all outline-none text-xs md:text-base" placeholder="您的姓名" />
                       </div>
                       <div className="space-y-1">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">职务</label>
                          <input type="text" className="w-full px-3 py-1.5 md:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 transition-all outline-none text-xs md:text-base" placeholder="您的职务" />
                       </div>
                    </div>
                    
                    <div className="space-y-1">
                       <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">单位名称</label>
                       <input type="text" className="w-full px-3 py-1.5 md:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 transition-all outline-none text-xs md:text-base" placeholder="企业/机构全称" />
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:gap-5">
                       <div className="space-y-1">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">邮箱</label>
                          <input type="email" className="w-full px-3 py-1.5 md:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 transition-all outline-none text-xs md:text-base" placeholder="name@company.com" />
                       </div>
                       <div className="space-y-1">
                          <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase">联系电话</label>
                          <input type="tel" className="w-full px-3 py-1.5 md:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-emerald-500 transition-all outline-none text-xs md:text-base" placeholder="1XX XXXX" />
                       </div>
                    </div>

                    <Button size="lg" className="w-full mt-2 font-bold shadow-lg shadow-emerald-500/20 py-2.5 md:py-3.5 text-xs md:text-lg">提交申请</Button>
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
        <Section id="services" className="bg-slate-50 bg-pattern-grid" justify="start">
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col pt-24 md:pt-40">
            {/* Title Block - Unified top positioning */}
            <div className="text-center mb-4 md:mb-16 shrink-0">
               <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                 应用<GradientText>工具</GradientText>
               </h2>
               <p className="text-slate-500 text-xs md:text-xl">
                 为GE1OO成员单位提供碳效应用工具
               </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-12 px-4 md:px-0 items-stretch justify-start">
                {/* App 1 */}
                <div className="group bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-10 shadow-lg md:shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-emerald-200 transition-all hover:-translate-y-2 relative overflow-hidden flex flex-col h-auto">
                     <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <BarChart3 className="w-20 h-20 md:w-32 md:h-32" />
                     </div>
                     <div className="relative z-10 flex flex-col h-full items-start">
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
                <div className="group bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-10 shadow-lg md:shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all hover:-translate-y-2 relative overflow-hidden flex flex-col h-auto">
                     <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Globe className="w-20 h-20 md:w-32 md:h-32" />
                     </div>
                     <div className="relative z-10 flex flex-col h-full items-start">
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
           <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="space-y-4 md:space-y-8 px-4 md:px-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
                       <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="space-y-2">
                       <h2 className="text-2xl md:text-4xl font-bold text-slate-900">活动<GradientText>预告</GradientText></h2>
                       <p className="text-slate-600 text-sm md:text-lg leading-relaxed">GE1OO定期举办行业研讨会及重磅峰会论坛活动。点击查看活动详情并报名参加。</p>
                    </div>

                    <div className="space-y-3">
                       {/* Main Event Card */}
                       <div 
                         onClick={() => setSelectedEvent(true)}
                         className="relative bg-white rounded-xl md:rounded-2xl border border-slate-200 shadow-sm p-4 cursor-pointer hover:border-emerald-500 hover:shadow-md transition-all group overflow-hidden"
                       >
                           <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                           <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-600">
                                    <span className="text-[10px] uppercase font-bold opacity-60">1月</span>
                                    <span className="text-2xl font-bold leading-none">30</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-700 mb-1">即将开始</div>
                                    <h3 className="text-sm md:text-base font-bold text-slate-900 truncate pr-4">绿色能源转型：电力领域碳资产开发与可信管理培训班</h3>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
                                        <MapPin className="w-3 h-3" /> <span>浙江湖州 · 西塞科学谷</span>
                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                           </div>
                       </div>

                       <div className="relative bg-white rounded-xl border border-slate-200 shadow-sm p-4 opacity-60">
                           <div className="absolute top-0 left-0 w-1.5 h-full bg-sky-500"></div>
                           <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center justify-center text-slate-600">
                                    <span className="text-[10px] uppercase font-bold opacity-60">2026</span>
                                    <span className="text-2xl font-bold leading-none">1月</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-100 text-sky-700 mb-1">年度评审</span>
                                    <h3 className="text-sm md:text-base font-bold text-slate-900 truncate">碳生产力优秀案例评审</h3>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5"><Clock className="w-3 h-3" /> <span>待发布</span></div>
                                </div>
                           </div>
                       </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                     <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Event Hall" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 text-white">
                           <p className="text-sm font-medium">GE1OO 倡导企业积极参与行业交流，共建可信碳管理生态。</p>
                        </div>
                     </div>
                  </div>
              </div>
           </div>
        </Section>

        {/* --- Screen 11: News --- */}
        <Section id="news" className="bg-white bg-pattern-waves relative" justify="start">
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col pt-24 md:pt-40">
             <div className="flex items-end justify-between mb-8 border-b border-slate-100 pb-6 shrink-0 px-4 md:px-0">
               <h2 className="text-2xl md:text-4xl font-bold">新闻<GradientText>动态</GradientText></h2>
               <Button variant="outline" className="hidden md:flex">查看所有新闻</Button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-4 md:px-0">
               {NEWS_DATA.map((news) => (
                 <div key={news.id} className="group flex flex-row md:flex-col gap-4 cursor-pointer">
                   <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 w-1/3 md:w-full shrink-0">
                     <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   </div>
                   <div className="flex-1">
                     <div className="text-[10px] text-slate-400 font-bold mb-1">{news.date}</div>
                     <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-700 line-clamp-2">{news.title}</h3>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-slate-400">
             ©2025 GE1OO | 技术支持：湖州新能源云碳中和研究院 | 浙ICP备2024078405号-2
          </div>
        </Section>

      </div>

      {/* --- Secondary Page: Event Detail Modal --- */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-md flex justify-end"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full lg:w-3/5 h-full bg-white shadow-2xl flex flex-col relative"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 glass-panel border-b border-slate-100 px-4 h-16 flex items-center justify-between">
                <button 
                  onClick={() => setSelectedEvent(false)}
                  className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors gap-1 text-sm font-medium"
                >
                  <ChevronLeft className="w-4 h-4" /> 返回列表
                </button>
                <div className="text-slate-400 text-xs font-bold tracking-widest uppercase">培训班详情</div>
                <button onClick={() => setSelectedEvent(false)} className="p-2 text-slate-400 hover:text-slate-900"><X className="w-5 h-5" /></button>
              </div>

              {/* Content Scrollable */}
              <div className="flex-1 overflow-y-auto no-scrollbar">
                {/* Hero */}
                <div className="bg-emerald-950 text-white p-6 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex px-3 py-1 rounded bg-white/10 border border-white/20 text-xs font-bold">公益培训 · 限额报名</div>
                    <h1 className="text-2xl md:text-4xl font-bold leading-tight">绿色能源转型：电力领域碳资产开发与可信管理培训班</h1>
                    <div className="flex flex-wrap gap-4 text-sm opacity-90">
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-emerald-400" /> 2026年1月30日 (星期五) 09:00-17:00</div>
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" /> 浙江湖州 · 西塞科学谷腾云楼报告厅</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-12 grid grid-cols-1 xl:grid-cols-12 gap-10">
                  {/* Left: Info */}
                  <div className="xl:col-span-7 space-y-10">
                    <section className="space-y-4">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold border-b border-emerald-100 pb-2">
                        <Info className="w-5 h-5" /> 培训背景
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        当前，全国温室气体自愿减排交易市场（CCER）已全面重启并进入加速扩容期。生态环境部已发布一批以六氟化硫（SF6）回收和净化、海上风电、光热发电等为代表的电力领域温室气体自愿减排项目方法学。为帮助电力相关单位精准把握形势，深入理解核心要求，特举办本次专题培训。
                      </p>
                    </section>

                    <section className="space-y-6">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold border-b border-emerald-100 pb-2">
                        <FileText className="w-5 h-5" /> 培训大纲
                      </div>
                      <div className="grid gap-4">
                        {[
                          { title: "宏观形势展望", desc: "全球背景下的碳贸易壁垒应对，及中国 CCER 市场重启的战略意义。" },
                          { title: "电力方法学全景解读", desc: "重点解读《电力设备 SF6 回收和净化》适用条件与合格性要求，介绍并网海上风电等方法学。" },
                          { title: "碳资产开发实务", desc: "以 SF6 回收与净化为例，全流程减排量核算、潜力评估及典型问题分析。" },
                          { title: "碳资产可信数据空间应用", desc: "探讨如何构建满足 MRV 要求的台账体系，实现关键参数的数据确权和追溯。" },
                          { title: "策略研讨", desc: "探讨电力碳资产开发的路径选择。" }
                        ].map((item, i) => (
                          <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-emerald-600 shadow-sm shrink-0">{i+1}</div>
                             <div>
                               <h4 className="font-bold text-slate-800 text-sm md:text-base mb-1">{item.title}</h4>
                               <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                             </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="space-y-4">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold border-b border-emerald-100 pb-2">
                        <Building2 className="w-5 h-5" /> 组织架构
                      </div>
                      <div className="space-y-3 text-sm text-slate-600">
                        <div><span className="font-bold text-slate-800">主办单位：</span>中国电力发展促进会</div>
                        <div>
                          <span className="font-bold text-slate-800">承办单位：</span>
                          中国电力发展促进会碳达峰碳中和专委会、国网浙江电力投资运营有限公司、国网湖州供电公司、湖州新能源云碳中和研究院
                        </div>
                      </div>
                    </section>

                    <section className="space-y-4">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold border-b border-emerald-100 pb-2">
                        <Phone className="w-5 h-5" /> 联系方式
                      </div>
                      <div className="flex flex-wrap gap-8 text-sm">
                        <div className="flex flex-col">
                          <span className="text-slate-400 text-xs font-medium uppercase mb-1">施女士</span>
                          <span className="font-bold text-slate-800">15557217068</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-slate-400 text-xs font-medium uppercase mb-1">覃先生</span>
                          <span className="font-bold text-slate-800">13989486388</span>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Right: Registration Form */}
                  <div className="xl:col-span-5">
                    <div className="sticky top-10">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                        <div className="bg-emerald-50 p-6 border-b border-emerald-100">
                          <h3 className="text-lg font-bold text-emerald-900">活动在线报名</h3>
                          <p className="text-xs text-emerald-700 mt-1 opacity-80">请准确填写以下信息，报名成功后将以短信形式通知。</p>
                        </div>
                        <form className="p-6 space-y-4" onSubmit={handleRegister}>
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase">姓名 <span className="text-red-500">*</span></label>
                            <input required type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm" placeholder="请输入姓名" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase">单位名称 <span className="text-red-500">*</span></label>
                            <input required type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm" placeholder="企业或机构全称" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase">职务 <span className="text-red-500">*</span></label>
                            <input required type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm" placeholder="现任职务" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase">手机电话 <span className="text-red-500">*</span></label>
                            <input required type="tel" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm" placeholder="常用手机号码" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase">微信 (选填)</label>
                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-sm" placeholder="微信号" />
                          </div>

                          <Button 
                            type="submit" 
                            disabled={isSubmitting || submitted}
                            className="w-full py-3.5 mt-4 text-sm font-bold tracking-wider"
                          >
                            {isSubmitting ? '提交中...' : submitted ? '报名成功' : '提交报名信息'}
                          </Button>

                          <div className="flex items-center gap-2 justify-center text-[10px] text-slate-400 mt-4">
                             <CheckCircle2 className="w-3 h-3" /> 本次培训为公益性质，不收取培训费用。
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Spacer */}
                <div className="h-20"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
