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
    <div className={className ? `${className} lazy-img-wrapper` : 'lazy-img-wrapper'}>
      {/* Skeleton placeholder with fixed portrait layout */}
      {!loaded && (
        <div className="skeleton-portrait">
          <IonSkeletonText animated={true} />
        </div>
      )}

      {/* Always render the IonImg so that lazy-loading is triggered */}
      <IonImg
        src={src}
        alt={alt}
        onIonImgDidLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: 'auto', // keep natural height
          objectFit: 'contain', // change to 'cover' if you prefer cropping
          objectPosition: 'center',
          opacity: loaded ? 1 : 0, // fade in the image when loaded
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  );
};

export default LazyImg;