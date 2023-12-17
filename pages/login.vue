<template>
    <section class="bg-blue-200 dark:bg-[#192f70] min-h-[100vh]">
        <div class="container mx-auto py-24">
            <div class="flex items-center justify-around text-center">
                <Logo class="!text-3xl" />
            </div>
            <div class="max-w-md mx-auto my-12 p-5 rounded shadow-lg bg-white dark:bg-slate-400">
                <div v-if="response?.hasErrors && errors"
                    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
                    <ul class="block sm:inline">
                        <li v-for="[key, value] in errors">
                            {{ value.message }}
                        </li>
                    </ul>
                </div>
                <form v-on:submit.prevent class="mt-8 space-y-6" action="#" method="POST">
                    <div class="mb-4">
                        <label for="email" class="block font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    </div>
                    <div class="flex items-center justify-between">
                        <button @click=""
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign
                            In</button>
                        <a href="#"
                            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot
                            Password?</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>