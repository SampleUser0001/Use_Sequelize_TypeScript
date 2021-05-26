import * as Webpack from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const config: Webpack.Configuration = {
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
  },
};

export default config;
