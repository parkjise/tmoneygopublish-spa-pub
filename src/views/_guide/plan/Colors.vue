<script setup lang="ts">
import { onMounted } from 'vue'
import Prism from 'prismjs'
onMounted(() => {
  Prism.highlightAll()
})
</script>
<template>
  <div class="content-body">
    <section class="section">
      <h3 class="section-subtitle">
        Primary color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_primary1">
            <dt>$primary1</dt>
            <dd>#DAE2FF</dd>
          </dl>
          <dl class="bg_primary2">
            <dt>$primary2</dt>
            <dd>#91A8FF</dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Sub color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_secondary1">
            <dt>$secondary1</dt>
            <dd>#9AA1AA</dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Grayscale color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_white">
            <dt class="text_black">
              $white
            </dt>
            <dd class="text_black">
              #FFFFFF
            </dd>
          </dl>
          <dl class="bg_grayeee">
            <dt class="text_black">
              $grayeee
            </dt>
            <dd class="text_black">
              #EEEEEE
            </dd>
          </dl>
          <dl class="bg_grayddd">
            <dt class="text_black">
              $grayddd
            </dt>
            <dd class="text_black">
              #DDDDDD
            </dd>
          </dl>
          <dl class="bg_grayccc">
            <dt class="text_black">
              $grayccc
            </dt>
            <dd class="text_black">
              #CCCCCC
            </dd>
          </dl>
          <dl class="bg_graybbb">
            <dt>$graybbb</dt>
            <dd>#BBBBBB</dd>
          </dl>
          <dl class="bg_grayaaa">
            <dt>$grayaaa</dt>
            <dd>#AAAAAA</dd>
          </dl>
          <dl class="bg_gray999">
            <dt>$gray999</dt>
            <dd>#999999</dd>
          </dl>
          <dl class="bg_gray666">
            <dt>$gray666</dt>
            <dd>#666666</dd>
          </dl>
          <dl class="bg_gray555">
            <dt>$gray555</dt>
            <dd>#555555</dd>
          </dl>
          <dl class="bg_gray333">
            <dt>$gray333</dt>
            <dd>#333333</dd>
          </dl>
          <dl class="bg_gray111">
            <dt>$gray111</dt>
            <dd>#333333</dd>
          </dl>
          <dl class="bg_black">
            <dt>$black</dt>
            <dd>#000000</dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Background color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_bg1">
            <dt class="text_black">
              $bg1
            </dt>
            <dd class="text_black">
              #F3F5FC
            </dd>
          </dl>
          <dl class="bg_bg2">
            <dt class="text_black">
              $bg2
            </dt>
            <dd class="text_black">
              #F0F2F9
            </dd>
          </dl>
          <dl class="bg_bg3">
            <dt class="text_black">
              $bg3
            </dt>
            <dd class="text_black">
              #F2F5F8
            </dd>
          </dl>
          <dl class="bg_bg4">
            <dt class="text_black">
              $bg4
            </dt>
            <dd class="text_black">
              #E7E9EE
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Line color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_line1">
            <dt class="text_black">
              $line1
            </dt>
            <dd class="text_black">
              #dddddd
            </dd>
          </dl>
          <dl class="bg_line2">
            <dt class="text_black">
              $line2
            </dt>
            <dd class="text_black">
              #eeeeee
            </dd>
          </dl>
          <dl class="bg_line3">
            <dt class="text_black">
              $line3
            </dt>
            <dd class="text_black">
              #d3d3d3
            </dd>
          </dl>
          <dl class="bg_line4">
            <dt class="text_black">
              $line4
            </dt>
            <dd class="text_black">
              #f6f6f6
            </dd>
          </dl>
          <dl class="bg_line5">
            <dt>$line5</dt>
            <dd>#cccccc</dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Text color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_text1">
            <dt>$text1</dt>
            <dd>#000000</dd>
          </dl>
          <dl class="bg_text2">
            <dt>$text2</dt>
            <dd>#111111</dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Active color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_active1">
            <dt>$active1</dt>
            <dd>#2E4295</dd>
          </dl>
          <dl class="bg_active2">
            <dt>$active2</dt>
            <dd>#6B737D</dd>
          </dl>
          <dl class="bg_active3">
            <dt class="text_black">
              $active3
            </dt>
            <dd class="text_black">
              #EAEEFF
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Disabled color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_disabled1">
            <dt class="text_black">
              $disabled1
            </dt>
            <dd class="text_black">
              #F5F5F5
            </dd>
          </dl>
          <dl class="bg_disabled2">
            <dt class="text_black">
              $disabled2
            </dt>
            <dd class="text_black">
              #D2D8E0
            </dd>
          </dl>
          <dl class="bg_disabled3">
            <dt class="text_black">
              $disabled3
            </dt>
            <dd class="text_black">
              #CCCCCC
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Error color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_error1">
            <dt>$error1</dt>
            <dd>#E7302F</dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="section">
      <h3 class="section-subtitle">
        Dimed color
      </h3>
      <div class="color-exam">
        <div class="color-area">
          <dl class="bg_dim1">
            <dt>$dim1</dt>
            <dd>rgba(0, 0, 0, 0.7)</dd>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped></style>
