<template>
  <div class="p-3 shadow border border-gray-400 rounded my-0 mx-auto w-[400px]">

    <Loader v-if="isShowLoader"/>

    <p class="text-center text-xl">Login</p>

    <div class="flex flex-col w-[80%] mx-auto my-auto">
      <div class="mt-6 w-full">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <UiUiInput @keyup.enter="onSubmitLogin" v-model="loginData.email" type="email"
                   :styles="!loginDataErrors.email ? 'default' : 'error'"
                   placeholder="john.doe@company.com"/>
      </div>
      <div class="mt-3 mb-5 w-full">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <UiUiInput @keyup.enter="onSubmitLogin" v-model="loginData.password" type="password"
                   :styles="!loginDataErrors.password ? 'default' : 'error'"
                   placeholder="•••••••••"/>
      </div>
      <UiUiButton @click="onSubmitLogin" type="submit">
        Submit
      </UiUiButton>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "admin-auth",
  middleware: "admin-auth"
})

const { $store } = useNuxtApp()

const loginData = ref({
  email: "",
  password: ""
})

const loginDataErrors = ref({
  email: false,
  password: false
})

let isShowLoader = ref<boolean>(false)

const onSubmitLogin = (): void => {
  loginDataErrors.value.email = !loginData.value.email
  loginDataErrors.value.password = !loginData.value.password

  if (Object.values(loginDataErrors.value).filter(item => !!item).length === 0) {
    isShowLoader.value = true;

    setTimeout(() => {
      const checkLoginData = $store.dispatch("A_ADMIN_LOGIN", loginData.value)

      checkLoginData.then(res => {
        isShowLoader.value = false

        res ? navigateTo("/admin") : alert("User not found")
      })
    }, 2000)

  }
}

</script>

<style scoped>

</style>