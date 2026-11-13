<script setup lang="ts">
import Prism  from '@/components/uu-components/Prism.vue'
</script>
<template>
  <div class="content-body">
    <section class="section">
      <h3 class="section-title">
        HTML 기본 규칙
      </h3>
      <h4 class="section-subtitle">
        코드 들여쓰기
      </h4>
      <ul class="list-dot">
        <li>1탭 들여쓰기 하며, 1탭의 크기는 공백 2칸으로 설정한다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
        <!doctype html>
        <html lang="ko">
          <head>...</head>
          <body>
            <div id="wrap">...</div>
          </body>
        </html>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h3 class="section-title">
        주석/빈줄
      </h3>
      <ul class="list-dot">
        <li>가독성을 고려하여 빈 줄을 추가한다. 단, 1줄을 초과하지 않는다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- header -->
          <header id="header">...</header>
          <!-- // header -->

          <!-- content -->
          <div id="content">...</div>
          <!-- // content -->

          <!-- footer -->
          <footer id="footer">...</footer>
          <!-- // footer -->
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h3 class="section-title">
        CSS 기본 규칙
      </h3>
      <h4 class="section-subtitle">
        들여쓰기/줄 바꿈
      </h4>
      <ul class="list-dot">
        <li>CSS 코드 작성시 들여쓰기는 허용하지 않는다.</li>
        <li>공통으로 사용되는 속성의 선택자간의 줄 바꿈은 허용하며 이 외의 줄바꿈은 허용하지 않는다.</li>
      </ul>
      <Prism
        css
        show
      >
        {{ `
        div.class-name {margin: 0.5em 0 0 0;font-size: 1.25em;letter-spacing: -0.1rem;}

        .class-name,
        .class-name .child-class {background: url(../img/img.gif) no-repeat;}
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        코드 들여쓰기
      </h4>
      <ul class="list-dot">
        <li>1탭 들여쓰기 하며, 1탭의 크기는 공백 2칸으로 설정한다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
        <!doctype html>
        <html lang="ko">
          <head>...</head>
          <body>
            <div id="wrap">...</div>
          </body>
        </html>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        선택자
      </h4>
      <ul class="list-dot">
        <li>'*' 공통 선택자는 웹 페이지의 성능을 저하를 가져오기 때문에 가급적 사용하지 않는다.</li>
      </ul>
      <Prism
        css
        show
      >
        {{ `
          /* 잘못된 예 */
          * {margin: 0;padding: 0;}
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        속성의 선언 순서
      </h4>
      <div class="table-wrap">
        <table class="guide-table v-table h-table">
          <caption>CSS 속성선언순서</caption>
          <colgroup>
            <col style="width:20%;">
            <col style="width:20%;">
            <col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">
                구분
              </th>
              <th scope="col">
                속성
              </th>
              <th scope="col">
                속성 값
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                rowspan="2"
              >
                1. 표시
              </th>
              <td>display</td>
              <td>
                none, block, inline, inline-block, inline-table, list-item, table, table-caption, table-cell, table-column, table-column-group, table-footer-group, table-header-group, table-row, table-row-group, flex
              </td>
            </tr>
            <tr>
              <td class="td-line">
                visibility
              </td>
              <td>visible, hidden, collapse</td>
            </tr>
            <tr>
              <th
                scope="row"
                rowspan="2"
              >
                2. 넘침/흐름
              </th>
              <td>overflow</td>
              <td>visible, hidden, scroll, auto</td>
            </tr>
            <tr>
              <td class="td-line">
                float
              </td>
              <td>left, right, none</td>
            </tr>
            <tr>
              <th
                scope="row"
                rowspan="3"
              >
                3. 위치
              </th>
              <td>position</td>
              <td>absolute, fixed, relative, static</td>
            </tr>
            <tr>
              <td class="td-line">
                top, right, bottom, left
              </td>
              <td>length(px, rem, em, vh), %</td>
            </tr>
            <tr>
              <td class="td-line">
                z-index
              </td>
              <td>number</td>
            </tr>
            <tr>
              <th
                scope="row"
                rowspan="4"
              >
                4. 크기/간격
              </th>
              <td>width, max-width, min-width</td>
              <td>auto, length(px, em, rem), %</td>
            </tr>
            <tr>
              <td class="td-line">
                height, max-height, min-height
              </td>
              <td class="td-line">
                auto, length(px, em, rem), %
              </td>
            </tr>
            <tr>
              <td class="td-line">
                margin
              </td>
              <td class="td-line">
                auto, length(px, em, rem), %
              </td>
            </tr>
            <tr>
              <td class="td-line">
                padding
              </td>
              <td>auto, length(px, em, rem), %</td>
            </tr>
            <tr>
              <th
                scope="row"
                rowspan="3"
              >
                5. 박스모양
              </th>
              <td>border</td>
              <td>border-width, border-style, border-color</td>
            </tr>
            <tr>
              <td class="td-line">
                border-radius
              </td>
              <td>length(px, em, rem), %</td>
            </tr>
            <tr>
              <td class="td-line">
                background
              </td>
              <td>background-color, background-image, background-repeat, background-attachment, background-position, background-size</td>
            </tr>
            <tr>
              <th
                scope="row"
                rowspan="4"
              >
                6. 글꼴/정렬
              </th>
              <td class="td-line">
                font
              </td>
              <td class="td-line">
                font-style, font-variant, font-weigth, font-size/line-height, font-family, letter-spacing
              </td>
            </tr>
            <tr>
              <td class="td-line">
                color
              </td>
              <td>hex_number</td>
            </tr>
            <tr>
              <td class="td-line">
                text-align
              </td>
              <td>left, right, center, justify</td>
            </tr>
            <tr>
              <td class="td-line">
                vertical-align
              </td>
              <td>top, middle, bottom, baseline</td>
            </tr>
            <tr>
              <th scope="row">
                7. 기타
              </th>
              <td />
              <td>언급되지 않은 속성들은 후순위로 적용한다.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
</style>
