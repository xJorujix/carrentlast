import React, { useState } from "react";
import Card from "./Card";

const products = [  {
  id: 1,
  name: "BMW M4",
  href: "#",
  imageSrc:
    "https://hasznaltauto.medija.hu/3852/18898946_1.jpg?v=1670503238",
  imageAlt: "BMW M4",
  price: "$295",
  color: "white",
},
{
  id: 2,
  name: "Mercedes C63AMG",
  href: "#",
  imageSrc:
    "https://media.ed.edmunds-media.com/mercedes-benz/c-class/2023/oem/2023_mercedes-benz_c-class_convertible_amg-c-63-s_fq_oem_1_1600.jpg",
  imageAlt: "Mercedes C63 AMG",
  price: "$250",
  color: "Gray",
},
{
  id: 3,
  name: "Mitsubishi Outlander",
  href: "#",
  imageSrc:
    "https://d2v1gjawtegg5z.cloudfront.net/uploads/files/000/672/120/original/2024_mitsubishi_outlander.jpg?1700491977",
  imageAlt: "Mitsubishi Outlander",
  price: "$90",
  color: "White",
},
{
  id: 4,
  name: "Kia Stinger",
  href: "#",
  imageSrc:
    "https://cdn.carbuzz.com/gallery-images/1600/927000/200/927201.jpg",
  imageAlt: "Kia",
  price: "$120",
  color: "White",
},
{
  id: 5,
  name: "Nissan GTR R34",
  href: "#",
  imageSrc:
    "https://images.summitmedia-digital.com/topgear/images/2022/08/22/skyline-10-1661139795.jpeg",
  imageAlt: "Nissan",
  price: "$110",
  color: "Blue",
},
{
  id: 6,
  name: "Volkswagen Passat",
  href: "#",
  imageSrc:
    "https://uploads.vw-mms.de/system/production/images/vwn/029/415/images/869424d4159b91be4431c309c1e63f53ea727f0f/DB2019AU00902_web_1600.jpg?1649155074",
  imageAlt: "VolksWagen",
  price: "$100",
  color: "Gray",
},
{
  id: 7,
  name: "Ford Raptor",
  href: "#",
  imageSrc:
    "https://www.outdoorlife.com/wp-content/uploads/2022/07/22/IMG_2746-scaled.jpg?w=2560",
  imageAlt: "Ford",
  price: "$140",
  color: "Red",
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
  name: "Honda Sivic",
  href: "#",
  imageSrc:
    "https://www.topgear.com/sites/default/files/2022/04/1-Honda-Civic.jpg",
  imageAlt: "Honda",
  price: "$160",
  color: "Black",
},
{
  id: 10,
  name: "Chevrolet Impala(1967)",
  href: "#",
  imageSrc:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/1967_Chevrolet_Impala_4_door_Hardtop.jpg/2560px-1967_Chevrolet_Impala_4_door_Hardtop.jpg",
  imageAlt: "Chevrolet",
  price: "$65",
  color: "Black",
},
{
  id: 11,
  name: "Audi RS6",
  href: "#",
  imageSrc:
    "https://www.audi-mediacenter.com/system/production/media/83014/images/b52bf0b68e1104a9e56fed9b28c2f84aa1445992/A1910897_web_2880.jpg?1698388079",
  imageAlt: "Audi",
  price: "$145",
  color: "Black",
},
{
  id: 12,
  name: "Lexus LX 570",
  href: "#",
  imageSrc:
    "https://www.cnet.com/a/img/resize/434afdf48959dd649e9fdcc4aceb6a3bd165c405/hub/2020/09/28/da35a631-155c-489c-be7b-594226e8b962/img-2074.jpg?auto=webp&width=1200",
  imageAlt: "Lexus",
  price: "$175",
  color: "Black",
},
{
  id: 13,
 name: "Chevrolet Cruze",
  href: "#",
  imageSrc:
  "https://occasion.automobile.tn/2022/11/84918_ZE8TTnB_L4UcfcUqd9-fKsjBS_max.webp?t=7d05091c9f4d633b591fcad73805a620",
  imageAlt: "chevrolet",
  price: "$109",
  color: "Black",
},
{
  id: 14,
 name: "Subaru Impreza",
  href: "#",
  imageSrc:
  "https://assets.whichcar.com.au/image/private/s--XCZlbTfv--/c_fill,f_auto,q_auto:good/t_p_16x9/2023_Subaru_Impreza_051.jpg",
  imageAlt: "Subaru",
  price: "$125",
  color: "Blue",
},
{
  id: 15,
 name: "Toyota Rav4",
  href: "#",
  imageSrc:
  "https://editorials.autotrader.ca/media/4afefd0x/2023-toyota-rav4-limited-03-jm.jpg?center=0.55788736581098264,0.48061586497563996&mode=crop&width=972&height=546&rnd=133253149286830000",
  imageAlt: "Toyota",
  price: "$100",
  color: "Black",
},
{
  id: 16,
 name: "Porsche 911",
  href: "#",
  imageSrc:
  "https://images.prismic.io/carwow/65cbb34b-b61c-48af-b34e-5bd785e95a28_2023+Porsche+911+front+quarter+moving.jpg",
  imageAlt: "Porsche",
  price: "265$",
  color: "Yellow",
},
{
  id: 17,
 name: "BMW E35",
  href: "#",
  imageSrc:
  "https://i.pinimg.com/236x/3e/33/e1/3e33e1b46cadc17ae311e7a2d990b341.jpg ",
  imageAlt: "BMW",
  price: "$110",
  color: "Black",
},
{
  id: 18,
 name: "Mercedes W211",
  href: "#",
  imageSrc:
  " https://static.my.ge/myauto/catalog/mercedes/e_klasse/4601886/4601887/img/0.jpg",
  imageAlt: "Mercedes",
  price: "$99",
  color: "White",
},
{
  id: 19,
 name: "Mercedes W140",
  href: "#",
  imageSrc:
  "https://collectingcars.imgix.net/images/2020/11/DSC08168.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85 ",
  imageAlt: "Mercedes",
  price: "$80",
  color: "White",
},
{
  id: 20,
 name: "Chevrolet Volt",
  href: "#",
  imageSrc:
  "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1562254448/autoexpress/images/car_photo_529192.jpg ",
  imageAlt: "Chevrolet",
  price: "$90",
  color: "White",
},
{
  id: 21,
 name: "Toyota Camry",
  href: "#",
  imageSrc:
  "https://autopapa.ge/system/car/photos/006/859/283/medium.jpg?1682238429 ",
  imageAlt: "Toyota",
  price: "$60",
  color: "Gray",
},
{
  id: 22,
 name: "Subaru Forester",
  href: "#",
  imageSrc:
  "https://media.ed.edmunds-media.com/subaru/forester/2023/oem/2023_subaru_forester_4dr-suv_sport_fq_oem_1_1600.jpg ",
  imageAlt: "Subaru",
  price: "$102",
  color: "White",
},
{
  id: 23,
 name: "Honda Vezel",
  href: "#",
  imageSrc:
  "https://www.carsandstars.com.sg/wp-content/uploads/2021/04/honda-vezel-2021-main-photo.jpg ",
  imageAlt: "Honda",
  price: "$89",
  color: "White",
},
{
  id: 24,
 name: "Audi R8",
  href: "#",
  imageSrc:
  " https://images.pistonheads.com/nimg/46501/mceu_6169168411669210667502.jpg",
  imageAlt: "audi",
  price: "$220",
  color: "Red",
},];


