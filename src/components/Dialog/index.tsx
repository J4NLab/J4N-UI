import { ReactNode, Children, isValidElement, cloneElement } from "react";
import crossImg from "../../assets/cross.svg";
import Typography from "../Typography";
import { ICON_MAP } from "../../utils";

type TDialog = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};
const Dialog = ({ isOpen = false, onClose, children }: TDialog) => {
  // send onClose to children
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { onClose } as any);
    }
    return child;
  });
  return (
    isOpen && (
      <div
        className="w-screen h-screen fixed z-100 left-0 bottom-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.20)" }}
        onClick={onClose}
      >
        <div
          className="
                w-[400px]
                h-auto
                bg-white
                fixed
                z-200
                left-1/2
                top-1/2
                transform
                -translate-x-1/2
                -translate-y-1/2
                rounded
            "
          onClick={(e) => e.stopPropagation()}
        >
          {childrenWithProps}
        </div>
      </div>
    )
  );
};

/**
 * title
 *
 * startIcon: custom icon
 * status: 'correct' | 'info' | 'error' | 'warning'
 */
type TDialogTitle = {
  title?: string;
  startIcon?: ReactNode;
  onClose?: () => void;
  status?: "correct" | "info" | "error" | "warning";
  children?: ReactNode;
};

const DialogTitle = ({
  startIcon,
  onClose,
  status,
  children,
}: TDialogTitle) => (
  <div className="flex justify-between px-4 pt-4">
    <div className="flex items-center gap-[16px]">
      {status &&
        (!startIcon ? <img src={ICON_MAP[status]} alt="" /> : startIcon)}
      <Typography style={{ fontSize: "20px" }} sprites="regular">
        {children}
      </Typography>
    </div>
    <div className="cursor-pointer" onClick={onClose}>
      <img src={crossImg} alt="" />
    </div>
  </div>
);

/**
 * content
 */
type TDialogContent = {
  children?: ReactNode;
};

const DialogContent = ({ children }: TDialogContent) => (
  <div className="px-4 ml-[40px]">{children}</div>
);

type TDialogActions = {
  children?: ReactNode;
};

const DialogActions = ({ children }: TDialogActions) => (
  <div className="flex justify-end gap-[24px] p-4">{children}</div>
);

export { Dialog, DialogTitle, DialogContent, DialogActions };
