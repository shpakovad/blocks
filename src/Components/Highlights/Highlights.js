import React from "react";
import style from "./Highlights.module.css";

function Highlights(props) {
    console.log(props.highlights)
    return (
        <div className={style.wrapperHighlights}>
            {props.highlights.map(item => {
                if (item.id === 1) return <div key={item.id}>{item.name}</div>
                if (item.id === 4) return <img key={item.id} src={item.avatar} alt=""/>
            })}
        </div>
    );
}

export default Highlights;
