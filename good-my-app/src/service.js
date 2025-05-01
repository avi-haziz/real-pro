import axios from 'axios';

const apiUrl = "https://localhost:5047"

export default {
  getTasks: async () => {
    const result = await axios.get(`${process.env.REACT_APP_api_url}/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    //TODO
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    //TODO
    return {};
  },

  deleteTask:async()=>{
    console.log('deleteTask')
  }
};
