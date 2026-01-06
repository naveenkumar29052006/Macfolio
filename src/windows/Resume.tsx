import WindowControlers from "#components/WindowControlers";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import { useEffect, useRef, useState } from "react";

import useWindowStore from "#store/window";

const Resume = () => {
    console.log("Resume component rendering");
    const parentRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(700);
    const { windows } = useWindowStore();
    const isMaximized = windows.resume?.isMaximized;

    useEffect(() => {
        if (!parentRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentRect.width) {
                    setWidth(entry.contentRect.width);
                }
            }
        });

        resizeObserver.observe(parentRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className={`flex flex-col bg-white rounded-lg transition-all duration-300 ${isMaximized ? "w-full h-full rounded-none" : "w-[60vw] h-[85vh]"}`}>
            <div id="window-header">
                <WindowControlers windowKey="resume" />
                <h2>Resume.pdf</h2>

                <a href="/files/resume.pdf" download="Resume.pdf" className="cursor-pointer" title="Download Resume">
                    <Download className="icon" />
                </a>


            </div>
            <div ref={parentRef} className="flex justify-center overflow-auto h-full w-full">
                <Document file="/files/resume.pdf">
                    <Page pageNumber={1} width={width ? width * 0.9 : 700} renderTextLayer renderAnnotationLayer />
                </Document>
            </div>

        </div>

    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow