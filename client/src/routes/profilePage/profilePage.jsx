import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "../../context /AuthContext";


function ProfilePage() {

  const {updateUser, currUser} = useContext(AuthContext);

  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try{
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    }catch(err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Profile</h1>
            <Link to="/profile/update">
            <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Profile Picture:
              <img
                src={currUser.avatar || "/anonymous.jpeg"}
                alt=""
              />
            </span>
            <span>
              Username: <b>{currUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My Restaurant Posts</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved Restaurants</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
