// TODO：待补充代码

const FilterGroup = {
  emits: ["filter-group"],
  setup(props, { emit }) {
    let demand = ref(true);
    let bug = ref(true);
    let task = ref(true);
    let arr = [];
    function filter() {
      arr = [];
      demand.value && arr.push("demand");
      bug.value && arr.push("bug");
      task.value && arr.push("task");
      emit("filter-group", arr);
      // console.log("arr", arr.value);
    }
    return {
      demand,
      bug,
      task,
      filter,
    };
  },
  template: `
    <div class="filter-group">
      过滤：
      <label>
        <input type="checkbox" v-model="demand" @change="filter"> 需求
      </label>
      <label>
        <input type="checkbox" v-model="bug" @change="filter"> 缺陷
      </label>
      <label>
        <input type="checkbox" v-model="task" @change="filter"> 任务
      </label>
    </div>
  `,
};
