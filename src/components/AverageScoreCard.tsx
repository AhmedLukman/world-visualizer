import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import TooltipUI from "./TooltipUI";

const AverageScoreCard = () => {
  return (
    <Card>
      <CardHeader className="gap-3">
        <TooltipUI
          content="Scorez are divided into domains to display the different areas of development that IDELA measures. Differences in domain scores may point to children’s strengths or weaknesses in particular areas. 
          Average domain scores are calculated by taking the average scores of all subtasks in that domain. Subtasks within each domain are displayed in graphs below."
        />

        <h3 className="font-bold text-2xl font-serif">
          Average IDELA Score by Domain
        </h3>
      </CardHeader>
      <CardBody>
        <p>On average, children scored 64% correct on the IDELA assessment.</p>
        <Image src="/images/graph.png" />
      </CardBody>
    </Card>
  );
};

export default AverageScoreCard;
