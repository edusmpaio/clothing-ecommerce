import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductType } from '../@types/ProductType';

import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

interface CartItemType extends ProductType {
  amount: number;
}

export function CartItem({ item }: { item: CartItemType }) {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-4">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className="max-w-[80px]" />
        </Link>

        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[200px] text-primary hover:underline"
            >
              {title}
            </Link>

            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition-colors" />
            </div>
          </div>

          <div className="flex gap-2 h-9 text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex items-center justify-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>

            <div className="flex-1 flex items-center justify-around">
              $ {price.toFixed(2)}
            </div>

            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              {`$ ${(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
