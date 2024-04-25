
type Props = {
    isOpen: boolean;
    onClose: () => void;

    okText?: string;
    closeText?: string;
    title?: string;
    startIcon?: React.ReactNode;
    content?: React.ReactNode;
    // children?: ReactNode | null;
}

/**
 * isOpen
 *
 * onClose
 *
 * okText
 *
 * closeText
 *
 * title
 *
 * startIcon
 *
 * content
 *
 * children
 *
 * if children is defined, content will be ignored
 */
const Dialog = ({
    isOpen = false,
    onClose,
    okText,
    closeText,
    title,
    startIcon,
    content,
    // children,
}: Props) => {
  return (
    isOpen && (
        <div
            className="w-screen h-screen fixed z-100 left-0 bottom-0"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.20)'}}
            onClick={onClose}
        >
            {/* {children ? <div>{children}</div> : ( */}
                 <div
                 className="w-[400px] h-[200px] bg-white fixed z-200 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                 onClick={(e) => e.stopPropagation()}
             >
                 <div className="flex justify-between p-4">
                     <div className="flex items-center">
                         {startIcon}
                         <div>{title}</div>
                     </div>
                     <div onClick={onClose}>X</div>
                 </div>
                 <div className="p-4">{content}</div>
                 <div className="flex justify-end p-4">
                     <button onClick={onClose}>{closeText}</button>
                     <button onClick={onClose}>{okText}</button>
                 </div>
             </div>
            {/* )} */}
        </div>
    )
  );
};

export default Dialog;