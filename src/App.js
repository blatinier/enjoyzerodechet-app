import React from 'react';
import { StatusBar } from 'react-native';
import { Root } from 'native-base';
import { lifecycle } from 'recompose';
import { flowRight } from 'lodash/fp';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Expo from 'expo';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf';
import { AppNavigator } from './routes';
import { setReady, setLanguage } from './actions';
import LoadingScreen from './routes/LoadingScreen';

const AppInner = ({ isReady }) => (
    <Root>
        {isReady
            ? [<StatusBar key="status-bar" barStyle="light-content" />, <AppNavigator key="app-nav" />]
            : <LoadingScreen />
        }
    </Root>
);

AppInner.propTypes = {
    isReady: PropTypes.bool,
};

const mapStateToProps = ({ loading: { isReady } }) => ({ isReady });
const mapDispatchToProps = {
    setReady,
    setLanguage,
};

const App = flowRight(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        async componentWillMount() {
            await Expo.Font.loadAsync({
                Roboto,
                Roboto_medium: RobotoMedium,
            });

            const locale = await Expo.DangerZone.Localization.getCurrentLocaleAsync();
            this.props.setLanguage(locale.slice(0, 2));

            this.props.setReady(true);
        },
    }),
)(AppInner);

export default App;
