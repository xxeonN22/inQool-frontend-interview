import { Button } from '@/components/ui/button';

const AddNewUserFooter = () => {
  return (
    <div className="flex">
      <Button className="bg-primary text-primary-foreground mt-6 hover:bg-accent mx-auto">
        Add new user
      </Button>
    </div>
  );
};

export default AddNewUserFooter;
