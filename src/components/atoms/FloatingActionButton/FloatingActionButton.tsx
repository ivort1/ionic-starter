import React, { useEffect, useState } from 'react';
import Modal from '../../molecules/Modal';
import "./FloatingActionButton.css";

interface FloatingActionButtonProps {
  icon: React.ReactNode;
}

export default function FloatingActionButton({ icon }: FloatingActionButtonProps) {
  const [hidden, setHidden] = useState(false);
  let scrollTimeout: number | null = null;

  useEffect(() => {
    const handleScroll = () => {
      // When scrolling starts, hide the button
      setHidden(true);
      
      // Clear any existing timeout to reset the timer
      if (scrollTimeout) window.clearTimeout(scrollTimeout);
      
      // After scrolling stops for 150ms, show the button again
      scrollTimeout = window.setTimeout(() => {
        setHidden(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button className={`button-85${hidden ? ' hidden' : ''}`} id="open-modal">
      { icon } Book an appointment
      <Modal />
    </button>
  );
}