/*
 * Everything you are likely to edit lives in this file.
 *
 *  1. gate   - the song-lyrics lock. Generate `answer` with tools/make-gate.cjs
 *  2. photos - add a photo: drop the file in assets/photos and add one line.
 */
window.FLORA_CONFIG = {
  birth: { year: 2005, month: 10, day: 28 },

  /* ---------------------------------------------------------------- 1. GATE
   * One entry = one screen she has to get through. For every step:
   *   prompt  what the box asks for
   *   clue    the line she sees
   *   hint    shown after a wrong try
   *   answer  the hashed answer, made with tools/make-gate.cjs (never plain text)
   *   reveal  shown after a right answer: cover image (or 'art:record' /
   *           'art:birthday' for the built-in artwork), title, artist, note
   * Typos, missing accents, capitals and spacing are all forgiven.
   */
  gate: {
    steps: [
      {
        prompt: 'Írd le a dal következő sorát:',
        clue: 'Gondoltam egye fene, elindulok haza fele',
        hint: 'Az előadó: Tankcsapda.',
        answer: {"w":["1s4u0s2,237ruo,5iods1,ncs843,1seo8bi,1ele49y,76w07h,fov7c1,1s2qccl,we5zqi,tjxx5a,paorvf,13gx1tz,yva04p,1un7qxg,3l5bs2,gid9tg,17uf7ii,1ur9m7q,moqcub,svj4v8,1dz6gwv,jmar9g,5tdpbn,1wuh0jz,1gxi7,1dzxwtt,lbv3fm,rkn71h,177trcn,ecbzpv,qh0tg,1vn9e8r,ggpnhk,sbxbr3,1clu962","8990g7,f01px4,12beia8,tjluy","1fe7df6,wlbxmx,z0hv8o,18r8oil,1d7dcey,b6qe5r","vm9k3r,tp1uo5,457z9d,4v7uxn,1eqiqlc,qz931q,1lai6lz,u599oy,67gwz,gpia3u,13sc14d,1jwl7q7,ppfdx2,1crw9pb,1w5fsk9,tdc5ku,11nqbe3"],"l":"11awkti,12352z1,1nrd5zl,c8q6o6,iwoiv0,y2fc55,mqz4ti,1m7ltov,1qe9mab,17m8s6m,ov5ze2,tu48bv,gee5d6,8ap99o,17xwf8o,d3ywn,1bhw2d0,1jtedg0,s0ts2c,74lnb8,14v75z3,qp3mov"},
        reveal: { cover: 'assets/covers/irgalom-nelkul.webp', title: 'Irgalom Nélkül', artist: 'Tankcsapda' }
      },
      {
        prompt: 'Írd le a dal következő sorát:',
        clue: 'Az ajkad nézem, a rúzsod az olyan valami',
        hint: 'Az előadó: Elefánt.',
        answer: {"w":["190jpbl,x15fzi,qphujf,2rw5wy,z6m555","1ji0wla,sioqsq,vub1r,65yl07,1pdrads,1f1gz5r,11e6ayq,1s87tzz,1mhvst,x32q5p,1e83xkz,bnttjv,1q31gcw,71vbnx,13077ap,jhibv1,1jv9ioa,uwagnb,ykndz7,1f51itj,pbpk88,1l02wiw","eqzno3","aj448y,1w8x8z3,1woa50u,1kg0kkm,13j9y8g,pbe7wh,1mift9p,1v04v1b,11cmmik,1jzfwps,148naw3,1peraco,1vpbqq9,arhryi,2m4q4z,b6nh5f,1cq3mp4,1hx7olf,l1lo9w,1oudi3m,hiv4vb","1gokm89,1nttlex,1eukegw,1t5bz43,vw47da,1oiswtl","9zgcg2","eqzno3","14jxzmj,1a39gxm,5x8lg2,1sgxim9,1r60dyj,1f34yj1,yr242n,hkvc5t,mpb6w5,6vvacr,15qhk4s,1cgm75c,keca8s,12kqthq,1waqmwx,1awl2wm,kqep84,woflyk,1qcwlvi,289o0p,16e92w6,1mgcvq7,1klk1xz,f3dltf,4fujte,1wooty8,ivbl1e,kp64lf"],"l":"1h3zvp7,4vuxhb,klnw5o,bpd97b,hh655t,4vbjwd,1tkl7hi,zoyh7w,1lr73m2,1q5qx33,k5zmg6,v0d65e,rcwrou,1e5xe8l,1c0py7i,4ed4pq,1haxsh5,lgmm12,dlt0cl,15iju80,vlccml,8mpi7i,13u7ge6,jxh75t,jkhmon,17vqyly,wmhk9k,1qyog17,ztyu6s,1pq9yik,1toyszs,54hvki,jlyuon"},
        reveal: { cover: 'assets/covers/bordahajtogato.webp', title: 'Bordahajtogató', artist: 'Elefánt' }
      },
      {
        prompt: 'Írd le a dal következő sorát:',
        clue: 'Gyere, mondd el mi a baj béb\' én figyelek rád',
        hint: 'Az előadó: Tankcsapda.',
        answer: {"w":["ansrhj,12zodh5,v2sxob,61vona,1x1c86o,pmhe8y,j5o03v,na2zwf,15fgdxp,1eupfqd,umn7ii,pstimr,1uq3i8y,1pyc14w,1um8fdm,73bt1m,1q2jvl8,290w1k,he9nb,bznj1y,qswxdn,1nig8v0,1vg1cg","1l8ypg5","1mmpyyz,n3bx1v,ak1loj,15d8dqg,322iv5,z77pak,15vjrl9,17rz1e0,fm7s3m,r0p6ck,1st18q6,6x0ori,1ki0109,c57zpk,cu05xu,51jhp,1cdvfkm,1g1u5wb,fps23u,citpp8,ewofav,wc0bd5","15v4nox,9ht2qx,ss5cq7,1ybl47z,1yu7wgs,1tdp1cu,p02s3x,lwsrnj,1hmdoge,1auxt2y,19rexeq,1qku3te,1gaa6kv,6rpw0u,1sh0yzj,1tlxuqr,e0pwf4,iuio0a,1sgzhjv,47zqpa,1g20hmn","tjtbaq","1wotkjq,pi4462,11xv3te,1l8ypg5","lrjvbx,wy3kqg,15aevke,1g0dgm0,cncxn4,vxpv9c,bxprsv,10lml72,1r0174p,1bgf53y,1gu5eup,1dltuhz,1spc3a,14m8ls2,e7a481,2jvv0n,1mlo65f,16b1j6b,xowthc,1okbbyq,10jhzvk,albrdv","9zgcg2","19vp5fh,2ie7jb,vdev04,1uxam7,j48vyn"],"l":"u82wy8,1mg6x7x,1k4kn2p,10zcful,b3cobr,11jp7o0,10sq4p2,hh2mho,1i3gj5a,5bke66,1aykih0,uehcbe,sijl9x,139m4nh,1vss39l,17r6dka,11kjl5h,nmh0tr,ushztt,1lucxyq,qrw7i3,cdxi45,1t75is1,dj29z8,1pt1mfe,1kh2kkw,g0b6gz,1w0eu0t,2cvi8z,qgy9g5,1i84oyd,hvwleh,5q4fxz,11k76ss,1l0uf8a,5n2w1m,1vwnbai"},
        reveal: { cover: 'assets/covers/orokke-tart.webp', title: 'Örökké Tart', artist: 'Tankcsapda' }
      },
      {
        prompt: 'Fejezd be a sort:',
        clue: 'az úgy volt hogy mindig is...',
        hint: 'Az előadó: Elefánt.',
        answer: {"w":["1p0w18h,1ty67o4,1e068x3,16sz5u4,127k2lj,xehpjp,1strmxn,12umyrq,138ur50,lw6at9,1er6dbv,li5gwg,oclwbk,15wth3o,1klr4on,1mwnnes,1mr6gc4,1iu5aie,7zc5v9,ugbmdd,iefkvg,1hw119i,1nk73le,pb5d4s,7fw1q,1xeghfn,1snqmuk,1dcbqvm,vg7q3f","190jpbl,x15fzi,qphujf,2rw5wy,z6m555","boqctj,1hvnkbc,max3p,sxujjv,g07rao","1sho0v2,1gpqnf8,3pbvi9,1ar3myj,qj5xv5"],"l":"1g5hlor,1ojerxx,gc312m,1ckml8m,16yiacq,lr85em,o3222h,ag1e02,4npun9,1k99j9q,1i1zql7,erzehw,1v0yq69,hfvzxw,czle05,1p4ji8r,hv1lig,wurwyd,sljnpv,1h5ia2v"},
        reveal: { cover: 'art:record', title: 'Sokáig vártalak', artist: 'Elefánt', note: 'Ezt is tudtad!' }
      },
      {
        prompt: 'Fejezd be a verset:',
        clue: '21 éves lettem én, meglepetés e költemény...',
        hint: 'Egyetlen szó.',
        answer: {"w":["1n81ik,19gig4r,14vxg7,d3g2ku,ur2hus,so68u0,naqe7l,tcfhvz,1g481l0,3j4job,17ik2d5,1ktgb5,113bgjg,5aplkv,13ru47x,1ydx4pe,1bal9o4,3jsv1i,1acojtz,167gcm4,bt489z,1rsibij,njdod8,1r6xoc,lyfuo5,qte624,1qebmij,1i4djk1,1qrgjuu,1xybsh9,1hnuou6,1rrpesz,bseuhd,gto8x2,x8dztc,zt34h0,z8d3rc,1deuxkr,wl6u2g,1h9hf4,1rm4m00,1kq2ew2,1wwuqwh,rqubg,1a4al54,1l1vyr3,oeo6pj,1513p85,1frudrz,136r05x,yo6hxv,phwtfo,br4re0,yq07eu,wqjedl,qa3pxj,1vzwchk,12ie3d9,g1q6iw,jjc50u,1skupdv,hrjtvd,cl3cxx,1v7enay,1ip99ho,1aggh1a,1ll9u3,1aa88if,1dp3eww,10dwgqp,12oueuu,11dmvgj,1ex2hzn,356ms2,2n2fpb,1y8w8qp,8d3isy,1sz5pa,hcb90y,21u3ii,1m89qzc,1chhkcg,1sji8xx,zli2kr,brwobw,pnwei4,a8hvls,1m3ud6c,zfhs8y,abs2wm,svkix8,1ep27nx,1o8uz9c,we4639,lte2fh,zuc1xz,1ad7cit,3b9ap1,172n6y0,ss6djy,13tu2le,v4yhth,iywrgu,ryzw75,87g1o3,gso5al,v2aoy5,1mib733,1u8i0hh,13on379,csox6l,147rhfg,1ufpjbo,wul1h9,1k84v4r,twiuwp,zxywgn,1fu5axl,1uil9ya,uw4ky6,1jx02me,k92ac7,117l0ov,nrlqyd,qqpksr,1nczslf,1oek0fx,ou07zg,8d1h4s,1x98xjg,14ipfoo,j65r85,1fn3nbz,15yhf2t,izucrk,mps7ta,6eruiu,1oc44jn,1h3afbx,9it5ya,bfa304,1m3n7wh,1rfdnex,2c8ll2,48eu15,f2hvb7,e3keqf,17nwdqi,1bgrs6y,147jkps,mwns3k,1kugyge,1binrtw,vqsxsk,1p5fv91,104t86g,1ezz7yf,8384dw,1iylmxw,12rtag4,1xhvplg,qnwroh,dr2ihp,1eq3spx,4o08a3,ytmxe6,u2rq4w,mwsd85,oaf8x8,19phr3b,15r242t,1sge7g5,rohx61,1a0259m,1gysg7o,k38mx9,1fdvu54,16p5hqa,1xo3zcy,arrsfo,gz0x4g,nwepko,we34t2,9xocvd,edlkpc,x5quds,181mwq7,16upb4n,uh4oi9,1hyz24h,gf2p9e,1ogamc5,wlgyka,17070nx,2i5m42,12xrfl7,oazfv7,dmg5ri,1ntgxl8,1b55bjy,1r65n8o,10jsmo2,d09xxg,yzgdxb,1oxq1ai,1no2mat,1ods3wm,nbxcam,1xfg1g,68wesq,1culhu7,13n05or,cqsgg9,4ohu8u,jd3zvx,5jgyhi,hd8im3,1sqhtli,16w7cpg"],"l":"1n81ik,19gig4r,14vxg7,d3g2ku,ur2hus,so68u0,naqe7l,tcfhvz,1g481l0,3j4job,17ik2d5,1ktgb5"},
        reveal: { cover: 'art:birthday', title: 'Egy kis költemény', artist: 'Neked írva, szeretettel', note: 'Ez a vers csak neked szól.' }
      }
    ]
  },

  /* --------------------------------------------------------------- 2. PHOTOS
   * group: candle | sun | water | lens | faces | together | outdoor | everyday
   *        (matches the filter buttons; "All" mixes the groups)
   * w / h: pixel size of the file, so the page does not jump while loading.
   * alt:   a short description of the photo for screen readers (not shown on the page).
   */
  photos: [
    { src: 'assets/photos/candle-1.jpg', w: 1600, h: 1066, group: 'candle',
      alt: 'Flóra mosolyog, két kezében gyertyát tart a sötétben.' },
    { src: 'assets/photos/candle-2.jpg', w: 1066, h: 1600, group: 'candle',
      alt: 'Flóra törökülésben ül, előtte gyertyák égnek.' },
    { src: 'assets/photos/candle-3.jpg', w: 1066, h: 1600, group: 'candle',
      alt: 'Flóra oldalra nézve mosolyog, kezében gyertyával.' },
    { src: 'assets/photos/candle-4.jpg', w: 1066, h: 1600, group: 'candle',
      alt: 'Flóra a gyertyafényben, a kamerába néz.' },

    { src: 'assets/photos/sun-1.jpg', w: 1599, h: 1066, group: 'sun',
      alt: 'Flóra a tengerparti falon ül, arcát a nap felé fordítja.' },
    { src: 'assets/photos/sun-2.jpg', w: 1066, h: 1599, group: 'sun',
      alt: 'Flóra lehunyt szemmel dől hátra a tengerparti falon.' },
    { src: 'assets/photos/sun-3.jpg', w: 1599, h: 1066, group: 'sun',
      alt: 'Flóra nevetve hátrahajtja a fejét, mögötte a tenger és a hegyek.' },
    { src: 'assets/photos/sun-4.jpg', w: 1599, h: 1066, group: 'sun',
      alt: 'Flóra mosolyog egy csendes utcán, copfjában gyöngyökkel.' },

    { src: 'assets/photos/water-1.webp', w: 1920, h: 1080, group: 'water',
      alt: 'Flóra a kavicsos part sekély vizében fekszik.' },
    { src: 'assets/photos/water-2.webp', w: 1920, h: 1080, group: 'water',
      alt: 'Flóra a vízből két békejelet mutat a kamerának.' },
    { src: 'assets/photos/water-3.webp', w: 1920, h: 1080, group: 'water',
      alt: 'Flóra hanyatt lebeg a vízen, kavicsok a mellkasán.' },
    { src: 'assets/photos/water-4.webp', w: 1920, h: 1080, group: 'water',
      alt: 'Flóra a vízben egy kis követ vizsgál.' },

    { src: 'assets/photos/lens-1.webp', w: 1920, h: 1080, group: 'lens',
      alt: 'Flóra egy korlátra támaszkodva fényképez.' },
    { src: 'assets/photos/lens-2.webp', w: 1920, h: 1080, group: 'lens',
      alt: 'Flóra nevet, kezében a Nikon fényképezőgépével.' },
    { src: 'assets/photos/lens-3.webp', w: 1920, h: 1080, group: 'lens',
      alt: 'Flóra a szeméhez emeli a fényképezőgépet.' },
    { src: 'assets/photos/lens-4.webp', w: 1920, h: 1080, group: 'lens',
      alt: 'Flóra az autóban fényképez.' },
    { src: 'assets/photos/lens-5.webp', w: 1920, h: 1080, group: 'lens',
      alt: 'Flóra fényképez egy úttest mellett, zöld fejkendőben.' },

    { src: 'assets/photos/gold-1.webp', w: 1920, h: 1080, group: 'faces',
      alt: 'Közeli kép Flóráról sárga fényben.' },
    { src: 'assets/photos/pose-1.webp', w: 1920, h: 1080, group: 'faces',
      alt: 'Flóra lehunyt szemmel, mosolyogva az álla alá teszi a kezét.' },
    { src: 'assets/photos/pose-2.webp', w: 1920, h: 1080, group: 'faces',
      alt: 'Flóra két békejelet tart a szeme elé.' },

    { src: 'assets/photos/together-1.webp', w: 959, h: 1600, group: 'together',
      alt: 'Három gyerek összebújik, és egy narancssárga cicát simogat.' },
    { src: 'assets/photos/together-2.webp', w: 1080, h: 492, group: 'together',
      alt: 'Három ember sisakban és védőszemüvegben, fekete-piros overallban.' },
    { src: 'assets/photos/together-3.webp', w: 1080, h: 1440, group: 'together',
      alt: 'Flóra mosolyogva ül egy tavi stégen egy hunyorító társa mellett.' },
    { src: 'assets/photos/together-4.webp', w: 1200, h: 1600, group: 'together',
      alt: 'Flóra mosolyog az autóban, mellette valaki durcás arcot vág a vállára dőlve.' },
    { src: 'assets/photos/together-5.webp', w: 807, h: 1600, group: 'together',
      alt: 'Elmosódott közeli kép egy videóhívásról, pillangós szűrővel.' },
    { src: 'assets/photos/out-1.webp', w: 1200, h: 1600, group: 'outdoor',
      alt: 'Flóra mezítláb ül egy mászófal tetején a kék ég előtt.' },
    { src: 'assets/photos/out-2.webp', w: 1200, h: 1600, group: 'outdoor',
      alt: 'Flóra mosolyogva fordul hátra a napsütésben, egy mászófalon ül.' },
    { src: 'assets/photos/out-3.webp', w: 1200, h: 1600, group: 'outdoor',
      alt: 'Flóra összetett kézzel, mosolyogva áll egy parkban, egy nagy fekete karika előtt.' },
    { src: 'assets/photos/out-4.webp', w: 1200, h: 1600, group: 'outdoor',
      alt: 'Flóra hosszú, zöld mintás ruhában áll egy ruhapiacon, napfényben.' },
    { src: 'assets/photos/day-1.webp', w: 736, h: 1478, group: 'everyday',
      alt: 'Flóra egy ágyon fekszik, párnát ölel, a szekrény előtt egy rajzolt kis lény látszik.' },
    { src: 'assets/photos/day-2.webp', w: 1200, h: 1600, group: 'everyday',
      alt: 'Flóra nevetve ül egy függöny mellett, rózsaszín pulóverben.' },
    { src: 'assets/photos/day-3.webp', w: 1200, h: 1600, group: 'everyday',
      alt: 'Flóra az állát a kezén pihentetve mosolyog egy étteremben, előtte két papírpohár.' },
    { src: 'assets/photos/day-4.webp', w: 1200, h: 1600, group: 'everyday',
      alt: 'Flóra hátizsákkal, hátrafordulva, nyelvet öltve egy bevásárlóközpontban.' },
    { src: 'assets/photos/day-5.webp', w: 1200, h: 1600, group: 'everyday',
      alt: 'Flóra a vonatablaknak dől, kint elmosódott zöld táj suhan el.' },
    { src: 'assets/photos/day-6.webp', w: 1200, h: 1600, group: 'everyday',
      alt: 'Flóra fülhallgatóval ül a vonaton, a telefonját nézi.' },
    { src: 'assets/photos/day-7.webp', w: 1200, h: 1600, group: 'everyday',
      alt: 'Flóra lehunyt szemmel mosolyog egy vízparti étteremben, kezében egy darab kenyérrel.' },
    { src: 'assets/photos/faces-1.webp', w: 738, h: 1600, group: 'faces',
      alt: 'Közeli szelfi Flóráról fehér ingben, finom mosollyal.' },
    { src: 'assets/photos/faces-2.webp', w: 900, h: 1600, group: 'faces',
      alt: 'Közeli szelfi Flóráról kócos hajjal, higgadt arckifejezéssel.' }
  ]
};
