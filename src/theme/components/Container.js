import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

export default () => ({
    flex: 1,
    height: 'ios' === Platform.OS ? deviceHeight : deviceHeight - 20,
});
