<template>
     <div class="p-container objektlist" style="clear:both">
          <div class="p-head">
               <div class="container">
                    <div class="container">
                         <div class="p-title">
                              <h1 class="spacing">Design anpassen</h1></div>
                              <div class="p-nav"> 
                                   <RouterLink :to="{ name: 'Objektlisten'}" class="btn text-white bg-primary-color ml-3">Abbrechen</RouterLink> 
                              </div>
                    </div>
               </div>
          </div>
          <div class="p-content">
               <div class="container">
                    <div class="objektlist objektlist-block"> 
                         <div v-if="error[0]">{{ error[0] }}</div>
                         <form v-if="!error[0]" @submit.prevent="handleDesignSubmit">
                              <div class="p-content-title">
                                   <div class="caption">
                                        <span class="caption-word bold spacing">Designdaten</span>
                                   </div>
                              </div>
                              <div class="px-0">
                                   <div class="objektlist-form-body">
                                        <div class="mb-4 row">
                                             <label class="col-sm-4 control-label text-left sm:text-right">Anzahl pro Seite</label>
                                             <div class="col-sm-8">
                                                  <input type="number" class="form-control backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none" name="limit" v-model="form.limit"  />
                                             </div>
                                        </div>												
                                        <div class="mb-4 row">
                                             <label class="col-sm-4 control-label text-left sm:text-right">Darstellung</label>
                                             <div class="col-sm-8">
                                                  <select class="form-select form-control backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none" name="darstellung" v-model="form.display">
                                                       <option Key="1" value="Kachel">Kachel</option>
                                                       <option Key="2" value="Liste">Liste</option>
                                                  </select>
                                             
                                             </div>
                                        </div>
                                        <div class="mb-4 row">
                                             <label class="col-md-4 control-label text-left sm:text-right">Anzahl Kacheln nebeneinander</label>
                                             <div class="col-md-8">
                                                  <select class="form-select form-control backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none" name="anzahl_kacheln" v-model="form.number_tiles">
                                                       <option Key="2" value="2">2</option>
                                                       <option Key="3" value="3">3</option>
                                                       <option Key="4" value="4">4</option>
                                                  </select>
                                             </div>
                                        </div>
                                        <div class="mb-4 row">
                                             <label class="col-md-4 control-label text-left sm:text-right">Anbieter Widget</label>
                                             <div class="col-md-8">
                                             <label class="control-label">
                                                  <input class="align-middle h-5 w-5" type="checkbox" name="anbieter_widget_active" value="1" v-model="form.broker_widget_active"/>
                                             </label>
                                             </div>
                                        </div>

                                        <div class="mb-4 row">
                                             <label class="col-md-4 control-label text-left sm:text-right">Eigenes Design verwenden</label>
                                             <div class="col-md-8">
                                                  <label class="control-label">
                                                       <input class="align-middle h-5 w-5" type="checkbox" name="custom_design" value="1" v-model="form.custom_design"/>
                                                       <span class=""></span>
                                                  </label>
                                             </div>
                                        </div>
                                        <div class="mb-4 row">
                                             <label class="col-md-4 control-label text-left sm:text-right">Abgerundete Ecken</label>
                                             <div class="col-md-8 flex">
                                                  <input type="number" class="form-control block w-full shadow-sm text-sm focus:z-10  rounded-r-none border-e-0" name="border_radius" v-model="form.border_radius" />

                                                  <span class="px-4 inline-flex items-center min-w-fit rounded-r-md border-y border-r border-slate-400 bg-gray-50 text-sm text-gray-500">px</span>     
                                             </div>
                                        </div> 
                                        <div class="mb-4 row">
                                             <label class="col-md-4 control-label text-left sm:text-right">Balken-Farbe</label>
                                             <div class="row col-md-8">
                                                       <div class="col-md-6">
                                                            <input type="color" class="form-control md:w-1/4" name="color_border" v-model="form.color_border"/>                                                     
                                                       </div>
                                                       <div class="row col-md-6">
                                                            <label class="col-md-4 control-label">Hintergrundfarbe</label>
                                                            <input type="color" class="form-control md:w-1/4" name="color_border" v-model="form.color_background"/>
                                                       </div>
                                                       
                                             </div>
                                        </div>
                                        <div class="mb-4 row">
                                             <label class="col-md-4 control-label text-left sm:text-right">Button-Schriftfarbe</label>
                                             <div class="row col-md-8">
                                                  <div class="col-md-6"> 
                                                       <input type="color" class="form-control md:w-1/4" name="color_border" v-model="form.color_button_font"/> 
                                                  </div>
                                                  <div class="row col-md-6">
                                                       <label class="col-md-4 control-label">Schriftfarbe</label>
                                                       <input type="color" class="form-control md:w-1/4" name="color_border" v-model="form.color_font"/>
                                                  </div>
                                                  
                                             </div>
                                        </div>
                                        <div class="mb-4 row">
                                             <label class="col-md-4 control-label text-left sm:text-right">Button-Farbe</label>
                                             <div class="col-md-8">
                                                  <div class="col-md-6">      
                                                       <input type="color" class="form-control md:w-1/4" name="color_border" v-model="form.color_button_background"/>                                                     
                                                  </div>    
                                             </div>
                                        </div>

                                        <div class="mb-4 row">
                                             <div class="col-md-12 flex justify-between">
                                                  <button type="button" @click="handleBack" class="btn text-white bg-primary-color">Zurück</button>
                                                  <button type="submit" class="btn text-white bg-primary-color">Weiter</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              
                         </form>
                    </div>
               </div>
          </div>
     </div>
