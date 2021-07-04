import TripValidationInput from '../components/atoms/TripValidationInput'
export default {
  title: 'Atoms/TripValidationInput',
  component: TripValidationInput,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TripValidationInput },
  template: `
  <TripValidationInput v-bind="$props" :value.sync="value" />
  `,
})

const defaultArgs = {
  name: 'メールアドレス',
  inputType: 'text',
  placeholder: 'メールアドレス'
}

export const Required = Template.bind({})
Required.args = {
  ...defaultArgs,
  rules: 'required',
  value: ''
}

export const MinMax = Template.bind({})
MinMax.args = {
  ...defaultArgs,
  rules: 'minmax:8,20',
  value: '1'
}

export const NumAlpha = Template.bind({})
NumAlpha.args = {
  ...defaultArgs,
  rules: 'numalpha',
  value: 'テスト'
}

export const Regex = Template.bind({})
Regex.args = {
  ...defaultArgs,
  rules: 'email',
  value: 'テスト'
}

export const All = Template.bind({})
All.args = {
  ...defaultArgs,
  rules: 'required|minmax:8,20|numalpha|email',
  value: ''
}