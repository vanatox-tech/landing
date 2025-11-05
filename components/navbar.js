
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    padding: 1rem 1.5rem;
                }
                
                .navbar {
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 20px;
                    padding: 1rem 2rem;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-weight: 700;
                    font-size: 1.5rem;
                    letter-spacing: -0.5px;
                    color: white;
                    text-decoration: none;
                }
                
                .download-btn {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                    padding: 0.75rem 2rem;
                    border-radius: 25px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-block;
                    cursor: pointer;
                }
                
                .download-btn:hover {
                    background: rgba(255, 255, 255, 0.15);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
                }
                
                @media (max-width: 768px) {
                    :host {
                        padding: 0.5rem 1rem;
                    }
                    
                    .navbar {
                        padding: 0.75rem 1.5rem;
                    }
                    
                    .logo {
                        font-size: 1.25rem;
                    }
                    
                    .download-btn {
                        padding: 0.5rem 1.5rem;
                        font-size: 0.9rem;
                    }
                }
            </style>
            <nav class="navbar">
                <a href="/" class="logo">Vantanox</a>
                <a href="#" class="download-btn">Download</a>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);