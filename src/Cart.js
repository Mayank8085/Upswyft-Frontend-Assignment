import React from 'react'

function Cart({title="To"}) {
    return (
        <div>
           <p> <b>Billed {title}</b>   [Your Deatils]</p>  
           <div class="row bg-white">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Country</label>
        </div>
      </div>
    
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="number" class="validate" />
          <label for="password">Your Business/Freelancer Number [Required]</label>
        </div>
      </div>
     
      <div class="row">
        <div class="input-field col s6">
        <input id="email" type="email" class="validate" />
          <label for="email">Your email</label>
          
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="number" class="validate"/>
          <label for="last_name">+91</label>
        </div>
      </div>
        
      <div class="row">
        <div class="input-field col s6">
        <input id="email" type="text" class="validate" />
          <label for="email">Your GSTIN [Optional]</label>
          
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Your PAN [Optional]</label>
        </div>
      </div>
        
     
      <div class="row">
        <div class="input-field col s12">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Address</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
        <input id="email" type="text" class="validate" />
          <label for="email">City</label>
          
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="number" class="validate"/>
          <label for="last_name">Postal Code/Zip Code</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">State (Required)</label>
        </div>
      </div>
        
      
    </form>
  </div>
            
            
        </div>
    )
}
export default Cart
