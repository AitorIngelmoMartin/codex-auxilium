import './navbar.js'

class HeaderComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        fetch('../components/header.html')
            .then(response => {
                if (!response.ok) throw new Error(`Error al cargar el header: ${response.statusText}`)
                return response.text()
            })
            .then(html => {
                const style = document.createElement('link')
                style.rel = 'stylesheet'
                style.href = '../styles/header.css'

                const wrapper = document.createElement('div')
                wrapper.innerHTML = html

                this.shadowRoot.append(style, wrapper)
            })
            .catch(error => console.error(error))
    }
}

customElements.define('codex-auxilium-header', HeaderComponent)
