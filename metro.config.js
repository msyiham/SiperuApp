const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'gltf', 'glb', 'obj', 'mtl'],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'js', 'json', 'ts', 'tsx', 'jsx'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
