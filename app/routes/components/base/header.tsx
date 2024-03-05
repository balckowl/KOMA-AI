import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { useUser } from '@clerk/remix';
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet"
import { useClerk } from "@clerk/remix";
import { useNavigate } from 'react-router';

const Header = ({signIn=false}:{signIn?:boolean}) => {
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <header className="flex items-center h-[80px] w-full bg-red-white">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-4 h-[60px]">
            <img src="/images/logo/komai_logo.png" alt="logo" className="w-auto h-[50px] object-fill" />
            <h1 className="flex h-full items-center text-4xl font-bold">KOM-4i</h1>
          </div>
        </Link>

        {isSignedIn ? (
          // loginしている
          <Sheet>
            <SheetTrigger>
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src={user?.imageUrl} />
                  <AvatarFallback>{user?.fullName}</AvatarFallback>
                </Avatar>
                <p className="flex items-center">{user?.fullName}</p>
              </div>
            </SheetTrigger>
            <SheetContent className="flex flex-col h-full justify-between">

                <ul>
                  <Link to="/home">
                    <li className="border-b-[1px] border-black pt-8 pb-4">
                      <div className="w-max cursor-pointer hover:opacity-80 transition-all">
                        <p className="text-xl pl-2">🏠 ホーム</p>
                      </div>
                    </li>
                  </Link>
                  <Link to="/yonkoma">
                    <li className="border-b-[1px] border-black py-4">
                      <div className="w-max cursor-pointer hover:opacity-80 transition-all">
                        <p className="text-xl pl-2">📜 4コマ</p>
                      </div>
                    </li>
                  </Link>
                  <Link to="/create">
                    <li className="border-b-[1px] border-black py-4">
                      <div className="w-max cursor-pointer hover:opacity-80 transition-all">
                        <p className="text-xl pl-2">🖋 作る</p>
                      </div>
                    </li>
                  </Link>
                  <Link to="/works">
                    <li className="pt-4">
                      <div className="w-max cursor-pointer hover:opacity-80 transition-all">
                        <p className="text-xl pl-2">👤 自分の作品</p>
                      </div>
                    </li>
                  </Link>
                </ul>

                <div>
                  <div className="pt-4">
                    <div
                      onClick={() => signOut(() => navigate('/'))} 
                      className="w-max cursor-pointer hover:opacity-80 transition-all"
                    >
                      <p className="text-xl pl-2">🔙 サインアウト</p>
                    </div>
                  </div>

                </div>
            </SheetContent>
          </Sheet>

        ) : signIn==false && (
          // loginしていない
          <Link to="/sign-in">
            <Button className="bg-[#F6501C] px-4 py-2 border-2 border-[#F6501C] rounded-lg cursor-pointer hover:bg-white hover:text-[#F6501C]">ログイン</Button>
          </Link>
        )
        }


      </div>
    </header>
  )
}

export default Header