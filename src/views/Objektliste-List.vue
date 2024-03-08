<template>
     <div class="p-container objektlist" style="clear:both">
          <div class="p-head">
               <div class="container">
                    <div class="container">
                         <div class="p-title font-lato-r">
                              <h1>Objektlisten</h1></div>
                              <div class="p-nav">
                                   <RouterLink :to="{ name: 'objektlisteErstellen'}" class="btn text-white bg-primary-color">Objektliste erstellen</RouterLink> 
                                   <RouterLink :to="{ name: 'Objektlisten'}" class="btn text-white bg-primary-color ml-3">Abbrechen</RouterLink> 
                              </div>
                    </div>
               </div>
          </div>
          <div class="p-content">
               <div class="container">
                         <div class="objektlist mb-3 sm:px-0">
                              <!-- <p>Hier können Sie Objektlisten erstellen, welche Sie anschließend auf Ihrer Webseite einbinden können.</p>
                              <p>Bitte klicken Sie dazu auf <b>Objektliste erstellen</b> und folgen Sie den Anweisungen. Sie erhalten im Anschluss einen HTML Code, den Sie auf Ihrer Webseite einbinden können.</p>
                              <div class="alert alert-warning" role="alert">
                                   Allgemeiner Hinweis: 
                                   Bitte legen Sie bei Ihren Immobilien einen Ansprechpartner fest, da es sonst bei der Einbindung der Ivd24 Objektlisten auf Ihrer Webseite zu einem Serverfehler 500 kommen kann
                              </div> -->
                              <div class="mx-auto mt-2 mb-2 lg:block lg:mt-16">
                                   <h2 class="text-xl lg:mb-3 mb-3">Ihre erstellten Listen</h2>
                                   <!-- <div v-if="error">{{ error }}</div> -->
                                   <div v-if="objectLists.length" class="flex flex-col gap-4 items-center">
                                        <li v-for="(objList, index) in objectLists" :key="index" class="row p-3 w-full border transition-shadow duration-300 bg-white rounded-md shadow-inner hover:shadow-md group">
                                             <div class="font-lato-r col-md-6 flex flex-col self-center"><span class="mb-2 text-primary-color">({{ objList.id }}) {{ objList.name }}</span><span>{{ objList.domain }}</span></div>
                                             <div class="col-md-6 flex flex-row justify-end items-center py-3">
                                                  <div class="mr-5">
                                                       <RouterLink  :to="{ name: 'objektlisteEinstellungBearbeiten', params: { id: objList.id }}" class="text-center">
                                                            <img src="../assets/image/icons/edit_icon.svg" width="28" alt="" title="Die Bearbeitung der Objekte" />
                                                       </RouterLink >
                                                  </div>

                                                  <div class="mr-5">
                                                       <RouterLink :to="{ name: 'objektlisteCode', params: { id: objList.id }}">
                                                            <img src="../assets/image/icons/code.svg" width="28" alt="" title="Die Code anschauen" />
                                                       </RouterLink>
                                                  </div>
                                                  <div class="mr-5">
                                                       <RouterLink  :to="{ name: 'objektlisteVorschau'}" class=""><img src="../assets/image/icons/eye.svg" width="28" alt="" title="Das Vorschau der Objekte" /></RouterLink>
                                                  </div>
                                                  <div class="mr-5 flex items-center ">
                                                       <label class="relative inline-block cursor-pointer">
                                                            <input type="checkbox" class="sr-only peer" :value="objList.active" :name="objList.id" @change="(e) => deactivateOrActivateObjectlist(e, objList.id)" :checked="objList.active == 1 ? true : false">
                                                            <div class="w-11 h-6 bg-gray-200 rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary-color"></div>
                                                       </label>
                                                  </div>
                                                  <div class="mr-5">
                                                       <button type="button" class="" @click="deleteObjectlist(objList.id)">
                                                            <img src="../assets/image/icons/delete.svg" width="28" alt="" title="löschen" />
                                                       </button>
                                                  </div>
                                             </div>
                                             <!-- <span>Active: {{  objList.id }}-----{{ active }}</span> -->
                                        </li>
                                                                 
                                   </div>
                                   <div v-else> Loading..</div>
                              </div>
                         </div>
               </div>
          </div> 
     </div>
     
</template>

<script>
//import getObjektList from '@/composables/getObjektList';
import axios from 'axios'
import { RouterLink } from 'vue-router';

export default{

    data() {
        return {
            objectLists: [],
            error: "",

        };
    },
    mounted() {
        this.getObjectLists();
    },
    methods: {
          async getObjectLists() {
               try {
                    await axios.get('/objectlists')
                         .then(response => {
                         this.objectLists = response.data.filter((item) => item.user_id == '19003');
                         //console.log(this.objectLists);
                         if (!this.objectLists) {
                         this.error = "No data found..";
                         }
                    });
               }
               catch (err) {
                    this.error = err.message;
               }
          },
          async deleteObjectlist(id) {
               try{
                    await  axios.delete(`/objectlists/${id}`)
                    .then(res => {
                         if(res.status == 200)
                              {
                                  console.log(res); 
                                  this.getObjectLists();
                              }

                    })
                    .catch(function (error) {
                         console.log(error);
                    }) 
               }
               catch(err){
                    this.error = err.message;
               }
          },
          async deactivateOrActivateObjectlist(e, id) {               
               const setActiveVal = (e.target.value) == 0 ? { active: 1} : { active: 0};
               await axios.put(`/objectlists/${id}/active`, setActiveVal)
               .then(res => {
                    if(res.status == 200){
                         console.log(res);
                         this.getObjectLists();
                    }
               })
               .catch(function(error) {
                    console.log(error);
               })
               
          }
    },

    components: { RouterLink }
}

</script>