import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Product = () => {
  const [products, setProduct] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("Default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        // console.log(data)
        setProduct(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // console.log(products)

  // filtering function

  const filteredItem = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  // show all products

  const showAll = () => {
    setFilteredItems(products);
    selectedCategory("all");
  };

  // sorting functionality

  const handleSortChange = (option) => {
    setSortOption(option);

    // logic for sorting

    let sortedItems = [...filteredItems];
    // console.log(sortedItems)

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
        default: 
        break;
    }
    setFilteredItems(sortedItems);
  };

  useEffect(()=>{
    handleSortChange("Default");
  }, [filteredItems]);
  

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="title">Or subscribe to the newsletter</h2>
      {/* product cards */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all btn */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filteredItem("Dress")}>Clothing</button>
            <button onClick={() => filteredItem("Hoodies")}>Hoodies</button>
            <button onClick={() => filteredItem("Bag")}>Bags</button>
            <button onClick={() => filteredItem("scarf")}>Scarf</button>
            <button onClick={() => filteredItem("Glasses")}>Glasses</button>
            <button onClick={() => filteredItem("Shoes")}>Shoes</button>
          </div>

          {/* sorting option */}
          <div className="flex justify-end mb-4 rounded-sm ">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="Default">Default</option>
              <option value="A-z">A-z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">low to high</option>
              <option value="high-to-low">high to low</option>
            </select>
          </div>
        </div>

        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Product;
