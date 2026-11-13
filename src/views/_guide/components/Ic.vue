<script setup lang="ts">
import uuIc from '@/components/uu-components/UuIc.vue'
import Prism  from '@/components/uu-components/Prism.vue'

</script>
<template>
  <section class="section">
    <h3 class="section-title">
      Examples
    </h3>
    <article class="article">
      <h4 class="section-subtitle">
        default
      </h4>
      <!-- ic -->
      <uu-ic
        name="close"
        size="28"
      />
      <!-- // ic -->
      <Prism
        html
      >
        {{ `
          <!-- ic -->
          <uu-ic
            name="close"
            size="24"
          />
          <!-- // ic -->
        ` }}
      </Prism>
    </article>
    <article class="article">
      <h4 class="section-subtitle">
        SCSS
      </h4>
      <button
        type="button"
        class="btn ic_16_arrow_active"
      />
      <Prism
        html
      >
        {{ `
          <button
            type="button"
            class="btn ic_16_arrow_active"
          />
        ` }}
      </Prism>
      <Prism
        css
      >
        {{ `
          .btn-ic_exam {
            width: 3.4rem;
            height: 3.4rem;
            @include ic_bg(28, 'close');
          }
        ` }}
      </Prism>
    </article>
  </section>
  <section class="section">
    <h3 class="section-title">
      Guide
    </h3>
    <Prism
      css
      show
    >
      {{ `
        /* 1. 파일저장 */
        경로: @/assets/images/ic/ic_{사이즈}_{이름}_{컬러}_{상태}.png
        ex) @/assets/images/ic/ic_16_arrow_gray.png

        /* 2. _ic.scss 추가 (띄어쓰기 유의) */
        $ics: (
          사이즈 '이름' '컬러' '상태(active or disabled)'
        );
        ex) $ics: (16 'arrow' 'gray' 'disabled');

        /* 3. scss에 불러와서 사용하기 */
        @include ic(사이즈, '이름_컬러_상태', '확장자(기본 png)');
        ex) @include ic(16, 'arrow_gray'); or @include ic_bg(16, 'arrow_gray');

        /* 4. markup으로 사용하기 (접근성 스크린리더 읽어야할 때 aria-label="내용", 읽지않아도 될 때 aria-hidden="true" 꼭 명시)  */
        <i class="ic ic_{사이즈}_{이름}_{컬러}_{상태} {회전방향}" aria-label="이름" />
        ex) <i class="ic ic_16_arrow_active" aria-hidden="true" />, <i class="ic ic_16_arrow_gray right" aria-hidden="true" />

        /* 5. 컴포넌트로 사용하기
        <uu-ic name="이름" size="사이즈" color="컬러" status="상태" direction="right|down|left" src="이미지경로" update="true|false"></uu-ic>
        ex) <uu-ic name="close" size="24"></uu-ic>
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      ics
    </h3>
    <div class="ic_exam">
      <h4 class="size">
        12px
      </h4>
      <dl class="ic_list">
        <div>
          <dt>12_arrow_gray</dt>
          <dd>
            <!-- ic -->
            <i
              class="ic ic_12_arrow_gray"
              aria-hidden="true"
            />
          <!-- // ic -->
          </dd>
        </div>
        <div>
          <dt>12_arrow_gray2</dt>
          <dd>
            <!-- ic -->
            <i
              class="ic ic_12_arrow_gray2"
              aria-hidden="true"
            />
            <!-- // ic -->
          </dd>
        </div>
      </dl>
      <h4 class="size">
        16px
      </h4>
      <dl class="ic_list">
        <div>
          <dt>16_arrow</dt>
          <dd>
            <!-- ic -->
            <i
              class="ic ic_16_arrow"
              aria-hidden="true"
            />
            <!-- // ic -->
          </dd>
        </div>
        <div>
          <dt>16_arrow_active</dt>
          <dd>
            <!-- ic -->
            <i
              class="ic ic_16_arrow_active"
              aria-hidden="true"
            />
            <!-- // ic -->
          </dd>
        </div>
        <div>
          <dt>16_arrow_disabled</dt>
          <dd>
            <!-- ic -->
            <i
              class="ic ic_16_arrow_disabled"
              aria-hidden="true"
            />
            <!-- // ic -->
          </dd>
        </div>
        <div>
          <dt>16_clear_gray</dt>
          <dd>
            <!-- ic -->
            <i
              class="ic ic_16_clear_gray"
              aria-hidden="true"
            />
            <!-- // ic -->
          </dd>
        </div>
      </dl>
      <h4 class="size">
        24px
      </h4>
      <dl class="ic_list">
        <div class="bg">
          <dt>24_menu_white</dt>
          <dd>
            <!-- ic -->
            <i
              class="ic ic_24_menu_white"
              aria-hidden="true"
            />
            <!-- // ic -->
          </dd>
        </div>
      </dl>
      <h4 class="size">
        28px
      </h4>
      <dl class="ic_list">
        <div>
          <dt>28_close</dt>
          <dd>
            <!-- ic -->
            <i
              class="ic ic_28_close"
              aria-hidden="true"
            />
          <!-- // ic -->
          </dd>
        </div>
        <div class="bg">
          <dt>28_close_white</dt>
          <dd>
            <!-- ic -->
            <i
              class="ic ic_28_close_white"
              aria-hidden="true"
            />
          <!-- // ic -->
          </dd>
        </div>
      </dl>
    </div>
  </section>
  <section class="section">
    <h3 class="section-title">
      Props
    </h3>
    <Prism
      script
    >
      {{ `
        const props = defineProps({
        /**
         * ic Size (px, rem단위 생략)
         */
        size: {
          type: [String, Number],
          default: '16',
          required: true
        },
        /**
         * ic Name
         */
        name: {
          type: String,
          default: '',
          required: true
        },
        /**
         * ic Color (white, gray..) <br>
         * default: black
         */
        color: {
          type: String,
          default: ''
        },
        /**
         * ic Status (active/disabled)
         */
        status: {
          type: String,
          default: ''
        },
        /**
         * ic Rotate <br>
         * icDirectionType = 'right' | 'left' | 'down'<br>
         * default: up
         */
        direction: {
          type: String as PropType<icDirectionType>,
          default: ''
        },
        src: {
          type: String,
          default: ''
        },
        update: {
          type: Boolean,
          default: false
        }
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
        <!-- ic -->
        <uu-ic name="close" size="24"></uu-ic>
        <!-- // ic -->
      ` }}
    </Prism>
  </section>
</template>

<style>
</style>