import { Route, Routes } from "react-router-dom";
import About from "./about";
import AddPosts from "./addposts";
import Home from "./FoodieHome";
import Navbar from "./navbar";
import Posts from "./posts";
import SinglePost from "./singlepost";

const HomePortal = () => {
    return (
        <div className="homeportal">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/add-post" element={<AddPosts/>}/>
                <Route path="/home" />
                <Route path="/foods" element={<Posts/>} />
                <Route path="/foods/:id" element={<SinglePost/>} />
            </Routes>
        </div>
    );
}

export default HomePortal;