const productsPerPage = 8;

// ... (your existing code)

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setSelectedBrand(null);
    setSelectedColor(null);
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand === selectedBrand ? null : brand);
    setCurrentPage(1);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) => {
    const brandFromName = product.name.split(' ')[0].toLowerCase();
    return (
      (!selectedBrand || brandFromName.includes(selectedBrand.toLowerCase())) &&
      (!selectedColor || product.color.toLowerCase().includes(selectedColor.toLowerCase()))
    );
  });

  const uniqueBrands = [...new Set(filteredProducts.map((product) => product.name.split(' ')[0]))];
  const uniqueColors = [...new Set(filteredProducts.map((product) => product.color))];

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Car List
      </h2>

      <div className="mt-4 space-x-2">
        <span>Filter:</span>
        <select
          value={selectedFilter || ""}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="px-2 py-1 rounded bg-gray-300"
        >
          <option value="">Select Filter</option>
          <option value="By Brand">By Brand</option>
          <option value="By Color">By Color</option>
        </select>
      </div>

      {selectedFilter === "By Brand" && (
        <div className="mt-4 space-x-2">
          <span>Filter by Brand:</span>
          <select
            value={selectedBrand || ""}
            onChange={(e) => handleBrandChange(e.target.value)}
            className="px-2 py-1 rounded bg-gray-300"
          >
            <option value="">All Brands</option>
            {uniqueBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedFilter === "By Color" && (
        <div className="mt-4 space-x-2">
          <span>Filter by Color:</span>
          <select
            value={selectedColor || ""}
            onChange={(e) => handleColorChange(e.target.value)}
            className="px-2 py-1 rounded bg-gray-300"
          >
            <option value="">All Colors</option>
            {uniqueColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {currentProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Main;
