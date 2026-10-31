/* All visible text (Hungarian). */
window.FLORA_I18N = {
  meta: {
    title: 'Boldog születésnapot, Flóra!',
    desc: 'Egy gyertyafényes meglepetés Nagy-Toma Flórának.'
  },
  ui: {
    soundOn: 'Hang bekapcsolva',
    soundOff: 'Hang kikapcsolva',
    close: 'Bezár',
    prev: 'Előző kép',
    next: 'Következő kép',
    skip: 'Ugrás a tartalomhoz'
  },
  gate: {
    title: 'Gyújtsd meg a gyertyát',
    lede: 'Ez az erdő csak annak nyílik meg, aki ismeri a dalokat. Folytasd a sorokat, és a gyertya magától meggyullad.',
    placeholder: 'Írd ide, ahogy a dalban hallod',
    check: 'Elküldöm',
    next: 'Tovább',
    light: 'Gyújtsd meg a gyertyát',
    right: 'Eltaláltad!',
    coverAlt: 'Album borítója: {title}',
    hintBtn: 'Kérek egy tippet',
    wrong: 'Még nem az igazi: {m} / {t} szó a helyén. Próbáld újra, a kisebb elgépelések nem számítanak.',
    empty: 'Írd be a dal szövegét, mielőtt elküldöd.',
    ok: 'Ez az! Jöhet a következő rész.',
    lit: 'A gyertya meggyulladt.',
    progress: '{n}. rész, összesen {t}'
  },
  hero: {
    title: 'Boldog {age} születésnapot, Flóra!',
    name: 'Nagy-Toma Flóra',
    date: '2005. október 28.',
    sub: 'Egy péntek, három nappal Samhain előtt: a boszorkányok újévének küszöbén érkeztél.',
    cta: 'Húzz egy lapot',
    photoAlt: 'Flóra a sötétben gyertyát tart, arcát a láng fénye világítja meg.'
  },
  tarot: {
    title: 'Húzz egy lapot',
    lede: 'Hat lap, hat dolog, amit szeretsz. Fordítsd fel őket: mindegyik mögött van egy kívánság a következő évedre.',
    flipAll: 'Fordítsd fel mind',
    hideAll: 'Fordítsd vissza mind',
    flipLabel: 'Fordítsd fel a lapot: {name}',
    unflipLabel: 'Fordítsd vissza a lapot: {name}',
    wishLead: 'Kívánság',
    cards: [
      { name: 'A Gombász',
        line: 'Kalap, tönk, spórák: a föld alatti világ titka, amit te szeretsz a legjobban.',
        wish: 'Legyen tele idén minden séta rókagombával és titkos tisztással.' },
      { name: 'Az Erdőjáró',
        line: 'Hegyi ösvények, sáros bakancs, csend és egy jó kilátás.',
        wish: 'Találj idén egy csúcsot, ahonnan mindent látsz, és egy padot, ahol jó megpihenni.' },
      { name: 'A Botanikus',
        line: 'Minden levélnek van neve, minden virágnak története. A rómaiaknál Flóra volt a virágok istennője.',
        wish: 'Nyíljon ki neked idén minden, amit elültettél, a szó minden értelmében.' },
      { name: 'A Vadszelídítő',
        line: 'Szőr, toll, pata, mancs: az állatok mindig a te oldaladra állnak.',
        wish: 'Legyen sok szőrös, tollas barátod, és legalább egy váratlan találkozás az erdőben.' },
      { name: 'A Boszorkány',
        line: 'Gyertyafény, holdnaptár, apró rituálék. A hited a csendes erőd.',
        wish: 'Teljesüljön minden, amit holdtöltekor suttogtál.' },
      { name: 'A Lencse Őrzője',
        line: 'Egy kattintás, és a pillanat örökre megmarad.',
        wish: 'Készíts idén olyan képet, amitől te magad is megállsz egy pillanatra.' }
    ]
  },
  hunt: {
    title: 'Gombászat',
    lede: 'Öt gomba bújt el az éjszakai erdőben. Koppints rájuk, ha megtaláltad őket.',
    sceneLabel: 'Éjszakai erdő, benne öt rejtett gomba',
    counter: '{n} / {t} gomba megtalálva',
    mushroomLabel: 'Egy elbújt gomba',
    foundLabel: 'Megtalálva: {name}',
    found: 'Megvan: {name}',
    unknown: 'Még rejtőzik',
    doneTitle: 'Mind az öt megvan!',
    doneText: 'Az erdő megnyílt előtted. Gombát csak akkor egyél, ha szakértő megnézte: a legszebbek közül sok mérgező, azokat elég csodálni.',
    reset: 'Rejtsd el újra',
    items: [
      { name: 'Légyölő galóca', latin: 'Amanita muscaria',
        note: 'Piros kalap, fehér pöttyök, a mesekönyvek kedvence. Gyönyörű, de mérgező: csak nézni szabad.' },
      { name: 'Rókagomba', latin: 'Cantharellus cibarius',
        note: 'Aranysárga tölcsér, az erdő kincse.' },
      { name: 'Ízletes vargánya', latin: 'Boletus edulis',
        note: 'Barna kalap, vaskos tönk: a gombák királya.' },
      { name: 'Rizike', latin: 'Lactarius deliciosus',
        note: 'Narancsszínű kalapján gyűrűk, a vágásából narancsos tej szivárog.' },
      { name: 'Gyapjas tintagomba', latin: 'Coprinus comatus',
        note: 'Fehér, kócos kalapja egy kis varázslósüveg.' }
    ]
  },
  sky: {
    title: 'A te égboltod',
    days: 'Ma {n} napja vagy a világon.',
    live: 'Ez már {n} másodperc, és közben ketyeg tovább.',
    orbits: '{n}-szor kerülted meg a Napot.',
    moons: 'Eddig kb. {n} teliholdat éltél meg.',
    friday: 'Pénteken születtél, a Skorpió jegyében. Az angol mondóka szerint a pénteki gyerek szeretetteli és nagylelkű.',
    moonCaption: 'A Hold a születésed napján: {phase}.',
    moonAlt: 'A Hold állása 2005. október 28-án',
    phases: ['újhold', 'növő sarló', 'első negyed', 'növő hold', 'telihold', 'fogyó hold', 'utolsó negyed', 'fogyó sarló']
  },
  gallery: {
    title: 'Pillanatok',
    lede: 'Gyertyafény, napsütés, tengervíz, mászófal, vonatablak és egy kamera. Kattints egy képre, hogy nagyban lásd.',
    filters: { all: 'Mind', candle: 'Gyertyafény', sun: 'Napfény', water: 'Víz', lens: 'Kamera', faces: 'Arcok', together: 'Együtt', outdoor: 'Szabadban', everyday: 'Hétköznapok' },
    filterLabel: 'Képek szűrése',
    counter: '{n} / {t}'
  },
  wish: {
    title: 'Kívánj valamit',
    lede: 'Gondolj egy kívánságra, aztán koppints a gyertyára, hogy elfújd.',
    blowLabel: 'Fújd el a gyertyát',
    done: 'A kívánságod elindult az erdő felé.',
    relight: 'Gyújtsd meg újra'
  },
  footer: {
    msg: 'Boldog születésnapot, Flóra! Szeretettel, a testvéred.',
    relock: 'Vissza a kapuhoz'
  }
};
