import WindowControlers from "#components/WindowControlers";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ImgFile = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data as any;

    if (!data) return null;

    return (
        <div className="flex flex-col h-full w-full bg-black rounded-lg overflow-hidden">
            <div id="window-header" className="bg-gray-800 text-white border-none">
                <WindowControlers windowKey="imgfile" />
                <h2 className="text-gray-300">{data.name}</h2>
            </div>
            <div className="flex-1 flex items-center justify-center bg-black/90 p-4">
                <Zoom>
                    <img
                        src={data.imageUrl || data.icon} // Fallback to icon if imageUrl missing
                        alt={data.name}
                        className="max-h-[80vh] max-w-full object-contain shadow-2xl"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </Zoom>
            </div>
        </div>
    )
}

export default WindowWrapper(ImgFile, "imgfile");
