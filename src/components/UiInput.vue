<template>
  <div class="ui-input-block">
    <div
        class="ui-input-block__label"
        :class="{ '_focus': isFocus }"
    >
      {{ label }}
    </div>
    <input
        :type="type"
        :value="modelValue"
        :disabled="disabled"
        class="ui-input-block__input"
        :class="{ '_error': isInvalid, '_range': type === 'range' }"
        v-maska
        :data-maska="maska"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="onFocus"
        @blur="onBlur"
        @change="$emit('change')"
        @click="$emit('click')"
    >
    <div
        v-if="isInvalid && textError"
        class="ui-input-block__system"
    >
      {{ textError }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    textError: {
      type: String,
      default: ''
    },
    maska: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFocus: false
    }
  },
  methods: {
    onFocus(event) {
      this.isFocus = true
      this.$emit('focus', event)
    },
    onBlur(event) {
      this.isFocus = false
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variable.scss';

.ui-input-block {
  position: relative;
  height: 42px;

  &__label {
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: all .15s ease-in-out;
    display: inline-block;

    &._focus {
      transform: translateY(-10%) scale(0.75);
      opacity: .5;
    }
  }

  &__input {
    display: flex;
    align-items: center;
    font-family: $font-family-grapalat;
    color: $light-grey;
    line-height: 1.5;
    font-size: 14px;
    width: 100%;
    padding: 0;
    background-color: transparent;
    background-clip: padding-box;
    border-radius: 0;
    border: none;
    outline: none;
    transition: border-color .15s ease-in-out;

    &:not(._range) {
      border-bottom: 1px solid rgba($light-grey, 0.5);
    }

    &._range {
      margin-top: 8px;
    }

    &._error {
      border-bottom: 1px solid $error-color;
    }

    &:-moz-placeholder {
      opacity: 0;
    }

    &::-webkit-input-placeholder {
      opacity: 0;
    }

    &::-moz-placeholder {
      opacity: 0;
    }

    &:disabled {
      color: rgba($light-grey, 0.5);
    }
  }

  &__system {
    position: absolute;
    margin-top: 6px;
    font-size: 12px;
    line-height: 1;
    width: 100%;
    display: flex;
    align-items: center;
    color: $error-color;
  }
}



/* === range theme and appearance === */
input[type="range"] {
  width: 100%;
}

input[type="range"] {
  color: $pink;
  --thumb-height: 13px;
  --track-height: 1px;
  --track-color: #5BAAF9;
  --brightness-hover: 180%;
  --brightness-down: 80%;
  --clip-edges: 0.125em;
}


/* === range commons === */
input[type="range"] {
  position: relative;
  background: #fff0;
  overflow: hidden;
}

input[type="range"]:active {
  cursor: grabbing;
}

/* === WebKit specific styles === */
input[type="range"],
input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  transition: all ease 100ms;
  height: var(--thumb-height);
}

input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
  position: relative;
}

input[type="range"]::-webkit-slider-thumb {
  --thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
  --clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
  --clip-bottom: calc(var(--thumb-height) - var(--clip-top));
  --clip-further: calc(100% + 1px);
  --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
  100vmax currentColor;

  width: var(--thumb-width, var(--thumb-height));
  background: linear-gradient(currentColor 0 0) scroll no-repeat left center /
		50% calc(var(--track-height) + 1px);
  background-color: currentColor;
  box-shadow: var(--box-fill);
  border-radius: var(--thumb-width, var(--thumb-height));

  filter: brightness(100%);
  clip-path: polygon(
          100% -1px,
          var(--clip-edges) -1px,
          0 var(--clip-top),
          -100vmax var(--clip-top),
          -100vmax var(--clip-bottom),
          0 var(--clip-bottom),
          var(--clip-edges) 100%,
          var(--clip-further) var(--clip-further)
  );
}

input[type="range"]:hover::-webkit-slider-thumb {
  cursor: grab;
}

input[type="range"]:active::-webkit-slider-thumb {
  cursor: grabbing;
}

input[type="range"]::-webkit-slider-runnable-track {
  background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
		100% calc(var(--track-height) + 1px);
}

/* === Firefox specific styles === */
input[type="range"],
input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-thumb {
  appearance: none;
  transition: all ease 100ms;
  height: var(--thumb-height);
}

input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-thumb,
input[type="range"]::-moz-range-progress {
  background: #fff0;
}

input[type="range"]::-moz-range-thumb {
  background: currentColor;
  border: 0;
  width: var(--thumb-width, var(--thumb-height));
  border-radius: var(--thumb-width, var(--thumb-height));
  cursor: grab;
}

input[type="range"]:active::-moz-range-thumb {
  cursor: grabbing;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  background: var(--track-color);
}

input[type="range"]::-moz-range-progress {
  appearance: none;
  background: currentColor;
  transition-delay: 30ms;
}

input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-progress {
  height: calc(var(--track-height) + 1px);
  border-radius: var(--track-height);
}

input[type="range"]::-moz-range-thumb,
input[type="range"]::-moz-range-progress {
  filter: brightness(100%);
}
</style>

