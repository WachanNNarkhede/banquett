import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX, FiRotateCw } from "react-icons/fi";
import Spline from "@splinetool/react-spline";

const photos = [
  { src: "pexels-simeart-30311728.jpg", alt: "Elegant wedding setup", category: "Weddings" },
  { src: "team1.jpg", alt: "Corporate event", category: "Corporate" },
  { src: "pexels-simeart-30311728.jpg", category: "Catering" },
  { src: "phototwo.jpg", category: "Weddings" },
  { src: "parties.jpg", category: "Parties" },
  { src: "phototwo.jpg", category: "Decor" },
  { src: "shadi.jpg", category: "Weddings" },
  { src: "cooprate.jpg", category: "Corporate" }
];

const colors = {
  navy: "#1A2A44",
  gold: "#D4A017",
  cream: "#F5F5DC"
};

const PanoramaViewer = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!isFullscreen) return;

    const script = document.createElement("script");
    script.src = "/js/panolens.min.js";
    
    script.onload = () => {
      if (window.PANOLENS && window.THREE) {
        // Clean up previous viewer
        if (viewerRef.current) {
          viewerRef.current.dispose();
          containerRef.current.innerHTML = '';
        }

        // Create container div
        const container = document.createElement('div');
        container.style.width = '100%';
        container.style.height = '100%';
        containerRef.current.appendChild(container);

        // Create panorama
        const panorama = new window.PANOLENS.ImagePanorama("/360.jpg");
        
        // Configure viewer with manual controls
        viewerRef.current = new window.PANOLENS.Viewer({
          container: container,
          autoRotate: false,
          controlBar: false,
          cameraFov: 70,
          enableReticle: false
        });

        // Smooth dragging controls
        viewerRef.current.OrbitControls.enableDamping = true;
        viewerRef.current.OrbitControls.dampingFactor = 0.25;

        viewerRef.current.add(panorama);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
      }
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, [isFullscreen]);

  return (
    <section className="relative max-w-7xl mx-auto px-6 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
        style={{ 
          color: colors.gold,
          fontFamily: "'Tangerine', cursive",
          textShadow: '0 2px 8px rgba(212, 160, 23, 0.3)'
        }}
      >
        Virtual Venue Tour
      </motion.h2>

      <motion.div 
        className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden mx-auto bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          border: `2px solid ${colors.gold}`,
          maxWidth: '900px'
        }}
      >
        {isFullscreen ? (
          <>
            <div 
              ref={containerRef}
              className="absolute inset-0 w-full h-full"
            />
            <button 
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-gold hover:bg-black/70 transition-colors z-10"
            >
              <FiX size={24} />
            </button>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
            <img
              src="360.jpg"
              alt="360° preview"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="relative z-10 text-cente ">
              <motion.button
                onClick={() => setIsFullscreen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center mb-48 ml-16 gap-2 px-6 py-3 rounded-full bg-gold text-navy font-bold"
                style={{
                  backgroundColor: colors.gold,
                  color: colors.navy
                }}
              >
                <FiRotateCw size={20} />
                Start 360° Tour
              </motion.button>
              <p className="mt-4 text-cream/80">Click to explore our venue in immersive 360°</p>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(photos.map(photo => photo.category))];
  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  const handlePrev = () => {
    const currentIndex = photos.findIndex(img => img.src === selectedImage.src);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedImage(photos[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = photos.findIndex(img => img.src === selectedImage.src);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedImage(photos[nextIndex]);
  };

  return (
    <div className="relative overflow-hidden" style={{ 
      background: colors.navy,
      color: colors.cream,
      minHeight: '100vh'
    }}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url('/images/gold-pattern.png')",
        backgroundSize: "300px"
      }}></div>

      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ 
            color: colors.gold,
            fontFamily: "'Tangerine', cursive",
            textShadow: '0 2px 8px rgba(212, 160, 23, 0.3)'
          }}
        >
          Our Gallery
        </motion.h2>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                activeCategory === category 
                  ? 'bg-gold text-navy font-bold' 
                  : 'bg-navy-light text-cream border border-gold/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              onClick={() => setSelectedImage(photo)}
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                border: `1px solid ${colors.gold}30`
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt || photo.category}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-cream font-medium">{photo.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 360° Viewer Section */}
      <PanoramaViewer />
      <div className="absolute top-[70%] left-[0%] z-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
  {/* Spline element */}
  <div className="relative w-full h-full">
    <Spline
      scene="https://prod.spline.design/7b5mAxDkWWFVZrtQ/scene.splinecode"     
      style={{
        width: '100%',
        height: '100%',
        opacity: 0.7
      }}
    />
    {/* Cover for the water portion */}
    <div 
      className="absolute bottom-0 w-full h-[30%]" 
      style={{
        backgroundColor: '#1A2A44',
        zIndex: 1
      }}
    ></div>
  </div>
</div>
      <div className="absolute top-[70%] right-[0%] z-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
  {/* Spline element */}
  <div className="relative w-full h-full">
    <Spline
      scene="https://prod.spline.design/7b5mAxDkWWFVZrtQ/scene.splinecode"     
      style={{
        width: '100%',
        height: '100%',
        opacity: 0.7
      }}
    />
    {/* Cover for the water portion */}
    <div 
      className="absolute bottom-0 w-full h-[30%]" 
      style={{
        backgroundColor: '#1A2A44',
        zIndex: 1
      }}
    ></div>
  </div>
</div>
      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-3xl text-gold hover:text-lightGold transition-colors"
          >
            <FiX />
          </button>
          
          <button 
            onClick={handlePrev}
            className="absolute left-6 text-3xl text-gold hover:text-lightGold transition-colors"
          >
            <FiChevronLeft />
          </button>
          
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt || selectedImage.category}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-cream">
              <p className="text-lg font-medium">{selectedImage.alt || selectedImage.category}</p>
              <p className="text-gold">{selectedImage.category}</p>
            </div>
          </div>
          
          <button 
            onClick={handleNext}
            className="absolute right-6 text-3xl text-gold hover:text-lightGold transition-colors"
          >
            <FiChevronRight />
          </button>
        </motion.div>
      )}
    </div>
  );
}