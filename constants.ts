import { Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width
const WINDOW_HEIGHT = Dimensions.get("window").height
const favoriteItemContainerWidth = WINDOW_WIDTH * 0.78;
const favoriteItemContainerHeight = WINDOW_HEIGHT * 0.24;
const restoItemContainerWidth = WINDOW_WIDTH * 0.28;
const restoItemContainerHeight = WINDOW_HEIGHT * 0.2;

const dimensions = {
    WINDOW_WIDTH,
    WINDOW_HEIGHT,
    favoriteItemContainerWidth,
    favoriteItemContainerHeight,
    restoItemContainerWidth,
    restoItemContainerHeight,
}
export default dimensions