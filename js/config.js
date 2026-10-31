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
   * One entry = one screen she has to get through. For every step:
   *   prompt  what the box asks for
   *   clue    the line she sees (same text in Hungarian and English)
   *   hint    shown after a wrong try
   *   answer  the hashed answer, made with tools/make-gate.cjs (never plain text)
   *   reveal  shown after a right answer: cover image (or 'art:record' /
   *           'art:birthday' for the built-in artwork), title, artist, note
   * Typos, missing accents, capitals and spacing are all forgiven.
   */
  gate: {
    steps: [
      {
        prompt: { hu: 'Írd le a dal következő sorát:', en: 'Write the next line of the song:' },
        clue: 'Gondoltam egye fene, elindulok haza fele',
        hint: { hu: 'Az előadó: Tankcsapda.', en: 'The artist: Tankcsapda.' },
        answer: {"w":["1s4u0s2,237ruo,5iods1,ncs843,1seo8bi,1ele49y,76w07h,fov7c1,1s2qccl,we5zqi,tjxx5a,paorvf,13gx1tz,yva04p,1un7qxg,3l5bs2,gid9tg,17uf7ii,1ur9m7q,moqcub,svj4v8,1dz6gwv,jmar9g,5tdpbn,1wuh0jz,1gxi7,1dzxwtt,lbv3fm,rkn71h,177trcn,ecbzpv,qh0tg,1vn9e8r,ggpnhk,sbxbr3,1clu962","8990g7,f01px4,12beia8,tjluy","1fe7df6,wlbxmx,z0hv8o,18r8oil,1d7dcey,b6qe5r","vm9k3r,tp1uo5,457z9d,4v7uxn,1eqiqlc,qz931q,1lai6lz,u599oy,67gwz,gpia3u,13sc14d,1jwl7q7,ppfdx2,1crw9pb,1w5fsk9,tdc5ku,11nqbe3"],"l":"11awkti,12352z1,1nrd5zl,c8q6o6,iwoiv0,y2fc55,mqz4ti,1m7ltov,1qe9mab,17m8s6m,ov5ze2,tu48bv,gee5d6,8ap99o,17xwf8o,d3ywn,1bhw2d0,1jtedg0,s0ts2c,74lnb8,14v75z3,qp3mov"},
        reveal: { cover: 'assets/covers/irgalom-nelkul.webp', title: 'Irgalom Nélkül', artist: 'Tankcsapda' }
      },
      {
        prompt: { hu: 'Írd le a dal következő sorát:', en: 'Write the next line of the song:' },
        clue: 'Az ajkad nézem, a rúzsod az olyan valami',
        hint: { hu: 'Az előadó: Elefánt.', en: 'The artist: Elefánt.' },
        answer: {"w":["190jpbl,x15fzi,qphujf,2rw5wy,z6m555","1ji0wla,sioqsq,vub1r,65yl07,1pdrads,1f1gz5r,11e6ayq,1s87tzz,1mhvst,x32q5p,1e83xkz,bnttjv,1q31gcw,71vbnx,13077ap,jhibv1,1jv9ioa,uwagnb,ykndz7,1f51itj,pbpk88,1l02wiw","eqzno3","aj448y,1w8x8z3,1woa50u,1kg0kkm,13j9y8g,pbe7wh,1mift9p,1v04v1b,11cmmik,1jzfwps,148naw3,1peraco,1vpbqq9,arhryi,2m4q4z,b6nh5f,1cq3mp4,1hx7olf,l1lo9w,1oudi3m,hiv4vb","1gokm89,1nttlex,1eukegw,1t5bz43,vw47da,1oiswtl","9zgcg2","eqzno3","14jxzmj,1a39gxm,5x8lg2,1sgxim9,1r60dyj,1f34yj1,yr242n,hkvc5t,mpb6w5,6vvacr,15qhk4s,1cgm75c,keca8s,12kqthq,1waqmwx,1awl2wm,kqep84,woflyk,1qcwlvi,289o0p,16e92w6,1mgcvq7,1klk1xz,f3dltf,4fujte,1wooty8,ivbl1e,kp64lf"],"l":"1h3zvp7,4vuxhb,klnw5o,bpd97b,hh655t,4vbjwd,1tkl7hi,zoyh7w,1lr73m2,1q5qx33,k5zmg6,v0d65e,rcwrou,1e5xe8l,1c0py7i,4ed4pq,1haxsh5,lgmm12,dlt0cl,15iju80,vlccml,8mpi7i,13u7ge6,jxh75t,jkhmon,17vqyly,wmhk9k,1qyog17,ztyu6s,1pq9yik,1toyszs,54hvki,jlyuon"},
        reveal: { cover: 'assets/covers/bordahajtogato.webp', title: 'Bordahajtogató', artist: 'Elefánt' }
      },
      {
        prompt: { hu: 'Írd le a dal következő sorát:', en: 'Write the next line of the song:' },
        clue: 'Gyere, mondd el mi a baj béb\' én figyelek rád',
        hint: { hu: 'Az előadó: Tankcsapda.', en: 'The artist: Tankcsapda.' },
        answer: {"w":["ansrhj,12zodh5,v2sxob,61vona,1x1c86o,pmhe8y,j5o03v,na2zwf,15fgdxp,1eupfqd,umn7ii,pstimr,1uq3i8y,1pyc14w,1um8fdm,73bt1m,1q2jvl8,290w1k,he9nb,bznj1y,qswxdn,1nig8v0,1vg1cg","1l8ypg5","1mmpyyz,n3bx1v,ak1loj,15d8dqg,322iv5,z77pak,15vjrl9,17rz1e0,fm7s3m,r0p6ck,1st18q6,6x0ori,1ki0109,c57zpk,cu05xu,51jhp,1cdvfkm,1g1u5wb,fps23u,citpp8,ewofav,wc0bd5","15v4nox,9ht2qx,ss5cq7,1ybl47z,1yu7wgs,1tdp1cu,p02s3x,lwsrnj,1hmdoge,1auxt2y,19rexeq,1qku3te,1gaa6kv,6rpw0u,1sh0yzj,1tlxuqr,e0pwf4,iuio0a,1sgzhjv,47zqpa,1g20hmn","tjtbaq","1wotkjq,pi4462,11xv3te,1l8ypg5","lrjvbx,wy3kqg,15aevke,1g0dgm0,cncxn4,vxpv9c,bxprsv,10lml72,1r0174p,1bgf53y,1gu5eup,1dltuhz,1spc3a,14m8ls2,e7a481,2jvv0n,1mlo65f,16b1j6b,xowthc,1okbbyq,10jhzvk,albrdv","9zgcg2","19vp5fh,2ie7jb,vdev04,1uxam7,j48vyn"],"l":"u82wy8,1mg6x7x,1k4kn2p,10zcful,b3cobr,11jp7o0,10sq4p2,hh2mho,1i3gj5a,5bke66,1aykih0,uehcbe,sijl9x,139m4nh,1vss39l,17r6dka,11kjl5h,nmh0tr,ushztt,1lucxyq,qrw7i3,cdxi45,1t75is1,dj29z8,1pt1mfe,1kh2kkw,g0b6gz,1w0eu0t,2cvi8z,qgy9g5,1i84oyd,hvwleh,5q4fxz,11k76ss,1l0uf8a,5n2w1m,1vwnbai"},
        reveal: { cover: 'assets/covers/orokke-tart.webp', title: 'Örökké Tart', artist: 'Tankcsapda' }
      },
      {
        prompt: { hu: 'Fejezd be a sort:', en: 'Finish the line:' },
        clue: 'az úgy volt hogy mindig is...',
        hint: { hu: 'Négy szó.', en: 'Four words.' },
        answer: {"w":["1p0w18h,1ty67o4,1e068x3,16sz5u4,127k2lj,xehpjp,1strmxn,12umyrq,138ur50,lw6at9,1er6dbv,li5gwg,oclwbk,15wth3o,1klr4on,1mwnnes,1mr6gc4,1iu5aie,7zc5v9,ugbmdd,iefkvg,1hw119i,1nk73le,pb5d4s,7fw1q,1xeghfn,1snqmuk,1dcbqvm,vg7q3f","190jpbl,x15fzi,qphujf,2rw5wy,z6m555","boqctj,1hvnkbc,max3p,sxujjv,g07rao","1sho0v2,1gpqnf8,3pbvi9,1ar3myj,qj5xv5"],"l":"1g5hlor,1ojerxx,gc312m,1ckml8m,16yiacq,lr85em,o3222h,ag1e02,4npun9,1k99j9q,1i1zql7,erzehw,1v0yq69,hfvzxw,czle05,1p4ji8r,hv1lig,wurwyd,sljnpv,1h5ia2v"},
        reveal: { cover: 'art:record', note: { hu: 'Ezt is tudtad!', en: 'You knew this one too!' } }
      },
      {
        prompt: { hu: 'Fejezd be a verset:', en: 'Finish the verse:' },
        clue: '21 éves lettem én, meglepetés e költemény...',
        hint: { hu: 'Egyetlen szó.', en: 'A single word.' },
        answer: {"w":["1n81ik,19gig4r,14vxg7,d3g2ku,ur2hus,so68u0,naqe7l,tcfhvz,1g481l0,3j4job,17ik2d5,1ktgb5,113bgjg,5aplkv,13ru47x,1ydx4pe,1bal9o4,3jsv1i,1acojtz,167gcm4,bt489z,1rsibij,njdod8,1r6xoc,lyfuo5,qte624,1qebmij,1i4djk1,1qrgjuu,1xybsh9,1hnuou6,1rrpesz,bseuhd,gto8x2,x8dztc,zt34h0,z8d3rc,1deuxkr,wl6u2g,1h9hf4,1rm4m00,1kq2ew2,1wwuqwh,rqubg,1a4al54,1l1vyr3,oeo6pj,1513p85,1frudrz,136r05x,yo6hxv,phwtfo,br4re0,yq07eu,wqjedl,qa3pxj,1vzwchk,12ie3d9,g1q6iw,jjc50u,1skupdv,hrjtvd,cl3cxx,1v7enay,1ip99ho,1aggh1a,1ll9u3,1aa88if,1dp3eww,10dwgqp,12oueuu,11dmvgj,1ex2hzn,356ms2,2n2fpb,1y8w8qp,8d3isy,1sz5pa,hcb90y,21u3ii,1m89qzc,1chhkcg,1sji8xx,zli2kr,brwobw,pnwei4,a8hvls,1m3ud6c,zfhs8y,abs2wm,svkix8,1ep27nx,1o8uz9c,we4639,lte2fh,zuc1xz,1ad7cit,3b9ap1,172n6y0,ss6djy,13tu2le,v4yhth,iywrgu,ryzw75,87g1o3,gso5al,v2aoy5,1mib733,1u8i0hh,13on379,csox6l,147rhfg,1ufpjbo,wul1h9,1k84v4r,twiuwp,zxywgn,1fu5axl,1uil9ya,uw4ky6,1jx02me,k92ac7,117l0ov,nrlqyd,qqpksr,1nczslf,1oek0fx,ou07zg,8d1h4s,1x98xjg,14ipfoo,j65r85,1fn3nbz,15yhf2t,izucrk,mps7ta,6eruiu,1oc44jn,1h3afbx,9it5ya,bfa304,1m3n7wh,1rfdnex,2c8ll2,48eu15,f2hvb7,e3keqf,17nwdqi,1bgrs6y,147jkps,mwns3k,1kugyge,1binrtw,vqsxsk,1p5fv91,104t86g,1ezz7yf,8384dw,1iylmxw,12rtag4,1xhvplg,qnwroh,dr2ihp,1eq3spx,4o08a3,ytmxe6,u2rq4w,mwsd85,oaf8x8,19phr3b,15r242t,1sge7g5,rohx61,1a0259m,1gysg7o,k38mx9,1fdvu54,16p5hqa,1xo3zcy,arrsfo,gz0x4g,nwepko,we34t2,9xocvd,edlkpc,x5quds,181mwq7,16upb4n,uh4oi9,1hyz24h,gf2p9e,1ogamc5,wlgyka,17070nx,2i5m42,12xrfl7,oazfv7,dmg5ri,1ntgxl8,1b55bjy,1r65n8o,10jsmo2,d09xxg,yzgdxb,1oxq1ai,1no2mat,1ods3wm,nbxcam,1xfg1g,68wesq,1culhu7,13n05or,cqsgg9,4ohu8u,jd3zvx,5jgyhi,hd8im3,1sqhtli,16w7cpg"],"l":"1n81ik,19gig4r,14vxg7,d3g2ku,ur2hus,so68u0,naqe7l,tcfhvz,1g481l0,3j4job,17ik2d5,1ktgb5"},
        reveal: { cover: 'art:birthday', title: { hu: 'Egy kis költemény', en: 'A little poem' }, artist: { hu: 'Neked írva, szeretettel', en: 'Written for you, with love' }, note: { hu: 'Ez a vers csak neked szól.', en: 'This verse is only for you.' } }
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
   * group: candle | sun | water | lens | faces | together | outdoor | everyday
   *        (matches the filter buttons; "All" mixes the groups)
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
      cap: { hu: 'Mindent látok.', en: 'I see everything.' } },

    { src: 'assets/photos/together-1.webp', w: 959, h: 1600, group: 'together',
      alt: { hu: 'Három gyerek összebújik, és egy narancssárga cicát simogat.', en: 'Three children huddled together, petting an orange cat.' },
      cap: { hu: 'Régi kép: összebújva egy cicával.', en: 'An old photo: huddled up with a cat.' } },
    { src: 'assets/photos/together-2.webp', w: 1080, h: 492, group: 'together',
      alt: { hu: 'Három ember sisakban és védőszemüvegben, fekete-piros overallban.', en: 'Three people in helmets, goggles and black-and-red suits.' },
      cap: { hu: 'Sisak fel, szemüveg le, indulás!', en: 'Helmets on, goggles down, let’s go!' } },
    { src: 'assets/photos/together-3.webp', w: 1080, h: 1440, group: 'together',
      alt: { hu: 'Flóra mosolyogva ül egy tavi stégen egy hunyorító társa mellett.', en: 'Flóra smiling on a lake jetty next to someone winking at the camera.' },
      cap: { hu: 'Stégen, nyári fényben.', en: 'On the jetty, in summer light.' } },
    { src: 'assets/photos/together-4.webp', w: 1200, h: 1600, group: 'together',
      alt: { hu: 'Flóra mosolyog az autóban, mellette valaki durcás arcot vág a vállára dőlve.', en: 'Flóra smiling in a car while someone pouts, head resting on her shoulder.' },
      cap: { hu: 'Útitárs a válladon.', en: 'A travel buddy on your shoulder.' } },
    { src: 'assets/photos/together-5.webp', w: 807, h: 1600, group: 'together',
      alt: { hu: 'Elmosódott közeli kép egy videóhívásról, pillangós szűrővel.', en: 'A blurry close-up from a video call, with a butterfly filter.' },
      cap: { hu: 'Videóhívás pillangókkal.', en: 'A video call with butterflies.' } },
    { src: 'assets/photos/out-1.webp', w: 1200, h: 1600, group: 'outdoor',
      alt: { hu: 'Flóra mezítláb ül egy mászófal tetején a kék ég előtt.', en: 'Flóra sitting barefoot on top of a climbing wall against a blue sky.' },
      cap: { hu: 'Fent, a mászófogások fölött.', en: 'Up top, above the climbing holds.' } },
    { src: 'assets/photos/out-2.webp', w: 1200, h: 1600, group: 'outdoor',
      alt: { hu: 'Flóra mosolyogva fordul hátra a napsütésben, egy mászófalon ül.', en: 'Flóra turning back with a smile in the sunshine, sitting on a climbing wall.' },
      cap: { hu: 'Napfény a fák között.', en: 'Sunlight through the trees.' } },
    { src: 'assets/photos/out-3.webp', w: 1200, h: 1600, group: 'outdoor',
      alt: { hu: 'Flóra összetett kézzel, mosolyogva áll egy parkban, egy nagy fekete karika előtt.', en: 'Flóra smiling with her hands pressed together in a park, in front of a large black hoop.' },
      cap: { hu: 'Egyensúly, béke és egy nagy karika.', en: 'Balance, peace and a very large hoop.' } },
    { src: 'assets/photos/out-4.webp', w: 1200, h: 1600, group: 'outdoor',
      alt: { hu: 'Flóra hosszú, zöld mintás ruhában áll egy ruhapiacon, napfényben.', en: 'Flóra in a long green patterned dress at a clothes market in the sun.' },
      cap: { hu: 'A piac legszebb ruhája.', en: 'The best dress at the market.' } },
    { src: 'assets/photos/day-1.webp', w: 736, h: 1478, group: 'everyday',
      alt: { hu: 'Flóra egy ágyon fekszik, párnát ölel, a szekrény előtt egy rajzolt kis lény látszik.', en: 'Flóra lying on a bed hugging a pillow, with a small cartoon creature by the wardrobe.' },
      cap: { hu: 'Pihenő, váratlan vendéggel.', en: 'A rest, with an unexpected visitor.' } },
    { src: 'assets/photos/day-2.webp', w: 1200, h: 1600, group: 'everyday',
      alt: { hu: 'Flóra nevetve ül egy függöny mellett, rózsaszín pulóverben.', en: 'Flóra laughing beside a curtain in a pink sweater.' },
      cap: { hu: 'Nevetés, ahogy jön.', en: 'Laughter, just as it comes.' } },
    { src: 'assets/photos/day-3.webp', w: 1200, h: 1600, group: 'everyday',
      alt: { hu: 'Flóra az állát a kezén pihentetve mosolyog egy étteremben, előtte két papírpohár.', en: 'Flóra resting her chin on her hands in a café, two paper cups in front of her.' },
      cap: { hu: 'Hej! Egy kis szünet.', en: 'Hej! A little break.' } },
    { src: 'assets/photos/day-4.webp', w: 1200, h: 1600, group: 'everyday',
      alt: { hu: 'Flóra hátizsákkal, hátrafordulva, nyelvet öltve egy bevásárlóközpontban.', en: 'Flóra with a backpack, turning back and sticking her tongue out in a shopping centre.' },
      cap: { hu: 'Hátizsákkal, mindig úton.', en: 'Backpack on, always on the move.' } },
    { src: 'assets/photos/day-5.webp', w: 1200, h: 1600, group: 'everyday',
      alt: { hu: 'Flóra a vonatablaknak dől, kint elmosódott zöld táj suhan el.', en: 'Flóra leaning on a train window while a blurred green landscape rushes by.' },
      cap: { hu: 'Zöld táj, vonatablak, mosoly.', en: 'Green landscape, train window, smile.' } },
    { src: 'assets/photos/day-6.webp', w: 1200, h: 1600, group: 'everyday',
      alt: { hu: 'Flóra fülhallgatóval ül a vonaton, a telefonját nézi.', en: 'Flóra on a train with earphones in, looking at her phone.' },
      cap: { hu: 'Fülesben, úton.', en: 'Earbuds in, on the way.' } },
    { src: 'assets/photos/day-7.webp', w: 1200, h: 1600, group: 'everyday',
      alt: { hu: 'Flóra lehunyt szemmel mosolyog egy vízparti étteremben, kezében egy darab kenyérrel.', en: 'Flóra smiling with closed eyes at a waterside restaurant, a piece of bread in her hand.' },
      cap: { hu: 'Ez a falat nagyon ízlik.', en: 'This bite is delicious.' } },
    { src: 'assets/photos/faces-1.webp', w: 738, h: 1600, group: 'faces',
      alt: { hu: 'Közeli szelfi Flóráról fehér ingben, finom mosollyal.', en: 'Close-up selfie of Flóra in a white shirt with a gentle smile.' },
      cap: { hu: 'Csendes mosoly, nyugodt tekintet.', en: 'A quiet smile, a calm gaze.' } },
    { src: 'assets/photos/faces-2.webp', w: 900, h: 1600, group: 'faces',
      alt: { hu: 'Közeli szelfi Flóráról kócos hajjal, higgadt arckifejezéssel.', en: 'Close-up selfie of Flóra with tousled hair and a calm, deadpan face.' },
      cap: { hu: 'Kócos haj, teljes méltóság.', en: 'Messy hair, total dignity.' } }
  ]
};
