const data = window.portfolio;
const byId = id => document.getElementById(id);
const pad = n => String(n).padStart(2, '0');
byId('owner').textContent = byId('copyright-name').textContent = data.name;
byId('role').textContent = data.role;
byId('year').textContent = new Date().getFullYear();
byId('client-count').textContent = pad(data.clients.length);
document.querySelector('.identity').href = '#intro';
for (const [i, client] of data.clients.entries()) {
 const a = document.createElement('a'); a.className = 'client-link'; a.href = '#' + client.id;
 for (const [cls, text] of [['number',pad(i+1)],['name',client.name],['arrow','↗']]) { const s = document.createElement('span'); s.className = cls; s.textContent = text; a.append(s); }
 byId('clients').append(a);
}
function render() {
 if (window.renderIntro()) return;
 const index = Math.max(0, data.clients.findIndex(c => '#' + c.id === location.hash));
 const client = data.clients[index];
 document.title = client.name + ' — ' + data.name;
 byId('client-name').textContent = client.name;
 byId('category').textContent = client.category;
 byId('description').textContent = client.description;
 byId('page-number').textContent = pad(index+1) + ' / ' + pad(data.clients.length);
 document.querySelectorAll('.client-link').forEach((a,i) => { if(i===index) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
 byId('logo').replaceChildren();
 if (client.logo) {const img = new Image(); img.src = client.logo; img.alt = client.name + ' logo'; byId('logo').append(img);}
 else {const s = document.createElement('span');s.className='logo-placeholder';s.textContent='CLIENT LOGO';byId('logo').append(s);}
 byId('gallery').replaceChildren();
 byId('work-count').textContent = client.images.length ? pad(client.images.length) + ' PROJECT IMAGES' : 'YOUR WORK GOES HERE';
 for (const [i, work] of client.images.entries()) {
  const figure = document.createElement('figure'); const img = new Image(); img.src = work.src; img.alt = work.alt || client.name + ' work sample'; img.loading = i === 0 ? 'eager' : 'lazy'; img.decoding='async';
  const caption = document.createElement('figcaption'); const title = document.createElement('span'); title.textContent = work.caption || 'Selected work'; const number = document.createElement('span'); number.textContent = pad(i+1);caption.append(title,number);figure.append(img,caption);byId('gallery').append(figure);
 }
 if (!client.images.length) {const el = document.createElement('div');el.className='empty-image';const plus=document.createElement('span');plus.textContent='+';el.append(plus,document.createTextNode('A space for your next project'));byId('gallery').append(el);}
 const next = data.clients[(index+1)%data.clients.length];byId('next-client').href='#'+next.id;byId('next-client').textContent='Next: '+next.name+' ↗';
 window.scrollTo(0,0);
}
window.addEventListener('hashchange', () => { if (location.hash !== '#client-page') render(); });render();
