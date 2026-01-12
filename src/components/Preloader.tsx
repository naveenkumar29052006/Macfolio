import { motion } from "framer-motion";
import { useState } from "react";

interface PreloaderProps {
    onFinish: () => void;
}

const Preloader = ({ onFinish }: PreloaderProps) => {
    const [hasClicked, setHasClicked] = useState(false);

    const handleClick = () => {
        if (hasClicked) return;

        setHasClicked(true);
        const audio = new Audio("/files/sound.mp3");
        audio.volume = 0.5;
        audio.play().catch(e => console.error("Audio play failed", e));

        // Match the animation duration (2s) plus a small buffer
        setTimeout(() => {
            onFinish();
        }, 2200);
    };

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black cursor-pointer"
            onClick={handleClick}
        >
            {!hasClicked ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                    className="text-white font-mono text-sm tracking-widest"
                >
                    CLICK TO ENTER
                </motion.div>
            ) : (
                <>
                    <div className="mb-10 text-white">
                        {/* Apple Logo SVG */}
                        <svg
                            viewBox="0 0 384 512"
                            fill="currentColor"
                            className="w-24 h-24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                        </svg>
                    </div>

                    {/* Loading Bar Container */}
                    <div className="w-48 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </div>
                </>
            )}
        </motion.div>
    )
}

export default Preloader;
