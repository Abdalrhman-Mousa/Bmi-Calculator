import './Bmi.css'
import { useState } from 'react'

const Bmi = () => {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const [bmiResult, setBmiResult] = useState('');

    const [status, setStatus] = useState('');

    function calculateBMI() {
        let bmi = (703*(weight / ((height ) ** 2))).toFixed(2);
        setBmiResult(bmi);

        let bmiStatus = getStatus(bmi)
        setStatus(bmiStatus);

        setHeight('');
        setWeight('');

    }

    function getStatus(bmi) {
        if (bmi < 18.5) return "Underweight"
        else if (bmi >= 18.5 && bmi < 25) return "Healthy"
        else if (bmi >= 25 && bmi < 30) return "Overweight"
        else return "obese"
    }

    return (

        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 className="title"> BMI Calculator</h2>
                        <form>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Hieght</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="height"
                                            type="number"
                                            placeholder="Height in inch"
                                            value={height}
                                            onChange={e => setHeight(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Weight</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                            id="weight"
                                            type="number"
                                            placeholder="Weight in lbs"
                                            value={weight}
                                            onChange={e => setWeight(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-t-15 text-center">
                                <button className="btn btn--radius-2 btn--blue" type="button" onClick={calculateBMI} >Calculate</button>
                            </div>


                            {bmiResult>15 && 
                <div className="mt-5 text-center text-dark">
                    <p>Your BMI is <span className='strong'>{bmiResult}</span>.</p>
                    <p>You are <span className='strong'>{status}</span>.</p>
                </div>
            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bmi
