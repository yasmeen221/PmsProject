import { createContext, useContext, useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import Icons from "../../../../themes/icons";
import { useDispatch } from "react-redux";
import { getTeams, setCompsArr } from "../../slices/Api/getTeamComp";

const AccordionContext = createContext();

// eslint-disable-next-line react/prop-types
export default function Accordion({ children, value, onChange,...rest }) {
  const dispatch=useDispatch()
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
    if(selected!=null&&selected!="shared"){
      // console.log("dispatch action with selected")
      // console.log(selected)
      dispatch(setCompsArr([]))
      dispatch(getTeams(selected))
    }
  }, [selected]);

  return (
    <ul {...rest}  >
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
  onOpenClick,
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
        <div className="flex justify-between items-center ">
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
          className={`mr-5  transition-transform ${open ? "rotate-180" : ""}`}
          onClick={!open?onOpenClick:null}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all duration-1000 "
        style={{ height: open ? 'auto' || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
