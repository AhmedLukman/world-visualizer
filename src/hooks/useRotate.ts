import { useEffect } from "react";
import { GlobeMethods } from "react-globe.gl";

const useRotate = ({
  isToggled,
  countryData,
  globeEl,
}: {
  isToggled: boolean;
  countryData: unknown;
  globeEl: React.MutableRefObject<GlobeMethods | undefined>;
}) => {
  useEffect(() => {
    if (!isToggled && !countryData)
      globeEl.current!.controls().autoRotate = true;
  }, [isToggled, countryData, globeEl]);
};

export default useRotate