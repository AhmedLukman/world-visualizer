import html2canvas from "html2canvas";
import { useRef, useState } from "react";

const useScreenshot = () => {
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const captureRef = useRef(null);
  const takeScreenshot = () => {
    if (captureRef.current) {
      void html2canvas(captureRef.current).then((canvas) => {
        const screenshotDataUrl = canvas.toDataURL("image/png");
        setScreenshot(screenshotDataUrl);
      });
    }
  };
  return {screenshot, takeScreenshot, setScreenshot, captureRef}
};

export default useScreenshot;
