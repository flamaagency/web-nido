export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface HeroData {
  badge?: string;
  tagline: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  watermarkText?: string;
  videoSrc?: string;
  fallbackImageSrc: string;
}

export interface AboutBlock {
  tag: string;
  heading: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export interface AboutData {
  sectionNumber: string;
  sectionTag: string;
  title?: string;
  lead?: string;
  blocks: AboutBlock[];
}

export interface MainProjectSpec {
  label: string;
  value: string;
}

export interface ProjectGalleryItem {
  label: string;
  src: string;
}

export interface MainProject {
  id: string;
  badge: string;
  statusTag?: string;
  name: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  specs?: MainProjectSpec[];
  gallery?: ProjectGalleryItem[];
}

export interface PriorExperienceProject {
  id: string;
  name: string;
  category: string;
  statusTag?: string;
  imageSrc: string;
  description?: string;
  gallery?: ProjectGalleryItem[];
}

export interface ProjectsData {
  sectionNumber: string;
  sectionTag: string;
  mainProject: MainProject;
  trajectoryBadge: string;
  trajectoryTitle: string;
  trajectoryDescription: string;
  priorProjects: PriorExperienceProject[];
}

export interface DetailPillar {
  index: string;
  category: string;
  title: string;
  description: string;
  actionText?: string;
  imageSrc: string;
}

export interface DetailsData {
  sectionNumber: string;
  sectionTag: string;
  title: string;
  intro: string;
  pillars: DetailPillar[];
  quoteBanner?: {
    quote: string;
    ctaText: string;
  };
}

export interface ContactChannel {
  id: string;
  title: string;
  value: string;
  subtext: string;
  actionUrl: string;
  type: 'whatsapp' | 'email' | 'instagram';
}

export interface ContactData {
  sectionNumber: string;
  sectionTag: string;
  title: string;
  subtitle: string;
  formBadge?: string;
  formTitle: string;
  imageSrc: string;
  channels: ContactChannel[];
  visitInfo: {
    title: string;
    address?: string;
    description: string;
    actionLabel: string;
    mapUrl: string;
  };
}

export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  projectInterest: string;
  message: string;
}
