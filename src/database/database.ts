export interface Information {
    name: string;
    location: string;
    phone: string;
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
    social_media: SocialMedia;
    services: Service[];
    faqs: Faqs[];
  }