<script setup lang="ts">
import { ref } from 'vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuButtonScroll from '@/components/uu-components/UuButtonScroll.vue'
import uuIc from '@/components/uu-components/UuIc.vue'
import Prism from '@/components/uu-components/Prism.vue'

// Btn Scroll
const btnArray = ref([
  { label: '카테고리 1', href: '#', active: true },
  { label: '카테고리 2', href: '#', active: false },
  { label: '카테고리 3', href: '#', active: false },
  { label: '카테고리 4', href: '#', active: false },
  { label: '카테고리 5', href: '#', active: false },
  { label: '카테고리 6', href: '#', active: false },
])

const onActive = (activeIndex: number) => {
  console.log(activeIndex)
}

</script>
<template>
  <section class="section">
    <h3 class="section-title">
      Examples
    </h3>
    <article class="article">
      <h4 class="section-subtitle">
        Default
      </h4>
      <!-- Button -->
      <uu-button
        label="텍스트영역"
        btn-color="primary"
        @click="console.log('click')"
      />
      <!-- // Button -->
      <Prism html>
        {{ `
        <!-- Button -->
        <uu-button
          label="텍스트영역"
          btn-color="primary"
          @click="console.log('click')"
        />
        <!-- // Button -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Btn Color ('none' | 'primary' | 'secondary')
      </h4>
      <!-- Button none -->
      <uu-button
        label="Button"
        btn-color="none"
      />
      <!-- // Button none -->
      <!-- Button primary -->
      <uu-button
        label="Button"
        btn-color="primary"
      />
      <!-- // Button primary -->
      <!-- Button secondary -->
      <uu-button
        label="Button"
        btn-color="secondary"
      />
      <!-- // Button secondary -->
      <Prism html>
        {{ `
        <!-- Button none -->
        <uu-button
          label="Button"
          btn-color="none"
        />
        <!-- // Button none -->
        <!-- Button primary -->
        <uu-button
          label="Button"
          btn-color="primary"
        />
        <!-- // Button primary -->
        <!-- Button black -->
        <uu-button
          label="Button"
          btn-color="black"
        />
        <!-- // Button black -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Btn Style ('none' | 'line' | 'text')
      </h4>
      <!-- Button none -->
      <uu-button
        label="Button"
        btn-style="none"
      />
      <!-- // Button none -->
      <!-- // Button round -->
      <!-- Button line -->
      <uu-button
        label="Button"
        btn-style="line"
      />
      <!-- // Button line -->
      <!-- Button Text -->
      <uu-button
        label="Button"
        btn-style="text"
      />
      <!-- // Button Text -->
      <Prism html>
        {{ `
        <!-- Button none -->
        <uu-button
          label="Button"
          btn-style="none"
        />
        <!-- // Button none -->
        <!-- // Button round -->
        <!-- Button line -->
        <uu-button
          label="Button"
          btn-style="line"
        />
        <!-- // Button line -->
        <!-- Button Text -->
        <uu-button
          label="Button"
          btn-style="text"
        />
        <!-- // Button Text -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Size
      </h4>
      <!-- Button xs -->
      <uu-button
        label="Button"
        btn-color="primary"
        size="xs"
      />
      <!-- // Button xs -->
      <!-- Button sm -->
      <uu-button
        label="Button"
        btn-color="primary"
        size="sm"
      />
      <!-- // Button sm -->
      <!-- Button md -->
      <uu-button
        label="Button"
        btn-color="primary"
        size="md"
      />
      <!-- // Button md -->
      <!-- Button lg -->
      <uu-button
        label="Button"
        btn-color="primary"
        size="lg"
      />
      <!-- // Button lg -->
      <!-- Button xl -->
      <uu-button
        label="Button"
        btn-color="primary"
        size="xl"
      />
      <!-- // Button xl -->
      <Prism html>
        {{ `
          <!-- Button xs -->
          <uu-button
            label="Button"
            btn-color="primary"
            size="xs"
          />
          <!-- // Button xs -->
          <!-- Button sm -->
          <uu-button
            label="Button"
            btn-color="primary"
            size="sm"
          />
          <!-- // Button sm -->
          <!-- Button md -->
          <uu-button
            label="Button"
            btn-color="primary"
            size="md"
          />
          <!-- // Button md -->
          <!-- Button lg -->
          <uu-button
            label="Button"
            btn-color="primary"
            size="lg"
          />
          <!-- // Button lg -->
          <!-- Button xl -->
          <uu-button
            label="Button"
            btn-color="primary"
            size="xl"
          />
          <!-- // Button xl -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Style + Size
      </h4>
      <!-- Button Xl + line -->
      <uu-button
        label="Button"
        btn-style="line"
        size="xl"
      />
      <!-- // Button Xl + line -->
      <Prism html>
        {{ `
          <!-- Button Xl + line -->
          <uu-button
            label="Button"
            btn-style="line"
            size="xl"
          />
          <!-- // Button Xl + line -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Disabled
      </h4>
      <!-- Button Primary -->
      <uu-button
        label="Button"
        btn-color="primary"
        disabled
      />
      <!-- // Button Primary -->
      <!-- Button Secondary -->
      <uu-button
        label="Button"
        btn-color="secondary"
        disabled
      />
      <!-- // Button Secondary -->
      <!-- Button line -->
      <uu-button
        label="Button"
        btn-style="line"
        disabled
      />
      <!-- // Button line -->
      <!-- Button Xl + line -->
      <uu-button
        label="Button"
        btn-style="line"
        size="xl"
        disabled
      />
      <!-- // Button Xl + line -->
      <Prism html>
        {{ `
          <!-- Button Primary -->
          <uu-button
            label="Button"
            btn-color="primary"
            disabled
          />
          <!-- // Button Primary -->
          <!-- Button Secondary -->
          <uu-button
            label="Button"
            btn-color="secondary"
            disabled
          />
          <!-- // Button Secondary -->
          <!-- Button line -->
          <uu-button
            label="Button"
            btn-style="line"
            disabled
          />
          <!-- // Button line -->
          <!-- Button Xl + line -->
          <uu-button
            label="Button"
            btn-style="line"
            size="xl"
            disabled
          />
          <!-- // Button Xl + line -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Router Link
      </h4>
      <!-- Button Link -->
      <uu-button
        label="Button"
        btn-color="primary"
        href="/"
        target="_blank"
      />
      <!-- // Button Link -->
      <Prism html>
        {{ `
        <!-- Button Link -->
        <uu-button
          label="Button"
          btn-color="primary"
          href="/"
          target="_blank"
        />
        <!-- // Button Link -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Btn area
      </h4>
      <!-- btn-area -->
      <div class="btn_area">
        <uu-button
          size="xl"
          label="line"
          btn-style="line"
          @click="console.log('line')"
        />
        <uu-button
          size="xl"
          label="primary"
          btn-color="primary"
          @click="console.log('primary')"
        />
      </div>
      <!-- // btn-area -->
      <br>
      <Prism html>
        {{ `
        <!-- btn-area -->
        <div class="btn-area">
          <uu-button
            size="lg"
            label="secondary"
            btn-color="secondary"
            @click="console.log('secondary')"
          />
          <uu-button
            size="lg"
            label="primary"
            btn-color="primary"
            @click="console.log('primary')"
          />
        </div>
        <!-- // btn-area -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Btn Scroll
      </h4>
      <!-- btn-scroll tab -->
      <uu-button-scroll
        type="tab"
        :array="btnArray"
        as="a"
        @click="onActive"
      /> 
      <!-- // btn-scroll tab -->
      <!-- btn-scroll filter -->
      <uu-button-scroll
        type="filter"
        :array="btnArray"
        as="button"
        size="sm"
        @click="onActive"
      />
      <!-- // btn-scroll filter -->
      <Prism script>
        {{ `
          // Btn Scroll
          const btnArray = ref([
            { name: '카테고리 1', url: '#', active: true },
            { name: '카테고리 2', url: '#', active: false },
            { name: '카테고리 3', url: '#', active: false },
            { name: '카테고리 4', url: '#', active: false },
            { name: '카테고리 5', url: '#', active: false },
            { name: '카테고리 6', url: '#', active: false },
          ])
          const onActive = (item: arrayType, activeIndex: number) => {
            console.log(item, activeIndex)
          }
        ` }}
      </Prism>
      <Prism html>
        {{ `
        <!-- btn-scroll tab -->
        <uu-button-scroll
          type="tab"
          :array="btnArray"
          as="a"
          @click="onActive"
        />
        <!-- // btn-scroll tab -->

        <!-- btn-scroll filter -->
        <uu-button-scroll
          type="filter"
          :array="btnArray"
          as="button"
          size="sm"
          @click="onActive"
        >
          <template #prepend>
            <uu-button
              size="sm"
              btn-color="secondary"
              btn-style="none"
              class="btn-round btn-line btn-ic"
            >
              <uu-ic
                name="reset"
                size="24"
                color="gray"
              />
            </uu-button>
          </template>
        </uu-button-scroll>
        <!-- // btn-scroll filter -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Calender
      </h4>
      <!-- 값 선택 전 -->
      <uu-button
        calender
        @click="console.log('click')"
      >
        <template #ic_name>
          <uuIc v-bind="{name:'calender',size:'20'}" />
        </template>
        <template #label_first>
          <span>select date</span>
        </template>
      </uu-button>
      <!-- 값 선택 후 -->
      <uu-button
        calender
        @click="console.log('click')"
      >
        <template #ic_name>
          <uuIc v-bind="{name:'calender',size:'20'}" />
        </template>
        <template #label_first>
          <span class="filled">07.10(수) 12:00</span>
        </template>
        <template #label_second>
          <span class="filled label_second">07.11(목) 14:00</span>
        </template>
      </uu-button>
      <!-- disable -->
      <uu-button
        calender
        disabled
        @click="console.log('click')"
      >
        <template #ic_name>
          <uuIc v-bind="{name:'calender_disabled',size:'20'}" />
        </template>
        <template #label_first>
          <span class="filled">07.10(수) 12:00</span>
        </template>
        <template #label_second>
          <span class="filled label_second">07.11(목) 14:00</span>
        </template>
      </uu-button>
    </article>
  </section>
  <section class="section">
    <h3 class="section-title">
      Components
    </h3>
    <Prism
      script
      show
    >
      {{ `
      import uuButton from '@/components/uu-components/uuButton.vue'
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Props
    </h3>
    <Prism script>
      {{ `
      const props = defineProps({
        id: {
          type: String,
          default: null
        },
        class: {
          type: String,
          default: null
        },
        label: {
          type: String,
          default: ''
        },
        /**
         * color = 'none' | 'primary' | 'secondary' | 'white'
         */
        btnColor: {
          type: String as PropType<ButtonColorType>,
          default: 'primary'
        },
        /**
         * style = 'none' | 'default' | 'round' | 'line'
         */
        btnStyle: {
          type: String as PropType<ButtonStyleType>,
          default: 'default'
        },
        /**
         * size = 'tiny' | 'xs' | 'sm' | 'md' | 'lg'
         */
        size: {
          type: String as PropType<ButtonSizeType>,
          default: 'md'
        },
        disabled: {
          type: Boolean,
          default: false
        },
      })
          ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Basic Markup
    </h3>
    <Prism
      html
      show
    >
      {{ `
      <!-- Button -->
      <uu-button label="Button" btn-style="primary" />
      <!-- // Button -->
      ` }}
    </Prism>
  </section>
</template>
<style lang="scss" scoped>
.btn {
  ~ .btn {
    margin-left: 0.8rem;
  }
}
.calender_btn {
  ~ .calender_btn {
    margin-top: 1rem;
    margin-left: 0;
  }
}
</style>