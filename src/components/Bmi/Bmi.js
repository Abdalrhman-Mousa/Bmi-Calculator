import './Bmi.css'

import React from 'react';

class Bmi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'height': 0, 'weight': 0, 'info': "", 'val': 0}
    }



    render() 
    {
      return (

    <div className="bg text-center">

  <div className="centered">
   
     <p className="firstLine"> B &nbsp; M &nbsp; I  </p>
   
    <p className="secondLine">Calculate Your BMI</p>

    <form >

    <p> <input className="InputStyle" placeholder="Enter Your Weight"  type={'text'} id="weight" name="weight"onChange={e => {
                        this.setState({'weight': e.target.value})
                    }}/> </p>
    <p> <input className="InputStyle" placeholder="Enter Your Height"  type={'text'} id="height" name="height" onChange={e => {
                        this.setState({'height': e.target.value})
                    }}/> </p>
    <button type="button" onClick={e => { this.calculateBmi()}} className="btn btn-outline-light" > Calculate</button>
</form>





<div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>BMI {this.state.val}</h3>
                        <h2>{this.state.info}</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>




    </div>
    </div>
  )

}
calculateBmi() {
  let val = this.state.weight / ((Math.pow(this.state.height, 2))) * 10000
  this.setState({'val': val})
  if (val < 18.5) {
      this.setState({'info': 'Under Weight'})
  } else if (val > 18.5 && val <= 24.9) {
      this.setState({'info': 'Normal weight'})
  } else if (val > 24.9 && val < 30) {
      this.setState({'info': 'Overweight'})
  } else {
      this.setState({'info': 'Obesity'})
  }
  console.log(this.state.weight / (Math.pow(this.state.height, 2)))
}
}






export default Bmi;
