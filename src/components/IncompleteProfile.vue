<template>
  <div class="profile-completeness" v-if="complete < 1">
    <span class="profile-completeness__text" :style="{color}">
      {{ text }}
    </span>
    <div
      class="profile-completeness__progress-wrapper"
      v-if="!noProgressBar"
    >
      <div
        class="profile-completeness__progress-inner"
        :style="{width}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noProgressBar: {
      type: Boolean,
      default: false,
    },
    complete: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: '#ed495f',
    },
    text: {
      type: String,
      default: 'Profile incomplete',
    },
  },

  computed: {
    width() {
      return `${parseInt(this.complete * 100, 10)}%`;
    },
  },
};
</script>
