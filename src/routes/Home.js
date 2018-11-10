import React from 'react';
import { connect } from 'react-redux';
import { flowRight } from 'lodash/fp';
import { StackActions, NavigationActions } from 'react-navigation';
import { lifecycle } from 'recompose';
import LoadingScreen from './LoadingScreen';

const HomeInner = () => <LoadingScreen />;

const mapStateToProps = ({ welcome: { firstTimer } }) => ({ firstTimer });

const Home = flowRight(
    connect(mapStateToProps),
    lifecycle({
        componentDidMount() {
            const homeAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: this.props.firstTimer ? 'Welcome' : 'CategoriesList' })],
            });
            this.props.navigation.dispatch(homeAction);
        },
    }),
)(HomeInner);

export default Home;
