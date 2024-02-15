import { Link } from "react-router-dom";
import Card from "./components/Card";
import { data } from "./components/details";
import { useEffect } from "react";

function App() {

  
  return (
    <>
      <div className="w-full flex justify-center items-center flex-wrap ">
        {data.map((item, index) => (
          <Link to={`/home/${index}`}>
            <Card key={item.id} data={item} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default App;
