import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/scss/style.sass";
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import Footer from './components/Footer';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import PostsShow from './components/PostsShow';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
        <HeaderComponent/>
            <BrowserRouter>
                <Switch>
                    <React.Fragment>
                        <Route exact path="/posts/new" component={PostsNew} />
                        <Route exact path="/posts/:id" component={PostsShow} />
                        <Route exact path="/" component={PostsIndex} />
                    </React.Fragment>
                </Switch>
            </BrowserRouter>
        <Footer/>
    </Provider>
  );
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
