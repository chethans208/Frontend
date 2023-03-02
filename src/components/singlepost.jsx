import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./banner";
import { Link } from "react-router-dom";

const SinglePost = () => {
    let title = "SinglePost"

    let params = useParams()
    let [single, setSingle] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/foods/${params.id}`)
            let data = await response.data
            setSingle(data)
        }
        fetchData();
    }, [])

    return (
        <div className="singlepost">
            <Banner data={title} />

            <div className="sp1 row p-5 bg-info m-3 bg-opacity-10 shadow">
                <div className="singleimage col-lg-4 col-sm-12">
                    <img src={single.image} alt="" width="400px" height="500px" className="rounded-3" />
                </div>
                <div className="sp2 col-lg-4 col-sm-12">
                    <h2 className="text-danger">{single.Title}</h2>
                    <h3>{single.author}</h3>
                    <p>{single.summary} </p>
                    <iframe src={single.location} frameborder="0" allowFullScreen="" loading="lazy" width="200px" height="150px" style={{ border: "0" }}> </iframe>
                    <Link to="/home/foods" className="btn btn-danger mt-5" style={{position:"relative",right:"200px",top:"15px"}}> &larr; Back To Post</Link>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;