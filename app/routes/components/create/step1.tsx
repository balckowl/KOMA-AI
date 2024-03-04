
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import { storage } from "~/lib/firebase/client"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { useAuth, useUser } from "@clerk/remix";

const Step1 = ({ setStep }: { setStep: any }) => {
  const [files, setFiles] = useState<any>([
    null,
    null,
    null,
    null,
  ]);

  const [title, setTitle] = useState<string>("")
  const [previews, setPreviews] = useState<string[]>([
    "/images/create/no-image.png",
    "/images/create/no-image.png",
    "/images/create/no-image.png",
    "/images/create/no-image.png"
  ])
  const { userId } = useAuth();
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    if (e.target.files) {
      const newPreviews = [...previews]
      newPreviews[i] = URL.createObjectURL(e.target.files[0])
      setPreviews(newPreviews)

      const newFiles = [...files]
      newFiles[i] = e.target.files[0]
      setFiles(newFiles)
    }
  }

  const uploadPanels = async(postid: string) => {
    let urls:string[] = []
    files.map(async(file:any, i:number) => {
      const storageRef = ref(storage, `${postid}/${i}`);
      await uploadBytes(storageRef, file)
      const url = await getDownloadURL(ref(storage, `${postid}/${i}`))
      urls.push(url)
    })
    return urls
  }
  
  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault()
    const postid = uuidv4()

    // 画像をアップロードしURLを取得
    const urls = await uploadPanels(postid)

    // const res = await fetch(`${process.env.SURVER_URL}/api/post`,{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     urls: urls,
    //     postid: postid,
    //     user: userId,
    //   }),
    // })
    setStep(1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* titleを入力する */}
        <div className="w-max mx-auto my-10 text-xl">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="タイトル"
            onChange={(e) => setTitle(e.target.value)}
            className="border-b-[1px] border-black rounded-md p-1 focus:outline-none focus:border-b-[2px] focus:border-[#f24e1e]"
          />
        </div>
        {/* imgを入力するbox */}
        <div className="flex flex-wrap gap-10 w-[500px] mx-auto border-2 border-black p-6">
          {[0, 1, 2, 3].map((_, i) => (
            <div key={i}>
              <img
                src={previews[i]} alt="panel"
                onClick={() => document.getElementById(`file-input${i}`)?.click()}
                className="cursor-pointer w-[200px] h-[200px] object-cover border-[1px] border-black"
              />
              <input
                type="file"
                id={`file-input${i}`}
                name={`panel${i}`}
                onChange={(e) => handleImageChange(e, i)}
                className="hidden"
                accept="image/png, image/jpg, image/jpeg"
              />
            </div>
          ))}
        </div>
        
        <div className="w-max mx-auto my-10">
          <Button 
            type="submit" 
            className="bg-[#F6501C] px-4 py-2 border-2 border-[#F6501C] rounded-lg cursor-pointer hover:bg-white hover:text-[#F6501C]"
          >決定</Button>
        </div>

      </form>
    </div>
  )
}

export default Step1