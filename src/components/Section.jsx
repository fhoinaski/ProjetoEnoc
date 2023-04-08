import React from 'react';

const Section = ({ children, backgroundColor = 'bg-white' }) => {
  return (
    <section className={`py-8 ${backgroundColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
