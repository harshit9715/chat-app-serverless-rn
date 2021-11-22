import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    avtar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    mainContainer: {
        flexDirection:'row',
        padding: 10,
    },
    midContainer: {
        flex:1,
        justifyContent: 'space-around',
        marginLeft: 15,
        
    },
    titleDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    lastMsg: {
        fontSize: 16,
        color: 'gray'
    },
    time: {
        color: 'gray',
        fontSize: 12,
    }
});

export default styles;