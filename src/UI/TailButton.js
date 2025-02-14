
 
export default function TailButton({caption, color,handleClick, size}) {
  const btColor={
    'zinc': 'bg-zinc-500',
    'gray': 'bg-gray-500',
    'slate': 'bg-slate-500'
  }
  const btColorHover={
    'zinc': 'hover:bg-zinc-400',
    'gray': 'hover:bg-gray-300',
    'slate': 'hover:bg-slate-400',
  }
  return (
    <button className={`inline-flex justify-center items-center
                        p-3 mx-2 bg-
                       ${btColor[color]} text-white
                       ${btColorHover[color]} font-bold
                        rounded-md
                       ${size ? size :""}
                        `}
                onClick={handleClick}>
      {caption}
    </button>
  )
}
