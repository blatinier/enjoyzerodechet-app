import { createStackNavigator } from 'react-navigation';
import Welcome from './Welcome';
import Home from './Home';
import CardsList from './CardsList';

export const DrawerNavigator = null;

export const AppNavigator = createStackNavigator({
    Welcome: { screen: Welcome },
    Home: { screen: Home },
    CardsList: { screen: CardsList },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null,
    },
});
