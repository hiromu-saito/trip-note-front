import TripSigninForm from '../components/moleclues/TripSigninForm'

export default {
  title: 'Moleclues/TripSigninForm',
  component: TripSigninForm,
}

const Template =(args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: { TripSigninForm },
  template: '<TripSigninForm v-bind="$props"/>'
})

export const Test = Template.bind({})
Test.args ={login: () =>{}}