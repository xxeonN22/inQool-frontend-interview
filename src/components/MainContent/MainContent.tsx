interface MainContainerProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: MainContainerProps) => {
  return (
    <main className="flex flex-col items-center h-[calc(100vh-4rem)] max-w-screen-lg mx-auto">
      {children}
    </main>
  );
};

export default MainContent;
