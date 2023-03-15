<template>
  <form class="form-block" @submit.prevent="onSubmit">
    <ui-input
        v-model="form.name.value"
        label="name"
        :is-invalid="!form.name.isValid"
        :text-error="form.name.textError"
        @update:modelValue="resetValidationField('name')"
    />
    <ui-input
        v-model="form.phone.value"
        label="phone"
        :is-invalid="!form.phone.isValid"
        :text-error="form.phone.textError"
        maska="+7 (###) ###-##-##"
        text-error="error"
        class="form-block__margin-top"
        @update:modelValue="resetValidationField('phone')"
    />
    <ui-input
        v-model="form.temp.value"
        type="range"
        label="temp"
        class="form-block__margin-top"
    />
    <ui-input
        v-model="form.comments.value"
        label="comments"
        class="form-block__margin-top"
    />
    <div class="form-block__actions">
      <button
          type="submit"
          class="form-block__btn"
      >
        call me
      </button>
      <div class="form-block__actions_policy">
        By pressing “Send” button
        I agree with <a href="#" class="form-block__actions_link">Privacy Policy</a>
      </div>
    </div>
  </form>
</template>

<script>
import UiInput from "@/components/UiInput";

export default {
  name: 'FormBlock',
  components: {
    UiInput
  },
  data() {
    return {
      form: {
        name: {
          value: '',
          validation: [
            {
              rule: 'required',
              value: true,
              message: 'this field is required'
            },
            {
              rule: 'minLength',
              value: 3,
              message: 'min length is 3 charts'
            }
          ],
          isValid: true,
          textError: ''
        },
        phone: {
          value: '',
          validation: [
            {
              rule: 'required',
              value: true,
              message: 'this field is required'
            },
            {
              rule: 'regexp',
              value: '^\\+7[ ]\\((?:\\d{3})\\)[ ](?:\\d{3})(?:-\\d{2}){2}$',
              message: 'incorrect phone format'
            }
          ],
          isValid: true,
          textError: ''
        },
        comments: {
          value: '',
          isValid: true,
          textError: ''
        },
        temp: {
          value: 50,
          isValid: true,
          textError: ''
        }
      }
    }
  },
  methods: {
    async onSubmit() {
      let isValid = true
      Object.entries(this.form).forEach(([key, val]) => {
        // если isValid === true смотрим есть ли невалидные поля и записываем результат в переменную
        if (isValid) {
          isValid = this.validationField(key, val)
        } else {
          // чекаем метод без записи в переменную, так как уже есть не валидные данные и форму отправлять не нужно
          this.validationField(key, val)
        }
      })

      if (isValid) {
        // данные валидну, отправляем форму
        // эмулируем запрос на сервер
        const API = new Promise(function(resolve, reject) {
          resolve()
        })

        // при успешном ответе выводим сообщение (в данном случае ответ всегда будет успешный)
        API.then(() => {
          console.log('onSubmit', {
            name: this.form.name.value,
            phone: this.form.phone.value,
            temp: this.form.temp.value,
            comment: this.form.comments.value,
          })
        }).finally(() => {
          this.resetForm()
        })
      }
    },
    setFieldValidation(key, isValid, message) {
      this.form[key].isValid = isValid
      this.form[key].textError = message
    },
    validationField(key, val) {
      // если validation отсутствует, значит валидация для поля не предусмотрина. Прерываем проверку
      if (!val?.validation) return true
      // проверяем правила validation
      for (let item of val.validation) {
        // если присутствует роль required и у него значенеие не false и у инпута нет значения
        if (item.rule === 'required' && item?.value && !val.value) {
          this.setFieldValidation(key, false, item.message)
          return false
        }
        // если присутствует роль minLength и у него значенеие не false и длина инпута меньше значения правила
        if (item.rule === 'minLength' && item?.value && val.value.length < item.value) {
          this.setFieldValidation(key, false, item.message)
          return false
        }
        // если присутствует роль regexp и у него значенеие не false и инпут не подходит под регулярное выражение
        // (в данном случае мы валидируем phone)
        if (item.rule === 'regexp' && item?.value && !new RegExp(item.value).test(val.value)) {
          this.setFieldValidation(key, false, item.message)
          return false
        }
        return true
      }
    },
    resetValidationField(key) {
      this.setFieldValidation(key, true, '')
    },
    resetForm() {
      this.form.name.value = ''
      this.form.phone.value = ''
      this.form.temp.value = 50
      this.form.comments.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variable.scss';

.form-block {
  width: 100%;

  &__margin-top {
    margin-top: 30px;

    @media (min-width: $break_md) {
      margin-top: 50px;
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    @media (min-width: $break_md) {
      flex-direction: row;
      margin-top: 136px;
    }

    &_policy {
      font-size: 13px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-top: 30px;

      @media (min-width: $break_md) {
        margin-top: 0;
        max-width: 205px;
        margin-left: 72px;
      }
    }

    &_link {
      color: $pink;
      text-decoration: none;
    }
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    font-size: 12px;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: $light-grey;
    background: transparent;
    box-shadow: none;
    padding: 19px 60px;
    border: solid 1px $light-grey;
    border-radius: 100px;
    cursor: pointer;
    width: 100%;

    @media (min-width: $break_md) {
      width: auto;
    }
  }
}
</style>

