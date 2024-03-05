import { ChangeEvent, useState } from "react"
import Header from "./components/base/header"
import { Button } from "~/components/ui/button";

// components
import Step1 from "./components/create/step1";
import Step2 from "./components/create/step2";
import Step3 from "./components/create/step3";

const Create = () => {
  const [step, setStep] = useState<number>(0);
  const [yonkoma, setYonkoma] = useState([
    { panel: "おはよう", image: "/images/create/no-image.png" },
    { panel: "こんにちは", image: "/images/create/no-image.png" },
    { panel: "こんばんは", image: "/images/create/no-image.png" },
    { panel: "さよなら", image: "/images/create/no-image.png" },
  ])
  const [postId, setPostId] = useState<string>("")


  return (
    <div className="relative h-[100vh]">
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
      <div className="absolute bottom-3 w-full text-center">
        <small> ©2024 created by よんこまくりえいたーず</small>
      </div>
    </div>
  )
}

export default Create