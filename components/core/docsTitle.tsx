
interface DocsTitleProps {
  title: string;
  description: string;
}

const DocsTitle = ({ title, description }: DocsTitleProps) => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="font-light">{description}</p>
    </div>
  );
};

export default DocsTitle;
