<template>
    <section id="contact" class="dark:text-white p-8">
        <div class="container mx-auto">
            <h3 class="border-b dark:border-white font-Broadway-bt text-3xl pb-2">Drop me a Message</h3>
            <div class="grid mx-auto md:w-[50%] py-4 md:px-4">
                <div class="form-floating py-1">
                    <input type="text" id="floatingName" class="form-input px-4 py-3 rounded"
                        aria-required="true" placeholder="John Doe" />
                    <span class="text-danger"></span>
                </div>
                <div class="form-floating py-1">
                    <input type="email" class="form-input px-4 py-3 rounded" aria-required="true"
                        placeholder="name@example.com" />
                    <span class="text-danger"></span>
                </div>
                <div class="form-floating py-1">
                    <input type="text" id="floatingSubject" class="form-input px-4 py-3 rounded" aria-required="true"
                        placeholder="Subject" />
                    <span class="text-danger"></span>
                </div>
                <div class="form-floating py-1">
                    <textarea id="floatingTextarea" class="form-textarea px-4 py-3 rounded bg-blue-200" aria-required="true"
                        placeholder="Leave your message here" style="height: 350px"></textarea>
                    <span class="text-danger"></span>
                </div>
                <div class="py-1 flex justify-end">
                    <button @click="" id="message-submit" type="submit" class="font-bold p-2 rounded w-fit justify-end bg-primary text-white">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

