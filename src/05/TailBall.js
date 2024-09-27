

export default function TailBall({n}) {
  const ballColor={
    'b0':' bg-red-800',
    'b1':' bg-fuchsia-900',
    'b2':' bg-amber-600',
    'b3':' bg-lime-800',
    'b4':' bg-sky-800',
  }
  return (
    <div className={`w-20 h-20 m-2
                    flex justify-center items-center
                    rounded-full 
                    ${ballColor['b'+Math.floor(n/10)]}
                    font-bold text-white text-2xl
                   `}>
      {n}
    </div>
  )
}
