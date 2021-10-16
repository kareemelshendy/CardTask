import React, { useEffect } from "react"

function Page(props) {
    useEffect(()=>{
        document.title= `${props.title}| Card App` ;

    },[])
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Page