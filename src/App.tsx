import Globe, { GlobeMethods } from "react-globe.gl";
import { useState, useRef } from "react";
import { countriesData } from "./countries";
import { renderToString } from "react-dom/server";
import Feature from "react-globe.gl"; // Import the Feature type from react-globe.gl
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  NextUIProvider,
  useDisclosure,
} from "@nextui-org/react";
import Properties from "./components/Properties";
import { faCalendar, faFlag } from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faLanguage,
  faMaximize,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import AverageScoreCard from "./components/AverageScoreCard";
import AccordionCard from "./components/AccordionCard";
import AdditionalScoreCard from "./components/AdditionalScoreCard";
import AdditionalResourcesCard from "./components/AdditionalResourcesCard";
import MoreInfoCard from "./components/MoreInfoCard";
import useRotate from "./hooks/useRotate";
import { getVal } from "./lib/utils";
import { useColorScale } from "./hooks/useColorScale";
import useScreenshot from "./hooks/useScreenshot";

const World = () => {
  const [hoverD, setHoverD] = useState<object | null>();
  const [click, setClick] = useState<Feature | null>();
  const [isToggled, setIsToggled] = useState(false);
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const globeEl: React.MutableRefObject<GlobeMethods | undefined> = useRef();

  const handlePolygonClick = (
    polygon: object
    // event: MouseEvent,
    // coords: { lat: number; lng: number; altitude: number }
  ) => {
    const featurePolygon = polygon as Feature;
    globeEl.current!.controls().autoRotate = false;
    setClick(featurePolygon);
    onOpen();
    takeScreenshot();
  };

  const handleCloseModal = () => {
    globeEl.current!.controls().autoRotate = true;
    setClick(null);
    setScreenshot(null);
    onClose();
  };

  const colorScale = useColorScale();
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
        <Modal
          scrollBehavior="outside"
          isDismissable={false}
          size="5xl"
          isOpen={isOpen}
          onClose={handleCloseModal}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div className="space-y-5">
                    <Card>
                      <CardBody>
                        <div className="flex flex-col lg:flex-row">
                          <div
                            className={`w-full h-96 overflow-hidden rounded-lg bg-cover bg-center lg:basis-2/6 lg:w-auto lg:h-auto`}
                            style={{
                              backgroundImage: `url('${screenshot}')`,
                            }}
                          />
                          <div className="lg:basis-4/6 space-y-5 p-0 lg:p-4 pt-0">
                            <div className="flex-col space-y-3 lg:flex-row p-3 rounded-md">
                              <div className="lg:basis-1/2">
                                {/* Change the tag to reflect html semantic hierarchy */}
                                <h3 className="font-bold text-xl lg:text-2xl font-serif">
                                  Evaluation Data from ECD and Teacher Training
                                  program In {click.properties.ADMIN}
                                </h3>
                              </div>
                              <div className="lg:basis-1/2">
                                <p>
                                  Right To Play implemented “Childs Play -
                                  Strengthening Early Childhood Development
                                  Education in Northern Uganda” to improve
                                  access and quality of ECE for 3,000 refugee
                                  and host community children. Teachers and
                                  government officials also received training
                                  and mentorship.
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10">
                              <Properties
                                heading="Country"
                                icon={faFlag}
                                value={click.properties.ADMIN}
                              />
                              <Properties
                                heading="Organization"
                                icon={faUsers}
                                value="Right to Play"
                              />
                              <Properties
                                heading="Sample Size"
                                icon={faMaximize}
                                value="800"
                              />
                              <Properties
                                heading="Year"
                                icon={faCalendar}
                                value="2019"
                              />
                              <Properties
                                heading="Program Type"
                                icon={faBook}
                                value={`Center-based, Government preschool, Teacher training`}
                              />
                              <Properties
                                heading="Language"
                                icon={faLanguage}
                                value="Luganda, Nuer, Dinka"
                              />
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                    <AverageScoreCard />
                    <AccordionCard />
                    <AdditionalScoreCard />
                    <AdditionalResourcesCard />
                    <MoreInfoCard />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
      {!isToggled && (
        <div ref={captureRef}>
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            // backgroundColor="rgba(0,0,0,0)"
            lineHoverPrecision={0}
            polygonsData={countriesData.features.filter(
              (d) => d.properties.ISO_A2 !== "AQ"
            )}
            polygonAltitude={(d) => (d === hoverD || d === click ? 0.12 : 0.06)} //If hovered, raises the country
            polygonCapColor={(d) =>
              d === hoverD || d === click ? "steelblue" : colorScale(getVal(d))
            } //If hovered or clicked, changes the country color
            polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
            polygonStrokeColor={() => "#111"}
            //If hovered, show a tooltip on the hovered country
            polygonLabel={(obj: object) => {
              const d = (obj as { properties: Properties }).properties;
              const Component1 = () => (
                <div
                  data-html2canvas-ignore="true"
                  className="text-black bg-white p-2 rounded-md hidden lg:block"
                >
                  {d.ADMIN}
                </div>
              );
              const component = <Component1 />;
              const stringcomp = renderToString(component);
              return stringcomp;
            }}
            onPolygonClick={handlePolygonClick}
            onPolygonHover={setHoverD} //When hovered, passes the polygon object to the setHovered function
            polygonsTransitionDuration={300}
            onGlobeClick={() => {
              globeEl.current!.controls().autoRotate = true;
              setClick(null);
            }}
          />
        </div>
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

export type Geometry = {
  type: string;
  coordinates: number[][][];
};

export type Properties = {
  scalerank: number;
  featurecla: string;
  LABELRANK: number;
  SOVEREIGNT: string;
  SOV_A3: string;
  ADM0_DIF: number;
  LEVEL: number;
  TYPE: string;
  ADMIN: string;
  ADM0_A3: string;
  GEOU_DIF: number;
  GEOUNIT: string;
  GU_A3: string;
  SU_DIF: number;
  SUBUNIT: string;
  SU_A3: string;
  BRK_DIFF: number;
  NAME: string;
  NAME_LONG: string;
  BRK_A3: string;
  BRK_NAME: string;
  BRK_GROUP: null | string;
  ABBREV: string;
  POSTAL: string;
  FORMAL_EN: string;
  FORMAL_FR: null | string;
  NAME_CIAWF: string;
  NOTE_ADM0: null | string;
  NOTE_BRK: null | string;
  NAME_SORT: string;
  NAME_ALT: null | string;
  MAPCOLOR7: number;
  MAPCOLOR8: number;
  MAPCOLOR9: number;
  MAPCOLOR13: number;
  POP_EST: number;
  POP_RANK: number;
  GDP_MD_EST: number;
  POP_YEAR: number;
  LASTCENSUS: number;
  GDP_YEAR: number;
  ECONOMY: string;
  INCOME_GRP: string;
  WIKIPEDIA: number;
  FIPS_10_: string;
  ISO_A2: string;
  ISO_A3: string;
  ISO_A3_EH: string;
  ISO_N3: string;
  UN_A3: string;
  WB_A2: string;
  WB_A3: string;
  WOE_ID: number;
  WOE_ID_EH: number;
  WOE_NOTE: string;
  ADM0_A3_IS: string;
  ADM0_A3_US: string;
  ADM0_A3_UN: number;
  ADM0_A3_WB: number;
  CONTINENT: string;
  REGION_UN: string;
  SUBREGION: string;
  REGION_WB: string;
  NAME_LEN: number;
  LONG_LEN: number;
  ABBREV_LEN: number;
  TINY: number;
  HOMEPART: number;
  MIN_ZOOM: number;
  MIN_LABEL: number;
  MAX_LABEL: number;
};

export type Feature = {
  type: string;
  properties: Properties;
  bbox: number[];
  geometry: Geometry;
  __id: number;
};

export type CountriesData = {
  type: string;
  features: Feature[];
};

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
