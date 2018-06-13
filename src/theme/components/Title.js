import { Platform } from 'react-native';

import variable from '../variables/platform';

export default (variables = variable) => ({
    fontSize: variables.titleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.titleFontColor,
    fontWeight: 'ios' === Platform.OS ? '600' : undefined,
    textAlign: 'center',
});
