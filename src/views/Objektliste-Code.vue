<template>
     <div class="p-container objektlist" style="clear:both">
          <div class="p-head">
               <div class="container">
                    <div class="container">
                         <div class="p-title">
                              <h1 class="spacing">Code generieren</h1>
                         </div>
                         <div class="p-nav"> 
                              <RouterLink :to="{ name: 'Objektlisten'}" class="btn text-white bg-primary-color ml-3">Abbrechen</RouterLink> 
                         </div>
                    </div>
               </div>
          </div>
          <div class="p-content">
               <div class="container">
                    <div class="objektlist objektlist-block">
                         <div class="p-content-title">
                              <div class="caption">
                                   <span class="caption-word bold spacing">HTML Code</span>
                              </div>
                         </div>
                         <div class="px-0">
                              <div class="objektlist-form-body"> 
                                   <div class="mb-4 row text-color">
                                        <div class="col-md-12">
                                             <textarea class="form-control" rows="3"><div id="ivd24-container" data-id="this.id"></div>
<script async src="https://www.ivd24immobilien.de/wp-content/themes/ivd24/js/objektlisten.js"></script>
</textarea>
                                        </div>
                                        {{ objectlistId }}
                                   </div>
                                   
                                   <div class="mb-4 row">
                                        <div class="col-md-12 flex justify-between">
                                             <button type="button" @click="handleBack" class="btn text-white bg-primary-color">Zurück</button>
                                             <button type="button" @click="handleSubmit" class="btn text-white bg-primary-color">Weiter</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
     import router from '../router';
     export default {

          data() {
               return {
                    objectlistId: this.$route.params.id
               }               
          },
          methods: {
               
               handleSubmit() {
                    console.log("Submitted..");
                    router.push({ path: '/objektlist/listen' })
               },
               
               handleBack() {
                    //const id = this.$route.params.id;
                    router.push({ path: `/objektlist/${this.$route.params.id}/design-bearbeiten` });
               }
          }
     }
     
</script>
