import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


const Step3 = () => {
  const { width, height } = useWindowSize()
  const navigate = useNavigate();
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      console.log("a")
      navigate('/home');
    }, 5000);
    return () => clearTimeout(redirectTimer); // クリーンアップ関数を使用してコンポーネントがアンマウントされたときにタイマーをクリアします
  },[]);
  
  return (
    <div className="container">
      <Confetti
        width={width}
        height={height}
        recycle={true}
      />
      <h2 className="text-3xl font-bold flex justify-center mt-20">✅ 投稿が完了しました。</h2>
    </div>
  )
}

export default Step3