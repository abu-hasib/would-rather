const GotoLink = ({ link, activeOnlyWhenExact, toggleSidebar }) => {
  let match = useRouteMatch({
    path: link.to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li>
      <Link to={link.to}>{link.title}</Link>
    </li>
  );
};
