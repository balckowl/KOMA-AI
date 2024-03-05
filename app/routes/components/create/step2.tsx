import { useAuth } from "@clerk/remix"
import { backInOut } from "framer-motion"
import { Input } from "postcss"
import { FormEvent, useState } from "react"
import { Button } from "~/components/ui/button"

const Step2 = ({ setStep, yonkoma, setYonkoma, postId }: { setStep: any, yonkoma: any, setYonkoma: any, postId: string }) => {

  const [title, setTitle] = useState<string>("")
  const [selectBtnIdx, setSelectBtnIdx] = useState<number | null>(null)
  const [inputValue, setInputValue] = useState<string>("")
  const { userId } = useAuth()

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

  const updatePanel = (index: number) => {
    const currentYonkoma = [...yonkoma]

    currentYonkoma[index].panel = inputValue

    setYonkoma(currentYonkoma)

    setSelectBtnIdx(null)
  }

  return (
    <div className="container">
      <div>
        <form onSubmit={handlePost} className="flex justify-center flex-col items-center mt-20">
          <div className="border-black border-[2px] w-max p-[50px] h-[500px] overflow-y-scroll mb-4">
            <h3 className="border-black border-[2px] p-5 mb-5">
              <input type="text" className="focus:outline-none text-black text-[20px]" placeholder="タイトルを決めよう" value={title} onChange={(e) => setTitle(e.target.value)} />
            </h3>
            {yonkoma.map((koma: any, index: number) => (
              <div className="p-3 border-black border-[2px] mb-5" key={index}>
                <div className="flex justify-between items-center mb-3 gap-3">
                  {selectBtnIdx === index ? (
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-full focus:outline-none" placeholder="このコマに合うテキストを入力してください。"/>
                  ) : (
                    <p>
                      {koma.panel}
                    </p>
                  )}
                  {selectBtnIdx === index ?
                    <Button type="button" onClick={() => updatePanel(index)}>確定する</Button> :
                    <Button type="button" onClick={() => { setSelectBtnIdx(index); setInputValue(koma.panel) }}>編集</Button>
                  }
                </div>
                <img src={koma.image} alt="" className="w-[500px] h-[300px] object-cover" />
              </div>
            ))}
          </div>
          <Button type="submit" className="w-max">投稿する</Button>
        </form>
      </div >
    </div >
  )
}

export default Step2