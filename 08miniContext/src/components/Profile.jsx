import useUserContext from "../context/UserContext";

function Profile() {
  const { user } = useUserContext();
  // console.log(user);

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      <div>Welcome {user.username}</div>
      <div>Your Password is {user.password}</div>
    </div>
  );
}

export default Profile;
