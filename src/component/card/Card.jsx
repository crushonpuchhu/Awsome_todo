import React, { useRef, useState } from 'react'
import st from './card.module.css'
import check from './icon-check.svg'
import cross from './icon-cross.svg'


const List = ({ content, val1 ,data,sub,ar}) => {

  const [show, setshow] = useState(false);
  const [render, showrender] = useState(false);

                
  return (
    <>
      <div onMouseEnter={() => { setshow(per => !per) }} onMouseLeave={() => { setshow(s => !s) }} className={val1 ? st.list : st.list1}>
        <div><nav onClick={() => { showrender(po => !po) }} className={val1 ? st.l : st.l1}><section className={render ? (val1 ? st.chk : st.chk1) : (val1 ? st.hid : st.hid1)}></section></nav></div>
        <p style={{ textDecoration: render ? "line-through" : "none" }} className={val1 ? st.dar : st.lig}>{content}</p>
        <img onClick={()=>{sub(()=>{
          const arry=[...ar];
          arry.splice(data, 1);
          return arry;
        })
      
      }
        
        
        } src={cross} className={show ? st.vis : st.unvis} alt="cross" />
      </div>
    </>
  )
}



const Card = ({ val }) => {
  const [change, setchange] = useState("");
  const [submit, setsubmit] = useState([]);

  const set = (e) => {
    if (e.key == "Enter") {
      setsubmit([ ...submit,change])
      setchange("");
    }
  }

  return (
    <>
      <div className={st.main}>
        <div className={st.sub}>

          <div className={val ? st.up : st.up1}>
            <div className={st.circle}></div>
            <input value={change} onChange={(e) => {
              if(e.target.value!="")
              {
                setchange(e.target.value)
              }
           }} onKeyDown={(e)=>{
            if(e.target.value!="")
            {
              set(e);
            }
           }} type="text" placeholder='Add Task' />
          </div>

          <div className={val ? st.down : st.down1}>
            <div className={st.vao}>

              {
                submit.map((e, i,arr) => {
                  console.log(arr);
                  return ( 
                    <List key={i} ar={arr}  sub={setsubmit} data={i} val1={val} content={e}/>
                  )
                })
              }
            </div>
            <div className={st.info}></div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Card



