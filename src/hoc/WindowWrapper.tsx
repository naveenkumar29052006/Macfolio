import { useLayoutEffect, useRef, type ComponentType } from "react"
import useWindowStore from "#store/window"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/all";


const WindowWrapper = (Component: ComponentType<any>, windowKey: string) => {
  const Wrapped = (props: any) => {

    const { windows, focusWindow } = useWindowStore();

    const windowState = windows[windowKey as keyof typeof windows];
    const { isOpen, zIndex, isMinimized, isMaximized } = windowState || { isOpen: false, zIndex: 0, isMinimized: false, isMaximized: false };

    const ref = useRef<HTMLElement>(null)


    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = "block"
      gsap.fromTo(el, { scale: 0.8, opacity: 0, y: 40 }, { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })

    }, [isOpen])

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMaximized) return; // Disable drag if maximized
      const [instance] = Draggable.create(el, { onPress: () => focusWindow(windowKey as any) })
      return () => instance.kill()
    }, [isOpen, isMaximized])

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = (isOpen && !isMinimized) ? "block" : "none"
    }, [isOpen, isMinimized])


    if (!isOpen) return null;

    const maximizedStyle: React.CSSProperties = isMaximized ? {
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      transform: "none",
      borderRadius: 0
    } : {};

    return (<section id={windowKey} ref={ref} style={{ zIndex, ...maximizedStyle }} className="absolute">
      <Component {...props} windowKey={windowKey} />

    </section>)
  }

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`

  return Wrapped
}

export default WindowWrapper