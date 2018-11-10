import { createStackNavigator } from 'react-navigation';
import Welcome from './Welcome';
import Home from './Home';
import Category from './Category';
import CategoriesList from './CategoriesList';

export const DrawerNavigator = null;

export const AppNavigator = createStackNavigator({
    Welcome: { screen: Welcome },
    Home: { screen: Home },
    CategoriesList: { screen: CategoriesList },
    Category: { screen: Category },
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        header: null,
    },
});
