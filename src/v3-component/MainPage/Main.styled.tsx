export const MainSectionLabel = ({ title }: { title: string }) => {
  return (
    <div
      className={`gray2 b2-bold-small medium:b2-bold-medi large:b2-bold-large large:text-center`}
    >
      {title}
    </div>
  );
};

export const MainSectionH2 = ({ title }: { title: string }) => {
  return (
    <h2
      className={`text-white h1-bold-small medium:h1-medium-medi large:h1-large large:text-center`}
    >
      {title}
    </h2>
  );
};
