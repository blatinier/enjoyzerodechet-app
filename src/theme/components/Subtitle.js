import variable from '../variables/platform';

export default (variables = variable) => ({
    fontSize: variables.subTitleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.subtitleColor,
    textAlign: 'center',
});
