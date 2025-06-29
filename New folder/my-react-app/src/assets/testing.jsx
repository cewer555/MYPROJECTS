import {createRoot} from "react-dom/client"
import Main from "./MainContent"
import Header from "./Header"
import Footer from "./Footer"


const root=createRoot(document.querySelector("#root"))



function Page(){
    return (<>
            <Header />
            <Main />
            <Footer />
    </>
    )
}
root.render(
        <Page />
        )
let i=0;
setInterval(()=>{
 document.querySelector(".React-logo").style.transform=`rotate(${i}deg)`
 i=(i+1)%360;
},1)
let opac=0.0;
setInterval(()=>{
    if(opac!=1.0){
    document.querySelector("#root").style.opacity=`${opac}`
    opac=(opac+0.1)}
},50)