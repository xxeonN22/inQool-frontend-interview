import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';

const LayoutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPage;
