import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import Content from './Content';

class HomeScreen extends React.Component {
  static navigationOptions = {
   drawer: () => ({
     label: 'Home',
   }),
  }
  render() {
    const { navigate } = this.props.navigation;
    return  (
      <Content navigation={this.props.navigation}>
        <View style={styles.main}>
          <Text style={styles.text1}>You can have results or excuses.</Text>
          <Image
            style={styles.image}
            source={require('../assets/vikt.png')}
          />
          <Text style={styles.text2}>Not both.</Text>
          <Button
            onPress={() => navigate('Train')}
            title="Lets begin!"
          />
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    height: 600,
    alignItems: 'center',
  },
  image: {
  },
  text1: {
    marginTop: 60,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 30
  },
  text2: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20,
  }
})

export default HomeScreen;
