import {createRoot} from "react-dom/client"
import App from "./App.jsx"
const root=createRoot(document.querySelector("#root"))
root.render(
    <App />
)
let i=0;
setInterval(()=>{
 document.querySelector(".react-log").style.transform=`rotate(${i}deg)`
 i=(i+1)%360;
},1)