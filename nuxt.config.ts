// https://v3.nuxtjs.org/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        rootTag: "div",
        baseURL: "/khanshifaul.dev",
        buildAssetsDir: "/Assets/",
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/devtools'
    ],
    tailwindcss: {
        cssPath: '@/assets/css/tailwind.css',
        injectPosition: 'first',
        viewer: false,
    },
    colorMode: {
        preference: 'dark',
        classSuffix: '',
    },
    nitro: {
        preset: "node-server",
        routeRules: {
            '/blog/**': { swr: true },
            // '/blog/**': { swr: 600 },
            // '/blog/**': { static: true },
            // '/blog/**': { cache: { /* cache options*/ } },
            '/assets/**': { headers: { 'cache-control': 's-maxage=0' } },
            // '/api/v1/**': { cors: true, headers: { 'access-control-allow-methods': 'GET' } },
            '/admin/dashboard': { redirect: '/admin' },
            // '/proxy/example': { proxy: 'https://example.com' },
            // '/proxy/**': { proxy: '/api/**' },
        }
    },
});
