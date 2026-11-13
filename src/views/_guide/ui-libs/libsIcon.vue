<script setup lang="ts">
import Prism from 'prismjs'
import { onMounted } from 'vue'

onMounted(() => {
  Prism.highlightAll()
})
// import uuAccordion from '@/components/uu-components/uu-components/Accordion.vue'
</script>
<template>
  <div class="content-body">
    <div class="container">
      <div class="row">
        <div class="col-12 view-exam ">
          <h3 class="sr_only">
            ic
          </h3>
          <br>
          <section class="view-section">
            <h4>아이콘 파일 저장</h4>
            <p>ic_<span class="fs-20 fw-medium fc-blue">size</span>_<span class="fs-20 fw-medium fc-blue">name</span>_<span class="fs-14 fw-medium fc-blue">color</span>_<span class="fs-14 fw-medium fc-blue">status</span>.png</p>
            <p>ex) ic_16_arrow.png (color와 status 옵션)</p>
            <br>
            <p>* size: 숫자로 표기. ex) ic_16_arrow.png</p>
            <p>* name: 영문이름, 영문이름+숫자로 표기. ex) ic_16_arrow1.png</p>
            <p>* color: 블랙컬러는 사용하지않음, 이외의 색상만 표기. 색상이름은 끝에 1,2,3으로 나감. ex) ic_16_arrow_red1.png</p>
            <p>* status: active 또는 disabled 의 상태를 나타내는 아이콘에만 사용. ex) ex) ic_16_arrow_active.png</p>
            <p>* 확장자는 png 사용</p>
          </section>
        </div>
        
        <div class="col-12 view-code">
          <br>
          <h4>아이콘 추가방법</h4>
          <pre class="language-css">
            <code>
              // _ic.scss 추가
              $ics: (
                size &apos;name&apos; &apos;color&apos; &apos;status(active or disabled)&apos;,
              )
              * 위 순서로 값을 준다. 꼭! 띄어쓰기 해야함.

              $ics: (
                16 &apos;arrow&apos;,
                16 &apos;arrow&apos; &apos;active&apos;,
                16 &apos;arrow&apos; &apos;red1&apos; &apos;active&apos;,
              )
            </code>
          </pre>
        </div>
        <div class="col-12 view-code">
          <br>
          <h4>아이콘 사용방법</h4>
          <pre class="language-markup">
            <code>
// markup

&lt;i class=&quot;ic ic_16-arrow&quot; /&gt;
&lt;i class=&quot;ic ic_16-arrow-active&quot; /&gt;
&lt;i class=&quot;ic ic_24-arrow-red1-active&quot; /&gt;

* 방향은 .right/down/left 를 추가해준다.
&lt;i class=&quot;ic ic_16-arrow right&quot; /&gt;
            </code>
          </pre>
          <pre class="language-css">
            <code>
// background

@include ic(size, 'name(name_color_status)'); // 아이콘 영역이 그려지고 안에 아이콘이 들어감. (inline-flex, width: size, height: size)
@include bgic(size, 'name(name_color_status)'); // background 아이콘만 들어감

ex)
.test1 {
  @include ic(16, 'arrow');
}
.test2 {
  width: 3rem;
  height: 3rem;
  @include bgic(16, 'arrow_red1_active');
}
            </code>
          </pre>
        </div>
      </div>
      <div class="row">
        <div class="col-12 view-exam">
          <ul class="ics-list">
            <!-- size 16 -->
            <li>
              <h4>Size 16 ( ic ic_16-* )</h4>
              <div class="ics">
                <dl class="ic_wrap">
                  <dt>
                    <span>check</span>
                  </dt>
                  <dd>
                    <i class="ic ic_16-check" />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 view-exam">
          <ul class="ics-list">
            <!-- size 24 -->
            <li>
              <h4>Size 24 ( ic ic_24-* )</h4>
              <div class="ics">
                <dl class="ic_wrap">
                  <dt>
                    <span>clear</span>
                  </dt>
                  <dd>
                    <i class="ic ic_24-clear" />
                  </dd>
                </dl>
                <dl class="ic_wrap">
                  <dt>
                    <span>arrow</span>
                  </dt>
                  <dd>
                    <i class="ic ic_24-arrow" />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12 view-exam">
          <ul class="ics-list">
            <!-- size 40 -->
            <li>
              <h4>Size 40 ( ic ic_40-* )</h4>
              <div class="ics">
                <dl class="ic_wrap">
                  <dt>
                    <span>back</span>
                  </dt>
                  <dd>
                    <i class="ic ic_40-back" />
                  </dd>
                </dl>
                <dl class="ic_wrap">
                  <dt>
                    <span>search</span>
                  </dt>
                  <dd>
                    <i class="ic ic_40-search" />
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.overview-title {
  font-size: 2rem;
}
.ics-list {
  li {
    margin-top: 2rem;
  }
}
.ics {
  display: flex;
  flex-wrap: wrap;
  // @media(min-width: 415px) {
  //   flex-wrap: inherit;
  // }
  dl {
    display: flex;
    flex-flow: column;
    // flex: 0 1 10rem;
    min-width: 10rem;
    min-height: 10rem;
    margin: 0 .8rem 1rem 0;
    border: 1px solid #ccc;
    dt {
      order: 1;
      text-align: center;
      border-top: 1px solid #ccc;
      padding-top: .3rem;
    }
    dd {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 8.8rem;
      text-align: center;
      &.bg {
        background: #333;
      }
      span {
        box-sizing: content-box;
        border: 1px dashed #ffa8b5;
        +span {margin-left:-1px}
      }
    }
  }
}
</style>
