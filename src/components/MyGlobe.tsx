import { getVal } from "../lib/utils";
import { countriesData } from "../countries";
import { useColorScale } from "../hooks/useColorScale";
import { renderToString } from "react-dom/server";
import { useEffect, useRef, useState } from "react";
import { GlobeMethods } from "react-globe.gl"; // Import the Feature type from react-globe.gl
import Globe from "react-globe.gl";
import GlobeModal from "./GlobeModal";
import { useDisclosure } from "@nextui-org/react";
import useScreenshot from "../hooks/useScreenshot";

const MyGlobe = () => {
  const [countryData, setCountryData] = useState<Feature | undefined>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hoverD, setHoverD] = useState<object | null>();
  const onCloseModal = () => {
    globeEl.current!.controls().autoRotate = true;
    setCountryData(undefined);
    setScreenshot(null);
    setHoverD(null);
    onClose();
  };
  const globeEl: React.MutableRefObject<GlobeMethods | undefined> = useRef();

  const { screenshot, takeScreenshot, setScreenshot, captureRef } =
    useScreenshot();

  const colorScale = useColorScale();

  useEffect(() => {
    globeEl.current!.controls().autoRotate = true;
  }, []);

  const handlePolygonClick = (
    polygon: object
    // event: MouseEvent,
    // coords: { lat: number; lng: number; altitude: number }
  ) => {
    const featurePolygon = polygon as Feature;
    globeEl.current!.controls().autoRotate = false;
    setCountryData(featurePolygon);
    onOpen();
    takeScreenshot();
  };
  return (
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
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)} //If hovered, raises the country
        polygonCapColor={(d) =>
          d === hoverD ? "steelblue" : colorScale(getVal(d))
        } //If hovered or clicked, changes the country color
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonStrokeColor={() => "#111"}
        //If hovered, show a tooltip on the hovered country
        polygonLabel={(obj: object) => {
          const d = (obj as { properties: Properties }).properties;
          const HoverComponent = () => (
            <div
            data-html2canvas-ignore="true"
            className="text-black bg-white p-2 rounded-md"
            >
              {d.ADMIN}
            </div>
          );
          const component = <HoverComponent />;
          const stringcomp = renderToString(component);
          return stringcomp;
        }}
        onPolygonClick={handlePolygonClick}
        onPolygonHover={setHoverD} //When hovered, passes the polygon object to the setHovered function. There is a glitch with this though
        polygonsTransitionDuration={300}
      />
      <GlobeModal
        countryData={countryData}
        isOpen={isOpen}
        onClose={onCloseModal}
        screenshot={screenshot}
      />
    </div>
  );
};

export default MyGlobe;

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
