
const Profile = ({ user }) => {
  return (
    <div>
      {
        user && <div>
          <img src={user.photoURL} alt="" />
          <h3>{user.displayName}</h3>
          <p>Email: {user.email}</p>
          <p>Id: {user.uid}</p>
        </div>
      }
    </div>
  );
};

export default Profile;