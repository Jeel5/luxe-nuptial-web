
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Gift, Camera, Music, Utensils } from 'lucide-react';

const services = [
  {
    icon: <Calendar className="h-8 w-8 text-luxe-gold" />,
    title: 'Full Planning',
    description: 'Comprehensive wedding planning from concept to execution, ensuring every detail is perfect.',
  },
  {
    icon: <Users className="h-8 w-8 text-luxe-gold" />,
    title: 'Day Coordination',
    description: 'Professional coordination on your wedding day, allowing you to relax and enjoy every moment.',
  },
  {
    icon: <Gift className="h-8 w-8 text-luxe-gold" />,
    title: 'Design & Styling',
    description: 'Elegant design concepts that reflect your unique style and create unforgettable atmospheres.',
  },
  {
    icon: <Camera className="h-8 w-8 text-luxe-gold" />,
    title: 'Vendor Selection',
    description: 'Access to our curated network of premium vendors for photography, videography and more.',
  },
  {
    icon: <Music className="h-8 w-8 text-luxe-gold" />,
    title: 'Entertainment',
    description: 'Booking exceptional entertainment options from live music to interactive experiences.',
  },
  {
    icon: <Utensils className="h-8 w-8 text-luxe-gold" />,
    title: 'Catering & Bar',
    description: 'Exquisite culinary experiences and beverage services tailored to your preferences.',
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (titleRef.current) {
      titleRef.current.classList.add('scroll-animate');
      observer.observe(titleRef.current);
    }
    
    cardRefs.current.forEach((card, index) => {
      if (card) {
        card.classList.add('scroll-animate');
        card.style.transitionDelay = `${index * 100}ms`;
        observer.observe(card);
      }
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-luxe-cream"
    >
      <div className="luxe-container">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-subtitle">Our Expertise</p>
          <h2 className="section-title">Services Tailored to Your Vision</h2>
          <p className="text-luxe-taupe text-lg mt-6">
            We offer comprehensive wedding planning services designed to create an exceptional and stress-free experience from start to finish.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white p-8 rounded-sm shadow-soft border border-luxe-gold/10 hover:shadow-elegant transition-all duration-500 group"
            >
              <div className="mb-6 p-4 inline-block rounded-sm bg-luxe-blush/50 group-hover:bg-luxe-gold/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl text-luxe-charcoal mb-3">{service.title}</h3>
              <p className="text-luxe-taupe mb-6">{service.description}</p>
              <Link 
                to="/services" 
                className="text-luxe-gold text-sm font-medium uppercase tracking-wider elegant-underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
