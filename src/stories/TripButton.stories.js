import TripButton from '../components/atoms/TripButton'
export default {
  title: 'Atoms/TripButton',
  component: TripButton,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TripButton },
  template: '<trip-button @onClick="onClick" v-bind="$props" />',
})

export const Normal = Template.bind({})
Normal.args = {
  label: 'normal',
  disabled: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'disabled',
  disabled: true
}