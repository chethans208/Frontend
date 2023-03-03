import Navbar from "./navbar";
import FoodieHome from '../styles/FoodieHome.css'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home row">
            
            {/* <h1 className="text-center">Welcome to home page</h1> */}

            <div className="home1 row">
                <div className="image col-lg-9 col-sm-12">
                    <img src="/images/food1.jpeg" alt="" width="950px" className="p-0" />
                </div>
                <div className="text col-lg-3 col-sm-12 bg-warning text-dark p-5">
                    <p>FEATURED POSTS</p>
                    <h1>Love the delicious & Tasty foods</h1>
                    <div className="div w-75"></div>
                    <p> laudantium aliquam, similique quaerat quas rerum modi adipisci esse repudiandae consequuntur.</p>
                    <button className="btn btn-lg btn-danger ">Add a Post</button>
                    <div className="home2 row mt-3 position-relative top-25">
                        <Link to="" className="w-50 col-6 border-0  rounded-0 btn btn-lg btn-dark">&larr;Forward</Link>
                        <Link to="" className="w-50 col-6 border-0 rounded-0 btn btn-lg btn-light">Next   &rarr;</Link>
                    </div>
                </div>
            </div>

            <div className="home3 row">
                <h1>Recent Stories</h1>
                <div className="smallimage col-lg-6 col-sm-12">
                    <div className="home31 m-3">
                        <img src="/images/food2.jpeg" alt="" width="265px" height="210px" className="rounded-2" />
                        <p className="mt-2">Tasty Delicious Food</p>
                        <Link to="" className="text-decoration-none">Read More &rarr;</Link>
                    </div>
                    <div className="home32 m-3">
                        <img src="/images/food3.jpeg" alt="" width="265px" height="210px" className="rounded-2" />
                        <p className="mt-2">Tasty Delicious Food</p>
                        <Link to="" className="text-decoration-none">Read More &rarr;</Link>
                    </div>
                    <div className="home33 m-3">
                        <img src="/images/food4.jpeg" alt="" width="265px" height="210px" className="rounded-2" />
                        <p className="mt-2">Tasty Delicious Food</p>
                        <Link to="" className="text-decoration-none">Read More &rarr;</Link>
                    </div>
                    <div className="home34 m-3">
                        <img src="/images/food5.jpeg" alt="" width="265px" height="210px" className="rounded-2" />
                        <p className="mt-2">Tasty Delicious Food</p>
                        <Link to="" className="text-decoration-none">Read More &rarr;</Link>
                    </div>
                </div>
                <div className="largeimage col-lg-6 col-sm-12">
                    <img src="/images/food6.jpeg" alt="" width="600px" height="610" className="rounded-3" />
                </div>
            </div>
        </div>
    );
}

export default Home;