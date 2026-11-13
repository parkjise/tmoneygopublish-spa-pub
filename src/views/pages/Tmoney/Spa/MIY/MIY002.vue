<script setup lang="ts">
import { ref, onMounted } from 'vue';
import subHeader from '@/components/layout/SubHeader.vue'
import RoundBox from '@/components/layout/RoundBox.vue';
import UuTooltip from '@/components/uu-components/UuTooltip.vue';
import UuButton from '@/components/uu-components/UuButton.vue';
import UuIc from '@/components/uu-components/UuIc.vue';
import uuSwiper from '@/components/uu-components/UuSwiper.vue'
import { SwiperSlide } from 'swiper/vue';
import { type SwiperOptions } from 'swiper/types';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// swiper
const options: SwiperOptions = ({
  slidesPerView: 'auto',
  spaceBetween: 16,
})
// swiper 갯수 1개일 때 옵션
const optionOne: SwiperOptions = ({
  slidesPerView: 1,
  centeredSlides: true,
})

// scroll
const showBtn = ref(false);
const btnScroll = () => {
  window.scrollY > 100 ? showBtn.value = true : showBtn.value = false
}

// chart
const chartCanvas1 = ref<HTMLCanvasElement | null>(null);
const chartCanvas2 = ref<HTMLCanvasElement | null>(null);
const chartCanvas3 = ref<HTMLCanvasElement | null>(null);
const chartCanvas4 = ref<HTMLCanvasElement | null>(null);
const chartCanvas5 = ref<HTMLCanvasElement | null>(null);
const transCanvas = ref<HTMLCanvasElement | null>(null);

