import { Button, Card, CardBody } from "@nextui-org/react";

const MoreInfoCard = () => {
  return (
    <Card className="p-3 rounded-tl-none bg-yellow-400">
      <CardBody>
        <div className="flex flex-col justify-between space-y-2 items-center lg:flex-row">
          <p>Questions about Alive or need further information?</p>
          <div className="space-x-2">
            <Button variant="faded" >About Us</Button>
            <Button variant="faded">Contact Us</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default MoreInfoCard;
