export type Review = {
  reviewId: string;
  createdAt: number;
  staffPick: boolean;
  albumName: string;
  artistName: string;
  genres: string[];
  slug: string;
  body: string;
  summary: string;
  score: number;
  artworkUrl: string;
};

export const reviews: Review[] = [
  {
    reviewId: "0eb0103e-8cec-4558-b772-0ef2b63de09f",
    slug: "khasinu-tarkat/kosmische-digitale-leere",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "Khasinu Tarkat's 'Kosmische Digitale Leere' is a mesmerizing blend of nostalgia and futurism, inviting listeners to dance through the void of technology.",
    body: "Echoes of the past and future collide in the mesmerizing soundscapes of 'Kosmische Digitale Leere', the latest offering from Melbourne-based artist 'Khasinu Tarkat'. Drawing inspiration from the experimental works of Barker and Shed, Khasinu Tarkat's minimal techno beats pulse with a sense of nostalgia, evoking memories of a time before the digital age while simultaneously pointing towards a world yet to come. The album's title, translated to 'Cosmic Digital Emptiness', speaks to the alienation and detachment that can come with living in a world where technology reigns supreme. But despite its heavy themes, 'Kosmische Digitale Leere' is not a somber or despairing listen. Instead, Khasinu Tarkat imbues his music with a sense of wonder and possibility, inviting listeners to dance their way through the void.",
    score: 8.5,
    genres: ["IDM", "Minimal techno"],
    artistName: "Khasinu Tarkat",
    albumName: "Kosmische Digitale Leere",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/8180324/cover-art-for-album-titled-kosmische-digitale-leere-from-idm,-minimal-techno-artist-in-japanese-graphic-design-style-.jpg?token=CeewOoL9kAoXdKPHJxr6-w&expires=17452381256",
  },
  {
    reviewId: "1f03cc20-1b86-434a-af61-d5ade6385a22",
    createdAt: 1679159060,
    staffPick: false,
    slug: "fractured-atlas/ethereal-echoes-in-a-cavern-of-glass",
    summary:
      "Fractured Atlas's latest album is a triumph of genre-defying experimentation.",
    body: "The artist known as 'Fractured Atlas' delivers a mesmerizing blend of Art Pop and Fourth World music on their latest release, 'Ethereal Echoes in a Cavern of Glass.' Drawing inspiration from The Durutti Column and Kelly Lee Owens, Fractured Atlas creates a soundscape that is both otherworldly and intimately familiar. The album's title track sets the tone with its ethereal vocals and shimmering synths, while 'Whispers in the Wind' adds a touch of darkness with its brooding bassline and spoken-word samples. The stand-out track, 'Reflections in a Pool of Ink,' showcases Fractured Atlas's ability to blend disparate elements into a cohesive whole, with its mix of tribal percussion, glitchy electronics, and soaring vocals. Overall, 'Ethereal Echoes in a Cavern of Glass' is a triumph of genre-defying experimentation that rewards repeat listens.",
    score: 8.2,
    genres: ["Art Pop", "Fourth World"],
    artistName: "Fractured Atlas",
    albumName: "Ethereal Echoes in a Cavern of Glass",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/39951176/cover-art-in-japanese-graphic-design-style-for-album-titled-ethereal-echoes-in-a-cavern-of-glass-for-art-pop,-fourth-world-musician-.jpg?token=iasdYTOi24Wyu-_h4fwROQ&expires=17452381088",
  },
  {
    reviewId: "64dced91-6329-4cfc-a30b-abde913bf7f0",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "A raw and energetic debut from a band channeling the spirit of punk and hard rock.",
    body: "The debut album from 'Rorschach Test' is a fiery and unapologetic statement of intent. Drawing inspiration from the likes of The Chats and Amyl and The Sniffers, the band delivers a sound that is both raw and energetic. The songs are short, punchy, and loaded with hooks, while the lyrics are both witty and pointed. The production is raw and unpolished, adding to the overall sense of urgency and energy. This is a band that clearly wants to make its mark, and it's hard not to get caught up in their enthusiasm.",
    score: 8.5,
    genres: ["Punk rock", "Hard rock"],
    artistName: "Rorschach Test",
    albumName: "Fury Road to Nowhere",
    slug: "rorschach-test/fury-road-to-nowhere",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/2062798/cover-art-for-album-titled-fury-road-to-nowhere-from-punk-rock,-hard-rock-artist-rorschach-test-in-90s-graphic-design-style-.jpg?token=H45lvGW_-CJBOD6ML5vkfg&expires=17452379803",
  },
  {
    reviewId: "3e15b61a-0b24-4768-ab99-ed3063a4ac9f",
    createdAt: 1679159060,
    staffPick: false,
    genres: ["Electronic", "Ambient"],
    summary:
      "Persephone's Lament's debut album is a masterclass in production and lyrics, blending dance-pop and electronic beats with themes of love, loss, and self-empowerment.",
    body: "Introducing the new sensation in the music scene, 'Persephone's Lament' is a force to be reckoned with. With a sound that seamlessly blends dance-pop and electronic beats, this artist has teamed up with Dua Lipa and Doja Cat to deliver an electrifying debut album. The album is a journey through a range of emotions, from heart-wrenching ballads to euphoric anthems that will have you dancing all night long. Each track is a masterclass in production, with layers of synths and beats that come together to create a sound that is both fresh and familiar. Lyrically, Persephone's Lament is equally impressive, delving into themes of love, loss, and self-empowerment. This is an album that will have you hitting repeat for days to come.",
    score: 8.0,
    slug: "persephones-lament/midnight-sun-and-empty-streets",
    artistName: "Persephone's Lament",
    albumName: "Midnight Sun and Empty Streets",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/58122735/cover-art-for-album-titled-midnight-sun-and-empty-streets-from-dance-pop-artist-in-saul-bass-style-.jpg?token=BE7D4F7jEMGo7h1qyeSwxQ&expires=17452381426",
  },
  {
    reviewId: "e9de951d-3b99-4b24-b9e8-d0d07a8c1cf9",
    createdAt: 1679159060,
    staffPick: false,
    slug: "kafkas-funhouse/electric-saffron",
    summary:
      "Kafka's Funhouse debut album Electric Saffron is a powerhouse of groovy funk and soul with a fresh and vital twist.",
    body: "With a voice that commands attention and a band that cooks up a groovy stew of funk and soul, the debut album from Brisbane-based artist, \"Kafka's Funhouse\", is a powerhouse introduction to one of Australia's most exciting new acts. The album's title, \"Electric Saffron,\" perfectly captures the energy and intensity of the music within, with each track packed with sharp horns, driving basslines, and crisp, precise drumming. The influence of James Brown and Marvin Gaye is clear throughout, but \"Kafka's Funhouse\" puts their own spin on things, infusing the music with a sense of drama and urgency that feels fresh and vital. The arrangements are top-notch, and the band's chemistry is undeniable. But it's the songwriting that really sets this album apart, with each tune boasting a catchy hook and clever lyrics. Whether you're a fan of funk, soul, or just great music in general, \"Electric Saffron\" is an album that shouldn't be missed.",
    score: 8.2,
    genres: ["Funk", "Soul"],
    artistName: "Kafka's Funhouse",
    albumName: "Electric Saffron",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/44990466/cover-art-for-album-titled-electric-saffron-from-funk-artist-kafka's-funhouse-in-70s-graphic-style-.jpg?token=WdD9S4JH2gKYiYSmyPNMQg&expires=17452380246",
  },
  {
    reviewId: "929167b5-f78c-4af3-bde4-ed89a1f067e9",
    createdAt: 1679159060,
    slug: "xylfoqirz/nebulae-serenity",
    staffPick: false,
    summary:
      "Xylfoqirz's new album is a ethereal blend of Electronica and Art Pop with a touch of Caribou and Saint Etienne.",
    body: 'Ethereal and otherworldly, "Xylfoqirz" creates a sonic landscape that is both haunting and beautiful. The electronica beats are masterfully blended with art pop influences, and the use of samples from Caribou and Saint Etienne add an extra layer of depth to the music. The overall effect is one of being transported to a parallel universe, where the emotions are heightened and the soundscapes are expansive. Each track is a journey unto itself, and the album as a whole is a cohesive and satisfying listening experience. Highly recommended for fans of experimental electronic music.',
    score: 8.4,
    genres: ["Electronica", "Art Pop"],
    artistName: "Xylfoqirz",
    albumName: "Nebulae Serenity",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/71391831/cover-art-in-art-deco-style-for-album-titled-nebulae-serenity-for-an-electronica-artist.jpg?token=vGj9ns9Jb3T4yjw7R3GAAg&expires=17452381552",
  },
  {
    reviewId: "208b29bd-4e04-438b-afef-22da54b724b7",
    createdAt: 1679159060,
    staffPick: false,
    slug: "chthonic/oscillations-transcendent-lament",
    summary:
      "Bland, uninspired techno that fails to capture the transcendence promised in its title.",
    body: "The latest offering from 'Chthonic Oscillations' is a tedious, uninspired mess. Despite drawing inspiration from the legendary James Brown, the Berlin-based artist fails to infuse any of the soul and energy that made the Godfather of Soul so iconic. Instead, we're left with a bland, generic techno album that fails to capture any sense of poetic emptiness as promised in the album title 'Transcendent Lament'. It's clear that 'Chthonic Oscillations' is content to coast on the coattails of more talented musicians, rather than putting in the effort to create something truly unique and meaningful.",
    score: 3.2,
    genres: ["Techno", "Funk"],
    artistName: "Chthonic Oscillations",
    albumName: "Transcendent Lament",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/38477161/cover-art-for-album-titled-transcendent-lament-for-techno-artist-in-brutalist-style.jpg?token=ZmlpAM5_jWZLfocbeKssBg&expires=17452381726",
  },
  {
    reviewId: "f403fbed-8de2-44d2-bebc-18f93767aa9a",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "Ebullient Cacophony's debut album is a dynamic UK Garage and Grime-infused masterpiece.",
    body: "Effervescent beats, gritty lyrics and an electrifying energy come together on 'Pyrrhic Victory', the debut album from London-based artist 'Ebullient Cacophony'. Flowdan and The Streets lend their talents to the UK Garage and Grime-infused tracks, adding an extra layer of depth and authenticity to the already dynamic sound. The interplay between the two vocalists is particularly striking, with Flowdan's raw intensity and The Streets' smooth flow complementing each other perfectly. The production is top-notch, with the beats constantly evolving and the basslines hitting hard. This is an album that demands to be played loud and will have you dancing through the night. It's a truly exciting debut that showcases the talent of Ebullient Cacophony and the power of UK Garage and Grime.",
    score: 8.3,
    artistName: "Pyrrhic Victory",
    albumName: "Ebullient Cacophony",
    slug: "pyrrhic-victory/ebullient-cacophony",
    genres: ["UK Garage", "Grime"],
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/32031094/cover-art-for-album-titled-ebullient-cacophony-from-uk-garage,-grime-artist-pyrrhic-victory-in-pop-art-style-.jpg?token=Rd4tuy-pgf4M4LZVy5Q8HA&expires=17452380551",
  },
  {
    reviewId: "7b3c0021-53fa-4eea-8979-a50723abb983",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "Obscure Cult's latest is a tedious exercise in nostalgia, with uninspired beats and unimpressive rhymes.",
    body: "The latest release from Obscure Cult is a tedious exercise in nostalgia, drawing heavily from the sounds of Madvillain and Nia Archives, but lacking the creativity and innovation of these artists. The beats are uninspired and the rhymes are unimpressive, lacking the wit and sharpness of the artists the project cites as influences. Obscure Cult's flow is monotonous and the lyrics are uninspired, relying heavily on cliches. The album's title, \"Fading Memory\" is fitting, as it's likely to be quickly forgotten. It's clear that Obscure Cult has a deep admiration for Madvillain and Nia Archives, but fails to bring anything new to the table, resulting in an uninspired and unmemorable release.",
    score: 4.5,
    genres: ["Hip Hop", "Breakbeat"],
    slug: "obscure-cult/fading-memory",
    artistName: "Obscure Cult",
    albumName: "Fading Memory",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/28416771/cover-art-for-album-titled-fading-memory-from-hip-hop,-breakbeat-artist-obscure-cult-in-scratched-35mm-film-photo-style-.jpg?token=XVCmEFkhURnX87e7sDXC2Q&expires=17452388417",
  },
  {
    reviewId: "ea13607d-8141-4654-9b3b-d55a2a73a79c",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "Don't Apologize's debut album 'Guided by Vibrations' is a mixed bag of indie rock and alternative influences, with some promising moments but ultimately falling short.",
    body: "Don't Apologize's debut album 'Guided by Vibrations' is a mixed bag of indie rock and alternative influences, with clear nods to The Smiths and The Strokes. While the band showcases a strong sense of nostalgia throughout the album, it often feels uninspired and fails to truly break new ground. Lyrically, the album is introspective but at times can feel clich\u00e9d and unoriginal. Musically, the band displays a good sense of dynamic but it often falls flat. Standout tracks like 'Echoes of the Past' and 'Future in Flux' are the exception, showcasing the group's ability to craft hook-laden melodies and thought-provoking lyrics. Overall, while there are some promising moments on the album, it ultimately falls short of being truly noteworthy.",
    score: 6.3,
    slug: "don't-apologize/guided-by-vibrations",
    genres: ["Indie Rock", "Alternative"],

    artistName: "Don't Apologize",
    albumName: "Guided by Vibrations",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/82608585/cover-art-for-album-titled-guided-by-vibrations-from-indie-rock,-alternative-artist-don't-apologize-in-scratched-35mm-film-photo-style.jpg?token=t1yf0AagKJ4yeK0WaIyIMg&expires=17452391451",
  },
  {
    reviewId: "b7eb54da-ab98-48d8-93b2-adc273cecc9c",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "Namaqua Sand Rose delivers a stunning fusion of R&B and Soul with debut album 'Echo of a Dream'.",
    body: "The debut album from Namaqua Sand Rose, 'Echo of a Dream' is a stunning fusion of R&B and Soul that draws inspiration from the likes of SZA and D'Angelo. The Cape Town-based artist's voice is both powerful and emotive, perfectly complemented by the lush, atmospheric production. Each track is a masterclass in songwriting, with cleverly crafted lyrics that tackle themes of love, heartbreak, and self-discovery. Standout tracks include 'Echoes' and 'Love is a Mirage', both of which showcase the artist's ability to blend genre-defining production with thought-provoking lyrics. 'Echo of a Dream' is an album that will leave a lasting impression long after the final track has ended.",
    score: 7.5,
    slug: "namaqua-sand-rose/echo-of-a-dream",
    genres: ["R&B", "Soul"],
    artistName: "Namaqua Sand Rose",
    albumName: "Echo of a Dream",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/18135434/cover-art-for-album-titled-echo-of-a-dream-from-r&b,-soul-artist-namaqua-sand-rose-in-70s-graphic-style-.jpg?token=QyRDKsXMW--XKbeR6ho2ww&expires=17452391107",
  },
  {
    reviewId: "6b826003-62f9-412a-8834-d57532d5c25c",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "Aurorae's debut album 'Celestial Oasis in a Deserted Wasteland' is a genre-blending masterpiece that transport you to another realm.",
    body: "With 'Celestial Oasis in a Deserted Wasteland', the debut album from the enigmatic producer known only as 'Aurorae', Chicago's rich house and acid house heritage is given a fresh, otherworldly spin. Drawing inspiration from the likes of Frankie Knuckles and Larry Heard, Aurorae crafts tracks that are both nostalgic and forward-thinking, with deep, pulsing basslines and ethereal synth melodies that transport the listener to another realm. The album is a masterclass in genre-blending, seamlessly incorporating elements of ambient, techno, and even world music to create a truly unique and immersive listening experience. Aurorae is a true innovator and 'Celestial Oasis in a Deserted Wasteland' is a must-listen for fans of experimental electronic music.",
    score: 9.4,
    genres: ["House", "Acid House"],
    slug: "aurorae/celestial-oasis-in-a-deserted-wasteland",
    artistName: "Aurorae",
    albumName: "Celestial Oasis in a Deserted Wasteland",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/23791124/cover-art-for-album-titled-celestial-oasis-in-a-deserted-wasteland-from-house,-acid-house-artist-aurorae-in-90s-graphic-design-style-.jpg?token=ZOtAFyrPXKw1Xkd3uTJyWA&expires=17452391878",
  },
  {
    reviewId: "c35f04dc-bb70-4b0d-b1e7-316d2127e4ab",
    createdAt: 1679159060,
    staffPick: false,
    slug: "elpis/whispers-of-hope-in-the-dark",
    summary:
      "Elpis's introspective storytelling and emotive lyrics, combined with soaring guitar riffs, make for a cathartic and uplifting album. Collaborations with My Chemical Romance and Olivia Rodrigo shine through.",
    body: "The debut album from Madrid's newest sensation, 'Elpis' is a masterful blend of emo-tinged pop and indie rock. The band's collaborations with My Chemical Romance and Olivia Rodrigo are evident in the album's emotive lyrics and soaring guitar riffs. Elpis's unique brand of introspective storytelling is both relatable and inspiring, making for an album that is both cathartic and uplifting. The production is top-notch and the band's chemistry is undeniable, making for a cohesive and compelling listen from start to finish. A must-listen for fans of emo and pop-rock alike.",
    score: 7.0,
    genres: ["Pop", "Indie Emo"],
    artistName: "Elpis",
    albumName: "Whispers of Hope in the Dark",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/89950926/cover-art-for-album-titled-whispers-of-hope-in-the-dark-from-pop,-indie-emo-artist-elpis-in-retro-film-photo-style-.jpg?token=tpwP7ZRngRRKjiooEcEY4w&expires=17452393151",
  },
  {
    reviewId: "929167b5-f78c-4af3-bde4-ed89a1f067e9",
    createdAt: 1679159060,
    slug: "xylfoqirz/nebulae-serenity",
    staffPick: false,
    summary:
      "Xylfoqirz's new album is a ethereal blend of Electronica and Art Pop with a touch of Caribou and Saint Etienne.",
    body: 'Ethereal and otherworldly, "Xylfoqirz" creates a sonic landscape that is both haunting and beautiful. The electronica beats are masterfully blended with art pop influences, and the use of samples from Caribou and Saint Etienne add an extra layer of depth to the music. The overall effect is one of being transported to a parallel universe, where the emotions are heightened and the soundscapes are expansive. Each track is a journey unto itself, and the album as a whole is a cohesive and satisfying listening experience. Highly recommended for fans of experimental electronic music.',
    score: 8.4,
    genres: ["Electronica", "Art Pop"],
    artistName: "Xylfoqirz",
    albumName: "Nebulae Serenity",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/71391831/cover-art-in-art-deco-style-for-album-titled-nebulae-serenity-for-an-electronica-artist.jpg?token=vGj9ns9Jb3T4yjw7R3GAAg&expires=17452381552",
  },
  {
    reviewId: "208b29bd-4e04-438b-afef-22da54b724b7",
    createdAt: 1679159060,
    staffPick: false,
    slug: "chthonic/oscillations-transcendent-lament",
    summary:
      "Bland, uninspired techno that fails to capture the transcendence promised in its title.",
    body: "The latest offering from 'Chthonic Oscillations' is a tedious, uninspired mess. Despite drawing inspiration from the legendary James Brown, the Berlin-based artist fails to infuse any of the soul and energy that made the Godfather of Soul so iconic. Instead, we're left with a bland, generic techno album that fails to capture any sense of poetic emptiness as promised in the album title 'Transcendent Lament'. It's clear that 'Chthonic Oscillations' is content to coast on the coattails of more talented musicians, rather than putting in the effort to create something truly unique and meaningful.",
    score: 3.2,
    genres: ["Techno", "Funk"],
    artistName: "Chthonic Oscillations",
    albumName: "Transcendent Lament",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/38477161/cover-art-for-album-titled-transcendent-lament-for-techno-artist-in-brutalist-style.jpg?token=ZmlpAM5_jWZLfocbeKssBg&expires=17452381726",
  },
  {
    reviewId: "f403fbed-8de2-44d2-bebc-18f93767aa9a",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "Ebullient Cacophony's debut album is a dynamic UK Garage and Grime-infused masterpiece.",
    body: "Effervescent beats, gritty lyrics and an electrifying energy come together on 'Pyrrhic Victory', the debut album from London-based artist 'Ebullient Cacophony'. Flowdan and The Streets lend their talents to the UK Garage and Grime-infused tracks, adding an extra layer of depth and authenticity to the already dynamic sound. The interplay between the two vocalists is particularly striking, with Flowdan's raw intensity and The Streets' smooth flow complementing each other perfectly. The production is top-notch, with the beats constantly evolving and the basslines hitting hard. This is an album that demands to be played loud and will have you dancing through the night. It's a truly exciting debut that showcases the talent of Ebullient Cacophony and the power of UK Garage and Grime.",
    score: 8.3,
    artistName: "Pyrrhic Victory",
    albumName: "Ebullient Cacophony",
    slug: "pyrrhic-victory/ebullient-cacophony",
    genres: ["UK Garage", "Grime"],
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/32031094/cover-art-for-album-titled-ebullient-cacophony-from-uk-garage,-grime-artist-pyrrhic-victory-in-pop-art-style-.jpg?token=Rd4tuy-pgf4M4LZVy5Q8HA&expires=17452380551",
  },
  {
    reviewId: "929167b5-f78c-4af3-bde4-ed89a1f067e9",
    createdAt: 1679159060,
    slug: "xylfoqirz/nebulae-serenity",
    staffPick: false,
    summary:
      "Xylfoqirz's new album is a ethereal blend of Electronica and Art Pop with a touch of Caribou and Saint Etienne.",
    body: 'Ethereal and otherworldly, "Xylfoqirz" creates a sonic landscape that is both haunting and beautiful. The electronica beats are masterfully blended with art pop influences, and the use of samples from Caribou and Saint Etienne add an extra layer of depth to the music. The overall effect is one of being transported to a parallel universe, where the emotions are heightened and the soundscapes are expansive. Each track is a journey unto itself, and the album as a whole is a cohesive and satisfying listening experience. Highly recommended for fans of experimental electronic music.',
    score: 8.4,
    genres: ["Electronica", "Art Pop"],
    artistName: "Xylfoqirz",
    albumName: "Nebulae Serenity",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/71391831/cover-art-in-art-deco-style-for-album-titled-nebulae-serenity-for-an-electronica-artist.jpg?token=vGj9ns9Jb3T4yjw7R3GAAg&expires=17452381552",
  },
  {
    reviewId: "208b29bd-4e04-438b-afef-22da54b724b7",
    createdAt: 1679159060,
    staffPick: false,
    slug: "chthonic/oscillations-transcendent-lament",
    summary:
      "Bland, uninspired techno that fails to capture the transcendence promised in its title.",
    body: "The latest offering from 'Chthonic Oscillations' is a tedious, uninspired mess. Despite drawing inspiration from the legendary James Brown, the Berlin-based artist fails to infuse any of the soul and energy that made the Godfather of Soul so iconic. Instead, we're left with a bland, generic techno album that fails to capture any sense of poetic emptiness as promised in the album title 'Transcendent Lament'. It's clear that 'Chthonic Oscillations' is content to coast on the coattails of more talented musicians, rather than putting in the effort to create something truly unique and meaningful.",
    score: 3.2,
    genres: ["Techno", "Funk"],
    artistName: "Chthonic Oscillations",
    albumName: "Transcendent Lament",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/38477161/cover-art-for-album-titled-transcendent-lament-for-techno-artist-in-brutalist-style.jpg?token=ZmlpAM5_jWZLfocbeKssBg&expires=17452381726",
  },
  {
    reviewId: "f403fbed-8de2-44d2-bebc-18f93767aa9a",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "Ebullient Cacophony's debut album is a dynamic UK Garage and Grime-infused masterpiece.",
    body: "Effervescent beats, gritty lyrics and an electrifying energy come together on 'Pyrrhic Victory', the debut album from London-based artist 'Ebullient Cacophony'. Flowdan and The Streets lend their talents to the UK Garage and Grime-infused tracks, adding an extra layer of depth and authenticity to the already dynamic sound. The interplay between the two vocalists is particularly striking, with Flowdan's raw intensity and The Streets' smooth flow complementing each other perfectly. The production is top-notch, with the beats constantly evolving and the basslines hitting hard. This is an album that demands to be played loud and will have you dancing through the night. It's a truly exciting debut that showcases the talent of Ebullient Cacophony and the power of UK Garage and Grime.",
    score: 8.3,
    artistName: "Pyrrhic Victory",
    albumName: "Ebullient Cacophony",
    slug: "pyrrhic-victory/ebullient-cacophony",
    genres: ["UK Garage", "Grime"],
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/32031094/cover-art-for-album-titled-ebullient-cacophony-from-uk-garage,-grime-artist-pyrrhic-victory-in-pop-art-style-.jpg?token=Rd4tuy-pgf4M4LZVy5Q8HA&expires=17452380551",
  },
  {
    reviewId: "929167b5-f78c-4af3-bde4-ed89a1f067e9",
    createdAt: 1679159060,
    slug: "xylfoqirz/nebulae-serenity",
    staffPick: false,
    summary:
      "Xylfoqirz's new album is a ethereal blend of Electronica and Art Pop with a touch of Caribou and Saint Etienne.",
    body: 'Ethereal and otherworldly, "Xylfoqirz" creates a sonic landscape that is both haunting and beautiful. The electronica beats are masterfully blended with art pop influences, and the use of samples from Caribou and Saint Etienne add an extra layer of depth to the music. The overall effect is one of being transported to a parallel universe, where the emotions are heightened and the soundscapes are expansive. Each track is a journey unto itself, and the album as a whole is a cohesive and satisfying listening experience. Highly recommended for fans of experimental electronic music.',
    score: 8.4,
    genres: ["Electronica", "Art Pop"],
    artistName: "Xylfoqirz",
    albumName: "Nebulae Serenity",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/71391831/cover-art-in-art-deco-style-for-album-titled-nebulae-serenity-for-an-electronica-artist.jpg?token=vGj9ns9Jb3T4yjw7R3GAAg&expires=17452381552",
  },
  {
    reviewId: "208b29bd-4e04-438b-afef-22da54b724b7",
    createdAt: 1679159060,
    staffPick: false,
    slug: "chthonic/oscillations-transcendent-lament",
    summary:
      "Bland, uninspired techno that fails to capture the transcendence promised in its title.",
    body: "The latest offering from 'Chthonic Oscillations' is a tedious, uninspired mess. Despite drawing inspiration from the legendary James Brown, the Berlin-based artist fails to infuse any of the soul and energy that made the Godfather of Soul so iconic. Instead, we're left with a bland, generic techno album that fails to capture any sense of poetic emptiness as promised in the album title 'Transcendent Lament'. It's clear that 'Chthonic Oscillations' is content to coast on the coattails of more talented musicians, rather than putting in the effort to create something truly unique and meaningful.",
    score: 3.2,
    genres: ["Techno", "Funk"],
    artistName: "Chthonic Oscillations",
    albumName: "Transcendent Lament",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/38477161/cover-art-for-album-titled-transcendent-lament-for-techno-artist-in-brutalist-style.jpg?token=ZmlpAM5_jWZLfocbeKssBg&expires=17452381726",
  },
  {
    reviewId: "f403fbed-8de2-44d2-bebc-18f93767aa9a",
    createdAt: 1679159060,
    staffPick: false,
    summary:
      "Ebullient Cacophony's debut album is a dynamic UK Garage and Grime-infused masterpiece.",
    body: "Effervescent beats, gritty lyrics and an electrifying energy come together on 'Pyrrhic Victory', the debut album from London-based artist 'Ebullient Cacophony'. Flowdan and The Streets lend their talents to the UK Garage and Grime-infused tracks, adding an extra layer of depth and authenticity to the already dynamic sound. The interplay between the two vocalists is particularly striking, with Flowdan's raw intensity and The Streets' smooth flow complementing each other perfectly. The production is top-notch, with the beats constantly evolving and the basslines hitting hard. This is an album that demands to be played loud and will have you dancing through the night. It's a truly exciting debut that showcases the talent of Ebullient Cacophony and the power of UK Garage and Grime.",
    score: 8.3,
    artistName: "Pyrrhic Victory",
    albumName: "Ebullient Cacophony",
    slug: "pyrrhic-victory/ebullient-cacophony",
    genres: ["UK Garage", "Grime"],
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/32031094/cover-art-for-album-titled-ebullient-cacophony-from-uk-garage,-grime-artist-pyrrhic-victory-in-pop-art-style-.jpg?token=Rd4tuy-pgf4M4LZVy5Q8HA&expires=17452380551",
  },
  {
    reviewId: "929167b5-f78c-4af3-bde4-ed89a1f067e9",
    createdAt: 1679159060,
    slug: "xylfoqirz/nebulae-serenity",
    staffPick: false,
    summary:
      "Xylfoqirz's new album is a ethereal blend of Electronica and Art Pop with a touch of Caribou and Saint Etienne.",
    body: 'Ethereal and otherworldly, "Xylfoqirz" creates a sonic landscape that is both haunting and beautiful. The electronica beats are masterfully blended with art pop influences, and the use of samples from Caribou and Saint Etienne add an extra layer of depth to the music. The overall effect is one of being transported to a parallel universe, where the emotions are heightened and the soundscapes are expansive. Each track is a journey unto itself, and the album as a whole is a cohesive and satisfying listening experience. Highly recommended for fans of experimental electronic music.',
    score: 8.4,
    genres: ["Electronica", "Art Pop"],
    artistName: "Xylfoqirz",
    albumName: "Nebulae Serenity",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/71391831/cover-art-in-art-deco-style-for-album-titled-nebulae-serenity-for-an-electronica-artist.jpg?token=vGj9ns9Jb3T4yjw7R3GAAg&expires=17452381552",
  },
  {
    reviewId: "208b29bd-4e04-438b-afef-22da54b724b7",
    createdAt: 1679159060,
    staffPick: false,
    slug: "chthonic/oscillations-transcendent-lament",
    summary:
      "Bland, uninspired techno that fails to capture the transcendence promised in its title.",
    body: "The latest offering from 'Chthonic Oscillations' is a tedious, uninspired mess. Despite drawing inspiration from the legendary James Brown, the Berlin-based artist fails to infuse any of the soul and energy that made the Godfather of Soul so iconic. Instead, we're left with a bland, generic techno album that fails to capture any sense of poetic emptiness as promised in the album title 'Transcendent Lament'. It's clear that 'Chthonic Oscillations' is content to coast on the coattails of more talented musicians, rather than putting in the effort to create something truly unique and meaningful.",
    score: 3.2,
    genres: ["Techno", "Funk"],
    artistName: "Chthonic Oscillations",
    albumName: "Transcendent Lament",
    artworkUrl:
      "https://Tonespoon.b-cdn.net/.ai/img/sd21-512/album_artwork/38477161/cover-art-for-album-titled-transcendent-lament-for-techno-artist-in-brutalist-style.jpg?token=ZmlpAM5_jWZLfocbeKssBg&expires=17452381726",
  },
];
