import { useState } from "react";

import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";




function App() {
const [mode, setmode] = useState('light')
const [alert,setAlert]=useState(null)



const showAlert=(message,type)=>{
 setAlert({
  msg:message,
  type:type
 })
 setTimeout(()=>{
  setAlert(null);
 },1000);

}



 const toggleMode=()=>{
if(mode==='dark'){
  setmode('light');

  document.body.style.backgroundColor='white';
  showAlert("Light mode enabled","success");
   
}
else{
  setmode('dark');
  
  document.body.style.backgroundColor='#000';
  showAlert("Dark mode enabled","success");
  
}}


  return (
    <>
     
      <Navbar mode={mode} toggleMode={toggleMode}  aboutText="About" />
     
      
       <Alert alert={alert}/>
       <div className="container"> 

          
         <Text  showAlert={showAlert}heading="Try Text Analyzer- character counter,word counter,Remove extra space,UpperCase to LowerCase,LowerCase to UpperCase" mode={mode}/>
         
         
          
      
       
     
    
      </div>
     
    </>
  );
  }

export default App;
