import React from 'react';
const Login =()=>{
    return <><section className="inner_page_head">
            <div className="container_fuild">
            <div className="row">
                <div className="col-md-12">
                    <div className="full">
                        <h3>Login Form</h3>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className="why_section layout_padding">
                <div className="container">
                
                    <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="full">
                            <form action="#">
                                <fieldset>
                                    <input type="email" placeholder="Enter your email" name="email" required=""/>
                                    <input type="password" placeholder="Enter your password" name="password" required=""/>
                                    <input type="submit" value="Submit"></input>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
      </>
}
export default Login

export function generateMetadata({params})
{
    return {
       title:"Fammss | Login Page Title",
       description:"Login Page Description",
    }
}