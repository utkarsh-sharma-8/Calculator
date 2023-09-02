import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Row from './Row';

const Main = () => {
    const [text,setText]=useState("hello");
  return (
    <View>
        <View style={styles.textView}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
        <View>
            <Row/>
        </View>
    </View>
  )
}

export default Main;

const styles=StyleSheet.create({
    textView:{
        backgroundColor:"black",
        marginTop:'90%'
    },
    text:{
        color:'white'
    }
})