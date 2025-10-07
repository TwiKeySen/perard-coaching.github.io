import React from 'react';
export function Header() {
  return <header className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="h-full w-full bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
      }}></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wider">
            Coaching personnalisé
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Perard Pierre
            <span className="block text-xl md:text-2xl lg:text-3xl font-medium mt-2 text-gray-300">
              Diplômé d'état, Instructeur Taekwondo 3ieme DAN
            </span>
          </h1>
          <div className="h-1 w-20 bg-red-600"></div>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium italic">
            « Reprends le contrôle de ton corps et ton esprit »
          </p>
        </div>
      </div>
    </header>;
}