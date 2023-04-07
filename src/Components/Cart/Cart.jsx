import React from "react";

const Cart = ({ cart, handelRemoveFromCart }) => {
  return (
    <div className="text-white text-xl font-medium p-5 text-left">
      <div className="text-left">
        <span>Order Summary: </span>
        <p>{cart.length}</p>
      </div>
      <div className="mt-10 lg:mt-0">
        {cart.map((x) => (
          <p className="border border-orange-600 rounded-lg my-5 p-3 w-1/2 text-center" key={x._id}>
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
