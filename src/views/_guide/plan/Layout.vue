<script setup lang="ts">
import uuButton from '@/components/uu-components/UuButton.vue'
import Prism from '@/components/uu-components/Prism.vue'
// import router from '@/router';

const routerUrl = (path: string) => {
  window.open(path)
}

</script>
<template>
  <section class="section">
    <h3 class="section-title">
      Examples
    </h3>
    <article class="article">
      <h4 class="section-subtitle">
        MainPage
      </h4>
      <uu-button
        label="메인 페이지"
        btn-color="primary"
        @click="routerUrl('/layout/mainPage')"
      />
      <Prism html>
        {{ `
            <script setup lang="ts">
            import mainHeader from '@/components/layout/mainHeader.vue'

            </script>
            <template>
              <!-- header -->
              <mainHeader />
              <!-- // header -->
              <!-- main: 각 카테고리명 class 추가 후 사용 -->
              <main class="main">
                <!-- 중첩 클래스 유형
                  .container: 기본 좌우 패딩 2rem
                  .bottom_nav: bottom_nav 높이만큼 하단 여백 추가
                  .bottom_btns: btn-area 높이만큼 하단 여백 추가 (fixed일때 사용)
                  .no_padding: padding 0 
                -->
                <div class="container no_padding">
                  Main
                </div>
                <!-- bottom nav: client or artist -->
                <!-- // bottom nav -->
              </main>
              <!-- // main -->
              <!-- footer -->
              <!-- // footer -->
            </template>
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        SubPage
      </h4>
      <uu-button
        label="서브 페이지"
        btn-color="primary"
        @click="routerUrl('/layout/SubPage')"
      />
      <Prism html>
        {{ `
          <script setup lang="ts">
          import subHeader from '@/components/layout/subHeader.vue'
          import uuButton from '@/components/uu-components/uuButton.vue'

          const onSubHeader = (value: string) => {
            console.log(value)
          }
          </script>
          <template>
            <!-- header -->
            <subHeader
              title="Sub Page"
              @click="onSubHeader"
            />
            <!-- // header -->
            <!-- main: 각 카테고리명 class 추가 후 사용 -->
            <main class="main">
              <!-- 중첩 클래스 유형
                .container: 기본 좌우 패딩 2rem
                .bottom_nav: bottom_nav 높이만큼 하단 여백 추가
                .bottom_btns: btn-area 높이만큼 하단 여백 추가 (fixed일때 사용)
                .no_padding: padding 0 
              -->
              <div class="container bottom_btns">
                <div>
                  SubPage
                </div>
                <div class="btn-area btn-bottom btn-fixed">
                  <uu-button
                    btn-color="primary"
                    btn-style="line"
                    size="lg"
                    label="취소"
                  />
                  <uu-button
                    btn-color="primary"
                    size="lg"
                    label="결제"
                  />
                </div>
              </div>
            </main>
            <!-- // main -->
          </template>
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Popup
      </h4>
      <uu-button
        label="Popup"
        btn-color="primary"
        @click="routerUrl('/layout/Popup')"
      />
      <Prism html>
        {{ `
          <script setup lang="ts">
          import { ref } from 'vue'
          import uuButton from '@/components/uu-components/uuButton.vue'
          import uuModal  from '@/components/uu-components/uuModal.vue'

          const modal01 = ref(true)

          </script>
          <template>
            <!-- Modal -->
            <uu-modal
              ref="modal01Ref"
              v-model="modal01"
              type="alert"
              title="Header"
            >
              <template #modal-body>
                Slot Modal Body
              </template>
              <template #modal-footer="btnActions">
                <uu-button
                  btn-color="primary"
                  btn-style="line"
                  size="lg"
                  label="취소"
                  @click="btnActions.close"
                />
                <uu-button
                  btn-color="primary"
                  size="lg"
                  label="확인"
                  @click="btnActions.ok"
                />
              </template>
            </uu-modal>
            <!-- // Modal -->
          </template>
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Full Popup
      </h4>
      <uu-button
        label="FullPopup"
        btn-color="primary"
        @click="routerUrl('/layout/fullPopup')"
      />
      <Prism html>
        {{ `
          <script setup lang="ts">
          import { ref } from 'vue'
          import uuButton from '@/components/uu-components/uuButton.vue'
          import uuModal  from '@/components/uu-components/uuModal.vue'

          const modal01 = ref(true)

          </script>
          <template>
            <!-- Modal -->
            <uu-modal
              ref="modal01Ref"
              v-model="modal01"
              type="full"
              title="Header"
            >
              <template #modal-body>
                Slot Modal Body
              </template>
              <template #modal-footer="btnActions">
                <uu-button
                  btn-color="primary"
                  size="lg"
                  label="확인"
                  @click="btnActions.ok"
                />
              </template>
            </uu-modal>
            <!-- // Modal -->
          </template>
      ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Bottom Sheet
      </h4>
      <uu-button
        label="BottomSheet"
        btn-color="primary"
        @click="routerUrl('/layout/bottomSheet')"
      />
      <Prism html>
        {{ `
          <script setup lang="ts">
          import { ref } from 'vue'
          import uuButton from '@/components/uu-components/uuButton.vue'
          import uuModal  from '@/components/uu-components/uuModal.vue'

          const modal01 = ref(true)

          </script>
          <template>
            <!-- Modal -->
            <uu-modal
              ref="modal01Ref"
              v-model="modal01"
              type="bottom"
              title="Header"
            >
              <template #modal-body>
                Slot Modal Body
              </template>
              <template #modal-footer="btnActions">
                <uu-button
                  btn-color="secondary"
                  size="lg"
                  label="취소"
                  @click="btnActions.close"
                />
                <uu-button
                  btn-color="primary"
                  size="lg"
                  label="확인"
                  @click="btnActions.ok"
                />
              </template>
            </uu-modal>
            <!-- // Modal -->
          </template>
      ` }}
      </Prism>
    </article>
  </section>
</template>
<style lang="scss" scoped>
.btn {
  ~ .btn {
    margin-left: 0.8rem;
  }
}
</style>
