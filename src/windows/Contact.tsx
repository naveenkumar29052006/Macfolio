import clsx from "clsx";

import WindowControlers from "#components/WindowControlers";
import { socials } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
    return (
        <div className="bg-white h-full w-full rounded-lg flex flex-col overflow-hidden">
            <div id="window-header">
                <WindowControlers windowKey="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="flex-1 p-8 overflow-y-auto">
                <div className="flex flex-col gap-6 max-w-2xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect</h1>
                            <p className="text-gray-600 mb-2">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                            <a href="mailto:naveen.kumar2024@nst.rishihood.edu.in" className="text-gray-900 font-medium hover:underline">
                                naveen.kumar2024@nst.rishihood.edu.in
                            </a>
                        </div>
                    </div>

                    {/* Social Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {socials.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-col justify-between p-4 h-32 rounded-lg transition-transform hover:scale-105 active:scale-95 text-white shadow-sm"
                                style={{ backgroundColor: item.bg }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.text}
                                    className={clsx("w-8 h-8", item.text !== "Telegram" && "invert brightness-0")} // Keep Telegram original color
                                />
                                <span className="font-semibold">{item.text}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WindowWrapper(Contact, "contact");
