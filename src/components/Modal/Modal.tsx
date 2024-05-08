import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ModalProps {
  children: React.ReactNode;
  trigger: React.ReactNode | string;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerClass?: string;
}

const Modal = ({
  children,
  trigger,
  className,
  open,
  onOpenChange,
  triggerClass,
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger className={triggerClass}>{trigger}</DialogTrigger>
      <DialogContent className={className}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
