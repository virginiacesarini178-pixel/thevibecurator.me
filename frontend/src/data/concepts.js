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
  theatre: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Shakespeare%27s_Globe_Theatre_-_geograph.org.uk_-_765341.jpg",
  hall: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Great_Hall%2C_Hampton_Court_Palace_-_geograph.org.uk_-_3775516.jpg",
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
        "The audience has just spent two hours inside another world. Then the lights come up. The applause fades. The spell breaks. They return to their coats. They return to 2026. They leave. The Bard’s Banquet is designed around the moment immediately after the performance.",
      image: BARD_IMGS.hero,
      imageAlt: "The Peasant Wedding by Pieter Bruegel the Elder (1567): a banquet as Shakespeare’s company would have known it",
    },
    credits:
      "Imagery: The Peasant Wedding (Bruegel the Elder, 1567) and Banquet Scene in a Renaissance Hall (Dirck Hals, 1628), public domain. Shakespeare’s Globe and the Great Hall at Hampton Court Palace via Wikimedia Commons, CC BY-SA 2.0.",
    sections: [
      {
        type: "editorial",
        eyebrow: "The problem",
        heading: "The spell breaks in moments.",
        paragraphs: [
          "There is no designed transition between the world of the play and the world outside it.",
          "The Elizabethan spell, built over two hours, dissolves in moments. People leave carrying the atmosphere of the performance in their bodies, but there is nowhere for that feeling to go.",
        ],
        image: BARD_IMGS.theatre,
        imageAlt: "Inside Shakespeare’s Globe Theatre, London",
      },
      {
        type: "statement",
        eyebrow: "The insight",
        text: "“Every performance. Every night. The most emotionally open moment gets lost. The Bard’s Banquet is designed for exactly this moment.”",
      },
      {
        type: "vision",
        eyebrow: "The vision",
        questions: [
          "What if the story didn’t end with the applause?",
          "What if the guests who came to watch the play could become part of it, not as audience, but as people who belonged to that world?",
        ],
        closing: "Not another event. A transition. A ritual. A continuation of the story.",
      },
      {
        type: "sequence",
        eyebrow: "The experience",
        heading: "A sequence, not an event.",
        steps: [
          {
            title: "The Performance Ends",
            text: "The lights come up. The applause fades.",
          },
          {
            title: "The Transition",
            text: "Instead of immediately returning to the modern world, guests are invited into a space inspired by the world they have just inhabited.",
          },
          {
            title: "The Banquet",
            text: "A candlelit, atmospheric gathering inspired by Elizabethan hospitality: candlelight, theatrical textiles, timber, food, wine, music and scent woven into one table.",
          },
          {
            title: "Belonging",
            text: "The guest is no longer simply a spectator. They temporarily become part of another world.",
          },
          {
            title: "The Memory",
            text: "The experience creates a physical and sensory bridge between the performance and the memory of it.",
          },
        ],
        closing:
          "The objective is not simply to extend dwell time. It is to extend the emotional life of the performance.",
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
            text: "A Tudor great hall of timber and tapestry, close enough to hold the atmosphere, separate enough to gather.",
            image: BARD_IMGS.hall,
          },
          {
            name: "Sound",
            tagline: "A gentle descent",
            text: "The score of the evening dissolves into low strings and conversation. Nothing abrupt: sound lowers the audience gently back into their bodies.",
          },
          {
            name: "Light",
            tagline: "Candlelight only",
            text: "Low, warm illumination. No overhead glare; the eyes never have to re-adjust to the modern world all at once.",
            image: BARD_IMGS.candles,
          },
          {
            name: "Scent",
            tagline: "The world in the air",
            text: "Beeswax, old wood, wine and spice: a quiet sensory layer that keeps the theatrical world present.",
          },
          {
            name: "Taste",
            tagline: "The banquet as story",
            text: "Shared platters, dark bread, wine poured generously: food that belongs to the world just watched.",
            image: BARD_IMGS.chalice,
          },
          {
            name: "Touch",
            tagline: "Everything invites the hand",
            text: "Heavy textiles, worn wood, paper menus, pewter and clay: every surface within reach is tactile.",
            image: BARD_IMGS.textile,
          },
          {
            name: "Ritual",
            tagline: "The final act",
            text: "Arriving, being welcomed, sitting, sharing, eating, drinking and leaving: a sequence choreographed like a closing scene.",
          },
          {
            name: "Memory",
            tagline: "Belonging, carried home",
            text: "The guest leaves with the feeling that the play continued a little longer, and that for one evening, they belonged inside it.",
          },
        ],
      },
      {
        type: "flow",
        eyebrow: "The strategic idea",
        heading: "A new layer around the core product.",
        steps: [
          "The Performance",
          "Emotional Peak",
          "Post-Show Transition",
          "Banquet",
          "Memory",
          "Relationship with the Venue",
        ],
        note: "The concept creates a new experiential layer around the core theatre product: not a dinner attached to a show, but a designed continuation of it.",
      },
      {
        type: "opportunities",
        eyebrow: "Commercial thinking",
        heading: "Potential commercial opportunities.",
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
        note: "These are possibilities to be explored and tested, not guaranteed outcomes. No figures are claimed; the value case would be built and measured during a pilot.",
      },
    ],
  },
];

export const getConcept = (slug) => CONCEPTS.find((c) => c.slug === slug);

export const getNextConcept = (slug) =>
  CONCEPTS.find((c) => c.slug !== slug);
