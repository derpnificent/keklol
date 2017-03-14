import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Content from './Content';

class Schedule extends React.Component {
  static navigationOptions = {
   drawer: () => ({
     label: 'Schedule',
   }),
  }
  render() {
    return (
      <Content navigation={this.props.navigation}>
        <Text style={styles.text}>Schema</Text>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  }
})

export default Schedule;
