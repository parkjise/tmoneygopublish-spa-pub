<script setup lang="ts">
import { ref } from 'vue'
import uuModal  from '@/components/uu-components/UuModal.vue'
import uuButton from '@/components/uu-components/UuButton.vue'
import uuFieldset  from '@/components/uu-components/UuFieldset.vue'
import uuRadio  from '@/components/uu-components/UuRadio.vue'
import Prism  from '@/components/uu-components/Prism.vue'

const modal01Ref = ref() // Ref
const modal01 = ref<boolean>(false) // v-model
const modal02Ref = ref() // Ref
const modal02 = ref<boolean>(false) // v-model
const modal03Ref = ref() // Ref
const modal03 = ref<boolean>(false) // v-model
const modal04Ref = ref() // Ref
const modal04 = ref<boolean>(false) // v-model
const modal05Ref = ref() // Ref
const modal05 = ref<boolean>(false) // v-model
const modal06Ref = ref() // Ref
const modal06 = ref<boolean>(false) // v-model

const radio01 = ref('checked') // Default checked

function changeEvent(value : string | boolean | []){
  console.log(value)
}
</script>
<template>
  <section class="section">
    <h3 class="section-title">
      Examples
    </h3>
    <article class="article">
      <h4 class="section-subtitle">
        Alert
      </h4>
      <!-- Modal Activator -->
      <uu-button
        label="Alert"
        btn-color="primary"
        :aria-haspopup="true"
        aria-controls="modal01"
        @click="modal01Ref.showModal($event)"
      />
      <!-- // Modal Activator -->
      <!-- Modal -->
      <uu-modal
        ref="modal01Ref"
        v-model="modal01"
        type="confirm"
      >
        <template #modal_header>
          Alert
        </template>
        <template #modal_body>
          Alert 내용
        </template>
        <template #modal_footer="btnActions">
          <uu-button
            btn-color="primary"
            label="확인"
            @click="btnActions.ok"
          />
        </template>
      </uu-modal>
      <!-- // Modal -->
      <Prism
        html
      >
        {{ `
          <!-- Modal Activator -->
          <uu-button
            label="Alert"
            btn-color="primary"
            :aria-haspopup="true"
            aria-controls="modal01"
            @click="modal01Ref.showModal($event)"
          />
          <!-- // Modal Activator -->
          <!-- Modal -->
          <uu-modal
            ref="modal01Ref"
            v-model="modal01"
            type="confirm"
          >
            <template #modal_header>
              Alert
            </template>
            <template #modal_body>
              Alert 내용
            </template>
            <template #modal_footer="btnActions">
              <uu-button
                btn-color="primary"
                label="확인"
                @click="btnActions.ok"
              />
            </template>
          </uu-modal>
          <!-- // Modal -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Confirm
      </h4>
      <!-- Modal Activator -->
      <uu-button
        label="Confirm"
        btn-color="primary"
        :aria-haspopup="true"
        aria-controls="modal02"
        @click="modal02Ref.showModal($event)"
      />
      <!-- // Modal Activator -->
      <!-- Modal -->
      <uu-modal
        ref="modal02Ref"
        v-model="modal02"
        type="confirm"
      >
        <template #modal_header>
          Confirm
        </template>
        <template #modal_body>
          <div class="modal_des">
            모달 추가 설명
          </div>
          Confirm 내용
        </template>
        <template #modal_footer="btnActions">
          <uu-button
            btn-color="primary"
            btn-style="line"
            label="아니요"
            @click="btnActions.close"
          />
          <uu-button
            btn-color="primary"
            label="네"
            @click="btnActions.ok"
          />
        </template>
      </uu-modal>
      <!-- // Modal -->
      <Prism
        html
      >
        {{ `
        <!-- Modal Activator -->
          <uu-button
            label="Confirm"
            btn-color="primary"
            :aria-haspopup="true"
            aria-controls="modal02"
            @click="modal02Ref.showModal($event)"
          />
          <!-- // Modal Activator -->
          <!-- Modal -->
          <uu-modal
            ref="modal02Ref"
            v-model="modal02"
            type="confirm"
          >
            <template #modal_header>
              Confirm
            </template>
            <template #modal_body>
              <div class="modal_des">모달 추가 설명</div>
              Confirm 내용
            </template>
            <template #modal_footer="btnActions">
              <uu-button
                btn-color="primary"
                btn-style="line"
                label="아니요"
                @click="btnActions.close"
              />
              <uu-button
                btn-color="primary"
                label="네"
                @click="btnActions.ok"
              />
            </template>
          </uu-modal>
          <!-- // Modal -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        Basic Popup
      </h4>
      <!-- Modal Activator -->
      <uu-button
        label="Basic Popup"
        btn-color="primary"
        :aria-haspopup="true"
        aria-controls="modal03"
        @click="modal03Ref.showModal($event)"
      />
      <!-- // Modal Activator -->
      <!-- Modal -->
      <uu-modal
        ref="modal03Ref"
        v-model="modal03"
        type="confirm"
      >
        <template #modal_header>
          Basic Popup
        </template>
        <template #modal_body>
          <div class="modal_des">
            모달 추가 설명
          </div>
          Confirm 내용
        </template>
        <template #modal_footer="btnActions">
          <uu-button
            btn-color="primary"
            btn-style="line"
            label="아니요"
            @click="btnActions.close"
          />
          <uu-button
            btn-color="primary"
            label="네"
            @click="btnActions.ok"
          />
        </template>
      </uu-modal>
      <!-- // Modal -->
      <Prism
        html
      >
        {{ `
        <!-- Modal Activator -->
          <uu-button
            label="Basic Popup"
            btn-color="primary"
            :aria-haspopup="true"
            aria-controls="modal03"
            @click="modal03Ref.showModal($event)"
          />
          <!-- // Modal Activator -->
          <!-- Modal -->
          <uu-modal
            ref="modal03Ref"
            v-model="modal03"
            type="confirm"
          >
            <template #modal_header>
              Basic Popup
            </template>
            <template #modal_body>
              <div class="modal_des">모달 추가 설명</div>
              Confirm 내용
            </template>
            <template #modal_footer="btnActions">
              <uu-button
                btn-color="primary"
                btn-style="line"
                label="아니요"
                @click="btnActions.close"
              />
              <uu-button
                btn-color="primary"
                label="네"
                @click="btnActions.ok"
              />
            </template>
          </uu-modal>
          <!-- // Modal -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        bottomsheet
      </h4>
      <!-- Modal Activator -->
      <uu-button
        label="Bottomsheet Modal!"
        btn-color="primary"
        :aria-haspopup="true"
        aria-controls="modal04"
        @click="modal04Ref.showModal($event)"
      />
      <!-- // Modal Activator -->
      <!-- Modal -->
      <uu-modal
        ref="modal04Ref"
        v-model="modal04"
        type="bottom"
        hide-overlay
      >
        <template #modal_footer="btnActions">
          <uu-button
            btn-color="primary"
            size="lg"
            label="확인"
            @click="btnActions.ok"
          />
        </template>
      </uu-modal>
      <!-- // Modal -->
      <Prism
        html
      >
        {{ `
          <!-- Modal Activator -->
          <uu-button
            label="Bottomsheet Modal!"
            btn-color="primary"
            :aria-haspopup="true"
            aria-controls="modal04"
            @click="modal04Ref.showModal($event)"
          />
          <!-- // Modal Activator -->
          <!-- Modal -->
          <uu-modal
            ref="modal04Ref"
            v-model="modal04"
            type="bottom"
            hide-overlay
          >
            <template #modal_footer="btnActions">
              <uu-button
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
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        bottomsheet && hideHeader
      </h4>
      <!-- Modal Activator -->
      <uu-button
        label="Bottomsheet Modal!"
        btn-color="primary"
        :aria-haspopup="true"
        aria-controls="modal05"
        @click="modal05Ref.showModal($event)"
      />
      <!-- // Modal Activator -->
      <!-- Modal -->
      <uu-modal
        ref="modal05Ref"
        v-model="modal05"
        type="bottom"
        hide-header
        hide-overlay
      >
        <template #modal_footer="btnActions">
          <uu-button
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
      <Prism
        html
      >
        {{ `
          <!-- Modal Activator -->
          <uu-button
            label="Bottomsheet Modal!"
            btn-color="primary"
            :aria-haspopup="true"
            aria-controls="modal05"
            @click="modal05Ref.showModal($event)"
          />
          <!-- // Modal Activator -->
          <!-- Modal -->
          <uu-modal
            ref="modal05Ref"
            v-model="modal05"
            type="bottom"
            hide-overlay
          >
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
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        bottomsheet(dropdown)
      </h4>
      <!-- Modal Activator -->
      <uu-button
        label="dropdown Modal!"
        btn-color="primary"
        :aria-haspopup="true"
        aria-controls="modal06"
        @click="modal06Ref.showModal($event)"
      />
      <!-- // Modal Activator -->
      <!-- Modal -->
      <uu-modal
        ref="modal06Ref"
        v-model="modal06"
        type="bottom"
        hide-footer
      >
        <template #modal_body>
          <form>
            <uu-fieldset
              legend="옵션 선택"
              hide-legend
            >
              <uu-radio
                v-model="radio01"
                value="option1"
                dropdown-radio
                @change="changeEvent"
              >
                <template #label>
                  <strong class="option_tit">티머니카드</strong>
                  <span class="option_txt num">1234-****-****-5678</span>
                </template>
              </uu-radio>
              <uu-radio
                v-model="radio01"
                value="option2"
                dropdown-radio
                @change="changeEvent"
              >
                <template #label>
                  <strong class="option_tit">티머니카드</strong>
                  <span class="option_txt">1234-****-****-5678</span>
                </template>
              </uu-radio>
              <uu-radio
                v-model="radio01"
                value="option3"
                dropdown-radio
                @change="changeEvent"
              >
                <template #label>
                  <strong class="option_tit">옵션 3</strong>
                  <span class="option_txt">옵션 3 내용</span>
                </template>
              </uu-radio>
              <uu-radio
                v-model="radio01"
                value="option4"
                dropdown-radio
                @change="changeEvent"
              >
                <strong class="option_tit">옵션 4</strong>
                <span class="option_txt">옵션 4 내용</span>
              </uu-radio>
            </uu-fieldset>
          </form>
        </template>
        <template #modal_footer="btnActions">
          <uu-button
            btn-color="secondary"
            size="lg"
            @click="btnActions.close"
          >
            <span>필터 초기화</span>
          </uu-button>
          <uu-button
            btn-color="primary"
            size="lg"
            label="확인"
            @click="btnActions.ok"
          />
        </template>
      </uu-modal>
      <!-- // Modal -->
      <Prism
        html
      >
        {{ `
          <!-- Modal Activator -->
          <uu-button
            label="Checkbox Modal!"
            btn-color="primary"
            :aria-haspopup="true"
            aria-controls="modal06"
            @click="modal06Ref.showModal($event)"
          />
          <!-- // Modal Activator -->
          <!-- Modal -->
          <uu-modal
            ref="modal06Ref"
            v-model="modal06"
            type="bottom"
            hide-header
            hide-footer
          >
            <template #modal-body>
              <uu-checkbox
                v-for="(item, index) in 4"
                :key="index"
                label="최신순"
                value="checked"
                :model-value="true"
                checkline
                @change="changeEvent"
              />
            </template>
            <template #modal-footer="btnActions">
              <uu-button
                btn-color="secondary"
                size="lg"
                @click="btnActions.close"
              >
                <span>필터 초기화</span>
              </uu-button>
              <uu-button
                btn-color="primary"
                size="lg"
                label="확인"
                @click="btnActions.ok"
              />
            </template>
          </uu-modal>
          <!-- // Modal -->
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
      {{ `
      import uuModal  from '@/components/uu-components/Modal.vue'
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
        /**
         * Modal Type<br>
         * type='alert' | 'confirm' | 'bottom' | 'full' | 'notification'
         */
        type: {
          type: String as PropType<modalType>,
          default: 'alert',
          require: true
        },
        /**
         * Modal Show, Hide <br>
         * v-model="modelName"
         */
        modelValue: {
          type: Boolean,
          default: false
        },
        /**
         * Hidden Header
         */
        hideHeader: {
          type: Boolean,
          default: false
        },
        /**
         * Hidden Footer
         */
        hideFooter: {
          type: Boolean,
          default: false
        },
        /**
         * Header Title Text
         */
        title: {
          type: String,
          default: 'Modal title',
        },
        hideOverlay: {
          type: Boolean,
          default: false
        }
      })
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      Emit
    </h3>
    <Prism script>
      {{ `
      const emit = defineEmits([
      'update:modelValue',
      'close',
      'open',
      'ok'
      ])
      ` }}
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
      {{ `
        const modal01 = ref(false) // v-model Name
        const modal01Ref = ref(false) // Ref Name
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
      <!-- Modal Activator -->
      <uu-button
        label="Slot Modal!"
        btn-color="primary"
        :aria-haspopup="true"
        aria-controls="modal01"
        @click="modal01Ref.showModal($event)"
      />
      <!-- // Modal Activator -->
      <!-- Modal -->
      <uu-modal
        ref="modal01Ref"
        v-model="modal01"
        type="confirm"
      >
        <template #modal-header>
          Slot Modal Header
        </template>
        <template #modal-body>
          Slot Modal Body
        </template>
      </uu-modal>
      <!-- // Modal -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>