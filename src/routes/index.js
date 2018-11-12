import { createStackNavigator } from 'react-navigation';
import Welcome from './Welcome';
import Home from './Home';
import CardsList from './CardsList';
import CategoriesList from './CategoriesList';

export const DrawerNavigator = null;

export const AppNavigator = createStackNavigator({
    Welcome: { screen: Welcome },
    Home: { screen: Home },
    CategoriesList: { screen: CategoriesList },
    CardsList: { screen: CardsList },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null,
    },
});
