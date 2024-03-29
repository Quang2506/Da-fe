import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import Home from '../routes/Home';
import Login from './Auth/Login';
import HomePage from './HomePage/HomePage';
import System from '../routes/System';
import CustomScrollbars from '../components/CustomScrollbars';
import DetailDoctor from './Patient/Doctor/detailDoctor';
import { CustomToastCloseButton } from '../components/CustomToast';
import VerifyEmail from './Patient/VerifyEmail/verifyEmail';
class App extends Component {

   
    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                      
                        {/* {this.props.isLoggedIn && <Header />} */}

                        <div className="content-container">
                            <CustomScrollbars style= {{height:'100vh',width:'100%'}}>
                            <Switch>
                                <Route path={path.HOME} exact component={(Home)} />
                                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                <Route path={path.HOMEPAGE} component={HomePage} />
                                <Route path={path.DETAIL_DOCTOR} component={DetailDoctor}/>
                                <Route path={ path.VERIFY_EMAIL_BOOKING} component={VerifyEmail}/>
                            </Switch>
                            </CustomScrollbars>
                        </div>

                        <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);