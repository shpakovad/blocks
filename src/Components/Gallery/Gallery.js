import React from "react";
import style from "./Gallery.module.css";

function Gallery(props) {

    return (
        <div className={style.wrapperGallery}>
            {props.gallery.map(item => {
                if (!item.avatar) return null;
                    return <img key={item.id} src={item.avatar} alt=""/>
            })}
        </div>
    );
}

export default Gallery;
