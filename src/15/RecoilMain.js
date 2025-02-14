import { RecoilRoot } from "recoil"
import Rdiv1 from "./Rdiv1"

export default function RecoilMain() {
  return (
    <RecoilRoot>
    <div className="w-full h-full flex flex-col justify-center items-center">
      Rmain
      <Rdiv1/>
    </div>
    </RecoilRoot>
  )
}
