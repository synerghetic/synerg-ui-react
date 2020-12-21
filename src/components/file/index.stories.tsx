import FileComponent from '.'

export const File = FileComponent

export default {
    title: 'Components/Inputs/File',
    component: FileComponent,
    argTypes: {
        error: {
            type: { name: 'string' },
        },
        onChange: { action: 'onChange' },
    },
}
