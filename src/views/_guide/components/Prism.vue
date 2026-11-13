<script setup lang="ts">
import Prism  from '@/components/uu-components/Prism.vue'

</script>
<template>
  <ul class="list-dot">
    <li>
      <a
        href="https://prismjs.com/index.html"
        title="prismjs 페이지 이동"
      >Prismjs plugins: https://prismjs.com/index.html</a>
    </li>
    <li>import Prism  from '@/components/uu-components/Prism.vue</li>
    <li><strong>[[ , ]]는 { { , } } 중괄호 2개</strong>로 바꿔서 사용합니다.</li>
    <li><strong>''는 &#x60;&#x60;로 바꿔서</strong> 사용합니다.</li>
  </ul>
  <section class="section">
    <h3 class="section-title">
      html
    </h3>
    <Prism html>
      {{ ` 
      <Prism html>
        [[ ' 
        <div>내용</div>
        ' ]]
      </Prism>
    ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      css
    </h3>
    <Prism css>
      {{ `
      .css {
        display: block;
      }
      ` }}
    </Prism>
  </section>
  <section class="section">
    <h3 class="section-title">
      script
    </h3>
    <Prism script>
      {{ `
      const script = () => {
        console.log(script)
      }
      ` }}
    </Prism>
  </section>
</template>
<style lang="scss">
</style>