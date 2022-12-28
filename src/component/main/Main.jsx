import React, { useState } from 'react'
import st from './main.module.css'
import sun from './icon-sun.svg'
import night from './icon-moon.svg'
import Card from '../card/Card'

const Main = () => {
    const [day_night,set_day_night]=useState(true);

  return (
    <>

    <div className={st.main}>
        <div className={st.sub}>
           <div className={day_night?st.box1:st.box_sub1}>
             <div className={st.text}>
                <h1 style={{color:"white"}}>TODO</h1>
                <img onClick={()=>{set_day_night(p=>!p)}} src={day_night?sun:night} alt="sun" className={st.imge} />
             </div>
           </div>
           <div className={day_night?st.box2:st.box_sub2}>
             
           </div>
        </div>

        <Card val={day_night}/>
            
    </div>

    </>
  )
}

export default Main