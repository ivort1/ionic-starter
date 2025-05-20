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
      {/* Display the Ionic skeleton placeholder if the image hasn't loaded */}
      {!loaded && (
        <div className="skeleton-portrait">
          <IonSkeletonText animated={true} />
        </div>
      )}

      {/* The actual image is rendered with its natural dimensions */}
      <IonImg
        src={src}
        alt={alt}
        onIonImgDidLoad={() => setLoaded(true)}
        style={{
          display: loaded ? 'block' : 'none',
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: 'center'
        }}
      />
    </div>
  );
};

export default LazyImg;