/* All visible text, in Hungarian (default) and English. */
window.FLORA_I18N = {
  hu: {
    meta: {
      title: 'Boldog születésnapot, Flóra!',
      desc: 'Egy gyertyafényes meglepetés Nagy-Toma Flórának.'
    },
    ui: {
      switchLang: 'Switch to English',
      langShort: 'EN',
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
      open: 'Kép megnyitása: {cap}',
      counter: '{n} / {t}'
    },
    party: {
      title: 'A buli',
      secret: 'A részletek még titkosak. Hamarosan megtudod, hol és mikor gyújtjuk meg a gyertyákat.',
      when: 'Mikor',
      where: 'Hol',
      note: 'Jó tudni',
      map: 'Megnyitás a térképen'
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
  },

  en: {
    meta: {
      title: 'Happy birthday, Flóra!',
      desc: 'A candlelit surprise for Nagy-Toma Flóra.'
    },
    ui: {
      switchLang: 'Váltás magyarra',
      langShort: 'HU',
      soundOn: 'Sound on',
      soundOff: 'Sound off',
      close: 'Close',
      prev: 'Previous photo',
      next: 'Next photo',
      skip: 'Skip to content'
    },
    gate: {
      title: 'Light the candle',
      lede: 'This forest only opens for someone who knows the songs. Finish the lines and the candle lights itself.',
      placeholder: 'Type it the way you hear it in the song',
      check: 'Send it',
      next: 'Continue',
      light: 'Light the candle',
      right: 'You got it!',
      coverAlt: 'Album cover: {title}',
      hintBtn: 'Give me a hint',
      wrong: 'Not quite yet: {m} / {t} words in place. Try again; small typos don’t matter.',
      empty: 'Type the lyrics before you send them.',
      ok: 'That’s it! On to the next part.',
      lit: 'The candle is lit.',
      progress: 'Part {n} of {t}'
    },
    hero: {
      title: 'Happy {age} birthday, Flóra!',
      name: 'Nagy-Toma Flóra',
      date: '28 October 2005',
      sub: 'A Friday, three days before Samhain: you arrived on the doorstep of the witches’ new year.',
      cta: 'Pull a card',
      photoAlt: 'Flóra holding a candle in the dark, her face lit by the flame.'
    },
    tarot: {
      title: 'Pull a card',
      lede: 'Six cards, six things you love. Turn them over: behind each one hides a wish for the year ahead.',
      flipAll: 'Turn them all over',
      hideAll: 'Turn them all back',
      flipLabel: 'Turn over the card: {name}',
      unflipLabel: 'Turn back the card: {name}',
      wishLead: 'Wish',
      cards: [
        { name: 'The Forager',
          line: 'Cap, stem, spores: the secret of the world underground, which you love best.',
          wish: 'May every walk this year be full of chanterelles and secret clearings.' },
        { name: 'The Trail Walker',
          line: 'Mountain paths, muddy boots, silence and a good view.',
          wish: 'May you find a summit where you can see everything, and a bench that is good for resting.' },
        { name: 'The Botanist',
          line: 'Every leaf has a name, every flower a story. To the Romans, Flora was the goddess of flowers.',
          wish: 'May everything you planted bloom for you this year, in every sense.' },
        { name: 'The Animal Whisperer',
          line: 'Fur, feather, hoof, paw: animals always take your side.',
          wish: 'May you have many furry and feathered friends, and at least one unexpected meeting in the woods.' },
        { name: 'The Witch',
          line: 'Candlelight, moon calendars, small rituals. Your belief is your quiet strength.',
          wish: 'May everything you whispered at the full moon come true.' },
        { name: 'The Keeper of the Lens',
          line: 'One click, and the moment stays forever.',
          wish: 'Take a picture this year that makes even you stop for a moment.' }
      ]
    },
    hunt: {
      title: 'Mushroom hunt',
      lede: 'Five mushrooms are hiding in the night forest. Tap them when you spot them.',
      sceneLabel: 'A night forest with five hidden mushrooms',
      counter: '{n} / {t} mushrooms found',
      mushroomLabel: 'A hidden mushroom',
      foundLabel: 'Found: {name}',
      found: 'Found it: {name}',
      unknown: 'Still hiding',
      doneTitle: 'All five found!',
      doneText: 'The forest has opened up for you. Only eat a mushroom after an expert has checked it: many of the prettiest are poisonous, and those are just for admiring.',
      reset: 'Hide them again',
      items: [
        { name: 'Fly agaric', latin: 'Amanita muscaria',
          note: 'Red cap, white spots, the storybook favourite. Beautiful but poisonous: look, don’t touch.' },
        { name: 'Chanterelle', latin: 'Cantharellus cibarius',
          note: 'A golden funnel, the forest’s treasure.' },
        { name: 'Porcini', latin: 'Boletus edulis',
          note: 'Brown cap, sturdy stem: the king of mushrooms.' },
        { name: 'Saffron milk cap', latin: 'Lactarius deliciosus',
          note: 'Rings on an orange cap, and orange milk when it’s cut.' },
        { name: 'Shaggy ink cap', latin: 'Coprinus comatus',
          note: 'Its white, tousled cap is a tiny wizard’s hat.' }
      ]
    },
    sky: {
      title: 'Your sky',
      days: 'Today you have been in the world for {n} days.',
      live: 'That is already {n} seconds, and still ticking.',
      orbits: 'You have gone around the Sun {n} times.',
      moons: 'So far you have lived through about {n} full moons.',
      friday: 'You were born on a Friday, under Scorpio. According to the old rhyme, Friday’s child is loving and giving.',
      moonCaption: 'The Moon on the day you were born: {phase}.',
      moonAlt: 'The phase of the Moon on 28 October 2005',
      phases: ['new moon', 'waxing crescent', 'first quarter', 'waxing gibbous', 'full moon', 'waning gibbous', 'last quarter', 'waning crescent']
    },
    gallery: {
      title: 'Moments',
      lede: 'Candlelight, sunshine, sea water, a climbing wall, train windows and a camera. Click any photo to see it bigger.',
      filters: { all: 'All', candle: 'Candlelight', sun: 'Sunshine', water: 'Water', lens: 'Camera', faces: 'Faces', together: 'Together', outdoor: 'Outdoors', everyday: 'Everyday' },
      filterLabel: 'Filter photos',
      open: 'Open photo: {cap}',
      counter: '{n} / {t}'
    },
    party: {
      title: 'The party',
      secret: 'The details are still a secret. Soon you’ll find out where and when we light the candles.',
      when: 'When',
      where: 'Where',
      note: 'Good to know',
      map: 'Open in maps'
    },
    wish: {
      title: 'Make a wish',
      lede: 'Think of a wish, then tap the candle to blow it out.',
      blowLabel: 'Blow out the candle',
      done: 'Your wish is on its way to the forest.',
      relight: 'Light it again'
    },
    footer: {
      msg: 'Happy birthday, Flóra! With love, your sibling.',
      relock: 'Back to the gate'
    }
  }
};
