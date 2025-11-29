export interface NavItem {
  id: string;
  label: string;
}

export interface Member {
  name: string;
  level: string;
  joinYear: string;
  targetYear: string;
  industry: string;
  location: string;
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface StandardItem {
  code: string;
  title: string;
  publisher: string;
}