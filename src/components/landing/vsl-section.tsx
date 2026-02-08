"use client";

import Script from "next/script";

export default function VslSection() {
  // The user provided a raw HTML/JS snippet for the video player.
  // The best way to handle this in React/Next.js is to use dangerouslySetInnerHTML
  // for the custom player element and a Next.js Script component to load the player's SDK.

  const videoPlayerHtml = `
    <vturb-smartplayer id="vid-69879e7c27efa9d18cdb2af0" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>
  `;

  return (
    <>
      {/* This script is from the user's embed code. It loads the Converte.ai player SDK. */}
      <Script
        id="converteai-sdk-loader"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var s=document.createElement("script"); s.src="https://scripts.converteai.net/2be27a27-ac54-4e78-b535-fa4ffe697a01/players/69879e7c27efa9d18cdb2af0/v4/player.js", s.async=!0,document.head.appendChild(s);`,
        }}
      />
      <style>
        {`
          .vsl-section {
            position: relative;
            width: 100%;
            padding: 80px 20px;
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
          vturb-smartplayer {
             position: relative;
             z-index: 2;
             border-radius: 16px;
             overflow: hidden;
             box-shadow: 0 0 40px rgba(229, 9, 20, 0.2);
          }
          @media (max-width: 768px) {
            .vsl-section {
              padding: 40px 15px;
            }
          }
        `}
      </style>

      <section
        className="vsl-section"
        dangerouslySetInnerHTML={{ __html: videoPlayerHtml }}
      />
    </>
  );
}
