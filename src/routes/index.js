import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import CardsList from './CardsList';
import Login from './Login';
import Settings from './Settings';

export const DrawerNavigator = null;

export const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    CardsList: { screen: CardsList },
    Login: { screen: Login },
    Settings: { screen: Settings },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null,
    },
});
