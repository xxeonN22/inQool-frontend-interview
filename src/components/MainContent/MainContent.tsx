interface MainContentProps {
  children: React.ReactNode;
  className?: string;
}

const MainContent = ({ children, className }: MainContentProps) => {
  return (
    <main
      className={`flex flex-col h-[calc(100vh-4rem)] max-w-screen-lg mx-auto ${className}`}
    >
      {children}
    </main>
  );
};

export default MainContent;
