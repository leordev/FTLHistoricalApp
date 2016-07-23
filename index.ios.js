/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Modal
} from 'react-native';
import MapView from 'react-native-maps';

require("./assets/images/1-001.jpg");

const data =  [
  {
    id: 1,
    lat: 26.118945,
    lon: -80.143438,
    title: "Sunset Theatre",
    address: "313 South Andrews, Fort Lauderdale, FL 33301",
    description: "Standing next to the Sweet Building (today known as One River Plaza) on Andrews Avenue at Las Olas Boulevard, the Sunset Theatre is shown as being open in the 1945 Film Daily Yearbook with seating for 757, operated at that time by a subsidiary of Paramount Pictures. It was closed in 1953.",
    year: 1953,
    source: "Website Cinema Treasures (http://cinematreasures.org/theaters/14936)",
    images: [require("./assets/images/1-001.jpg")]
  },
  {
    id: 2,
    lat: 26.119135,
    lon: -80.14064,
    title: "Los Olos Blvd.",
    address: "Las Olas Boulevard, Fort Lauderdale, FL 33301",
    description: "Las Olas Boulevard Completed",
    year: 1917,
    source: "https://www.fortlauderdalehistoricalsociety.org/timeline/las-olas-boulevard-completed-2/",
    images: [require("./assets/images/2-001.jpg")]
  },
  {
    id: 3,
    lat: 26.1184605,
    lon: -80.1374968,
    title: "Stranahan House",
    address: "335 SE 6th Ave, Fort Lauderdale, FL 33301",
    description: "Early photo of Stranahan Trading Post and today's historical site",
    year: 1901,
    source: "https://scaryhauntedhouse.wordpress.com/5-the-stranahan-house/",
    images: [require("./assets/images/3-001.jpg")]
  },
  {
    id: 4,
    lat: 26.1194327,
    lon: -80.1443715,
    title: "Bryan Bldg.",
    address: "01-221 SW Second Street, Fort Lauderdale, FL 33301",
    description: "Built by pioneer developer Tom Bryan in 1913, survived the 26 hurricane. Photo shows the Auto Nation Tower was built around it.",
    year: 1913,
    source: "https://www.google.com/maps/@26.1194327,-80.1443715,3a,60y,90t/data=!3m6!1e1!3m4!1sInUzdo-1jymYxrp8Pn0tuA!2e0!7i13312!8i6656?hl=en",
    images: [require("./assets/images/4-001.png")]
  },
  {
    id: 5,
    lat: 26.1184659,
    lon: -80.1579341,
    title: "Fire Station #03",
    address: "1022 W. Las Olas Blvd., Fort Lauderdale, FL 33301",
    description: "From Francis L. Abreu",
    year: 1901,
    source: "Francis L. Abreu (https://docs.google.com/spreadsheets/d/1UpeSBG9GnyxsosPq71oxQf6yK2TkHCH0I0fw1Vwk_m4/edit#gid=2144963843)",
    images: [require("./assets/images/5-001.png")]
  },
  {
    id: 6,
    lat: 26.1253167,
    lon: -80.1375464,
    title: "St Anthony School",
    address: "800 NE 3rd Street, Fort Lauderdale, FL 33301",
    description: "From Francis L. Abreu - School - Status: OK - National Register",
    year: 1901,
    source: "Francis L. Abreu (https://docs.google.com/spreadsheets/d/1UpeSBG9GnyxsosPq71oxQf6yK2TkHCH0I0fw1Vwk_m4/edit#gid=2144963843)",
    images: [require("./assets/images/6-001.png")]
  },
  {
    id: 7,
    lat: 26.1206238,
    lon: -80.1366427,
    title: "Towers Apts",
    address: "824-828 SE 2nd Street, Fort Lauderdale, FL 33301",
    description: "From Francis L. Abreu - Hotel and Apts. - Status OK",
    year: 1901,
    source: "Francis L. Abreu (https://docs.google.com/spreadsheets/d/1UpeSBG9GnyxsosPq71oxQf6yK2TkHCH0I0fw1Vwk_m4/edit#gid=2144963843)",
    images: [require("./assets/images/7-001.png")]
  },
  {
    id: 8,
    lat: 26.1199521,
    lon: -80.148226,
    title: "New River Inn",
    address: " 219 SW 2nd Ave, Fort Lauderdale, FL 33301 ",
    description: "Built by Edwin T. King for Philemon Bryan in a masonry vernacular style. Beach sand was used to create the concrete construction to make the building hurricane resistant. Originally called the New River Hotel, this building replaced a 1902 wooden structure known as the Bryan Hotel, which was moved to the rear of the site and served as a hotel annex. In the 1940s the name was changed to the New River Inn and it served as a hostelry until 1955. Today it serves as home of the Fort Lauderdale Historical Society.",
    year: 1901,
    source: "https://www.fortlauderdalehistoricalsociety.org/visit/new-river-inn-museum-of-history/",
    images: [require("./assets/images/8-001.jpg")]
  },
  {
    id: 9,
    lat: 26.1183398,
    lon: -80.1368793,
    title: "Himmarshee CT. Apts",
    address: "717 SE  2nd Street, Fort Lauderdale, FL 33301",
    description: "From Francis L. Abreu - Apts. - Status Addition / Designated",
    year: 1901,
    source: "Francis L. Abreu (https://docs.google.com/spreadsheets/d/1UpeSBG9GnyxsosPq71oxQf6yK2TkHCH0I0fw1Vwk_m4/edit#gid=2144963843)",
    images: [require("./assets/images/9-001.png")]
  },
  {
    id: 10,
    lat: 26.1149318,
    lon: -80.1338087,
    title: "Bodor/Powell",
    address: "1101 SE 6th Street, Fort Lauderdale, FL 33301",
    description: "From Residence - Status Excellent",
    year: 1901,
    source: "Francis L. Abreu (https://docs.google.com/spreadsheets/d/1UpeSBG9GnyxsosPq71oxQf6yK2TkHCH0I0fw1Vwk_m4/edit#gid=2144963843)",
    images: [require("./assets/images/10-001.jpg")]
  }
]

