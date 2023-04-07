import React from 'react';

const Tshirt = ({ts, handleAbdToCart}) => {
    const {_id, index, picture, name, price, gender} = ts;
    return (
        <div id='popo' className='p-5 flex flex-col items-center justify-center bg-gray-200 bg-opacity-10 border-orange-600 border-2 rounded-md m-4 shadow-orange-600 shadow-xl'>
            <p className='text-white text-xl font-medium p-5'>{index +1}</p>
            <img className='rounded w-56 h-64 object-cover' src={picture} alt="" />
            <p className='text-white text-xl font-medium p-5'>{name}</p>
            <p className='text-white text-xl font-medium p-5'>{price} Tk</p>
            <p className='text-orange-600 text-xl font-medium p-5'>{gender}</p>
            <button onClick={()=> handleAbdToCart(ts)} className='text-white text-xl font-medium py-3 px-5 hover:bg-orange-600 my-5 outline-none boder-2 hover:border-none border-white'>Buy Now</button>
        </div>
    );
};

export default Tshirt;