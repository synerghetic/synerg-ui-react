export enum Colors {
    Purple = 'Purple',
    Amber = 'Amber',
    Blue = 'Blue',
    White = 'White',
}

export const colorToTextClassName = (color: Colors) => {
    switch (color) {
        case Colors.Purple:
            return 'text-purple-500'
        case Colors.Amber:
            return 'text-amber-500'
        case Colors.Blue:
            return 'text-blue-500'
        case Colors.White:
            return 'text-white'
        default:
            return ''
    }
}

export const colorToBgClassName = (color: Colors) => {
    switch (color) {
        case Colors.Purple:
            return 'bg-purple-500'
        case Colors.Amber:
            return 'bg-amber-500'
        case Colors.Blue:
            return 'bg-blue-500'
        case Colors.White:
            return 'bg-white'
        default:
            return ''
    }
}

export const colorToHexa = (color: Colors) => {
    switch (color) {
        case Colors.Purple:
            return '#59089e'
        case Colors.Amber:
            return '#ffc107'
        case Colors.Blue:
            return '#42a5f5'
        case Colors.White:
            return '#fff'
        default:
            return ''
    }
}
