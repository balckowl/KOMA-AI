import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Step3 = ({ setStep }: { setStep: any }) => {
  const { width, height } = useWindowSize()

  return (
    <div className="container">
      <Confetti
        width={width}
        height={height}
        recycle={false}
      />
      <h2 className="text-3xl font-bold flex justify-center mt-20">✅ 投稿が完了しました。</h2>
    </div>
  )
}

export default Step3