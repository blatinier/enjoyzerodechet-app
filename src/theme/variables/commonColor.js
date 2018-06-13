import color from 'color';

import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  'ios' === platform && 812 === deviceHeight && 375 === deviceWidth;

export default {
    platformStyle,
    platform,

    // Android
    androidRipple: true,
    androidRippleColor: 'rgba(256, 256, 256, 0.3)',
    androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
    btnUppercaseAndroidText: true,

    // Badge
    badgeBg: '#ED1727',
    badgeColor: '#fff',
    badgePadding: 'ios' === platform ? 3 : 0,

    // Button
    btnFontFamily: 'ios' === platform ? 'System' : 'Roboto_medium',
    btnDisabledBg: '#b5b5b5',
    buttonPadding: 6,
    get btnPrimaryBg() {
        return this.brandPrimary;
    },
    get btnPrimaryColor() {
        return this.inverseTextColor;
    },
    get btnInfoBg() {
        return this.brandInfo;
    },
    get btnInfoColor() {
        return this.inverseTextColor;
    },
    get btnSuccessBg() {
        return this.brandSuccess;
    },
    get btnSuccessColor() {
        return this.inverseTextColor;
    },
    get btnDangerBg() {
        return this.brandDanger;
    },
    get btnDangerColor() {
        return this.inverseTextColor;
    },
    get btnWarningBg() {
        return this.brandWarning;
    },
    get btnWarningColor() {
        return this.inverseTextColor;
    },
    get btnTextSize() {
        return 'ios' === platform ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
    },
    get btnTextSizeLarge() {
        return this.fontSizeBase * 1.5;
    },
    get btnTextSizeSmall() {
        return this.fontSizeBase * 0.8;
    },
    get borderRadiusLarge() {
        return this.fontSizeBase * 3.8;
    },
    get iconSizeLarge() {
        return this.iconFontSize * 1.5;
    },
    get iconSizeSmall() {
        return this.iconFontSize * 0.6;
    },

    // Card
    cardDefaultBg: '#fff',
    cardBorderColor: '#ccc',

    // CheckBox
    CheckboxRadius: 'ios' === platform ? 13 : 0,
    CheckboxBorderWidth: 'ios' === platform ? 1 : 2,
    CheckboxPaddingLeft: 'ios' === platform ? 4 : 2,
    CheckboxPaddingBottom: 'ios' === platform ? 0 : 5,
    CheckboxIconSize: 'ios' === platform ? 21 : 16,
    CheckboxIconMarginTop: 'ios' === platform ? undefined : 1,
    CheckboxFontSize: 'ios' === platform ? 23 / 0.9 : 17,
    checkboxBgColor: '#039BE5',
    checkboxSize: 20,
    checkboxTickColor: '#fff',

    // Color
    brandPrimary: 'ios' === platform ? '#007aff' : '#3F51B5',
    brandInfo: '#62B1F6',
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandDark: '#000',
    brandLight: '#f4f4f4',

    // Font
    DefaultFontSize: 16,
    fontFamily: 'ios' === platform ? 'System' : 'Roboto',
    fontSizeBase: 15,
    get fontSizeH1() {
        return this.fontSizeBase * 1.8;
    },
    get fontSizeH2() {
        return this.fontSizeBase * 1.6;
    },
    get fontSizeH3() {
        return this.fontSizeBase * 1.4;
    },

    // Footer
    footerHeight: isIphoneX ? 89 : 55,
    footerDefaultBg: 'ios' === platform ? '#F8F8F8' : '#3F51B5',
    footerPaddingBottom: isIphoneX ? 34 : 0,

    // FooterTab
    tabBarTextColor: 'ios' === platform ? '#737373' : '#bfc6ea',
    tabBarTextSize: 'ios' === platform ? 14 : 11,
    activeTab: 'ios' === platform ? '#007aff' : '#fff',
    sTabBarActiveTextColor: '#007aff',
    tabBarActiveTextColor: 'ios' === platform ? '#2874F0' : '#fff',
    tabActiveBgColor: 'ios' === platform ? '#cde1f9' : '#3F51B5',

    // Header
    toolbarBtnColor: 'ios' === platform ? '#007aff' : '#fff',
    toolbarDefaultBg: 'ios' === platform ? '#F8F8F8' : '#3F51B5',
    // eslint-disable-next-line no-nested-ternary
    toolbarHeight: 'ios' === platform ? (isIphoneX ? 88 : 64) : 56,
    toolbarSearchIconSize: 'ios' === platform ? 20 : 23,
    toolbarInputColor: 'ios' === platform ? '#CECDD2' : '#fff',
    searchBarHeight: 'ios' === platform ? 30 : 40,
    searchBarInputHeight: 'ios' === platform ? 30 : 50,
    toolbarBtnTextColor: 'ios' === platform ? '#007aff' : '#fff',
    iosStatusbar: 'dark-content',
    toolbarDefaultBorder: 'ios' === platform ? '#a7a6ab' : '#3F51B5',
    get statusBarColor() {
        return color(this.toolbarDefaultBg)
            .darken(0.2)
            .hex();
    },
    get darkenHeader() {
        return color(this.tabBgColor)
            .darken(0.03)
            .hex();
    },

    // Icon
    iconFamily: 'Ionicons',
    iconFontSize: 'ios' === platform ? 30 : 28,
    iconHeaderSize: 'ios' === platform ? 33 : 24,

    // InputGroup
    inputFontSize: 17,
    inputBorderColor: '#D9D5DC',
    inputSuccessBorderColor: '#2b8339',
    inputErrorBorderColor: '#ed2f2f',
    inputHeightBase: 50,
    get inputColor() {
        return this.textColor;
    },
    get inputColorPlaceholder() {
        return '#575757';
    },

    // Line Height
    btnLineHeight: 19,
    lineHeightH1: 32,
    lineHeightH2: 27,
    lineHeightH3: 22,
    lineHeight: 'ios' === platform ? 20 : 24,

    // List
    listBg: 'transparent',
    listBorderColor: '#c9c9c9',
    listDividerBg: '#f4f4f4',
    listBtnUnderlayColor: '#DDD',
    listItemPadding: 'ios' === platform ? 10 : 12,
    listNoteColor: '#808080',
    listNoteSize: 13,
    listItemSelected: 'ios' === platform ? '#007aff' : '#3F51B5',

    // Progress Bar
    defaultProgressColor: '#E4202D',
    inverseProgressColor: '#1A191B',

    // Radio Button
    radioBtnSize: 'ios' === platform ? 25 : 23,
    radioSelectedColorAndroid: '#3F51B5',
    radioBtnLineHeight: 'ios' === platform ? 29 : 24,
    get radioColor() {
        return this.brandPrimary;
    },

    // Segment
    segmentBackgroundColor: 'ios' === platform ? '#F8F8F8' : '#3F51B5',
    segmentActiveBackgroundColor: 'ios' === platform ? '#007aff' : '#fff',
    segmentTextColor: 'ios' === platform ? '#007aff' : '#fff',
    segmentActiveTextColor: 'ios' === platform ? '#fff' : '#3F51B5',
    segmentBorderColor: 'ios' === platform ? '#007aff' : '#fff',
    segmentBorderColorMain: 'ios' === platform ? '#a7a6ab' : '#3F51B5',

    // Spinner
    defaultSpinnerColor: '#45D56E',
    inverseSpinnerColor: '#1A191B',

    // Tab
    tabDefaultBg: 'ios' === platform ? '#F8F8F8' : '#3F51B5',
    topTabBarTextColor: 'ios' === platform ? '#6b6b6b' : '#b3c7f9',
    topTabBarActiveTextColor: 'ios' === platform ? '#007aff' : '#fff',
    topTabBarBorderColor: 'ios' === platform ? '#a7a6ab' : '#fff',
    topTabBarActiveBorderColor: 'ios' === platform ? '#007aff' : '#fff',

    // Tabs
    tabBgColor: '#F8F8F8',
    tabFontSize: 15,

    // Text
    textColor: '#000',
    inverseTextColor: '#fff',
    noteFontSize: 14,
    get defaultTextColor() {
        return this.textColor;
    },

    // Title
    titleFontfamily: 'ios' === platform ? 'System' : 'Roboto_medium',
    titleFontSize: 'ios' === platform ? 17 : 19,
    subTitleFontSize: 'ios' === platform ? 12 : 14,
    subtitleColor: 'ios' === platform ? '#000' : '#fff',
    titleFontColor: 'ios' === platform ? '#000' : '#fff',

    // Other
    borderRadiusBase: 'ios' === platform ? 5 : 2,
    borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    contentPadding: 10,
    dropdownLinkColor: '#414142',
    inputLineHeight: 24,
    deviceWidth,
    deviceHeight,
    isIphoneX,
    inputGroupRoundedBorderRadius: 30,
};
