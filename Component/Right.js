import React from 'react'
import style from '../styles/right.module.css'
import {SiKeepassxc} from 'react-icons/si'
import {BsCalendarDate} from 'react-icons/bs'
import {MdOutlineTaskAlt} from 'react-icons/md'
import {IoMdContact} from 'react-icons/io'
import { AiOutlineRight,AiOutlinePlus } from 'react-icons/ai'
function Right() {
  return (
    <div className={style.container}>
        <div className={style.main}>
         <BsCalendarDate/>
         <SiKeepassxc/>
         <MdOutlineTaskAlt/>
         <IoMdContact/>
         </div>
         <div>
            <AiOutlinePlus/>
         </div>
         <AiOutlineRight/>
    </div>
  )
}

export default Right
