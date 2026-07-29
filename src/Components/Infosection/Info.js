import React from 'react';
import InfoCard from './InfoCard';
import Cart from '../../Icons/Cart.png';
import Card from '../../Icons/Card.png';
import Shield from '../../Icons/Shield.png';
import customercare from '../../Icons/customercare.png';

function Info() {
  return (
    <section className="w-full bg-slate-100/60 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoCard
          image={<img loading="lazy" src={Cart} alt="Shipping Icon" className="w-8 h-8 object-contain" />}
          cardtitle="FREE WORLDWIDE SHIPPING"
          carddiscription="Enjoy complimentary delivery on all iPhone orders over $100."
        />

        <InfoCard
          image={<img loading="lazy" src={Card} alt="Payment Icon" className="w-8 h-8 object-contain" />}
          cardtitle="SECURED PAYMENTS"
          carddiscription="100% encrypted bank grade transaction security."
        />

        <InfoCard
          image={<img loading="lazy" src={Shield} alt="Warranty Icon" className="w-8 h-8 object-contain" />}
          cardtitle="1 YEAR WARRANTY"
          carddiscription="Full replacement and repair protection on certified devices."
        />

        <InfoCard
          image={<img loading="lazy" src={customercare} alt="Support Icon" className="w-8 h-8 object-contain" />}
          cardtitle="24/7 CUSTOMER CARE"
          carddiscription="Dedicated Apple specialists ready to assist you anytime."
        />
      </div>
    </section>
  );
}

export default Info;
