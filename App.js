/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from 'react-native-geolocation-service';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <MapView
     showsUserLocation={true}
     showsMyLocationButton={true}
     style={{ flex: 1, width: window.width }} //window pake Dimensions
     region={{
        latitude: -6.372368,
        longitude: 106.824179,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05 
        }} 
   >
      <MapView.Marker
         coordinate={{
            latitude: -6.3701211,
            longitude: 106.8338548,
            }}
             title="Sinar Alam Motor"
             description="+62217863937"/>
      <MapView.Marker
         coordinate={{
            latitude: -6.365328,
            longitude: 106.833801,
            }}
             title="Bridgestone One Stop Service Depok"
             description="+622129049600"/>
      <MapView.Marker
         coordinate={{
            latitude: -6.3800067,
            longitude: 106.831108,
            }}
             title="Fortuna Auto Service - Depok"
             description="+622177201818"/>

      </MapView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
