import { Fragment, useState } from 'react'
import React from 'react';

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { TfiAlignJustify } from "react-icons/tfi";
import { SlMenu, SlArrowDown } from "react-icons/sl";
import { IoCloseOutline, IoCloseSharp } from "react-icons/io5";
import ImageMenu from './ImagemMenu';
import LogoTon from '../../assets/icons/logoTon.svg';
import IconMaquina from'../../assets/icons/iconMaquina.svg';




const imgemMenu = {
  t1: { src: "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/t1-1", alt: "" },
  t1chip: {
    src:
      "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/t1-chip-1",
    alt: "",
  },
  t2: {
    src:
      "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/t2-1",
    alt: "",
  },
  t3: {
    src:
      "https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_48,q_auto/site-ton/t3-1",
    alt: "",
  },
};


const products = [
  {
    name: 'Maquininha T1',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: imgemMenu.t1,
  },
  {
    name: 'Maquininha T1 Chip',
    description: 'Speak directly to your customers',
    href: '#',
    icon: imgemMenu.t1chip,
  },
  {
    name: 'Maquininha T2+',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: imgemMenu.t2,
  },
  {
    name: 'Maquininha T3',
    description: 'Connect with third-party tools',
    href: '#',
    icon: imgemMenu.t3,
  },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: TfiAlignJustify },
  { name: 'Contact sales', href: '#', icon: TfiAlignJustify },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function renderIcon(item) {
  if (typeof item.icon === 'function') {
    return <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />;
  } else {
    return <ImageMenu img={item.icon} className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />;
  }
}


export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7x1 items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-9 w-auto" src="/src/assets/icons/logoTon.svg" alt="" />
          </a>
        </div>
        <div className="flex  lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <SlMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Maquininhas
              {/* mostra no menu dos produtos */}
              <SlArrowDown className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
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
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>

            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
           {/* Menu principal (exibido em desktop, oculto em dispositivos móveis) */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoCloseSharp className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        <div className="flex items-center">
                        <img src={IconMaquina} alt="Maquininha" className="w-6 h-6 mr-3" />
                          Maquininhas
                        </div>
                        {/* abre o menu */}
                        <SlArrowDown
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                                {renderIcon(item)}
                              </div>
                              <span>{item.name}</span>
                            </div>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>

                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

