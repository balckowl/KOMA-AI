import { useState } from "react"
import Header from "./components/base/header"

// components
import Step1 from "./components/create/step1";
import Step2 from "./components/create/step2";
import Step3 from "./components/create/step3";


const Create = () => {
  const [step, setStep] = useState<number>(0);
  const [yonkoma, setYonkoma] = useState([
    { panel: "1コマ目：公園のブランコで遊ぶ女の子。楽しそうではない様子。", image: "/images/create/no-image.png" },
    { panel: "2コマ目：公園のブランコで遊ぶ女の子。楽しそうではない様子。", image: "/images/create/no-image.png" },
    { panel: "3コマ目：公園のブランコで遊ぶ女の子。楽しそうではない様子。", image: "/images/create/no-image.png" },
    { panel: "4コマ目：公園のブランコで遊ぶ女の子。楽しそうではない様子。", image: "/images/create/no-image.png" },
  ])
  const [postId, setPostId] = useState<string>("")


  return (
    <div className="relative min-h-[100vh] h-max">
      <Header />
      <div className="container">
        {step === 0 ? (
          <Step1 setStep={setStep} setYonkoma={setYonkoma} setPostId={setPostId} />
        ) : step === 1 ? (
          <Step2 setStep={setStep} yonkoma={yonkoma} setYonkoma={setYonkoma} postId={postId} />
        ) : step === 2 && (
          <Step3 />
        )}
      </div>

      {/* footer */}
      <div className="absolute bottom-0 w-full text-center">
        <small> ©2024 created by よんこまくりえいたーず</small>
      </div>
    </div>
  )
}

export default Create