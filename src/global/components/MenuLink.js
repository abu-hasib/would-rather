import { Link, useRouteMatch } from "react-router-dom";

export function MenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div
      className={
        match
          ? "focus:outline-none text-black border-b-2 font-semibold text-xl border-yellow-500"
          : ""
      }
    >
      <Link to={to}>{label}</Link>
    </div>
  );
}
