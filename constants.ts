
import { NavItem, Member, NewsItem, StandardItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于倡议' },
  { id: 'join', label: '加入GE1OO' },
  { id: 'resources', label: '资源中心' },
  { id: 'members', label: '成员单位' },
];

export const INITIATORS = [
  "中国电力发展促进会 (CEPPC)",
  "中国工业节能与清洁生产协会工业碳效专委会 (CIECCPA)",
  "清华大学碳中和研究院",
  "2060零碳企业行动倡议(0CCI)"
];

export const MEMBER_LOGOS = [
  "德力西电气", "小米", "晶澳科技", "协鑫能科", "盒马", "HRS驿舒", "金风慧能", "达商旅", "COMIN中国", "华发集团", "碧澄能源"
];

export const IMPACT_STATS = [
  { value: "30+", label: "零碳联盟专家" },
  { value: "50+", label: "标准参编单位" },
  { value: "10+", label: "早期成员单位" },
  { value: "200+", label: "机构参与研讨会" },
];

export const STANDARDS: StandardItem[] = [
  { code: "T/CEPPC 43-2024", title: "绿电消费信息披露与评价指引", publisher: "中国电力发展促进会 (CEPPC)" },
  { code: "T/CIECCPA 095-2025", title: "净零与碳中和工厂建设和评价规范", publisher: "中国工业节能与清洁生产协会" },
  { code: "T/CIECCPA 096-2025", title: "净零与碳中和园区建设和评价规范", publisher: "中国工业节能与清洁生产协会" },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    date: "2024-09-15",
    title: "2024绿色发展与碳中和（北京）论坛在服贸会期间举办",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    date: "2025-09-10",
    title: "“绿电百分百”研讨会在北京举行，发布2025共识",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    date: "2025-11-12",
    title: "GE100共识在COP30中国角边会向全球发布",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2532&auto=format&fit=crop",
    link: "#"
  }
];

export const CASES = [
  { title: "某制造园区零碳转型实践之路", subtitle: "园区绿电消纳示范", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" },
  { title: "跨国企业在华工厂绿电100%达成路径", subtitle: "工厂能效提升", img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop" },
  { title: "绿色供应链管理最佳实践分享", subtitle: "供应链协同", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" }
];

export const SAMPLE_MEMBERS: Member[] = [
  { name: "小米", level: "铂金级", joinYear: "2023", targetYear: "2040", industry: "科技/消费电子", location: "北京" },
  { name: "晶澳科技", level: "铂金级", joinYear: "2023", targetYear: "2050", industry: "新能源/制造", location: "北京" },
  { name: "德力西电气", level: "金牌级", joinYear: "2023", targetYear: "2050", industry: "电气制造", location: "温州" },
  { name: "协鑫能科", level: "铂金级", joinYear: "2024", targetYear: "2045", industry: "清洁能源", location: "苏州" },
  { name: "金风慧能", level: "技术伙伴", joinYear: "2024", targetYear: "2040", industry: "风电服务", location: "北京" },
  { name: "盒马", level: "金牌级", joinYear: "2024", targetYear: "2050", industry: "新零售", location: "上海" },
  { name: "HRS驿舒", level: "金牌级", joinYear: "2024", targetYear: "2050", industry: "企业服务", location: "上海" },
  { name: "COMIN中国", level: "金牌级", joinYear: "2023", targetYear: "2045", industry: "咨询服务", location: "深圳" },
  { name: "华发集团", level: "金牌级", joinYear: "2024", targetYear: "2050", industry: "综合集团", location: "珠海" },
];
