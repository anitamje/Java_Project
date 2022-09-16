function Regjistrimi(name, last, Age){
    this.nameEmri = name;
    this.lastMbi = last;
    this.AgeMosha = Age;
}

 
const Personi1 = new Regjistrimi("Adhuresa" , "Sylejmani", 18);
const Personi2 = new Regjistrimi("Anita" , "Mjeku", 19);
const Personi3 = new Regjistrimi ("Ermal" , "Millaku" , 19);
Regjistrimi.prototype.pozita = "Vullnetare";
console.log(Personi2);
Regjistrimi.prototype.name = function() {
    return this.nameEmri + " " + this.lastMbi;
  };
console.log(Personi1.name());

let grupi1 = {
    emri: 'Anxiety Support Group',
    vendi: 'ORCA',
    numri_pjesemarresve: 20
}
console.log(grupi1.emri + ' i cili mbahet ne ' + grupi1.vendi + ' me ' + grupi1.numri_pjesemarresve + ' pjesemarres');

let vullnetaret = ['Adhuresa', 'Anita'];
vullnetaret[2] = 'Ermali'; 
vullnetaret[3] = 3;
console.log('Vullnetaret tone jane ' + vullnetaret);
let MuajteQeKaFilluarPunen = 7, MuajtEVitit=12 

let rezult = MuajtEVitit > MuajteQeKaFilluarPunen
console.log('Support Groups Kosova eshte organizate e re? ' + rezult);


function LlogaritPjesemarrjen (pAnxiety, pLGBT, pGRIEF){
    let pjesemarrja = pAnxiety + pLGBT + pGRIEF;

    if(pjesemarrja < 3){
        console.log('Ju nuk mund te beheni vullnetare sepse ');
    } else if (pjesemarrja == 3){
        console.log('Juve ju duhet edhe nje takim qe te beheni vullnetare sepse ');
    } else {
        console.log('Ju tashme mund te beheni vullnetare sepse ')
    }
    console.log('pjesemarrja juaj eshte ' + pjesemarrja);
}

LlogaritPjesemarrjen(3,4,5);


console.log('Sa ore ne jave ja kushtoni kujdesit per veten');
function KujdesiPerVeten (Xhere){
switch(Xhere){
    case 1:
    case 2:
    case 3:
        console.log('Eshte shume pak, ju keni nevoje per me shume kohe rreth vetes');
        break;
    case 4:
    case 5:
        console.log('Good Job! Vazhdoni te kujdeseni per veten');
        break;
    default:
        console.log('Vlera nuk ishte e kuptueshme')
}
}
KujdesiPerVeten(3);

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } 

const pagesa_per_ore = 2.4543;
let numri_i_oreve = 20;
let pagesaTotal = numri_i_oreve * pagesa_per_ore;
console.log("Pagesa per ore eshte " + pagesa_per_ore.toPrecision(4) + " dhe nese keni mbushur oret maksimale te punes rroga eshte: " + pagesaTotal)
let pagesa = pagesa_per_ore.toFixed(2);
console.log(pagesa)



function VleresoStafin (Anita, Adhuresa, Ermali){
    let StafiTotal = Math.round(Anita)+ Math.round(Adhuresa) +Math.round(Ermali);

    if(StafiTotal < 3){
        console.log('Stafi nuk eshte mjaftueshem i mire');
    } else if (StafiTotal == 3){
        console.log('Mesatar ');
    } else {
        console.log('Stafi ne rregull ')
    }

    let Vlerae_VullnetaritMeteleresuar = Math.max(Anita,Adhuresa,Ermali);
    console.log(Vlerae_VullnetaritMeteleresuar);
    let Me_pakIvleresuar = Math.min(Anita,Adhuresa,Ermali);
    console.log(Me_pakIvleresuar)
}

VleresoStafin(3.3,4.6,5.7);
