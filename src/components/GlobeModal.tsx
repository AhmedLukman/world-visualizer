
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
import { Feature } from "./MyGlobe";
import CountryInfo from "./CountryInfo";

const GlobeModal = ({
  screenshot,
  isOpen,
  onClose,
  countryData
}: {
  screenshot: string | null;
  isOpen: boolean;
  countryData: Feature | undefined
  onClose: () => void;
}) => {


  return (
    <Modal
      scrollBehavior="outside"
      isDismissable={false}
      size="5xl"
      isOpen={isOpen}
      onClose={onClose}
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
