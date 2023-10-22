import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'

import './style.css'
const Home = () => {

      const[foodcat,setFoodcat]=useState([]);
      const[fooditem,setFooditem]=useState([]);

      const loadData = async()=>{
          let response= await fetch('http://localhost:5000/api/fooddata',
          {
            method:"POST",
            headers:{
               "Content-Type":"application/json"
            }
    }) ;
    response=await response.json();
  setFooditem(response[0]);
  setFoodcat(response[1]);
    //console.log(response[0],response[1]);     
      }

      useEffect(()=>{
        loadData();
      },[])



  return (
    <>
    <div className="all">
      <Navbar/>
      {/* <Slider/> */}
      {/* <Card/> */}
      
      <div className="container">
        {

          foodcat!==[]
          ?
          foodcat.map((data)=>{
            return(
              <div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3'>
                {data.CategoryName}
                </div>
                <hr/>
                {
                  fooditem!==[]?
                  fooditem.filter((fdata)=> fdata.CategoryName===data.CategoryName).map((filterItem)=>{
                    return(
                      <div key={filterItem._id} className='col-12 col-md-6 col-lg-4'>
                        <Card foodName={filterItem.name}
                              options={filterItem.options[0]}
                              img={filterItem.img}/>
                      </div>
                    )
                  }):
                  <div>No data</div>
                }
                </div>
            )
           
          })
          :
          ""

        }
       
        <Card/>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default Home
