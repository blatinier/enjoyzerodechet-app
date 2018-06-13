import { Platform } from 'react-native';

import variable from '../variables/platform';

export default (variables = variable) => ({
    '.selected': {
        'NativeBase.IconNB': {
            color: 'ios' === Platform.OS ? variables.radioColor : variables.radioSelectedColorAndroid,
            lineHeight: 'ios' === Platform.OS ? 25 : variables.radioBtnLineHeight,
            height: 'ios' === Platform.OS ? 20 : undefined,
        },
    },
    'NativeBase.IconNB': {
        color: 'ios' === Platform.OS ? 'transparent' : undefined,
        lineHeight: 'ios' === Platform.OS ? undefined : variables.radioBtnLineHeight,
        fontSize: 'ios' === Platform.OS ? undefined : variables.radioBtnSize,
    },
});
