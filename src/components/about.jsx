import Banner from "./banner";
import about from "../styles/about.css"


const About = () => {
    let title = "About Page";
    return (
        <div className="about">
            <Banner data={title} />
            <div className="about1 row p-5">
                <div className="aboutimage col-lg-6 col-sm-12 p-4">
                    <img src="/images/food8.jpeg" alt="food7" className="rounded-4" height="680px" width="500px" />
                </div>
                <div className="abouttext col-lg-6 p-4 col-sm-12">
                    <h1 className="fw-bolder">About Stories</h1>
                    <p className="fs-4">Far far away,behind the word mountains, far from the countries Vokalia and Consonatia</p>
                    <div className="about6 row">
                        <div className="about2 rounded-3 m-5 col-6">
                            <h1 className="text-center fw-bolder">10</h1>
                            <p className="text-center fs-5">Years of Experienced</p>
                        </div>
                        <div className="about3 rounded-3 m-5 col-6">
                            <h1 className="text-center fw-bolder">200</h1>
                            <p className="text-center fs-5">Foods</p>
                        </div>
                        <div className="about4 rounded-3 m-5 col-6">
                            <h1 className="text-center fw-bolder">300</h1>
                            <p className="text-center fs-5">LifeStyle</p>
                        </div>
                        <div className="about5 rounded-3 m-5 col-6">
                            <h1 className="text-center fw-bolder">40</h1>
                            <p className="text-center fs-5">Haapy customers</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;