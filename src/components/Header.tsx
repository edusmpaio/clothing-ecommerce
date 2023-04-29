import { useContext, useEffect, useState } from 'react';

import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.svg';

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const { handleToggleSidebar } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to="/">
          <div>
            <img className="w-10" src={Logo} alt="Logo" />
          </div>
        </Link>

        <div
          onClick={handleToggleSidebar}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-xs w-[18px] h-[18px] text-white rounded-full flex items-center justify-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}
