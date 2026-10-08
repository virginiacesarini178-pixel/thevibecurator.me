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
    subtitle: "A Post-Show Sensory Experience for Heritage Theatre Venues",
    label: "Speculative Concept · 2026",
    cardImage: BARD_IMGS.feast,
    cardText:
      "What if the story didn’t end with the applause? A candlelit ritual designed for the most emotionally open moment of the theatre night.",
    hero: {
      intro:
        "The performance ends. The world doesn't. The audience has just spent two hours inside another world. Then the lights come up. The applause fades. Coats come back on. The contemporary world returns. The Bard’s Banquet is a speculative concept built around what happens next.",
      image: BARD_IMGS.hero,
      imageAlt: "The Peasant Wedding by Pieter Bruegel the Elder (1567): a banquet as Shakespeare’s company would have known it",
    },
    credits:
      "Imagery: The Peasant Wedding (Bruegel the Elder, 1567), Banquet Scene in a Renaissance Hall (Dirck Hals, 1628), the second Globe playhouse (Hollar, 1647) and the Long Gallery at Hardwick Hall (1811). All public domain, via Wikimedia Commons.",
    sections: [
      {
        type: "editorial",
        eyebrow: "The problem",
        heading: "The spell breaks in moments.",
        paragraphs: [
          "At Shakespeare’s Globe, I experienced something very particular: the feeling of being transported into another world. Then the performance ended. The transition back to the contemporary world felt almost immediate.",
          "The experience made me wonder: “If theatre can transport you into another world, can the journey out of it be designed too?”",
          "This is the starting point for The Bard’s Banquet. Not a claim that every audience member experiences the same thing. A design question: what could happen in the space between the final applause and the moment we return to everyday life?",
        ],
        image: BARD_IMGS.theatre,
        imageAlt: "Wenceslaus Hollar’s 1647 sketch of the second Globe Theatre",
      },
      {
        type: "statement",
        eyebrow: "The insight",
        text: "“You cannot stop the spell from ending. You can design how it ends.”",
        body: [
          "The opportunity is not to make the performance longer. It is to create a transition between the world of the play and the world outside it.",
          "A moment in which the audience moves from: spectator → guest → participant → memory.",
          "The Bard’s Banquet turns that transition into an experience of its own.",
        ],
      },
      {
        type: "vision",
        eyebrow: "The vision",
        questions: ["What if the story didn't end with the applause?"],
        body: [
          "What if, for one evening, the people who came to watch the play were given an identity within the world around it?",
          "Not asked to act. Not given lines to learn. Not turned into performers. Simply given a character, a place in the world, and the freedom to improvise.",
          "A temporary identity. A reason to look at the person sitting opposite you and wonder: who are you tonight?",
        ],
      },
      {
        type: "sequence",
        eyebrow: "The experience",
        heading: "You are given an identity, not a script.",
        steps: [
          {
            title: "Discover your character",
            text: "When purchasing their ticket, guests complete a short personality test. The result gives them a temporary identity within the social world surrounding Shakespeare's theatre. Not simply a merchant. Perhaps: a merchant. Ambitious. Determined to rise socially. Or a young poet with something to prove. A widow with influence. An artisan with ambitions beyond their station. Each identity combines who you are in this world with what you want from it.",
          },
          {
            title: "Become someone else",
            text: "At the ticketing office, guests are dressed according to their new identity. The transformation is deliberately simple. No elaborate performance. No character to memorise. Just enough to make the person in the mirror feel slightly different. Then they enter the Globe. And watch the performance with everyone else. They are still the audience.",
          },
          {
            title: "The performance ends",
            text: "The final scene. Applause. The lights come up. For a moment, it seems like the experience is over. But this is where The Bard’s Banquet begins.",
          },
          {
            title: "The actors change roles",
            text: "The actors leave Shakespeare's characters behind. They are no longer the people the audience has just watched on stage. They become members of the Shakespeare Company. The world shifts. The audience is invited to follow. And the theatre becomes something else.",
          },
          {
            title: "Enter the banquet",
            text: "A candlelit gathering inspired by the social world of Shakespeare's London. Guests are welcomed and introduced by their new identities. The merchant meets the poet. The widow meets the ambitious apprentice. The actors of the company join them at the table. There is no script. No expectation to perform. Guests simply know who they are for the evening — and improvise from there. They eat. They drink. They talk. They dance. They make connections. They watch what happens. The experience is designed. The behaviour is not.",
          },
          {
            title: "The world becomes social",
            text: "The banquet is not another performance. It is a temporary society. The identity given at the beginning now becomes a social tool. It gives strangers something to talk about. It creates possibilities for interaction. It gives the guest a reason to look at the person beside them differently. The question is no longer: who came to see the play? It becomes: who have we all become tonight?",
          },
          {
            title: "Leave with a trace",
            text: "Before leaving, each guest sits for a small portrait in character. Not a generic souvenir. A portrait of the person they became that evening. Something to keep. Something to share. Something that makes the temporary identity tangible after the night is over. A trace of the world they briefly inhabited.",
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
        type: "senses",
        eyebrow: "Experience design",
        heading: "Every layer, considered.",
        items: [
          {
            name: "Space",
            tagline: "Beside the world of the play",
            text: "A setting inspired by the material world surrounding Shakespeare's theatre: timber, textiles, candlelight and the intimacy of a shared table. Close enough to hold the atmosphere of the performance. Separate enough to feel like a new chapter.",
            image: BARD_IMGS.hall,
          },
          {
            name: "Sound",
            tagline: "A gentle descent",
            text: "The sound of the performance gives way to music, conversation and the sounds of the banquet. Nothing abrupt. The transition happens gradually.",
          },
          {
            name: "Light",
            tagline: "Candlelight",
            text: "Low, warm illumination keeps the environment visually continuous with the world guests have just inhabited.",
            image: BARD_IMGS.candles,
          },
          {
            name: "Scent",
            tagline: "The world in the air",
            text: "Beeswax, wood, wine and spice create a subtle atmospheric layer. Not a perfume. A background presence.",
          },
          {
            name: "Taste",
            tagline: "The banquet as storytelling",
            text: "Shared food, bread, wine and generous communal serving turn the table into part of the experience.",
            image: BARD_IMGS.chalice,
          },
          {
            name: "Touch",
            tagline: "Everything invites the hand",
            text: "Heavy textiles. Worn wood. Paper menus. Pewter and clay. Materials that make the environment physical rather than purely visual.",
            image: BARD_IMGS.textile,
          },
          {
            name: "Ritual",
            tagline: "The final act",
            text: "Arrival. Welcome. Presentation. Sitting. Sharing. Eating. Drinking. Dancing. Portrait. Leaving. A sequence that gives the evening its rhythm without scripting the people inside it.",
          },
          {
            name: "Memory",
            tagline: "Belonging, carried home",
            text: "The portrait becomes the physical trace. The character becomes the memory. The evening ends — but something remains.",
          },
        ],
      },
      {
        type: "flow",
        eyebrow: "The strategic idea",
        heading: "A new layer around the core product.",
        steps: [
          "Performance",
          "Emotional peak",
          "Transition",
          "Temporary identity",
          "Banquet",
          "Social experience",
          "Portrait / memory",
          "Relationship with the venue",
        ],
        note: "The concept creates an experiential layer around the core theatre product. Not a dinner attached to a show. A designed continuation of the theatrical experience. The intention is not simply to keep people in the building longer. It is to explore whether the transition out of the performance can become part of the experience itself.",
      },
      {
        type: "opportunities",
        eyebrow: "Commercial thinking",
        heading: "Potential opportunities to explore.",
        items: [
          "Premium ticket packages",
          "Hospitality",
          "Food & beverage",
          "Private events",
          "Memberships",
          "Repeat attendance",
          "Cultural programming",
          "Partnerships",
        ],
        note: "These are hypotheses to explore and test, not guaranteed outcomes. The commercial case would need to be validated through a pilot, with evidence gathered around participation, behaviour, operational feasibility and audience response.",
      },
      {
        type: "editorial",
        eyebrow: "The design question",
        heading: "What if the story didn't end when the curtain fell?",
        paragraphs: [
          "The Bard’s Banquet began with a simple observation: the feeling of being transported somewhere can disappear very quickly when the performance ends.",
          "The concept asks what might happen if that transition were treated as a designed part of the experience.",
        ],
      },
      {
        type: "statement",
        text: "“You cannot stop the spell from ending. You can design how it ends.”",
        note: "Independent speculative concept. Not commissioned. Not built.",
      },
    ],
  },
];

export const getConcept = (slug) => CONCEPTS.find((c) => c.slug === slug);

export const getNextConcept = (slug) =>
  CONCEPTS.find((c) => c.slug !== slug);
