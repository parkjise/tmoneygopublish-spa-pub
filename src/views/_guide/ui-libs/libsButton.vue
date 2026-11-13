<script setup lang="ts">
import Prism from 'prismjs'
import { onMounted } from 'vue'

onMounted(() => {
  Prism.highlightAll()
})
</script>
<template>
  <div class="content-body">
    <div class="container">
      <!-- Sizes -->
      <div class="row">
        <div class="col-12">
          <h4>Sizes</h4>
          <ul class="list-dot">
            <li>Normal(기본 large), Small(.btn-sm)</li>
          </ul>
          <br>
          <!--view-exam -->
          <div class="view-exam">
            <div class="btn-area d-block">
              <button
                type="button"
                class="btn btn-primary"
              >
                <span>Normal : 48px</span>
              </button>
              <button
                type="button"
                class="btn btn-primary btn-sm"
              >
                <span>btn-sm : 30px</span>
              </button>
            </div>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
  &lt;button type="button" class="btn btn-primary"&gt;
    &lt;span&gt;Button&lt;/span&gt;
  &lt;/button&gt;

  &lt;button type="button" class="btn btn-primary btn-sm"&gt;
    &lt;span&gt;Button&lt;/span&gt;
  &lt;/button&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Sizes -->
      <!-- Types -->
      <div class="row">
        <div class="col-12">
          <h4>Types</h4>
          <ul class="list-dot">
            <li>Primary(.btn-primary), Secondary(.btn-secondary), Line(.btn-line), UnderLine(.btn-underline)</li>
          </ul>
          <br>
          <!--view-exam -->
          <div class="view-exam">
            <button
              type="button"
              class="btn btn-primary"
            >
              <span>btn-primary</span>
            </button>
            <button
              type="button"
              class="btn btn-primary"
              disabled
            >
              <span>btn-primary.disabled</span>
            </button>
            <button
              type="button"
              class="btn btn-line"
            >
              <span>btn-line</span>
            </button>
            <button
              type="button"
              class="btn btn-line"
              disabled
            >
              <span>btn-line.disabled</span>
            </button>
            <button
              type="button"
              class="btn btn-secondary"
            >
              <span>btn-secondary</span>
            </button>
            <br>
            <br>
            <button
              type="button"
              class="btn btn-primary btn-sm"
            >
              <span>btn-primary</span>
            </button>
            <button
              type="button"
              class="btn btn-primary btn-sm"
              disabled
            >
              <span>btn-primary.disabled</span>
            </button>
            <button
              type="button"
              class="btn btn-line btn-sm"
            >
              <span>btn-line.btn-sm</span>
            </button>
            <button
              type="button"
              class="btn btn-line btn-sm"
              disabled
            >
              <span>btn-line.btn-sm.disabled</span>
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-sm"
            >
              <span>btn-secondary.btn-sm</span>
            </button>
            <br>
            <br>
            <button
              type="button"
              class="btn btn-underline"
            >
              <span>btn-underline</span>
            </button>
            <button
              type="button"
              class="btn btn-line btn-block"
            >
              <span>.btn-block</span>
            </button>
          </div>
          <!--view-code -->
          <div class="view-code">
            <pre>
              <code class="language-html">
// Primary
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-primary&quot;
  &gt;
    &lt;span&gt;btn-primary&lt;/span&gt;
  &lt;/button&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-primary&quot;
    disabled
  &gt;
    &lt;span&gt;btn-primary.disabled&lt;/span&gt;
  &lt;/button&gt;

// Line
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-line&quot;
  &gt;
    &lt;span&gt;btn-line&lt;/span&gt;
  &lt;/button&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-line&quot;
    disabled
  &gt;
    &lt;span&gt;btn-line.disabled&lt;/span&gt;
  &lt;/button&gt;

//Secondary
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-secondary&quot;
  &gt;
    &lt;span&gt;btn-secondary&lt;/span&gt;
  &lt;/button&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-secondary&quot;
    disabled
  &gt;
    &lt;span&gt;btn-secondary.disabled&lt;/span&gt;
  &lt;/button&gt;

// Primary small
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-primary btn-sm&quot;
  &gt;
    &lt;span&gt;btn-primary.btn-sm&lt;/span&gt;
  &lt;/button&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-primary btn-sm&quot;
    disabled
  &gt;
    &lt;span&gt;btn-primary.btn-sm.disabled&lt;/span&gt;
  &lt;/button&gt;

// Line small
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-line btn-sm&quot;
  &gt;
    &lt;span&gt;btn-line.btn-sm&lt;/span&gt;
  &lt;/button&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-line btn-sm&quot;
    disabled
  &gt;
    &lt;span&gt;btn-line.btn-sm.disabled&lt;/span&gt;
  &lt;/button&gt;

//Secondary small
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-secondary btn-sm&quot;
  &gt;
    &lt;span&gt;btn-secondary.btn-sm&lt;/span&gt;
  &lt;/button&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-secondary btn-sm&quot;
    disabled
  &gt;
    &lt;span&gt;btn-secondary.btn-sm.disabled&lt;/span&gt;
  &lt;/button&gt;

// UnderLine
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-underline&quot;
  &gt;
    &lt;span&gt;btn-underline&lt;/span&gt;
  &lt;/button&gt;

// Block
&lt;button
  type=&quot;button&quot;
  class=&quot;btn btn-line btn-block&quot;
&gt;
  &lt;span&gt;btn-block&lt;/span&gt;
&lt;/button&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <!-- // Types -->
      <!-- Button area -->
      <div class="row">
        <div class="col-12">
          <h4>Button area</h4>
          <ul class="list-dot">
            <li>.btn-area > .btn (flex: 1)</li>
            <li>.btn-area.btn-block</li>
            <li>.btn.btn-block</li>
          </ul>
          <br>
          <!--view-exam -->
          <div class="view-exam">
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-line"
              >
                <span>1/N</span>
              </button>
              <button
                type="button"
                class="btn btn-primary"
              >
                <span>1/N</span>
              </button>
            </div>
            <div class="btn-area">
              <button
                type="button"
                class="btn btn-secondary btn-block"
              >
                <span>.btn-block</span>
              </button>
              <button
                type="button"
                class="btn btn-primary btn-block"
              >
                <span>.btn-block</span>
              </button>
            </div>
            <!--view-code -->
            <div class="view-code">
              <pre>
              <code class="language-html">
// 1/N
&lt;div class=&quot;btn-area&quot;&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-line&quot;
  &gt;
    &lt;span&gt;1/N&lt;/span&gt;
  &lt;/button&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-primary&quot;
  &gt;
    &lt;span&gt;1/N&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;

// btn-block
&lt;div class=&quot;btn-area btn-block&quot;&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-secondary&quot;
  &gt;
    &lt;span&gt;btn-block&lt;/span&gt;
  &lt;/button&gt;
  &lt;button
    type=&quot;button&quot;
    class=&quot;btn btn-primary&quot;
  &gt;
    &lt;span&gt;btn-block&lt;/span&gt;
  &lt;/button&gt;
&lt;/div&gt;
              </code>
            </pre>
            </div>
          </div>
        </div>
      </div>
      <!-- // Button area -->
    </div>
  </div>
</template>
<style></style>
