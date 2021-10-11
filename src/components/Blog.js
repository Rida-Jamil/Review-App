import React, {useState} from "react";
import Card from "./Card";
import Data from "./Data";
import logo1 from './images/ap1.jpg';
import logo2 from './images/ap5.jpg';
import logo3 from './images/ap7.jpg';
import logo4 from './images/ap2.jpg';
import logo5 from './images/all.jpg';



function Blog() {
    const[dataItems, setDataItems]= useState(Data);
   
    const filterItem = (categoryItem) =>{
        const updatedItem = Data.filter((currentElement) =>{
            console.log(currentElement)
            return currentElement.category === categoryItem;
    });
         
    console.log(updatedItem);
          setDataItems(updatedItem);
        }
       
    return(
    <>
    <br/><br/><br/>
    <div className="image">   
    <img className="pic" src={logo1} onClick={() => {filterItem('Apple')}} alt="apple"/>
    <img className="pic" src={logo2} onClick={() => {filterItem('Huawei')}} alt="Huawei"/><br/>
    <img className="pic" src={logo3} onClick={() => {filterItem('Oppo')}} alt="Oppo"/>
    <img className="pic" src={logo4} onClick={() => {filterItem('Samsung')}} alt="Sam"/>
    <img className="pic" src={logo5} onClick={() => {setDataItems(Data)}} alt="All"/>

    </div>

​
    <section className='container py-4 py-lg-5'>
        <div className= 'row justify-content-center' >
            {dataItems.map((item, index)=>{
                return(<Card key={index} model={item.model} image={item.image} category={item.category} link={`/details/${item.id}`} />)
            })}
            
​
        </div>
    </section>
    </>
    );
  }

export default Blog;
