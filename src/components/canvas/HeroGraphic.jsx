import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const HeroGraphicCanvas = () => {
  // 1. Melacak posisi X dan Y dari bola inti
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Efek Parallax Bertingkat (Semakin ke dalam, tarikannya semakin kuat)
  const innerRingX = useTransform(x, [-300, 300], [-120, 120]);
  const innerRingY = useTransform(y, [-300, 300], [-120, 120]);
  
  const middleRingX = useTransform(x, [-300, 300], [-80, 80]);
  const middleRingY = useTransform(y, [-300, 300], [-80, 80]);

  const outerRingX = useTransform(x, [-300, 300], [-40, 40]);
  const outerRingY = useTransform(y, [-300, 300], [-40, 40]);

  // Varian untuk bola inti
  const coreVariants = {
    animateLoop: {
      y: [-15, 15, -15],
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 40px 10px rgba(145,94,255,0.4)",
        "0px 0px 80px 20px rgba(145,94,255,0.8)",
        "0px 0px 40px 10px rgba(145,94,255,0.4)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    dragging: {
      scale: 1.15,
      boxShadow: "0px 0px 100px 30px rgba(145,94,255,0.9)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      
      {/* 1. CINCIN LUAR (Orbit Terluar dengan Satelit Data) */}
      <motion.div
        className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full border border-[#915EFF] opacity-20"
        style={{ x: outerRingX, y: outerRingY }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {/* Satelit Biru Cyan */}
        <div className="absolute top-[10%] left-[10%] w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_3px_cyan]" />
        {/* Satelit Ungu Terang */}
        <div className="absolute bottom-[10%] right-[10%] w-2 h-2 bg-[#d8b4fe] rounded-full shadow-[0_0_10px_2px_#d8b4fe]" />
      </motion.div>

      {/* 2. CINCIN TENGAH (Gaya Radar / Dashed Berlawanan Arah) */}
      <motion.div
        className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] rounded-full border-2 border-dashed border-[#915EFF] opacity-40"
        style={{ x: middleRingX, y: middleRingY }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* 3. CINCIN DALAM (Pelindung Reaktor - Putaran Cepat) */}
      <motion.div
        className="absolute w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] rounded-full border-4 border-transparent border-t-[#915EFF] border-b-[#915EFF] opacity-70"
        style={{ x: innerRingX, y: innerRingY }}
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 4. AURA BOLA (Glow besar yang tertinggal sedikit saat ditarik) */}
      <motion.div 
        className="absolute w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] rounded-full bg-[#915EFF] blur-[40px] opacity-30"
        style={{ x: innerRingX, y: innerRingY }} // Mengikuti tarikan tapi tidak se-ekstrim bolanya
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 5. INTI (CORE) YANG BISA DITARIK */}
      <motion.div
        className="absolute w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full cursor-grab active:cursor-grabbing flex justify-center items-center overflow-hidden"
        // Gradasi Radial untuk efek 3D Sphere
        style={{ 
          x, y,
          background: "radial-gradient(circle at 30% 30%, #d8b4fe 0%, #915EFF 40%, #311b92 100%)"
        }} 
        drag 
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.4} 
        dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
        variants={coreVariants}
        initial="animateLoop"
        animate="animateLoop"
        whileDrag="dragging"
      >
        {/* Titik Energi di dalam Bola */}
      </motion.div>

    </div>
  );
};

export default HeroGraphicCanvas;