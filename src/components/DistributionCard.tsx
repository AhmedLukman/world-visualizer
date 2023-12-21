import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Image, Tooltip } from "@nextui-org/react"

const DistributionCard = () => {
  return (
    <Card shadow="sm" isHoverable className="border">
      <CardHeader className="gap-3">
        <Tooltip
          className="w-64"
          content="Scores are divided into domains to display the different areas of development that IDELA measures. Differences in domain scores may point to children’s strengths or weaknesses in particular areas."
        >
          <FontAwesomeIcon icon={faCircleInfo} />
        </Tooltip>
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
}

export default DistributionCard