import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAuthedUser } from "../../actions/users";
import { useAuth } from "../../utils/helpers";

export default function AuthButton() {
  let auth = useAuth();
  let history = useHistory();
  let authedUser = useSelector((state) => state.authedUser);
  let dispatch = useDispatch();

  return authedUser ? (
    <p>
      Welcome!{" "}
      <button
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
