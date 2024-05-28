import React from "react";
import Image from "next/image";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from 'react-icons/bs'
import {Inter, Quicksand} from "next/font/google";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

const inter = Inter({ subsets: ["latin"]})
const quicksand = Quicksand({ subsets: ["latin"]});

interface TwitterSidebarButton{
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title : 'Home',
    icon: <BiHomeCircle/>,
  },
  {
    title: 'Explore',
    icon: <BiHash/> ,
  },
  {
    title: 'Notification',
    icon: <BsBell/>
  },
  {
    title: 'Message',
    icon: <BsEnvelope/>
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark/>
  },
  {
    title: 'Twitter Blue',
    icon: <BiMoney/>
  },
  {
    title: 'Profile',
    icon: <BiUser/>
  },
  {
    title: 'More Option',
    icon: <SlOptions/>
  }
  

]

export default function Home() {
  return (
    <div className={quicksand.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1 ml-19">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitter/>
          </div>
          <div className="mt-1 text-2xl pr-4">
            <ul>
              {sidebarMenuItems.map(item => <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-3 w-fit cursor-pointer mt-2" key={item.title}><span className="text-3xl">{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] p-4 text-lg py-2 px-4 rounded-full w-full font-semibold">Tweet</button>
            </div>
            
          </div>
        
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-500 ">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          
        </div>
        <div className="col-span-3"></div>
      </div>

    </div>
  );
}
