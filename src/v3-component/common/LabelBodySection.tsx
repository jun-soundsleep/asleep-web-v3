import { FC } from 'react';

type LabelnBodySectionType = {
  head: string;
  description: string;
  styleClass?: string;
};

const LabelBodySection: FC<LabelnBodySectionType> = ({
  head,
  description,
  styleClass
}) => {
  return (
    <div className={styleClass}>
      <div
        className={`gray2 b2-bold-small medium:b2-bold-medi large:b2-bold-large `}
      >
        {head}
      </div>
      <h2
        className={`text-white h1-bold-small medium:h1-medium-medi large:h1-large mt-[12px] medium:mt-[16px] large:mt-[24px]`}
      >
        {description}
      </h2>
    </div>
  );
};

export default LabelBodySection;
