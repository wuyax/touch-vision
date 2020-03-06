<template>
  <div class="useful-comp">
    <p class="discribe">内置有用的公共组件</p>
    <p class="title">Select</p>
    <p class="indent">在有的<code>select</code>组件中，绑定值没办法实现placeholder的效果，该组件提供了一种思路和解决方案，开发者掌握核心代码以后可以自行修改。</p>
    <base-select v-model="value"
      :config='config'
      :options='options'></base-select>
    <p class='title'>proposal-optional-chaining</p>
    <p class='indent'>项目已经配置了可选链（proposal-optional-chaining）的支持，你可以像这样写代码<code>var street = user.address?.street</code>。更多关于proposal-optional-chaining的信息请访问<a href='https://github.com/tc39/proposal-optional-chaining'>这里</a></p>
    <p class="title">自动行高的<code>textarea</code></p>
    <auto-text-area v-model="ata"></auto-text-area>
  </div>
</template>
<script>
import BaseSelect from '@/components/base/base-select.vue'
import AutoTextArea from '@/components/base/auto-text-area.vue'
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'UsefulComp',
  components: {
    BaseSelect,
    AutoTextArea
  },
  model: {},
  props: {},
  data() {
    return {
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      config: {
        value: 'value',
        label: 'label'
      },
      ata: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>