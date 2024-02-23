import React, { useEffect, useState } from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [stopPosition, setStopPosition] = useState(false);
  const { colorMode } = useColorMode();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const stopPosition = 960;

    setShowButton(scrollY > 5);

    if (scrollY > stopPosition) {
      setStopPosition(true);
    } else {
      setStopPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const arrowColor = colorMode === 'dark' ? 'white' : 'black';
  const buttonStyle = {
    position: 'fixed',
    bottom: stopPosition ? '90px' : '15px',
    right: '16px',
    backgroundColor: 'yellow',
    color: 'black',
    borderRadius: '30px',
    padding: '13px', // Increased padding
    fontSize: '10px', // Increased font size
    zIndex: '60',
    transition: 'bottom 0.4s ease-in-out',
  };
  

  return (
    <>
      {showButton && (
        <Button
          size="lg"
          onClick={scrollToTop}
          className="go-to-top-button"
          style={buttonStyle}
        >
          <FaArrowUp color={arrowColor} style={{ transform: 'rotate(0deg)' }} />
        </Button>
      )}
    </>
  );
};

export default GoToTopButton;
