import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <>
      <h3 className="mb-8 text-center">
        You were not supposed to end up here, error ocurred, sorry.
      </h3>
      <Button className="px-7 py-3 mx-auto">
        <Link to="/">Back to the home page</Link>
      </Button>
    </>
  );
};

export default NotFoundPage;
