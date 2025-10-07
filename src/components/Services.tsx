import React from 'react';
export function Services() {
  return <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Formules & Tarifs
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Formule</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Tarif horaire</th>
                <th className="py-3 px-4 text-left">5 séances</th>
                <th className="py-3 px-4 text-left">10 séances</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-4 font-medium">
                  Renforcement musculaire
                </td>
                <td className="py-4 px-4">Présentiel / en ligne</td>
                <td className="py-4 px-4">50€ / 40€</td>
                <td className="py-4 px-4">235€ / 190€</td>
                <td className="py-4 px-4">450€ / 360€</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-4 font-medium">Remise en forme</td>
                <td className="py-4 px-4">Présentiel / En ligne</td>
                <td className="py-4 px-4">50€ / 40€</td>
                <td className="py-4 px-4">235€ / 190€</td>
                <td className="py-4 px-4">450€ / 360€</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-4 px-4 font-medium">Souplesse et mobilité</td>
                <td className="py-4 px-4">En ligne Uniquement</td>
                <td className="py-4 px-4">35€</td>
                <td className="py-4 px-4">165€</td>
                <td className="py-4 px-4">315€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>;
}