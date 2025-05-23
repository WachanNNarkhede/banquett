// eslint-disable-next-line no-unused-vars
import Spline from "@splinetool/react-spline";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const colors = {
  navy: "#1A2A44",
  gold: "#D4A017",
  lightGold: "#E6B422",
  cream: "#F5F5DC",
  champagne: "#F5E6C8"
};

export default function ContactUs() {
  return (
    <div className="relative overflow-hidden" style={{ 
      background: `linear-gradient(135deg, ${colors.navy} 0%, #0F1C32 100%)`,
      color: colors.cream
    }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url('/images/gold-pattern.png')",
        backgroundSize: "400px"
      }}></div>

      <section className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ 
              color: colors.gold,
              fontFamily: "'Tangerine', cursive",
              textShadow: '0 2px 10px rgba(212, 160, 23, 0.3)'
            }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ color: colors.champagne }}
          >
            Our team is ready to bring your vision to life. Reach out to start planning your perfect event.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-navy-light p-8 rounded-xl"
            style={{
              border: `1px solid ${colors.gold}30`,
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}
          >
            <h3 className="text-2xl font-bold mb-6" style={{ 
              color: colors.gold,
              fontFamily: "'Cinzel', serif"
            }}>
              Send Us a Message
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block mb-2" style={{ color: colors.champagne }}>Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-gold/30 focus:border-gold focus:outline-none transition-all"
                  style={{ color: colors.cream }}
                />
              </div>
              
              <div>
                <label className="block mb-2" style={{ color: colors.champagne }}>Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-gold/30 focus:border-gold focus:outline-none transition-all"
                  style={{ color: colors.cream }}
                />
              </div>
              
              <div>
                <label className="block mb-2" style={{ color: colors.champagne }}>Your Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-navy border border-gold/30 focus:border-gold focus:outline-none transition-all"
                  style={{ color: colors.cream }}
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: colors.lightGold
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-lg font-bold text-lg"
                style={{ 
                  backgroundColor: colors.gold,
                  color: colors.navy
                }}
              >
                Submit Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-8"
>
  <div>
    <h3 className="text-2xl font-bold mb-6" style={{ 
      color: colors.gold,
      fontFamily: "'Cinzel', serif"
    }}>
      Contact Information
    </h3>
    
    {/* Only changed this Spline container div - everything else remains untouched */}
    <div className="absolute mb-[15vh] ml-[35vh] bg-transparent" style={{
      top: '300px',
      right: '-30px'
    }}>
      <div className="w-44 max-w-2xl h-44">
        <Spline 
          scene="https://prod.spline.design/N2bwESSsGdD5VxVt/scene.splinecode"     
          style={{
            width: '50vh',
            height: '50vh',
            opacity: 0.7
          }}
        />
      </div>
    </div>

    {/* Everything below remains EXACTLY as you had it */}
    <div className="space-y-6">
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-start gap-4"
      >
        <div className="p-3 rounded-full" style={{ 
          background: colors.gold,
          color: colors.navy
        }}>
          <FaMapMarkerAlt className="text-xl" />
        </div>
        <div>
          <h4 className="text-lg font-semibold" style={{ color: colors.cream }}>Our Location</h4>
          <p style={{ color: colors.champagne }}>123 Luxury Avenue, Elegant City, EC 12345</p>
        </div>
      </motion.div>
      
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-start gap-4"
      >
        <div className="p-3 rounded-full" style={{ 
          background: colors.gold,
          color: colors.navy
        }}>
          <FaPhone className="text-xl" />
        </div>
        <div>
          <h4 className="text-lg font-semibold" style={{ color: colors.cream }}>Phone</h4>
          <p style={{ color: colors.champagne }}>+1 (234) 567-8910</p>
        </div>
      </motion.div>
      
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-start gap-4"
      >
        <div className="p-3 rounded-full" style={{ 
          background: colors.gold,
          color: colors.navy
        }}>
          <FaEnvelope className="text-xl" />
        </div>
        <div>
          <h4 className="text-lg font-semibold" style={{ color: colors.cream }}>Email</h4>
          <p style={{ color: colors.champagne }}>events@luxebanquet.com</p>
        </div>
      </motion.div>
      
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-start gap-4"
      >
        <div className="p-3 rounded-full" style={{ 
          background: colors.gold,
          color: colors.navy
        }}>
          <FaClock className="text-xl" />
        </div>
        <div>
          <h4 className="text-lg font-semibold" style={{ color: colors.cream }}>Hours</h4>
          <p style={{ color: colors.champagne }}>Monday - Sunday: 9AM - 11PM</p>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Map - completely unchanged */}
  <div className="mt-8">
    <h4 className="text-xl font-semibold mb-4" style={{ color: colors.gold }}>Find Us</h4>
    <div className="rounded-xl overflow-hidden h-64 border-2" style={{ borderColor: colors.gold }}>
      <iframe
        title="Banquet Hall Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132713!2d-73.987844924525!3d40.74844097138995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTQuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</motion.div>
        </div>
      </section>
    </div>
  );
}