import AmazonCard from "./AmazonCard";


export default function() {

    let oldprice = ["12,495","11,990","1,599", "599"];
    let newprice = ["8,999","9,199","899","278"];
   

    return (
        <div style={{display:"flex"}}>
        <AmazonCard title="Logitech Mx Master 3s" description="8,000 DPI" Oldprice={oldprice} Newprice={newprice} idx={0}/>
        <AmazonCard title="Apple pencil (2nd Gen)" description="intutive touch surface"  Oldprice={oldprice} Newprice={newprice} idx={1}/>
        <AmazonCard title="Zebronics Zen-Transformer" description="intutive touch surface"  Oldprice={oldprice} Newprice={newprice} idx={2}/>
        <AmazonCard title="Protonics Touch 23 Wireless Mouse" description="Wireless Mouse 2.4GHz"  Oldprice={oldprice} Newprice={newprice} idx={3}/>
        </div>
    );
}