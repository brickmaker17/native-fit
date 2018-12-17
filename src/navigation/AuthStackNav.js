import { createStackNavigator } from 'react-navigation';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';


export default createStackNavigator(
    {
        Login: {
            navigationOptions: () => ({
                header: null,
            }),
            screen: Login,
        },
        Signup: {
            navigationOptions: () => ({
                header: null,
            }),
            screen: Signup,
        }
    },
    {
        initialRouteName: 'Login',
    }
);