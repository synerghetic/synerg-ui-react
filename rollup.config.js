import typescript from '@rollup/plugin-typescript'
import scss from 'rollup-plugin-scss'

export default [
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [typescript({ declaration: true, declarationDir: 'dist' })],
    },
    {
        input: 'src/index.scss',
        output: {
            file: 'dist/index',
        },
        plugins: [scss()],
    },
]
