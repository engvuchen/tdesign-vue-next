import { ref, watch, computed, Teleport, Transition, onMounted, onBeforeUnmount } from 'vue';
//   import './index1.css';

export default {
  name: 'TeleportComponent',
  props: {
    to: {
      type: String,
      required: true,
      default: 'body',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const isMounted = ref(false);
    const styleEl = ref(null);

    // 用于跟踪样式是否已添加到 DOM
    const isStyleAdded = ref(false);

    onMounted(() => {
      styleEl.value = document.createElement('style');
      styleEl.value.innerHTML = `
             html body {
              overflow-y: hidden;
              width: calc(100% - 200px);
            }
          `;
    });

    onBeforeUnmount(() => {
      // 组件销毁时确保移除样式；删2次是为了兼容嵌套，因为内层可以在未关闭时，被卸载
      removeStyle();
    });

    // 统一的样式移除函数
    const removeStyle = () => {
      if (styleEl.value && isStyleAdded.value) {
        styleEl.value.parentNode?.removeChild?.(styleEl.value);
        isStyleAdded.value = false;
      }
    };

    watch(
      () => props.visible,
      (val) => {
        if (val) {
          isMounted.value = true;
          // 只有当样式未添加时才添加
          if (!isStyleAdded.value && styleEl.value) {
            document.body.appendChild(styleEl.value);
            isStyleAdded.value = true;
          }
        } else {
          // 延迟移除，等待动画完成；todo 内层 v-show，需要这个
          setTimeout(() => {
            removeStyle();
          }, 150); // 与动画时长匹配
        }
      },
      { immediate: true },
    );

    const shouldRender = computed(() => {
      if (!isMounted.value) {
        return !props.lazy;
      } else {
        return props.visible || !props.destroyOnClose;
      }
    });

    return () => (
      <Teleport to={props.to}>
        <Transition name="slide-fade" duration={500}>
          {shouldRender.value && <div v-show={props.visible}>{slots.default?.()}</div>}
        </Transition>
      </Teleport>
    );
  },
};
