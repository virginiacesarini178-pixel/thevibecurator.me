const WOOL_IMGS = {
  hero: "https://images.unsplash.com/photo-1634120455427-d4db69777fdc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwY2FzaG1lcmUlMjB3b29sJTIwYmxhbmtldCUyMGZvbGRzfGVufDB8fHx8MTc5MDg4MTIwNHww&ixlib=rb-4.1.0&q=85",
  drape: "https://images.unsplash.com/photo-1731863891878-8b6bb3bf277e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxidXJndW5keSUyMGtuaXQlMjB3b29sJTIwdGV4dHVyZXxlbnwwfHx8fDE3OTA4ODEyMDR8MA&ixlib=rb-4.1.0&q=85",
  craft: "https://images.unsplash.com/photo-1706864685919-abccadda8d0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHxfHxidXJndW5keSUyMGtuaXQlMjB3b29sJTIwdGV4dHVyZXxlbnwwfHx8fDE3OTA4ODEyMDR8MA&ixlib=rb-4.1.0&q=85",
  texture: "https://images.unsplash.com/photo-1643313260651-9c335822ecde?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHx3b29sJTIwY2FzaG1lcmUlMjB0ZXh0dXJlJTIwZGV0YWlsJTIwbWFjcm98ZW58MHx8fHwxNzkwODc5NzM2fDA&ixlib=rb-4.1.0&q=85",
  yarn: "https://images.unsplash.com/photo-1670764732262-331943e5af5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHx3b29sJTIwY2FzaG1lcmUlMjB0ZXh0dXJlJTIwZGV0YWlsJTIwbWFjcm98ZW58MHx8fHwxNzkwODc5NzM2fDA&ixlib=rb-4.1.0&q=85",
  cocoon: "https://images.unsplash.com/photo-1705944601101-fdb49dbf884c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjBjdXJ0YWluJTIwZGFyayUyMGludGVyaW9yJTIwbW9vZHl8ZW58MHx8fHwxNzkwODc5NzQxfDA&ixlib=rb-4.1.0&q=85",
  candle: "https://images.unsplash.com/photo-1601922046210-41e129a3e64a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwyfHxjYW5kbGUlMjBmbGFtZSUyMHdhcm0lMjBsaWdodCUyMGdsb3clMjB3YXh8ZW58MHx8fHwxNzkwODc5NzM2fDA&ixlib=rb-4.1.0&q=85",
  wax: "https://images.unsplash.com/photo-1561212856-44e9bae482aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxjYW5kbGUlMjBmbGFtZSUyMHdhcm0lMjBsaWdodCUyMGdsb3clMjB3YXh8ZW58MHx8fHwxNzkwODc5NzM2fDA&ixlib=rb-4.1.0&q=85",
  wood: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZCUyMHRleHR1cmUlMjB0aW1iZXIlMjBuYXR1cmFsJTIwbWF0ZXJpYWxzfGVufDB8fHx8MTc5MDg3OTc0MXww&ixlib=rb-4.1.0&q=85",
};

const BARD_IMGS = {
  hero: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project_2.jpg/1920px-Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project_2.jpg",
  feast: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Dirck_Hals_-_Banquet_Scene_in_a_Renaissance_Hall_-_WGA11035.jpg",
  theatre: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Wenceslaus-Hollar-The-second-Globe-playhouse-detail.png",
  hall: "https://upload.wikimedia.org/wikipedia/commons/3/30/The-long-gallery-hardwick-hall-derbyshire-1811-2.jpg",
  table: "https://images.unsplash.com/photo-1695641738244-25e5355e9a42?crop=entropy&cs=srgb&fm=jpg&q=85",
  chalice: "https://images.unsplash.com/photo-1531627467965-e9c3dd19209c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB0YWJsZSUyMHdpbmUlMjBicmVhZCUyMGdvYmxldHMlMjBjYW5kbGVsaXR8ZW58MHx8fHwxNzkwODc5NzQ3fDA&ixlib=rb-4.1.0&q=85",
  candles: "https://images.unsplash.com/photo-1613713375072-e0c3ff795c43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxjYW5kZWxhYnJhJTIwY2FuZGxlcyUyMGxpZ2h0aW5nJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzkwODc5NzQ3fDA&ixlib=rb-4.1.0&q=85",
  textile: "https://images.unsplash.com/photo-1755543042263-c811664f10f7?crop=entropy&cs=srgb&fm=jpg&q=85",
};

