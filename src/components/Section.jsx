import React from 'react';
import '../style.css';

const Section = () => {
  return (
    <div className='p-2 md:p-3  w-full   bg-green-100'>
      <img className='md:w-40 w-32 absolute md:right-8 right-2 top-16 z-10' src="/maquininhasTonCard1.webp" alt="máquinas ton" />
      <div className="rounded-xl relative h-28 md:h-auto bg-green-700 py-8 w-full md:w-11/12 lg:w-9/12 mx-auto">
        <div className="absolute inset-0 overflow-hidden">
        
          <div class="rounded-e-xl absolute inset-y-0 right-0 w-1/2 bg-green-500">
            <h2 className='text-yellow-300 my-8 mx-5 hidden md:block font-bold text-2xl'>OFERTA POR <br/>TEMPO LIMITADO!</h2>
          </div>
        </div>
        <div class=" flex-col justify-start md:-mt-0 -mt-6 max-w-6xl mx-auto  w-1/2 md:px-8  sm:mx-10 ml-3 lg:-px-8">
          <h1 className="md:text-3xl font-bold text-green-100 text-center md:-ml-6 w-full lg:w-2/3 xl:w-1/2 mx-auto">
            Quer maquininha grátis?
          </h1>
          <p className="md:w-auto w-40 px-1 md:mt-8 text-xs text-start text-white">
            100% de Cashback ao atingir
            R$ 10 mil em vendas no 1° mês
          </p>
        </div>
      </div>
    </div>

  );
};

export default Section;