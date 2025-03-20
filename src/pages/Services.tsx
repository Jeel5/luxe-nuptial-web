
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Users, Gift, Camera, Music, Utensils, MapPin, Heart, CheckCircle } from 'lucide-react';

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'full-planning',
      icon: <Calendar className="h-10 w-10 text-luxe-gold" />,
      title: 'Full Planning & Design',
      description: 'Our signature service provides comprehensive planning from engagement to reception. We\'ll guide you through every decision, manage all logistics, design your aesthetic vision, and coordinate your entire celebration.',
      features: [
        'Unlimited consultations and communication',
        'Budget development and management',
        'Venue and vendor selection and management',
        'Design concept creation and implementation',
        'Timeline and floor plan development',
        'Full day-of coordination (10+ hours)',
        'Rehearsal coordination',
        'Post-wedding wrap-up services'
      ],
      best: true
    },
    {
      id: 'day-coordination',
      icon: <Users className="h-10 w-10 text-luxe-gold" />,
      title: 'Day-of Coordination',
      description: 'For couples who have planned their own wedding but need professional support to execute their vision seamlessly on the wedding day itself.',
      features: [
        'Three pre-wedding consultations',
        'Vendor confirmation and coordination',
        'Detailed timeline creation',
        'Ceremony rehearsal direction',
        'Full wedding day coordination (10 hours)',
        'Setup and breakdown supervision',
        'Wedding day emergency kit',
        'Point of contact for all vendors and guests'
      ],
      best: false
    },
    {
      id: 'design',
      icon: <Gift className="h-10 w-10 text-luxe-gold" />,
      title: 'Design & Styling',
      description: 'Transform your wedding vision into a cohesive and stunning reality with our expert design and styling services.',
      features: [
        'Comprehensive design consultation',
        'Mood board and style guide creation',
        'Color palette development',
        'Decor and floral design',
        'Lighting and ambiance planning',
        'Tabletop and linen selection',
        'Stationery suite coordination',
        'Setup supervision and styling'
      ],
      best: false
    },
    {
      id: 'destination',
      icon: <MapPin className="h-10 w-10 text-luxe-gold" />,
      title: 'Destination Weddings',
      description: 'Specialized planning for weddings outside your home location, whether that\'s a beachfront ceremony, a European villa, or a mountain retreat.',
      features: [
        'Destination research and recommendations',
        'Travel arrangements coordination',
        'Local vendor sourcing and management',
        'Guest accommodation management',
        'Welcome events and activities planning',
        'Cultural and legal requirement navigation',
        'On-site coordination and management',
        'Multi-day event planning'
      ],
      best: false
    }
  ];

  const additionalServices = [
    {
      icon: <Heart className="h-8 w-8 text-luxe-gold" />,
      title: 'Proposal Planning',
      description: 'Create an unforgettable proposal moment with our specialized planning services.'
    },
    {
      icon: <Camera className="h-8 w-8 text-luxe-gold" />,
      title: 'Vendor Selection',
      description: 'Access our curated network of premium vendors for your wedding needs.'
    },
    {
      icon: <Music className="h-8 w-8 text-luxe-gold" />,
      title: 'Entertainment Planning',
      description: 'Book exceptional entertainment options from live music to interactive experiences.'
    },
    {
      icon: <Utensils className="h-8 w-8 text-luxe-gold" />,
      title: 'Catering & Menu Design',
      description: 'Curate an exceptional culinary experience tailored to your preferences and dietary needs.'
    }
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const additionalRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (heroRef.current) {
      heroRef.current.classList.add('scroll-animate');
      observer.observe(heroRef.current);
    }
    
    if (servicesRef.current) {
      servicesRef.current.classList.add('scroll-animate');
      observer.observe(servicesRef.current);
    }
    
    if (additionalRef.current) {
      additionalRef.current.classList.add('scroll-animate');
      observer.observe(additionalRef.current);
    }
    
    if (processRef.current) {
      processRef.current.classList.add('scroll-animate');
      observer.observe(processRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-luxe-cream">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subtitle">Our Services</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-luxe-charcoal mb-6">
              Elevating Your <span className="text-luxe-gold">Wedding Experience</span>
            </h1>
            <p className="text-luxe-taupe text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              From comprehensive planning to day-of coordination, our tailored services are designed to create an exceptional and stress-free wedding experience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section ref={servicesRef} className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          <div className="grid gap-10 md:gap-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={`${index % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                  <div className="relative">
                    {service.best && (
                      <div className="absolute -top-4 -right-4 bg-luxe-gold text-white text-xs uppercase tracking-wider py-1 px-4 font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className="aspect-[4/3] rounded-sm overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`} 
                        alt={service.title} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                  <div className="p-4 inline-block rounded-sm bg-luxe-blush/50 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-luxe-charcoal mb-4">{service.title}</h2>
                  <p className="text-luxe-taupe mb-8">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-luxe-gold mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-luxe-charcoal">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact" className="btn-luxe">
                    Inquire About This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section ref={additionalRef} className="py-20 md:py-28 bg-luxe-blush">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-subtitle">Additional Offerings</p>
            <h2 className="section-title">Specialized Services</h2>
            <p className="text-luxe-taupe text-lg mt-4">
              Enhance your wedding experience with our additional specialized services.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-sm shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxe-cream mb-6">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl text-luxe-charcoal mb-3">{service.title}</h3>
                <p className="text-luxe-taupe">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section ref={processRef} className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-subtitle">Our Approach</p>
            <h2 className="section-title">The Planning Process</h2>
            <p className="text-luxe-taupe text-lg mt-4">
              Our thoughtful planning process ensures a stress-free experience from start to finish.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-luxe-gold/30 md:transform md:-translate-x-px"></div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="font-display text-2xl text-luxe-charcoal mb-3">Initial Consultation</h3>
                  <p className="text-luxe-taupe">
                    We begin with a detailed conversation about your vision, preferences, and priorities. This helps us understand your unique style and allows us to create a tailored approach for your celebration.
                  </p>
                </div>
                
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-0 md:left-auto md:right-full top-0 w-8 h-8 rounded-full bg-luxe-gold flex items-center justify-center text-white font-medium">1</div>
                  <div className="pl-12 md:pl-0">
                    <div className="aspect-video rounded-sm overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt="Initial Consultation" 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="relative">
                  <div className="absolute left-0 md:left-auto md:left-full top-0 w-8 h-8 rounded-full bg-luxe-gold flex items-center justify-center text-white font-medium">2</div>
                  <div className="pl-12 md:pl-0">
                    <div className="aspect-video rounded-sm overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                        alt="Proposal and Planning" 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-2xl text-luxe-charcoal mb-3">Proposal and Planning</h3>
                  <p className="text-luxe-taupe">
                    Based on our consultation, we'll create a detailed proposal outlining our services, timeline, and investment. Once confirmed, we'll develop a comprehensive planning strategy tailored to your needs.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="md:text-right order-2 md:order-1">
                  <h3 className="font-display text-2xl text-luxe-charcoal mb-3">Design Development</h3>
                  <p className="text-luxe-taupe">
                    We'll create detailed design concepts that bring your vision to life, including color palettes, florals, lighting, and decor elements. Each design choice is made to reflect your personal style.
                  </p>
                </div>
                
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-0 md:left-auto md:right-full top-0 w-8 h-8 rounded-full bg-luxe-gold flex items-center justify-center text-white font-medium">3</div>
                  <div className="pl-12 md:pl-0">
                    <div className="aspect-video rounded-sm overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt="Design Development" 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="relative">
                  <div className="absolute left-0 md:left-auto md:left-full top-0 w-8 h-8 rounded-full bg-luxe-gold flex items-center justify-center text-white font-medium">4</div>
                  <div className="pl-12 md:pl-0">
                    <div className="aspect-video rounded-sm overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                        alt="Execution and Celebration" 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-2xl text-luxe-charcoal mb-3">Execution and Celebration</h3>
                  <p className="text-luxe-taupe">
                    On your wedding day, our team will handle every detail, from vendor coordination to timeline management, allowing you to be fully present in every magical moment of your celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold text-white">
        <div className="luxe-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
            Ready to Begin Your Wedding Journey?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to schedule a consultation and discover how our tailored services can bring your wedding vision to life.
          </p>
          <Link to="/contact" className="btn-luxe bg-white text-luxe-gold hover:bg-luxe-cream">
            Schedule a Consultation
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
