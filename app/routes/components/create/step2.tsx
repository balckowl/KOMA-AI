import { useAuth } from "@clerk/remix"
import { FormEvent, useState } from "react"
import { Button } from "~/components/ui/button"
import { motion } from 'framer-motion'

const Step2 = ({ setStep, yonkoma, setYonkoma, postId }: { setStep: any, yonkoma: any, setYonkoma: any, postId: string }) => {

  const [title, setTitle] = useState<string>("")
  const { userId } = useAuth()
  const [canSubmit, setCanSubmit] = useState<boolean>(false)
  const [isFinishList, setIsFinishList] = useState<boolean[]>([false, false, false, false])
  // post
  const handlePost = async (e: FormEvent) => {
    e.preventDefault()

    //投稿するロジック
    const res = await fetch("http://localhost:3000/api/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: title, yonkoma: yonkoma, postId: postId, userId: userId })
    })

    setStep(2)
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
      if (koma.panel.trim() == "") {
        setCanSubmit(false)
        return
      }
    });
  }

  const handleChangeText = (index: number, message: string) => {
    const newYonkoma = [...yonkoma]
    newYonkoma[index].panel = message.slice(0, 30)
    setYonkoma(newYonkoma)
    // submitできるか判定1
    setCanSubmit(true)
    if (title.trim() == "") {
      setCanSubmit(false)
      return
    }
    newYonkoma.forEach((koma: any) => {
      if (koma.panel.trim() == "") {
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

  return (
    <div className="container">
      <div>
        <form onSubmit={handlePost} className="flex justify-center flex-col items-center mt-20">
          <div className="border-black border-2 p-6 md:p-12 w-[100%] max-w-[800px] h-[400px] md:h-[500px] overflow-y-scroll mb-4 bg-gray-50">
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
                <div className="flex justify-start items-center mb-3 gap-3 p-2">
                  <div className="text-[14px] w-full h-[56px] bg-transparent resize-none overflow-hidden sm:pt-[21px]">
                    {isFinishList[index] ? (
                      // アニメーションが終わった
                      <textarea
                        value={koma.panel}
                        id={`panel${index}`}
                        onChange={(e) => handleChangeText(index, e.target.value)}
                        placeholder="このコマに合うテキストを入力してください。"
                        className="w-full focus:outline-none resize-none overflow-hidden"
                        maxLength={30}
                      />
                    ) : (
                      // アニメーションが終わっていない
                      <div>
                        <div className="flex">
                          {koma.panel.split("").map((word: any, jndex: number) => (
                            <motion.p
                              viewport={{ once: true }}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: (index==0 ? 0.5 : 0) + jndex * 0.05 }}
                              key={jndex}
                              onAnimationComplete={() => {jndex==koma.panel.split("").length-5 && finishAnimate(index)}}
                            >{word}</motion.p>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                  <p className="text-[30px] pr-2 hidden sm:block">🖋 </p>

                </div>
                <div>
                  <img
                    src={koma.image}
                    className="aspect-[16/9] w-[100%] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="w-max mx-auto pt-10 pb-20">
            <Button
              type="submit"
              disabled={!canSubmit}
              className="bg-blue-400 px-4 py-2 border-2 border-blue-400 rounded-lg cursor-pointer hover:bg-white hover:text-blue-400"
            >投稿する</Button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default Step2