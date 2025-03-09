<template>
  <div class="min-h-[100vh]">
    <PageTopBanner :title="pageData.title || ''" :image="pageData.coverImage || ''"/>

    <div class="container">
      <div class="mt-6 pb-6 pt-4 px-6 w-[85%] mx-auto flex max-sm:flex-col justify-between items-baseline shadow-[0_0_4px_1px_black] bg-black bg-opacity-95">
        <div class="flex flex-col w-[35%] max-sm:w-[95%]">
          <p class="text-gray-400 font-teko text-3xl text-center">Send Message</p>
          <UiUiInput v-model="messageData.name" placeholder="Name" class="mt-3" :styles="messageDataError.name ? 'error' : 'default'"/>
          <UiUiInput v-model="messageData.email" placeholder="Email" class="mt-3" :styles="messageDataError.email ? 'error' : 'default'"/>
          <UiUiTextarea v-model="messageData.text" placeholder="Text" class="mt-3" :styles="messageDataError.text ? 'error' : 'default'"/>
          <UiUiButton @click="onSendMessage" type="button" styles="whiteBottomLine" class="mt-5">
            Send
          </UiUiButton>
        </div>

        <div class="flex flex-col w-[55%] max-sm:w-[95%] max-sm:mt-6">
          <p class="text-gray-400 font-teko text-3xl text-center">Contacts</p>

          <div class="mt-4 grid grid-cols-2 max-md:grid-cols-1 max-md:self-center gap-y-4 gap-x-6">
            <p class="flex items-center w-full gap-x-1">
              <Icons icon-name="phone" icon-styles="fill-white w-[20px] h-[20px]"/>
              <span class="text-white">+(87)-485-485-2</span>
            </p>

            <p class="flex items-center w-full gap-x-1">
              <Icons icon-name="phone" icon-styles="fill-white w-[20px] h-[20px]"/>
              <span class="text-white">+(87)-444-465-2</span>
            </p>

            <p class="flex items-center w-full gap-x-1">
              <Icons icon-name="email" icon-styles="fill-white w-[25px] h-[25px]"/>
              <span class="text-white">mybarber@gmail.com</span>
            </p>

            <p class="flex items-center w-full gap-x-1">
              <Icons icon-name="location" icon-styles="fill-white w-[25px] h-[25px]"/>
              <span class="text-white">Glendel Hills 2</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import PageTopBanner from "~/components/client/pageTopBanner/PageTopBanner.vue";
import type {I_ContactPageData} from "~/models/store/pages/interfaces";

definePageMeta({
  layout: "client-default"
})


const { $store } = useNuxtApp()

$store.dispatch("A_SET_ALL_PAGES_DATA")

const pageData = computed<I_ContactPageData>(() => $store.getters.getContactPageData || {})

const messageData = ref({
  name: '',
  email: '',
  text: ''
})

const messageDataError = ref({
  name: false,
  email: false,
  text: false
})

const onSendMessage = () => {
  for(let key in messageData.value) {
    messageDataError.value[key] = messageData.value[key] === '';
  }

  if(Object.values(messageDataError.value).filter(item => item).length === 0) {
    for(let key in messageData.value) {
      messageData.value[key] = ''
    }
  } else {
    console.log('Fill all')
  }
}

</script>

<style scoped>

</style>