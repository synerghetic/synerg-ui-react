export enum Colors {
    Purple = 'Purple',
    Amber = 'Amber',
    Blue = 'Blue',
}

export const colorToClassName = (color: Colors) => {
    switch (color) {
        case Colors.Purple:
            return 'text-purple-500'
        case Colors.Amber:
            return 'text-amber-500'
        case Colors.Blue:
            return 'text-blue-500'
        default:
            return ''
    }
}
