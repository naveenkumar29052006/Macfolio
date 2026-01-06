import WindowControlers from "#components/WindowControlers";
import { photosLinks } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";
import clsx from "clsx";
import { useState } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Photos = () => {
    const [activeTab, setActiveTab] = useState("Library");

    return (
        <div className="bg-white h-full w-full rounded-lg flex flex-col overflow-hidden">
            <div id="window-header">
                <WindowControlers windowKey="photos" />
                <h2>Photos</h2>
            </div>

            <div className="flex h-full">
                {/* Sidebar */}
                <div className="w-48 bg-gray-50 border-r border-gray-200 pt-4 flex flex-col">
                    <span className="px-4 text-xs font-semibold text-gray-400 mb-2">Photos</span>
                    <ul>
                        {photosLinks.map((link) => (
                            <li
                                key={link.id}
                                onClick={() => setActiveTab(link.title)}
                                className={clsx(
                                    "flex items-center gap-3 px-4 py-1.5 cursor-pointer mx-2 rounded-md transition-colors",
                                    activeTab === link.title ? "bg-blue-500 text-white" : "hover:bg-gray-200 text-gray-700"
                                )}
                            >
                                <img
                                    src={link.icon}
                                    className={clsx("w-4 h-4", activeTab === link.title ? "brightness-200 invert" : "")}
                                    alt={link.title}
                                />
                                <span className="text-sm font-medium">{link.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 overflow-y-auto bg-white">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">{activeTab}</h1>

                    {activeTab === "Library" ? (
                        <div className="columns-2 md:columns-3 gap-4 space-y-4">
                            {/* Dynamic Gallery Loading */}
                            {(() => {
                                // Using relative path to avoid alias resolution issues in glob
                                const galleryImages = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true });
                                const dynamicGallery = Object.entries(galleryImages).map(([path, module]: [string, any], index) => ({
                                    id: index + 1,
                                    img: module.default,
                                    title: path.split('/').pop()
                                }));

                                return dynamicGallery.length > 0 ? (
                                    dynamicGallery.map((item) => (
                                        <div key={item.id} className="break-inside-avoid rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <Zoom>
                                                <img
                                                    src={item.img}
                                                    alt={`Gallery ${item.id}`}
                                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                            </Zoom>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center text-gray-400">
                                        <p className="mb-2">No photos found.</p>
                                        <p className="text-xs">Add images to <code>src/assets/gallery</code></p>
                                    </div>
                                );
                            })()}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                            <p>No photos in {activeTab}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WindowWrapper(Photos, "photos");
