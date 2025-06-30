
import './AmazonCard.css'
export default function({title,description,Oldprice, Newprice,idx}) {
     let oldStyle = {
        textDecoration : "line-through",
     };
    return (
         
        <div className="Amazon">
            <div className="Amazon-card">
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
            <h4 ><span style={oldStyle}>{Oldprice[idx]}</span> &nbsp; &nbsp; <span>{Newprice[idx]}</span></h4>
        </div>
    );
}