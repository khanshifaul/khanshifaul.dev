<script setup lang="ts">
import { registerWithEmail } from "~/composables/useAuth";

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const username: Ref<string> = ref('');
const name: Ref<string> = ref('');

const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, { message: InputValidation }>())
let response: FormValidation

async function postRegisterForm() {
    response = await registerWithEmail(username.value, name.value, email.value, password.value);
    errors.value = response.errors
};
</script>

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
                <form v-on:submit.prevent class="space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded shadow-sm mb-1">
                        <div>
                            <label for="name" class="sr-only">Name</label>
                            <input type="text" v-model="name" id="name" name="name" required
                                class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                :class="errors?.has('name') ? ' border-red-500' : ''" placeholder="Name" />
                        </div>
                    </div>
                    <div class="rounded shadow-sm mb-1">
                        <div>
                            <label for="email-address" class="sr-only">Username</label>
                            <input type="email" v-model="username" id="username" name="username" required
                                class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                :class="errors?.has('username') ? ' border-red-500' : ''" placeholder="Username" />
                        </div>
                    </div>

                    <div class="rounded shadow-sm mb-1">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input v-model="email" id="email-address" name="email" type="email" autocomplete="email"
                                required
                                class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                :class="errors?.has('email') ? ' border-red-500' : ''" placeholder="Email address" />
                        </div>
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input v-model="password" id="password" name="password" type="password"
                            autocomplete="current-password" required
                            class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            :class="errors?.has('password') ? ' border-red-500' : ''" placeholder="Password" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button @click.prevent="postRegisterForm"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            <span class="flex items-center space-x-4">
                                <!-- Heroicon name: solid/lock-closed -->
                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span> Register </span>
                            </span>
                        </button>
                        <a href="#"
                            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot
                            Password?</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>