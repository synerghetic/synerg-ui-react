import LoaderComponent from '.'
import { Colors } from '../../utils'

export const Loader = LoaderComponent

export default {
    title: 'Components/Loader',
    component: LoaderComponent,
    argTypes: {
        size: {
            type: 'number',
            defaultValue: 40,
        },
        color: {
            control: {
                type: 'select',
                options: Object.values(Colors),
            },
            defaultValue: Colors.Purple,
        },
        bgColor: {
            control: {
                type: 'select',
                options: Object.values(Colors),
            },
            defaultValue: Colors.White,
        },
    },
}
