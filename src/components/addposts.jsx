import axios from "axios";
import { useState } from "react";
import Banner from "./banner";

const AddPosts = () => {
    let title = "Add a Posts"

    let [author, setAuthor] = useState("")
    let [Title, setTitle] = useState("")
    let [summary, setSummary] = useState("")
    let [image, setImage] = useState("")
    let [location, setLocation] = useState("")

    let handlePost = (e) => {
        e.preventDefault()
        let data = { author, Title, summary, image, location }
        if (author && Title && summary && image && location) {
            axios.post("http://localhost:4000/add-post", data)
                .then(res => {
                    alert(res.data.message)
                }).catch(res => {
                    alert(res.data.message)
                })
        }
        else {
            alert("Please fill all the fields")
        }
    }

    return (
        <div div className="addposts" >
            <Banner data={title} />
            <div className="add1 row p-5">
                <div className="add2 col-6 p-5">
                    <img src="/images/food3.jpeg" alt="" className="rounded-4" width="650px" height="720px" />
                </div>
                <div className="add3 col-6 p-5">
                    <h1 className="fw-bolder">ADD POST</h1> <hr size="8" color="black" noshade width="50%" />
                    <form action="" onSubmit={handlePost}>
                        <div className="add4">
                            <label htmlFor="" className="form-label">Author</label>
                            <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} name="author" />
                        </div>
                        <div className="add5">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" value={Title} onChange={(e) => setTitle(e.target.value)} name="Title" />
                        </div>
                        <div className="add6">
                            <label htmlFor="" className="form-label">Summary</label>
                            <textarea name="summary" id="" cols="30" rows="10" className="form-control" value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>
                        </div>
                        <div className="addimage">
                            <label htmlFor="" className="form-label">Images</label>
                            <input type="text" name="image" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className="addloc">
                            <label htmlFor="" className="form-label">Location</label>
                            <input type="text" name="location" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <div className="addbtn">
                            <button className="btn btn-lg btn-danger mt-3">Submit Post</button>
                        </div>
                    </form>
                </div>
            </div>

        </div >
    );
}

export default AddPosts;