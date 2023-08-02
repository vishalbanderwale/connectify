import { Link } from "react-router-dom"
import { Suggestions } from "../Suggestions/Suggestions"

function ThirdPersonProfile({data}){
    console.log(data)
    return(
        <>
        <section>
        <Suggestions data={data} />
        </section>
        
     
<section>
<p>hello world</p>
      <Link>https://google.com</Link>
</section>
    
      <div>
          <p>posts</p>
            <p>followers</p>
            <p>following</p>
          </div>

        </>

    )
}

export {ThirdPersonProfile}