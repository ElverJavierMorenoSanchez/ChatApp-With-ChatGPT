import { useEffect, useState } from "react";
import { usePostLoginMutation, usePostSignupMutation } from "@/state/api";

const Login = ({ setUser, setSecret }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, resulLogin] = usePostLoginMutation();
  const [triggerSignUp] = usePostSignupMutation();

  const handleLogin = () => {
    triggerLogin({ username, password });
  };

  const handleRegister = () => {
    triggerSignUp({ username, password });
  };

  useEffect(() => {
    if (resulLogin.data?.response) {
      setUser(username);
      setSecret(password);
    }
  }, [resulLogin.data]); //eslint-disable-line

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="title">CHATGPT APP</h2>
        <p
          className="register-change"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Already a user?" : "Are you a new user?"}
        </p>
        <div className="">
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-actions">
          {isRegister ? (
            <button type="button" onClick={handleRegister}>
              Register
            </button>
          ) : (
            <button type="button" onClick={handleLogin}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
