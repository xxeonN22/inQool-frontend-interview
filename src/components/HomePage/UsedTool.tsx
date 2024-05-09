interface UsedToolProps {
  name: string;
}

const UsedTool = ({ name }: UsedToolProps) => {
  return (
    <li className="bg-secondary text-secondary-foreground p-5 rounded-sm shadow-md">
      {name}
    </li>
  );
};

export default UsedTool;
