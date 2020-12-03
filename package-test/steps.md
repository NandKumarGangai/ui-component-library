1. create directory
2. run npm init -y
3. intsall following dependencies.
    webpack webpack-cli webpack-dev-server
    @babel/core babel-loader @babel/preset-env @babel/preset-react
    npm i react react-dom
     
4. Add below scripts
    "dev": "rimraf ./dist && cross-env NODE_ENV=development webpack",
    "build": "rimraf ./dist && cross-env NODE_ENV=production webpack"

5. Create webpack.config.js .babelrc tsconfig.json file
    Add below deps
    webpack-node-externals mini-css-extract-plugin copy-webpack-plugin
    typescript ts-loader

    
npm i webpack webpack-cli webpack-dev-server @babel/core babel-loader @babel/preset-env @babel/preset-react rimraf cross-env webpack-node-externals 
