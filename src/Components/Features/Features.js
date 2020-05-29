import React from "react";
import style from "./Features.module.css";

function Features(props) {

    return (
        <div className={style.wrapperFeatures}>
            {props.features.map(item => {
                if (!item.avatar) return null;
                    return  <div className={style.features} key={item.id}><img src={item.avatar} alt=""/>
                        <div>{item.name}</div>
                    </div>
            })}
        </div>
    );
}

export default Features;
