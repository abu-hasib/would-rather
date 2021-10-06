import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAuthedUser } from "../../actions/users";
import { useAuth } from "../../utils/helpers";

export default function AuthButton() {
  let auth = useAuth();
  let history = useHistory();
  let authedUser = useSelector((state) => state.authedUser);
  let users = useSelector((state) => state.users);
  let dispatch = useDispatch();

  return authedUser ? (
    <p className="block p-1 ml-2">
      <span>Welcome, {users[authedUser].name}</span>
      <img
        className="inline rounded-full h-8 w-8 mr-3 ml-3"
        src={users[authedUser].avatarURL}
        alt={users[authedUser].name}
      />
      <button
        className="p-2 ml-2 bg-yellow-400 text-black font-semibold leading-none border border-yellow-400 rounded hover:border-transparent hover:bg-yellow-500"
        onClick={() => {
          dispatch(setAuthedUser(null));
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}
