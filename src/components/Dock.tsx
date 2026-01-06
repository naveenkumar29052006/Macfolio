import { dockApps, locations } from '#constants/index'
import { useGSAP } from '@gsap/react'
import { useRef, useState, useEffect } from 'react'
import { Tooltip } from 'react-tooltip'
import gsap from 'gsap'
import useWindowStore from '#store/window'
import useLocationStore from '#store/location'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

const Dock = () => {
    const { openWindow, focusWindow, minimizeWindow, closeWindow, windows } = useWindowStore()
    const { setActiveLocation } = useLocationStore()
    const dockRef = useRef<HTMLDivElement>(null)
    const [activeContextApp, setActiveContextApp] = useState<string | null>(null);

    useGSAP(() => {
        const dock = dockRef.current
        if (!dock) { return }

        const icons: NodeListOf<HTMLButtonElement> = dock.querySelectorAll(".dock-icon")

        const animateIcons = (mouseX: number) => {
            const { left } = dock.getBoundingClientRect()

            icons.forEach((icon) => {
                const { left: iconleft, width } = icon.getBoundingClientRect();

                const center = iconleft - left + width / 2;
                const distance = Math.abs(mouseX - center)

                const intensity = Math.exp(-(distance ** 2.5) / 20000)

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out"

                })
            })

        }

        const handleMousemouse = (e: MouseEvent) => {

            const { left } = dock.getBoundingClientRect()
            animateIcons(e.clientX - left)

        }

        const resetIcons = () => {
            return icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power1.out"
                })
            })

        }

        dock.addEventListener("mousemove", handleMousemouse)
        dock.addEventListener("mouseleave", resetIcons)

        return () => {
            dock.removeEventListener("mousemove", handleMousemouse)
            dock.removeEventListener("mouseleave", resetIcons)
        }
    }, [])

    const toggleApp = (app: typeof dockApps[number]) => {
        if (!app.canOpen) return;

        if (app.id === "trash") {
            setActiveLocation(locations.trash);
            if (windows.finder.isOpen) {
                focusWindow("finder");
            } else {
                openWindow("finder");
            }
            return;
        }

        const window = windows[app.id as keyof typeof windows];

        if (window?.isOpen) {
            focusWindow(app.id as keyof typeof windows)
        } else {
            openWindow(app.id as keyof typeof windows)
        }
    }

    const handleContextMenu = (e: React.MouseEvent, appId: string) => {
        e.preventDefault();
        setActiveContextApp(appId);
    };

    useEffect(() => {
        const handleClickOutside = () => setActiveContextApp(null);
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    const handleAction = (action: "close" | "min" | "show", appId: string) => {
        const key = appId as keyof typeof windows;
        if (action === "close") closeWindow(key);
        if (action === "min") minimizeWindow(key);
        if (action === "show") !windows[key]?.isOpen ? openWindow(key) : focusWindow(key);
        setActiveContextApp(null);
    }


    return (
        <section id="dock">
            <div ref={dockRef} className='dock-container'>
                {dockApps.map((app) => (
                    <div key={app.name} className={"relative flex justify-center group/icon"}>


                        <button

                            type='button'
                            className='dock-icon'
                            aria-label={app.name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={app.name}
                            data-tooltip-delay-show={150}
                            disabled={!app.canOpen}
                            onClick={() => toggleApp(app)}
                            onContextMenu={(e) => app.canOpen ? handleContextMenu(e, app.id) : undefined}
                        >
                            <img src={`/images/${app.icon}`} alt={app.name} loading='lazy'
                                className={app.canOpen ? "" : "opacity-60"}
                            />

                            {/* Dot indicator for open apps */}
                            {app.canOpen && windows[app.id as keyof typeof windows]?.isOpen && (
                                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-black/60 rounded-full" />
                            )}
                        </button>

                        {/* Context Menu */}
                        <AnimatePresence>
                            {activeContextApp === app.id && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: -50 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    transition={{ duration: 0.1 }}
                                    className="absolute bottom-20 left-1/2 -translate-x-1/2 w-44 bg-white/90 backdrop-blur-2xl border border-gray-200/50 rounded-xl p-1.5 shadow-2xl z-50 text-black flex flex-col gap-0.5 origin-bottom font-medium font-georama"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button onClick={() => handleAction("show", app.id)} className="text-left px-3 py-1.5 text-xs rounded-lg hover:bg-blue-500 hover:text-white transition-colors w-full">
                                        Open
                                    </button>
                                    <button onClick={() => handleAction("min", app.id)} className="text-left px-3 py-1.5 text-xs rounded-lg hover:bg-blue-500 hover:text-white transition-colors w-full">
                                        Hide
                                    </button>
                                    <div className="h-px bg-gray-200 my-1 mx-1" />
                                    <button onClick={() => handleAction("close", app.id)} className="text-left px-3 py-1.5 text-xs rounded-lg hover:bg-blue-500 hover:text-white transition-colors w-full">
                                        Quit
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                ))}

                <Tooltip id="dock-tooltip" place="top" className='tooltip' />
            </div>

        </section>

    )
}

export default Dock