import { Link } from "react-router-dom";
import Card from "./components/Card";
import { data } from "./components/details";
import { useEffect, useState } from "react";

function App() {
  const [listedProperties, setListedProperties] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [inputText, setInputText] = useState("");



  console.log("original data: ", filterData);

  const changeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className="search w-full h-20  bg-red-100 flex justify-start items-center gap-4 pl-40">
        <input
          type="text"
          value={inputText}
          onChange={changeHandler}
          className="px-2 w-80 border-blue-300 border-2 rounded-lg"
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
          className="border-pink-400 border-2 px-3 rounded-lg text-blue-400"
        >
          Search
        </button>
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
