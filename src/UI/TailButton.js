

export default function TailButton({cation, color,handleClick}) {
  const btColor={
    'zinc': 'bg-zinc-500',
    'gray': 'bg-gray-600',
    'slate': 'bg-slate-700'
  }
  const btColorHover={
    'zinc': 'hover:bg-zinc-200',
    'gray': 'hover:bg-gray-300',
    'slate': 'hover:bg-slate-400',
  }
  return (
    <button className={`inline-flex justify-center items-center
                        p-3 mx-2 bg-
                       ${btColor[color]} text-white
                       ${btColorHover[color]} font-bold
                        rounded-md
                        `}
                onClick={handleClick}>
      {cation}
    </button>
  )
}
