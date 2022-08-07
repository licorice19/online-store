import React, { useContext } from "react";
import {Switch,Route,Redirect} from 'react-router-dom'
import { Context } from "../index";
import {authRoutes,publicRoute} from "../Routes";
import {SHOP_ROUTE} from "../utils/consts";

const AppRouter = () =>{
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoute.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>

    );
};

export default AppRouter;