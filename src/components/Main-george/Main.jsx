import React from "react";
import Card from "./Card";
const products = [
  {
    id: 1,
    name: "BMW",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "BMW",
    price: "$295",
    color: "White",
  },
  {
    id: 2,
    name: "Mercedes",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1570733577524-3a047079e80d?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Mercedes",
    price: "$250",
    color: "Gray",
  },
  {
    id: 3,
    name: "Mitsubishi",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1611396058741-1d570a4fcf95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Mercedes",
    price: "$90",
    color: "Red",
  },
  {
    id: 4,
    name: "Kia",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1625037669075-e5472e080265?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Kia",
    price: "$120",
    color: "White",
  },
  {
    id: 5,
    name: "Nissan",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1641755894837-ea5e496afdce?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Nissan",
    price: "$110",
    color: "Green",
  },
  {
    id: 6,
    name: "WolksWagen",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1578306349134-2823c41948e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "WolksWagen",
    price: "$100",
    color: "Black",
  },
  {
    id: 7,
    name: "Ford",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1568315698760-1d71a37e3478?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Ford",
    price: "$140",
    color: "Black",
  },
  {
    id: 8,
    name: "Toyota Prius",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1604046938596-c6561689c9ee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Toyota Prius",
    price: "$85",
    color: "Black",
  },
  {
    id: 9,
    name: "Honda",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1593182672268-856ba66eea99?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Honda",
    price: "$160",
    color: "Black",
  },
  {
    id: 10,
    name: "Chevrolet",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1570089434134-9fe163fcfb8f?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Chevrolet",
    price: "$155",
    color: "Black",
  },
  {
    id: 11,
    name: "Audi",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Audi",
    price: "$200",
    color: "White",
  },
  {
    id: 12,
    name: "Lexus",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1603050087224-98d2e1e8930a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Lexus",
    price: "$175",
    color: "Black",
  },
];

const Main = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Car List
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default Main;
