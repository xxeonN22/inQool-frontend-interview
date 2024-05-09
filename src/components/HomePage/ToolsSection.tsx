import UsedTool from '@/components/HomePage/UsedTool';
import tools from '@/components/HomePage/toolsData';

const ToolsSection = () => {
  return (
    <section className="rounded-default p-3 mt-10">
      <h3 className="mb-5 text-center">
        Tools that were used while making this web application
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-3">
        {tools.map((tool) => (
          <UsedTool key={tool.id} name={tool.name} />
        ))}
      </ul>
    </section>
  );
};

export default ToolsSection;
