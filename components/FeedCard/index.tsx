import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const FeedCard: React.FC = () => {
    return <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-3">
            <div className="col-span-1">
                <Image src="https://avatars.githubusercontent.com/u/121739296?s=400&u=6bb99af3e9f5ba407cc8c08463fede354ba17946&v=4" 
                alt="user-image" 
                height={50} 
                width={50}/>
            </div>
            <div className="col-span-11">
                <h5>Piyush Garg</h5>
                <p>Is it just me or everyone else? Do you feel the code quality 
                    decrease as the project size increase ? just refarctored a lot of bad 
                    Code.
                </p>
                <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
                    <div>
                        <BiMessageRounded/>
                    </div>
                    <div>
                        <FaRetweet/>
                    </div>
                    <div>
                        <AiOutlineHeart/>
                    </div>
                    <div>
                        <BiUpload/>
                    </div>
                </div>
            </div>
              
        </div>
    </div>
}

export default FeedCard;
