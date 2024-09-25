import {createRouter,createWebHistory} from "vue-router"
import landingPage from "@/views/landingPage.vue"
import basicsDashboard from "@/views/basicsDashboard.vue"
import componentsDashboard from "@/views/componentsDashboard.vue"
import routingDashboard from "@/views/routingDashboard.vue"
const routes=[
    {
        path:'/',
        name:'landingPage',
        component:landingPage
    },
    {
        path:'/basicsdashboard',
        name:'basicsDashboard',
        component:basicsDashboard
    },
    {
        path:'/componentsdashboard',
        name:'componentsDashboard',
        component:componentsDashboard
    },
    {
        path:'/routingdashboard',
        name:'routingDashboard',
        component:routingDashboard
    }

]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;