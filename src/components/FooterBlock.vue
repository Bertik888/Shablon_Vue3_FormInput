<template>
  <footer class="footer-block">
    <div class="footer-block__copyright">
      &copy 2022 LUXURY RESIDENCE
    </div>
    <div class="footer-block__privacy">
      Privacy Policy
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'FooterBlock'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/variable.scss';

.footer-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media (min-width: $break_md) {
    flex-direction: row;
  }

  &__copyright {
    color: $pink;
    margin-bottom: 10px;

    @media (min-width: $break_md) {
      margin-right: 208px;
    }
  }
}
</style>
