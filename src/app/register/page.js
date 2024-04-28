const register=()=>{
    return <><section class="inner_page_head">
    <div class="container_fuild">
        <div class="row">
            <div class="col-md-12">
                <div class="full">
                    <h3>Register Form</h3>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="why_section layout_padding">
        <div class="container">
        
            <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="full">
                    <form action="#">
                        <fieldset>
                            <input type="text" placeholder="Enter your name" name="name" required=""/>
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
export default register

export function generateMetadata({params})
{
    return {
       title:"Fammss | Register Page Title",
       description:"Register Page Description",
    }
}