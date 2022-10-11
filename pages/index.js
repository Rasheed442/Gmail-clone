import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Sidebar from '../Component/Sidebar'
import Header from '../Component/Header'
import {AiOutlineDown, AiOutlineLeft,AiOutlineTag,AiOutlineStar, AiOutlineRight} from 'react-icons/ai'
import {FiRefreshCcw, FiMoreVertical} from 'react-icons/fi'
import { BsInboxFill} from 'react-icons/bs'
import { FaUserFriends} from 'react-icons/fa'
import Right from '../Component/right'
export default function Home() {
  const [change, setChange] = useState(false)
  const [change1, setChange1] = useState(false)
  return (
    <>

        <div className={styles.container}>
          <Sidebar/>
            <div className={styles.out}>
          <Header/>
<div className={styles.lala}>          
  <div className={styles.limit}>
               <div className={styles.changes}>
                  <div className={styles.icon}>
                      <div className={styles.check}>
             <input type="checkbox"/>
             <AiOutlineDown/>
          </div>
          <FiRefreshCcw/>
          <FiMoreVertical/>
          </div>  
  <div className={styles.outline}>
   <p>1-50 of 3,126</p>
   <AiOutlineLeft/>
   <AiOutlineRight/>
   </div> 
</div>

<div className={styles.cover}>
    <div className={styles.primary}>
    <BsInboxFill/>
    <h4>Primary</h4>
    </div>
    <div className={styles.primary}>
    <AiOutlineTag/>
    <h4>Promotion</h4>
    </div>
    <div className={styles.primary}>
    <FaUserFriends/>
    <h4>Social</h4>
    </div>
</div>

{/* linkedln jobs */}

<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
      <div   onClick={()=>{
        setChange(!change)
        alert("added to favourite")
      }}>
     {change ?<AiOutlineStar style={{color:"red"}} />: <AiOutlineStar />}
     </div>
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
      <div   onClick={()=>{
        setChange1(!change1)
        alert("added to favourite")
        
      }}>
     {change1 ?<AiOutlineStar style={{color:"red"}} /> : <AiOutlineStar />}
     </div>
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
<div className={styles.star}>
     <div  id='start' className={styles.start}>
      <input type='checkbox'/>
     <AiOutlineStar />
      <p>Linkedln Job alert</p>
     </div>
     <p>5 new Jobs for "Software Engineer"</p>
     <p>-DevOps Engineer at Aella App are available ...</p>
     <p>21:36</p>
</div>
     

        </div>
        <Right/>
      </div>
        </div>  
        </div>   
</>
  )
}
