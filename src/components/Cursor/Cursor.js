import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";
function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveMOuse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveMOuse);

    return () => {
      window.removeEventListener("mousemove", moveMOuse);
    };
  }, [position]);

  return (
    <motion.div
      className="circle"
      animate={{ x: position.x, y: position.y }}
    ></motion.div>
  );
}

export default Cursor;
