import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is a Class Based Component for About Us Page.</h2>
            <UserClass name={"Chethan"} location={"Bengaluru"} />
        </div>
    );
};

export default About;
