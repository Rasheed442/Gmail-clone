import React, {useState} from 'react'
import {AiOutlineMenu,AiOutlineStar,AiOutlineClockCircle,AiOutlineSend,AiOutlineDown,
  AiOutlineSetting, AiOutlineUp, AiOutlinePlus} from 'react-icons/ai'
import {BsFillPencilFill, BsInboxFill,BsChatLeftDotsFill} from 'react-icons/bs'
import {RiDraftLine, RiSpam2Fill} from 'react-icons/ri'
import {ImBin} from 'react-icons/im'
import {MdLabelImportantOutline, MdScheduleSend,MdAttachEmail} from 'react-icons/md'
import style from '../styles/side.module.css'
function sidebar() {
  const [more, setMore] = useState(true)
  const [open, setOpen] = useState(true)
  return (
    <div className={style.container}>

        <div className={style.head}>
            <AiOutlineMenu style={{fontSize:'25px'}} onClick={() =>{
             setOpen(!open)
            }}/>
            <h1>RANSOM</h1>
        </div>

        <div style={{width: open ? "" : "70px"}} className={style.compose}>
          <BsFillPencilFill/>
          {open ?<p>Compose</p>:""}
        </div>


        <div>
        <div style={{width: open ? "" : "70px"}} className={style.inbox}>
              <BsInboxFill/>
              {open ?<p>Inbox</p>:""}
            </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <AiOutlineStar/>
              {open ?<p>Starred</p>:""}
            </div>
       

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <AiOutlineClockCircle/>
              {open ?<p>Snooze</p>:""}
              </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <AiOutlineSend/>
              {open ?<p>Sent</p>:""}
            </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <RiDraftLine/>
              {open ?<p>Draft</p>:""}   
           </div>

            <div style={{width: open ? "" : "70px"}} className={style.star1} onClick={()=>{
              setMore(!more)
            }}>
              {more ? <AiOutlineDown/> : <AiOutlineUp/>}
             {open ?<p>{more ? "More" :"Less"}</p>: ""} 
            </div>
             
{more ? "" :<div>
           <div style={{width: open ? "" : "70px"}} className={style.star}>
              <MdLabelImportantOutline/>
              {open ?<p>Important</p>:""}
            </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <BsChatLeftDotsFill/>
              {open ?<p>Chats</p>:""}      
            </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <MdScheduleSend/>
              {open ?<p>Schedule</p>:""}
            </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <MdAttachEmail/>
              {open ?<p>All mail</p>:""}
            </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <RiSpam2Fill/>
              {open ?<p>Spam</p>:""}         
           </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <ImBin/>
              {open ?<p>Bin</p>:""}
            </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <MdLabelImportantOutline/>
              {open ?<p>Categories</p>:""}
            </div>

            <div style={{width: open ? "" : "70px"}} className={style.star2}>
              <AiOutlineSetting/>
              {open ?<p>Manage labels</p>:""}
            </div>

            <div style={{width: open ? "" : "70px"}} className={style.star}>
              <AiOutlinePlus/>
              {open ?<p>Create new labels</p>:""}
            </div>

        </div>}
</div>
        
        <div style={{width: open ? "" : "70px"}} className={style.star3}>
        {open ?<p>Labels</p>:""}
            <AiOutlinePlus/>
            </div>
        

 </div>

  )
}

export default sidebar
