import { useParams } from "react-router-dom"
import { Footer } from "../../Components/Footer/Footer"
import { LeftSidebar } from "../../Components/LeftSidebar/LeftSidebar"
import { Navbar } from "../../Components/Navbar/Navbar"
import { Suggestions } from "../../Components/Suggestions/Suggestions"
import { ThirdPersonProfile } from "../../Components/ThirdPersonProfile/ThirdPersonProfile"

import { userContext } from "../../context/UserContext"
import { useContext } from "react"

function ThirdPersonProfilePage(){
const{users}=useContext(userContext)

    const{thirdprofileid}=useParams();

// console.log(thirdprofileid)

const data=users.filter((f)=>f.username===thirdprofileid)
console.log(data)


    return(
<div className="page-main-container" >
<div className="navbar-container">
        <Navbar/>
      </div>
      <div className="left-side-bar-container">
        <LeftSidebar/>
      </div>

      <div className="main-container">
    <ThirdPersonProfile data={data}/>
  </div>

  
  <div className="right-side-bar-container">
        <Suggestions />
      </div>


      <div className="footer-container">
        <Footer />
      </div>
</div>
    )
}


export {ThirdPersonProfilePage}