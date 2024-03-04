import { Form, useActionData, useLoaderData } from "@remix-run/react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import { ActionFunctionArgs, json } from "react-router";


export const action = async({ request }:ActionFunctionArgs) => {
  const formData = await request.formData();
  console.log(formData)

  return json({a:"a"})
}

const Step1 = ({ setStep }: { setStep: any }) => {
  const result = useActionData()

  console.log(result)

  const [previews, setPreviews] = useState<string[]>([
    "/images/create/no-image.png",
    "/images/create/no-image.png",
    "/images/create/no-image.png",
    "/images/create/no-image.png"
  ])


  const handleImageChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    if (e.target.files) {
      const newPreviews = [...previews]
      newPreviews[i] = URL.createObjectURL(e.target.files[0])
      setPreviews(newPreviews)
    }
  }

  return (
    <div>
      <Form method="post">
        {/* titleを入力する */}
        <div className="w-max mx-auto my-10 text-xl">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="タイトル"
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

      </Form>
    </div>
  )
}

export default Step1