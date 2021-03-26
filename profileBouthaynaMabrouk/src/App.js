import './App.css';
import Profile from './profile/Profile'
import moi from './moi.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const handleName = () => {
    alert( "Welcome Bouthayna To your Profile" );
  };
  return (
    <>
      <header>
        <div className="container text-center">

          <div className="logo">
            <h1><b>Welcome to My Profile</b></h1>
          </div>
          <h1>Flows Me</h1>
        </div>
      </header>
      <div className="contain" >
        <Profile fullName='Bouthayna Mabrouk' bio='I love programming' profession='FullStrack Developper' handleName={handleName}>
          <img src={moi} className="rounded-circle" />
        </Profile>
      </div>
      <div className="share-button">
        <span>Fllow Me</span>
        <a href="#" ><i className="fa fa-facebook-f"></i></a>
        <a href="#" ><i className="fa fa-twitter"></i></a>
        <a href="#" ><i className="fa fa-instagram"></i></a>
        <a href="#" ><i className="fa fa-linkedin"></i></a>

      </div>
    </>
  );
}

export default App;
