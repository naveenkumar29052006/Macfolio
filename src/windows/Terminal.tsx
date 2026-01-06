import { techStack } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import WindowControlers from "#components/WindowControlers";

const Terminal = ({ windowKey }: any) => {
  return (
    <>

      <div id="window-header">
        <WindowControlers windowKey={windowKey} />
        <h2>Tech Stack </h2>

      </div>

      <div className="techstack">
        <p>
          <span className="font-bold"> @naveen% </span>
          show techstack
        </p>

        <div className="label">
          <p className="min-w-[140px]"> Category  </p>
          <p>Technologies</p>

        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-0">
              <div className="flex items-center min-w-[140px]">
                <Check className="check mr-2" size={20} />
                <h3 className="font-bold text-green-400">{category}</h3>
              </div>
              <ul className="flex flex-wrap gap-1 flex-1">
                {items.map((item, index) => (
                  <li key={index} className="whitespace-nowrap">
                    {item}{index < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>

            </li>
          ))}

        </ul>

        <div className="footnote">
          <p><Check size={20} />
            5 of 5 Tech Stack loaded successfully(100%)
          </p>

          <p className="text-black">
            <Flag size={15} fill="black" />
            Render time : 6ms


          </p>

        </div>



      </div>


    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, "terminal")

export default TerminalWindow