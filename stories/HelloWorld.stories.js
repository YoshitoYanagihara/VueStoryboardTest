import HelloWorld from '../src/components/HelloWorld'

export default {
    title: 'HelloWorld',
    component: HelloWorld,
    argTypes: {
        msg: {
            control: 'text',
            defaultValue: 'Hello World',
        },
        input: {
            action: 'input',
        },
    },
}

export const Default = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { HelloWorld },
    template: `<HelloWorld :msg=msg v-on="{ 'input': input }" />`,
})
