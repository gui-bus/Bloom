//#region Interfaces
interface DocsTitleProps {
  title: string;
  description: string;
}
//#endregion

const DocsTitle = ({ title, description }: DocsTitleProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="font-light">{description}</p>
    </div>
  );
};

export default DocsTitle;
