<script setup lang="ts">
// import Prism from 'prismjs'
const comboboxOptions = [ '화면 타이틀 1','화면 타이틀 2화면 타이틀 2화면 타이틀 2화면 타이틀 2화면 타이틀 2','화면 타이틀 3','화면 타이틀 4','화면 타이틀 5' ]
const comboboxSelector = comboboxOptions[0]
</script>
<template>
  <div class="content-body">
    <div class="container">
      <h3>Page Header</h3>
      <br>
      <div class="row">
        <div class="col-12">
          <div class="viex-exam">
            <div style="position: relative; width: 375px; height: 56px; border: 1px solid #eee; box-sizing: content-box;">
              <Header
                back
                text-title="화면 타이틀"
                text-btn1="첨부"
                text-btn2="저장"
                search-btn
              />
            </div>
            <div style="position: relative; width: 375px; height: 56px; border: 1px solid #eee; box-sizing: content-box;">
              <Header
                back
                drop-down-title
                search-btn
              >
                <uuCombobox
                  v-model="comboboxSelector"
                  :options="comboboxOptions"
                />
              </Header>
            </div>
            <div style="position: relative; width: 375px; height: 56px; border: 1px solid #eee; box-sizing: content-box;">
              <Header
                back
                search-title
                text-title="화면 타이틀"
                clear-btn
              />
            </div>
          </div>
          <div class="view-code">
            <pre>
              <code class="language-html" />
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
