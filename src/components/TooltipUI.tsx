import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@nextui-org/react";

const TooltipUI = ({content} : {content: string}) => {
  return (
    <Tooltip
      className="w-64"
      content={content}
    >
      <FontAwesomeIcon icon={faCircleInfo} />
    </Tooltip>
  );
};

export default TooltipUI;