export const CONCEPTS = [
  {
    slug: "wool-and-whispers",
    number: "01",
    title: "Wool & Whispers",
    subtitle: "Luxury Knitwear Sensory Event",
    label: "Independent Concept · Speculative Project",
    cardImage: WOOL_IMGS.yarn,
    cardText:
      "A luxury knitwear brand turns the physical retail environment into a slower, more tactile and emotionally memorable experience.",
    hero: {
      intro:
        "How could a luxury knitwear brand turn the physical retail environment into a slower, more tactile and emotionally memorable experience? Wool & Whispers answers with a sensory cocoon rather than a conventional retail space.",
      image: WOOL_IMGS.hero,
      imageAlt: "Soft folds of ribbed cashmere knitwear in warm light",
    },
    sections: [
      {
        type: "statement",
        eyebrow: "The core opportunity",
        text: "“The modern consumer, overwhelmed by digital noise, is seeking an antidote: a deep return to slowness, authenticity and real human presence.”",
      },
      {
        type: "principles",
        items: ["Slowness", "Authenticity", "Tactility", "Calm", "Human Presence"],
        closing:
          "Knitwear should not simply be looked at. It should be seen, touched, smelled, heard, experienced. The physical environment becomes a sensory cocoon.",
      },
      {
        type: "image",
        src: WOOL_IMGS.drape,
        alt: "Deep burgundy chunky knit wool with visible stitches",
        caption: "The world of Wool & Whispers: low light, soft fibre, no noise",
      },
      {
        type: "features",
        eyebrow: "The experience concept",
        heading: "A complete sensory journey.",
        items: [
          {
            title: "The Try-On Cocoon",
            text: "A fitting room conceived as a “Cabin in the Woods”. Visually and acoustically shielded by velvet curtains and warm 2700K lighting, the space removes sales pressure and creates a feeling of intimacy and calm.",
            image: WOOL_IMGS.cocoon,
          },
          {
            title: "Tactile Immersion",
            text: "Garments are displayed on dark wood and natural hangers. Visitors are encouraged to slow down and physically experience the fibres. The materials themselves become part of the storytelling. The act of touching becomes a grounding ritual.",
            image: WOOL_IMGS.craft,
          },
          {
            title: "The Sales Bridge",
            text: "A discreet QR code provides a personal discount, turning the no-phone ritual into an elegant post-event opportunity. The transition to purchase feels seamless, and never disrupts the atmosphere.",
            image: WOOL_IMGS.wood,
          },
          {
            title: "The Secret Message",
            text: "The opportunity to embed a hidden message or personal intention within the wax, making each creation a private and unique object.",
            image: WOOL_IMGS.wax,
          },
          {
            title: "A Moment of Peace",
            text: "Hands-on creation in a space of comfortable silence allows the brand to become associated with a tangible moment of calm and focus, moving beyond the product itself.",
          },
          {
            title: "A Sensory Souvenir",
            text: "Each guest leaves with an object that evokes the scent of home: a lasting reminder of the slowness and authenticity at the core of Wool & Whispers.",
            image: WOOL_IMGS.candle,
          },
        ],
      },
      {
        type: "senses",
        eyebrow: "Sensory strategy",
        heading: "The five senses.",
        items: [
          {
            name: "Sight",
            tagline: "Visual Cocoon",
            text: "A low-stimulus palette of burgundy and forest green. 2700K lighting and candle flicker create deep shadows, guiding attention away from digital noise and towards texture.",
            image: WOOL_IMGS.cocoon,
          },
          {
            name: "Sound",
            tagline: "Comfortable Silence",
            text: "Acoustic shielding and soft surfaces slow the room down. The loudest thing in the space is the quiet sound of fabric being touched.",
          },
          {
            name: "Touch",
            tagline: "Tactile Dialogue",
            text: "A contrast of rough-hewn wood and soft cashmere. Materials are selected to invite interaction, turning touching into a grounding ritual.",
            image: WOOL_IMGS.texture,
          },
          {
            name: "Smell",
            tagline: "The Scent of Home",
            text: "A warm, subtle layer of wax, wool and wood: the scent guests later take with them, sealed inside the object they made.",
            image: WOOL_IMGS.candle,
          },
          {
            name: "Taste",
            tagline: "A Warm Cup",
            text: "A simple warm infusion, served slowly. Taste as an anchor for presence rather than refreshment.",
          },
        ],
      },
      {
        type: "flow",
        eyebrow: "Strategic design",
        heading: "Not aesthetic. Strategic.",
        steps: ["Product", "Sensory Experience", "Emotional Association", "Memory", "Purchase / Return"],
        note: "The experience is designed to make the product more tangible and more memorable. Each sensory decision exists to move a guest along this chain.",
      },
      {
        type: "modules",
        eyebrow: "Strategic modules",
        heading: "How the concept holds together.",
        items: [
          {
            title: "Execution & Innovation",
            text: "How the concept moves from atmosphere to operations: lighting plans, material sourcing, staff rituals and the no-phone policy.",
          },
          {
            title: "The Try-On Cocoon",
            text: "The signature spatial moment of the concept: a fitting room redesigned as a cabin in the woods.",
          },
          {
            title: "Sensory ROI Blueprint",
            text: "The model connecting each sensory decision to a behavioural signal: dwell, recall, transaction value and return.",
          },
        ],
      },
      {
        type: "impact",
        eyebrow: "Projected impact",
        heading: "Illustrative impact model.",
        stats: [
          {
            value: "+85%",
            label: "Retail Dwell Time",
            detail: "Average stay projected from 12 to 26 minutes.",
            driver: "2700K lighting & acoustic shielding",
          },
          {
            value: "+70%",
            label: "Brand Recall",
            detail: "Intent to purchase projected to increase by 15%.",
            driver: "Scent diffusion",
          },
          {
            value: "+30%",
            label: "Transaction Value",
            detail: "Immediate “price comparison” reduction.",
            driver: "No-phone policy & tactile immersion",
          },
          {
            value: "3.5×",
            label: "Organic Social Reach",
            detail: "Curated content conversion rate: 22%.",
            driver: "Studio-quality lighting for professional aesthetics",
          },
        ],
        summary: [
          { label: "Emotional Engagement", value: "94% positive connection rate" },
          { label: "Conversion Recovery", value: "−40% cart abandonment" },
          { label: "Retention Forecast", value: "+55% repeat visit intent" },
        ],
        disclaimer:
          "Projected impact based on sensory design research. Not measured client data.",
      },
    ],
  },
  {
    slug: "the-bards-banquet",
    number: "02",
    title: "The Bard’s Banquet",
    subtitle: "A Post-Show Sensory Experience Inspired by Shakespeare’s World",
    label: "Independent Speculative Concept · 2026",
    cardImage: BARD_IMGS.feast,
    cardText:
      "What if the story didn’t end with the applause? A candlelit ritual designed for the most emotionally open moment of the theatre night.",
    hero: {
      intro: [
        "I remember leaving Shakespeare’s Globe and wishing I could stay in that world a little longer.",
        "I’d spent the performance completely absorbed in the atmosphere of the theatre. Then came the applause, the lights and the familiar routine of leaving. Within minutes, I was back in everyday London.",
        "It made me wonder about something.",
        "We put so much thought into how an audience enters the world of a performance. But what about the moment they leave it?",
        "What if there was something waiting for them after the final applause?",
        "That’s where The Bard’s Banquet began.",
      ],
      image: BARD_IMGS.hero,
      imageAlt: "The Peasant Wedding by Pieter Bruegel the Elder (1567): a banquet as Shakespeare’s company would have known it",
    },
    credits:
      "Imagery: The Peasant Wedding (Bruegel the Elder, 1567), Banquet Scene in a Renaissance Hall (Dirck Hals, 1628), the second Globe playhouse (Hollar, 1647) and the Long Gallery at Hardwick Hall (1811). All public domain, via Wikimedia Commons.",
    sections: [
      {
        type: "editorial",
        eyebrow: "The starting point",
        heading: "What happens after the performance?",
        paragraphs: [
          "I’ve always loved how theatre can make you forget where you are for a while. At Shakespeare’s Globe, I felt that especially strongly. The building, the actors and the people around me all contributed to that feeling of being somewhere else.",
          "But I was just as interested in what happened afterwards.",
          "I didn’t want to make the play longer or add another performance. I wanted to imagine a different way for the evening to continue. Something that would let the audience enjoy that world from another perspective, this time as guests rather than spectators.",
          "The question became: could leaving the theatre feel like the beginning of another adventure?",
        ],
        image: BARD_IMGS.theatre,
        imageAlt: "Wenceslaus Hollar’s 1647 sketch of the second Globe Theatre",
      },
      {
        type: "editorial",
        eyebrow: "The concept",
        heading: "An invitation to the company’s celebration",
        paragraphs: [
          "The Bard’s Banquet imagines a group of 40 theatre-goers invited to join Shakespeare’s acting company for a celebration after the performance.",
          "Before the show, each guest is given a fictional Elizabethan identity and helped into a complete period costume. They watch the play alongside the regular audience, then make their way to a banquet where the company’s friends, playwrights and familiar theatre-goers are already celebrating.",
          "Later, the actors arrive, still wearing the costumes from the performance, and join everyone for dinner.",
          "I don’t imagine this as another show or an elaborate role-playing game. Nobody has to learn lines, perform for an audience or behave in a particular way. Some guests might fully embrace their new identities. Others might simply enjoy wearing an extraordinary costume, sharing a meal and being surrounded by the atmosphere. Both are equally welcome.",
          "What excites me is the possibility of giving adults a little more freedom to play. To be curious, adventurous, theatrical or completely ridiculous for an evening, without feeling embarrassed about it.",
        ],
        image: BARD_IMGS.feast,
        imageAlt: "Banquet Scene in a Renaissance Hall by Dirck Hals (1628)",
      },
      {
        type: "sequence",
        eyebrow: "The guest journey",
        heading: "From theatre-goer to banquet guest",
        steps: [
          {
            title: "An identity of your own",
            text: [
              "The experience begins when guests book their tickets. They complete a short questionnaire that helps create a fictional identity within the social world of Elizabethan England.",
              "There are two different routes. One explores who you’d like to be, while the other takes inspiration from the qualities that already feel most like you. The result gives each guest a social title and a few personality characteristics. If something doesn’t quite fit, they can choose from alternative characteristics.",
              "I want these identities to feel personal and playful. A little exaggerated, perhaps, but never restrictive. They’re there to spark curiosity, not to tell people how to behave.",
            ],
          },
          {
            title: "Dressing for another world",
            text: [
              "Before the performance, guests are welcomed and helped into complete Elizabethan costumes. They can choose a masculine or feminine style of dress according to their preference, regardless of gender.",
              "I imagine the dressing experience as part of the excitement. There’s something wonderful about seeing yourself in clothes you’d never normally have the chance to wear.",
              "Once ready, guests head into the theatre and watch the performance among the regular audience, seated in small groups. For now, they’re still spectators. But they already have a little connection to what comes next.",
            ],
          },
          {
            title: "One more invitation",
            text: [
              "When the performance ends, the guests don’t immediately head home. They’re gathered in small groups and accompanied towards the banquet.",
              "I’d like this transition to bring back that lovely feeling of anticipation, when you know something is about to happen but you haven’t quite discovered what it is. Perhaps they can already hear music, laughter and people talking somewhere ahead.",
              "The adventure continues.",
            ],
          },
          {
            title: "A party already in progress",
            text: [
              "By the time the first guests arrive, the celebration has already begun. People are chatting, laughing, enjoying a drink and catching up with familiar faces. They’re friends of the company, playwrights and regular theatre-goers who seem entirely at home.",
              "These characters are portrayed by the hosting team, but their conversations aren’t scripted. They’re there to make people feel welcome, introduce newcomers and bring the social world of the banquet to life.",
              "At the entrance, guests hand their identity cards to a herald, who announces their titles to the room. Their personal characteristics remain private unless they choose to share them.",
              "A host then accompanies each guest to their assigned seat. People who booked together can sit together, and everyone is free to move around, mingle or explore during the evening.",
              "I want the welcome to feel warm, a little cheeky and genuinely human.",
            ],
          },
          {
            title: "The company joins the celebration",
            text: [
              "Once the guests have arrived, the actors join the banquet. They’re still wearing the costumes everyone has just seen on stage, but they’re no longer playing the characters from the performance. Within the fictional world of the evening, they’re members of Shakespeare’s theatrical company, arriving to celebrate.",
              "They sit and eat with the guests.",
              "This matters to me. I don’t want the actors to feel like an attraction people have paid to interact with, or as though they’re expected to perform all evening. I want it to feel like an actual company celebration, with stories, laughter and the ordinary pleasure of sharing a table.",
            ],
          },
          {
            title: "The feast begins",
            text: [
              "When everyone has settled and the actors have arrived, the room comes together for a short, lively toast. Then the hot food is served.",
              "I want the meal to be genuinely enjoyable, not something that only looks convincing in a historical setting. I’ve been researching Elizabethan food culture, from richly spiced dishes and elaborate sweets to the simpler foods people ate every day.",
              "There are so many interesting possibilities, but the menu would be something to develop with a culinary specialist, balancing historical inspiration with contemporary tastes and dietary needs.",
              "Above all, I imagine generous food, shared dishes and the pleasure of people eating together.",
            ],
          },
          {
            title: "An evening to explore",
            text: [
              "As the night continues, there are different things to enjoy around the room. Live music, dancing, games, a fortune-teller offering readings and an artist creating miniature portraits.",
              "Some guests might want to try everything. Others might spend the evening enjoying a conversation, or simply watching what’s happening around them. That’s completely fine.",
              "I want people arriving alone to feel just as welcome as those coming with friends or partners. The hosting team can make introductions, offer company or invite someone to explore, always leaving room for people to choose what they enjoy.",
              "There are a few shared moments that give the evening its rhythm, but the conversations and connections belong to the guests.",
            ],
          },
          {
            title: "Something to take home",
            text: [
              "During the banquet, guests can sit for a miniature portrait in their Elizabethan identity.",
              "I love the thought of someone finding that little portrait months later and remembering the evening, the people they met and how it felt to be someone slightly different for a few hours.",
              "A small reminder of a world they got to be part of.",
            ],
          },
        ],
      },
      {
        type: "image",
        src: BARD_IMGS.table,
        alt: "Candlelight on a dark timber banqueting table",
        caption: "The table as storytelling medium",
      },
      {
        type: "article",
        eyebrow: "The sensory world",
        heading: "A place that feels lived in",
        paragraphs: [
          "I’ve been researching the colours, fabrics, lighting, scents, sounds and food of Elizabethan England to imagine how this world might feel.",
          "But I’m not trying to recreate a perfectly preserved historical interior. I want the banquet to feel like a real celebration. Somewhere people have already made themselves comfortable, where conversations overlap, laughter gets a little louder and nobody is too worried about behaving according to their social rank.",
          "Even the nobles can let their guard down. That sense of warmth and informality is at the heart of the sensory direction.",
        ],
        subsections: [
          {
            title: "Colour & Materials",
            image: BARD_IMGS.textile,
            paragraphs: [
              "My research has taken me through deep purples and crimsons, gold, forest greens, warm browns, rust tones and the softer natural shades of linen and wool.",
              "I’m especially drawn to the contrast between rich fabrics such as velvet, silk, damask and brocade, and simpler materials like linen, wool, fustian and hemp.",
              "The costumes would bring much of that variety into the room, with different colours, textures and levels of extravagance reflecting the guests’ fictional identities.",
              "I don’t want every element to match perfectly. I’d rather the room feel as though it has developed naturally around the people who gather there.",
            ],
          },
          {
            title: "Lighting",
            image: BARD_IMGS.candles,
            paragraphs: [
              "I imagine the banquet room full of warm, golden light, with the kind of atmosphere you might find at a celebration that’s already been going on for a while.",
              "The centre of the room is lively and bright enough to see everyone’s faces. People are eating, laughing, raising their glasses and moving around. I want that part of the space to feel welcoming, somewhere you naturally want to join in.",
              "Around the edges, things become a little quieter. The light is softer, with more shadows and smaller illuminated corners. You might find someone having their fortune told, sitting for a portrait or enjoying a conversation away from the noise of the table.",
              "I’ve been looking into how people lit their homes and gathering places in Elizabethan England, particularly the use of candles, lanterns and firelight. I’d love to bring some of that warmth and unevenness into the space.",
              "My lighting reference is around 1900–2000 K, creating the golden, flame-like atmosphere I associate with an old tavern.",
              "I’d particularly love to use real candles, including on the tables, if the venue allows them. Their placement, fire safety and any alternatives would need to be developed with the production and lighting teams. What matters to me is that the room feels like a real place where people have come together to celebrate, rather than a perfectly arranged historical set.",
            ],
          },
          {
            title: "Sound & Music",
            paragraphs: [
              "I’d like guests to hear the celebration before they enter the room. Voices, laughter, movement and perhaps the sound of a musician playing somewhere inside.",
              "I’ve been exploring period instruments such as the lute, viols and recorders, and thinking about how live music could help shape the evening.",
              "During dinner, conversation should be easy and comfortable. Later, the music can become more lively as people start dancing.",
              "I want the room to sound like a party, not like a soundtrack playing over one.",
            ],
          },
          {
            title: "Scent",
            paragraphs: [
              "I’ve found the history of scent in Elizabethan England fascinating. Pomanders, fragrant herbs, rosewater, spices and scented leather all offer interesting references.",
              "But I wouldn’t want the banquet to smell like a historical-themed perfume.",
              "The food, the materials and the natural scents of the space already contribute to the atmosphere. I’d prefer to explore subtle details rather than introduce a strong fragrance that competes with dinner.",
              "Any additional scent elements would need to be carefully considered for guest comfort.",
            ],
          },
          {
            title: "Taste & The Table",
            image: BARD_IMGS.chalice,
            paragraphs: [
              "The banquet is an opportunity to explore history through food, but also through the way food is presented and shared.",
              "I’ve been researching Elizabethan table traditions, including raised dishes of sweets, candied fruit, decorated marchpane and elaborate sugar creations known as subtleties. Some of these are wonderfully extravagant.",
              "For this particular banquet, I’m more interested in generous, slightly irregular arrangements than grand, formal displays.",
              "I imagine low centrepieces with things people can notice, talk about and perhaps even eat. Small marchpane creations, raised plates of treats, natural fabrics and herbs could all contribute to the feeling of a table that’s meant to be enjoyed. I’d love to include candlelight among the table arrangements too, if it’s possible.",
              "The final details would be developed with catering and production specialists, making sure the decorations work around the food service and leave people comfortable enough to see, talk and reach across the table.",
              "The table should be beautiful, but never too precious to use.",
            ],
          },
          {
            title: "Touch & Personal Objects",
            paragraphs: [
              "I think a lot about the things guests will actually hold and wear. The weight of a costume, the feel of a fabric, the texture of a cup and the paper used for something as personal as an identity card.",
              "For the Identity Cards, I’d love to use linen paper. I want them to feel like little objects worth keeping, rather than ordinary printed tickets.",
              "The final printing and finishing would still need to be explored, but that tactile quality is part of how I imagine the experience.",
              "Sometimes it’s the smallest physical details that make an imaginary world feel believable.",
            ],
          },
        ],
      },
      {
        type: "article",
        eyebrow: "Space & the rhythm of the evening",
        heading: "A lively centre, quieter corners",
        paragraphs: [
          "The banquet is imagined for 40 guests, alongside the actors and hosting team.",
          "I’d like the centre of the room to hold most of the collective energy: the shared meal, the toast, the conversations and the dancing.",
          "Around it, quieter areas would give people opportunities to explore at their own pace. The fortune-teller, portrait artist and games could each have their own place without feeling disconnected from the celebration.",
          "I also want the room to feel welcoming from the moment someone enters. The herald’s announcement, the hosts and the sight and sound of a party already in progress all contribute to that first impression.",
          "The exact layout would depend on the venue, available space, accessibility and the needs of the production.",
        ],
        rhythmTitle: "The evening’s rhythm",
        rhythm: [
          { phase: "Before the performance", text: "Arrival, costume dressing, identity cards and time to settle in." },
          { phase: "During the performance", text: "Guests watch the play alongside the regular theatre audience." },
          { phase: "After the applause", text: "Small groups are accompanied towards the banquet and welcomed by the herald and hosting team." },
          { phase: "The company arrives", text: "The actors join the guests. Everyone comes together for the opening toast." },
          { phase: "The feast", text: "Hot food is served, with conversation and conviviality at the centre of the experience." },
          { phase: "The celebration continues", text: "Music, dancing, readings, games and miniature portraits, with guests free to participate however they like." },
          { phase: "The farewell", text: "Guests leave with their portraits and the memories of the evening." },
        ],
        outro: "The exact timings would be established with the theatre and production team. For now, the important thing is the flow of the experience and how each part leads naturally into the next.",
      },
      {
        type: "editorial",
        eyebrow: "Designing for people",
        heading: "Enough structure to make it work. Enough freedom to make it theirs.",
        paragraphs: [
          "One of the things I’ve thought about most is how to make this feel like a genuine celebration rather than a sequence of activities guests are constantly being directed through.",
          "Some moments need structure. The costume experience, the announcement of identities, the actors’ arrival and the opening toast all help the evening come together.",
          "But I don’t want to plan every interaction between 40 people.",
          "The hosting characters would understand the world they’re part of and the kind of atmosphere they’re helping to create. Their interactions would be spontaneous, playful and respectful, rather than scripted word for word.",
          "Someone arriving alone shouldn’t automatically be treated as lonely, just as someone coming with friends shouldn’t be expected to spend the whole evening with their group. There should be room for different personalities and different ways of enjoying the night.",
          "For me, good experience design isn’t about controlling everything that happens. It’s about creating the conditions for interesting, meaningful and sometimes unexpected things to happen.",
        ],
      },
      {
        type: "editorial",
        eyebrow: "From concept to production",
        heading: "What would need to happen next?",
        paragraphs: [
          "The Bard’s Banquet is an independent speculative concept, so the next stage would be to explore how it could work with a real venue and production team. A project like this would need close collaboration across several areas.",
          "Costume specialists would help develop the fitting experience for 40 guests, including preparation, dressing time and costume returns.",
          "The venue’s production and technical teams would help assess the space, lighting possibilities, safe use of candles or suitable alternatives, and the movement of guests between areas.",
          "Catering specialists would develop a menu and table service that support the atmosphere without compromising the food itself.",
          "The theatre’s stage management and company would also need to be involved in exploring the actors’ participation and the timing of their arrival.",
          "I’d want to test the identity questionnaire with a small group before developing the experience further. It’s important to understand whether the results feel personal, enjoyable and playful without creating pressure to perform.",
          "A later pilot could help evaluate the guest journey, transitions, hospitality and operational requirements. I see these conversations as part of the creative process. The aim would be to protect what makes the concept special while finding practical, safe and enjoyable ways to bring it to life.",
        ],
      },
      {
        type: "opportunities",
        eyebrow: "The opportunity for heritage theatre",
        heading: "Another way to experience the world around a performance",
        body: [
          "The Bard’s Banquet is imagined as an optional premium experience offered alongside a theatre ticket.",
          "For a heritage theatre, it could create another way for visitors to connect with the venue’s history, performances and creative community.",
        ],
        items: [
          "Hospitality",
          "Special events",
          "Cultural programming",
          "Partnerships",
        ],
        note: "These are opportunities to explore rather than promised results. Their value and commercial feasibility would need to be assessed with a venue through further development and testing.",
      },
      {
        type: "editorial",
        eyebrow: "Why I wanted to create it",
        heading: "A little more room for magic",
        paragraphs: [
          "The Bard’s Banquet began because I wasn’t quite ready to leave the world I’d just experienced at the theatre.",
          "But as the idea developed, I realised there was something else I cared about just as much.",
          "When we’re children, dressing up, inventing characters and getting lost in imaginary worlds feels completely natural. As adults, we can become much more self-conscious about those things. And yet I think many of us still love them.",
          "I’d like to create an evening where people feel free to be curious, playful and a little ridiculous without worrying about being judged.",
          "Where someone dressed as a noble can laugh across the table with an actor, where strangers can become companions for a few hours, and where a person arriving alone can still feel part of the celebration.",
          "I want people to leave remembering how much fun they had, how welcome they felt and perhaps a version of themselves they don’t often get to explore.",
          "Because I don’t think magic is something we should have to grow out of.",
        ],
      },
      {
        type: "statement",
        note: "The Bard’s Banquet is an independent speculative experience design concept. It has not been commissioned, produced or tested and is not affiliated with Shakespeare’s Globe or any other theatre venue.",
      },
    ],
  },
];

export const getConcept = (slug) => CONCEPTS.find((c) => c.slug === slug);

export const getNextConcept = (slug) =>
  CONCEPTS.find((c) => c.slug !== slug);
