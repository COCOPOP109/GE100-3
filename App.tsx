
import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Section } from './components/Layout/Section';
import { Button } from './components/UI/Button';

const App: React.FC = () => {
  const navigateToJoin = () => {
    window.open('https://ge100.ccmatch.net/#section7', '_blank');
  };

  const navigateToOfficial = () => {
    window.open('https://ge100.ccmatch.net', '_blank');
  };

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 overflow-hidden relative font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      
      {/* Scroll Container */}
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
              <Button size="md" className="bg-white text-emerald-900 hover:bg-emerald-50 border-0 w-1/2 sm:w-auto md:px-8 md:py-3.5 md:text-lg" onClick={navigateToJoin}>加入我们</Button>
              <Button size="md" className="bg-black/30 backdrop-blur-md border border-white/30 text-white hover:bg-white/10 w-1/2 sm:w-auto md:px-8 md:py-3.5 md:text-lg" onClick={navigateToOfficial}>了解更多</Button>
            </div>
          </div>
        </Section>

      </div>
      
      {/* Simple Footer overlay for the home screen */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-white/50 z-20 pointer-events-none">
         ©2025 GE1OO | 技术支持：湖州新能源云碳中和研究院 | 浙ICP备2024078405号-2
      </div>
    </div>
  );
}

export default App;
