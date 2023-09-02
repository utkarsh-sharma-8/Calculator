import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Row = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowView}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Row;
const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    marginTop:30,
  },
  touchableOpacity: {
    width: 80,
    margin:10,
    backgroundColor:'grey',
    borderRadius:10,
    alignItems:"center",
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'black'
  },
});
