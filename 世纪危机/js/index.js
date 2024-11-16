// 初始化 ECharts 实例
const chart = echarts.init(document.getElementById("main"));

/**人口数据增长推算函数
 * @param {number} initialPopulation 基础人口数，假设有 10 亿
 * @param {number} growthRate 年增长率，假设为 3%
 * @param {number} startYear 起始年份，假设为 200000
 */
function calculatePopulation(initialPopulation, growthRate, startYear) {
  const years = [];
  const population = [];
  // TODO：待补充代码 目标 1
  years.push(startYear);
  population.push(initialPopulation);
  for (let i = 1; i <= 30; i++) {
    years.push(startYear + i);
    initialPopulation *= 1 + growthRate;
    population.push(initialPopulation);
  }

  return { years, population };
}

const pData = calculatePopulation(1000000000, 0.03, 200000);

// 配置 ECharts 选项
const option = {
  title: {
    text: "未来30年人口增长趋势图",
    subtext: "假设年增长率为3%",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    // TODO：待补充代码 目标 3
    formatter: (params) => {
        return `<p>${pData.years[params[0].dataIndex]}<br/>人口：${Math.round(params[0].value/1e6)}M</p>`
    },
  },
  xAxis: {
    type: "category",
    // TODO：待修改代码 目标 2
    // 年份
    data: [...pData.years],
    name: "年份",
    boundaryGap: false,
  },
  yAxis: {
    type: "value",
    name: "人口数",
    axisLabel: {
      // TODO：待补充代码 目标 4
      formatter: (value) => Math.round(value / 1e6) + "M",
    },
  },
  series: [
    {
      name: "人口",
      type: "line",
      // TODO：待修改代码 目标 2
      // 人口数量
      data: [...pData.population],
      smooth: true,
      lineStyle: {
        color: "#3398DB",
      },
      itemStyle: {
        color: "#3398DB",
      },
    },
  ],
};

// 使用刚指定的配置项和数据显示图表
chart.setOption(option);
