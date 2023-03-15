<template>
  <div class="container">
    <div class="row my-content-block">
      <div class="col-md-6">
        <title-block class="my-title-block col-md-6"/>
      </div>
      <div class="col-md-6">
        <form-block class="my-form-block col-md-6" />
      </div>
      <footer-block class="my-footer-block"/>
    </div>
  </div>
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import FormBlock from '@/components/FormBlock';
import FooterBlock from '@/components/FooterBlock.vue'

export default {
  name: 'App',
  components: {
    TitleBlock,
    FormBlock,
    FooterBlock
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variable.scss';

@font-face{
  font-family: 'GHEA Grapalat';
  src: url(@/assets/fonts/GHEAGrapalat.woff2) format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face{
  font-family: 'GHEA Mariam';
  src: url(@/assets/fonts/GHEAMariam.woff) format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-family-grapalat;
  background-color: $dark-blue;
  color: $light-grey;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 100%;
  max-width: 1920px;
  padding-right: $gutter-x;
  padding-left: $gutter-x;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -$gutter-x;
  margin-left: -$gutter-x;

  &>* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: $gutter-x;
    padding-left: $gutter-x;
  }
}

.col {
  &-md-6 {
    @media (min-width: $break_md) {
      flex: 0 0 auto;
      width: 50%;
    }
  }
}

.my-title-block {
  margin-top: 24px;

  @media (min-width: $break_md) {
    margin-top: 56px;
  }
}

.my-form-block {
  margin-top: 70px;

  @media (min-width: $break_md) {
    max-width: 538px;
    margin-top: 302px;
  }
}

.my-footer-block {
  margin-top: auto;
  padding-top: 70px;
  padding-bottom: 24px;

  @media (min-width: $break_md) {
    padding-top: 157px;
    padding-bottom: 90px;
  }
}

.my-content-block {
  min-height: 100vh;
}
</style>
