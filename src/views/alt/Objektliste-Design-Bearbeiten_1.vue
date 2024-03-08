<template>
     <div class="container">
          <StepsHeader />
          <form @submit.prevent="handleDesignSubmit">
               <div class="objektlist px-0">
                    
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Eigenes Design verwenden</label>
                         <div class="col-md-8">
                              <label class="control-label mt-2 me-3">
                                   <input class="" type="checkbox" name="custom_design" value="1" />
                                   <span class=""></span>
                              </label>
                         </div>
                    </div>
                         
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Balken-Farbe</label>
                         <div class="col-md-8">
                              <input type="color" class="form-control py-3" name="color_border" />
                         </div>
                    </div>		
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Button-Schriftfarbe</label>
                         <div class="col-md-8">
                              <input type="color" class="form-control py-3" name="color_button_font" />
                         </div>
                    </div>
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Button-Farbe</label>
                         <div class="col-md-8">
                              <input type="color" class="form-control py-3" name="color_button_background" />
                         </div>
                    </div>				
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Hintergrundfarbe</label>
                         <div class="col-md-8">
                              <input type="color" class="form-control py-3" name="color_background" />
                         </div>
                    </div>						
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Schriftfarbe</label>
                         <div class="col-md-8">
                              <input type="color" class="form-control py-3" name="color_font" />
                         </div>
                    </div>						
                    
                    <div class="mb-4 row text-color">
                         <label class="col-md-4 control-label text-left sm:text-right">Abgerundete Ecken</label>
                         <div class="col-md-8 flex">
                              <input type="number" class="form-control block w-full shadow-sm text-sm focus:z-10  rounded-r-none border-e-0" name="border_radius" />

                              <span class="px-4 inline-flex items-center min-w-fit rounded-r-md border-y border-r border-slate-400 bg-gray-50 text-sm text-gray-500">px</span>     
                         </div>
                    </div>
                                   
                                   
                    <hr class="mt-5 mb-4" />
                    <div class="mb-4 row text-color">
                         <div class="col-md-12 flex justify-between">
                              <button type="button" @click="handleBack" class="btn text-white bg-primary-color">Zurück</button>
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
     const handleDesignSubmit = () => {
          console.log("Submitted..");
          router.push({ path: '/objektlist/code' })
     }
     const handleBack = () => {
          console.log('back');
          router.go(-1);
     }
</script>