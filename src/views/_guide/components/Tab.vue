<script setup lang="ts">
import uuTabs from '@/components/uu-components/UuTabs.vue'
import uuTab from '@/components/uu-components/UuTab.vue'
import Prism from '@/components/uu-components/Prism.vue'

const onSelected = (index: number) => {
  console.log(index)
}

const tabItem = ['탭1', '탭2', '탭3', '탭4', '예시 탭입니다', '예시 탭입니다']
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
      <!-- Tab -->
      <uu-tabs
        one-size-tab 
        link-tab
        @selected="onSelected"
      >
        <uu-tab title="Tab1">
          탭 내용1
        </uu-tab>
        <uu-tab
          title="Tab2"
          active
        >
          탭 내용2
        </uu-tab>
      </uu-tabs>
      <!-- // Tab -->
      <Prism html>
        {{ `
        <!-- Tab -->
        <uu-tabs @selected="onSelected">
          <uu-tab title="Tab1">
            탭 내용1
          </uu-tab>
          <uu-tab
            title="Tab2"
            active
          >
            탭 내용2
          </uu-tab>
        </uu-tabs>
        <!-- // Tab -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Main Tab
      </h4>
      <!-- Tab -->
      <uu-tabs
        class="main_tab"
        @selected="onSelected"
      >
        <uu-tab
          title="편도"
          active
        />
        <uu-tab
          title="왕복"
        />
      </uu-tabs>
      <!-- // Tab -->
      <Prism html>
        {{ `
        <!-- Tab -->
        <uu-tabs
          class="main_tab"
          @selected="onSelected"
        >
          <uu-tab
            title="편도"
            active
          />
          <uu-tab
            title="왕복"
          />
        </uu-tabs>
        <!-- // Tab -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        1depth Tab
      </h4>
      <!-- Tab -->
      <uu-tabs
        :tab-item="tabItem"
        :own-size-tab="true"
        @selected="onSelected"
      >
        <uu-tab title="Tab1">
          탭 내용1
        </uu-tab>
        <uu-tab
          title="Tab2"
          active
        >
          탭 내용2
        </uu-tab>
        <uu-tab
          title="Tab3"
          disabled
        >
          탭 내용3
        </uu-tab>
        <uu-tab title="예시 탭입니다">
          탭 내용4
        </uu-tab>
        <uu-tab title="예시 탭입니다">
          탭 내용5
        </uu-tab>
        <uu-tab title="예시 탭입니다">
          탭 내용6
        </uu-tab>
        <uu-tab title="예시 탭입니다">
          탭 내용7
        </uu-tab>
      </uu-tabs>
      <!-- // Tab -->
      <Prism html>
        {{ `
        <!-- Tab -->
        <uu-tabs
          :tab-item="tabItem"
          :own-size-tab="true"
          @selected="onSelected"
        >
          <uu-tab title="Tab1">
            탭 내용1
          </uu-tab>
          <uu-tab
            title="Tab2"
            active
          >
            탭 내용2
          </uu-tab>
          <uu-tab
            title="Tab3"
            disabled
          >
            탭 내용3
          </uu-tab>
          <uu-tab title="예시 탭입니다">
            탭 내용4
          </uu-tab>
          <uu-tab title="예시 탭입니다">
            탭 내용5
          </uu-tab>
          <uu-tab title="예시 탭입니다">
            탭 내용6
          </uu-tab>
          <uu-tab title="예시 탭입니다">
            탭 내용7
          </uu-tab>
        </uu-tabs>
        <!-- // Tab -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        2depth Tab
      </h4>
      <!-- Tab -->
      <uu-tabs
        class="depth2_tab"
        @selected="onSelected"
      >
        <uu-tab
          title="최신순"
          active
        />
        <uu-tab
          title="가나다순"
        />
        <uu-tab
          title="가나다순"
        />
      </uu-tabs>
      <!-- // Tab -->
      <Prism html>
        {{ `
        <!-- Tab -->
        <uu-tabs
          class="depth2_tab"
          @selected="onSelected"
        >
          <uu-tab
            title="최신순"
            active
          />
          <uu-tab
            title="가나다순"
          />
          <uu-tab
            title="가나다순"
          />
        </uu-tabs>
        <!-- // Tab -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Segment tab
      </h4>
      <!-- Tab -->
      <uu-tabs
        class="segment_tab"
        @selected="onSelected"
      >
        <uu-tab
          title="1주일"
          active
        />
        <uu-tab
          title="1개월"
        />
        <uu-tab
          title="3개월"
        />
      </uu-tabs>
      <!-- // Tab -->
      <Prism html>
        {{ `
        <!-- Tab -->
        <uu-tabs
          class="segment_tab"
          @selected="onSelected"
        >
          <uu-tab
            title="1주일"
            active
          />
          <uu-tab
            title="1개월"
          />
          <uu-tab
            title="3개월"
          />
        </uu-tabs>
        <!-- // Tab -->
        ` }}
      </Prism>
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
      {{
        `
      import uuTabs  from '@/components/uu-components/Tabs.vue'
      import uuTab  from '@/components/uu-components/Tab.vue'
      `
      }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Props
    </h3>
    <Prism script>
      {{
        `
        // uuTabs
        const props = defineProps({
          ownSizeTab : {
            type: Boolean,
            default: false
          }
        })
        // uuTab
        const props = defineProps({
          title: {
            type: String,
            default: 'TabName'
          },
          active: {
            type: Boolean,
            default: false
          },
          disabled: {
            type: Boolean,
            default: false
          }
        })
      `
      }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Script
    </h3>
    <Prism
      script
      show
    >
      {{
        `
        // Tab Event
        const onSelected = (index: number) => {
          console.log(index)
        }
      `
      }}
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
      <!-- Tab -->
      <uu-tabs>
        <uu-tab title="Tab1"> 탭 내용1 </uu-tab>
        <uu-tab title="Tab2"> 탭 내용2 </uu-tab>
        <uu-tab title="Tab3"> 탭 내용3 </uu-tab>
      </uu-tabs>
      <!-- // Tab -->
      ` }}
    </Prism>
  </section>
</template>
