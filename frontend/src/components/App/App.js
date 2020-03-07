import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import GlobalStyle from '../Styles/globalStyles';
// import Signup from '../Signup/index';
// import Login from '../Login/index';
// import UserProfileForm from '../UserProfile/presenter';
// import Header from '../Header/presenter'
// import AddPost from '../general_components/addPost';
// import Trending from '../Trending/presenter';
import Feed from '../Feed/presenter'
import Post from '../Post/presenter';
import Comment from '../Comment/presenter'
import UserProfileForm from '../UserProfile/presenter'

class App extends React.Component {

    render(){
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle/>
                    <UserProfileForm/>
                </Fragment>
            </Provider>
        );
    }
}

export default App;