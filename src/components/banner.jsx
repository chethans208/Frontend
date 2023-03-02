import banner from '../styles/banner.css'
const Banner = (props) => {
    let title = props.data
    return (
        <div className="banner d-flex align-items-center justify-content-center">
            <div className="banner1">
                <h1 className='text-info fw-bolder'>{title}</h1>
            </div>

        </div>
    );
}

export default Banner;