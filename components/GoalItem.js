import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props){
    return (
        <View key={props.id} style={styles.goalItem}>
            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)}
                android_ripple={{color:'#210644'}}
                style={({pressed})=> pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}


export default GoalItem;

const styles = StyleSheet.create({
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
      }
});