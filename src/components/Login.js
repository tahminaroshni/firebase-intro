import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

const Login = () => {
  const naviagte = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, providerGoogle)
      .then(data => {
        console.log(data);
        naviagte('/profile');
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="login flex flex-col items-center gap-5">
      <h2 className="section-title text-2xl text-gray-500 font-medium">Login</h2>
      <button
        onClick={handleGoogleSignIn}
        className="bg-gray-700 text-white h-12 w-72 rounded hover:bg-rose-500 duration-300">Google Sign In</button>
    </div>
  );
};

export default Login;