import WindowControlers from "#components/WindowControlers";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const TxtFile = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data as any;

    if (!data) return null;

    return (
        <div className="flex flex-col h-full w-full bg-white rounded-lg">
            <div id="window-header">
                <WindowControlers windowKey="txtfile" />
                <h2>{data.name}</h2>
            </div>
            <div className="flex-1 p-10 overflow-auto font-sans text-sm leading-relaxed text-gray-600 bg-white selection:bg-blue-100">
                {Array.isArray(data.description) ? (
                    <div className="max-w-3xl mx-auto space-y-1">
                        {data.description.map((line: string, i: number) => {
                            // Check if line is a header (all caps or ends with :)
                            const isHeader = line.trim().endsWith(":") || (line.trim().length > 0 && line === line.toUpperCase() && !line.includes("•"));

                            if (isHeader) {
                                return (
                                    <h3 key={i} className="text-gray-900 font-bold text-xs uppercase tracking-wider mt-6 mb-2 first:mt-0">
                                        {line.replace(":", "")}
                                    </h3>
                                );
                            }

                            // Check for list items
                            if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
                                return (
                                    <p key={i} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full text-gray-700">
                                        {line.replace(/^[•-]\s*/, "")}
                                    </p>
                                );
                            }

                            // Empty lines for spacing
                            if (!line.trim()) {
                                return <div key={i} className="h-2"></div>;
                            }

                            return <p key={i} className="text-gray-600">{line}</p>;
                        })}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 italic">
                        <p>{data.subtitle || "No content available"}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WindowWrapper(TxtFile, "txtfile");
