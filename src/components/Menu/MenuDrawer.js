import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Thumbnail, Label} from 'native-base';
import {connect} from 'react-redux';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

class MenuDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlIMG: false,
      dataURL: '',
      user: '',
    };
  }

  navImage(nav) {
    if (nav == 'WEATHER') {
      return (
        <Image
          style={{width: 25, height: 25, marginRight: 15}}
          source={require('../../assets/cloudy.png')}
        />
      );
    }
  }

  navLink(nav, TEXT) {
    return (
      <View style={{paddingLeft: 20, height: 37, marginBottom: 5}}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => this.props.props.navigate(nav)}>
          {this.navImage(nav)}
          <Label style={styles.Link}>{TEXT}</Label>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_body}>
          {this.navLink('WEATHER', 'Weather')}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_body: {
    paddingTop: 20,
    backgroundColor: '#000000',
  },
  Link: {
    fontSize: 16,
    textAlign: 'left',
    color: '#C0C0C0',
  },
});

export default MenuDrawer;
