import path from 'path'

const isDev = process.env.NODE_ENV === "development",
      [hist,port=80] = process.env.CDN_DOMAIN.split




export default {
  devtool: isDev ? 'inline-source-map' : 'hidden-source-map',
  entry: {

  },
  output: {

  },
  devServer: {

  }
}
