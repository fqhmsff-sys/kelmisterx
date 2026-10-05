const facts=[
'AI digunakan pada chatbot.',
'AI membantu penerjemahan bahasa.',
'AI dipakai dalam rekomendasi video dan musik.',
'AI membantu analisis citra medis.',
'AI digunakan pada kendaraan otonom.'
];
function newFact(){fact.innerText=facts[Math.floor(Math.random()*facts.length)]}

document.getElementById('themeBtn').onclick=()=>document.body.classList.toggle('dark');

window.onscroll=()=>{
let h=document.documentElement;
let p=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
document.getElementById('progress').style.width=p+'%';
};

const quiz=[
{q:'AI singkatan dari?',a:['Artificial Intelligence','Automatic Internet'],c:0},
{q:'Turing Test diperkenalkan tahun?',a:['1950','2000'],c:0},
{q:'Machine Learning belajar dari?',a:['Data','Baterai'],c:0}
];
let idx=0,score=0;
function load(){
if(idx>=quiz.length){document.getElementById('score').innerText='Skor: '+score+'/'+quiz.length;return;}
q.innerText=quiz[idx].q;
answers.innerHTML='';
quiz[idx].a.forEach((t,i)=>{
let b=document.createElement('button');
b.innerText=t;
b.onclick=()=>{if(i===quiz[idx].c)score++;idx++;load();};
answers.appendChild(b);
});
}
load();