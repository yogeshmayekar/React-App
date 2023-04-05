import './AddVehicle.css'
function AddVehicle(){
    return(
        <>
        <div className="vehicle-container">
            <div className='vehicle1'>
                <h3>Vehicle/add</h3>
                <h1>Add Vehicle</h1>
            </div>

            <div className='vehicle2-container' > 
                <form >
                    <div className='vehicle-sub1'>
                            
                            <label>Scenerio List</label>
                            <select className='select'>
                                <option>Test Scenerio</option>
                                <option>My Scenerio</option>
                            </select>
                            <div>
                            <label>Vehicle Name</label>
                            <input className='input' type ='text' placeholder='Target abc'></input>
                            </div>
                            <div>
                            <label>Speed</label><br></br>
                            <input className='input' type ='text' placeholder='2'></input>
                            </div>
                    </div>

                    <div className='vehicle-sub2'>
                            <label>Psition X</label>
                            <input className='input'type='text' placeholder='Test Scenerio'></input>
                       
                            <label>Position Y</label>
                            <input className='input' type ='text' placeholder='Time in Second'></input>
                
                            <label>Direction</label>
                            <select className='select' >
                                <option>Towrds</option>
                                <option>Backwards</option>
                                <option>Upwards</option>
                                <option>Downwards</option>
                            </select>
                    </div>
                </form>
            </div>

            <div className='vehicle3'>
                <button className='btn btn1'> Add </button>
                <button  className='btn btn2'> Reset</button>
                <button  className='btn btn3'> Go Back</button>   
            </div>
           
        </div>
        </>

    )


}

export default AddVehicle;