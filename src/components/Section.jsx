import React from 'react';
import '../style.css';




const Section = () => {
  return (
    <div className='p-2 md:p-3  w-full h-44 md:h-auto  bg-green-100'>
      <img className='md:w-40 w-32 absolute md:right-8 right-2 xl:w-48 xl:right-60 top-16 z-10' src="/maquininhasTonCard1.webp" alt="máquinas ton" />
      <button className="bg-secondary hover:bg-btn_primary rounded-full px-10 py-1 absolute z-10 top-48 mx-16 md:mx-0  text-gray-900 md:right-60 md:top-44 xl:right-1/3 xl:top-48">Aprovite agora</button>
      <div className="rounded-xl relative h-28 md:h-auto bg-color_card py-8 w-full md:w-11/12 lg:w-9/12 mx-auto">
        <div className="absolute inset-0 overflow-hidden">

          <div class="rounded-e-xl absolute inset-y-0 right-0 w-1/2 bg-color_card2">
            <h2 className='text-yellow-400 my-8 mx-5 xl:text-3xl xl:ml-20 hidden md:block font-bold text-2xl'>OFERTA POR <br />TEMPO LIMITADO!</h2>
          </div>
        </div>
        <div class=" flex-col justify-start md:-mt-0 -mt-6 max-w-6xl mx-auto  w-1/2 md:px-8  sm:mx-10 ml-3 lg:-px-8">
          <h1 className="md:text-3xl font-bold text-green-100 -ml-3 text-center md:-ml-6 w-full xl:w-3/4 mx-auto">
            Quer maquininha grátis?
          </h1>
          <p className="md:w-auto w-36 px-1 md:mt-8 md:-ml-16 lg:text-xl text-xs text-center text-white">
            100% de Cashback ao atingir
            R$ 10 mil em vendas no 1° mês
          </p>
        </div>
      </div>
    </div>

  );
};

export default Section;