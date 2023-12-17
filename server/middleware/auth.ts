export default defineNuxtRouteMiddleware(to => {
    const isAuthenticated: Boolean = false
    if (isAuthenticated === false && to.path !== '/admin') {
        return navigateTo('/login')
    } else {
        return navigateTo('/admin')
    }
})
