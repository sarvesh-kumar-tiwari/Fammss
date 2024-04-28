import React from 'react';
const blog =()=>{
    return <> 
    <section className="inner_page_head">
    <div className="container_fuild">
       <div className="row">
          <div className="col-md-12">
             <div className="full">
                <h3>Blog List</h3>
             </div>
          </div>
       </div>
    </div>
 </section>
 </>
}

export default blog

export function generateMetadata({params})
{
    return {
       title:"Fammss | Blog Page Title",
       description:"Blog Page Description",
    }
}