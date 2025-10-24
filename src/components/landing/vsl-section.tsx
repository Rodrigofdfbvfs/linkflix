"use client";

import Script from "next/script";

export default function VslSection() {
    return (
        <section className="bg-black py-12 sm:py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-8">
                    <h2 className="font-headline text-3xl md:text-4xl text-white">Assista e veja como é fácil!</h2>
                </div>
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <div 
                        className="wistia_embed wistia_async_oqpe31jmsc"
                        style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
                    >
                        &nbsp;
                    </div>
                </div>
                <Script src="https://fast.wistia.com/embed/medias/oqpe31jmsc.jsonp" async />
                <Script src="https://fast.wistia.com/assets/external/E-v1.js" async />
            </div>
        </section>
    );
}
