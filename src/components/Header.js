import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Header as NativeHeader, Left, Button, Icon, Body, Title, Right } from 'native-base';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { headerStyle, iconStyle } from '../theme/containerStyle';
import colors from '../theme/colors';

const styles = StyleSheet.create({
    title: {
        color: colors.white,
    },
    header: headerStyle,
    icon: iconStyle,
});

const HeaderInner = ({ title, returnButton, settingsButton, navigation: { push, pop } }) => (
    <NativeHeader style={styles.header} iosBarStyle="light-content" androidStatusBarColor={colors.black}>
        <Left>
            {'ios' === Platform.OS && returnButton ?
                <Button
                    transparent
                    onPress={() => pop()}
                >
                    <Icon name="arrow-back" style={styles.icon} />
                </Button> : null
            }
        </Left>
        <Body>
            <Title style={styles.title}>
                {title || ''}
            </Title>
        </Body>
        <Right>
            {settingsButton ?
                <Button
                    transparent
                    onPress={() => push('Settings')}
                >
                    <Icon name="settings" style={styles.icon} />
                </Button> : null
            }
        </Right>
    </NativeHeader>
);

HeaderInner.propTypes = {
    title: PropTypes.string,
    returnButton: PropTypes.bool,
    settingsButton: PropTypes.bool,
    navigation: PropTypes.shape({
        pop: PropTypes.func,
        push: PropTypes.func,
    }),
};

const Header = withNavigation(HeaderInner);

export default Header;
