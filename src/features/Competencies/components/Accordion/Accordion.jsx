import { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import Icons from "../../../../themes/icons";

const AccordionContext = createContext();

// eslint-disable-next-line react/prop-types
export default function Accordion({ children, value, onChange, ...rest }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...rest}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    
    </ul>
  );
}

// eslint-disable-next-line react/prop-types
export function AccordionItem({
  children,
  backgroundColor,
  content,
  value,
  paragraph,
  trigger,
  ...props
}) {
  const { selected, setSelected } = useContext(AccordionContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li
      className={`p-7 border-1 border-solid border-[rgba(239,239,245,1)] rounded-md h-${open ? "447px" : "48px"} justify-between items-center p-24 font-medium`}
      {...props}
    >
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        <div className="flex justify-between items-center">
          <div
            className={`w-12 h-12 ${backgroundColor} rounded-buttonRadius mr-4 flex justify-center items-center text-fontColor-whiteBaseColor font-bold`}
          >
            {content}
          </div>
          <div>
            {trigger}
            <div className={`flex items-center ${open ? "hidden" : ""}`}>
              <Icons.thunderIcon />
              <p className="font-captionRegWeight text-captionRegSize text-fontColor-1000 tracking-wider">
                {paragraph}
              </p>
            </div>
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`mr-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all duration-1000"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
