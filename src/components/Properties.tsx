import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Properties = ({
  heading,
  value,
  icon,
}: {
  heading: string;
  value: string;
  icon: IconProp;
}) => {
  return (
    <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-5">
      <FontAwesomeIcon
        className="text-yellow-500 text-2xl xl:text-3xl"
        icon={icon}
      />
      <div className="flex flex-col items-center lg:items-start">
        {/* Change tag for semantics */}
        <h4 className="font-bold text-lg">{heading}</h4>
        <span className="text-center lg:text-left">{value}</span>
      </div>
    </div>
  );
};

export default Properties;
