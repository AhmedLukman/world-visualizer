
import AverageScoreCard from "./AverageScoreCard";
import AccordionCard from "./AccordionCard";
import AdditionalScoreCard from "./AdditionalScoreCard";
import AdditionalResourcesCard from "./AdditionalResourcesCard";
import MoreInfoCard from "./MoreInfoCard";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import { GlobeMethods } from "react-globe.gl";
import { Feature } from "./MyGlobe";
import CountryInfo from "./CountryInfo";

const GlobeModal = ({
  screenshot,
  setScreenshot,
  isOpen,
  onClose,
  globeEl,
  setCountryData,
  countryData,
}: {
  screenshot: string | null;
  setScreenshot: React.Dispatch<React.SetStateAction<string | null>>;
  isOpen: boolean;
  countryData: Feature | undefined
  onClose: () => void;
  globeEl: React.MutableRefObject<GlobeMethods | undefined>;
  setCountryData: React.Dispatch<React.SetStateAction<Feature | undefined>>;
}) => {
  const handleCloseModal = () => {
    globeEl.current!.controls().autoRotate = true;
    setCountryData(undefined);
    setScreenshot(null);
    onClose();
  };

  return (
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
                <CountryInfo countryData={countryData} screenshot={screenshot}/>
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
  );
};

export default GlobeModal;
