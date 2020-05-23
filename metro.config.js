/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig } = require("metro-config");

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//         babelTransformerPath: require.resolve("react-native-stylus-transformer"),
//       },
//       resolver: {
//         sourceExts: [...sourceExts, "styl"]
//       },
//     }),
//   },
// };

module.exports = (async () => {
    const {
      resolver: { sourceExts }
    } = await getDefaultConfig();
    return {
      transformer: {
        babelTransformerPath: require.resolve("react-native-stylus-transformer")
      },
      resolver: {
        sourceExts: [...sourceExts, "styl"]
      }
    };
  })();