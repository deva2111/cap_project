import { Outlet } from 'react-router-dom'
import nav from './nav'


const DashLayout = () => {
    return (
        <>
            
            <div className="dash-container">
                <Outlet />
            </div>
            <h1>hello this is me</h1>
            
        </>
    )
}
export default DashLayout