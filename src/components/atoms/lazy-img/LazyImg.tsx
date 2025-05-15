import React, { useState } from 'react';
import { IonImg, IonSkeletonText } from '@ionic/react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImg: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {/* The IonImg fades in once loaded */}
      <IonImg
        src={src}
        alt={alt}
        onIonImgDidLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          objectFit: 'contain',
          objectPosition: 'top'
        }}
      />

      {/* Skeleton overlay while image loads */}
      {!loaded && (
        <IonSkeletonText animated={true}
        />
      )}
    </div>
  );
};

export default LazyImg;