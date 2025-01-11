class FooterComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        fetch('src/components/footer.html')
            .then(response => {
                if (!response.ok) throw new Error(`Error al cargar el footer: ${response.statusText}`)
                return response.text()
            })
            .then(html => {
                const style = document.createElement('link')
                style.rel = 'stylesheet'
                style.href = 'src/styles/footer.css'

                const wrapper = document.createElement('div')
                wrapper.innerHTML = html

                this.shadowRoot.append(style, wrapper)
            })
            .catch(error => console.error(error))
    }
}

customElements.define('codex-auxilium-footer', FooterComponent)
