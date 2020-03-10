<template>
  <div class="auto-text-area">
    <div class="dummy">{{currentInput}}</div>
    <textarea class='vw-input'
      @input="inputValue"
      @compositionstart='onCompositionStart'
      @compositionend='onCompositionEnd'
      :placeholder="placeholder"
      :value='value'></textarea>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'AutoTextArea',
  components: {},
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentInput: ''
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    inputValue(e) {
      let value = e.target.value
      this.currentInput = value
      if (!e.target.composing) {
        this.$emit('change', value)
      }
    },
    onCompositionStart(e) {
      e.target.composing = true
    },
    onCompositionEnd(e) {
      if (!e.target.composing) {
        return
      }
      let value = e.target.value
      e.target.composing = false
      this.currentInput = value
      this.$emit('change', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.auto-text-area {
  position: relative;
  min-height: 48px;
  width: 100%;
  .dummy,
  .vw-input {
    padding: 10px;
  }
  .dummy {
    visibility: hidden;
    white-space: pre-wrap;
    &:after {
      content: '\A';
    }
  }
  .vw-input {
    line-height: 1.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    resize: none;
    width: 100%;
    font-family: inherit;
    border: none;
    box-shadow: 0 0 0 1px #000;
  }
}
</style>