import React from 'react';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import {NavLink} from "react-router-dom";

const MyBreadCrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <React.Fragment>
            {breadcrumbs.map(({ breadcrumb, match }, index) => (
                <>
                    <NavLink key={match.pathname} to={match.pathname}>
                        {breadcrumb}
                    </NavLink>
                    {index !== breadcrumbs.length - 1 && '/'}
                </>
            ))}
        </React.Fragment>
    );
};

export default MyBreadCrumbs;