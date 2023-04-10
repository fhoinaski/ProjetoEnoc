import React, { useState } from 'react';
import icons from '../../../assets/icons';

const { IconMaquinaSvg, IconSetaBaixoSvg,IconMoneySvg,IconWhats,IconCarShop } = icons;

const imgemMenu = {
  t1: { src: "/imgMenu/t1-1.png", alt: "" },
  t1chip: {
    src:
      "/imgMenu/t1-chip-1.webp",
    alt: "",
  },
  t2: {
    src:
      "/imgMenu/t2-1.webp",
    alt: "",
  },
  t3: {
    src:
      "/imgMenu/t3-1.webp",
    alt: "",
  },
};


const products = [
  {
    name: 'Maquininha T1',
    description: 'Á partir de 12x de R$2,76',
    href: '#',
    icon: imgemMenu.t1,
  },
  {
    name: 'Maquininha T1 Chip',
    description: 'Á partir de 12x de R$9,40',
    href: '#',
    icon: imgemMenu.t1chip,
  },
  {
    name: 'Maquininha T2+',
    description: 'Á partir de 12x de R$13,21',
    href: '#',
    icon: imgemMenu.t2,
  },
  {
    name: 'Maquininha T3',
    description: 'Á partir de 12x de R$18,91',
    href: '#',
    icon: imgemMenu.t3,
  },
];

const MobileMenu = () => {
  

  const [isMaquininhasOpen, setIsMaquininhasOpen] = useState(false);

  const toggleMaquininhas = () => {
    setIsMaquininhasOpen(!isMaquininhasOpen);
  };

  // const toggleMaquininhas = () => {
  //   setIsMaquininhasOpen(!isMaquininhasOpen);
  //   const menu = document.querySelector('.maquininhas-menu');
  //   const menuHeight = menu.scrollHeight;
  //   if (isMaquininhasOpen) {
  //     menu.style.height = `${menuHeight}px`;
  //     setTimeout(() => {
  //       menu.style.height = null;
  //     }, 1000);
  //   } else {
  //     menu.style.height = `${menuHeight}px`;
  //     setTimeout(() => {
  //       menu.style.height = "0";
  //     }, 10);
  //   }
  // };
  

  const renderIcon = (item) => {
    return <img width={30} src={item.icon.src} alt={item.icon.alt} />;
  };

  return (
 <div className="px-2 pt-2 pb-3 space-y-1 transition-all duration-500 ease-in-out mobile-menu">
<a
  href="#"
  onClick={toggleMaquininhas}
  className="flex px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-1000"

>
  <div className="flex items-center flex-1">
    <IconMaquinaSvg className="h-4 w-4 mr-3" />
    <span>Maquininhas</span>
  </div>
  <div className={`flex items-end ml-2 duration-700 ${
        isMaquininhasOpen ? '-rotate-180' : ''
      }`}>
    <IconSetaBaixoSvg className="h-4 w-4" />
  </div>
</a>

      <div
        className={`${
          isMaquininhasOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-1000 ease-in-out `}
      >
        {products.map((item) => (
          <div
            key={item.name}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg">
              {renderIcon(item)}
            </div>
            <div className="flex-auto">
              <a
                href={item.href}
                className="block font-semibold text-gray-900 hover:text-green-600 hover:text-base"
              >
                {item.name}
                <span className="absolute inset-0" />
              </a>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
        <IconMoneySvg className="h-4 w-4 mr-3" />
        Planos e taxas
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded-md text-base font-medium  hover:bg-gray-50 text-green-600 hover:text-green-700">
        <IconWhats className="h-4 w-4 mr-3" />
        Falar com consultor
      </a>
      <a href="#" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-green-500 hover:text-green-700 hover:bg-gray-50">
        <IconCarShop className="h-4 w-4 mr-3" />
        Pedir agora
      </a>
    </div>
  );
};

export default MobileMenu;
