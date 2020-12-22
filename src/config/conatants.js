import React from 'react'
import { View, Text, Platform, Dimensions } from 'react-native'

export default {
    PLATFORM: Platform.OS,
    SCREEN_WIDTH: Dimensions.get("window").width,
    SCREEN_HEIGHT: Dimensions.get("window").height,
}