</template>



<script>
     import router from '../router';
     import axios from 'axios';
     // import { ref } from 'vue';
     
     export default {
          data() {

               return {

                    form : {
                         limit: '20',
                         display: 'Kachel',
                         broker_widget_active: 0,
                         number_tiles: 4,
                         custom_design: 0,
                         border_radius: 5,
                         color_border: '#8a8a8a',
                         color_button_font: '#ffffff',
                         color_background: '#f0f0ef',
                         color_font: '#000000',
                         color_button_background:'#8a8a8a'
                    },
                    error: []
               }
          },
          mounted() {
               this.getDesignData(this.$route.params.id);
          },
          methods: {
               async getDesignData(id) {
                    try{
                         await axios.get("/objectlists")
                         .then(res => {
                              if(!res.data) { throw Error('Something went wrong..'); }
                              const objectList = res.data.filter((item) => item.user_id == '19003' && item.id == id)
                              if(objectList.length == 0) { this.error[0] = "Es wurden keine passenden Daten gefunden"; throw Error('No matching data found..')}
                              this.form.limit = objectList[0].limit;
                              this.form.display = objectList[0].darstellung
                              this.form.broker_widget_active = (objectList[0].anbieter_widget_active == 1 ? true : false );
                              this.form.number_tiles = objectList[0].anzahl_kacheln 
                              this.form.custom_design = (objectList[0].custom_design == 1 ? true : false);
                              this.form.border_radius = objectList[0].border_radius 
                              this.form.color_border = objectList[0].color_border;
                              this.form.color_button_font = objectList[0].color_button_font 
                              this.form.color_background = objectList[0].color_background;
                              this.form.color_font = objectList[0].color_font  
                              this.form.color_button_background = objectList[0].color_button_background          

                         })
                         .catch(function(error) {
                              if(error.response) {
                                   console.log(error.response.status);
                              }
                         })
                    }
                    catch(err){
                         console.log(err.message);
                    }
               },
               async handleDesignSubmit() {
                    if(this.form.broker_widget_active == true) this.form.broker_widget_active = 1
                    else this.form.anbieter_widget_active = 0;
                    if(this.form.custom_design == true) this.form.custom_design = 1
                    else this.form.custom_design = 0

                    await axios.put(`/objectlists/${this.$route.params.id}/design`, this.form)
                    .then(res => {
                         if(res.status == 200) {
                              console.log("Submitted..");
                              console.log("Successful operation")
                              router.push({ path: `/objektlist/${this.$route.params.id}/code` })
                         }
                         if(res.status == 404) console.log("object not found!" + res.data.message); 
                         if(res.status == 422) console.log("Validation errors!" + res.data.errors);
                    })
                    .catch(function(error) {
                         console.error(error);
                    })
                    
               },
               handleBack() {
                    /* const id = this.$route.params.id; */                    
                    router.push({ path: `/objektlist/${this.$route.params.id}/einstellungen-bearbeiten` })
               }

          }
     };
     
</script>