import React, { useState } from 'react';
import { IonImg, IonSkeletonText } from '@ionic/react';
import './LazyImg.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImg: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={className ? `${className} lazy-img-wrapper` : 'lazy-img-wrapper'}
      style={{ position: 'relative', width: '100%' }}
    >
      {/* Placeholder: a uniform portrait rectangle */}
      {!loaded && (
        <div className="skeleton-placeholder">
          <IonSkeletonText animated={true} style={{ width: '100%', height: '100%' }} />
        </div>
      )}
      
      {/* The actual image renders in its natural aspect ratio */}
      <IonImg
        src={src}
        alt={alt}
        onIonImgDidLoad={() => setLoaded(true)}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto', // preserve natural height
          objectFit: 'contain',
          objectPosition: 'center'
        }}
      />
    </div>
  );
};

export default LazyImg;