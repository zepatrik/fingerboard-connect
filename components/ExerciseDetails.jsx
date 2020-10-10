import React, { useState } from 'react'
import { View , FlatList} from "react-native"
import Fingerboard from '../components/FingerboardWeb.jsx'




export default ({session}) => {
    const DATA = session.exercises
    const renderItem = ({item}) => (
        <Fingerboard pattern={item.pattern} setPattern={console.log}/>
    )

    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}     
        />
    )


}
