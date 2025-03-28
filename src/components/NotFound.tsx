import  notFound  from '../assets/location_not_found.png';

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={notFound} />
            <p>Oops! Invalid location</p>
        </div>

    )
}

export default NotFound;