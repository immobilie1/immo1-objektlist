<template>
     <div class="p-container objektlist" style="clear:both">
          <div class="p-head">
               <div class="container">
                    <div class="container">
                         <div class="p-title">
                              <h1 class="spacing">Einstellung bearbeiten</h1></div>
                              <div class="p-nav"> 
                                   <RouterLink :to="{ name: 'Objektlisten'}" class="btn text-white bg-primary-color ml-3">Abbrechen</RouterLink> 
                              </div>
                    </div>
               </div>
          </div>
          <div class="p-content">
               <div class="container">
                    <div class="objektlist objektlist-block">                         
                         <form @submit.prevent="handleSubmit">
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
                                                  <input autoFocus key="title" maxlength="100" type="text" v-model="model.form.objListName" @input="chkEmptyInput" class="form-control focus:border focus:border-primary-color-500 focus:outline-1 focus:shadow-none" placeholder="Meine Objektliste" required>
                                                  <div class="form-text text-muted">Der Name der Objektliste, welcher zur internen Verwaltung dient.<span style="color: red;font-size:14px;" > {{ error['chkNamevalErr'] }} </span></div>
                                             </div>
                                        </div>
                                        <div class="mb-4 row text-color">
                                             <label class="col-md-4 control-label text-left sm:text-right">Domain*
                                             <span class="required" aria-required="true"></span>
                                             </label>
                                             <div class="col-md-8">
                                                  <input key="domain" maxlength="100" type="text" v-model="model.form.domainName" @input="chkEmptyInput" @blur="e => validateDomain(e)" class="form-control  backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none" placeholder="ihre-domain.de" required>
                                                  <div class="form-text text-muted">Die URL der Webseite auf der Sie die Objektliste einbinden möchten.
                                                       <span style="color: red;font-size:14px;" > {{ error['chkDomainErr'] }} </span>
                                                       <span style="color: red;font-size:14px;" > {{ error['chkDomainNameErr'] }} </span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="mb-4 row text-color">
                                             <label class="col-md-4 control-label text-left sm:text-right">Objektauswahl*
                                             </label>
                                             <div class="col-md-8">
                                                  <select id="" key="type" v-model="model.form.type" class="form-select form-control backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none">
                                                       <option value="1">Alle aktiven Objekte</option>
                                                       <option value="4">Objektreferenzen</option>
                                                  </select>
                                             </div>
                                        </div>
                                        <div class="mb-4 row text-color">
                                             <label class="col-md-4 control-label text-left sm:text-right">Objektart
                                             </label>
                                             <div class="col-md-8">
                                                  <select id="" key="objektart" v-model="model.form.objektart" class="form-select form-control backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none">  
                                                       <option value="">Alle Objektarten</option>
                                                       <option v-for="objectart in objectarts" :key="objectart.objekt_objektart_id" :value="objectart.objekt_objektart_id">{{ objectart.name }}</option>
                                                  </select>
                                             </div>
                                        </div>

                                        <div class="mb-4 row text-color">
                                             <label class="col-md-4 control-label text-left sm:text-right">Vermarktungsarten
                                             </label>
                                             <div class="col-md-8">
                                                  <label class="v_art cursor control-label" v-bind:key="0">
                                                       <input type="radio" name="vermarktungsarten" value="0" v-model="model.form.vermarktungsart" hidden /><span class="vermarktung l_radius border_r">Alle</span>
                                                  </label>
                                                  <label class="v_art cursor control-label" v-bind:key="10000000001">
                                                       <input name="vermarktungsarten" type="radio" value="10000000001" v-model="model.form.vermarktungsart" hidden> <span class="vermarktung border_r">Kauf</span>
                                                  </label>
                                                  <label class="v_art cursor control-label" v-bind:key="10000000010">
                                                       <input name="vermarktungsarten" type="radio" value="10000000010" v-model="model.form.vermarktungsart" hidden> <span class="vermarktung r_radius">Miete</span>
                                                  </label><br>
                                             </div>
                                        </div>
                                        <div class="mb-4 row text-color">
                                             <label class="col-md-4 control-label text-left sm:text-right">Nutzungsarten
                                             </label>
                                             <div class="col-md-8">
                                                  <label class="n_art cursor control-label" v-bind:key="0">
                                                       <input type="radio" name="nutzungsarten" value="0" v-model="model.form.nutzungsart" @click="unchkNutzungsart" hidden /><span class="nutzung l_radius border_r">Alle</span> 
                                                  </label>
                                                  <label class="n_art cursor control-label" v-bind:key="1">
                                                       <input type="radio" name="nutzungsarten" value="1" v-model="model.form.nutzungsart" hidden /><span class="nutzung r_radius" >Nutzungsarten auswählen</span>
                                                  </label>
                                                  <div class="mt-3" v-if="model.form.nutzungsart == 1">
                                                       <label class="n_art cursor control-label" v-bind:key="10000000001">
                                                       <input name="nutzungsart[]" type="checkbox" value="10000000001" v-model="model.form.chk_nutzungsart" hidden><span class="nutzung nutzung-m l_radius border_r">Wohnen</span> 
                                                       </label>
                                                       <label class="n_art cursor control-label" v-bind:key="10000000010">
                                                            <input name="nutzungsart[]" type="checkbox" value="10000000010" v-model="model.form.chk_nutzungsart" hidden><span class="nutzung nutzung-m border_r">Gewerbe</span> 
                                                       </label>
                                                       <label class="n_art cursor control-label" v-bind:key="10000000100">
                                                            <input name="nutzungsart[]" type="checkbox" value="10000000100" v-model="model.form.chk_nutzungsart" hidden> <span class="nutzung nutzung-m r_radius">Anlage</span>
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
                                                       <input class="align-middle h-5 w-5" type="checkbox" name="filter" value="0" v-model="model.form.filter" /> <span>Filter nach Standort, Kauf/Miete, Objektarten, Ausstattung (Preis, Zimmer, Fläche, Baujahr) </span>
                                                  </label>
                                             </div>
                                        </div>
                                        
                                        <div class="mb-4 row">
                                             <div class="col-md-12 text-right">
                                                  <button type="submit" class="btn text-white bg-primary-color">Weiter</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <p>
                                   <pre>
                                        
                                   </pre>
                              </p>
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
     import isValidDomain from "is-valid-domain";
     
     export default {
          
          data() {

               return {
                    model : {
                         form: {
                              objListName: '',
                              domainName: '',
                              type: '1',
                              objektart: '',
                              vermarktungsart: 0,
                              nutzungsart: 0,
                              chk_nutzungsart: [],
                              filter: false
                         },
                    },
                    userId: 'iron.man',
                    password: 'holla',                    
                    objectarts: [],
                    error : [],
                    newId: ''
               }
          },
          mounted() {
               this.getObjectarts();
               //this.getObjecttypes();
          },
          methods: {
               chkEmptyInput() {
                    if(this.model.form.objListName.trim()){ this.error['chkNamevalErr'] = "";}
                    if(this.model.form.domainName.trim()){ this.error['chkDomainErr'] = "";}
               },
               validateDomain(e) {
                    if( isValidDomain(this.model.form.domainName) || this.model.form.domainName === 'localhost' ) 
                    {
                         this.error['chkDomainNameErr'] = "";
                    }
                    else{
                         this.error['chkDomainNameErr'] = "(Bitte geben Sie eine gültigen Domainnamen ein!)";
                         e.target.focus();e.target.select();
                         return
                    }
               },
               unchkNutzungsart() {
                    this.model.form.chk_nutzungsart = [];
               },               
               async handleSubmit() {
                    if(!this.model.form.objListName.trim()){ this.error['chkNamevalErr'] = "(Bitte geben Sie Objektlistname ein!)"; return }
                    if(!this.model.form.domainName.trim()){ this.error['chkDomainErr'] = "(Bitte geben Sie richtige Domainname ein!)"; return }
                    let filter_option = 0;
                    if(this.model.form.filter == true) { 
                         filter_option = 1;
                    }
                    const insertBody = {
                         user_id: '19003', type: this.model.form.type, name: this.model.form.objListName, domain: this.model.form.domainName, objecttype: parseInt(this.model.form.objektart),marketingtype:this.model.form.vermarktungsart, typeofuse: this.model.form.chk_nutzungsart.toString(), country: 'DEU', filter: filter_option, sort: 1, map_active: 1, view_furnishing: 1
                    }
                    console.log(insertBody);
                    await axios.post('/objectlists', insertBody)
                    .then(res => { 
                         if(res.status == 200) {
                              console.log("Successful operation")
                              this.newId = res.data.id;
                              router.push({ path: `/objektlist/${this.newId}/design-bearbeiten` })
                         }
                         if(res.status == 422) {
                              console.log("validation error!" + res.errors)
                         }
                    })
                    .catch(function(error) {
                         console.log(error)
                    })
                    
               },
               async getObjectarts() {
                    await axios.get(`/objecttypes`)
                    .then(res => {
                         if(res.status == 200) {
                              this.objectarts = res.data;
                              //console.log(this.objectarts);
                         }
                         if(res.status == 400) {
                              this.error['objartErr'] = 'Invalid status code';
                         }
                    })
                    .catch(function(error) {
                         console.log(error);
                    })
               },
               /* async getObjecttypes() {
                    const authHeader = 'Basic ' + btoa(this.userId + ':' + this.password);
                    console.log(authHeader);
                    await axios.get(`https://develop.web-backend.immo1.mogic-server.de/objecttypes`, {
                         headers: {
                              Authorization: authHeader,                              
                         }
                    })
                    .then(res => {
                         if(res.status == 200) console.log(res);
                    })
                    .catch(function(error) {
                         console.error(error);
                    })
               } */

          }
     };
   
</script>