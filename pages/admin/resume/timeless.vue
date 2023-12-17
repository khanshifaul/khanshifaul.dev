<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <section class="bg-slate-100">
        <div class="a4 border-2 border-slate-300">
            <div
                class="grid grid-cols-[3fr_auto] items-center justify-between bg-blue-200 border-b-2 px-8 py-4 shadow-slate-400">
                <!-- Contact Info -->
                <div>
                    <h2 class="text-3xl font-bold uppercase">Md Shifaul Islam</h2>
                    <h2 class="text-lg font-semibold text-blue-900">Full-Stack Web Developer</h2>
                    <div class="text-md">
                        <div class="flex items-center space-x-2">
                            <Icon class="text-blue-900" icon="mdi:cellphone-message" />
                            <a href="tel:+8801701005355">
                                <p>+880 170 100 5355</p>
                            </a>
                        </div>
                        <div class="flex items-center space-x-2">
                            <Icon class="text-blue-900" icon="mdi:email" />
                            <a href="mail:khanshifaul@gmail.com">
                                <p>khanshifaul@gmail.com</p>
                            </a>
                        </div>
                        <div class="flex items-center space-x-2">
                            <Icon class="text-blue-900" icon="mdi:world-wide-web" />
                            <a href="https://khanshifaul.github.io">
                                <p>khanshifaul.github.io</p>
                            </a>
                        </div>
                        <div class="flex items-center space-x-2">
                            <Icon class="text-blue-900" icon="mdi:linkedin" />
                            <a href="https://linkedin.com/khan-shifaul">
                                <p>linkedin.com/khan-shifaul</p>
                            </a>
                        </div>
                        <div class="flex items-center space-x-2">
                            <Icon class="text-blue-900" icon="mdi:github" />
                            <a href="https://github.com/khanshifaul">
                                <p>github.com/khanshifaul</p>
                            </a>
                        </div>
                        <div class="flex items-center space-x-2">
                            <Icon class="text-blue-900" icon="mdi:map" />
                            <a href="https://goo.gl/maps/KgqDpmTwboA2fLns7">
                                <p>Aguniatair (Khanpara), Sonatala - 5826, Bogura, Bangladesh</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mx-auto">
                    <img src="@/assets/images/profile-img.jpg" class="rounded-full border-2 border-slate-200 h-48">
                </div>
            </div>
            <div class="grid grid-cols-[3fr_2fr] justify-start gap-5 px-8">
                <div>
                    <!-- Experience -->
                    <div class="py-1">
                        <h2 class="text-xl uppercase font-bold mb-1 border-b-2 border-slate-300 text-blue-900">Experience
                        </h2>
                        <div class="group">
                            <div class="py-1 border-b-2 border-dashed">
                                <h3 class="font-semibold">Web Developer | Virtual Assistant <span
                                        class="text-sm font-normal">(Freelance)</span> </h3>
                                <h4 class="font-bold text-blue-600">Upwork</h4>
                                <div class="flex items-end space-x-2">
                                    <div class="flex items-center space-x-1">
                                        <Icon class="text-blue-400" icon="mdi:calendar-range" />
                                        <h5 class="text-sm font-normal">Nov 2018 - Present</h5>
                                    </div>
                                    <div class="flex items-center space-x-1 font-normal">
                                        <Icon class="text-blue-400" icon="mdi:map-marker" />
                                        <h5 class="text-sm font-normal">Remote</h5>
                                    </div>
                                </div>
                                <ul class="list-inside list-disc text-sm">
                                    <li>Maintained a 100% client satisfaction rate by consistently delivering
                                        high-quality work and exceeding client expectations.</li>
                                    <li>
                                        Successfully managed multiple client projects simultaneously, ensuring on-time
                                        delivery and meeting all project milestones.
                                    </li>
                                    <li>
                                        Implemented efficient communication systems and tools, resulting in improved
                                        collaboration and streamlined workflows between clients and team members.</li>
                                </ul>
                            </div>
                            <div class="py-1 border-b-2 border-dashed">
                                <h3 class="font-semibold">Computer Operator <span
                                        class="text-sm font-normal">(Full-time)</span> </h3>
                                <h4 class="font-bold text-blue-600">Progress Education Family</h4>
                                <div class="flex items-end space-x-2">
                                    <div class="flex items-center space-x-1">
                                        <Icon class="text-blue-400" icon="mdi:calendar-range" />
                                        <h5 class="text-sm font-normal">Jan 2022 - July 2022</h5>
                                    </div>
                                    <div class="flex items-center space-x-1 font-normal">
                                        <Icon class="text-blue-400" icon="mdi:map-marker" />
                                        <h5 class="text-sm font-normal">Jaleshwaritola, Bogura</h5>
                                    </div>
                                </div>
                                <ul class="list-inside list-disc text-sm">
                                    <li>Maintained a 100% client satisfaction rate by consistently delivering
                                        high-quality work and exceeding client expectations.</li>
                                    <li>
                                        Implemented efficient communication systems and tools, resulting in improved
                                        collaboration and streamlined workflows between clients and team members.</li>
                                </ul>
                            </div>

                            <div class="py-1">
                                <h3 class="font-semibold">Computer Operator <span
                                        class="text-sm font-normal">(Part-time)</span> </h3>
                                <h4 class="font-bold text-blue-600">Hasan Computer & Digital Studio</h4>
                                <div class="flex items-end space-x-2">
                                    <div class="flex items-center space-x-1">
                                        <Icon class="text-blue-400" icon="mdi:calendar-range" />
                                        <h5 class="text-sm font-normal">Feb 2017 - May 2021</h5>
                                    </div>
                                    <div class="flex items-center space-x-1 font-normal">
                                        <Icon class="text-blue-400" icon="mdi:map-marker" />
                                        <h5 class="text-sm font-normal">Sonatola, Bogura</h5>
                                    </div>
                                </div>
                                <ul class="list-inside list-disc text-sm">
                                    <li>Maintained a 100% client satisfaction rate by consistently delivering
                                        high-quality work and exceeding client expectations.</li>
                                    <li>
                                        Implemented efficient communication systems and tools, resulting in improved
                                        collaboration and streamlined workflows between clients and team members.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Project -->
                    <div class="py-1" id="project">
                        <h3 class="text-xl uppercase font-bold mb-1 border-b-2 border-slate-300 text-blue-900">Project</h3>
                        <div>
                            <ul>
                                <li>
                                    <h5 class="font-semibold flex items-center space-x-2">
                                        <Icon class="text-blue-400" icon="mdi:arrow-right-bold-hexagon-outline" />
                                        <span>
                                            Front-End Website Development
                                        </span>
                                    </h5>
                                    <a href="https://github.com/khanshifaul/NRKF_Digital_School"
                                        class="flex items-center space-x-2 pl-6">
                                        <Icon class="text-blue-400" icon="mdi:github" />
                                        <p>github.com/khanshifaul/NRKF_Digital_School</p>
                                    </a>
                                </li>
                                <li>
                                    <h5 class="font-semibold flex items-center space-x-2">
                                        <Icon class="text-blue-400" icon="mdi:arrow-right-bold-hexagon-outline" />
                                        <span>
                                            Static Website Development
                                        </span>
                                    </h5>
                                    <a href="https://github.com/khanshifaul/Salfi_Rishad-Portfolio"
                                        class="flex items-center space-x-2 pl-6">
                                        <Icon class="text-blue-400" icon="mdi:github" />
                                        <p>github.com/khanshifaul/Salfi_Rishad-Portfolio</p>
                                    </a>
                                </li>
                                <li>
                                    <h5 class="font-semibold flex items-center space-x-2">
                                        <Icon class="text-blue-400" icon="mdi:arrow-right-bold-hexagon-outline" />
                                        <span>
                                            Front-End Website Development
                                        </span>
                                    </h5>
                                    <a href="https://github.com/khanshifaul/SHOTODOL_HEALTH"
                                        class="flex items-center space-x-2 pl-6">
                                        <Icon class="text-blue-400" icon="mdi:github" />
                                        <p>github.com/khanshifaul/SHOTODOL_HEALTH</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <!-- Education -->
                    <div class="py-1">
                        <h2 class="text-xl uppercase font-bold mb-1 border-b-2 border-slate-300 text-blue-900">Education
                        </h2>
                        <div class="py-1 border-b-2 border-dashed">
                            <div class="flex items-center space-x-1">
                                <Icon class="text-blue-400" icon="mdi:calendar-range" />
                                <h5 class="text-sm">2023</h5>
                            </div>
                            <h3 class="font-bold">Diploma in Computer Engineering</h3>
                            <h4 class="font-semibold">Computer Technology</h4>
                            <h4 class="font-normal">Bangladesh Technical Education Board</h4>
                            <h4 class="font-normal">GPA 3.75 out of 4.0</h4>
                        </div>
                        <!-- <div class="py-1 border-b-2 border-dashed">
                            <div class="flex items-center space-x-1">
                                <Icon class="text-blue-400" icon="mdi:calendar-range" />
                                <h5 class="text-sm">2018</h5>
                            </div>
                            <h3 class="font-bold">Higher Secondary School Certificate</h3>
                            <h4 class="font-semibold">Science Group</h4>
                            <h4 class="font-normal">Rajshahi Education Board</h4>
                            <h4 class="font-normal">Drop-out</h4>
                        </div> -->
                        <div class="py-1">
                            <div class="flex items-center space-x-1">
                                <Icon class="text-blue-400" icon="mdi:calendar-range" />
                                <h5 class="text-sm">2015</h5>
                            </div>
                            <h3 class="font-bold">Secondary School Certificate</h3>
                            <h4 class="font-semibold">Science Group</h4>
                            <h4 class="font-normal">Rajshahi Education Board</h4>
                            <h4 class="font-normal">GPA 5.0 out of 5.0</h4>
                        </div>
                    </div>
                    <!-- Skill -->
                    <div class="py-1" id="skill">
                        <h3 class="text-xl uppercase font-bold mb-1 border-b-2 border-slate-300 text-blue-900">Skill</h3>
                        <div class="text-sm">
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Microsoft Office Applications
                            </p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Adobe Photoshop</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Adobe Illustrator</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Adobe XD</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Figma</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Web Research</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Web Scraping</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Lead Generation</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">HTML5</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">CSS3</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Tailwind CSS</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Bootstrap CSS</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Javascript</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Typescript</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">React.js</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Next.js</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Vue.js</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Nuxt.js</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Prisma ORM</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Mongodb</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Python</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Django</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">REST API</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">API Integretion</p>
                            <p class="inline-block bg-blue-200 rounded-full px-2 py-1 m-0.5">Linux</p>
                        </div>
                    </div>
                    <!-- Language -->
                    <div class="py-1" id="language">
                        <h3 class="text-xl uppercase font-bold mb-1 border-b-2 border-slate-300 text-blue-900">Language</h3>
                        <div class="py-1">
                            <div class="flex justify-between">
                                <p class="font-semibold">English</p>
                                <p class="xp">Fluent</p>
                            </div>
                        </div>
                        <div class="py-1">
                            <div class="flex justify-between">
                                <p class="font-semibold">Hindi</p>
                                <p class="xp">Conversational</p>
                            </div>
                        </div>
                        <div class="py-1">
                            <div class="flex justify-between">
                                <p class="font-semibold">Bengali</p>
                                <p class="xp">Native</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.a4 {
    background-color: #ffffff;
    height: 297mm;
    width: 210mm;
    max-height: 297mm;
    max-width: 210mm;
    margin: auto;
    padding: 0;
}
</style>