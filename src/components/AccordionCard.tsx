import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Image,
} from "@nextui-org/react";
import TooltipUI from "./TooltipUI";

const AccordionCard = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-bold text-2xl font-serif">Scores</h3>
      </CardHeader>
      <CardBody>
        <Accordion variant="bordered">
          <AccordionItem
            classNames={{
              title: "font-bold",
            }}
            key="1"
            // Change aria label for all the accordion items when data is available
            aria-label="Accordion 1"
            title={
              <div className="space-x-2">
                <TooltipUI
                  content="Scorez are divided into domains to display the different areas of development that IDELA measures. Differences in domain scores may point to children’s strengths or weaknesses in particular areas. 
          Average domain scores are calculated by taking the average scores of all subtasks in that domain. Subtasks within each domain are displayed in graphs below."
                />
                <h4 className=" inline">Albert Einstein</h4>
              </div>
            }
          >
            <p>
              Children completed these tasks to assess their gross and fine
              motor skills. On average, they scored 78% correct in the Motor
              Development domain.
            </p>
            <Image src="/images/graph.png" />
          </AccordionItem>
          <AccordionItem
            classNames={{
              title: "font-bold",
            }}
            key="2"
            aria-label="Accordion 1"
            title={
              <div className="space-x-2">
                <TooltipUI
                  content="Scorez are divided into domains to display the different areas of development that IDELA measures. Differences in domain scores may point to children’s strengths or weaknesses in particular areas. 
          Average domain scores are calculated by taking the average scores of all subtasks in that domain. Subtasks within each domain are displayed in graphs below."
                />
                <h4 className=" inline">Motor Development</h4>
              </div>
            }
          >
            <p>
              Children completed these tasks to assess their gross and fine
              motor skills. On average, they scored 78% correct in the Motor
              Development domain.
            </p>
            <Image src="/images/graph.png" />
          </AccordionItem>
          <AccordionItem
            classNames={{
              title: "font-bold",
            }}
            key="3"
            aria-label="Accordion 1"
            title={
              <div className="space-x-2">
                <TooltipUI
                  content="Scorez are divided into domains to display the different areas of development that IDELA measures. Differences in domain scores may point to children’s strengths or weaknesses in particular areas. 
          Average domain scores are calculated by taking the average scores of all subtasks in that domain. Subtasks within each domain are displayed in graphs below."
                />
                <h4 className=" inline">Car Treasury</h4>
              </div>
            }
          >
            <p>
              Children completed these tasks to assess their gross and fine
              motor skills. On average, they scored 78% correct in the Motor
              Development domain.
            </p>
            <Image src="/images/graph.png" />
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default AccordionCard;
