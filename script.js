(function(){
var d=document,r=d.documentElement;
var bar=d.getElementById('bar');
addEventListener('scroll',function(){var h=r.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%'});
var t=d.getElementById('tema');
try{var s=localStorage.getItem('tema');if(s)r.dataset.theme=s}catch(e){}
t.onclick=function(){var n=(r.dataset.theme==='dark'||(!r.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches))?'light':'dark';r.dataset.theme=n;try{localStorage.setItem('tema',n)}catch(e){}};
// timeline tabs
var E=[
['1950','Alan Turing menerbitkan makalah "Computing Machinery and Intelligence" dan mengajukan pertanyaan apakah mesin dapat berpikir. Dari sinilah muncul gagasan uji yang kemudian dikenal sebagai Turing Test.'],
['1956','Workshop di Dartmouth College yang diusulkan John McCarthy dan rekan-rekannya memperkenalkan istilah "artificial intelligence". Tahun ini lazim disebut kelahiran AI sebagai bidang ilmu.'],
['1958','Frank Rosenblatt memperkenalkan perceptron, salah satu bentuk awal jaringan saraf tiruan yang dapat belajar mengenali pola sederhana.'],
['1970-an – 1980-an','Harapan yang terlalu tinggi bertemu keterbatasan komputer dan data. Pendanaan menyusut dua kali, periode yang disebut "AI winter". Pada masa ini sistem pakar (expert system) sempat populer di industri.'],
['1997','Komputer catur Deep Blue milik IBM mengalahkan juara dunia Garry Kasparov dalam pertandingan enam game. Ini menunjukkan mesin bisa unggul dalam tugas sempit yang sangat terstruktur.'],
['2012','AlexNet memenangkan kompetisi ImageNet dengan selisih besar. Kemenangan ini dipandang sebagai titik balik deep learning karena terbukti jaringan saraf besar, data banyak, dan GPU bekerja bersama dengan baik.'],
['2016','AlphaGo dari DeepMind mengalahkan Lee Sedol, pemain Go profesional kelas dunia. Go jauh lebih kompleks daripada catur sehingga hasil ini dianggap lompatan besar.'],
['2017','Peneliti Google menerbitkan "Attention Is All You Need" yang memperkenalkan arsitektur Transformer. Hampir semua model bahasa besar saat ini dibangun di atas gagasan tersebut.'],
['2022','OpenAI merilis ChatGPT pada 30 November 2022. AI generatif berbasis percakapan mendadak dipakai jutaan orang awam, bukan hanya peneliti.'],
['2026','Stanford HAI menerbitkan AI Index 2026 (13 April 2026) yang menyimpulkan kemampuan AI terus naik, adopsi sangat cepat, namun upaya keselamatan dan pengukuran belum mengimbangi.']];
var tabs=d.getElementById('tl'),pn=d.getElementById('tlp');
E.forEach(function(e,i){var b=d.createElement('button');b.textContent=e[0];b.setAttribute('role','tab');b.setAttribute('aria-selected',i===0);b.onclick=function(){show(i)};tabs.appendChild(b)});
function show(i){[].forEach.call(tabs.children,function(b,j){b.setAttribute('aria-selected',j===i)});pn.innerHTML='<h3>'+E[i][0]+'</h3><p style="margin:0">'+E[i][1]+'</p>'}
show(0);
// counters
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var el=e.target,to=+el.dataset.to,sf=el.dataset.suf||'',st=null;
if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=to+sf;return}
(function f(ts){st=st||ts;var p=Math.min((ts-st)/1200,1);el.textContent=Math.round(to*p)+sf;if(p<1)requestAnimationFrame(f)})(performance.now())})},{threshold:.5});
[].forEach.call(d.querySelectorAll('[data-to]'),function(n){io.observe(n)});
// quiz
var Q=[
['Siapa yang memperkenalkan istilah "artificial intelligence" lewat workshop di Dartmouth pada 1956?',['Alan Turing','John McCarthy dan rekan-rekannya','Geoffrey Hinton','Elon Musk'],1,'Istilah ini diusulkan dalam proposal workshop Dartmouth yang diprakarsai John McCarthy.'],
['Arsitektur apa yang menjadi dasar hampir semua model bahasa besar masa kini?',['Perceptron','Sistem pakar','Transformer','Pohon keputusan'],2,'Transformer diperkenalkan pada 2017 lewat makalah "Attention Is All You Need".'],
['Menurut AI Index 2026, berapa kali kejadian AI yang terdokumentasi pada 2025?',['233','362','88','1.000'],1,'Jumlahnya naik dari 233 pada 2024 menjadi 362 pada 2025.'],
['Mana yang termasuk contoh machine learning?',['Kalkulator biasa','Filter spam yang belajar dari contoh email','Lampu lalu lintas berpewaktu tetap','Mesin ketik'],1,'Filter spam belajar pola dari data, bukan dari aturan yang ditulis satu per satu.']];
var qi=0,sc=0,box=d.getElementById('quiz');
function rq(){if(qi>=Q.length){box.innerHTML='<div class="q">Skor kamu: '+sc+' dari '+Q.length+'</div><p>'+(sc===Q.length?'Sempurna!':sc>=2?'Bagus, baca ulang bagian yang terlewat.':'Coba baca lagi artikel di atas lalu ulangi kuis.')+'</p><button class="btn" id="re">Ulangi kuis</button>';d.getElementById('re').onclick=function(){qi=0;sc=0;rq()};return}
var q=Q[qi];box.innerHTML='<div class="q">'+(qi+1)+'/'+Q.length+'. '+q[0]+'</div>';
q[1].forEach(function(o,i){var b=d.createElement('button');b.className='opt';b.textContent=o;b.onclick=function(){
[].forEach.call(box.querySelectorAll('.opt'),function(x,j){x.disabled=true;if(j===q[2])x.classList.add('ok')});
if(i===q[2])sc++;else b.classList.add('no');
var p=d.createElement('p');p.className='note';p.textContent=q[3];box.appendChild(p);
var n=d.createElement('button');n.className='btn';n.textContent=qi===Q.length-1?'Lihat skor':'Lanjut';n.onclick=function(){qi++;rq()};box.appendChild(n);n.focus()};box.appendChild(b)})}
rq();
})();
