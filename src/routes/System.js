import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import Header from '../containers/System/Header/Header';
import UserRedux from '../containers/System/UserRedux';
import ManagerDoctor from '../containers/System/ManagerDoctor';
import ManagerSchedule from '../containers/System/ManagerSchedule';
import Specialty from '../containers/System/managerSpecialties'
//import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';

const System =(props)=> {
    
        const { systemMenuPath } = props;
        //console.log('aa',systemMenuPath,this.props)
        return (
            <>
             {props.isLoggedIn && <Header />} 
            <div className="system-container">
                <div className="system-list">
                    <Switch>
                        <Route path="/system/user-manager" component={UserManage} />
                         <Route path="/system/user-redux" component={UserRedux} /> 
                         <Route path="/system/doctor-manager" component={ManagerDoctor}/>
                        <Route path="/system/doctor-schedule" component={ManagerSchedule}/>
                        <Route path = "/system/specialty-manager" component= {Specialty}/>
                         <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
            </>
        );
    
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
