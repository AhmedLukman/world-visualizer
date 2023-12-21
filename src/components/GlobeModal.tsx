import Properties from "./Properties";
import { faCalendar, faFlag } from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faLanguage,
  faMaximize,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import AverageScoreCard from "./AverageScoreCard";
import AccordionCard from "./AccordionCard";
import AdditionalScoreCard from "./AdditionalScoreCard";
import AdditionalResourcesCard from "./AdditionalResourcesCard";
import MoreInfoCard from "./MoreInfoCard";
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import { GlobeMethods } from "react-globe.gl";
import { Feature } from "./MyGlobe";

const GlobeModal = ({
  screenshot,
  setScreenshot,
  isOpen,
  onClose,
  globeEl,
  setClick,
  click
}: {
  screenshot: string | null;
  setScreenshot: React.Dispatch<React.SetStateAction<string | null>>;
  isOpen: boolean;
  onClose: () => void;
  globeEl: React.MutableRefObject<GlobeMethods | undefined>;
  setClick: React.Dispatch<React.SetStateAction<Feature | undefined>>;
  click: Feature
}) => {
  const handleCloseModal = () => {
    globeEl.current!.controls().autoRotate = true;
    setClick(undefined);
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
                              Education in Northern Uganda” to improve access
                              and quality of ECE for 3,000 refugee and host
                              community children. Teachers and government
                              officials also received training and mentorship.
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
  );
};

export default GlobeModal;
