import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context /AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./profileUpdatePage.scss";
import { useContext, useState } from 'react';

function ProfileUpdatePage() {
  const [error, setError] = useState("");
  const {currUser, updateUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
  
    try {
      const res = await apiRequest.put(`/users/${currUser.id}`, { username, email, password });
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.error("Error during profile update:", err);
      if (err.response && err.response.data) {
        const errorMessage = err.response.data.message || "An unexpected error occurred.";
        setError(errorMessage);
      } else {
        setError("Failed to update profile. Please try again later.");
      }
    }
  };
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currUser.username}
              />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={currUser.avatar || "/anonymous.jpeg"} alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
