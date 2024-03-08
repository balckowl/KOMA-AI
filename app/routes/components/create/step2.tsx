import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { useAuth } from "@clerk/remix"
import { FormEvent, useState } from "react"
import { Button } from "~/components/ui/button"
import { motion } from 'framer-motion'
import Posting from '../base/posting';

const Step2 = ({ setStep, yonkoma, setYonkoma, postId }: { setStep: any, yonkoma: any, setYonkoma: any, postId: string }) => {

  const [title, setTitle] = useState<string>("")
  const { userId } = useAuth()
  const [canSubmit, setCanSubmit] = useState<boolean>(false)
  const [isFinishList, setIsFinishList] = useState<boolean[]>([false, false, false, false])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // post
  const handlePost = async (e: FormEvent) => {
    e.preventDefault()

    //投稿するロジック
    setIsLoading(true)
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/publish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: title, contents: yonkoma, postId: postId, authorId: userId })
    })

    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
    }, 3000)
  }

  const handleChangeTitle = (message: string) => {
    setTitle(message.slice(0, 15))
    // submitできるか判定2
    setCanSubmit(true)
    if (message.trim() == "") {
      setCanSubmit(false)
      return
    }
    yonkoma.forEach((koma: any) => {
      if (koma.text.trim() == "") {
        setCanSubmit(false)
        return
      }
    });
  }

  const handleChangeText = (index: number, message: string) => {
    const newYonkoma = [...yonkoma]
    newYonkoma[index].text = message.slice(0, 30)
    setYonkoma(newYonkoma)
    // submitできるか判定1
    setCanSubmit(true)
    if (title.trim() == "") {
      setCanSubmit(false)
      return
    }
    newYonkoma.forEach((koma: any) => {
      if (koma.text.trim() == "") {
        setCanSubmit(false)
        return
      }
    });
  }

  const finishAnimate = (index: number) => {
    let newIsFinishList = [...isFinishList]
    newIsFinishList[index] = true
    setIsFinishList(newIsFinishList)
  }

  if (isLoading) {
    return <Posting />
  }

  return (
    <div className="container">
      <div>
        <form onSubmit={handlePost} className="flex justify-center flex-col items-center mt-20">
          <div className="border-black border-2 p-6 md:p-12 w-[100%] max-w-[800px] h-[400px] md:h-[500px] overflow-y-scroll mb-4 bg-slate-50">
            <h3 className="border-black border-[2px] mb-5 bg-white ">
              <input
                type="text"
                placeholder="タイトルを決めてください"
                value={title}
                onChange={(e) => handleChangeTitle(e.target.value)}
                className="text-xl focus:outline-0 w-full p-3 md:p-6 bg-transparent text-center"
                maxLength={15}
              />
            </h3>
            {yonkoma.map((koma: any, index: number) => (
              <div className=" border-black border-[2px] mb-5 bg-white" key={index}>
                <div className="flex justify-start items-center gap-3 p-2">
                  <div className="text-[14px] w-full h-max md:h-[54px]  bg-transparent resize-none overflow-hidden">
                    {isFinishList[index] ? (
                      // アニメーションが終わった
                      <textarea
                        value={koma.text}
                        id={`text${index}`}
                        onChange={(e) => handleChangeText(index, e.target.value)}
                        placeholder="このコマに合うテキストを入力してください。"
                        className="w-full focus:outline-none resize-none overflow-hidden text-xl lg:text-2xl"
                        rows={2}
                        maxLength={30}
                      />
                    ) : (
                      // アニメーションが終わっていない
                      <div className="flex flex-wrap">
                        {koma.text.split("").map((word: any, jndex: number) => (
                          <motion.p
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index == 0 ? 0.5 : 0) + jndex * 0.05 }}
                            key={jndex}
                            onAnimationComplete={() => { jndex == koma.text.split("").length - 5 && finishAnimate(index) }}
                            className="text-xl lg:text-2xl"
                          >{word}</motion.p>
                        ))}
                      </div>
                    )}

                  </div>
                  <p className="text-[30px] pr-2 hidden sm:block">🖋 </p>

                </div>
                <div>
                  <img
                    src={koma.imageUrl}
                    className="aspect-[16/9] w-[100%] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* 送信ボタン */}
          <Dialog>
            <DialogTrigger
              disabled={!canSubmit}
              className={`
                bg-blue-400 text-white px-4 py-2 border-2 border-blue-400 rounded-lg cursor-pointer transition-all
                ${!canSubmit ? "opacity-60 " : "hover:bg-white hover:text-blue-400"}
                `}
            >
              投稿する
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>本当に投稿しますか</DialogTitle>
                <p className="text-sm">投稿したら編集できません</p>
                <img src="/images/create/posting.jpg" className="w-[50%] mx-auto py-10" />
                <DialogDescription className="flex justify-around">
                  <Button
                    onClick={handlePost}
                    className="bg-blue-400 px-4 py-2 border-2 border-blue-400 rounded-lg cursor-pointer hover:bg-white hover:text-blue-400"
                  >はい</Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div className="w-max mx-auto pt-10 pb-20">
          </div>
        </form>
      </div >
    </div >
  )
}

export default Step2