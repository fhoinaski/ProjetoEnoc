import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import icons from '../../../assets/icons';

const { IconMaquinaSvg, IconSetaBaixoSvg,IconMoneySvg,IconWhats,IconCarShop } = icons;



const imgemMenu = {
    t1: { src: "/imgMenu/t1-1.webp", alt: "" },
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

//   const DesktopMenu = ({ products }) => {
const DesktopMenu = () => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const renderIcon = (item) => {
        return <img src={item.icon.src} alt={item.icon.alt} />;
    };

    return (
        <div className="ml-10  flex items-baseline lg:space-x-10 md:space-x-4 ">
            <Popover.Group className="hidden md:flex lg:gap-x-12  ">
                <div className="group relative  ">
                    <div
                        onMouseEnter={() => setIsPopoverOpen(true)}
                        onMouseLeave={() => setIsPopoverOpen(false)}
                        className="group "
                    >
                        <Popover className="relative group hover:stroke-green-300 hover:text-green-500  ">
                            <Popover.Button
                                className="ml-2 mr-5 focus:outline-none flex items-center gap-x-1 text-sm lg:text-lg font-medium leading-6 text-gray-900 p-2 rou hover:bg-gray-50 border-b-2 border-transparent  hover:border-green-600 hover:stroke-green-300 hover:text-green-500"
                            >
                                <IconMaquinaSvg className="md:h-4 md:w-4 lg:h-4 lg:w-4"/>
                                Maquininhas
                                <IconSetaBaixoSvg className="h-3 w-3 ml- items-end text-gray-400" aria-hidden="true" />
                            </Popover.Button>

                            <Transition
                                show={isPopoverOpen}
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel
                                    className="absolute left-0 top-full z-10 mt-[0.7rem] w-screen max-w-md overflow-hidden rounded-t-none rounded-b-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                                    onBlur={() => setIsPopoverOpen(false)}
                                >
                                    <div className="p-4">
                                        {products.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
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
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                </div>
            </Popover.Group>

            {/* Adicione o link "Planos e taxas" */}
            <a href="#" className=" flex items-center text-sm lg:text-lg font-medium leading-3 text-gray-900 hover:stroke-green-300 hover:text-green-500 ">
                <IconMoneySvg className="h-4 w-4 md:mr-1 lg:mr-2 " />
                Planos e taxas
            </a>


            {/* Adicione o link "Falar com consultor" */}
            <a href="#" className="flex items-center text-sm lg:text-lg font-medium leading-3 text-gray-900 hover:text-green-500"  >
                <IconWhats className="h-4 w-4 md:mr-1 lg:mr-2 " />
                Falar com consultor
            </a>

            {/* Adicione o botão "Comprar agora" */}
            <button className="rounded-full bg-green-600 shadow-md text-white px-4 py-2 Fshadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
      Comprar
    </button>
        </div>
    );
};

export default DesktopMenu;
