import { Search } from "lucide-react"
import WindowControlers from "#components/WindowControlers"
import WindowWrapper from "#hoc/WindowWrapper"
import { locations } from "#constants/index"
import useLocationStore from "#store/location"
import useWindowStore from "#store/window"
import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { useRef } from "react"

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore()
    const { openWindow } = useWindowStore()
    const containerRef = useRef(null)

    const handleItemClick = (item: any) => {
        if (item.kind === "folder") {
            setActiveLocation(item)
        } else {
            switch (item.fileType) {
                case "url":
                    window.open(item.href, "_blank")
                    break
                case "txt":
                    openWindow("txtfile", item)
                    break
                case "img":
                    openWindow("imgfile", item)
                    break
                case "pdf":
                    if (item.name.includes("Resume")) openWindow("resume")
                    break
            }
        }
    }

    return (
        <>
            <div id="window-header">
                <WindowControlers windowKey="finder" />
                <Search className="icon"></Search>
                <h2>Finder</h2>
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3>Favorites</h3>
                        <ul>
                            {Object.values(locations).map((item) => (
                                <li key={item.id} onClick={() => setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? "active" : "non-active")}>
                                    <img src={item.icon} className="w-4" alt={item.name} />
                                    <p className="text-sm font-medium truncate">{item.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Work</h3>
                        <ul>
                            {locations.work.children.map((item) => (
                                <li key={item.id} onClick={() => setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? "active" : "non-active")}>
                                    <img src={item.icon} className="w-4" alt={item.name} />
                                    <p className="text-sm font-medium truncate">{item.name}</p>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

                <div className="flex-1 bg-white p-4 overflow-y-auto relative" ref={containerRef}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeLocation.id}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="w-full h-full"
                        >
                            {activeLocation.children?.map((child: any) => (
                                <motion.div
                                    key={child.id}
                                    drag
                                    dragMomentum={false}
                                    dragConstraints={containerRef}
                                    whileDrag={{ scale: 1.05, zIndex: 10 }}
                                    onClick={() => handleItemClick(child)}
                                    className={`absolute flex flex-col items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors group w-24 ${child.position}`}
                                >
                                    <img src={child.icon} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform select-none pointer-events-none" alt={child.name} />
                                    <span className="text-xs text-center text-gray-600 font-medium break-words w-full select-none">{child.name}</span>
                                </motion.div>
                            )) || (
                                    <div className="flex items-center justify-center h-full text-gray-400">
                                        No items
                                    </div>
                                )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, "finder")

export default FinderWindow
