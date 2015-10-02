/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

let MOCKED_MOVIES_DATA = [
  {title: "Title", year: "2015"}
];

let TBA = require('./TBA');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = React;

let EventList = require('./EventsList');

var tba_app = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Events',
          component: EventList
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
AppRegistry.registerComponent('tba_app', () => tba_app);
