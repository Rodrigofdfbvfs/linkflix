import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Bebas_Neue, Montserrat } from 'next/font/google';
import Script from "next/script";

export const metadata: Metadata = {
  title: "BioFlix – Link da Bio Estilo Netflix",
  description: "Templates editáveis no Canva para transformar seu perfil em uma vitrine profissional.",
};

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-bebas-neue',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bebas_neue.variable} ${montserrat.variable}`}>
      <head>
      </head>
      <body className="font-body antialiased">
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1473744157185428');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1473744157185428&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
