class GlobalHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="banner">
          <nav aria-label="Main">
            <div class="sections">
              <a href="/index.html">Home</a>
              <a href="/pages/about.html">About Me</a>
              <a href="/pages/projects.html">Projects</a>
              <a href="/pages/contact.html">Contact</a>
            </div>
            <div class="links">
              <a href="https://www.linkedin.com/in/nick-cichoski-620717239/">
                <img src="/assets/images/linkedin_logo.png" alt="LinkedIn">
              </a>
              <a href="https://www.instagram.com/nickcichoski/">
                <img src="/assets/images/instagram-logo.png" alt="Instagram">
              </a>
            </div>
          </nav>
        </div>
      </header>`;

    const here = location.pathname.replace(/\/$/, '/index.html');
    this.querySelectorAll('.sections a').forEach(a => {
      if (new URL(a.href).pathname === here) a.setAttribute('aria-current', 'page');
    });
  }
}
customElements.define('global-header', GlobalHeader);