
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Sophia Reynolds',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
      bio: 'With over 10 years of experience in luxury event planning, Sophia brings a wealth of knowledge and a keen eye for detail to every celebration.',
    },
    {
      name: 'James Wilson',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      bio: 'A master of aesthetic vision, James transforms spaces into breathtaking environments that tell the unique story of each couple.',
    },
    {
      name: 'Olivia Chen',
      role: 'Senior Event Coordinator',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80',
      bio: 'Olivia's organization skills and calm demeanor ensure that every event runs smoothly from the initial consultation to the final farewell.',
    },
    {
      name: 'Michael Torres',
      role: 'Vendor Relations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bio: 'Michael's extensive network and industry relationships ensure our clients have access to the finest vendors and services available.',
    },
  ];

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    story: useRef<HTMLDivElement>(null),
    mission: useRef<HTMLDivElement>(null),
    team: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        ref.current.classList.add('scroll-animate');
        observer.observe(ref.current);
      }
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={sectionRefs.hero} className="pt-32 pb-20 bg-luxe-cream">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subtitle">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-luxe-charcoal mb-6">
              The Story Behind <span className="text-luxe-gold">Élégance</span>
            </h1>
            <p className="text-luxe-taupe text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              We're a passionate team of wedding planners dedicated to creating extraordinary celebrations that reflect your unique love story.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section ref={sectionRefs.story} className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="section-subtitle">Our Story</p>
              <h2 className="section-title mb-6">From Vision to Celebration</h2>
              <div className="space-y-6 text-luxe-taupe">
                <p>
                  Élégance began with a simple belief: that every wedding should be as unique as the couple it celebrates. Founded in 2012 by Sophia Reynolds, our boutique planning firm has evolved into a collective of passionate designers, planners, and coordinators who share a commitment to excellence.
                </p>
                <p>
                  With backgrounds in design, hospitality, and event production, our team brings diverse expertise to every celebration. We've orchestrated intimate gatherings for 20 and grand affairs for 500+, always maintaining our signature attention to detail.
                </p>
                <p>
                  What truly sets us apart is our personalized approach. We limit our calendar to ensure each couple receives the dedicated attention they deserve. Your wedding isn't just another event to us—it's a deeply personal celebration that deserves meticulous care.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/contact" className="btn-luxe">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-[4/5] rounded-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Wedding planning team meeting" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 right-6 bg-white shadow-elegant p-6 max-w-xs">
                  <p className="font-display text-lg text-luxe-charcoal">
                    "We believe in creating moments that resonate with authenticity and beauty."
                  </p>
                  <p className="text-luxe-gold text-sm mt-4">— Sophia Reynolds, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section ref={sectionRefs.mission} className="py-20 md:py-32 bg-luxe-blush">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-subtitle">Our Mission</p>
            <h2 className="section-title">The Élégance Approach</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-soft border border-luxe-gold/10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxe-cream text-luxe-gold mb-6">
                <span className="font-display text-2xl">01</span>
              </div>
              <h3 className="font-display text-2xl text-luxe-charcoal mb-4">Personalization</h3>
              <p className="text-luxe-taupe">
                We believe your wedding should reflect your unique story, preferences, and style. No two Élégance weddings are ever the same.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-soft border border-luxe-gold/10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxe-cream text-luxe-gold mb-6">
                <span className="font-display text-2xl">02</span>
              </div>
              <h3 className="font-display text-2xl text-luxe-charcoal mb-4">Attention to Detail</h3>
              <p className="text-luxe-taupe">
                From the grandest design elements to the smallest details, we ensure every aspect of your wedding is thoughtfully curated.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-soft border border-luxe-gold/10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxe-cream text-luxe-gold mb-6">
                <span className="font-display text-2xl">03</span>
              </div>
              <h3 className="font-display text-2xl text-luxe-charcoal mb-4">Seamless Execution</h3>
              <p className="text-luxe-taupe">
                Our meticulous planning and coordination ensure your wedding day unfolds flawlessly, allowing you to be fully present in every moment.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/services" className="btn-outline flex items-center justify-center mx-auto w-48">
              <span>Our Services</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section ref={sectionRefs.team} className="py-20 md:py-32 bg-white">
        <div className="luxe-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-subtitle">Our Team</p>
            <h2 className="section-title">Meet the Élégance Family</h2>
            <p className="text-luxe-taupe text-lg mt-6">
              Our experienced team brings creativity, organization, and passion to every celebration, ensuring a seamless experience from start to finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="group"
              >
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <div className="aspect-[3/4]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-luxe-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-display text-xl text-luxe-charcoal mb-1">{member.name}</h3>
                <p className="text-luxe-gold text-sm uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-luxe-taupe">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-gold text-white">
        <div className="luxe-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
            Ready to Create Your Perfect Wedding?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Let's transform your wedding dreams into a beautiful reality. Reach out for a consultation with our expert team.
          </p>
          <Link to="/contact" className="btn-luxe bg-white text-luxe-gold hover:bg-luxe-cream">
            Start the Conversation
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
