import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Viro3DObject, ViroARImageMarker, ViroARScene, ViroARTrackingTargets, ViroAmbientLight } from '@reactvision/react-viro';

const ScanAR = () => {
  ViroARTrackingTargets.createTargets({
    markerImage: {
      source: require("./AR/periodic-table.png"),
      orientation: 'Up',
      physicalWidth: 0.165
    }
  });

  const anchorFound = () => {
    console.log("Anchor/Image detected");
  };

  const on3DObjectLoadStart = () => {
    console.log('3D object loading started');
  };

  const on3DObjectLoadEnd = () => {
    console.log('3D object loaded successfully');
  };

  const on3DObjectLoadError = (event) => {
    console.error('3D object failed to load:', event.nativeEvent);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Loading AR Scene...</Text>
      <ViroARScene onTrackingUpdated={() => console.log('AR tracking updated')}>
        <ViroARImageMarker target={"markerImage"} onAnchorFound={anchorFound}>
          <ViroAmbientLight color="#000" onAnchorFound={() => console.log('Ambient light anchor found')} />
          <Viro3DObject
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/siperu-pkmk-2024.appspot.com/o/table.glb?alt=media&token=6da45369-9e13-43f8-bd6d-e15c73b00c14' }}
            scale={[0.008, 0.008, 0.008]}
            rotation={[-170, 0, 0]}
            type="GLB"
            onLoadStart={on3DObjectLoadStart}
            onLoadEnd={on3DObjectLoadEnd}
            onError={on3DObjectLoadError}
          />
        </ViroARImageMarker>
      </ViroARScene>
    </View>
  );
};

export default ScanAR;

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});
