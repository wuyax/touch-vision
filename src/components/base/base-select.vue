<template>
  <select :value="value"
    required
    @change="change"
    class="base-select">
    <option value=''
      disabled
      selected>{{placeholder}}</option>
    <option :value="option[config.value]"
      v-for="(option, index) in options"
      :key="index">{{option[config.label]}}</option>
  </select>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'BaseSelect',
  components: {},
  model: {
    prop: 'value',
    event: 'select'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    options: {
      type: Array,
      default: () => []
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    change(e) {
      this.$emit('select', e.target.value)
      console.log(e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
$text-color: #595959;
$blue: #4181ff;
.base-select {
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #595959;
  border-radius: 8px;

  color: $text-color;
  background: transparent;

  transition: all ease 0.2s;

  appearance: none;
  &:focus,
  &:active {
    border-color: $blue;
  }
}
select:required:invalid {
  color: #9a9a9a;
}
option[value=''][disabled] {
  display: none;
}
option {
  color: black;
}
</style>