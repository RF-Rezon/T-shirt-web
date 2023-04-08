import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Cart from "../Cart/Cart";
import Tshirt from "../T-shirt/Tshirt";

const Home = () => {
  const [cart, setCart] = useState([]);

  const tshirt = useLoaderData();

  const handleAbdToCart = (singleTShirt) => {
    if (cart.find((x) => x._id == singleTShirt._id)) {
        toast("You Already Added This!");
    } else {
      const x = [...cart, singleTShirt];
      setCart(x);
    }
  };

  const handelRemoveFromCart = (id) => {
    const final = cart.filter((sc) => sc._id !== id);
    setCart(final);
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row space-x-5 justify-around mb-20">
        <div
          id="lplp"
          className="grid grid-cols-1 md:grid-cols-3 gap-7 p-5
                max-w-7xl basis-2/3"
        >
          {tshirt.map((ts) => (
            <Tshirt key={ts._id} ts={ts} handleAbdToCart={handleAbdToCart} />
          ))}
        </div>
        <div className="grow">
          <Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart} />
        </div>
      </div>
    </div>
  );
};

export default Home;
