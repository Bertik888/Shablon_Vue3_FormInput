<template>
    <div class="title-block">
      <h1 class="title-block__title">
        SEND<br>
        A REQUEST
      </h1>
      <p class="title-block__subtitle">
        Leave your contacts and we will contact you as soon as possible
      </p>
      <img
          src="@/assets/logo.svg"
          alt="logo"
          class="title-block__image"
      >
    </div>
</template>

<script>
  export default {
    name: 'TitleBlock'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variable.scss';

.title-block {
  width: 100%;

  &__title {
    font-family: $font-family-mariam;
    font-size: 46px;
    line-height: 1.1;
    letter-spacing: 0.03em;
    font-weight: 400;
    text-transform: uppercase;
    font-feature-settings: 'ordn' on, 'ss01' on;
    margin-top: 0;
    margin-bottom: 50px;

    @media (min-width: $break_md) {
      font-size: 66px;
    }
  }

  &__subtitle {
    letter-spacing: 0.05em;
    text-transform: uppercase;
    max-width: 200px;
    margin-bottom: 97px;
  }

  &__image {
    opacity: .2;
  }
}
</style>
