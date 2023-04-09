import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ReactComponent as LogoTonSVG } from '../../assets/icons/logoTon.svg';

const ResponsiveHeader = ({ mobileMenu, desktopMenu }) => {
  return (
    <Disclosure as="nav" className="bg-white shadow ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[64px]"> {/* Altere a altura aqui */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <LogoTonSVG className="h-[54px] w-[54px]" alt="Logo" /> {/* Ajuste o tamanho do logotipo */}
                </div>
              </div>
              <div className="hidden md:block">{desktopMenu}</div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">{mobileMenu}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ResponsiveHeader;
