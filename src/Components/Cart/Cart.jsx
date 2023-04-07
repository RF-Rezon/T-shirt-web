import React from "react";

const Cart = ({ cart, handelRemoveFromCart }) => {
  return (
    <div className="text-white text-xl font-medium p-5 text-left lg:ml-6 mt-2" >
      <div className="text-left">
        <span>Order Summary: </span>
        <p className="my-3 text-xl font-bold">{cart.length}</p>
      </div>
      <div className="mt-10 lg:mt-0">
        {cart.map((x) => (
          <p className="border border-orange-600 rounded-lg mt-10 my-7 p-2 lg:w-1/2 w-full text-center" key={x._id}>
            {x.name}{" "}
            <button
              onClick={() => handelRemoveFromCart(x._id)}
              className="py-3 px-5  ml-4 hover:bg-orange-600 my-5 outline-none boder-2 hover:border-none border-white"
            >
              {" "}
              X{" "}
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cart;
