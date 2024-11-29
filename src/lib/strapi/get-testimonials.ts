// import { type Image } from '@/lib/strapi/sanity-image';
import groq from 'groq';

type Testimonial = {
  _id: string;
  _type: 'testimonial';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  title: string;
  quote: string;
  logo: any;
  avatar: any;
};

function getTestimonials() {
  return {
    testimonials: [
      {
        id: 1,
        quote:
          'I got a wonderful website with great expertise. I didn’t think the booking process would be so smooth and user-friendly!',
        name: 'Fred',
        title: 'Director, Lalla Essaouira',
      },
      {
        id: 2,
        quote:
          'The Pan Maroc website exceeded my expectations. It’s incredibly easy to navigate, and the design is simply outstanding!',
        name: 'Amine',
        title: 'Manager, Pan Maroc',
      },
      {
        id: 3,
        quote:
          'Working with the team on Cooper Pharma’s website was a pleasure. The result is professional, sleek, and represents our brand perfectly.',
        name: 'Sarah',
        title: 'Marketing Head, Cooper Pharma',
      },
      {
        id: 4,
        quote:
          'Passe Simple Avocat’s website turned out fantastic! It’s empathetic, informative, and captures the essence of our mission.',
        name: 'Ali',
        title: 'Founder, Passe Simple Avocat',
      },
      {
        id: 5,
        quote:
          'Excelsa’s website reflects the quality and dedication of their craftsmanship. It’s easy to navigate and visually impressive.',
        name: 'Hassan',
        title: 'CEO, Excelsa',
      },
      {
        id: 6,
        quote:
          'Prevas’s website has given us a professional online presence. The user experience is seamless, and the design is top-notch!',
        name: 'Karim',
        title: 'Consultant, Prevas',
      },
      {
        id: 7,
        quote:
          'Lematelas.com is now one of the best platforms for mattress shopping. It’s fast, intuitive, and offers great features!',
        name: 'Noura',
        title: 'Product Manager, Lematelas.com',
      },
    ],
  };
}

export { getTestimonials, type Testimonial };
