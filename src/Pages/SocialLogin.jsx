import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";


const SocialLogin = () => {
  const { SignInGoogle } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();

  const handleSocialLogin = () => {
    SignInGoogle()
      .then((res) => {
        const users = {
           name:res.user.email,
           email:res.user.displayName
        }
        toast.success(" Successfully Login");
        setTimeout(() => {
          navigate("/");
        }, 2000);

        axios.post('https://library-management-server-three.vercel.app/user',users)
        .then(res=>{
         console.log(res.data);
        })

      })

      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div>
      <div className="p-4 space-y-3 mb-7 text-center grid w-96 m-auto">
        <button
          onClick={handleSocialLogin}
          className="btn btn-outline  text-blue-600 "
        >
          <FaGoogle></FaGoogle>
          Google Login
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default SocialLogin;