import { ChangeEvent, useState } from "react"
import Header from "./components/base/header"
import { Button } from "~/components/ui/button";

// components
import Step1 from "./components/create/step1";
import Step2 from "./components/create/step2";
import Step3 from "./components/create/step3";

const Create = () => {
  const [step, setStep] = useState<number>(0);

  
  return (
    <div className="relative h-[100vh]">
      <Header />
      { step === 0 ? (
        <Step1 setStep={setStep} />
        ) : step === 1 ? (
        <Step2 setStep={setStep} />
        ) : step === 2 && (
        <Step3 setStep={setStep} />
      )}

      <div className="absolute bottom-0 w-full text-center">
        <small> ©2024 created by よんこまくりえいたーず</small>
      </div>
    </div>
  )
}

export default Create