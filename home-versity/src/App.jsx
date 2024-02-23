import { Link } from "react-router-dom";
import Card from "./components/Card";
import { data } from "./components/details";
import { useEffect, useState } from "react";

function App() {
  const [listedProperties, setListedProperties] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [inputText, setInputText] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [genderVal, setGenderVal] = useState("");

  console.log("original data: ", filterData);

  //search filter input handler
  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  //price filter handler
  const priceChangeHandler = (e) => {
    setPriceValue(e.target.value);
  };

  return (
    <>
      <div className="search w-[80%] h-20  flex justify-start items-center gap-4 pl-36 bg-zinc-100  shadow-xl rounded-xl m-auto my-4">
        <input
          type="text"
          value={inputText}
          onChange={changeHandler}
          className="px-2 py-1 w-80 border-blue-300 border-2 rounded-lg"
        />
        <button
          onClick={() => {
            console.log(inputText);
            //filter properties
            const searchproperties = listedProperties.filter((res) => {
              return res.name.toLowerCase().includes(inputText.toLowerCase());
            });

            setFilterData(searchproperties);
          }}
          className="border-pink-400 border-2 px-3  py-1 rounded-lg text-blue-400 mr-4 hover:bg-black hover:text-white duration-700 ease-in-out"
        >
          Search
        </button>

        <button
          className="border-blue-500 border-2 font-semibold shadow-lg px-4 py-1 ml-5 rounded-lg hover:bg-black hover:text-white duration-700 ease-in-out"
          onClick={() => {
            const bestDeals = listedProperties.filter(
              (item) => item.rating > 4
            );

            setFilterData(bestDeals);
          }}
        >
          Top Deals
        </button>

        <div className="price ml-20">
          <input
            type="number"
            value={priceValue}
            onChange={priceChangeHandler}
            className="pl-2 py-1 w-28 border-blue-300 border-2 rounded-lg "
          />

          <button
            onClick={() => {
              const priceFilter = listedProperties.filter(
                (item) => item.price == priceValue
              );

              setFilterData(priceFilter);
            }}
            className="border-pink-400 border-2 px-3 py-1 rounded-lg text-blue-400 ml-2 hover:bg-black hover:text-white duration-700 ease-in-out"
          >
            Explore
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-wrap ">
        {filterData.map((item, index) => (
          <Link to={`/home/${index}`}>
            <Card key={item.id} data={item} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default App;
