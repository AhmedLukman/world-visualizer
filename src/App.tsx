import { useState } from "react";

import { NextUIProvider } from "@nextui-org/react";

import MyGlobe from "./components/MyGlobe";

const World = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <div className="absolute z-50 top-0 left-0 bg-gray-400 p-2 rounded-full m-10">
        <button onClick={() => setIsToggled((prev) => !prev)}>
          Toggle list view
        </button>
      </div>

      {!isToggled && <MyGlobe />}

      {isToggled && <p>List View</p>}
    </>
  );
};

const App = () => {
  return (
    <NextUIProvider>
      <World />
    </NextUIProvider>
  );
};

export default App;
