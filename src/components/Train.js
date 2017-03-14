import React from 'react';
import { Text, StyleSheet, View, } from 'react-native';
import Content from './Content';

class Train extends React.Component {
  static navigationOptions = {
   drawer: () => ({
     label: 'Train',
   }),
  }
  render() {
    return (
      <Content navigation={this.props.navigation}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Vecka nr || Pass nr</Text>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    height: 64,
  },
  headertext: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
})

export default Train;
