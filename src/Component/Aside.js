import './Aside.css';
// import { AddScenerio, Home, AddVehicle, AllScenerios} from '../Pages';
function Aside(){
    return(
        <>
        <div className='aside-container'>
        <ul className='aside'>
            <li className='side-active'>Home</li>
            <li className='side'>Add Scenerio</li>
            <li className='side'>All Scenerios</li>
            <li className='side'>AddVehicle</li>
        </ul>
        </div>
        </>
    )


}

export default Aside;