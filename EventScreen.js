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



var EventScreen = React.createClass({
  render: function() {
    let event = this.props.event;
    return (
      <View style={styles.container}>
        <Text>
          {event.start_date}
        </Text>
        <Text>
          {event.name}
        </Text>
        <Text>
          {event.location}
        </Text>
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

module.exports = EventScreen
