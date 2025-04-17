import { Card, Carousel } from '@/components/ui/apple-cards-carousel';
import React from 'react';

function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Projects I've Built
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ProjectContent = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{' '}
        {desc}
      </p>
    </div>
  );
};

const data = [
  {
    category: 'IoT Project',
    title: 'Smart Milk Pan (IoT Based)',
    src: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: (
      <ProjectContent
        title="IoT-Based Smart Milk Pan"
        desc="An ESP32-powered milk pan that prevents overboiling by monitoring temperature and sending alerts. Built using Python, sensors, and webhooks."
      />
    ),
  },
  {
    category: 'Web App',
    title: 'Learning Management System (LMS)',
    src: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: (
      <ProjectContent
        title="Custom LMS Portal"
        desc="A full-featured LMS built with Laravel and MySQL. Includes student registration, quiz modules, and admin analytics."
      />
    ),
  },
  {
    category: 'Dashboard',
    title: 'Dataandgrow Dashboard',
    src: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: (
      <ProjectContent
        title="Real-time Business Dashboard"
        desc="Developed at Dataandgrow during my internship using React.js. Displays KPIs through API-integrated, live data visualizations."
      />
    ),
  },
  {
    category: 'Web Platform',
    title: 'QuizPrep Academic Portal',
    src: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: (
      <ProjectContent
        title="QuizPrep Platform"
        desc="A secure Laravel-based online testing platform with timer, marking system, and student performance insights."
      />
    ),
  },
  {
    category: 'Billing Software',
    title: 'Invoice & GST Billing Software',
    src: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: (
      <ProjectContent
        title="Invoice Manager with GST"
        desc="A Laravel/PHP invoicing app that supports GST rules, PDF generation, and real-time invoice tracking for SMEs."
      />
    ),
  },
  {
    category: 'EdTech Leadership',
    title: 'Adobe Express Student Training',
    src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: (
      <ProjectContent
        title="AI-Integrated Training Platform"
        desc="Led AI training for over 1000 students using Adobe Express under NEP 2020. Focused on modern creative tech education."
      />
    ),
  },
];

export default AppleCardsCarousel;
