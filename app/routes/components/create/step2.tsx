import { useAuth } from "@clerk/remix"
import { FormEvent, useState } from "react"
import { Button } from "~/components/ui/button"
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type Inputs = {
  name: string;
  email: string;
};

const Step2 = ({ setStep, yonkoma, setYonkoma, postId }: { setStep: any, yonkoma: any, setYonkoma: any, postId: string }) => {

  const [title, setTitle] = useState<string>("")
  const { userId } = useAuth()
  const [canSubmit, setCanSubmit] = useState<boolean>(true)

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
    setTitle(message.slice(0,15))
    // submitできるか判定2
    setCanSubmit(true)
    if(message.trim() == ""){
      setCanSubmit(false)
      return
    }
    yonkoma.forEach((koma: any) => {
      if(koma.panel.trim() == ""){
        setCanSubmit(false)
        return
      }
    });
  }

  const handleChangeText = (index: number, message: string) => {
    const newYonkoma = [...yonkoma]
    newYonkoma[index].panel = message.slice(0,30)
    setYonkoma(newYonkoma)
    // submitできるか判定1
    setCanSubmit(true)
    if(title.trim() == ""){
      setCanSubmit(false)
      return
    }
    newYonkoma.forEach((koma: any) => {
      if(koma.panel.trim() == ""){
        setCanSubmit(false)
        return
      }
    });
  }
  
  return (
    <div className="container">
      <div>
        <form onSubmit={handlePost} className="flex justify-center flex-col items-center mt-20">
          <div className="border-black border-2 p-6 md:p-12 w-[100%] max-w-[800px] h-[500px] overflow-y-scroll mb-4 bg-gray-50">
            <h3 className="border-black border-[2px] mb-5 bg-white">
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
                <div className="flex justify-start items-center mb-3 gap-3 ">
                  <textarea
                    value={koma.panel}
                    id={`panel${index}`}
                    onChange={(e) => handleChangeText(index, e.target.value)}
                    placeholder="このコマに合うテキストを入力してください。"
                    className="text-lg w-full bg-transparent focus:outline-none resize-none h-[56px] sm:py-[16px] overflow-hidden pl-4"
                    maxLength={30}
                  />
                  <p className="text-[40px] pr-2">🖋 </p>

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