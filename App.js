import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  
  const [goalList, setGoalList]=React.useState([])
  const [isVisibleModal,setIsVisibleModal] = React.useState(false)

  const goalAction = (enterGoalText)=>{
    setGoalList(currentGoalList =>[...currentGoalList,{ text:enterGoalText, id:Math.random().toString()}])
    setIsVisibleModal(false)
  }
  const addNewGoalHandler=()=>{
    setIsVisibleModal(true);
  }
  const closeModalHandler = ()=>{
    setIsVisibleModal(false)
  }

  deleteGoalHandler = (id)=>{
    setGoalList((currentGoalList)=>{
      return currentGoalList.filter((goal)=>goal.id !==id)
    })
  }

 


  return (
    <View style={styles.container}>
      <Text style={styles.title}>First App</Text>
      <Button title='Add New Goal' color="#f4a460" onPress={addNewGoalHandler}/>
      <GoalInput  
        onAddGoal={goalAction} 
        visible={isVisibleModal}
        onCloseModal={closeModalHandler}/>
      <View  style={styles.listContainer}>
          <FlatList
              data={goalList} 
              renderItem={(itemData, index)=>{
                return <GoalItem 
                          id={itemData.item.id} 
                          text={itemData.item.text}
                          onDeleteItem={deleteGoalHandler} />
              }} 
              keyExtractor={(item, index)=>{
                return item.id;
              }}
          />
      </View>
            
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    padding:16,
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:'#2e8b57',
    flex:1
    

  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:16,
    color:'white'
  },
  
  listContainer:{
    width:'100%',
    
  },
  modalContainer:{
    marginTop:16
  }

});
