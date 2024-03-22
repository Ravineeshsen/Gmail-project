//***************Gmail API***************

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './GmailComponents/header';
import Leftside from './GmailComponents/leftside';

import Rightside from './GmailComponents/rightside';
import Starred from './GmailComponents/Sub-components/Starred';
import Snoozed from './GmailComponents/Sub-components/Snoozed';
import Sent from './GmailComponents/Sub-components/Sent';
import Drafts from './GmailComponents/Sub-components/Drafts';
import Inbox from './GmailComponents/Sub-components/Inbox';


import TokenRavineesh from './Newtoken/TokenRavineesh';
import Body from './GmailComponents/Body';

function App() {
  return (
    <>
      <div class="body-wrapper" >

        <Header />
        <Leftside />


        <Routes>
          <Route path="/" element={<Body params = ""/>}/>
        <Route path="/Inbox" element={<Body params= "Inbox"/>} />
        <Route path="/Starred" element={<Body params= "Starred"/>} />
        <Route path="/Snoozed" element={<Body params= "Snoozed"/>} />
        <Route path="/Sent" element={<Body params= "Sent"/>} />
        <Route path="/Drafts" element={<Body params="Drafts"/>} />
        </Routes>
        {/* <Body/> */}
        <Rightside/>





      {/* <Route path="/" element={contact}/> */}
        {/* <Routes>
        <Route path="/Inbox" element={<Inbox/>} />
        <Route path="/Starred" element={<Starred/>} />
        <Route path="/Snoozed" element={<Snoozed/>} />
        <Route path="/Sent" element={<Sent/>} />
        <Route path="/Drafts" element={<Drafts/>} />
        </Routes> */}

        
        

        
    
      </div>

    </>
  );
}

export default App;





// //*****UseRef1*******

// import Ref1 from './UseRef/Ref1';

// function App() {
//   return (
//     <>
//       
//       {/* <Ref1/> */}


      
//     </>
    
//   );
// }

// export default App; 




//********Accesstoken************

// import TokenRavineesh from './Newtoken/TokenRavineesh';

// function App() {
//   return(
//     <>
//     <TokenRavineesh/>
    
//     </>
//   )
// }
// export default App;






// *************router-dom***********

// import { Routes,Route } from 'react-router-dom';
// import Contact from './routerdom/Contact';
// import About from './routerdom/About';
// import Home from './routerdom/Home';
// import Navbar from './routerdom/Navbar';

// function App() {

//   return (
//     <>
//     <Navbar/>
//     <div>
      
//       <Routes>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/home' element={<Home/>}/>


//       </Routes>



//     </div>
//     </>
//   )
// }

// export default App






