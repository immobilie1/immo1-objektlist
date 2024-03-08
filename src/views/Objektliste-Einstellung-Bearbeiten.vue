<template>
     <div class="p-container objektlist" style="clear:both">
          <div class="p-head">
               <div class="container">
                    <div class="container">
                         <div class="p-title">
                              <h1 class="spacing">Einstellungen bearbeiten</h1></div>
                              <div class="p-nav"> 
                                   <RouterLink :to="{ name: 'Objektlisten'}" class="btn text-white bg-primary-color ml-3">Abbrechen</RouterLink> 
                              </div>
                    </div>
               </div>
          </div>
          <div class="p-content">
               <div class="container">
                    <div class="objektlist objektlist-block">
                         <div v-if="error"> {{ error }} </div>
                         <div v-if="!error">
                              <form @submit.prevent="handleEinstellungSubmit">
                                   <div class="p-content-title">
                                        <div class="caption">
                                             <span class="caption-word bold spacing">Einstellungdaten</span>
                                        </div>
                                   </div>
                                   <div class="px-0">
                                        <div class="objektlist-form-body">
                                             <div class="mb-4 row text-color">
                                                  <label class="col-md-4 control-label text-left sm:text-right">Bezeichnung*
                                                  <span class="required" aria-required="true"></span>
                                                  </label>
                                                  <div class="col-md-8">
                                                       <input autoFocus key="title" maxlength="100" type="text" v-model="this.form.objListName" @input="chkEmptyInput" class="form-control   focus:border focus:border-primary-color-500 focus:outline-1 focus:shadow-none" placeholder="Meine Objektliste" required>
                                                       <div class="form-text text-muted">Der Name der Objektliste, welcher zur internen Verwaltung dient.<span style="color: red;font-size:14px;" > {{ error[0] }} </span></div>
                                                  </div>
                                             </div>
                                             <div class="mb-4 row text-color">
                                                  <label class="col-md-4 control-label text-left sm:text-right">Domain*
                                                  <span class="required" aria-required="true"></span>
                                                  </label>
                                                  <div class="col-md-8">
                                                       <input key="domain" maxlength="100" type="text" v-model="form.domainName" @input="chkEmptyInput" class="form-control  backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none" placeholder="ihre-domain.de" required>
                                                       <div class="form-text text-muted">Die URL der Webseite auf der Sie die Objektliste einbinden möchten.<span style="color: red;font-size:14px;" >{{ error[1] }}</span></div>
                                                  </div>
                                             </div>
                                             <div class="mb-4 row text-color">
                                                  <label class="col-md-4 control-label text-left sm:text-right">Objektauswahl*
                                                  </label>
                                                  <div class="col-md-8">
                                                       <select id="" key="type" v-model="form.type" class="form-select form-control backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none">
                                                            <option value="1">Alle aktiven Objekte</option>
                                                            <option value="3">Objektreferenzen</option>
                                                       </select>
                                                  </div>
                                             </div>
                                             <div class="mb-4 row text-color">
                                                  <label class="col-md-4 control-label text-left sm:text-right">Objektart
                                                  </label>
                                                  <div class="col-md-8">
                                                       <select id="" key="objektart" v-model="form.objektart" class="form-select form-control backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none">
                                                            <option key="1" value="">Alle Objektarten</option>
                                                            <option v-for="objectart in objectarts" v-bind:key="objectart.objekt_objektart_id" :value="objectart.objekt_objektart_id">{{ objectart.name }}</option>
                                                       </select>
                                                  </div>
                                             </div>

                                             <div class="mb-4 row text-color">
                                                  <label class="col-md-4 control-label text-left sm:text-right">Vermarktungsarten
                                                  </label>
                                                  <div class="col-md-8">
                                                       <label class="v_art cursor control-label" v-bind:key="0">
                                                            <input type="radio" name="vermarktungsarten" value="0" v-model="form.vermarktungsart" hidden /><span class="vermarktung l_radius border_r">Alle</span>
                                                       </label>
                                                       <label class="v_art cursor control-label" v-bind:key="10000000001">
                                                            <input name="vermarktungsarten" type="radio" value="10000000001" v-model="form.vermarktungsart" hidden> <span class="vermarktung border_r">Kauf</span>
                                                       </label>
                                                       <label class="v_art cursor control-label" v-bind:key="10000000010">
                                                            <input name="vermarktungsarten" type="radio" value="10000000010" v-model="form.vermarktungsart" hidden> <span class="vermarktung r_radius">Miete</span>
                                                       </label><br>
                                                       <!-- <span>vermarktungsart: {{ sel_vermarktungsart }}</span> -->
                                                  </div>
                                             </div>
                                             <div class="mb-4 row text-color">
                                                  <label class="col-md-4 control-label text-left sm:text-right">Nutzungsarten
                                                  </label>
                                                  <div class="col-md-8">
                                                       <label class="n_art cursor control-label" v-bind:key="0">
                                                            <input type="radio" name="nutzungsarten" value="0" v-model="form.nutzungsart" @click="unchkNutzungsart" hidden /><span class="nutzung l_radius border_r">Alle</span> 
                                                       </label>
                                                       <label class="n_art cursor control-label" v-bind:key="1">
                                                            <input type="radio" name="nutzungsarten" value="1" v-model="form.nutzungsart" hidden /><span class="nutzung r_radius" >Nutzungsarten auswählen</span>
                                                       </label>
                                                       <div class="mt-3" v-if="form.nutzungsart == 1">
                                                            <label class="n_art cursor control-label" v-bind:key="10000000001">
                                                            <input name="nutzungsart[]" type="checkbox" value="10000000001" v-model="form.chk_nutzungsart" hidden><span class="nutzung nutzung-m l_radius border_r">Wohnen</span> 
                                                            </label>
                                                            <label class="n_art cursor control-label" v-bind:key="10000000010">
                                                                 <input name="nutzungsart[]" type="checkbox" value="10000000010" v-model="form.chk_nutzungsart" hidden><span class="nutzung nutzung-m border_r">Gewerbe</span> 
                                                            </label>
                                                            <label class="n_art cursor control-label" v-bind:key="10000000100">
                                                                 <input name="nutzungsart[]" type="checkbox" value="10000000100" v-model="form.chk_nutzungsart" hidden> <span class="nutzung nutzung-m r_radius">Anlage</span>
                                                            </label>
                                                       </div>
                                                       <!-- <br>
                                                       <span>Nutzungsart_Radio: {{ sel_nutzungsart }}</span><br>
                                                       <span>Nutzungart: {{ chk_nutzungsart }}</span> -->
                                                  </div>
                                             </div>
                                             
                                             <div class="mb-4 row">
                                                  <label class="col-md-4 control-label text-left sm:text-right">Filter anzeigen</label>
                                                  <div class="col-md-8">
                                                       <label class="control-label mr-3">
                                                            <input class="align-middle h-5 w-5" type="checkbox" name="filter" value="0" v-model="form.filter" /> <span>Filter nach Standort, Kauf/Miete, Objektarten, Ausstattung (Preis, Zimmer, Fläche, Baujahr) </span>
                                                       </label>
                                                  </div>
                                             </div> 
                                             <!-- <hr class="mb-4"/> -->
                                             
                                             <div class="mb-4 row">
                                                  <div class="col-md-12 text-right">
                                                       <button type="submit" class="btn text-white bg-primary-color">Weiter</button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <p>
                                        <!-- <pre>
                                             data: {{ form }}
                                        </pre> -->
                                   </p>
                              </form>
                         </div>
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
                         objListName: '',
                         domainName: '',
                         type: '1',
                         objektart: '',
                         vermarktungsart: 0,
                         nutzungsart: 0,
                         chk_nutzungsart: [],
                         filter: false
                    },
                    objectarts: [],
                    objectList: [],
                    error : ""
               }
          },
          mounted() {
               this.getEinstellungsData(this.$route.params.id);
               this.getObjectarts();
          },
          methods: {
               handleEinstellungSubmit() {
                    if(!this.form.objListName.trim()){ this.error.validateName = "(Bitte geben Sie Objektlistname ein!)"; return }
                    if(!this.form.domainName.trim()){ this.error.validateDomain = "(Bitte geben Sie richtige Domainname ein!)"; return }
                    this.updateEinstellungsData();
                    console.log("Submitted..");
                    router.push({ path: `/objektlist/${this.$route.params.id}/design-bearbeiten` })
               },
               chkEmptyInput() {
                    if(this.form.objListName.trim()){ this.error.validateName= "";}
                    if(this.form.domainName.trim()){ this.error.validateDomain = "";}
               },
               getVermarktungsArt(vermarktungsart) {
                    let vermarktungsArt = "0";
                    if(vermarktungsart == '10000000001') { vermarktungsArt = '10000000001' }
                    else if(vermarktungsart == '10000000010') { vermarktungsArt = '10000000010' }
                    return vermarktungsArt;
               },
               getNutzungsArt(nutzungsart) {
                    let chk_nutzungsArt = [];
                    let isNutzungsart = 0;
                    if(nutzungsart && nutzungsart !== ',,' ) {
                         isNutzungsart = 1;
                         chk_nutzungsArt = nutzungsart.split(',').map(s => s.trim());
                         
                    }
                    return [ {'isNutzungsart': isNutzungsart}, {'chk_nutzungsArt': chk_nutzungsArt} ]

               },
               unchkNutzungsart() {
                    this.form.chk_nutzungsart = [];
               },
               async getEinstellungsData(objectListId) {
                    try {
                         axios.get("/objectlists")
                         .then(resp => {
                              if(resp.status == 200)
                              {
                                   this.objectList = resp.data.filter((item) => item.user_id == '19003' && item.id == objectListId )
                                   if(this.objectList.length) {
                                        let nutzungsart_array = this.getNutzungsArt(this.objectList[0].nutzungsart);
                                        //console.log(getArt_N);
                                        this.form.objListName = this.objectList[0].name;
                                        this.form.domainName = this.objectList[0].domain;
                                        this.form.type = (this.objectList[0].type == '2' ? '1' : this.objectList[0].type == '1' ? '1' : '3');
                                        this.form.objektart = (!this.objectList[0].objektart) ? "" : this.objectList[0].objektart;
                                        this.form.vermarktungsart = this.getVermarktungsArt(this.objectList[0].vermarktungsart);
                                        this.form.nutzungsart = nutzungsart_array[0]['isNutzungsart'];
                                        this.form.chk_nutzungsart = nutzungsart_array[1]['chk_nutzungsArt'];
                                        this.form.filter = (this.objectList[0].filter == 1) ? true : false;
                                   } else {
                                        alert('Keine Daten gefunden');
                                        this.error = "Es wurden keine passenden Daten gefunden";
                                   }
                                   
                              }
                              if(resp.status == 404) {
                                  this.error =  resp.data.message;
                              }    
                         })
                         .catch(function (error) {
                              if(error.response) {
                                  if(error.response.status == 404) {
                                   this.error = error.response.data.message;
                                   alert(this.error);
                                  } 
                              }
                         })
                    }
                    catch (err) {
                         this.error = err.message
                    }
               },
               async updateEinstellungsData() {
                    let filter_option = 0;
                    if(this.form.filter == true) { 
                         filter_option = 1;
                    }

                    const updateBody = {
                         user_id: '19003', type: this.form.type, name: this.form.objListName, domain: this.form.domainName, objekttype: parseInt(this.form.objektart),marketingtype:this.form.vermarktungsart, typeofuse: this.form.chk_nutzungsart.toString(), country: 'DEU', filter: filter_option, sort: 1, map_active: 1, view_furnishing: 1
                    }
                    //console.log(updateBody);
                    //console.log(this.$route.params.id);
                    try {
                         axios.put(`/objectlists/${this.$route.params.id}/settings`, updateBody)
                         .then(res => {
                              if(res.status == 200)
                                   console.log("Successfully updated"); 
                              if(res.status == 404)
                                   console.log("object not found!" + res.data.message); 
                              if(res.status == 422)
                                   console.log("Validation errors!" + res.data.errors);
                         })
                         .catch(function(error) {
                              console.error(error);
                         })

                    }
                    catch (err) {
                         this.error = err.message
                    }
               },
               async getObjectarts() {
                    await axios.get(`/objecttypes`)
                    .then(res => {
                         if(res.status == 200) {
                              this.objectarts = res.data;
                         }
                         if(res.status == 400) {
                              this.error['objartErr'] = 'Invalid status code';
                         }
                    })
                    .catch(function(error) {
                         console.log(error);
                    })
               }



          }
     };
     
</script>