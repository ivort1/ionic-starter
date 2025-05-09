export interface Information {
  name: string;
  location: string;
  phone: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export interface SocialMedia {
  instagram_name: string;
  instagram_url: string;
}

export interface Service {
  service: string;
  details: string;
  price: string;
}

export interface Faqs {
  question: string;
  answer: string;
}

export interface Database {
  information: Information;
  business_hours: BusinessHours[];
  social_media: SocialMedia;
  services: Service[];
  faqs: Faqs[];
}