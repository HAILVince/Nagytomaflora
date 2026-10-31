/*
 * Everything you are likely to edit lives in this file.
 *
 *  1. gate   - the song-lyrics lock. Generate `answer` with tools/make-gate.cjs
 *  2. party  - when / where. Leave a field as null to keep it a secret.
 *  3. photos - add a photo: drop the file in assets/photos and add one line.
 */
window.FLORA_CONFIG = {
  birth: { year: 2005, month: 10, day: 28 },

  /* ---------------------------------------------------------------- 1. GATE
   * One entry = one screen she has to get through. `prompt` is shown above the
   * text box, `hint` appears after a wrong try, `answer` is the hashed lyrics.
   *
   * ⚠ TEST GATE: replace this with the real song (see README.md).
   */
  gate: {
    steps: [
      {
        prompt: {
          hu: 'Próbakapu: írd be, hogy „lángolj, gyertya, lángolj”.',
          en: 'Test gate: type “lángolj, gyertya, lángolj”.'
        },
        hint: {
          hu: 'Három szó, a középső a gyertya.',
          en: 'Three words, and the middle one is “gyertya”.'
        },
        answer: ['ck2yyf38ym', '8nb55hswqq', 'ck2yyf38ym']
      }
    ]
  },

  /* ---------------------------------------------------------------- 2. PARTY
   * Fill these in when the details are fixed, e.g.
   *   when:  { hu: '2026. november 7., szombat, 18:00', en: 'Saturday 7 November 2026, 6 pm' },
   *   where: { hu: 'A kert végében', en: 'At the end of the garden' },
   *   note:  { hu: 'Hozz meleg pulóvert.', en: 'Bring a warm jumper.' },
   *   mapUrl: 'https://maps.google.com/?q=...'
   */
  party: {
    when: null,
    where: null,
    note: null,
    mapUrl: null
  },

  /* --------------------------------------------------------------- 3. PHOTOS
   * group: candle | sun | water | lens | faces   (matches the filter buttons)
   * w / h: pixel size of the file, so the page does not jump while loading.
   */
  photos: [
    { src: 'assets/photos/candle-1.jpg', w: 1600, h: 1066, group: 'candle',
      alt: { hu: 'Flóra mosolyog, két kezében gyertyát tart a sötétben.', en: 'Flóra smiling in the dark, holding a candle in both hands.' },
      cap: { hu: 'Egy láng, két szem, nagyon sok csend.', en: 'One flame, two eyes, a lot of quiet.' } },
    { src: 'assets/photos/candle-2.jpg', w: 1066, h: 1600, group: 'candle',
      alt: { hu: 'Flóra törökülésben ül, előtte gyertyák égnek.', en: 'Flóra sitting cross-legged with candles burning in front of her.' },
      cap: { hu: 'Törökülésben, a gyertyák mellett.', en: 'Cross-legged beside the candles.' } },
    { src: 'assets/photos/candle-3.jpg', w: 1066, h: 1600, group: 'candle',
      alt: { hu: 'Flóra oldalra nézve mosolyog, kezében gyertyával.', en: 'Flóra smiling sideways at the camera, a candle in her hand.' },
      cap: { hu: 'Féloldalas mosoly és egy gyertya.', en: 'A sideways smile and a candle.' } },
    { src: 'assets/photos/candle-4.jpg', w: 1066, h: 1600, group: 'candle',
      alt: { hu: 'Flóra a gyertyafényben, a kamerába néz.', en: 'Flóra in candlelight, looking into the camera.' },
      cap: { hu: 'A gyertya tudja a titkodat.', en: 'The candle knows your secret.' } },

    { src: 'assets/photos/sun-1.jpg', w: 1599, h: 1066, group: 'sun',
      alt: { hu: 'Flóra a tengerparti falon ül, arcát a nap felé fordítja.', en: 'Flóra sitting on a seaside wall, face turned up to the sun.' },
      cap: { hu: 'Napozás a tenger fölött.', en: 'Soaking up the sun above the sea.' } },
    { src: 'assets/photos/sun-2.jpg', w: 1066, h: 1599, group: 'sun',
      alt: { hu: 'Flóra lehunyt szemmel dől hátra a tengerparti falon.', en: 'Flóra leaning back on the seaside wall with her eyes closed.' },
      cap: { hu: 'Lehunyt szem, tele napfény.', en: 'Eyes closed, full of sunshine.' } },
    { src: 'assets/photos/sun-3.jpg', w: 1599, h: 1066, group: 'sun',
      alt: { hu: 'Flóra nevetve hátrahajtja a fejét, mögötte a tenger és a hegyek.', en: 'Flóra laughing with her head tipped back, sea and mountains behind her.' },
      cap: { hu: 'A legnagyobb mosoly.', en: 'The biggest smile.' } },
    { src: 'assets/photos/sun-4.jpg', w: 1599, h: 1066, group: 'sun',
      alt: { hu: 'Flóra mosolyog egy csendes utcán, copfjában gyöngyökkel.', en: 'Flóra smiling on a quiet street, beads in her braids.' },
      cap: { hu: 'Egy csendes utca, és te vigyorogsz.', en: 'A quiet street, and you grinning.' } },

    { src: 'assets/photos/water-1.webp', w: 1920, h: 1080, group: 'water',
      alt: { hu: 'Flóra a kavicsos part sekély vizében fekszik.', en: 'Flóra lying in the shallow water of a pebble beach.' },
      cap: { hu: 'A kavicsos part sekély vizében.', en: 'In the shallows of the pebble beach.' } },
    { src: 'assets/photos/water-2.webp', w: 1920, h: 1080, group: 'water',
      alt: { hu: 'Flóra a vízből két békejelet mutat a kamerának.', en: 'Flóra in the water holding up two peace signs.' },
      cap: { hu: 'Béke és szeretet a tenger közepéről.', en: 'Peace and love from the middle of the sea.' } },
    { src: 'assets/photos/water-3.webp', w: 1920, h: 1080, group: 'water',
      alt: { hu: 'Flóra hanyatt lebeg a vízen, kavicsok a mellkasán.', en: 'Flóra floating on her back with pebbles on her chest.' },
      cap: { hu: 'Lebegés kavicsokkal.', en: 'Floating with pebbles.' } },
    { src: 'assets/photos/water-4.webp', w: 1920, h: 1080, group: 'water',
      alt: { hu: 'Flóra a vízben egy kis követ vizsgál.', en: 'Flóra in the water inspecting a small stone.' },
      cap: { hu: 'Nagy felfedezés a vízben.', en: 'A big discovery in the water.' } },

    { src: 'assets/photos/lens-1.webp', w: 1920, h: 1080, group: 'lens',
      alt: { hu: 'Flóra egy korlátra támaszkodva fényképez.', en: 'Flóra leaning over a railing to take a photo.' },
      cap: { hu: 'Lehajolsz, hogy jó legyen a kép.', en: 'Bending down to get the shot right.' } },
    { src: 'assets/photos/lens-2.webp', w: 1920, h: 1080, group: 'lens',
      alt: { hu: 'Flóra nevet, kezében a Nikon fényképezőgépével.', en: 'Flóra laughing with her Nikon in her hands.' },
      cap: { hu: 'Kamerával a kézben, játékos kedvben.', en: 'Camera in hand, in a playful mood.' } },
    { src: 'assets/photos/lens-3.webp', w: 1920, h: 1080, group: 'lens',
      alt: { hu: 'Flóra a szeméhez emeli a fényképezőgépet.', en: 'Flóra raising her camera to her eye.' },
      cap: { hu: 'Fókuszban a világ.', en: 'The world, in focus.' } },
    { src: 'assets/photos/lens-4.webp', w: 1920, h: 1080, group: 'lens',
      alt: { hu: 'Flóra az autóban fényképez.', en: 'Flóra taking a photo from inside a car.' },
      cap: { hu: 'Útközben is kattintasz.', en: 'Clicking away on the road.' } },
    { src: 'assets/photos/lens-5.webp', w: 1920, h: 1080, group: 'lens',
      alt: { hu: 'Flóra fényképez egy úttest mellett, zöld fejkendőben.', en: 'Flóra taking a photo beside a road, in a green headscarf.' },
      cap: { hu: 'Egy pihenőhely, egy kamera, aranyló fény.', en: 'A rest stop, a camera, golden light.' } },

    { src: 'assets/photos/gold-1.webp', w: 1920, h: 1080, group: 'faces',
      alt: { hu: 'Közeli kép Flóráról sárga fényben.', en: 'Close-up of Flóra in warm yellow light.' },
      cap: { hu: 'Aranyszínű fény, kíváncsi szem.', en: 'Golden light, curious eyes.' } },
    { src: 'assets/photos/pose-1.webp', w: 1920, h: 1080, group: 'faces',
      alt: { hu: 'Flóra lehunyt szemmel, mosolyogva az álla alá teszi a kezét.', en: 'Flóra with closed eyes and a smile, one hand under her chin.' },
      cap: { hu: 'Egy póz, ahogy csak te tudod.', en: 'A pose only you can pull off.' } },
    { src: 'assets/photos/pose-2.webp', w: 1920, h: 1080, group: 'faces',
      alt: { hu: 'Flóra két békejelet tart a szeme elé.', en: 'Flóra holding two peace signs up to her eyes.' },
      cap: { hu: 'Mindent látok.', en: 'I see everything.' } }
  ]
};
