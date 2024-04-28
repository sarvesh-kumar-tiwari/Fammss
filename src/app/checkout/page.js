import React from 'react';
const checkout=()=>{
    return <>
        <h1>Check Out Page</h1>
    </>
}

export default checkout

export function generateMetadata({params})
{
    return {
       title:"Fammss | Checkout Page Title",
       description:"Checkout Page Description",
    }
}