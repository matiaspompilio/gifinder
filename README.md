# gifinder
Small application to search gifs using the [GIPHY](https://giphy.com/) API

## Requisites

You’ll need to have Node 10 or later on your local development machine. You can use [nvm](https://github.com/nvm-sh/nvm) to easily switch Node versions between different projects.

### Access token
Before running this application you'll need to provide a GIPHY token as a enviroment variable to work with the API. You can add a `.env` file to the root path with the following line `VUE_APP_API_KEY` and the access token provided by [GIPHY SDK](https://developers.giphy.com/docs/sdk).

## Quickstart

```sh
$ git clone https://github.com/matiaspompilio/gifinder.git
$ cd gifinder
$ nvm use
$ yarn
$ yarn serve
```

## Commands 

### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Compiles and minifies for production
```
yarn build
```

#### Lints and fixes files
```
yarn lint
```

