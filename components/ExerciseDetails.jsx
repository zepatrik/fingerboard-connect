import React, { useState } from 'react'
import { View , FlatList, Dimensions, StyleSheet} from "react-native"
import Fingerboard from '../components/FingerboardWeb.jsx'


let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    view: {
      position: 'relative',
      height: ScreenHeight,
      width: ScreenWidth*0.8,
      alignItems: 'center',
      borderColor:'red',
      justifyContent: 'center',
      borderBottomWidth:1,
      borderTopWidth:1,
      top: -100
      
    }})


export default ({session}) => {
    const DATA = session.exercises
    const renderItem = ({item}) => (
        <View style={styles.view}>
        <Fingerboard pattern={item.pattern} setPattern={console.log}/>
        </View>
    )

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            //snapToAlignment={"start"}
            horizontal= {false}
            //snapToOffsets={[500,1000,1500,2000]}
            snapToInterval={ScreenHeight} 
            pagingEnabled={true}
            snapToStart={true}
            scrollEventThrottle={100}
            decelerationRate={"fast"}
            automaticallyAdjustContentInsets={false}
            directionalLockEnabled={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            overScrollMode={"never"}
        />
    )


}
