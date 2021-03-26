import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import moi from './moi.jpg';

const Profile = props => {

    return (
        <>
            <div style={img_r}> {props.children} </div>
            <br />
            <h1 style={profile}> {props.fullName} </h1>
            <h1 style={bio_style}> {props.bio} </h1>
            <h1 style={profile}> {props.profession} </h1>
            {window.onload = () => props.handleName()}
        </>
    );
};
const handleName = () => {
    alert( "Welcome User To your Profile" );
};

Profile.defaultProps = {
    fullName: "User User", bio: "I love programming", profession: "Fullstrack Developer",
    handleName: handleName, children: <img src={moi} className="rounded-circle"></img> 

};
Profile.propTypes = {
    children: PropTypes.node.isRequired,
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
};
const img_r = {
    width: "100px"
}
const profile = {
    fontWeight: "bold",
    left: "0px",
    right: " 0px",
    top: "-70px",
    color: "black",
    fontFamily: "Open Sans",
    fontSize: "20px",
    textAlign: "center"
}

const bio_style = {
    fontWeight: "600",
    fontSize: "15px",
    letterSpacing: "1.5px",
    fontWeight: "bold",
    left: "0px",
    right: "0px",
    top: "-70px",
    color: "black",
    fontFamily: "Open Sans"
}
export default Profile;