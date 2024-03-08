<template>
     <div class="p-container objektlist" style="clear:both">
          <div class="p-head"  
                    style="-webkit-box-shadow: inset 0px 6px 5px -3px #C0C0C0;
                              background: #e0e0e0;">
               <div class="container">
                    <div class="container">
                         <div class="p-title font-lato-r"><h1>Meine Objektlisten</h1></div>
                         <div class="p-nav p-create-new">
                              <router-link :to="{ name: 'objektlisteList'}" class="btn text-white bg-primary-color">Objektliste erstellen</router-link> 
                         </div>
                    </div>
               </div>
          </div>
          <div class="p-content">
                    <div class="container">
                         <div class="row">
                              <div class="col-md-6">
                                   <div class="objektlist-block">
                                        <div class="block-title">
                                             <div class="caption">
                                                  <span class="text-xl">Objektliste erstellen</span> 
                                             </div>
                                        </div>
                                        <div class="block-body pt-2">
                                             <div class="pb-3">
                                                  <p>Mit Objektlisten veröffentlichen Sie Ihre Objekte ganz einfach auf der eigenen Website.</p>
                                                  <p>Stets aktueller Objektbestand</p>
                                                  <p>Einfache Einbindung auf Ihrer Website</p>
                                                  <p>Anpassung am ihre Farben und Schriften</p>
                                                  <p>Keine Programmierkenntnisse nötig</p>
                                                  <p>Auf Wunsch: Darstellung von Objekten im Gemeinschaftsgeschäften (MLS)</p>
                                                  <p>Eine genaue Beschreibung wie Sie die Objektlisten auf ihrer Website einbinden, finden sie <span v-on:click="changeVal" class="font-bold cursor-pointer underline underline-offset-4 hover:text-primary-color">hier</span>.</p>
                                             </div>
                                             <div class="text-right">
                                                  <Transition  name="objektlist-info" class="show-detail-m" style="text-align: left;">
                                                       <div v-show="isInfo">
                                                            <div class="objektlist-block">
                                                                 <div class="block-body pt-2">
                                                                      <div class="pb-3">
                                                                           <p>Detaillierte Beschreibung wie Objektlisten auf der Website eingebunden werden.                                             
                                                                           </p>
                                                                           <p>Erstellen Sie Objektlisten, um Immobilienobjekte auf Ihrer eigenen Website darstellen zu können.</p>
                                                                           <p>Bitte klicken Sie dazu auf "Objektliste erstellen" und folgen Sie den Anweisungen. Sie erhalten im Anschluss einen HTML Code, den Sie auf Ihrer Website einbinden können.</p>
                                                                      </div>
                                                                           
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Transition>
                                                  <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700">
                                                  <router-link :to="{ name: 'objektlisteErstellen'}" class="btn text-white bg-primary-color width-100">Objektliste erstellen</router-link>                              
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-md-6">
                                   <div class="objektlist-block">
                                        <div class="block-title">
                                             <div class="caption">
                                             <span class="text-xl">Objektliste verwalten</span> 
                                             </div>
                                        </div>
                                        <div class="block-body pt-2">
                                             <div class="pb-3">
                                                  <p>Klicken Sie auf Objektlisten verwalten, um bestehende Listen zu aktualisieren oder zu bearbeiten.</p>
                                             </div>
                                             <div class="text-right">
                                                  <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700">
                                                  <router-link :to="{ name: 'objektlisteList'}" class="btn text-white bg-primary-color width-100">Objektliste verwalten</router-link>                              
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>
                         <Transition  name="objektlist-info" class="show-detail-d">
                              <div v-show="isInfo" class="row objektlist">
                                   <div class="col-md-6">
                                        <div class="objektlist-block">
                                             <!-- <div class="block-title">
                                                  <div class="caption">
                                                  <span class="bold text-xl">Objektliste erstellen</span> 
                                                  </div>
                                             </div> -->
                                             <div class="block-body pt-2">
                                                  <div class="pb-3">
                                                       <p>Detaillierte Beschreibung wie Objektlisten auf der Website eingebunden werden.                                             
                                                       </p>
                                                       <p>Erstellen Sie Objektlisten, um Immobilienobjekte auf Ihrer eigenen Website darstellen zu können.</p>
                                                       <p>Bitte klicken Sie dazu auf "Objektliste erstellen" und folgen Sie den Anweisungen. Sie erhalten im Anschluss einen HTML Code, den Sie auf Ihrer Website einbinden können.</p>
                                                  </div>
                                                  
                                             </div>
                                        </div>
                                   </div>
                                   <div class="col-md-6">
                                   </div>
                              </div>
                         </Transition>
                    </div>
          </div>
     </div>


</template>

<script>
     import { ref } from "vue";
     // import Footer from "../components/Footer-page.vue";
     export default { 
                  
          setup() {
               console.log('setup')
               const isInfo = ref(false);

               const changeVal = () => {
                    isInfo.value = !isInfo.value
               }
               return { isInfo, changeVal };
          },
          created() {
               console.log('created')
          },
          mounted() {
               console.log('mounted')
          }  
     }
     

     
     
     
</script>

