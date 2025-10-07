import React from 'react';
import { PhoneIcon, MailIcon } from 'lucide-react';
export function Contact() {
  return <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <a href="tel:+33607942882" className="flex items-center text-lg font-medium text-gray-800 hover:text-red-600 transition-colors">
            <PhoneIcon className="mr-2 h-5 w-5" />
            06 07 94 28 82
          </a>
          <a href="mailto:pierre-coaching@gmail.com" className="flex items-center text-lg font-medium text-gray-800 hover:text-red-600 transition-colors">
            <MailIcon className="mr-2 h-5 w-5" />
            pierre-coaching@gmail.com
          </a>
        </div>
      </div>
    </section>;
}