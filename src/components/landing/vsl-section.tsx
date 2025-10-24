"use client";

import Script from "next/script";

export default function VslSection() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" async />
      <Script src="https://fast.wistia.com/embed/oqpe31jmsc.js" async type="module" />
      <style>
        {`
          wistia-player[media-id='oqpe31jmsc']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/oqpe31jmsc/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 177.78%;
          }
          .vsl-section {
            position: relative;
            width: 100%;
            padding: 100px 20px;
            background-color: #000000;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            overflow: hidden;
          }
          .vsl-section::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(229, 9, 20, 0.25) 0%, rgba(0,0,0,0) 70%);
            filter: blur(100px);
            z-index: 0;
          }
          wistia-player {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 450px; /* Adjusted for better vertical video fit */
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 0 40px rgba(229, 9, 20, 0.2);
          }
          @media (max-width: 768px) {
            .vsl-section {
              padding: 60px 15px;
            }
            wistia-player {
              max-width: 100%;
            }
          }
        `}
      </style>

      <section className="vsl-section">
        {/* @ts-ignore */}
        <wistia-player media-id="oqpe31jmsc" aspect="0.5625"></wistia-player>
      </section>
    </>
  );
}
