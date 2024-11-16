// TODO：待补充代码
const Stats = {
  props: ["items"],
  setup(props) {
    console.log();
    let demand = ref({
      completedLength: 0,
      length: 0,
    });
    let bug = ref({
      completedLength: 0,
      length: 0,
    });
    let task = ref({
      completedLength: 0,
      length: 0,
    });
    onMounted(() => {}),
      watch(
        props,
        () => {
          demand.value.completedLength = 0;
          bug.value.completedLength = 0;
          task.value.completedLength = 0;
          demand.value.length = 0;
          bug.value.length = 0;
          task.value.length = 0;
          props.items.forEach((i) => {
            if (i.type === "demand") {
              demand.value.length++;
              i.completed && demand.value.completedLength++;
            } else if (i.type === "bug") {
              bug.value.length++;
              i.completed && bug.value.completedLength++;
            } else if (i.type === "task") {
              task.value.length++;
              i.completed && task.value.completedLength++;
            }
          });
        },
        { deep: true }
      );
    return {
      demand,
      bug,
      task,
    };
  },
  template: `
    <div class="stats">
      <div>
        需求：{{demand.completedLength}}/{{demand.length}}
      </div>
      <div>
        缺陷：{{bug.completedLength}}/{{bug.length}}
      </div>
      <div>
        任务：{{task.completedLength}}/{{task.length}}
      </div>
    </div>
  `,
};
