import "./App.css"
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import Registration from "./Registered/Registration";
import Payment from "./Payment/Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
const promise = loadStripe('pk_test_51JybZ6AGySxRFP33ZPbJxUBChCrWwOZj7tU756jPq3tUg11BVCwBDMcFCR8HW6sveejmoVFuKHvjDjfRtG3w2Cf200CCpxQzor')

function App() {
  return (
<BrowserRouter>
    <div className="App">
        {/* <Header />   */}
        <Routes>
          <Route path='/' exact element={
          <div><Header/>
          <Home /></div>}></Route>
          
        </Routes> 
        <Routes>
          <Route path='/check' exact element={<>
          <Header/>
            <Checkout/>
          </>}></Route>
        </Routes>
        
        <Routes>
          <Route exact path="/login" element={<div><Login/></div>} />
          </Routes>
          <Routes>
          <Route exact path="/registration" element={<div><Registration/></div>} />
          </Routes>
           <Routes>
          <Route exact path="/payment" element={<div><Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
          
          </div>} />
          </Routes> 
              
    </div>
    </BrowserRouter>

  //   <Router>
  //   <div className="app">
    
        
  //   <Header />
  //       <Routes>
  //       <Route exact path="/">
         
  //         <Home />
  //       </Route>
      
  //       </Routes>
        
       
  //   </div>
  // </Router>
);
}

export default App;
