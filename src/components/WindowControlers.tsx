import { WINDOW_CONFIG } from "#constants/index";
import useWindowStore from "#store/window";

type WindowKey = keyof typeof WINDOW_CONFIG;

interface WindowControlersProps {
  windowKey: WindowKey;
}

const WindowControlers = ({ windowKey }: WindowControlersProps) => {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();

  return (
    <div className="flex gap-2 p-2 group">
      <button
        onClick={() => closeWindow(windowKey)}
        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group-hover:block"
        aria-label="Close"
      />
      <button
        onClick={() => minimizeWindow(windowKey)}
        className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center justify-center group-hover:block"
        aria-label="Minimize"
      />
      <button
        onClick={() => maximizeWindow(windowKey)}
        className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center group-hover:block"
        aria-label="Maximize"
      />
    </div>
  );
};

export default WindowControlers;