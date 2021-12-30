import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        elevation: 100,
        zIndex: 100,
        bottom: 20,
        right: 20,
    }
})

export default styles;