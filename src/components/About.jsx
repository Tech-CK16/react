import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <div className="userContextData">
                loggedIn User
                <UserContext.Consumer>{({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}</UserContext.Consumer>
            </div>
            <h2>This is a Class Based Component for About Us Page.</h2>
            <UserClass name={"Chethan"} location={"Bengaluru"} />
        </div>
    );
};

export default About;
