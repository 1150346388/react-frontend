import React from 'react';
import user1 from '../../images/user1-128x128.jpg';
export default class LockScreen extends React.Component {
	render() {
		var styles={
			margin:{
				margin:'0 auto'
			},
			height:{
				minHeight:1096
			},
            align:{
                textAlign:'center'
            }
		}
		return(
            <div className="content-wrapper" style={styles.height}>
			    {/* Automatic element centering */}
                <div className="lockscreen-wrapper" style={styles.margin}>
                    <div className="lockscreen-logo">
                        <a href="#"><b>Admin</b>LTE</a>
                    </div>
                    {/* User name */}
                    <div className="lockscreen-name" style={styles.align}>
                        John Doe
                    </div>

                    {/* START LOCK SCREEN ITEM */}
                    <div className="lockscreen-item">
                        {/* lockscreen image */}
                        <div className="lockscreen-image">
                            <img src={user1} alt="User Image"/>
                        </div>
                        {/* /.lockscreen-image */}

                        {/* lockscreen credentials (contains the form) */}
                        <form className="lockscreen-credentials">
                            <div className="input-group">
                                <input type="password" className="form-control" placeholder="password"/>
                                <div className="input-group-btn">
                                    <button className="btn"><i className="fa fa-arrow-right text-muted"></i></button>
                                </div>
                            </div>
                        </form>{/* /.lockscreen credentials */}

                    </div>{/* /.lockscreen-item */}
                    <div className="help-block text-center">
                        Enter your password to retrieve your session
                    </div>
                    <div className="text-center">
                        <a href="login.html">Or sign in as a different user</a>
                    </div>
                    <div className="lockscreen-footer text-center">
                      Copyright &copy; 2014-2015 <b><a href="http://almsaeedstudio.com" className="text-black">Almsaeed Studio</a></b><br/>
                      All rights reserved
                    </div>
                </div>{/* /.center */}
            </div>
        )
	}

}
