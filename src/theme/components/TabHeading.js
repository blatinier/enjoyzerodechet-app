import variable from '../variables/platform';

export default (variables = variable) => {
    const { platform } = variables;

    return {
        flexDirection: 'row',
        backgroundColor: variables.tabDefaultBg,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        '.scrollable': {
            paddingHorizontal: 20,
            flex: 'android' === platform ? 0 : 1,
            minWidth: 'android' === platform ? undefined : 60,
        },
        'NativeBase.Text': {
            color: variables.topTabBarTextColor,
            marginHorizontal: 7,
        },
        'NativeBase.Icon': {
            color: variables.topTabBarTextColor,
            fontSize: 'ios' === platform ? 26 : undefined,
        },
        '.active': {
            'NativeBase.Text': {
                color: variables.topTabBarActiveTextColor,
                fontWeight: '600',
            },
            'NativeBase.Icon': {
                color: variables.topTabBarActiveTextColor,
            },
        },
    };
};
