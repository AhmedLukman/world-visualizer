import { GlobeMethods } from "react-globe.gl";
import { useState, useRef } from "react";

import {
  NextUIProvider,
  useDisclosure,
} from "@nextui-org/react";

import useRotate from "./hooks/useRotate";
import useScreenshot from "./hooks/useScreenshot";
import MyGlobe, { Feature } from "./components/MyGlobe";
import GlobeModal from "./components/GlobeModal";

const World = () => {
  const [click, setClick] = useState<Feature>();
  const [isToggled, setIsToggled] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const globeEl: React.MutableRefObject<GlobeMethods | undefined> = useRef();


  const { screenshot, takeScreenshot, setScreenshot, captureRef } =
    useScreenshot();
  useRotate({ isToggled, click, globeEl });

  return (
    <>
      <div className="absolute z-50 top-0 left-0 bg-gray-400 p-2 rounded-full m-10">
        <button onClick={() => setIsToggled((prev) => !prev)}>
          Toggle list view
        </button>
      </div>
      {!isToggled && click && (
       <GlobeModal click={click} globeEl={globeEl} isOpen={isOpen} onClose={onClose} screenshot={screenshot} setClick={setClick} setScreenshot={setScreenshot}/>
      )}
      {!isToggled && (
        <MyGlobe captureRef={captureRef} click={click} globeEl={globeEl} onOpen={onOpen} setClick={setClick} takeScreenshot={takeScreenshot}/>
      )}
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


// import React, { useState } from "react";
// import { ScreenCapture } from "react-screen-capture";

// const App = () => {
//   const [screenCapture, setScreenCapture] = useState("");

//   const handleScreenCapture = (screenCapture) => {
//     setScreenCapture(screenCapture);
//   };

//   const handleSave = () => {
//     const screenCaptureSource = screenCapture;
//     const downloadLink = document.createElement("a");
//     const fileName = "react-screen-capture.png";

//     downloadLink.href = screenCaptureSource;
//     downloadLink.download = fileName;
//     downloadLink.click();
//   };

//   return (
//     <ScreenCapture onEndCapture={handleScreenCapture}>
//       {({ onStartCapture }) => (
//         <div>
//           <button onClick={onStartCapture}> Capture </button>
//           <p>
//             {" "}
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//             distinctio exercitationem a tempore delectus ducimus necessitatibus
//             dolor voluptatum aut est quaerat aspernatur, vero quod aperiam odio.
//             Exercitationem distinctio in voluptates?{" "}
//           </p>
//           <center>
//             <img src={screenCapture} alt="react-screen-capture" />
//             <p>
//               {" "}
//               {screenCapture && (
//                 <button onClick={handleSave}> Download </button>
//               )}{" "}
//             </p>
//           </center>
//         </div>
//       )}
//     </ScreenCapture>
//   );
// };

// export default App;
