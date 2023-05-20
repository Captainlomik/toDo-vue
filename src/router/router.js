import { createRouter, createWebHashHistory } from "vue-router"
import MainPage from '@/pages/MainPage'
import DirectoryPage from '@/pages/DirectoryPage'
import AccountPage from '@/pages/account/AccountPage'

const routes = [
    { path: '/', component: MainPage },
    { path: '/directory', component: DirectoryPage },
    { path: '/account', component: AccountPage }

]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router