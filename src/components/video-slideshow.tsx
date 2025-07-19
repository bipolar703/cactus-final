import React from 'react';

export function VideoSlideshow() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center bg-black">
            <img
        src="/assets/Webpage-Banner.png"
        alt="Cactus Media Group"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-2xl font-bold bg-black/60 px-6 py-3 rounded-lg">
          No video background available
        </span>
      </div>
    </div>
  );
}
