import TripButton from '../components/atoms/TripButton'
export default {
  title: 'Atoms/Button',
  component: TripButton,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TripButton },
  template: `
  <div>
    <trip-button @click="onClick" v-bind="$props" />
  </div>
  `,
})

export const Normal = Template.bind({})
Normal.args = {
  label: 'normal',
  disabled: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'disabled',
  disabled: true
}