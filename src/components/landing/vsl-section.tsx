"use client";

import Script from 'next/script';

export default function VslSection() {
  return (
    <section className="bg-black py-10 sm:py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="relative" style={{ paddingBottom: '177.78%', height: 0 }}>
          <Script src="https://fast.wistia.com/player.js" async />
          <Script src="https://fast.wistia.com/embed/oqpe31jmsc.js" async type="module" />
          <style>
            {`
              wistia-player[media-id='oqpe31jmsc']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/oqpe31jmsc/swatch'); 
                display: block; 
                filter: blur(5px); 
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
              }
            `}
          </style>
          <div 
            className="wistia_embed wistia_async_oqpe31jmsc"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <div className="wistia_swatch" style={{height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%'}}>
              <img src="https://fast.wistia.com/embed/medias/oqpe31jmsc/swatch" style={{filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%'}} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
