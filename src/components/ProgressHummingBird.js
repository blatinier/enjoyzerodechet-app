import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import colors from '../theme/colors';

const styles = StyleSheet.create({
    progress: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 260,
        width: 260,
    },
});

const { ClipPath, Defs, Path, Rect, Text } = Svg;
const maxWidth = 369;
const scale = 0.7;

const ProgressHummingBird = ({ percent }) => (
    <View style={styles.progress}>
        <Svg height={maxWidth} width={maxWidth} scale={scale}>
            <Defs>
                <ClipPath id="progress">
                    <Rect x={0} y={0} width={(percent / 100) * maxWidth} height={maxWidth} />
                </ClipPath>
            </Defs>
            <Rect scale={scale} x={120} y={250} width={400} height={50} fill={colors.primary} />
            <Text
                scale={scale}
                fill="black"
                fontSize={30}
                x={175}
                y={275}
            >
                DE MISSIONS
            </Text>
            <Text
                scale={scale}
                fill="black"
                fontSize={30}
                fontWeight="100"
                x={175}
                y={310}
            >
                ACCOMPLIES
            </Text>
            <Path
                scale={scale}
                d="M368.984,54.239c-0.2-2.363-3.602-4.029-8.014-3.781c-6.717,0.388-14.266,0.905-21.565,1.405  c-14.843,1.017-30.19,2.068-39.159,2.068c-2.694,0-4.731-0.095-6.056-0.284c-2.423-0.344-6.444-3.176-11.102-6.455  c-9.942-7-23.56-16.588-39.723-16.588c-2.832,0-5.669,0.304-8.432,0.905c-15.967,3.468-26.362,18.478-35.535,31.72  c-7.212,10.413-13.44,19.406-20.757,20.741c-0.581,0.106-1.292,0.16-2.113,0.16c-11.548,0.001-42.617-10.297-72.664-20.256  C75.47,54.461,48.648,45.571,37.373,44.886c-9.289-0.567-14.485,0.895-15.474,4.354c-0.965,3.371,2.688,7.366,4.765,8.659  c1.681,1.047,3.531,1.921,5.491,2.846c6.889,3.251,14.696,6.936,20.011,20.214c1.742,4.354,6.689,6.354,11.926,8.47  c5.809,2.349,11.814,4.777,13.118,10.577c1.625,7.235,11.714,11.985,19.137,15.213c-14.482,9.615-55.196,38.507-70.968,68.962  c-5.19,10.023-11.507,18.457-16.582,25.234c-6.261,8.36-10.04,13.407-8.423,16.639c0.872,1.743,3.156,2.555,7.188,2.555  c6.55,0,18.407-2.078,39.648-6.949c6.166-1.414,12.875-2.801,19.978-4.269c20.867-4.314,44.304-9.159,58.296-15.895  c-16.273,25.662-47.031,65.679-69.732,95.214c-18.493,24.06-28.178,36.733-28.911,39.256c-0.215,0.739-0.151,1.343,0.188,1.796  c0.216,0.286,0.633,0.628,1.398,0.628c6.284,0,44.889-30.939,56.154-43.111c0.346-0.374,0.659-0.707,0.943-1.005  c-1.55,2.696-3.919,6.456-5.712,9.3c-2.784,4.417-4.514,7.181-4.969,8.286c-1.738,4.226-2.125,6.56-1.291,7.804  c0.376,0.562,0.99,0.871,1.729,0.871c3.339,0,10.599-6.57,21.294-16.595c3.608-3.381,7.07-6.626,9.599-8.726  c-0.329,0.689-0.689,1.425-1.021,2.102c-3.162,6.453-4.037,8.638-3.354,9.736c0.239,0.382,0.641,0.602,1.103,0.603h0.001  c0.092,0,0.19-0.009,0.298-0.029c4.169-0.805,27.33-23.551,34.014-35.516c17.109-30.625,36.712-42.706,55.669-54.39  c10.362-6.387,21.077-12.991,31.317-22.528c33.605-31.299,32.99-57.396,32.583-74.666c-0.159-6.729-0.284-12.045,1.999-15.033  c8.293-10.855,24.824-29.571,27.345-31.534c4.745-3.694,26.678-7.092,49.898-10.69c8.26-1.28,16.802-2.604,25.092-4.014  C368.228,58.044,369.099,55.593,368.984,54.239z"
            />
            <Path
                scale={scale}
                d="m 358.55114,54.683788 c -0.18694,-2.24272 -3.40495,-2.387957 -7.58074,-2.086273 -6.35737,0.469218 -14.42706,1.073474 -21.33537,1.657833 -14.04846,1.18854 -27.64916,1.029733 -36.13745,1.163888 -2.54961,0.0403 -4.47734,-0.01953 -5.73115,-0.179312 -2.29278,-0.290691 -6.09547,-2.921982 -10.50057,-5.968552 -9.40222,-6.503844 -22.28085,-15.412253 -37.57756,-15.170491 -2.68022,0.04236 -5.36547,0.373706 -7.98097,0.9862 -13.72747,4.921894 -22.19297,18.879963 -30.88744,31.601908 -6.83576,10.004025 -15.51324,17.71902 -22.43939,19.097201 -0.54996,0.109432 -1.22291,0.171389 -1.99991,0.183669 C 165.45152,86.143537 136.05792,76.821401 107.63117,67.806144 80.768318,59.285067 55.392691,51.237516 44.722664,50.755164 35.932085,50.355248 29.625942,47.198434 28.686528,50.500537 c -0.916615,3.218118 5.311023,9.272173 7.275429,10.46993 1.589861,0.969882 5.189437,2.697623 7.043468,3.547399 6.516559,2.986588 10.664706,7.759109 15.681701,20.298553 5.8059,3.649437 8.636198,3.626583 14.977604,7.408816 5.495336,2.145512 7.47691,4.825575 8.70528,10.318185 1.530747,6.8516 15.235887,7.97814 18.09626,14.17166 -13.71531,9.35439 -52.275757,37.42134 -67.232556,66.60062 -4.921742,9.60313 -10.908513,17.71301 -15.718215,24.22954 -5.9337,8.03871 -9.5151503,12.89171 -7.9880125,15.93911 0.8235395,1.64344 2.9843215,2.38099 6.8002185,2.32067 6.198941,-0.098 17.422495,-2.25018 37.529865,-7.19713 5.836926,-1.43605 12.187718,-2.85456 18.911471,-4.35594 19.752861,-4.41199 45.637689,-10.75427 58.886419,-17.36522 -15.4262,24.63168 -45.037656,63.58491 -66.551168,91.99352 -17.525636,23.14239 -29.764727,37.96006 -30.460937,40.3688 -0.204213,0.70553 -0.320375,-0.42543 0,0 0.204146,0.26858 0.598452,0.58736 1.322459,0.57592 5.947194,-0.094 42.513699,-30.07478 53.186968,-41.81112 0.327826,-0.36063 12.614738,-5.15061 1.786271,-2.66368 -1.469592,2.58536 -3.71534,6.19417 -5.415053,8.92383 -2.639158,4.23941 -4.710869,7.94904 -4.710869,7.94904 -1.649031,4.04226 -2.910418,7.96065 -2.122348,9.13043 0.355288,0.52848 0.936072,0.81296 1.63547,0.8019 3.160042,-0.05 10.037424,-6.40242 20.169127,-16.08982 3.41795,-3.26716 6.69761,-6.40288 9.09314,-8.43646 -0.31204,0.65972 -0.65347,1.36458 -0.96834,2.01293 -2.99892,6.18001 -3.82917,8.26964 -3.18388,9.30293 0.22582,0.35946 0.60605,0.56253 1.04329,0.55657 l 9.4e-4,-1e-5 c 0.0871,-10e-4 0.17983,-0.0118 0.28207,-0.0321 3.94635,-0.8274 25.8885,-22.79084 32.22609,-34.26193 16.22231,-29.36085 34.7866,-41.13544 52.73912,-52.52306 9.81295,-6.22497 19.96021,-12.66145 29.66079,-21.87825 31.83485,-30.24814 31.27862,-55.04061 30.91053,-71.44734 -0.14384,-6.39262 -0.25686,-11.44292 1.90672,-14.31674 7.85926,-10.440262 23.52277,-28.474566 25.9106,-30.377842 4.49434,-3.581628 22.94317,-7.601432 44.92221,-11.368163 7.81857,-1.34002 18.21603,-2.263674 26.06312,-3.727691 6.73012,-1.257241 7.55686,-3.599609 7.44936,-4.884685 z"
                clipPath="url(#progress)"
                fill={colors.primary}
                fillOpacity={1}
            />
            <Text
                scale={scale}
                fill={colors.warmGray}
                fontSize={45}
                fontWeight="bold"
                x={115}
                y={150}
            >
                {Math.round(percent)} %
            </Text>
        </Svg>
    </View>
);

ProgressHummingBird.propTypes = {
    percent: PropTypes.number.isRequired,
};

export default ProgressHummingBird;
