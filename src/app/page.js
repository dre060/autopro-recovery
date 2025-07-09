"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCookieAccept = () => {
    setShowCookieBanner(false);
    // In production, you would set a cookie or use localStorage here
  };

  const handleCookieDecline = () => {
    setShowCookieBanner(false);
    // In production, you would handle the decline action here
  };

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

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#2c2c2c',
          color: 'white',
          padding: isMobile ? '1rem' : '1.5rem',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
          zIndex: 1000,
          borderTop: '3px solid #ffb400'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                fontSize: isMobile ? '1rem' : '1.125rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem' 
              }}>
                🍪 Cookie Notice
              </h3>
              <p style={{ 
                fontSize: isMobile ? '0.875rem' : '1rem', 
                opacity: 0.9,
                lineHeight: 1.5
              }}>
                We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.
              </p>
            </div>
            <div style={{ 
              display: 'flex', 
              gap: '0.75rem',
              flexShrink: 0
            }}>
              <button
                onClick={handleCookieAccept}
                style={{
                  backgroundColor: '#ffb400',
                  color: '#2c2c2c',
                  border: 'none',
                  padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ffa000';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ffb400';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Accept
              </button>
              <button
                onClick={handleCookieDecline}
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#2c2c2c';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

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
          
          {/* Social Media Icons */}
          <div style={{ 
            marginTop: '1.5rem', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/profile.php?id=61578165300806" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'white', 
                fontSize: '1.5rem',
                transition: 'color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1877f2'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
              aria-label="Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/autopro_recovery" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'white', 
                fontSize: '1.5rem',
                transition: 'color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = '#E4405F'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
            
            {/* X (Twitter) */}
            <a 
              href="https://x.com/autoprorecovery" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'white', 
                fontSize: '1.5rem',
                transition: 'color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = '#1DA1F2'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
              aria-label="X (Twitter)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          
          <p style={{ marginTop: '1rem', fontSize: '0.75rem', opacity: '0.6' }}>
            Follow us for updates and special offers!
          </p>
        </div>
      </footer>
    </div>
  );
}