Chart.register(ChartDataLabels)
onMounted(() => {
  // scroll
  window.addEventListener('scroll', btnScroll)

  // chart
  if (!chartCanvas1.value) return;
  if (!chartCanvas2.value) return;
  if (!chartCanvas3.value) return;
  if (!chartCanvas4.value) return;
  if (!chartCanvas5.value) return;
  if (!transCanvas.value) return;

  const ctx1 = chartCanvas1.value.getContext('2d');
  const ctx2 = chartCanvas2.value.getContext('2d');
  const ctx3 = chartCanvas3.value.getContext('2d');
  const ctx4 = chartCanvas4.value.getContext('2d');
  const ctx5 = chartCanvas5.value.getContext('2d');
  const ctx6 = transCanvas.value.getContext('2d');

  if (!ctx1) return;
  if (!ctx2) return;
  if (!ctx3) return;
  if (!ctx4) return;
  if (!ctx5) return;
  if (!ctx6) return;
  // 티머니 마일리지 
  const data1 = 20;
  const data2 = 55;
  const data3 = 60;
  const data4 = 70;
  const data5 = 80;
  new Chart(ctx1, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: '대중교통',
          backgroundColor: ['#A14397', '#FBFBFB'],
          data: [100 - data1, data1],
          borderWidth: 0,
          borderRadius: 30,
          hoverBackgroundColor: ['#A14397', '#FBFBFB'],
        },
      ]
    },
    options: {
      responsive: true,
      cutout: '90%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          display: false
        }
      },
    }
  })
  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: '고속시외',
          backgroundColor: ['#8EB9EC', '#FBFBFB'],
          // data: [data2, 100 - data2],
          data: [100 - data2, data2],
          borderWidth: 0,
          borderRadius: 30,
          hoverBackgroundColor: ['#8EB9EC', '#FBFBFB'],
        },
      ]
    },
    options: {
      responsive: false,
      cutout: '88%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          display: false
        }
      },
    }
  })
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: '온다택시',
          backgroundColor: ['#F6C1F1', '#FBFBFB'],
          data: [100 - data3, data3],
          borderWidth: 0,
          borderRadius: 30,
          hoverBackgroundColor: ['#F6C1F1', '#FBFBFB'],
        },
      ]
    },
    options: {
      responsive: false,
      cutout: '86%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          display: false
        }
      },
    }
  })
  new Chart(ctx4, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: '자전거',
          backgroundColor: ['#ABF09A', '#FBFBFB'],
          data: [100 - data4, data4],
          borderWidth: 0,
          borderRadius: 30,
          hoverBackgroundColor: ['#ABF09A', '#FBFBFB'],
        },
      ]
    },
    options: {
      responsive: false,
      cutout: '84%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          display: false
        }
      },
    }
  })
  new Chart(ctx5, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          label: '킥보드',
          backgroundColor: ['#FFC989', '#FBFBFB'],
          data: [100 - data5, data5],
          borderWidth: 0,
          borderRadius: 30,
          hoverBackgroundColor: ['#FFC989', '#FBFBFB'],
        },
      ]
    },
    options: {
      responsive: false,
      cutout: '80%',
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          display: false
        }
      },
    }
  })
  // 당월지출 교통비
  new Chart(ctx6, {
    type: "bar",
    data: {
      labels: ['12월', "01"],
      datasets: [
        {
          data: [67500, 48950],
          backgroundColor: ["#EEEEEE","#8E0D80"],
          borderRadius: 10,
          maxBarThickness: 40,
          minBarLength: 10,
          hoverBackgroundColor: ['#EEEEEE', '#8E0D80'],
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          display: false,
          beginAtZero: true,
          // 교통비 최댓값
          max: 90000,
        },
      },
      plugins: {
        tooltip: {
          enabled: false
        },
        legend: {
          display: false,
        },
        datalabels: {
          align: 'top',
          anchor: 'end',
          color: ['#888888', '#8E0D80'],
          font: function (context) {
            const dataIndex = context.dataIndex;
            const size = dataIndex == 0 ? 12 : 14;
            const weight = dataIndex == 0 ? 500 : 700;
            return {
              family: 'Spoqa Han Sans Neo',
              size: size,
              weight: weight
            }
          },
          formatter: function (value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        }
      },
    }
  })
});
</script>
<template>
  <!-- header -->
  <sub-header
    title="마이"
    hide-back
  />
  <!-- // header -->
  <!-- main -->
  <main class="main miy">
    <div class="container">
      <div class="main_area">
        <round-box
          hide-title
          padding-bottom="1.2rem"
        >
          <div class="mileage">
            <p class="box_title">
              타기만 했더니 어느새 쌓여버린 <br>
              나의 티머니GO 마일리지!
              <uu-tooltip
                content="모빌리티 별 마일리지 현황을 한눈에 볼수 있어요!"
              />
            </p>
            <div class="chart">
              <canvas
                ref="chartCanvas1"
                class="canvas1"
                width="235"
                height="235"
              />
              <canvas
                ref="chartCanvas2"
                class="canvas2"
                width="201"
                height="201"
              />
              <canvas
                ref="chartCanvas3"
                class="canvas3"
                width="167"
                height="167"
              />
              <canvas
                ref="chartCanvas4"
                class="canvas4"
                width="134"
                height="134"
              />
              <canvas
                ref="chartCanvas5"
                class="canvas5"
                width="100"
                height="100"
              />
            </div>
            <div class="reward">
              <h4>이번 달 나의 리워드 현황</h4>
              <ul class="reward_list">
                <li>
                  <p class="title">
                    <img
                      src="/src/assets/images/ic_reward_subway.png"
                      alt="대중교통 아이콘"
                    >
                    대중교통
                  </p>
                  <p class="num">
                    <strong>900</strong>M
                  </p>
                </li>
                <li>
                  <p class="title">
                    <img
                      src="/src/assets/images/ic_reward_bus.png"
                      alt="고속시외 아이콘"
                    >
                    고속시외
                  </p>
                  <p class="num">
                    <strong>200</strong>M
                  </p>
                </li>
                <li>
                  <p class="title">
                    <img
                      src="/src/assets/images/ic_reward_taxi.png"
                      alt="온다택시 아이콘"
                    >
                    온다택시
                  </p>
                  <p class="num">
                    <strong>0</strong>M
                  </p>
                </li>
                <li>
                  <p class="title">
                    <img
                      src="/src/assets/images/ic_reward_bike.png"
                      alt="자전거 아이콘"
                    >
                    자전거
                  </p>
                  <p class="num">
                    <strong>0</strong>M
                  </p>
                </li>
                <li>
                  <p class="title">
                    <img
                      src="/src/assets/images/ic_reward_kickboard.png"
                      alt="킥보드 아이콘"
                    >
                    킥보드
                  </p>
                  <p class="num">
                    <strong>0</strong>M
                  </p>
                </li>
              </ul>
            </div>
            <uu-button class="btn_go">
              GO 마일리지 내역 자세히 보기
              <uu-ic
                size="24"
                name="navi_right"
              />
            </uu-button>
          </div>
        </round-box>
        <round-box
          :title="'티머니GO와 함께한 \n나의 총 이동거리는?'"
          padding-bottom="1.2rem"
        >
          <div class="move">
            <div class="temp_img_area">
              <img
                src="/src/assets/images/temp/temp_my_distance.png"
                alt="임시 이미지"
              >
            </div>
            <uu-button class="btn_go">
              나의 이동거리 보러 가기
              <uu-ic
                size="24"
                name="navi_right"
              />
            </uu-button>
          </div>
        </round-box>
        <round-box
          :title="'당월 내가 지출하고 있는 \n교통비는 총 얼마일까요?'"
          padding-bottom="1.2rem"
        >
          <div class="trans_pay">
            <div class="chart">
              <canvas
                ref="transCanvas"
                width="230"
                height="180"
              />
              <div class="month_wrap">
                <div class="last_month">
                  <p class="month">
                    <strong>12</strong>월
                  </p>
                  <p>12.01~12.31</p>
                </div>
                <div class="this_month">
                  <p class="month">
                    <strong>01</strong>월
                  </p>
                  <p>12.01~12.31</p>
                </div>
              </div>
            </div>
            <uu-button class="btn_go">
              나의 교통비 보러 가기
              <uu-ic
                size="24"
                name="navi_right"
              />
            </uu-button>
          </div>
        </round-box>
        <round-box
          :title="'나는 티머니GO의 \n어떤 유형의 사용자일까요?'"
          padding-bottom="1.2rem"
        >
          <div class="user">
            <uu-swiper
              type="custom"
              :options="options"
            >
              <swiper-slide
                v-for="(item, index) in 6"
                :key="index" 
              >
                <div class="swiper_inner">
                  <div class="card">
                    <div class="img_area">
                      <img
                        src="/src/assets/images/temp/temp_miy_card01.png"
                        alt="임시 이미지"
                      >
                      <uu-button>
                        <uu-ic
                          size="24"
                          name="share_blue"
                        />
                      </uu-button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </uu-swiper>
            <uu-button class="btn_go">
              나의 유형 스탬프 보러 가기
              <uu-ic
                size="24"
                name="navi_right"
              />
            </uu-button>
          </div>
        </round-box>
        <round-box
          :title="'티머니GO와 함께 탄소를 \n절감하며 나무를 키워보세요!'"
          padding-bottom="1.2rem"
        >
          <div class="tree">
            <div class="temp_img_area">
              <img
                src="/src/assets/images/temp/temp_my_esg.png"
                alt="임시 이미지"
              >
            </div>
            <div class="tree_step">
              <p class="step">
                작은 나무 단계
              </p>
              <p class="desc">
                조금 더 이동해서 나무를 더 크게 키워보세요!
              </p>
            </div>
            <uu-button class="btn_go">
              티머니GO ESG 캠페인 보러 가기
              <uu-ic
                size="24"
                name="navi_right"
              />
            </uu-button>
          </div>
        </round-box>
        <Transition name="btn-ani">
          <div
            v-if="showBtn"
            class="btn_area"
          >
            <uu-button>
              <img
                src="/src/assets/images/temp/temp_btn_card.png"
                alt="임시 이미지"
              >
              <uu-button class="btn_close">
                <uu-ic
                  size="24"
                  name="close_white"
                />
              </uu-button>
            </uu-button>
          </div>
        </Transition>
      </div>
    </div>
  </main>
  <!-- // main -->
</template>