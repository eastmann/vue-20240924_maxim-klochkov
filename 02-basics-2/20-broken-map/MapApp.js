import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивный объект с переменными для хранения координат метки
    const styleObj = reactive({
      top: 0,
      left: 0,
    })

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      styleObj.top = `${event.offsetY}px`
      styleObj.left = `${event.offsetX}px`
    }

    return {
      styleObj,

      handleClick,
    }
  },

  template: /* html */`
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="styleObj">📍</span>
    </div>
  `,
})
