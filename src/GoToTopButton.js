import React, { useState } from 'react';
import './GoToTopButton.css'; // Import your CSS file for styling

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll behavior
    });
  };

  // Event listener to show/hide the button based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Add scroll event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Render the button conditionally based on state
    showButton && (
      <button className="go-to-top-page" onClick={scrollToTop}>
        &#8593;
      </button>
    )
  );
};

export default GoToTopButton;
