import React from "react";

const Card = ({ product }) => {
  return (
    <div key={product.id} className="group relative bg-slate-200 border-slate-950 shadow-2xl rounded hover:scale-105 duration-200">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        
      </div>
      <div className="mt-4 flex justify-between p-2">
        <div>
          <h3 className="text-lg text-gray-900">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-lg font-medium text-gray-900">{product.price}</p>
      </div>
      <div className="w-10 mx-auto">
        <button><img src="https://cdn3.iconfinder.com/data/icons/arrow-in-circle/64/Arrow_in_Circle-01-256.png" alt="next" /></button>
      </div>
    </div>
  );
};

export default Card;
