import image from '../images/ukraine_field.jpg';

const Background:React.FC = () => {
    return (
        <img alt="" src={image} className="w-screen h-screen left-0 top-0 fixed z-[-1] object-cover" />
    )
}

export default Background;