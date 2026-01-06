import dayjs from 'dayjs';
import { navLinks } from '#constants/index.ts';
import useWindowStore from '#store/window';
import { useState, useRef, useEffect } from 'react';
import { Wifi, Bluetooth, Search, User, ChevronRight, Lock, Battery, Headphones, Mouse } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
  const { openWindow } = useWindowStore()

  const [wifiOpen, setWifiOpen] = useState(false);
  const [btOpen, setBtOpen] = useState(false);

  const [wifiConnected, setWifiConnected] = useState(true);
  const [btConnected, setBtConnected] = useState(true);

  // Close menus on click outside
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setWifiOpen(false);
        setBtOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef}>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className='font-bold'>Naveen 's Portfolio</p>

        <ul>
          {
            navLinks.map(({ id, name, type }) => (
              <li key={id} onClick={() => openWindow(type)}>
                <p>{name}</p>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="flex items-center gap-2">
        {/* Wifi */}
        <div className="relative">
          <button
            onClick={() => { setWifiOpen(!wifiOpen); setBtOpen(false); }}
            className={clsx("p-1.5 rounded-md transition-colors", wifiOpen ? "bg-gray-200" : "hover:bg-gray-200")}
          >
            <Wifi size={18} className="text-black" />
          </button>

          <AnimatePresence>
            {wifiOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-10 right-0 w-80 bg-white/90 backdrop-blur-2xl border border-gray-200/50 rounded-2xl shadow-2xl p-2.5 z-50 text-black font-sans select-none"
              >
                <div className="flex items-center justify-between px-2 py-2 mb-1">
                  <span className="text-sm font-semibold tracking-wide">Wi-Fi</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={wifiConnected} onChange={() => setWifiConnected(!wifiConnected)} className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="px-2 py-1 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">Known Network</div>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-100/50 hover:bg-blue-500/10 rounded-lg cursor-pointer transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-sm">
                      <Wifi size={12} />
                    </div>
                    <span className="text-[13px] font-medium">Naveen.wifi</span>
                  </div>
                  <Lock size={12} className="text-gray-400" />
                </div>

                <div className="h-px bg-gray-200 my-2" />

                <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                  <span className="text-[13px] font-medium">Other Networks</span>
                  <ChevronRight size={14} className="text-gray-400" />
                </div>

                <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                  <span className="text-[13px] font-medium">Wi-Fi Settings...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bluetooth */}
        <div className="relative">
          <button
            onClick={() => { setBtOpen(!btOpen); setWifiOpen(false); }}
            className={clsx("p-1.5 rounded-md transition-colors", btOpen ? "bg-gray-200" : "hover:bg-gray-200")}
          >
            <Bluetooth size={18} className="text-black" />
          </button>

          <AnimatePresence>
            {btOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-10 right-0 w-80 bg-white/90 backdrop-blur-2xl border border-gray-200/50 rounded-2xl shadow-2xl p-2.5 z-50 text-black font-sans select-none"
              >
                <div className="flex items-center justify-between px-2 py-2 mb-1">
                  <span className="text-sm font-semibold tracking-wide">Bluetooth</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={btConnected} onChange={() => setBtConnected(!btConnected)} className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <div className="px-2 py-1 text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-1">Devices</div>

                <div className="space-y-0.5">
                  {/* Connected Device */}
                  <div className="flex items-center justify-between px-3 py-2 bg-blue-500/10 rounded-lg cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-sm">
                        <Headphones size={12} fill="currentColor" />
                      </div>
                      <span className="text-[13px] font-medium text-gray-900">realme Buds T310</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-500 font-medium">55%</span>
                      <Battery size={14} className="text-gray-400 rotate-90" />
                    </div>
                  </div>

                  {/* Other Devices */}
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors opacity-60 hover:opacity-100">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <Headphones size={12} />
                    </div>
                    <span className="text-[13px] font-medium">Galaxy Buds2 Pro</span>
                  </div>

                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors opacity-60 hover:opacity-100">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <Headphones size={12} />
                    </div>
                    <span className="text-[13px] font-medium">Nirvana Space</span>
                  </div>

                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors opacity-60 hover:opacity-100">
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <Mouse size={12} />
                    </div>
                    <span className="text-[13px] font-medium">Toad One Plus</span>
                  </div>
                </div>

                <div className="h-px bg-gray-200 my-2" />

                <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                  <span className="text-[13px] font-medium">Bluetooth Settings...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Other Icons (Static for now) */}
        <button className="p-1.5 hover:bg-gray-200 rounded-md">
          <Search size={18} />
        </button>
        <button className="p-1.5 hover:bg-gray-200 rounded-md">
          <User size={18} />
        </button>

        <ul>
          <time>{dayjs().format('ddd MMM D h:mm A')}</time>
        </ul>


      </div>



    </nav>
  )
}

export default Navbar