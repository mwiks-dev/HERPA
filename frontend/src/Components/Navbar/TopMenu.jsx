import React from 'react'
import { MdPermPhoneMsg, MdMarkAsUnread } from "react-icons/md";
import { FaStreetView,FaDonate} from "react-icons/fa";
import Button from '../button/button';


function TopMenu() {
    const style = { color: "#7dd3fc", fontSize: "1.5em", margin: '0px 4px' }
  return (
    <div className="hidden md:flex border-y-2 border-gray-400">
      <div className='flex justify-between items-center p-1 mx-auto space-x-14 herpol-container '>
        <div className="flex  items-center">
            <h3 className='flex px-2'> <MdPermPhoneMsg style={style}/> Tel: +233 54-464-7767 </h3>
            <h3 className='flex px-2'> <MdMarkAsUnread style={style}/> info@herpolafrica.org </h3>
            <h3 className='flex px-2'> <FaStreetView style={style}/> TL-1882, UDS, Tamale-Ghana </h3>
            
        </div>
        {/*  */}
        <div className="items-center pr-20">
          <Button className="flex-row ">
            <FaDonate className='mx-2'/> Donate
        </Button>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
