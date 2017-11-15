# OnsenUI Cordova Plugins integration test

> The purpose of this project is to test the compatibility among vuejs, onsenui, cordova, and several cordova plugins.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
# this will build our project into the www folder
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Cordova related command

Install all cordova plugins and platform

``` bash
cordova prepare
```

To update the app that cordova is aware of, you need to build the Vue app with npm run build. This will clean and build the www folder.

``` bash
# run and install in android
npm run cordova-run-android

# build APK debug file 
npm run cordova-build
```

## Screenshots

Home Page <br/>
<img src="screenshots/output/screenshot1.png" />
<hr/>

Contact Page <br/>
<img src="screenshots/output/screenshot2.png" />
<img src="screenshots/output/screenshot3.png" />
<img src="screenshots/output/screenshot4.png" />
<img src="screenshots/output/screenshot5.png" />
<hr/>

Bluetooth Scan Page <br/>
<img src="screenshots/output/screenshot6.png" />
<img src="screenshots/output/screenshot7.png" />
<img src="screenshots/output/screenshot8.png" />
<hr/>

Camera + Gallery Page <br/>
<img src="screenshots/output/screenshot9.png" />
<img src="screenshots/output/screenshot11.png" />
<hr/>

Social Media Share <br/>
<img src="screenshots/output/screenshot12.png" />
<img src="screenshots/output/screenshot13.png" />
<img src="screenshots/output/screenshot14.png" />
<img src="screenshots/output/screenshot16.png" />
<img src="screenshots/output/screenshot17.png" />
<img src="screenshots/output/screenshot18.png" />

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
