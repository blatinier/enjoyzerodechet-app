import { Platform } from 'react-native';
import variable from '../variables/platform';

export default (variables = variable) => {
    const { platformStyle } = variables;

    return {
        elevation: 3,
        height: 50,
        flexDirection: 'row',
        shadowColor: 'material' === platformStyle ? '#000' : undefined,
        shadowOffset: 'material' === platformStyle ? { width: 0, height: 2 } : undefined,
        shadowOpacity: 'material' === platformStyle ? 0.2 : undefined,
        shadowRadius: 'material' === platformStyle ? 1.2 : undefined,
        justifyContent: 'space-around',
        borderBottomWidth: 'ios' === Platform.OS ? variables.borderWidth : 0,
        borderColor: variables.topTabBarBorderColor,
    };
};
