// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Spline from '@splinetool/react-spline';


export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Color variables
  const colors = {
    navy: "#1A2A44",
    darkNavy: "#0F1C32",
    lightNavy: "#2A3F6B",
    gold: "#D4A017",
    cream: "#F5F5DC",
    charcoal: "#333333",
    seaGreen: "#2E8B57",
    lightGold: "rgba(212, 160, 23, 0.2)"
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-x-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 50%, ${colors.lightNavy} 100%)`,
        color: colors.cream,
        fontFamily: "'Roboto', sans-serif"
      }}
    >
      {/* ===== HERO SECTION ===== */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        id="home"
        style={{ zIndex: 10 }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/pexels-rosario-fernandes-26325-3835638.jpg')",
            y: backgroundY,
            scale,
            zIndex: 1
          }}
        />
        
        {/* Overlay Texture */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/decor-overlay.png')",
            y: midgroundY,
            zIndex: 2
          }}
        />
        
        {/* Color Overlay */}
        <div 
          className="absolute inset-0 z-3"
          style={{
            background: `linear-gradient(to bottom, ${colors.darkNavy}88 0%, ${colors.darkNavy}44 50%, ${colors.darkNavy}88 100%)`
          }}
        />
        
        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto"
          style={{ y: textY }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{
              color: colors.gold,
              fontFamily: "'Cinzel', serif",
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
            }}
          >
            Host Your Perfect Event
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -50px 0px" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-8"
            style={{
              color: colors.gold,
              textShadow: '2px 2px 6px rgba(0,0,0,0.5)'
            }}
          >
            Create unforgettable memories in our luxurious banquet hall
          </motion.p>
          
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: colors.seaGreen,
              boxShadow: `0 0 20px ${colors.gold}`
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 font-bold rounded-lg text-lg"
            style={{
              backgroundColor: colors.gold,
              color: colors.navy
            }}
          >
            Book Your Event
          </motion.a>
        </motion.div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section 
        className="relative min-h-80 py-20 flex items-center"
        id="about"
        style={{
          background: colors.cream,
          color: colors.navy,
          zIndex: 5
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              A Legacy of Luxury
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.charcoal }}>
              Our exquisite venues and dedicated team create seamless, memorable events for weddings, corporate galas, and special occasions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                backgroundColor: colors.navy,
                color: colors.cream
              }}
              className="inline-block px-6 py-3 font-semibold rounded-lg border-2"
              style={{
                borderColor: colors.navy,
                color: colors.navy
              }}
            >
              Explore Venues
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/phototwo.jpg"
              alt="Luxury banquet hall"
              className="rounded-xl shadow-2xl w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      
      <section 
        className="relative min-h-80 py-20"
        id="services"
        style={{
          background: colors.navy,
          color: colors.cream,
          zIndex: 5
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "'Cinzel', serif", color: colors.gold }}
          >
            Bespoke Event Services
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Splendor",
                desc: "Elegant venues and tailored planning for your perfect day.",
                icon: "💍"
              },
              {
                title: "Corporate Prestige",
                desc: "Sophisticated spaces for business events and galas.",
                icon: "💼"
              },
              {
                title: "Gourmet Excellence",
                desc: "Custom menus crafted by our executive chef.",
                icon: "🍽️"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0 10px 25px ${colors.lightGold}`
                }}
                className="p-8 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${colors.darkNavy} 0%, ${colors.navy} 100%)`,
                  border: `1px solid ${colors.gold}33`
                }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  style={{ color: colors.gold }}
                  whileHover={{ scale: 1.2 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                  {item.title}
                </h3>
                <p className="opacity-80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION  */}
      <section 
        className="relative min-h-96 py-20"
        id="gallery"
        style={{
          background: colors.cream,
          color: colors.navy,
          zIndex: 5
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Signature Moments
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl h-80"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={'banqet.avif'}
                  alt={`Gallery ${item}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-2xl font-bold text-white">View Details</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section 
  className="relative py-32 overflow-hidden"  // Added overflow-hidden
  id="contact"
  style={{
    background: colors.gold,
    color: colors.navy,
    zIndex: 5
  }}
>
  {/* Spline element positioned absolutely */}
  <div className="absolute  " >
    <div className="w-44 max-w-2xl h-44">
      <Spline 
        scene="https://prod.spline.design/DpKISEjFzmw8klln/scene.splinecode"     

        style={{
          width: '50vh',
          height: '50vh',
          opacity: 0.7  // Optional: reduce opacity if it's too distracting
        }}
      />
    </div>
  </div>

  <div className="absolute ml-[145vh] " >
    <div className="w-44 max-w-2xl h-44">
      <Spline 
        scene="https://prod.spline.design/DpKISEjFzmw8klln/scene.splinecode"     

        style={{
          width: '50vh',
          height: '50vh',
          opacity: 0.7  // Optional: reduce opacity if it's too distracting
        }}
      />
    </div>
  </div>

  <div className="max-w-3xl mx-auto px-6 text-center relative z-10">  {/* Added z-10 to bring content forward */}
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold mb-6"
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      Ready to Create Magic?
    </motion.h2>
    
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-xl mb-8 max-w-2xl mx-auto"
    >
      Contact us to schedule a tour or discuss your event needs.
    </motion.p>
    
    <motion.a
      href="mailto:events@luxebanquet.com"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "0px 0px -50px 0px" }}
      whileHover={{
        scale: 1.05,
        backgroundColor: colors.navy,
        color: colors.cream
      }}
      transition={{ duration: 0.3 }}
      className="inline-block px-8 py-4 font-bold rounded-lg text-lg"
      style={{
        backgroundColor: colors.cream,
        boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
      }}
    >
      Get In Touch
    </motion.a>
  </div>
</section>
    </div>
  );
}