import { useContext } from 'react';

import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import { CartItem } from './CartItem';

import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export function Sidebar() {
  const { isOpen, handleCloseSidebar } = useContext(SidebarContext);
  const { cart, clearCart, totalPrice, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full md:w-[35vw] bg-white fixed top-0 h-full shadow-2xl xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-9`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleCloseSidebar}
          className="cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col gap-2 h-[300px] xl:h-[380px] 2xl:h-[400px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <div className="flex flex-col gap-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> $ {totalPrice.toFixed(2)}
          </div>

          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl hover:bg-red-600 transition-colors"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium hover:bg-gray-300 transition-colors"
        >
          View cart
        </Link>
        <Link
          to="/"
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium
          hover:bg-primary/95 transition-colors"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
