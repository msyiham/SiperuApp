import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { ViroARScene, ViroARSceneNavigator, ViroARTrackingTargets, ViroAmbientLight, Viro3DObject, ViroARImageMarker } from '@reactvision/react-viro';

const targets = [
  { name: 'markerImage1', source: require("./AR/marker1.jpg") },
  { name: 'markerImage2', source: require("./AR/marker2.jpeg") },
  { name: 'markerImage3', source: require("./AR/marker3.jpg") },
  { name: 'markerImage4', source: require("./AR/marker4.png") }
];

const MyScene = () => {
  useEffect(() => {
    const trackingTargets = {};
    targets.forEach(target => {
      trackingTargets[target.name] = {
        source: target.source,
        orientation: 'Up',
        physicalWidth: 0.165
      };
    });
    ViroARTrackingTargets.createTargets(trackingTargets);
  }, []);

  const anchorFound = () => console.log("Anchor/Image detected");
  const on3DObjectLoadStart = () => console.log('3D object loading started');
  const on3DObjectLoadEnd = () => console.log('3D object loaded successfully');
  const on3DObjectLoadError = event => console.error('3D object failed to load:', event.nativeEvent);

  const renderARImageMarker = (target) => (
    <ViroARImageMarker key={target.name} target={target.name} onAnchorFound={anchorFound}>
      <ViroAmbientLight color="#FFFFFF" />
      <Viro3DObject
        source={require('./model/model.obj')}
        scale={[0.08, 0.08, 0.08]}
        rotation={[-150, 0, 0]}
        type="OBJ"
        onLoadStart={on3DObjectLoadStart}
        onLoadEnd={on3DObjectLoadEnd}
        onError={on3DObjectLoadError}
      />
    </ViroARImageMarker>
  );

  return (
    <ViroARScene onTrackingUpdated={() => console.log('AR tracking updated')}>
      {targets.map(renderARImageMarker)}
    </ViroARScene>
  );
};

const ScanAR = () => (
  <View style={styles.container}>
    <Text style={styles.loadingText}>Loading AR Scene...</Text>
    <ViroARSceneNavigator initialScene={{ scene: MyScene }} style={styles.container} />
  </View>
);

export default ScanAR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingText: {
    color: 'black',
  },
});
