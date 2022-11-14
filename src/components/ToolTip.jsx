
const ToolTip = ({text}) => {

  return (
    <span 
      className="tooltiptext p-2 bg-sky-100 text-stone-500 rounded-md text-center z-10 invisible w-24 text-xs absolute bottom-full left-1/4 -ml-24">
        {text}
      </span>
  )

}

export default ToolTip
