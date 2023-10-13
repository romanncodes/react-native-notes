import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props){
    return (
        <View key={props.id} style={styles.goalItem}>
            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{color:'#210644'}}
                style={({pressed})=> pressed && styles.pressedItem}>
                <View style={styles.contentItem}>
                    <View style={styles.circle} >
                        <Text style={styles.goalText} >{props.text[0]}</Text>
                    </View>    
                    <Text style={styles.goalText}>{props.text}</Text>
                </View>    
            </Pressable>
        </View>
    )
}


export default GoalItem;

const styles = StyleSheet.create({
    contentItem:{
        flexDirection:"row",
        alignItems:"center"
    },
    goalItem:{
        width:'100%',
        borderRadius:8,
        marginVertical:8,
        backgroundColor:'#48d1cc',
      },
      pressedItem:{
            opacity:0.5,
            backgroundColor:'#48d888',
      },
      goalText:{
        color:'white',
        padding:8,
      },
      circle:{
        height:50,
        width:50,
        backgroundColor:"#a52a2a",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25,
        margin:4,
        textShadowColor:"grey"
        
        
      }
});