// Preloader.jsx
// #CSS

// #React
import { useState, useEffect } from 'react';


function Preloader() {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4); // 0, 1, 2, 3, repeat
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-text">
      Loading{'.'.repeat(dots)}
    </div>
  );
}

export default Preloader;
