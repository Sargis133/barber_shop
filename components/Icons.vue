<template>
  <template v-if="name === 'logout'">
    <svg viewBox="0 0 24 24" width="1rem" height="1rem" :class="styles" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M21 12L13 12" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9" stroke="#323232"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
            d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
            stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>
  </template>

  <template v-else-if="name === 'arrow-right'">
    <svg viewBox="0 0 24 24" width="1rem" height="1rem" :class="styles" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
            d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
        ></path>
      </g>
    </svg>
  </template>

  <template v-else-if="name === 'scissor'">
    <svg height="1rem" width="1rem" :class="styles" id="_x32_" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512" fill="#000000">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path class="st0"
                d="M143.155,241.403c-5.379,0.154-11.094-0.285-14.076-2.271c-2.983-1.979-6.578-7.847-10.202-12.571 c-16.96-22.075-47.036-31.308-74.281-20.702c-33.079,12.87-49.447,50.13-36.57,83.201c12.877,33.079,50.122,49.454,83.201,36.577 c16.354-6.369,28.612-18.703,35.281-33.546c1.122-2.508,1.742-3.916,3.644-5.783c1.909-1.868,5.79-3.053,8.899-3.694 c18.257-3.77,33.594-3.902,46.429-1.958l2.258-6.104c0.725-2.028,5.15-14.473,11.686-32.785 C184.268,241.919,162.443,240.846,143.155,241.403z M80.511,298.125c-17.874,6.954-38.012-1.895-44.974-19.776 c-6.954-17.88,1.896-38.012,19.769-44.973c17.881-6.968,38.012,1.889,44.981,19.762C107.241,271.018,98.391,291.157,80.511,298.125 z"></path>
          <path class="st0"
                d="M507.47,169.171c-3.777-9.714-15.386-10.788-44.151-3.31c-15.581,4.049-87.598,25.706-150.424,44.73 c-6.195,32.221-11.79,61.139-15.066,78.03c63.886-30.674,161.908-77.884,179.342-87.145 C503.429,187.525,511.261,178.884,507.47,169.171z"></path>
          <path class="st0"
                d="M303.649,392.949c-5.073-3.114-11.282-6.076-13.568-8.836c-2.278-2.767-3.31-8.404-3.714-13.77 c-1.993-26.298-7.526-57.056-6.836-69.473c0,0,44.179-227.416,48.618-256.808c4.438-29.4,2.16-40.827-7.888-43.58 c-10.055-2.745-17.832,5.938-28.974,33.497c-11.135,27.567-88.824,245.812-88.824,245.812s51.175,20.298,43.336,98.929 c-0.314,3.15-1.087,7.136-2.746,9.226c-1.658,2.098-2.989,2.857-5.365,4.237c-14.069,8.167-25.058,21.651-29.685,38.583 c-9.365,34.235,10.801,69.578,45.029,78.944c34.242,9.358,69.585-10.808,78.943-45.043 C339.688,436.466,327.368,407.513,303.649,392.949z M243.749,280.28c-6.481-1.77-10.299-8.452-8.522-14.933 c1.77-6.48,8.452-10.299,14.933-8.529c6.481,1.777,10.292,8.466,8.522,14.94C256.912,278.238,250.223,282.049,243.749,280.28z M303.495,456.876c-5.059,18.507-24.166,29.406-42.674,24.347c-18.508-5.059-29.406-24.166-24.347-42.674 c5.059-18.508,24.173-29.406,42.674-24.34C297.656,419.262,308.554,438.375,303.495,456.876z"></path>
        </g>
      </g>
    </svg>
  </template>

  <template v-else-if="name === 'mustache'">
    <svg id="_x32_" xmlns="http://www.w3.org/2000/svg" :class="styles" width="1rem" height="1rem"
         viewBox="0 0 512 512" fill="#000000">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path class="st0"
                d="M510.304,239.426c0,0-15.641,30.016-44.969,27.875c-29.359-2.141-60.641-70.766-119.344-92.219 c-58.688-21.453-90,12.859-90,12.859s-31.297-34.313-89.969-12.859c-58.688,21.453-89.984,90.078-119.328,92.219 s-45-27.875-45-27.875s-9.781,25.734,17.625,62.188c27.375,36.453,103.656,51.781,152.578,36.453 c54.75-17.156,84.094-60.031,84.094-60.031s27.391,45.031,84.125,60.031c49.453,13.094,125.219,0,152.594-36.453 S510.304,239.426,510.304,239.426z"></path>
        </g>
      </g>
    </svg>
  </template>

  <template v-else-if="name === 'double-arrow-top'">
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" :class="styles" width="1rem" height="1rem" fill="none"
         stroke="#000000">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <polyline points="16 48 32 32 48 48"></polyline>
        <polyline points="16 32 32 16 48 32"></polyline>
      </g>
    </svg>
  </template>

  <template v-else-if="name === 'arrow-bottom'">
    <svg viewBox="0 0 24 24" fill="#000000" :class="styles" width="1rem" height="1rem"
         xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
            d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
        ></path>
      </g>
    </svg>
  </template>

  <template v-else-if="name === 'phone'">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" :class="styles">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
            d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>
  </template>

  <template v-else-if="name === 'email'">
    <svg viewBox="0 -4 32 32" fill="#000000" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem"
         :class="styles">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2.54433 5.16792C3.0468 4.46923 3.86451 4 4.8 4H19.2C20.1355 4 20.9532 4.46923 21.4557 5.16792C21.7993 5.64567 22 6.235 22 6.86667V17.1333C22 18.682 20.7804 20 19.2 20H4.8C3.21964 20 2 18.682 2 17.1333V6.86667C2 6.23499 2.20074 5.64567 2.54433 5.16792ZM4.9327 6L11.2598 12.9647C11.6566 13.4015 12.3434 13.4015 12.7402 12.9647L19.0673 6H4.9327ZM20 7.94766L14.2205 14.3096C13.0301 15.6199 10.9699 15.6199 9.77948 14.3096L4 7.94766V17.1333C4 17.6466 4.39214 18 4.8 18H19.2C19.6079 18 20 17.6466 20 17.1333V7.94766Z"
        ></path>
      </g>
    </svg>
  </template>

  <template v-else-if="name === 'location'">
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="styles" stroke="#000000" width="1rem" height="1rem">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
            d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>
  </template>

  <span v-else></span>

</template>

<script setup lang="ts">

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  iconStyles: {
    type: String
  }
});


const name = computed<string>(() => props.iconName || "")
const styles = computed<string>(() => props.iconStyles || "")

</script>

<style scoped>

</style>