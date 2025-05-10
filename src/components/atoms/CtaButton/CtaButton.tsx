import React, { useEffect, useState, useRef } from 'react';
import Modal from '../../molecules/Modal';
import "./CtaButton.css";

interface CtaButtonProps {
  icon: React.ReactNode;
}

export default function CtaButton({ icon }: CtaButtonProps) {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY.current && !isScrollingDown) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY.current && isScrollingDown) {
        setIsScrollingDown(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollingDown]);

  return (
    <button
      id="open-modal"
      className={`button-85 ${isScrollingDown ? "scrolling" : ""}`}
    >
      { icon }
      <Modal />
    </button>
  );
}