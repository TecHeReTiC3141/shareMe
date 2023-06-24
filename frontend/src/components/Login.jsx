import React, {Component} from 'react';
import { GoogleOAuthProvider } from "@react-oauth/google";

class Login extends Component {
    render() {
        return (
            <GoogleOAuthProvider
                clientId="456606812667-thitf7kr69bukm71bmecv58h31afa8sj.apps.googleusercontent.com">
                <div>
                    Login
                </div>
            </GoogleOAuthProvider>
        );
    }
}

export default Login;