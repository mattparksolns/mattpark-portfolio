declare module '*.svg' {
    import { FC, SVGAttributes } from 'react'
    const content: FC<SVGAttributes<SVGElement>>
    export default content
}

declare module '*css' {
    const content: { [className: string]: string }
    export default content
}
