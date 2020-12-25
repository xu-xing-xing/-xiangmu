<template>
  <div class="main2">
    <div id="main" style="width: 500px; height: 300px"></div>
  </div>
</template>
<style scoped>
.main2 {
  transform: scaleY(0.9);
  margin-left: 10px;
}
</style>
<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "XX统计",
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["tokyo", "landon"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "tokyo",
            type: "line",
            stack: "总量",
            data: [
              7,
              6.9,
              9.5,
              14.5,
              18.4,
              21.5,
              25.2,
              26.5,
              23.3,
              18.3,
              13.9,
              9.6,
            ],
            itemStyle: {
              normal: {
                color: "#15d6ba",
              },
              lineStyle: {
                color: "#15d6ba",
              },
            },
          },
          {
            name: "landon",
            type: "line",
            stack: "总量",
            data: [
              3.9,
              4.2,
              5.7,
              8.5,
              11.9,
              15.2,
              17,
              16.6,
              14.2,
              10.3,
              6.6,
              4.8,
            ],
            itemStyle: {
              normal: {
                color: "rgba(16, 159, 255, 1)",
              },
              lineStyle: {
                color: "rgba(16, 159, 255, 1)",
              },
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>