import React from 'react';

import {
    StyleSheet,
    Dimensions
} from 'react-native';

var { width, height } = Dimensions.get('window');
const header = 70 ;
const containerHeight = height-header;
const COLOR_WHITE = '#EDEDED';

var css = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
    },
    fill: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'row',
        height: containerHeight*0.2,
        padding: containerHeight*0.04
    },
    thumb: {
        width: containerHeight*0.12,
        height: containerHeight*0.12,
        resizeMode: "stretch",
        borderRadius: 5,
        marginRight: 20
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    restaurantTitle: {
      fontFamily: 'Bodoni 72',
      fontSize: 20,
      fontWeight: '800',
      width: width*0.4,
      color: COLOR_WHITE
    },
    restaurantLocation: {
      fontFamily: 'Avenir',
      fontSize: 15,
      color: COLOR_WHITE
    },
    image: {
        height: 300,
        width: 300
    },
    oneHalfWidth: {
        width: width*0.5
    },
    oneHalf: {
        height: containerHeight*0.5
    },
    oneThird: {
        height: containerHeight*0.3333
    },
    oneFourth: {
        height: containerHeight*0.25
    },
    oneSixth: {
        height: containerHeight*0.1666
    },
    oneTenth: {
        height: containerHeight*0.10
    },
    one11: {
        height: containerHeight/11
    },
    one13: {
        height: containerHeight/13
    },
    twoThirds: {
        height: containerHeight*0.6667
    },
    twoFifths: {
        height: containerHeight*0.4
    },
    threeFifths: {
        height: containerHeight*0.6
    },
    fourFifths: {
        height: containerHeight*0.8
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    xspad: {
        padding: 2
    },
    spad: {
        padding: 10
    },
    mpad: {
        padding: 20
    },
    lpad: {
        padding: 30
    },
    hCenter: {
        alignItems: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: COLOR_WHITE,
        width: width*0.7
    },
    h1: {
        fontSize: 34
    },
    h2: {
        fontSize: 24
    },
    h3: {
        fontSize: 20
    },
    h4: {
        fontSize: 16
    },
    skyblue: {
        color: '#48BBEC'
    },
    bkSkyblue: {
        backgroundColor: '#48BBEC'
    },
    black: {
        color: '#000000'
    },
    bkBlack: {
        backgroundColor: '#000000'
    },
    white: {
        color: '#FFFFFF'
    },
    bkWhite: {
        backgroundColor: '#FFFFFF'
    },
    gray: {
        color: '#656565'
    },
    bkGray: {
        backgroundColor: '#656565'
    },
    bold: {
        fontWeight: 'bold'
    }
});

module.exports = css;
