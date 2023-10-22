
import React from 'react'

const Card = (props) => {

 let options=props.options;
 let priceOptions = [];
if (props.options) {
  priceOptions = Object.keys(props.options);
}

  return (
    <>
       <div className="card m-3 " >
  <img src={props.img} className="card-img-top" alt="food" style={{"width":"fix", "height":"270px"}} />
  <div className="card-body">
    <h5 className="card-title">{props.foodName}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    */}
    <select className="m-2  w-10 bg-success  rounded">
        {
            Array.from(Array(6),(e,i)=>{
                return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })
        }
    </select>
    <select className="m-2 w-80 bg-success rounded">
        {
          priceOptions.map((data)=>{
            return <option key={data} value={data}>{data}</option>
          })
        }
    </select>
  </div>
</div>
    </>
  )
}

export default Card
