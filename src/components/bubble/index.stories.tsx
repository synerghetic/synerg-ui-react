import BubbleComponent from '.'
import { Colors } from '../../utils'

export const Bubble = BubbleComponent

export default {
    title: 'Components/Decorations/Bubble',
    argTypes: {
        color: {
            defaultValue: Colors.Purple,
            control: {
                type: 'select',
                options: [Colors.Purple, Colors.Blue, Colors.Amber],
            },
        },
        position: {
            defaultValue: 'fixed',
            control: {
                type: 'select',
                options: ['static', 'relative', 'absolute', 'sticky', 'fixed'],
            },
        },
        size: {
            defaultValue: 'medium',
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        x: {
            defaultValue: 100,
            type: 'number',
        },
        y: {
            defaultValue: 100,
            type: 'number',
        },
        animated: {
            defaultValue: true,
            type: 'boolean',
        },
        showOnMobile: {
            defaultValue: true,
            type: 'boolean',
        },
    },
}
