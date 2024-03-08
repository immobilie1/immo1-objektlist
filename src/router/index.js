import { createRouter, createWebHashHistory } from 'vue-router'
import ObjektlisteList from '../views/Objektliste-List.vue'
import Objektliste from '../views/Objektliste-Lpage.vue'
import ObjektlisteErstellen from '../views/Objektliste-Erstellen.vue'
import ObjektlisteEinstellungBearbeiten from '../views/Objektliste-Einstellung-Bearbeiten.vue'
import ObjektlisteDesignBearbeiten from '../views/Objektliste-Design-Bearbeiten.vue'
import ObjektlisteCode from '../views/Objektliste-Code.vue'
import ObjektlisteVorschau from '../views/Objektliste-vorschau.vue'

const routes = [  
  {
    path: '/objektlist/listen',
    name: 'objektlisteList',
    component: ObjektlisteList
  },
  {
    path: '/',
    name: 'Objektlisten',
    component: Objektliste
  },
  {
    path: '/objektlist/erstellen',
    name: 'objektlisteErstellen',
    component: ObjektlisteErstellen
  },
  {
    path: '/objektlist/:id/einstellungen-bearbeiten',
    name: 'objektlisteEinstellungBearbeiten',
    component: ObjektlisteEinstellungBearbeiten
  },
  {
    path: '/objektlist/:id/design-bearbeiten',
    name: 'objektlisteDesignBearbeiten',
    component: ObjektlisteDesignBearbeiten
  },
  {
    path: '/objektlist/:id/code',
    name: 'objektlisteCode',
    component: ObjektlisteCode
  },
  {
    path: '/objektlist/vorschau',
    name: 'objektlisteVorschau',
    component: ObjektlisteVorschau
  }



]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
