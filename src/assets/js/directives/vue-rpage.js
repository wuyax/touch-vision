import Vue from 'vue'
/**
 * 自定义指令，解决 iOS 12 中键盘收起后页面底部有留白的问题
 */
Vue.directive('rpage', {
  inserted: function () {
    // 监听键盘收起事件
    document.body.addEventListener('focusout', () => {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        //软键盘收起的事件处理
        setTimeout(() => {
          const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
          window.scrollTo(0, Math.max(scrollHeight - 1, 0))
        }, 100)
      }
    })
  }
})