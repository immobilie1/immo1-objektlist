import axios from 'axios'
import { ref } from "vue";

const getObjektList = () => {

     let objLists = ref[{}]
     const error = ref(null)
     const loadObjLists = async () => {
          try {
                    const response =  await axios.get("http://localhost:5642/objektlist")
                    objLists = response.data;
                    console.log(objLists);
                    if(!response) {
                         throw Error('no data available');
                    }
                    const filteredObjLists = objLists.filter((item) => item.user_id == '19003')
                    console.log(filteredObjLists);
                    return filteredObjLists;
               
          }
          catch (err) {
               error.value = err.message
          }
     }
     /* 
     console.log(objLists);
     const filteredObjLists = computed(() => {
          return objLists.filter((item) => item.user_id == '19003')
     }) */
const abc = loadObjLists;
     console.log(abc);
     return { error, loadObjLists }

}

//export default getObjektList