import React from 'react';
import '../style.css';

const Section = () => {
  return (
    <div className='p-2 md:p-3  w-full   bg-green-100'>
      <div className="rounded-xl relative bg-green-700 py-8">
        <div className="absolute inset-0 overflow-hidden">
          <div class="rounded-e-xl absolute inset-y-0 right-0 w-1/2 bg-green-500">
          <img className='md:w-32 w-36 md:ml-80' src="/maquininhasTonCard1.webp" alt="máquinas ton" />
            </div>
        </div>
        <div class=" flex-col justify-start max-w-6xl mx-auto  w-1/2 md:px-8  sm:mx-10 ml-3 lg:-px-8">
          <h1 className="md:text-3xl  font-bold text-green-100">
            Quer maquininha grátis?
          </h1>
          <p className="md:w-auto w-40 px-1 mt-4 text-xs text-start text-white">
            100% de Cashback ao atingir
            R$ 10 mil em vendas no 1° mês
          </p>
        </div>
      </div>
    </div>

  );
};

export default Section;