import { useEffect } from "react";
import { GlobeMethods } from "react-globe.gl";

const useRotate = ({
  isToggled,
  click,
  globeEl,
}: {
  isToggled: boolean;
  click: any;
  globeEl: React.MutableRefObject<GlobeMethods | undefined>;
}) => {
  useEffect(() => {
    if (!isToggled && !click) globeEl.current!.controls().autoRotate = true;
  }, [isToggled, click, globeEl]);
};

export default useRotate