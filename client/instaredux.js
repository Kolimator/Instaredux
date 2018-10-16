import React from "react"
import { render} from "react-dom"
import Main from "./components/Main"
import Single from "./components/Single"
import Photogrid from "./components/Photogrid"
import {Router, Route, IndexRoute, browserHistory} from "react-router"
import css from './styles/style.styl';
import {Provider} from "react-redux"
import store,{history} from "./store"
import App from "./components/App"

const router =(
    <Provider store={store}>
<Router history={history}>
    <Route path="/" component={App}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
    </Route>
</Router>
</Provider>
)

render(router, document.getElementById("root"))