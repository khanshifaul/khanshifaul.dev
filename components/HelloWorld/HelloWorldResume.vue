<template>
    <section class="bg-primary text-dark-text p-8">
        <div class="container mx-auto font-bold grid grid-cols-[auto_1fr] gap-4">
            <img class="img-fluid" width="150" height="150" src="@/assets/icons/resume.png" alt="Resume Icon"
                title="Resume Icon" />
            <div>
                <h3 class="border-b font-Broadway-bt text-3xl">My Resume</h3>
                <div class="grid grid-flow-col auto-cols-min gap-4 py-4">
                    <NuxtLink :to="{ path: '/resume' }" target="blank" class="rounded-lg w-fit p-2 bg-accent">Preview
                    </NuxtLink>
                    <button type="button" onclick="window.open('/resume').print()"
                        class="border border-accent rounded-lg w-fit p-2">Download</button>
                </div>
            </div>
        </div>
    </section>
</template>
