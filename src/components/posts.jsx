import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";

const Posts = () => {

    let title = "All Posts"

    let [posts, setPosts] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get("http://localhost:4000/foods")
            let data = await response.data
            setPosts(data)
        }
        fetchData()
    }, [])
    return (
        <div className="posts">
            <Banner data={title} />

            <div className="posts1 m-2 row">
                {posts.map((x) => (
                    <div className="postdetails p-3 m-2 rounded-3 col-2">
                        <Link to={`/home/foods/${x._id}`}><img src={x.image} alt="" width="250px" height="300px" className="rounded-2" /></Link>
                        <h5 className="text-danger fw-bold"> Title : {x.Title}</h5>
                        <h5>Author : {x.author}</h5>
                        <Link to={`/home/foods/${x._id}`} className="text-decoration-none btn btn-primary">Read Post &rarr;</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;