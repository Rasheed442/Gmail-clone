import React from 'react'
import style from '../styles/head.module.css'
import {BsSearch} from 'react-icons/bs'
import {GrApps} from 'react-icons/gr'
import {AiOutlineSetting,AiOutlineQuestionCircle} from 'react-icons/ai'
function Header() {
  return (
    <div className={style.header}>

      

        <div className={style.container}>
            <div className={style.search}>
             <BsSearch style={{fontSize:'20px'}}/>
             <input type='text' placeholder='Search mail'/>
            </div>
            
        </div>
      
      <div className={style.icon}>
           <AiOutlineQuestionCircle style={{fontSize:'25px'}}/>
           <AiOutlineSetting style={{fontSize:'25px'}}/>
           <GrApps style={{fontSize:'25px'}}/>

           <div className={style.R}>
            R
           </div>
      </div>

    </div>
  )
}

export default Header