class TopMenu extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image source={require('./assets/images/ftl-historical-logo.png')}
               style={{width: 380, height: 70}} />
      </View>
    )
  }
}

class AudioMenu extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{color:colors.primary}}>Start Audio Tour</Text>
        <Image source={require('./assets/images/audio-control.png')}
               style={{width: 360, height: 80}} />
      </View>
    )
  }
}

class TourModal extends Component {
  render() {
    const { visible, handleClose, item } = this.props

    return <Modal
      animationType={'slide'}
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View style={[styles.modalContainer]}>
        <View style={[styles.innerContainer]}>
          <View style={{
            height: 60,
            backgroundColor: colors.primary,
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 3
          }}>
            <View>
              <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>{item.title}</Text>
              <Text style={{fontSize: 14, color: '#fff'}}>Built in: {item.year}</Text>
            </View>
            <View>
              <Button
                onPress={handleClose}
                style={{margin: 10}}>
                X
              </Button>
            </View>
          </View>
          <View style={{flex:2, flexDirection: 'row'}}>
            <Text style={{flex: 1, padding: 10}}>{item.description}</Text>
            <View style={{flex: 1, padding: 10}}>
              <Image source={item.images[0]} style={{width: 150, height: 400}} />
            </View>
          </View>
          <View style={{flex:1, padding: 10}}>
            <AudioMenu />
          </View>
        </View>
      </View>
    </Modal>
  }
}


class MarkerPopover extends Component {
  render() {

    const { marker, openTour } = this.props

    return (<View style={{
      flex: 1,
      padding: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 150
    }}>
      <View style={{width:80,height:150}}>
        <Image source={marker.images[0]}
               style={{width:80,height:150}} />
      </View>
      <View style={{
        flex:2,
        margin: 10,
        justifyContent: 'center'}}>
        <Text style={styles.title}>{marker.title}</Text>
        <Text style={{color: colors.primary, fontWeight: 'bold'}}>Built in: {marker.year}</Text>
        <Text style={{color: colors.secondary}}>Take me there</Text>
      </View>
      <TouchableHighlight
        onPress={()=>{openTour(marker)}}
        style={{width: 30,
                backgroundColor: colors.primary,
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                alignItems: 'center'}}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Tour Guide</Text>
      </TouchableHighlight>
    </View>)
  }
}

class Button extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this._onHighlight = this._onHighlight.bind(this)
    this._onUnhighlight = this._onUnhighlight.bind(this)
  }

  _onHighlight() {
    this.setState({active: true});
  }

  _onUnhighlight() {
    this.setState({active: false});
  }

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    return (
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighlight}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
        <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}

class FTLHistory extends Component {

  constructor(props) {
    super(props)
    this.state = {
      initialPosition: null,
      lastPosition: null,
      modalOpened: false,
      selectedItem: data[0]
    }
    this.watchID = null;
    this._setModalVisible = this._setModalVisible.bind(this)
    this.openTour = this.openTour.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({initialPosition: position})
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({lastPosition: position})
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  getMarkers() {
    return data.map((item) => (
      <MapView.Marker
        key={item.id}
        coordinate={{
          latitude: item.lat,
          longitude: item.lon
        }}>
        <MapView.Callout style={{width: 300}}>
          <MarkerPopover marker={item} openTour={this.openTour} />
        </MapView.Callout>
      </MapView.Marker>
    ))
  }

  openTour(item) {
    this.setState({selectedItem: item, modalOpened: true})
  }

  _setModalVisible(visible) {
    this.setState({modalOpened: visible})
  }

  render() {
    return (
      <View style={styles.container}>
        <TopMenu />
        <TourModal visible={this.state.modalOpened}
                   item={this.state.selectedItem}
                   handleClose={() => this.setState({modalOpened: false})} />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 26.117546,
            longitude: -80.141246,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0221,
          }}
          showsUserLocation={true}
          showsPointsOfInterest={false}>
          {this.getMarkers()}
        </MapView>
      </View>
    );
  }
}

class FTLHistoryApp extends Component {
  render() {
    return (
      <FTLHistory />
    )
  }
}

const colors = {
  primary: '#fe6f64',
  secondary: '#5757f9',
  text: '#343434',
  background: '#f3f0f0'
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: colors.text
  },
  innerContainer: {
    borderRadius: 0,
    flex: 1,
    flexDirection: 'column',
  },
  modalContainer: {
    top: 90,
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  popover: {
    flex: 1,
    height: 300,
    backgroundColor: colors.background
  },
  map: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});

AppRegistry.registerComponent('FTLHistoryApp', () => FTLHistoryApp);
