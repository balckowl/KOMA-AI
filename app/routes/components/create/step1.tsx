
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import { storage } from "~/lib/firebase/client"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from "@clerk/remix";
import Generating from "../base/genarating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const Step1 = ({ setStep, setYonkoma, setPostId }: { setStep: any, setYonkoma: any, setPostId: any }) => {
  const [files, setFiles] = useState<any>([
    null,
    null,
    null,
    null,
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [canSubmit, setCanSubmit] = useState<boolean>(true)
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

      // submitできるか判定
      setCanSubmit(true)
      newPreviews.forEach((preview: string) => {
        if (preview == "/images/create/no-image.png") {
          setCanSubmit(false)
          return
        }
      });
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setIsLoading(true)
    const postId = uuidv4()

    setPostId(postId)

    //画像をアップロードしURLを取得
    //開発時はここからコメントアウト
    const urls = await uploadPanels(postId)
    console.log(urls)

    const res = await fetch(`http://localhost:3000/api/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        urls: urls,
        postId: postId,
        userId: userId,
      }),
    })

    const comicTexts = await res.json()

    //開発時はここまでをコメントアウト
    setYonkoma(comicTexts)

    // setTimeout(() => {
      // }, 3000)
    setIsLoading(true)
    setStep(1)
  }

  if (isLoading) {
    return <Generating />
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mt-10">
        {/* imgを入力するbox */}
        <div className="max-w-[800px] mx-auto pb-16">
          <div className="flex justify-between mb-2 items-center">
            <p className="mb-1">4枚の画像を選んでください</p>
            <div>
              <Button
                type="submit"
                disabled={!canSubmit}
                className="bg-[#F6501C] px-4 py-2 border-2 border-[#F6501C] rounded-lg cursor-pointer hover:bg-white hover:text-[#F6501C]"
              ><FontAwesomeIcon icon={faPaintBrush} className="mr-2"/>作成する</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 justify-center w-full max-w-[800px] mx-auto border-2 border-black p-6 pb-10 bg-slate-50">
            {[0, 1, 2, 3].map((_, i) => (
              <div key={i} className="w-full">
                <p className="text-xl ml-1">{i + 1}.</p>
                <div className="bg-white w-[100%]">
                  <img
                    src={previews[i]} alt="panel"
                    onClick={() => document.getElementById(`file-input${i}`)?.click()}
                    className="cursor-pointer border-[1px] border-black object-cover aspect-[16/9] w-[100%]"
                  />
                </div>
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
        </div>
      </form>
    </div>
  )
}

export default Step1