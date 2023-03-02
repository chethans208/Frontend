import navbar from '../styles/navbar.css'
const Navbar = () => {
    return (
        <div className="navbar navbar-expand">
            <div className="logo">
                {/* <img src="/images/food1.jpeg" alt="" /> */}
                <h1>Foodie</h1>
            </div>
            <div className="links ms-5">
                <ul className='navbar-nav'>
                    <li className='nav-item'><a href="/home" className="nav-link">Home</a></li>
                    <li className='nav-item'><a href="/home/about" className="nav-link">About</a></li>
                    <li className='nav-item'><a href="/home/add-post" className="nav-link">Add Post</a></li>
                    <li className='nav-item'><a href="/home/foods" className="nav-link">Foods</a></li>
                    <li className='nav-item'><a href="/login" className="nav-link">Log out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;