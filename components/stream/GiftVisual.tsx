'use client';

import { useState } from 'react';
import Lottie from 'lottie-react';
import sparkleAnimation from '@/lib/lottie/sparkle.json';

type Props = {
  twemojiHex: string;
  emoji: string;
  size?: number;
  showSparkle?: boolean;
};

export default function GiftVisual({ twemojiHex, emoji, size = 32, showSparkle = false }: Props) {
  const [imgFailed, setImgFailed] = useState(false);

  const src = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${twemojiHex}.svg`;

  const icon = imgFailed ? (
    <span style={{ fontSize: size, lineHeight: 1 }}>{emoji}</span>
  ) : (
    <img
      src={src}
      alt={emoji}
      width={size}
      height={size}
      onError={() => setImgFailed(true)}
      style={{ display: 'block' }}
      draggable={false}
    />
  );

  if (!showSparkle) return icon;

  const sparkleSize = size * 3;
  const overflow = (sparkleSize - size) / 2;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Lottie bursts outward - extends beyond the icon box */}
      <Lottie
        animationData={sparkleAnimation}
        loop={false}
        style={{
          position: 'absolute',
          width: sparkleSize,
          height: sparkleSize,
          top: -overflow,
          left: -overflow,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div className="relative" style={{ zIndex: 1, width: size, height: size }}>
        {icon}
      </div>
    </div>
  );
}
