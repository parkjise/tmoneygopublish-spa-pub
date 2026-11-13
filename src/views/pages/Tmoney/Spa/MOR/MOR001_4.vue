<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import roundBox from '@/components/layout/RoundBox.vue';
import uuButton from '@/components/uu-components/UuButton.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="약관 및 정책" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container">
      <round-box title="티머니GO">
        <div class="setting policy">
          <ul class="flex_area">
            <li>
              <uu-button>
                <span>서비스 이용약관</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>위치기반 서비스 이용약관</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>개인(신용)정보 수집, 이용 동의</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>개인(신용)정보의 제 3자 제공동의</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>마케팅정보 수신 동의</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
          </ul>
        </div>
      </round-box>
      <round-box title="택시">
        <div class="setting policy">
          <ul class="flex_area">
            <li>
              <uu-button>
                <span>[onda] 서비스 이용약관</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>[타다] 서비스 이용약관</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>[i.M] 서비스 이용약관</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>[onda] 개인정보 수집, 이용 동의</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>
                  [i.M] 티머니GO 이용을 위한 개인정보 수집 및 [i.M] 티머니GO 이용을 위한 개인정보 수집 및 
                </span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>
                  [타다] 티머니GO 이용을 위한 개인정보 수집 및 ...
                </span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>
                  [onda] 개인정보 제3자 제공 동의
                </span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>
                  [i.M] 개인정보 제3자 제공 동의
                </span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>
                  [타다] 개인정보 제3자 제공 동의
                </span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>
                  [onda] 개인정보 제3자 제공 동의
                </span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
          </ul>
        </div>
      </round-box>
      <round-box title="씽씽">
        <div class="setting policy">
          <ul class="flex_area">
            <li>
              <uu-button>
                <span>개인정보 수집, 이용 동의</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
            <li>
              <uu-button>
                <span>위치반 서비고유식별정보 수집 이용 동의스 이용약관</span>
                <uu-ic
                  size="16"
                  name="arrow_right_gray"
                />
              </uu-button>
            </li>
          </ul>
        </div>
      </round-box>
    </div>
  </main>
  <!-- // main -->
</template>