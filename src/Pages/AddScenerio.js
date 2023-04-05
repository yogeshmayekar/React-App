// import Aside from "../Component/Aside";
import './AddScenerio.css'
function AddScenerio(){
    return(
        <>
        <div className="main-container">
        {/* <div> aside </div> */}
        <div className='item1'>
            <div className='item1-2'>
            <h3>Scenerio/add</h3>
            <h1>Add Scenerio</h1>
            </div>
            <div className='item2' > 
                <form >
                    <label>Scenerio Name</label>
                    <input type='text' placeholder='Test Scenerio'></input>
                    <label>Scenerio Time</label>
                    <input type ='text' placeholder='Time in Second'></input>
                </form>
            </div>
            <div className='item3'>
                <button className='btn btn1'> Add </button>
                <button  className='btn btn2'> Reset</button>
                <button  className='btn btn3'> Go Back</button>
            </div>
        </div>
        </div>
        </>
        
    )
}
export default AddScenerio;