import React from 'react';
import { Text, StyleSheet, View, ListView } from 'react-native';
import Content from './Content';

class Train extends React.Component {
  static navigationOptions = {
   drawer: () => ({
     label: 'Train',
   }),
  }
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6']),
    };
  }
  render() {
    return (
      <Content navigation={this.props.navigation}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Vecka 1 || Pass 1</Text>
        </View>
        <View style={styles.list}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    height: 64,
  },
  headertext: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
})

export default Train;
