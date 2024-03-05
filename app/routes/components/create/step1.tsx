
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import { storage } from "~/lib/firebase/client"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { useAuth, useUser } from "@clerk/remix";
import Loading from "../base/loading";

const Step1 = ({ setStep, setYonkoma, setPostId }: { setStep: any, setYonkoma: any, setPostId: any }) => {
  const [files, setFiles] = useState<any>([
    null,
    null,
    null,
    null,
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false)
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

  const uploadPanels = async (postId: string) => {
    const uploadTasks = files.map(async (file: any, i: number) => {
      if (!file) return null; // ファイルがない場合はスキップ
      const storageRef = ref(storage, `${postId}/${i}`);
      await uploadBytes(storageRef, file);
      return getDownloadURL(ref(storage, `${postId}/${i}`));
    });

    const urls = await Promise.all(uploadTasks);
    return urls.filter(url => url !== null);
  };

  // const uploadPanels = async(postid: string) => {
  //   let urls:string[] = []
  //   files.map(async(file:any, i:number) => {
  //     const storageRef = ref(storage, `${postid}/${i}`);
  //     await uploadBytes(storageRef, file)
  //     const url = await getDownloadURL(ref(storage, `${postid}/${i}`))
  //     urls.push(url)
  //     console.log(url)
  //   })
  //   return urls
  // }

  console.log(files)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const postId = uuidv4()

    setPostId(postId)

    //画像をアップロードしURLを取得
    //開発時はここからコメントアウト
    // const urls = await uploadPanels(postId)
    // console.log(urls)

    // const res = await fetch(`http://localhost:3000/api/post`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     urls: urls,
    //     postId: postId,
    //     userId: userId,
    //   }),
    // })

    // const comicTexts = await res.json()

    // setYonkoma(comicTexts)
    //開発時はここまでをコメントアウト

    setTimeout(() => {
      setIsLoading(true)
      setStep(1)
    }, 3000)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mt-10">

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
                accept="image/png, image/jpg, image/jpeg, image/webp"
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