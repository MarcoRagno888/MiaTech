import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }

    return (
        <>
            <h1>About</h1>
            <button className="btn" onClick={handleNavigate}>Go to Home</button>
        </>
    )
}

export default About;