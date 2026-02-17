import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Rnd } from "react-rnd";
import folderClosed from "../../assets/images/folderIcon.png";
import folderOpen from "../../assets/images/directory_open_file_mydocs-1.png";

const Window = ({
  id,
  title,
  titleIcon,
  folderLabel,
  defaultWidth = 500,
  defaultHeight = "auto",
  maxHeight = null,
  defaultOpen = true,
  defaultPosition = null,
  folderPosition = { top: 32, left: 32 },
  zIndex = 1,
  onFocus,
  nestedMode = false,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(defaultOpen);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });
  const [preMaximize, setPreMaximize] = useState({
    position: { x: 0, y: 0 },
    size: { width: defaultWidth, height: defaultHeight },
  });

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Set initial position and size
  useEffect(() => {
    if (isMobile) {
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight });
    } else if (defaultPosition) {
      setPosition(defaultPosition);
      setSize({ width: defaultWidth, height: defaultHeight });
    } else {
      const x = (window.innerWidth - defaultWidth) / 2;
      const y = window.innerHeight * 0.1;
      setPosition({ x, y });
      setSize({ width: defaultWidth, height: defaultHeight });
    }
  }, [isMobile, defaultPosition, defaultWidth, defaultHeight]);

  const handleMinimize = () => setIsMinimized(true);

  const handleMaximize = () => {
    if (isMobile) return; // No maximize on mobile, already full screen

    if (isMaximized) {
      setPosition(preMaximize.position);
      setSize(preMaximize.size);
      setIsMaximized(false);
    } else {
      setPreMaximize({ position, size });
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setIsMaximized(true);
    }
  };

  const handleClose = () => setIsVisible(false);

  const handleFolderClick = () => {
    if (!isVisible || isMinimized) {
      setIsVisible(true);
      setIsMinimized(false);
      if (onFocus && id) onFocus(id);
    } else {
      setIsMinimized(true);
    }
  };

  const isWindowOpen = isVisible && !isMinimized;

  // Mobile: render as full-screen modal
  const mobileWindow = (
    <div
      className="fixed left-0 right-0 bottom-0 bg-windows-gray flex flex-col"
      style={{ top: 48, zIndex: nestedMode ? 100 : zIndex }} // 48px for nav
    >
      {/* Title bar */}
      <div className="flex items-center justify-between w-full bg-windows-dark-gray text-white p-1 select-none">
        <div className="flex items-center gap-x-2">
          {titleIcon && <img src={titleIcon} alt="" className="w-4 h-4" />}
          <span className="font-windows text-sm">{title}</span>
        </div>
        <div className="flex gap-0.5">
          <button
            onClick={handleMinimize}
            className="w-6 h-6 bg-windows-gray border-t border-l border-white border-b-2 border-r-2 border-b-gray-800 border-r-gray-800 flex items-center justify-center text-black font-bold text-xs hover:bg-gray-300"
          >
            _
          </button>
          <button
            onClick={handleClose}
            className="w-6 h-6 bg-windows-gray border-t border-l border-white border-b-2 border-r-2 border-b-gray-800 border-r-gray-800 flex items-center justify-center text-black font-bold text-xs hover:bg-gray-300"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-black font-windows overflow-auto flex-1">
        {children}
      </div>
    </div>
  );
  // Desktop: render with Rnd
  const desktopWindow = (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, pos) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(pos);
      }}
      dragHandleClassName="title-bar"
      enableResizing={!isMaximized}
      disableDragging={isMaximized}
      minWidth={300}
      minHeight={100}
      maxHeight={maxHeight ? maxHeight : 1000}
      style={{ zIndex: nestedMode ? 100 : zIndex }}
    >
      <div className="bg-windows-gray border-t-2 border-l-2 border-white border-b border-r h-full flex flex-col max-h-[800px]">
        {/* Title bar */}
        <div className="title-bar flex items-center justify-between w-full bg-windows-dark-gray text-white p-1 cursor-move select-none">
          <div className="flex items-center gap-x-2">
            {titleIcon && <img src={titleIcon} alt="" className="w-4 h-4" />}
            <span className="font-windows text-sm">{title}</span>
          </div>
          <div className="flex gap-0.5">
            <button
              onClick={handleMinimize}
              className="w-5 h-5 bg-windows-gray border-t border-l border-white border-b-2 border-r-2 border-b-gray-800 border-r-gray-800 flex items-center justify-center text-black font-bold text-xs hover:bg-gray-300"
            >
              _
            </button>
            <button
              onClick={handleMaximize}
              className="w-5 h-5 bg-windows-gray border-t border-l border-white border-b-2 border-r-2 border-b-gray-800 border-r-gray-800 flex items-center justify-center text-black font-bold text-xs hover:bg-gray-300"
            >
              {isMaximized ? "❐" : "□"}
            </button>
            <button
              onClick={handleClose}
              className="w-5 h-5 bg-windows-gray border-t border-l border-white border-b-2 border-r-2 border-b-gray-800 border-r-gray-800 flex items-center justify-center text-black font-bold text-xs hover:bg-gray-300"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 text-black font-windows overflow-auto flex-1">
          {children}
        </div>
      </div>
    </Rnd>
  );

  const windowContent = isMobile ? mobileWindow : desktopWindow;

  return (
    <>
      {/* Folder icon */}
      <button
        onClick={handleFolderClick}
        className={`flex flex-col items-center gap-1 w-16 cursor-pointer ${nestedMode ? "" : "fixed"}`}
        style={
          nestedMode
            ? {}
            : { top: folderPosition.top, left: folderPosition.left, zIndex: 0 }
        }
      >
        <img
          src={isWindowOpen ? folderOpen : folderClosed}
          alt="folder"
          className="w-12 h-12"
          role="button"
        />
        <span className="text-black text-xs font-windows">
          {folderLabel || title}
        </span>
      </button>

      {/* Window */}
      {isWindowOpen &&
        (nestedMode
          ? createPortal(windowContent, document.body)
          : windowContent)}
    </>
  );
};

export default Window;
