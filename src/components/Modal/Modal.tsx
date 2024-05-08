import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ModalProps {
  children: React.ReactNode;
  trigger: React.ReactNode | string;
  className?: string;
}

const Modal = ({ children, trigger, className }: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className={className}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
