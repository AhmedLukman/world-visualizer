import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import TooltipUI from "./TooltipUI";

const DistributionCard = () => {
  return (
    <Card shadow="sm" isHoverable className="border">
      <CardHeader className="gap-3">
        <TooltipUI
          content="Scorez are divided into domains to display the different areas of development that IDELA measures. Differences in domain scores may point to children’s strengths or weaknesses in particular areas. 
          Average domain scores are calculated by taking the average scores of all subtasks in that domain. Subtasks within each domain are displayed in graphs below."
        />
        <h4 className="font-bold text-xl font-serif">
          Distribution of Children&apos;s Gender
        </h4>
      </CardHeader>
      <CardBody>
        <p>
          52% of the assessed children in this sample where boys, while 48% were
          girls.
        </p>
        <div className="flex justify-center">
          <Image src="https://th.bing.com/th/id/OIP.yGppBtoZJkXms56nU1nNjQHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </div>
      </CardBody>
    </Card>
  );
};

export default DistributionCard;
