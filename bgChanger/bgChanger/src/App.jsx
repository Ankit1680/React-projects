import { useState } from "react";

function App() {
  const [color, setColor] = useState(); // Initial state should be Tailwind CSS class

  return (
    <>
      <div
        className={`w-full h-screen ${color}`} // Use template literals to include the color class dynamically
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 mb-10">
          <div className="fixed flex flex-wrap justify-center gap-5 shadow-2xl bg-white rounded-2xl py-2 px-3 ">

            <button onClick={() => setColor("bg-red-500")} className="bg-red-500 rounded-xl p-1 text-white shadow-xl">Red</button>
            <button onClick={() => setColor("bg-green-500")} className="bg-green-500 rounded-xl p-1 text-white shadow-xl">Green</button>
            <button onClick={() => setColor("bg-blue-500")} className="bg-blue-500 rounded-xl p-1 text-white shadow-xl">Blue</button>
            <button onClick={() => setColor("bg-pink-500")} className="bg-pink-500 rounded-xl p-1 text-white shadow-xl">Pink</button>
            <button onClick={() => setColor("bg-purple-500")} className="bg-purple-500 rounded-xl p-1 text-white shadow-xl">Purple</button>
            <button onClick={() => setColor("bg-yellow-500")} className="bg-yellow-500 rounded-xl p-1 text-white shadow-xl">Yellow</button>
            <button onClick={() => setColor("bg-gray-400")} className="bg-gray-400 rounded-xl p-1 text-white shadow-xl">Grey</button>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
