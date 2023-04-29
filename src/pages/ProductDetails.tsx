import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { useParams } from 'react-router-dom';

export function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="h-screen flex items-center justify-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-[300px]"
              src={image}
              alt=""
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price.toFixed(2)}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-primary py-4 px-8 text-white hover:bg-primary/95 transition-colors"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
