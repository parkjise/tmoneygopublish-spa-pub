<script setup lang="ts">
import subHeader from '@/components/layout/SubHeader.vue'
import UuTabs from '@/components/uu-components/UuTabs.vue';
import UuTab from '@/components/uu-components/UuTab.vue';
import UuIc from '@/components/uu-components/UuIc.vue';

</script>
<template>
  <!-- header -->
  <sub-header title="자전거 이용방법 안내" />
  <!-- // header -->
  <!-- main -->
  <main class="main mor">
    <div class="container no_padding bg_white">
      <uu-tabs class="guide_tab">
        <uu-tab
          title="따릉이"
        >
          <uu-tabs 
            class="depth2_tab use_tab"
            own-size-tab
          >
            <uu-tab title="대여하기">
              <div class="how_use bike">
                <ol class="step">
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_seoulbike_01.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        홈 화면에서 대여하기 버튼을 누르세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_seoulbike_02.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        02
                      </p>
                      <p class="text">
                        자전거 안장 아래에 장착된 장치 QR을
                        확인해주세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_seoulbike_03.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        03
                      </p>
                      <p class="text">
                        QR코드를 스캔해주세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_seoulbike_04.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        04
                      </p>
                      <p class="text">
                        따릉이 대여가 시작됩니다.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </uu-tab>
            <uu-tab title="반납하기">
              <div class="how_use bike">
                <ol class="step">
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_seoulbike_05.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        홈 화면에서 대여하기 버튼을 누르세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_seoulbike_06.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        02
                      </p>
                      <p class="text">
                        자전거 안장 아래에 장착된 장치 QR을
                        확인해주세요.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </uu-tab>
            <uu-tab title="임시잠금하기">
              <div class="how_use bike">
                <ol class="step">
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_seoulbike_05.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        잠금장치 레버를 끝까지 내려주세요.
                      </p>
                    </div>
                  </li>
                </ol>
                <div class="ticket_notice">
                  <p class="title">
                    <uu-ic
                      size="16"
                      name="exclamation"
                    />
                    임시잠금 시 대여소와 가까운 경우 임의장소에서도 반납될 수 있으나,반납은 반드시 따릉이 대여소에서 하셔야 합니다.
                  </p>
                </div>
              </div>
            </uu-tab>
          </uu-tabs>
        </uu-tab>
        <uu-tab title="타슈">
          <uu-tabs 
            class="depth2_tab use_tab"
            own-size-tab
          >
            <uu-tab title="대여하기">
              <div class="how_use bike">
                <ol class="step">
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_tashu_01.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        홈 화면에서 대여하기 버튼을 누르세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_tashu_02.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        02
                      </p>
                      <p class="text">
                        자전거 안장 아래에 장착된 장치 QR을
                        확인해주세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_tashu_03.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        03
                      </p>
                      <p class="text">
                        QR코드를 스캔해주세요.
                      </p>
                    </div>
                  </li>
                  <li class="top">
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_tashu_04.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        04
                      </p>
                      <p class="text">
                        대여 시작 메세지와 함께 자전거와 잠금이 해제돼요.<br>
                        자전거와 잠금이 해제되지 않았다면 바퀴를 살짝 움직여 걸린 부분이 없는지 확인해주세요.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </uu-tab>
            <uu-tab title="반납하기">
              <div class="how_use bike">
                <ol class="step">
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_tashu_05.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        잠금장치 레버를 끝까지 내려주세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_tashu_06.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        02
                      </p>
                      <p class="text">
                        반납완료 안내음성이 재생되고 전송된
                        반납 메세지를 확인해 주세요.
                      </p>
                    </div>
                  </li>
                </ol>
                <div class="return">
                  <h4>대여소에 반납이 안되었나요?</h4>
                  <div class="img_area">
                    <img
                      src="/src/assets/images/guide/ic_tashu_07.png"
                      alt=""
                    >
                  </div>
                  <p>
                    앱에서도 반납을 할 수 있어요.<br>
                    “앱에서 반납” 버튼을 눌러서 처리가 가능해요.
                  </p>
                </div>
              </div>
            </uu-tab>
            <uu-tab title="임시잠금하기">
              <div class="how_use bike">
                <ol class="step">
                  <li class="top">
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_tashu_05.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        자전거의 잠금장치를 잠가주세요.<br>
                        다시 이용하고 싶을 때 앱에서 자가잠금 해제 버튼을 누르면 잠금이 해제되고 자전거를 재이용할 수 있어요.
                      </p>
                    </div>
                  </li>
                </ol>
                <div class="ticket_notice">
                  <p class="title">
                    <uu-ic
                      size="16"
                      name="exclamation"
                    />
                    임시잠금 시 대여소와 가까운 경우 임의장소에서도 반납될 수 있으나,반납은 반드시 따릉이 대여소에서 하셔야 합니다.
                  </p>
                </div>
              </div>
            </uu-tab>
          </uu-tabs>
        </uu-tab>
        <uu-tab title="지쿠터">
          <uu-tabs 
            class="depth2_tab use_tab"
            own-size-tab
          >
            <uu-tab title="아용하기">
              <div class="how_use bike">
                <ol class="step">
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_gqoo_01.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        홈 화면에서 대여하기 버튼을 누르세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_gqoo_02.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        02
                      </p>
                      <p class="text">
                        지쿠 QR코드를 스캔해주세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_gqoo_03.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        03
                      </p>
                      <p class="text">
                        올바른 장소에 주차해 주세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_gqoo_04.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        04
                      </p>
                      <p class="text">
                        주차 종료 후 주차 사진을 촬영하여
                        반납을 완료합니다.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </uu-tab>
            <uu-tab title="올바른 주차/견인구역">
              <div class="how_use bike">
                <div class="correct_parking">
                  <div class="img_area">
                    <img
                      src="/src/assets/images/guide/ic_correct_parking.png"
                      alt=""
                    >
                  </div>
                  <p>
                    건물의 외벽 및 담장, 인도 가장거리, 가로수 옆,<br>
                    자전거 거치대 주변 등 올바르게 주차해 주세요.
                    전동킥보드는 견인구역 주차 시,<br>
                    지자체로부터 <span>견인료가 부과</span>될 수 있으니 유의해 주세요.
                  </p>
                  <p>
                    <span>서비스 외 지역 및 주차금지 구역</span>에서 주행은 가능하지만 
                    반납하시는 경우 <span>패널티 요금이 부과</span>될 수 있습니다.
                  </p>
                </div>
              </div>
            </uu-tab>
          </uu-tabs>
        </uu-tab>
        <uu-tab title="킥고잉">
          <uu-tabs 
            class="depth2_tab use_tab"
            own-size-tab
          >
            <uu-tab title="대여하기">
              <div class="how_use bike">
                <ol class="step">
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_kick_01.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        홈 화면에서 대여하기 버튼을 누르세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_kick_02.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        02
                      </p>
                      <p class="text">
                        휴대폰 거치대 혹은 뒷바퀴에 있는 킥고잉
                        QR코드를 스캔해주세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_kick_03.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        03
                      </p>
                      <p class="text">
                        패달을 밟으면 가속됩니다.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </uu-tab>
            <uu-tab title="대여하기">
              <div class="how_use bike">
                <ol class="step">
                  <li class="top">
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_kick_04.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        자전거의 잠금장치를 잠가주세요.<br>
                        다시 이용하고 싶을 때 앱에서 자가잠금 해제 버튼을 누르면 잠금이 해제되고 
                        자전거를 재이용할 수 있어요.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </uu-tab>
            <uu-tab title="반납하기">
              <div class="how_use bike">
                <ol class="step">
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_kick_05.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        01
                      </p>
                      <p class="text">
                        보행자와 자동차의 길을 막지 않도록
                        인도 가장자리에 주차해 주세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_kick_06.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        02
                      </p>
                      <p class="text">
                        자전거 뒷바퀴의 잠금장치를 잠그고
                        앱에서 반납하기를 눌러주세요.
                      </p>
                    </div>
                    <div class="warning">
                      <uu-ic
                        size="24"
                        name="warning"
                      />
                      <p>
                        잠금장치를 잠그면 일시정지 상태가 됩니다.<br>
                        꼭 앱에서 반납하기를 눌러주세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="img_area">
                      <img
                        src="/src/assets/images/guide/ic_kick_07.png"
                        alt=""
                      >
                    </div>
                    <div class="text_area">
                      <p class="num">
                        03
                      </p>
                      <p class="text">
                        2시간 내 환승 시 잠금해제 무료!
                        자유롭게 환승이 가능합니다.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </uu-tab>
            <uu-tab title="주차금지지역/반납추가요금">
              <div class="how_use bike">
                <div class="correct_parking">
                  <div class="img_area">
                    <img
                      src="/src/assets/images/guide/ic_correct_parking.png"
                      alt=""
                    >
                  </div>
                  <p>
                    매장 앞이나 좁은 골목(차도) 및 아파트 단지 등<br>
                    통행에 불편감을 줄 수 있는 장소는 주차를 삼가주세요.
                    <span>서비스 외 지역 및 주차금지 구역</span>에서<br>
                    주행은 가능하지만 반납하시는 경우<br>
                    <span>패널티 요금이 부과</span>될 수 있습니다.
                  </p>
                </div>
              </div>
            </uu-tab>
          </uu-tabs>
        </uu-tab>
      </uu-tabs>
    </div>
  </main>
  <!-- // main -->
</template>