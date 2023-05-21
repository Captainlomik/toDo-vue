import { createRouter, createWebHashHistory } from "vue-router"
import MainPage from '@/pages/MainPage'
import DirectoryPage from '@/pages/DirectoryPage'
import AccountPage from '@/pages/account/AccountPage'
import LoadingPage from '@/pages/LoadingPage'
import TimerPage from '@/pages/TimerPage'

const routes = [
    { path: '/', component: MainPage },
    { path: '/directory', component: DirectoryPage },
    { path: '/account', component: AccountPage },
    { path: '/loading', component: LoadingPage },
    { path: '/timer', component: TimerPage }

]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router