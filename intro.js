// Edit the introductory copy here. Client information stays in clients.js.
const homePage = document.createElement('main');
homePage.id = 'intro-page';
homePage.tabIndex = -1;
homePage.innerHTML = `
  <header class="topline"><span>THOMAS WALKER</span><span>GRAPHIC & WEB DESIGNER</span></header>
  <section class="home-hero" aria-labelledby="intro-title">
    <p class="home-eyebrow">INDEPENDENT DESIGNER · 30 YEARS OF EXPERIENCE</p>
    <h1 id="intro-title">Clear thinking.<br>Considerate design.</h1>
    <p class="home-lead">I’m Thomas Walker, a graphic and web designer turning complex ideas into clear, compelling visual communication.</p>
    <p class="home-description">I partner with national brands and corporate teams to create cohesive identities, marketing materials, and digital experiences—with an eye for detail and a practical understanding of production.</p>
    <div class="home-actions"><a class="home-primary" id="explore-work" href="#">Explore my work <span aria-hidden="true">↗</span></a><a href="mailto:tommyleewalker@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a></div>
  </section>
  <section class="home-services" aria-labelledby="services-title">
    <div class="home-section-heading"><h2 id="services-title">From the big picture<br>to the final detail.</h2><p>Creative strategy and hands-on execution,<br>across print and digital.</p></div>
    <div class="home-service-grid">
      <article><span>01</span><h3>Brand & identity</h3><p>Visual identities, art direction, and consistent design systems that bring a brand together.</p></article>
      <article><span>02</span><h3>Digital & communication</h3><p>Web and social assets, presentations, and marketing collateral that make complex messages accessible.</p></article>
      <article><span>03</span><h3>Print & environment</h3><p>Publications, packaging, event branding, and large-format graphics, prepared with production in mind.</p></article>
    </div>
  </section>
  <section class="home-experience" aria-labelledby="experience-title"><h2 id="experience-title">Experience that carries through.</h2><div><p>Since 2007, I’ve provided independent design support for corporate, consumer, and industrial clients, working closely with executives and cross-functional teams.</p><p>Previously, as Senior Graphic Designer at NHRA from 2000 to 2015, I led marketing, advertising, and promotional design—from high-visibility publications to large-scale event branding.</p><p class="home-education">BA, Art Studio · University of California, Santa Barbara</p></div></section>
  <footer><span>Have a project in mind?</span><a href="mailto:tommyleewalker@gmail.com">Let’s make it happen <span aria-hidden="true">↗</span></a></footer>
`;
document.querySelector('#client-page').before(homePage);
const homeLink = document.createElement('a');
homeLink.className = 'intro-nav-link';
homeLink.href = '#intro';
homeLink.textContent = 'Introduction';
document.querySelector('.nav-heading').before(homeLink);
window.renderIntro = function () {
  const showHome = !location.hash || location.hash === '#intro';
  homePage.hidden = !showHome;
  document.querySelector('#client-page').hidden = showHome;
  document.querySelector('.skip').href = showHome ? '#intro' : '#client-page';
  document.querySelector('.skip').textContent = showHome ? 'Skip to introduction' : 'Skip to client work';
  if (showHome) {
    homeLink.setAttribute('aria-current', 'page');
    document.title = window.portfolio.name + ' — Graphic & Web Designer';
    document.querySelectorAll('.client-link').forEach(a => a.removeAttribute('aria-current'));
    document.querySelector('#explore-work').href = '#' + window.portfolio.clients[0].id;
    window.scrollTo(0, 0);
  } else homeLink.removeAttribute('aria-current');
  return showHome;
};
document.querySelector('.skip').addEventListener('click', () => {
  if (!homePage.hidden) homePage.focus();
});
