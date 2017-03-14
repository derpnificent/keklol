import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

class Content extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          >
            <Image
              style={styles.image}
              source={require('../assets/threelines.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>Workout</Text>
          </View>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#111E38',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    height: 60
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginRight: 155
  }
})

export default Content;
