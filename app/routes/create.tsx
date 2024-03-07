import { useState } from "react"
import Header from "./components/base/header"

// components
import Step1 from "./components/create/step1";
import Step2 from "./components/create/step2";
import Step3 from "./components/create/step3";
import { MetaFunction } from "@remix-run/node";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "KOM-4i" },
//     { name: "description", content: "4コマ漫画をAIで作れるサイト" },
//     { property: "og:url", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/create`},
//     { property: "og:title", content: "create | KOM-4i"},
//     { property: "og:image", content: `${import.meta.env.VITE_REMIX_PUBLIC_URL}/images/ogp/ogp.png`},
//     { property: "og:site_name", content: "作品を作る"},
//   ]
// };

const Create = () => {
  const [step, setStep] = useState<number>(0);
  const [yonkoma, setYonkoma] = useState<any>([
    { text: "1コマ目：公園のブランコで遊ぶ女の子。楽しそうではない様子。", imageUrl: "/images/create/no-image.png" },
    { text: "2コマ目：公園のブランコで遊ぶ女の子。楽しそうではない様子。", imageUrl: "/images/create/no-image.png" },
    { text: "3コマ目：公園のブランコで遊ぶ女の子。楽しそうではない様子。", imageUrl: "/images/create/no-image.png" },
    { text: "4コマ目：公園のブランコで遊ぶ女の子。楽しそうではない様子。", imageUrl: "/images/create/no-image.png" },
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