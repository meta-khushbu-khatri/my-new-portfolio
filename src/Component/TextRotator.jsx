import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const textArray = [
  'Software Developer',
  'Design Engineer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
  'Frontend Wizard',
];

const TextRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-bold text-gray-500  overflow-hidden relative" style={{ height: '50px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="absolute"
        >
          {textArray[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextRotator;