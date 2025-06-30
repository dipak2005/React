import { useState } from "react";

export default function Counter() {

    let [isLiked , setIsLiked] = useState(false); 
     let [click , setClicks] = useState(0);
let toggleLike = () => {
    setIsLiked(!isLiked);
    setClicks(click+1);
};
     let style = {color : " red"};
    return (
        <div>
            <h4>count : {click}</h4>
        <p onClick={toggleLike}> {isLiked  ?(<i class="fa-regular fa-heart"></i>) : (<i class="fa-solid fa-heart" style={style}></i>)}</p>
      
        </div>
    );
}