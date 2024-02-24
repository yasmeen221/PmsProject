import { createContext, useContext, useRef, useEffect, useState } from "react"
import icons from "../../themes/icons.js"


const AccordionContext = createContext()

// eslint-disable-next-line react/prop-types
export default function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  )
}

// eslint-disable-next-line react/prop-types
export function AccordionItem({ children, backgroundColor, content , value,trigger, ...props  }) {
  const { selected, setSelected } = useContext(AccordionContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className={`p-7 border-1 border-solid border-[rgba(239,239,245,1)] rounded-md gap-24" h-${open ? '[447px]' : '[48px]'}  justify-between items-center p-24 font-medium `} {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        <div className="flex justify-between items-center ">
          <div className={`w-12 h-12 ${backgroundColor}  rounded-buttonRadius mr-4 flex  justify-center items-center text-fontColor-whiteBaseColor font-bold`}>
          {content}
          </div>
        {trigger}
        </div>
        <icons.ArrowDownBlack
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}




