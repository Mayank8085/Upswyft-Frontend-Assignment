import React from 'react'
import Cart from './Cart'

 function App() {
  return (
    <div className="container bg-light px-5 py-3 mt-5">
      <h2 className="text-center mb-5">Payment Invoice</h2>
      <div className="row">
        <div className="col-md-6 col-12">
           <div>
           <span >Invoice No:</span> 
            <input type="number" className="ms-5 text-end w-50 text-wrap bg-light" style={{border:"hidden",borderBottom: "2px solid red"}} />
           </div>
           <div>
           <span >Invoice Date:</span> 
            <input type="number" className="ms-5 w-50 text-end text-wrap bg-light" style={{border:"hidden",borderBottom: "2px solid red"}} />
           </div>
           <div>
           <span >Due date:</span> 
            <input type="number" className="ms-5 w-50 text-end text-wrap bg-light" style={{border:"hidden",borderBottom: "2px solid red"}} />
           </div>
        
        </div>
        <div className="col-md-6 col-12">
         <input type="file" placeholder="Add Business Logo" accept="image/*" width="100"/>

          
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 col-12">
          <Cart />
        </div>
        <div className="col-md-6 col-12">
        <Cart />
        </div>
       

        
      </div>
    </div>
  )
}

export default App