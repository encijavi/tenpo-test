# Tenpo tech evaluation mock app

This is a test react native android app consisting of a single view, mock and assets were taken from [here](https://xd.adobe.com/view/f54f4021-662d-463e-62df-5f9bcfd1b411-837e)
shared apk: https://i.diawi.com/hvA3qR
![video](https://media.giphy.com/media/VT6NuYZ9PB4cB2ohIw/source.gif)

## Some of the things i took into special consideration

- Making a comprehensible general layout 
- Decomposing react components into smaller reusable ones, whenever possible
- Creating mock services to simulate a real case scenario

## Some of the things i left behind due to time constrictions
- Visual bug on restaurant carousel items press opacity animation
- Adding a navigator layout and a simple "add direction" screen
- Adding an motorbike animation 

## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.
requires ExpoApp on a test device

```sh
cd tenpo-test
yarn install
yarn start
``` 

After server is up, scan the QR image provided with expo.
