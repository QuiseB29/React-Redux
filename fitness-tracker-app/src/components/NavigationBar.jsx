import { Link, NavLink } from 'react-router-dom';


function NavigationBar() {
    return (
        <nav className="clearfix">
            <NavLink to='/Home' activeClassName="active">Home</NavLink>
            <NavLink to='/Add' activeClassName="active">Add</NavLink>
            <NavLink to='/View' activeClassName="active">View/Delete</NavLink>
        </nav>
    )
}


export default NavigationBar;
