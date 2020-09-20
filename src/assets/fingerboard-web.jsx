import React, { useState } from 'react'
import Svg, {Path,G,Defs} from 'react-native-svg'
import { TouchableHighlight  } from "react-native"

export default ({ pattern = [1], setPattern = console.log }) => {

const onGroupPress = (groupId) => () => setPattern(pattern.indexOf(groupId) !== -1 ? pattern.filter(e => e !== groupId) : [...pattern, groupId])
const setFill = (groupId) => ( pattern.indexOf(groupId) !== -1 ? "red" : "none"  )

return (<Svg width="184.92mm" height="43.212mm" version="1.1" viewBox="0 0 184.92 43.212" >
 <Defs>
  <clipPath id="clipPath831">
   <Path d="M 0,0 V 1262.88 H 1785.78 V 0 H 0"/>
  </clipPath>
  <clipPath id="clipPath1041">
   <Path d="M 0,0 V 1262.88 H 1785.78 V 0 H 0"/>
  </clipPath>
 </Defs>
 <G transform="translate(-8.7562 -43.771)">
  <G transform="matrix(.35278 0 0 -.35278 -92.243 263.49)">
   <G transform="matrix(.61529 0 0 .61529 175.77 296.98)">
    <G clip-path="url(#clipPath831)">
     <G fill="red" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.44">
      <Path d="m888.66 515.52h0.36005"/>
      <Path d="m889.02 463.32v61.92"/>
      <Path d="m750.96 456.84-1.44 0.17999-1.08 0.90002-0.90002 1.44-0.17999 1.62"/>
      <Path d="m743.76 515.34 0.89996 0.17999"/>
      <Path d="m747.36 473.4-0.53998 1.98-1.26 1.44-1.8 0.53998"/>
      <Path d="m747.36 496.62v-35.64"/>
     </G>
     <G transform="matrix(-.00297 1 -1 -.00297 704.79 366.57)" onPress={onGroupPress(1)} fill={setFill(1)}>
      <Path d="m14.13 0c0 7.7869-6.2998 14.106-14.087 14.13s-14.125-6.2565-14.173-14.043"  stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <G transform="matrix(.00288 -1 1 .00288 893.97 366.57)">
      <Path d="m14.13 0c0 7.7869-6.2998 14.106-14.087 14.13s-14.125-6.2565-14.173-14.043" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <G transform="rotate(269.99 684.52 -317.92)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m1030.9 528.84v-42.66" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(269.99 564.37 -141.08)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <G transform="rotate(89.994 165.94 589.27)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m755.1 409.14h25.56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(269.99 601.9 -178.61)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m780.66 437.58h-25.56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(89.994 203.47 626.8)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m830.34 409.14h49.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(269.99 651.58 -228.29)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m879.84 437.58h-49.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <Path d="m1002.4 437.58h-72.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(89.994 253.06 676.4)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m929.52 409.14h72.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(269.99 712.87 -289.57)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <G transform="matrix(.00288 -1 1 .00288 794.79 366.57)">
      <Path d="m14.13 0c0 7.7869-6.2998 14.106-14.087 14.13s-14.125-6.2565-14.173-14.043" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <G fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44">
      <Path d="m1030.9 486.18v-154.98"/>
      <Path d="m888.66 515.52h-144"/>
      <Path d="m750.96 456.84h137.16"/>
      <Path d="m889.02 514.26"/>
     </G>
     <G transform="rotate(89.994 183.75 708.97)">
      <Path d="m3.51 0c0 1.9384-1.5713 3.5098-3.5097 3.51" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <G fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44">
      <Path d="m1030.9 528.84h-138.24"/>
      <Path d="m322.56 515.52h-0.35999"/>
      <Path d="m322.2 463.32v61.92"/>
      <Path d="m460.26 456.84 1.44 0.17999 1.08 0.90002 0.89999 1.44 0.18 1.62"/>
      <Path d="m467.46 515.34-0.89999 0.17999"/>
      <Path d="m463.86 496.62v-23.22"/>
      <Path d="m463.86 473.4 0.54 1.98 1.26 1.44 1.8 0.53998"/>
     </G>
     <G transform="matrix(.00288 -1 1 .00288 506.43 366.57)">
      <Path d="m14.13 0c0 7.7869-6.2998 14.106-14.087 14.13s-14.125-6.2565-14.173-14.043" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m208.8 380.88h793.62" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <Path d="m1002.4 352.44h-793.62" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="matrix(-.00297 1 -1 -.00297 317.25 366.57)">
      <Path d="m14.13 0c0 7.7869-6.2998 14.106-14.087 14.13s-14.125-6.2565-14.173-14.043" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <G transform="rotate(89.994 -78.948 287.65)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m705.6 409.14h-199.98" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(89.994 41.199 464.52)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m505.62 437.58h199.98" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(269.99 439.63 -16.357)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m456.12 409.14h-25.56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(89.994 3.6688 426.98)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m430.56 437.58h25.56" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(269.99 402.1 21.169)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m380.88 409.14h-49.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(89.994 -46.011 377.3)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m331.38 437.58h49.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <Path d="m208.8 437.58h72.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(269.99 352.51 70.754)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <Path d="m281.7 409.14h-72.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     <G transform="rotate(89.994 -107.3 316)">
      <Path d="m14.13 0c0 7.8035-6.3258 14.13-14.129 14.13s-14.13-6.3251-14.131-14.129" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <G transform="matrix(-.00297 1 -1 -.00297 416.43 366.57)">
      <Path d="m14.13 0c0 7.7869-6.2998 14.106-14.087 14.13s-14.125-6.2565-14.173-14.043" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44"/>
     </G>
     <G fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.44">
      <Path d="m322.2 514.26"/>
      <Path d="m322.2 525.15c0 1.9384-1.5713 3.5098-3.5097 3.51"/>
      <Path d="m463.86 473.4v-12.42"/>
      <Path d="m460.26 456.84h-137.16"/>
      <Path d="m322.56 515.52h144"/>
      <Path d="m467.46 477.36h276.3"/>
      <Path d="m744.66 515.52h-278.1"/>
      <Path d="m318.6 528.84h-138.24v-197.64h850.5"/>
     </G>
    </G>
   </G>
   <G transform="matrix(.61529 0 0 .61529 175.77 296.98)">
    <G clip-path="url(#clipPath1041)">
     <G fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.98">
      <Path d="m888.12 456.84h0.90002v6.48"/>
      <Path d="m323.1 456.84h-0.9v6.48"/>
      <Path d="m747.36 496.62v18.9"/>
      <Path d="m463.86 496.62v18.9"/>
     </G>
    </G>
   </G>
  </G>
 </G>
</Svg>
)}
