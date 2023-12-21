import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Image, Tooltip } from "@nextui-org/react"
import DistributionCard from "./DistributionCard";

const AdditionalScoreCard = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-bold text-2xl font-serif">
          Additional Child Information
        </h3>
      </CardHeader>
      <CardBody>
        <div className="space-x-3 mb-3">
          <Tooltip
            className="w-64"
            content="Scores are divided into domains to display the different areas of development that IDELA measures. Differences in domain scores may point to children’s strengths or weaknesses in particular areas. 
          Average domain scores are calculated by taking the average scores of all subtasks in that domain. Subtasks within each domain are displayed in graphs below."
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </Tooltip>
          <h4 className="inline font-bold text-lg">Distribution of Scores</h4>
        </div>
        <p>Almost half the children scored within 61 - 80% range.</p>
        <Image src="/images/graph.png"/>
        <div className="flex flex-col mt-2 gap-5 lg:flex-row">
          <DistributionCard />
          <DistributionCard />
        </div>
      </CardBody>
    </Card>
  );
}

export default AdditionalScoreCard