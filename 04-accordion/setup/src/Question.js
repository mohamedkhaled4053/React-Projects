import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({id, title, info }) => {
  let [show, setShow] = useState(false);

  useEffect(()=>{
    let paragraph = document.getElementById(id)
    paragraph.style.maxHeight = (show)? paragraph.scrollHeight+'px' : '0'
  })

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      { <p style={{transition: '0.4s', overflow:'hidden'}} id={id}>{info}</p>}
    </article>
  );
};

export default Question;
