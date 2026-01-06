import WindowWrapper from "#hoc/WindowWrapper";
import WindowControlers from "#components/WindowControlers";
import { ArrowLeft, ArrowRight, Shield, Share, Plus, Copy, RotateCw } from "lucide-react";

const Safari = ({ windowKey }: { windowKey: any }) => {
    return (
        <div className="flex flex-col h-full w-full bg-white rounded-lg overflow-hidden font-sans">
            {/* Safari Header */}
            <div className="bg-[#f2f2f2] p-3 flex items-center gap-4 border-b border-gray-300 relative z-20">
                <WindowControlers windowKey={windowKey} />

                <div className="flex gap-6 text-gray-500 ml-4">
                    <ArrowLeft size={16} className="cursor-pointer hover:text-black" />
                    <ArrowRight size={16} className="cursor-pointer hover:text-black" />
                </div>

                <div className="flex-1 flex justify-center px-4">
                    {/* Search Bar */}
                    <div className="bg-white rounded-lg py-1.5 px-3 flex items-center gap-2 w-full max-w-xl shadow-sm border border-gray-200 group focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                        <Shield size={12} className="text-gray-400 group-focus-within:hidden" />
                        <input
                            type="text"
                            defaultValue="Search or enter website name"
                            className="bg-transparent outline-none flex-1 text-sm text-center text-gray-500 placeholder-gray-400 group-focus-within:text-left group-focus-within:text-black"
                        />
                        <RotateCw size={12} className="text-gray-400 group-focus-within:hidden opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                <div className="flex gap-5 text-gray-500">
                    <Share size={16} className="cursor-pointer hover:text-black" />
                    <Plus size={16} className="cursor-pointer hover:text-black" />
                    <Copy size={16} className="cursor-pointer hover:text-black" />
                </div>
            </div>

            {/* Safari Content */}
            <div className="flex-1 overflow-y-auto w-full custom-scrollbar bg-white">
                <div className="max-w-4xl mx-auto px-8 py-16">

                    {/* Hero Section */}
                    <div className="mb-20 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-blue-600 font-medium tracking-wide uppercase text-sm">Full Stack Developer</h2>
                            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                                Hi, I'm Naveen Kumar.
                            </h1>
                        </div>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            I build accessible, pixel-perfect, and performant web applications.
                            Skilled in JavaScript, TypeScript, MERN, Next.js, and Python.
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 pt-3">
                            <a href="mailto:naveen.kumar2024@nst.rishihood.edu.in" className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                                Email Me
                            </a>
                        </div>

                        {/* Ratings & Socials */}
                        <div className="pt-4 space-y-3">
                            {/* Ratings Badge Row */}
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-700 rounded-lg text-xs font-semibold border border-yellow-200">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png" alt="LeetCode" className="w-4 h-4 object-contain" />
                                    <span>LeetCode Rating:</span>
                                    <span className="text-yellow-800">1400+</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-200">
                                    <img src="https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-icon-filled-256.png?v=1714773964567" alt="Codeforces" className="w-4 h-4 object-contain" />
                                    <span>Codeforces Rating:</span>
                                    <span className="text-blue-800">900+</span>
                                </div>
                            </div>

                            {/* Social Text Links */}
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                                <a href="https://www.linkedin.com/in/naveen-kumar-4217931ab/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors font-medium">LinkedIn</a>
                                <a href="https://github.com/naveenkumar29052006" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors font-medium">GitHub</a>
                                <a href="https://leetcode.com/u/naveenkumar29052005/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors font-medium">LeetCode</a>
                                <a href="https://codeforces.com/profile/naveenkumar2005" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-black transition-colors font-medium">Codeforces</a>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <section>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-blue-600 block"></span>
                            Experience
                        </h3>

                        <div className="grid gap-8">
                            {/* Experience Card */}
                            <div className="group relative border-l-2 border-gray-100 pl-8 hover:border-blue-600 transition-colors duration-300">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-100 group-hover:bg-blue-600 transition-colors duration-300 border-2 border-white"></div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                    <h4 className="text-xl font-bold text-gray-900">Full Stack Developer</h4>
                                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        May 2025 - Sep 2025
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <span className="text-blue-600 font-medium">Advit Itec</span>
                                    <span className="text-gray-400 mx-2">•</span>
                                    <span className="text-gray-500 text-sm">Remote</span>
                                </div>

                                <ul className="space-y-3 text-gray-600 leading-relaxed">
                                    <li className="flex gap-2 items-start">
                                        <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                                        <span>Built a responsive single-page React app with multi-step onboarding forms and automated proposal generation.</span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                                        <span>Developed secure admin panel with environment-based authentication and MySQL persistence.</span>
                                    </li>
                                    <li className="flex gap-2 items-start">
                                        <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                                        <span>Integrated WhatsApp/Email APIs and Cloudinary for seamless proposal sharing.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
                        <p>© 2026 Naveen Kumar. Built with React & Tailwind.</p>
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default WindowWrapper(Safari, "safari");
