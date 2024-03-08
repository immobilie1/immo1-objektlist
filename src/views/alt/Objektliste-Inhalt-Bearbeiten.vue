<template>
     <div class="container">
          <StepsHeader />
          <form @submit.prevent="handleInhaltSubmit">
               <div class="objektlist px-0">
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Name(Inhalt)
                         <span class="required" aria-required="true"> * </span>
                         </label>
                         <div class="col-md-8">
                              <input name="title" maxlength="100" type="text" class="form-control  backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none" placeholder="Meine Objektliste" required>
                              <div class="form-text text-muted">Der Name der Objektliste, welcher zur internen Verwaltung dient.</div>
                         </div>
                    </div>
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Domain
                         <span class="required" aria-required="true"> * </span>
                         </label>
                         <div class="col-md-8">
                              <input name="domain" maxlength="100" type="text" class="form-control  backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none" placeholder="ihre-domain.de" required>
                              <div class="form-text text-muted">Die URL der Webseite auf der Sie die Objektliste einbinden möchten.</div>
                         </div>
                    </div>
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Listenart
                         </label>
                         <div class="col-md-8">
                              <select id="" name="type" class="form-select form-control backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none">
                                   <option value="1">nur aktive Objekte</option>
                                   <option value="2">aktive und inaktive Objekte</option>
                              </select>
                         </div>
                    </div>
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Objektart
                         </label>
                         <div class="col-md-8">
                              <select id="" name="objektart" class="form-select form-control backdrop-opacity-100 focus:border focus:border-primary-color focus:outline-1 focus:shadow-none">
                                   <option value="">-- alle Objektarten --</option>
                                   <option value="5">Büros / Praxen</option>
                                   <option value="6">Einzelhandel</option>
                                   <option value="11">Freizeitimmobilien</option>
                                   <option value="7">Gastgewerbe</option>
                                   <option value="14">Gewerbegrundstücke</option>
                                   <option value="4">Grundstücke</option>
                                   <option value="8">Hallen, Lager &amp; Produktionsflächen</option>
                                   <option value="3">Häuser</option>
                                   <option value="9">Land- &amp; Forstwirtschaften</option>
                                   <option value="2">Wohnungen</option>                                   
                                   <option value="10">Sonstige</option>
                              </select>
                         </div>
                    </div>
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Vermarktungsarten
                         </label>
                         <div class="col-md-8">
                              <label class="control-label mr-3">
                                   <input type="radio" name="vermarktungsarten" value="0" checked /> Alle Vermarktungsarten
                              </label>
                              <label class="control-label mr-3">
                                   <input type="radio" name="vermarktungsarten" value="1" /> Vermarktungsarten auswählen
                              </label>

                              <div id="" class="bg-white p-2 border" style="">
							<label class="control-label col-12">
                                        <input name="vermarktungsart[]" type="checkbox" value="10000000001"> Kauf
                                        </label>	
							<label class="control-label col-12">
                                        <input name="vermarktungsart[]" type="checkbox" value="10000000010"> Miete/Pacht
                                   </label>									
						</div>
                         </div>
                    </div>
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Nutzungsarten
                         </label>
                         <div class="col-md-8">
                              <label class="control-label mr-3">
                                   <input type="radio" name="nutzungsarten" value="0" checked /> Alle Nutzungsarten
                              </label>
                              <label class="control-label mr-3">
                                   <input type="radio" name="nutzungsarten" value="1" /> Nutzungsarten auswählen
                              </label>

                              <div id="" class="bg-white p-2 border" style="">
							<label class="control-label col-12"><input name="nutzungsart[]" type="checkbox" value="10000000001"> Wohnen</label>
							<label class="control-label col-12"><input name="nutzungsart[]" type="checkbox" value="10000000010"> Gewerbe</label>
							<label class="control-label col-12"><input name="nutzungsart[]" type="checkbox" value="10000000100"> Anlage</label>
							
						</div>
                         </div>
                    </div> 
                    <hr class="mb-4"/>
                    
                    <div class="mb-4 row">
                         <div class="col-md-12 text-right">
                              <button type="submit" class="btn text-white bg-primary-color">Weiter</button>
                         </div>
                    </div>

               </div>
          </form>
     </div>
</template>

<script setup>
     import StepsHeader from "../../components/Steps-Header.vue";
     import router from '../../router';
     const handleInhaltSubmit = () => {
          console.log("Submitted..");
          router.push({ path: '/einstellungen-bearbeiten' })
     }
</script>