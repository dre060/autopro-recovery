"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        @keyframes flash {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 180, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 180, 0, 0.8);
          }
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .flash-animation {
          animation: flash 1.5s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slideIn 1s ease-out;
        }
        
        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
      `}</style>

      {/* Header */}
      <header style={{ backgroundColor: '#2c2c2c', color: 'white', position: 'relative', zIndex: 50 }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0.75rem' : '1rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px' }}>
            <img
              src="/logo.png"
              alt="Auto Pro Logo"
              className="flash-animation"
              style={{ width: isMobile ? '40px' : '48px', height: isMobile ? '40px' : '48px' }}
            />
            <div>
              <h1 style={{ fontSize: isMobile ? '1.125rem' : '1.5rem', fontWeight: 'bold', margin: 0 }}>AUTO PRO</h1>
              <p style={{ fontSize: isMobile ? '0.625rem' : '0.875rem', margin: 0 }}>TOWING & RECOVERY</p>
            </div>
          </div>
          <a
            href="tel:+13522177658"
            className="pulse-animation"
            style={{ 
              backgroundColor: '#d32f2f', 
              color: 'white', 
              padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem', 
              borderRadius: '4px', 
              fontWeight: '600', 
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer',
              fontSize: isMobile ? '0.875rem' : '1rem'
            }}
          >
            {isMobile ? 'CALL' : 'CALL NOW'}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: isMobile ? '60vh' : '70vh', 
        minHeight: isMobile ? '400px' : '500px', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden',
        backgroundImage: 'url(/tow-truck-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Lighter Overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.3)', 
          zIndex: 1 
        }}></div>

        {/* Content - Positioned Lower for Mobile */}
        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 1rem', 
          marginTop: isMobile ? '15%' : '10%',
          width: '100%'
        }}>
          <div style={{ maxWidth: '48rem' }}>
            <h2 className="slide-in" style={{ 
              fontSize: isMobile ? '1.5rem' : '2.5rem', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: isMobile ? '1rem' : '1.5rem',
              lineHeight: '1.2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
            }}>
              Fast, Reliable, and Affordable Towing Services
            </h2>
            <p className="slide-in" style={{ 
              fontSize: isMobile ? '0.875rem' : '1.25rem', 
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
              animationDelay: '0.3s',
              lineHeight: isMobile ? '1.4' : '1.6'
            }}>
              Based in Leesburg, serving Orlando and surrounding areas 24/7. 
              Call us anytime for towing and roadside assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: isMobile ? '2rem 0' : '4rem 0', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="slide-in" style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: 'bold', 
            marginBottom: isMobile ? '1.5rem' : '2rem', 
            textAlign: 'center' 
          }}>Our Services</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: isMobile ? '1rem' : '1.5rem' 
          }}>
            <div className="hover-lift" style={{ backgroundColor: 'white', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: '600' }}>• 24/7 Emergency Towing</h3>
            </div>
            <div className="hover-lift" style={{ backgroundColor: 'white', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: '600' }}>• Roadside Assistance</h3>
            </div>
            <div className="hover-lift" style={{ backgroundColor: 'white', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: '600' }}>• Vehicle Recovery</h3>
            </div>
            <div className="hover-lift" style={{ backgroundColor: 'white', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: '600' }}>• Accident Recovery</h3>
            </div>
            <div className="hover-lift" style={{ backgroundColor: 'white', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: '600' }}>• Motorcycle Towing</h3>
            </div>
            <div className="hover-lift" style={{ backgroundColor: 'white', padding: isMobile ? '1rem' : '1.5rem', borderRadius: '8px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <h3 style={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: '600' }}>• Heavy Duty Towing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: isMobile ? '2rem 0' : '4rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="slide-in" style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: 'bold', 
            marginBottom: isMobile ? '1.5rem' : '2rem', 
            textAlign: 'center' 
          }}>Why Choose Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="slide-in" style={{ marginBottom: '1rem', display: 'flex', animationDelay: '0.1s' }}>
                  <span style={{ color: '#ffb400', marginRight: '0.5rem', fontSize: isMobile ? '1rem' : '1.25rem' }}>•</span>
                  <span style={{ fontSize: isMobile ? '0.875rem' : '1.125rem' }}>Fast response times</span>
                </li>
                <li className="slide-in" style={{ marginBottom: '1rem', display: 'flex', animationDelay: '0.2s' }}>
                  <span style={{ color: '#ffb400', marginRight: '0.5rem', fontSize: isMobile ? '1rem' : '1.25rem' }}>•</span>
                  <span style={{ fontSize: isMobile ? '0.875rem' : '1.125rem' }}>Professional service</span>
                </li>
                <li className="slide-in" style={{ marginBottom: '1rem', display: 'flex', animationDelay: '0.3s' }}>
                  <span style={{ color: '#ffb400', marginRight: '0.5rem', fontSize: isMobile ? '1rem' : '1.25rem' }}>•</span>
                  <span style={{ fontSize: isMobile ? '0.875rem' : '1.125rem' }}>Competitive rates</span>
                </li>
              </ul>
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="slide-in" style={{ marginBottom: '1rem', display: 'flex', animationDelay: '0.4s' }}>
                  <span style={{ color: '#ffb400', marginRight: '0.5rem', fontSize: isMobile ? '1rem' : '1.25rem' }}>•</span>
                  <span style={{ fontSize: isMobile ? '0.875rem' : '1.125rem' }}>Licensed & Insured</span>
                </li>
                <li className="slide-in" style={{ marginBottom: '1rem', display: 'flex', animationDelay: '0.5s' }}>
                  <span style={{ color: '#ffb400', marginRight: '0.5rem', fontSize: isMobile ? '1rem' : '1.25rem' }}>•</span>
                  <span style={{ fontSize: isMobile ? '0.875rem' : '1.125rem' }}>Experienced Drivers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section - Enhanced */}
      <section style={{ padding: isMobile ? '2rem 0' : '4rem 0', background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 className="slide-in" style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: 'bold', 
            marginBottom: isMobile ? '1.5rem' : '2rem' 
          }}>Service Area</h2>
          <div className="glow-animation" style={{ 
            backgroundColor: '#ffb400', 
            color: '#2c2c2c', 
            padding: isMobile ? '1.5rem' : '2rem', 
            borderRadius: '10px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              fontWeight: '600', 
              marginBottom: '1rem' 
            }}>
              🚗 Based in Leesburg, serving Lake County and Central Florida 24/7 🚗
            </p>
            <p style={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
              Emergency towing • Roadside assistance • Fast response times
            </p>
          </div>
          <div style={{ 
            marginTop: '2rem', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap' 
          }}>
            <span className="hover-lift" style={{ 
              backgroundColor: 'white', 
              padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem', 
              borderRadius: '20px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              fontSize: isMobile ? '0.875rem' : '1rem'
            }}>📍 Leesburg</span>
            <span className="hover-lift" style={{ 
              backgroundColor: 'white', 
              padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem', 
              borderRadius: '20px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              fontSize: isMobile ? '0.875rem' : '1rem'
            }}>📍 Orlando</span>
            <span className="hover-lift" style={{ 
              backgroundColor: 'white', 
              padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem', 
              borderRadius: '20px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              fontSize: isMobile ? '0.875rem' : '1rem'
            }}>📍 Surrounding Areas</span>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section style={{ padding: isMobile ? '2rem 0' : '4rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="slide-in" style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: 'bold', 
            marginBottom: isMobile ? '2rem' : '3rem', 
            textAlign: 'center' 
          }}>Contact Us</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: isMobile ? '1.5rem' : '3rem',
            textAlign: 'center'
          }}>
            {/* Phone */}
            <div className="hover-lift" style={{ 
              padding: isMobile ? '1.5rem' : '2rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: '1rem' }}>📞</div>
              <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2c2c2c' }}>Call Us 24/7</h3>
              <a href="tel:+13522177658" style={{ 
                fontSize: isMobile ? '1.125rem' : '1.25rem', 
                color: '#d32f2f',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
                (352) 217-7658
              </a>
              <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                Emergency towing available
              </p>
            </div>

            {/* Address */}
            <div className="hover-lift" style={{ 
              padding: isMobile ? '1.5rem' : '2rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: '1rem' }}>📍</div>
              <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2c2c2c' }}>Service Location</h3>
              <p style={{ fontSize: isMobile ? '1rem' : '1.125rem', lineHeight: '1.6' }}>
                806 Hood Ave<br />
                Leesburg, FL 34748<br />
                <a href="https://maps.google.com/?q=806+Hood+Ave+Leesburg+FL+34748" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{ color: '#d32f2f', textDecoration: 'none', fontSize: isMobile ? '0.875rem' : '1rem', marginTop: '0.5rem', display: 'inline-block' }}>
                  📍 Get Directions
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="hover-lift" style={{ 
              padding: isMobile ? '1.5rem' : '2rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: '1rem' }}>🕐</div>
              <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2c2c2c' }}>Service Hours</h3>
              <p style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 'bold', color: '#ffb400' }}>
                24/7 AVAILABLE
              </p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
                Always here when you need us
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: isMobile ? '2rem' : '3rem',
            padding: isMobile ? '1.5rem' : '2rem',
            backgroundColor: '#ffb400',
            borderRadius: '10px'
          }}>
            <p style={{ 
              fontSize: isMobile ? '1.25rem' : '1.5rem', 
              fontWeight: 'bold', 
              color: '#2c2c2c', 
              marginBottom: '1rem' 
            }}>
              Need Immediate Assistance?
            </p>
            <a
              href="tel:+13522177658"
              className="pulse-animation"
              style={{ 
                backgroundColor: '#d32f2f', 
                color: 'white', 
                padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem', 
                borderRadius: '4px', 
                fontWeight: '600', 
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: isMobile ? '1rem' : '1.25rem',
                cursor: 'pointer'
              }}
            >
              CALL NOW: (352) 217-7658
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2c2c2c', color: 'white', padding: isMobile ? '1.5rem 0' : '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <p>&copy; 2025 Auto Pro Towing & Recovery. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', opacity: '0.8' }}>
            Professional Towing Services • Licensed & Insured • Available 24/7
          </p>
        </div>
      </footer>
    </div>
  );
}