import React from 'react';
export function Footer() {
  return <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Perard Pierre - Coaching personnalisé
        </p>
      </div>
    </footer>;
}