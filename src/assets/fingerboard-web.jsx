import React, { useState } from 'react'
import Svg, {Path,G,Defs,Rect,Stop,LinearGradient,SvgCssUri,Use} from 'react-native-svg'
import { TouchableHighlight  } from "react-native"


export default ({ pattern, setPattern }) => {

const onGroupPress = (groupId) => () => setPattern(pattern.indexOf(groupId) !== -1 ? pattern.filter(e => e !== groupId) : [...pattern, groupId])
const setFill = (groupId) => ( pattern.indexOf(groupId) !== -1 ? "red" : "white"  )

return (<Svg width="698.91" height="163.32" version="1.1" viewBox="0 0 184.92 43.212" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
{//<Style><![CDATA[.B{fill:none}.C{stroke:#000}.D{strokeLinecap:round}.E{strokeLinejoin:round}.F{strokeMiterlimit:10}.G{strokeWidth:1.44}]]></Style>
}
    <Defs>
    <clipPath id="A">
    <Path d="M0 0v1262.88h1785.78V0H0"/>
    </clipPath>
    <clipPath id="B">
    <Path d="M0 0v1262.88h1785.78V0H0"/>
    </clipPath>
    <Path id="C" d="M14.13 0c0 7.787-6.3 14.106-14.087 14.13S-14.082 7.874-14.13.087"/>
    <LinearGradient id="linearGradient4976" x1="250.85" x2="251.49" y1="-516.35" y2="-467.76" gradientTransform="matrix(1 0 0 1.1679 0 88.813)" gradientUnits="userSpaceOnUse">
    <Stop stopColor={setFill(15)} offset="0"/>
    <Stop stopColor={setFill(15)} stopOpacity="0" offset="1"/>
    </LinearGradient>
    <LinearGradient id="linearGradient5008" x1="958.73" x2="959.05" y1="-513.97" y2="-456.54" gradientUnits="userSpaceOnUse">
    <Stop stopColor={setFill(18)} offset="0"/>
    <Stop stopColor={setFill(18)} stopOpacity="0" offset="1"/>
    </LinearGradient>
    </Defs>
    <G transform="matrix(.21706 0 0 -.21706 -38.991 114.95)">
    <G clipPath="url(#A)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.44">
    <Rect onPress={onGroupPress(18)} transform="scale(1,-1)" x="888.98" y="-528.84" width="141.92" height="84.611" ry="4.6926" fill="url(#linearGradient5008)" stroke="none" />
    <Rect onPress={onGroupPress(19)} transform="scale(1,-1)" x="748.35" y="-515.52" width="140.31" height="57.6" fill={setFill(19)} stroke={setFill(19)} strokeLinecap="butt" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.4895" />
    <Rect onPress={onGroupPress(20)} transform="scale(1,-1)" x="604.44" y="-515.52" width="143.22" height="38.778" rx="0" ry="0" fill={setFill(20)} stroke="none" />
    <Path d="m888.66 515.52h0.36m0-52.2v61.92m-138.06-68.4-1.44 0.18-1.08 0.9-0.9 1.44-0.18 1.62m0 12.42-0.54 1.98-1.26 1.44-1.8 0.54m3.6 19.26v-35.64"/>
    <Path d="m1030.9 528.84v-42.66"/>
    <Path d="m1030.9 486.18v-154.98m-142.24 184.32h-144"/>
    <Path d="m750.96 456.84h137.16"/>
    <G transform="rotate(89.994 183.58 709)">
    <Path d="m3.5 0a3.51 3.51 0 0 1-3.5 3.51"/>
    </G>
    <Rect onPress={onGroupPress(14)} transform="scale(1,-1)" x="463.8" y="-515.75" width="143.22" height="38.82" rx="0" ry="0" fill={setFill(14)} stroke="none" />
    <Rect onPress={onGroupPress(15)} transform="scale(1,-1)" x="180.36" y="-528.84" width="141.92" height="84.611" ry="5.2904" fill="url(#linearGradient4976)" stroke="none" />
    <Rect onPress={onGroupPress(16)} transform="scale(1,-1)" x="322.26" y="-515.44" width="140.31" height="57.6" fill={setFill(16)} stroke={setFill(16)} strokeLinecap="butt" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.4895" />
    <Path d="m1030.9 528.84h-138.24m-570.19-13.32h144.09m-6.3-58.68 1.44 0.18 1.08 0.9 0.9 1.44 0.18 1.62m0 35.64v-23.22l0.54 1.98 1.26 1.44 1.8 0.54" strokeMiterlimit="10" strokeWidth="1.4396"/>
    <Rect onPress={onGroupPress(17)} transform="scale(1,-1)" x="494.29" y="-380.54" width="229.35" height="27.675" rx="15.694" ry="13.516" fill={setFill(17)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.8243" />
    <G transform="matrix(-.00297 1 -1 -.00297 317.25 366.57)">
    <Use width="100%" height="100%" xlinkHref="#C"/>
    </G>
    <Path d="m463.86 473.4v-12.42m-3.6-4.14-137.98-0.44465-0.0801 6.1036v62.696c0 1.8935-1.5715 3.465-3.555 3.555l-138.29 0.09v-197.64h850.5m-563.4 146.16h276.3m0.9 38.16h-278.1"/>
    <Rect onPress={onGroupPress(1)} transform="scale(1,-1)" x="196.94" y="-437.54" width="98.492" height="28.342" rx="14.267" ry="13.842" fill={setFill(1)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(2)} transform="scale(1,-1)" x="316.97" y="-437.65" width="78.299" height="28.495" rx="16.69" ry="13.917" fill={setFill(2)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(3)} transform="scale(1,-1)" x="815.65" y="-437.65" width="78.299" height="28.495" rx="16.69" ry="13.917" fill={setFill(3)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(4)} transform="scale(1,-1)" x="416.26" y="-437.74" width="53.719" height="28.741" rx="16.218" ry="14.037" fill={setFill(4)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(5)} transform="scale(1,-1)" x="741.1" y="-437.81" width="53.719" height="28.741" rx="16.218" ry="14.037" fill={setFill(5)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(6)} transform="scale(1,-1)" x="492.17" y="-437.16" width="227.04" height="27.613" rx="12.658" ry="13.486" fill={setFill(6)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(7)} transform="scale(1,-1)" x="915.37" y="-437.51" width="98.492" height="28.342" rx="14.267" ry="13.842" fill={setFill(7)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(8)} transform="scale(1,-1)" x="194.84" y="-380.84" width="145.54" height="28.036" rx="14.34" ry="13.693" fill={setFill(8)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(9)} transform="scale(1,-1)" x="871.42" y="-380.79" width="145.54" height="28.036" rx="14.34" ry="13.693" fill={setFill(9)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(10)} transform="scale(1,-1)" x="775.17" y="-380.86" width="132.96" height="28.036" rx="14.745" ry="13.693" fill={setFill(10)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(11)} transform="scale(1,-1)" x="303.17" y="-380.92" width="132.96" height="28.036" rx="14.745" ry="13.693" fill={setFill(11)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(12)} transform="scale(1,-1)" x="402.25" y="-380.95" width="117.92" height="28.119" rx="14.007" ry="13.733" fill={setFill(12)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    <Rect onPress={onGroupPress(13)} transform="scale(1,-1)" x="690.45" y="-380.76" width="117.92" height="28.119" rx="14.007" ry="13.733" fill={setFill(13)} stroke="#000" strokeLinecap="butt" strokeLinejoin="bevel" strokeMiterlimit="10" strokeWidth="1.4627" />
    </G>
    <G clipPath="url(#B)">
    <G fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.98">
    <Path d="m888.12 456.84h0.9v6.48m-141.66 33.3v18.9m-283.5-18.9v18.9" strokeMiterlimit="10" strokeWidth="1.4396"/>
    </G>
    </G>
    </G>
</Svg>
)}
