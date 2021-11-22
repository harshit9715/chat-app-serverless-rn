import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginHorizontal: 6,
        marginBottom: 6,
        minHeight: 40
    },
    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 6,
        paddingLeft: 8,
        borderRadius: 25,
        alignItems: 'flex-end',
        paddingBottom: 8,
    },
    icon: {
        marginHorizontal: 6,
        borderRadius: 50,
        marginBottom: 2,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 6,
        

    },
    sendBtnContainer:{
        backgroundColor: Colors.dark.tint,
        width: 40,
        height: 40,
        marginLeft: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40
    },
});

export default styles;