import { createContext, useContext } from "react";

const authContext = createContext();

export const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useProvideAuth() {
  const signin = (cb) => {
    return fakeAuth.signin(() => {
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      cb();
    });
  };

  return {
    signin,
    signout,
  };
}

export function useAuth() {
  return useContext(authContext);
}
