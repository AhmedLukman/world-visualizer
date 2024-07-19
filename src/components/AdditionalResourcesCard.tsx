import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const AdditionalResourcesCard = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-bold text-2xl font-serif">Additional Resources</h3>
      </CardHeader>
      <CardBody className="space-y-5">
        <Card shadow="sm" isPressable>
          <CardBody>
            <div className="flex flex-col lg:flex-row">
              <div className="basis-1/2">
                <Image src="https://data-idela-network.imgix.net/public/misc/resources-placeholder.jpg?w=425&h=250&fit=crop" />
              </div>
              <div className="basis-1/2 gap-3 p-5 flex flex-col justify-between lg:gap-0">
                <div className="flex justify-between">
                  <div className="space-x-2">
                    <FontAwesomeIcon icon={faLocation} />
                    <span className=" uppercase">united states</span>
                  </div>
                  <time dateTime="2008-02-14 20:00">2008-02-14</time>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi recusandae incidunt fugit nobis, aspernatur culpa
                    explicabo repellat odio cumque delectus vel, porro sint
                    minima, maxime natus. Quisquam dolorum quibusdam soluta.
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card shadow="sm" isPressable>
          <CardBody>
            <div className="flex flex-col lg:flex-row">
              <div className="basis-1/2">
                <Image src="https://www.imagelighteditor.com/img/bg-after.jpg" />
              </div>
              <div className="basis-1/2 gap-3 p-5 flex flex-col justify-between lg:gap-0">
                <div className="flex justify-between">
                  <div className="space-x-2">
                    <FontAwesomeIcon icon={faLocation} />
                    <span className=" uppercase">united states</span>
                  </div>
                  <time dateTime="2008-02-14 20:00">2008-02-14</time>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi recusandae incidunt fugit nobis, aspernatur culpa
                    explicabo repellat odio cumque delectus vel, porro sint
                    minima, maxime natus. Quisquam dolorum quibusdam soluta.
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
};

export default AdditionalResourcesCard;
