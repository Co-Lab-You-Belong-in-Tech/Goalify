import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Celebrate = () => {
  const [winDim, setDim] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    setDim({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [winDim]);
  return (
    <>
      <Confetti width={winDim.width} height={winDim.height} />
    </>
  );
};

export default Celebrate;
