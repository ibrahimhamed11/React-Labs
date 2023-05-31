import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom';
function Auth() {
    // here check
    const loc = useLocation();
    console.log(loc);
    let flag = localStorage.getItem('flag');
    return (
        <>
            {flag == 'ok' ? <Outlet /> : <Navigate to='/login' state={loc.pathname} />}

        </>
    )
}

export default Auth