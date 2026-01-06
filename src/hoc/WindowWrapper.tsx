import { useRef, type ComponentType } from "react"
import useWindowStore from "#store/window"
import { AnimatePresence, motion } from "framer-motion";

const WindowWrapper = (Component: ComponentType<any>, windowKey: string) => {
  const Wrapped = (props: any) => {

    const { windows, focusWindow } = useWindowStore();

    const windowState = windows[windowKey as keyof typeof windows];
    const { isOpen, zIndex, isMinimized, isMaximized } = windowState || { isOpen: false, zIndex: 0, isMinimized: false, isMaximized: false };

    const ref = useRef<HTMLElement>(null)

    const maximizedStyle: React.CSSProperties = isMaximized ? {
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      transform: "none",
      borderRadius: 0
    } : {};

    return (
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.section
            id={windowKey}
            ref={ref}
            style={{ zIndex, ...maximizedStyle }}
            className={`absolute ${!isMaximized ? "top-1/2 left-1/2" : ""}`}
            initial={{ scale: 0.8, opacity: 0, y: 40, x: !isMaximized ? "-50%" : 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: !isMaximized ? "-50%" : 0,
              x: !isMaximized ? "-50%" : 0,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              y: 40,
              x: !isMaximized ? "-50%" : 0,
              transition: { duration: 0.2 }
            }}
            drag={!isMaximized}
            dragMomentum={false}
            onPointerDown={() => focusWindow(windowKey as any)}
            whileDrag={{ scale: 1.02 }}
          >
            <Component {...props} windowKey={windowKey} />
          </motion.section>
        )}
      </AnimatePresence>
    )
  }

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`

  return Wrapped
}

export default WindowWrapper