import React from "react";

type Component = {
    new(...args: any[]): {
        render(): any 
    }
}

export default function logRender<C extends Component>(componente: C) {
    return class extends componente {
        render() {
            console.log('Renderizando componente...')
            const r: any = super.render()
            console.log('Redenrização Concluída!')
            return r
        }
    }
}