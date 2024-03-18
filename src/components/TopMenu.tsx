import TopMenuItem from "./TopMenuItem"
import Image from "next/image"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Link from "next/link"

export default async function TopMenu(){

    const session = await getServerSession(authOptions)

    return(
        <div className=" flex flex-row flex-nowrap h-16 w-full justify-end top-0 bg-white gap-x-4 pl-4 pr-4">
            {
                session
                    ?   <Link href={"api/auth/signout"} className="w-fit h-fit p-2 pl-3 pr-3 mt-auto mb-auto text-xl font-bold hover:bg-slate-200 hover:rounded-3xl transition-all">
                            <div>Sign-Out</div>
                        </Link>
                    :   <Link href={"api/auth/signin"} className="w-fit h-fit p-2 pl-3 pr-3 mt-auto mb-auto text-xl font-bold hover:bg-slate-200 hover:rounded-3xl transition-all">
                            <div>Sign-In</div>
                        </Link>
            }
            
            <TopMenuItem title={"Booking"} pageRef="/booking"/>
            <Image src={"/img/logo.png"} width={800} height={800} alt="logo"
                className=" size-16 p-1"
            />
        </div>
    )
}