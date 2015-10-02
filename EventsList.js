'use strict'

let React = require('react-native');
let {
  ListView,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback
} = React;
let TBA = require('./TBA');



var EventList = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  },

  componentDidMount: function() {
    this.loadEvents(2016);
  },

  loadEvents: function(year) {
    fetch(`${TBA.APIUrl}/${TBA.APIVersion}/events/${year}`, {headers: {'X-TBA-App-Id': TBA.APIKey}})
    .then((response) => response.json())
    .then((responseData) => {
      let events = responseData.sort(function(a,b){
        return new Date(a.start_date) - new Date(b.start_date);
      })
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(events),
        loading: false
      });
    })
    .done();
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderEvent}
        style={styles.listView}
      />
    );
  },

  selectEvent: function(event){
    console.log(event.short_name);
  },

  renderEvent: function(event) {
    return (
      <View style={styles.container} >
        <TouchableHighlight
          onPress={() => this.selectEvent(event)}
        >
          <Text style={styles.eventName}>{event.short_name}</Text>
        </TouchableHighlight>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  eventName: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  listView: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
    },
});

module.exports = EventList
