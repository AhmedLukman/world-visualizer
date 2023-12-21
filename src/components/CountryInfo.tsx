import Properties from "./Properties";
import { faCalendar, faFlag } from "@fortawesome/free-regular-svg-icons";
import {
  faBook,
  faLanguage,
  faMaximize,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Skeleton } from "@nextui-org/react";
import { Feature } from "./MyGlobe";

const CountryInfo = ({
  screenshot,
  countryData,
}: {
  screenshot: string | null;
  countryData: Feature | undefined;
}) => {
  return (
    <Card>
      <CardBody>
        <div className="flex flex-col lg:flex-row">
          <div
            className={`w-full h-96 overflow-hidden rounded-lg bg-cover bg-center lg:basis-2/6 lg:w-auto lg:h-auto`}
            style={{
              backgroundImage: `url('${screenshot}')`,
            }}
          >
            <Skeleton
              isLoaded={!!screenshot}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="lg:basis-4/6 space-y-5 p-0 lg:p-4 pt-0">
            <div className="flex-col space-y-3 lg:flex-row p-3 rounded-md">
              <div className="lg:basis-1/2">
                {/* Change the tag to reflect html semantic hierarchy */}
                <h3 className="font-bold text-xl lg:text-2xl font-serif">
                  Evaluation Data from ECD and Teacher Training program In{" "}
                  {countryData!.properties.ADMIN}
                </h3>
              </div>
              <div className="lg:basis-1/2">
                <p>
                  Right To Play implemented “Childs Play - Strengthening Early
                  Childhood Development Education in Northern Uganda” to improve
                  access and quality of ECE for 3,000 refugee and host community
                  children. Teachers and government officials also received
                  training and mentorship.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10">
              <Properties
                heading="Country"
                icon={faFlag}
                value={countryData!.properties.ADMIN}
              />
              <Properties
                heading="Organization"
                icon={faUsers}
                value="Right to Play"
              />
              <Properties heading="Sample Size" icon={faMaximize} value="800" />
              <Properties heading="Year" icon={faCalendar} value="2019" />
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
  );
};

export default CountryInfo;
