import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden hidden md:block">
      <motion.div
        className="w-4 h-4 bg-mercury-accent rounded-full fixed top-0 left-0"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.5 : 1,
          opacity: 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="w-8 h-8 border border-mercury-accent/30 rounded-full fixed top-0 left-0"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
      />
    </div>
  );
};

export default CustomCursor;
