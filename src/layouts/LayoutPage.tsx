import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import MainContent from '@/components/MainContent/MainContent';

const LayoutPage = () => {
  return (
    <>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default LayoutPage;
