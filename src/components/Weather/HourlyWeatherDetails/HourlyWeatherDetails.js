import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Image } from 'react-native';
import { Button, Card, Text, Grid, Col, Row, Thumbnail } from 'native-base';
import Icon_S from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';


class HOURLY_WEATHER_DETAILS extends Component {

  render() {

    return (
      <View style={styles.HourlyWeactherConatainer}>
        {/* description box Hourly Weather */}
        <Grid>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ height: 130 }}
            style={{ scaleX: 1 }}
            showsHorizontalScrollIndicator={true}>
            {this.props.HourlyData.map((e, j) => (
              <Col key={j} style={{ width: 80 }}>
                <Row style={{ marginRight: 20, height: 60 }}>
                  <Thumbnail square small source={{uri: `https://developer.accuweather.com/sites/default/files/${e.WeaTher_hack_icon}-s.png`}} />
                </Row>
                <Row style={{ height: 50, }}>
                  <Text
                    style={{
                      color: '#2B3A51',
                      fontSize: 30,
                      fontWeight: 'bold',
                      
                    }}>
                    {e.Temperature.Value + '°' }
                  </Text>
                </Row>
                <Row>
                  <Text style={{ color: '#2B3A51', fontWeight: 'bold' }}>
                      { e.Hour + ' ' }
                  </Text>
                  <Text style={{ color: '#949CAB' }}>
                     { e.T_Hour_C }
                  </Text>
                </Row>
              </Col>
            ))}
          </ScrollView>
        </Grid>
      </View>
    );
  }
}

const mapStateProps = state => {
  let HourlyData = state.WEATHER.HourlyData;
  return {
    HourlyData,
  };
};

export default connect(mapStateProps)(HOURLY_WEATHER_DETAILS);
