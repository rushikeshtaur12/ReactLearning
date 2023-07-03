import React from 'react'

const Js = () => {
    let x=async function(){
        try{
            let data=await fetch ('https://api.escuelajs.co/api/v1/products')
            console.log(data)
            let finalData=await data.json()
            console.log(finalData);
            finalData.map((x)=>{
                let body=document.body
                let section =document.createElement('section')
                section.innerHTML+=`<div>
                    <p>id :${x.id}</p>
                    <p> description:${x.description}</p>
                    <img src='${x.images}' height: 200px width: 150px >


                </div>`
                body.appendChild(section)
            }
        )}
        
        catch{
            // console.log('error')
        }
    
    }
    x()
  return (
   <div>
    
   </div>
  )
}

export default Js
