import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

    mainContainer: {
        // flexDirection:'row',
        padding: 10,
        margin:10,
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    msgContent: {
        flexWrap:'wrap',
        paddingRight: 10,
    },
    time: {
        // backgroundColor: 'pink',
        textAlign:'right',
        // width: "15%",
        flex:0,
        // position: 'absolute',
        fontSize: 11,
        // bottom: 5,
        // right: 5,
    },
    otherUserTitle: {
        fontWeight: 'bold'
    }
});

export default styles;