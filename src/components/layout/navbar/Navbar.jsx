import DesktopMenu from "./DescktopMenu";
import MobileMenu from "./MobileMenu";
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ReactComponent as LogoTonSVG } from '../../../assets/icons/logoTon.svg';
import { useState } from "react";
// import MobileMenuModal from "./MobileMenuModal";



export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <nav className="bg-white shadow">
            <Disclosure as="nav" className="bg-white shadow  ">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-[64px]">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <LogoTonSVG className="h-[54px] w-[54px]" alt="Logo" />
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <DesktopMenu />
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    <Disclosure.Button
                                        onClick={toggleMobileMenu}
                                        className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${open ? 'transform rotate-90 transition-all duration-400' : 'transition-all duration-400'
                                            }`}
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6 " aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6 " aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
                    </>
                )}
            </Disclosure>
        </nav>
    );
};