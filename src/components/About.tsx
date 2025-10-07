import React from 'react';
export function About() {
  return <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">À propos</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Coach sportif diplômé d'état, je suis passionné par le mouvement
            sous toutes ses formes. Pratiquant de Taekwondo depuis 15 ans,
            ceinture noire 3e Dan, j'ai appris la rigueur, la discipline et
            l'harmonie entre le corps et l'esprit.
          </p>
          <p>
            En parallèle, je pratique la callisthénie et le street work-out, des
            disciplines qui développent une force fonctionnelle, une résistance
            musculaire, et un meilleur contrôle global du corps.
          </p>
          <p>
            Ma vision du sport est globale : un corps mobile, agile, fort et
            résistant est le reflet d'un esprit en équilibre. à travers mes
            séances de coaching, je t'accompagne de manière progressive et
            personnalisée pour t'aider à atteindre tes objectifs mais aussi à
            devenir autonome dans ta pratique.
          </p>
          <p className="font-medium">
            Mon but : te transmettre les outils, les bonnes habitudes et la
            compréhension de ton corps, pour que tu puisses t'entrainer
            efficacement et en toute confiance, même en dehors de nos séances.
          </p>
        </div>
      </div>
    </section>;
}