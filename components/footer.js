class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin-top: auto;
                }
                
                .footer {
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(20px);
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 2rem 1.5rem;
                    text-align: center;
                }
                
                .footer-text {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                }
                
                @media (max-width: 768px) {
                    .footer {
                        padding: 1.5rem 1rem;
                    }
                    
                    .footer-text {
                        font-size: 0.8rem;
                    }
                }
            </style>
            <footer class="footer">
                <p class="footer-text">© 2025 Vantanox — All rights reserved.</p>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);