import React from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props){

    const [goalText, setGoalText]=React.useState("")
    
    const inputHandle=(text)=>{
        setGoalText(text)
    }
    const handleButton = ()=>{
        props.onAddGoal(goalText)
        setGoalText('')
    }
    


    return(
   <Modal   visible={props.visible} animationType="slide">
        <View style={styles.formContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')}/>
            <TextInput 
                style={styles.textInput} 
                placeholder='your course goal' 
                onChangeText={inputHandle}
                value={goalText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={handleButton} color={"#f4a460"}/>    
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCloseModal} color={"#ff6347"}/>
                </View>
            </View>    
            
        </View>
    </Modal>     )
}


export default GoalInput;

const styles = StyleSheet.create({
    formContainer:{
        paddingBottom: 16,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        backgroundColor:'#2e8b57',
        flex:1
        
      },
      textInput:{
        borderWidth: 1,
        borderColor:'#ffffe0',
        backgroundColor:'#ffffe0',
        color:'#2e8b57',
        borderRadius:6,
        padding:16,
        width:'100%'

      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:16
      },
      button:{
        marginHorizontal:8,
        width:'40%'
      },
      image:{
        width:100,
        height:100,
        margin:20
      }

      
});