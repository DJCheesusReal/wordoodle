const WORDLE_SOLUTIONS = [
    "aback", "abase", "abate", "abbey", "abide", "about", "above", "abyss", "acorn", "acrid", "actor", "acute", "adage",
    "adapt", "adept", "admin", "admit", "adobe", "adopt", "adore", "adult", "affix", "after", "again", "agape", "agate",
    "agent", "agile", "aging", "aglow", "agony", "agree", "ahead", "aisle", "alarm", "album", "alert", "alien", "alike",
    "alive", "allow", "aloft", "alone", "along", "aloof", "aloud", "alpha", "altar", "alter", "amass", "amber", "amble",
    "amiss", "ample", "angel", "anger", "angle", "angry", "angst", "annex", "anode", "antic", "anvil", "aorta", "apart",
    "aphid", "apple", "apply", "apron", "aptly", "arbor", "ardor", "argue", "aroma", "arrow", "artsy", "ascot", "ashen",
    "aside", "askew", "assay", "asset", "atlas", "atoll", "atone", "atria", "audio", "audit", "avail", "avert", "await",
    "awake", "award", "aware", "awash", "awful", "axiom", "azure", "bacon", "badge", "badly", "bagel", "baker", "baler",
    "balmy", "balsa", "banal", "banjo", "barge", "basic", "basin", "baste", "bathe", "baton", "batty", "bawdy", "bayou",
    "beach", "beady", "beast", "beaut", "beefy", "beget", "begin", "being", "belch", "belie", "belly", "below", "bench",
    "beret", "berth", "beset", "bevel", "bicep", "bilge", "binge", "biome", "birch", "birth", "black", "blade", "blame",
    "bland", "blank", "blare", "blaze", "bleak", "bleed", "bleep", "blend", "blimp", "blink", "bliss", "block", "bloke",
    "blond", "blown", "bluff", "blunt", "blurb", "blurt", "blush", "board", "boast", "bongo", "bonus", "booby", "boost",
    "booty", "booze", "boozy", "borax", "borne", "bossy", "bough", "boxer", "brace", "braid", "brain", "brake", "brand",
    "brash", "brass", "brave", "bravo", "brawn", "bread", "break", "breed", "briar", "bribe", "bride", "brief", "brine",
    "bring", "brink", "briny", "brisk", "broad", "broke", "brook", "broom", "broth", "brown", "brush", "brute", "buddy",
    "buggy", "bugle", "build", "built", "bulge", "bulky", "bully", "bunch", "burly", "burnt", "cable", "cacao", "cache",
    "cadet", "camel", "cameo", "candy", "canny", "canoe", "canon", "caper", "carat", "cargo", "carol", "carry", "carve",
    "catch", "cater", "caulk", "cause", "cease", "cedar", "chafe", "chain", "chair", "chalk", "champ", "chant", "chaos",
    "chard", "charm", "chart", "chase", "cheap", "cheat", "check", "cheek", "cheer", "chest", "chief", "child", "chill",
    "chime", "chirp", "chock", "choir", "choke", "chord", "chore", "chose", "chunk", "chute", "cider", "cigar", "cinch",
    "circa", "civic", "civil", "clash", "class", "clean", "clear", "cleft", "clerk", "click", "climb", "cling", "cloak",
    "clock", "clone", "close", "cloth", "cloud", "clove", "clown", "cluck", "coach", "coast", "cocoa", "colon", "comet",
    "comfy", "comma", "condo", "conic", "coral", "corer", "corny", "could", "count", "court", "coven", "cover", "covet",
    "cower", "coyly", "craft", "cramp", "crane", "crank", "crass", "crate", "crave", "crawl", "craze", "crazy", "creak",
    "cream", "credo", "crepe", "crept", "crest", "crime", "crimp", "crisp", "croak", "crone", "crook", "cross", "crowd",
    "crown", "crumb", "crush", "crust", "crypt", "cumin", "curio", "curly", "curse", "curve", "cyber", "cynic", "daddy",
    "daisy", "dally", "dance", "dandy", "datum", "daunt", "death", "debit", "debug", "debut", "decal", "decay", "decoy",
    "decry", "defer", "deity", "delay", "delta", "delve", "denim", "depot", "depth", "deter", "devil", "diary", "dicey",
    "digit", "diner", "dingo", "dingy", "dirge", "disco", "ditto", "ditty", "dodge", "dogma", "doing", "dolly", "donor",
    "donut", "dopey", "doubt", "dowel", "dowry", "dozen", "draft", "drain", "drape", "drawn", "dread", "dream", "drift",
    "drink", "drive", "droll", "drone", "drool", "droop", "drove", "dryer", "duchy", "dummy", "dutch", "duvet", "dwarf",
    "dwell", "dwelt", "eager", "eagle", "early", "earth", "easel", "ebony", "edict", "edify", "egret", "eject", "elate",
    "elbow", "elder", "elite", "elope", "elude", "email", "ember", "empty", "enact", "endow", "enema", "enjoy", "ennui",
    "ensue", "enter", "epoch", "epoxy", "equal", "equip", "erode", "error", "erupt", "essay", "ether", "ethic", "ethos",
    "evade", "event", "every", "evoke", "exact", "exalt", "excel", "exert", "exile", "exist", "expel", "extol", "extra",
    "exult", "facet", "faint", "faith", "false", "fancy", "farce", "fault", "favor", "feast", "feign", "feral", "ferry",
    "fetch", "fever", "fewer", "fiber", "field", "fiend", "fifth", "fifty", "filet", "final", "finch", "finer", "first",
    "fishy", "fixer", "fjord", "flail", "flair", "flake", "flame", "flank", "flare", "flash", "flask", "flesh", "flick",
    "fling", "flint", "flirt", "float", "flock", "flood", "floor", "flora", "floss", "flour", "flout", "flown", "fluff",
    "flume", "flung", "flunk", "flyer", "foamy", "focal", "focus", "foggy", "foist", "folio", "folly", "foray", "force",
    "forge", "forgo", "forte", "forth", "forty", "found", "foyer", "frail", "frame", "frank", "fresh", "fried", "frill",
    "fritz", "frock", "frond", "front", "frost", "froth", "frown", "froze", "fully", "fungi", "funky", "funny", "fuzzy",
    "gamer", "gamma", "gamut", "gaudy", "gaunt", "gauze", "gawky", "gecko", "geese", "genie", "genre", "ghost", "ghoul",
    "giant", "giddy", "girth", "given", "glade", "gland", "glass", "glaze", "gleam", "glean", "glide", "gloat", "globe",
    "gloom", "glory", "glove", "glyph", "gnash", "gnome", "gofer", "going", "golem", "goner", "goody", "gooey", "goofy",
    "goose", "gorge", "gouge", "grace", "grade", "graft", "grail", "grain", "grand", "grant", "graph", "grasp", "grate",
    "great", "greed", "green", "greet", "grief", "grift", "grime", "grimy", "grind", "gripe", "groan", "groin", "groom",
    "group", "grout", "grove", "growl", "grown", "gruel", "guano", "guard", "guest", "guide", "guild", "guile", "gully",
    "gummy", "guppy", "gusty", "habit", "hairy", "halve", "handy", "happy", "harsh", "hatch", "hater", "haunt", "havoc",
    "hazel", "heady", "heard", "heart", "heath", "heave", "heavy", "hefty", "heist", "helix", "hello", "hence", "heron",
    "hilly", "hinge", "hippo", "hitch", "hoard", "hobby", "homer", "honey", "horde", "horse", "hotel", "hound", "house",
    "hover", "howdy", "human", "humid", "humor", "humph", "hunch", "hunky", "hurry", "hutch", "hyena", "hyper", "icing",
    "idiom", "idler", "igloo", "image", "imbue", "impel", "inane", "inbox", "incur", "index", "indie", "inept", "inert",
    "infer", "inlay", "inner", "input", "inter", "intro", "ionic", "irate", "irony", "islet", "issue", "itchy", "ivory",
    "jaunt", "jazzy", "jelly", "jerky", "jewel", "jiffy", "joint", "joker", "jolly", "joust", "judge", "juice", "jumpy",
    "karma", "kayak", "kazoo", "kebab", "kefir", "khaki", "kiosk", "knack", "knave", "knead", "kneel", "knell", "knelt",
    "knife", "knock", "knoll", "known", "koala", "krill", "label", "labor", "ladle", "lager", "lanky", "lapel", "lapse",
    "large", "larva", "laser", "lasso", "later", "latte", "laugh", "layer", "leafy", "leaky", "leapt", "learn", "lease",
    "leash", "least", "leave", "ledge", "leech", "leery", "lefty", "leggy", "lemon", "lemur", "level", "libel", "light",
    "lilac", "limit", "linen", "liner", "lingo", "lithe", "liver", "livid", "llama", "local", "locus", "lodge", "lofty",
    "logic", "loopy", "loris", "loser", "louse", "lousy", "lover", "lower", "lowly", "loyal", "lucid", "lucky", "lumpy",
    "lunar", "lunch", "lunge", "lusty", "lying", "macaw", "macho", "madam", "madly", "magic", "magma", "maize", "major",
    "mambo", "manga", "mango", "mania", "manly", "manor", "maple", "march", "marry", "marsh", "mason", "masse", "match",
    "matey", "matte", "mauve", "maxim", "maybe", "mayor", "mealy", "meant", "medal", "media", "medic", "melon", "mercy",
    "merge", "merit", "merry", "metal", "meter", "metro", "micro", "midge", "midst", "might", "mimic", "mince", "miner",
    "minty", "minus", "mirth", "modal", "model", "modem", "moist", "molar", "moldy", "mommy", "money", "month", "moose",
    "moral", "mossy", "motor", "motto", "moult", "mount", "mourn", "mouse", "mouth", "movie", "mucky", "mulch", "mummy",
    "munch", "mural", "mushy", "music", "musty", "nadir", "naive", "nanny", "nasal", "nasty", "natal", "naval", "navel",
    "needy", "neigh", "nerdy", "nerve", "nervy", "never", "nicer", "niche", "night", "ninja", "ninth", "noble", "noise",
    "noisy", "nomad", "north", "novel", "nudge", "nurse", "nymph", "occur", "ocean", "octet", "oddly", "offal", "offer",
    "often", "older", "olive", "omega", "onion", "onset", "opera", "order", "organ", "other", "otter", "ought", "ounce",
    "outdo", "outer", "overt", "owner", "oxide", "ozone", "paint", "panel", "panic", "papal", "paper", "parer", "parry",
    "party", "pasta", "patch", "patio", "patsy", "patty", "pause", "peace", "peach", "pearl", "pedal", "penne", "perch",
    "perky", "pesky", "petal", "petty", "phase", "phone", "phony", "photo", "piano", "picky", "piece", "piety", "pilot",
    "pinch", "piney", "pinky", "pinto", "pious", "piper", "pique", "pitch", "pithy", "pixel", "pixie", "place", "plaid",
    "plain", "plait", "plank", "plant", "plate", "plaza", "pleat", "pluck", "plumb", "plunk", "point", "poise", "poker",
    "polar", "polka", "polyp", "poppy", "porch", "pound", "pouty", "power", "prank", "preen", "press", "price", "prick",
    "pride", "prime", "primo", "primp", "print", "prior", "prize", "probe", "prone", "prong", "prose", "proud", "prove",
    "prowl", "proxy", "prune", "psalm", "pulpy", "pupil", "purge", "quail", "quake", "qualm", "quart", "quash", "queen",
    "query", "quest", "queue", "quick", "quiet", "quill", "quirk", "quite", "quota", "quote", "radio", "rainy", "raise",
    "ramen", "ranch", "range", "rapid", "ratio", "ratty", "rayon", "reach", "react", "ready", "realm", "rebel", "rebus",
    "rebut", "recap", "recur", "refer", "regal", "relax", "relic", "renew", "repay", "repel", "rerun", "resin", "retch",
    "retro", "retry", "reuse", "revel", "revue", "rhino", "rhyme", "rider", "ridge", "right", "rigid", "riper", "risen",
    "rival", "rivet", "roach", "robin", "robot", "rocky", "rodeo", "rogue", "roomy", "rouge", "rough", "round", "rouse",
    "route", "rover", "rowdy", "rower", "royal", "ruddy", "ruder", "rumba", "rupee", "rusty", "saint", "salad", "sally",
    "salsa", "salty", "sandy", "sassy", "saucy", "sauna", "saute", "savor", "savvy", "scald", "scale", "scant", "scare",
    "scarf", "scent", "scoff", "scold", "scone", "scope", "score", "scorn", "scour", "scout", "scowl", "scram", "scrap",
    "scrub", "scrum", "sedan", "seedy", "sense", "serum", "serve", "seven", "sever", "shade", "shaft", "shake", "shaky",
    "shall", "shame", "shank", "shape", "shard", "share", "sharp", "shave", "shawl", "shear", "sheet", "shelf", "shell",
    "shift", "shine", "shire", "shirk", "shore", "shorn", "shout", "shove", "shown", "showy", "shrub", "shrug", "shuck",
    "shunt", "shush", "shyly", "siege", "sight", "silly", "since", "sissy", "sixth", "skate", "skier", "skiff", "skill",
    "skimp", "skirt", "skunk", "slang", "slate", "sleek", "sleep", "slice", "slope", "slosh", "sloth", "slump", "slung",
    "small", "smart", "smash", "smear", "smelt", "smile", "smirk", "smite", "smith", "smock", "smoke", "snack", "snafu",
    "snail", "snake", "snaky", "snare", "snarl", "sneak", "snoop", "snort", "snout", "soggy", "solar", "solid", "solve",
    "sonic", "sorry", "sound", "south", "sower", "space", "spade", "spare", "spark", "spasm", "spate", "speak", "spear",
    "speck", "spell", "spelt", "spend", "spent", "spice", "spicy", "spiel", "spike", "spill", "spine", "spire", "spite",
    "splat", "split", "spoil", "spoke", "spoon", "spore", "sport", "spout", "spray", "sprig", "spurt", "squad", "squat",
    "squid", "staff", "stage", "staid", "stain", "stair", "stake", "stale", "stall", "stamp", "stand", "stare", "stark",
    "start", "stash", "state", "stead", "steam", "steed", "steel", "steep", "stein", "stern", "stick", "stiff", "still",
    "stilt", "sting", "stink", "stint", "stock", "stoic", "stole", "stomp", "stone", "stony", "stood", "stool", "store",
    "stork", "storm", "story", "stout", "stove", "strap", "straw", "stray", "study", "stump", "stung", "style", "suave",
    "suede", "sugar", "suite", "sulky", "sunny", "super", "surer", "surly", "sushi", "swath", "sweat", "sweep", "sweet",
    "swell", "swill", "swine", "swirl", "swish", "swoon", "sword", "swung", "syrup", "table", "taboo", "tacit", "tacky",
    "taffy", "taken", "tally", "talon", "tangy", "taper", "tapir", "tardy", "taste", "tasty", "taunt", "taupe", "tawny",
    "teach", "teary", "tease", "teeth", "tempo", "tenor", "tenth", "tepid", "terse", "thank", "their", "theme", "there",
    "these", "thief", "thigh", "thing", "think", "third", "thorn", "those", "three", "threw", "throb", "throw", "thrum",
    "thumb", "thump", "thyme", "tiara", "tibia", "tidal", "tiger", "tilde", "timer", "tipsy", "titan", "tithe", "title",
    "tizzy", "toast", "today", "tonic", "tooth", "topaz", "topic", "torch", "torso", "total", "totem", "touch", "tough",
    "towel", "tower", "toxic", "toxin", "trace", "track", "tract", "trade", "trail", "train", "trait", "trash", "trawl",
    "treat", "trend", "triad", "trice", "trick", "tripe", "trite", "troll", "troop", "trope", "trout", "trove", "truly",
    "truss", "trust", "truth", "tryst", "tunic", "turbo", "tutor", "twang", "tweak", "tweed", "twice", "twine", "twirl",
    "twist", "udder", "ulcer", "ultra", "uncle", "under", "undid", "undue", "unfed", "unfit", "unify", "union", "unite",
    "unlit", "unmet", "untie", "until", "unzip", "upper", "upset", "urban", "usage", "usher", "using", "usual", "usurp",
    "utter", "uvula", "vague", "valet", "valid", "value", "vapid", "vault", "venom", "verge", "verse", "verve", "video",
    "vigor", "villa", "vinyl", "viola", "viral", "visor", "vital", "vivid", "vixen", "vodka", "voice", "voila", "voter",
    "vouch", "vying", "wacky", "wafer", "wagon", "waltz", "waste", "watch", "water", "weary", "wedge", "weedy", "weird",
    "whack", "whale", "wheat", "wheel", "whelp", "where", "which", "whiff", "while", "whine", "whiny", "whirl", "whisk",
    "whole", "whoop", "whose", "widen", "width", "wince", "windy", "witch", "witty", "woken", "woman", "wooer", "wordy",
    "world", "worry", "worse", "worst", "would", "woven", "wrath", "wreak", "wrist", "write", "wrong", "wrote", "wrung",
    "yacht", "yearn", "yeast", "yield", "young", "youth", "zebra", "zesty"
];

const WORDLE_GUESSES = [
    "aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "abacs", "abaft", "abaka", "abamp", "aband", "abash", "abask",
    "abaya", "abbas", "abbed", "abbes", "abcee", "abeam", "abear", "abele", "abers", "abets", "abies", "abjad", "abjud",
    "abler", "ables", "ablet", "ablow", "abmho", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "abram", "abray",
    "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abuts", "abuzz", "abyes", "abys", "acais", "acari",
    "accas", "accoy", "acerb", "acers", "aceta", "achar", "ached", "aches", "achoo", "acids", "acidy", "acing", "acini",
    "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acred", "acres", "acros", "acted", "actin",
    "acton", "acyls", "adaws", "adays", "adbot", "addax", "added", "adder", "addio", "addle", "adeem", "adhan", "adieu",
    "adios", "adits", "adman", "admen", "admix", "adobo", "adown", "adoze", "adrad", "adred", "adsum", "aduki", "adunc",
    "adust", "advew", "adyta", "adzed", "adzes", "aecia", "aedes", "aegis", "aeons", "aerie", "aeros", "aesir", "afald",
    "afara", "afars", "afear", "aflaj", "afore", "afrit", "afros", "agars", "agas", "agave", "agaze", "agene", "agers",
    "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agila", "agios", "agism", "agist", "agita", "aglee", "aglet",
    "agley", "agloo", "aglus", "agmas", "agoge", "agone", "agons", "agood", "agora", "agria", "agrin", "agros", "agued",
    "agues", "aguna", "aguti", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahull", "ahuru", "aidas",
    "aided", "aider", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimed", "aimer", "ainee", "ainga",
    "aioli", "aired", "airer", "airns", "airth", "airts", "aitch", "aitus", "aiver", "aiyee", "aizle", "ajies", "ajiva",
    "ajuga", "ajwan", "akees", "akela", "akene", "aking", "akita", "akkas", "alaap", "alack", "alamo", "aland", "alane",
    "alang", "alans", "alant", "alapa", "alaps", "alary", "alate", "alays", "albas", "albee", "alcid", "alcos", "aldea",
    "alder", "aldol", "aleck", "alecs", "alefs", "aleft", "aleph", "alews", "aleye", "alfas", "algal", "algas", "algid",
    "algin", "algor", "algum", "alias", "alifs", "aline", "alist", "aliya", "alkie", "alkos", "alkyd", "alkyl", "allee",
    "allel", "allis", "allod", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "alods", "aloed", "aloes",
    "aloha", "aloin", "aloos", "alowe", "altho", "altos", "alula", "alums", "alure", "alvar", "alway", "amahs", "amain",
    "amate", "amaut", "amban", "ambit", "ambos", "ambry", "ameba", "ameer", "amene", "amens", "ament", "amias", "amice",
    "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amlas", "amman",
    "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "amort", "amour", "amove", "amowt", "amped", "ampul",
    "amrit", "amuck", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "andro", "anear", "anele", "anent", "angas",
    "anglo", "anigh", "anile", "anils", "anima", "anime", "animi", "anion", "anise", "anker", "ankhs", "ankus", "anlas",
    "annal", "annas", "annat", "anoas", "ansae", "antae", "antar", "antas", "anted", "antes", "antis", "antra", "antre",
    "antsy", "anura", "anyon", "apace", "apage", "apaid", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery",
    "apgar", "aphis", "apian", "apiol", "apish", "apism", "apnea", "apode", "apods", "apoop", "aport", "appal", "appay",
    "appel", "appro", "appui", "appuy", "apres", "apses", "apsis", "apsos", "apted", "apter", "aquae", "aquas", "araba",
    "araks", "arame", "arars", "arbas", "arced", "archi", "arcos", "arcus", "ardeb", "ardri", "aread", "areae", "areal",
    "arear", "areas", "areca", "aredd", "arede", "arefy", "areic", "arena", "arene", "arepa", "arere", "arete", "arets",
    "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argus", "arhat", "arias", "ariel", "ariki",
    "arils", "ariot", "arish", "arked", "arled", "arles", "armed", "armer", "armet", "armil", "arnas", "arnut", "aroba",
    "aroha", "aroid", "arpas", "arpen", "arrah", "arras", "arret", "arris", "arroz", "arsed", "arses", "arsey", "arsis",
    "arsle", "arson", "artal", "artel", "artic", "artis", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asana",
    "ascon", "ascus", "asdic", "ashed", "ashes", "ashet", "asked", "asker", "askoi", "askos", "aspen", "asper", "aspic",
    "aspie", "aspis", "aspro", "assai", "assam", "asses", "assez", "assot", "aster", "astir", "astun", "asway", "aswim",
    "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atman", "atmas", "atmos", "atocs", "atoke", "atoks",
    "atoms", "atomy", "atony", "atopy", "atria", "atrip", "attap", "attar", "atuas", "audad", "auger", "aught", "aulas",
    "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric",
    "auris", "aurum", "autos", "auxin", "avale", "avant", "avast", "avels", "avens", "avers", "avgas", "avine", "avion",
    "avise", "aviso", "avize", "avows", "avyze", "awarn", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awing",
    "awmry", "awned", "awner", "awols", "awork", "axels", "axile", "axils", "axing", "axite", "axled", "axles", "axman",
    "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "ayont", "ayres", "ayrie", "azans",
    "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azurn", "azury", "azygy",
    "azyme", "azyms", "baaed", "baals", "babas", "babel", "babes", "babka", "baboo", "babul", "babus", "bacca", "bacco",
    "baccy", "bacha", "bachs", "backs", "baddy", "baels", "baffs", "baffy", "bafts", "baghs", "bagie", "bahts", "bahus",
    "bahut", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baked",
    "baken", "bakes", "bakra", "balas", "balds", "baldy", "baled", "bales", "balks", "balky", "balls", "bally", "balms",
    "baloo", "balus", "bambi", "banco", "bancs", "banda", "bandh", "bands", "bandy", "baned", "banes", "bangs", "bania",
    "banks", "banns", "bants", "bantu", "banty", "banya", "bapus", "barbe", "barbs", "barby", "barca", "barde", "bardo",
    "bards", "bardy", "bared", "barer", "bares", "barf", "barfs", "baric", "barks", "barky", "barms", "barmy", "barns",
    "barny", "barps", "barra", "barre", "barro", "barry", "barye", "basan", "based", "baser", "bases", "basho", "basij",
    "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "basti", "basto", "basts", "batch", "bated", "bates",
    "baths", "batik", "batta", "batts", "battu", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds", "bawks", "bawns",
    "bawrs", "bawty", "bayed", "bayer", "bayes", "bayle", "bayts", "bazar", "bazoo", "beads", "beaks", "beaky", "beals",
    "beams", "beamy", "beano", "beans", "beany", "beare", "bears", "beath", "beats", "beaty", "beaus", "beaux", "bebop",
    "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beech", "beedi", "beefs", "beeps",
    "beers", "beery", "beets", "befit", "befog", "begad", "began", "begar", "begat", "begem", "begot", "begum", "begun",
    "beige", "beigy", "beins", "bekah", "belah", "belar", "belay", "belee", "belga", "bells", "belon", "belts", "bemad",
    "bemas", "bemix", "bemud", "bends", "bendy", "benes", "benet", "benga", "benis", "benne", "benni", "benny", "bento",
    "bents", "benty", "bepat", "beray", "beres", "bergs", "berko", "berks", "berme", "berms", "berob", "berry", "beryls",
    "besat", "besaw", "besee", "beses", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betel", "betes",
    "beths", "betid", "beton", "betta", "betty", "bever", "bevor", "bevue", "bevvy", "bewet", "bewig", "bezes", "bezil",
    "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs",
    "bibes", "biccy", "bices", "biddy", "bided", "bider", "bides", "bidet", "bidis", "bidon", "bield", "biers", "biffo",
    "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bijou", "biked", "biker",
    "bikes", "bikie", "bilby", "biled", "biles", "bilgy", "bilks", "bills", "bimah", "bimas", "bimbo", "binal", "bindi",
    "binds", "biner", "bines", "bings", "bingy", "binit", "binks", "bints", "biogs", "biont", "biota", "biped", "bipod",
    "birds", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "bises", "bisks", "bisom", "bison", "bitch",
    "biter", "bites", "bitos", "bitou", "bitsy", "bitte", "bitts", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs",
    "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blams", "blart", "blase", "blash", "blate",
    "blats", "blatt", "blaud", "blawn", "blaws", "blays", "blear", "blebs", "blecs", "bleeds", "blees", "blent", "blert",
    "blest", "blets", "bleys", "blimy", "bling", "blini", "blins", "bliny", "blips", "blist", "blite", "blits", "blive",
    "blobs", "blocs", "blogs", "blooey", "blooms", "bloomy", "blore", "blots", "blows", "blowy", "blubs", "blude", "bluds",
    "bludy", "blued", "bluer", "blues", "bluet", "bluey", "bluid", "blume", "blunk", "blurs", "blype", "boabs", "boaks",
    "boars", "boart", "boats", "bobac", "bobak", "bobas", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks",
    "boded", "bodes", "bodge", "bodhi", "bodle", "boeps", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy",
    "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boils", "boing", "boink", "boite", "boked", "bokeh", "bokes",
    "bokos", "bolar", "bolas", "bolds", "boles", "bolix", "bolls", "bolos", "bolts", "bolus", "bomas", "bombe", "bombo",
    "bombs", "bonce", "bonds", "boned", "boner", "bones", "bongs", "bonie", "bonks", "bonne", "bonny", "bonza", "bonze",
    "boobs", "boody", "booed", "boofy", "boogy", "boohs", "books", "booky", "bools", "booms", "boomy", "boong", "boons",
    "boord", "boors", "boose", "boots", "boppy", "boral", "boras", "borde", "bords", "bored", "boree", "borel", "borer",
    "bores", "borgo", "boric", "borks", "borms", "borna", "boron", "borts", "borty", "bortz", "bosks", "bosky", "bosom",
    "boson", "bossa", "bossy", "bosun", "botas", "botel", "botes", "bothy", "botte", "botts", "botty", "bouge", "bouks",
    "boult", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bouts", "bovid", "bowat", "bowed", "bowel", "bower",
    "bowes", "bowet", "bowie", "bowls", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxes", "boxla", "boxty", "boyar",
    "boyau", "boyed", "boyfs", "boygs", "boyla", "boyos", "boysy", "bozos", "braai", "brach", "brack", "bract", "brads",
    "braes", "brags", "brail", "braks", "braky", "brame", "brane", "brank", "brans", "brant", "brava", "braws", "braxy",
    "brays", "braza", "braze", "bream", "brede", "breds", "breem", "breer", "brees", "breid", "breis", "breme", "brens",
    "brent", "brere", "brers", "breve", "brews", "breys", "brier", "bries", "brigs", "briki", "briks", "brill", "brims",
    "brins", "brios", "brise", "briss", "brith", "brits", "britt", "brize", "broch", "brock", "brods", "brogh", "brogs",
    "brome", "bromo", "bronc", "brond", "brool", "broos", "brose", "brosy", "brows", "brugh", "bruin", "bruit", "brule",
    "brume", "brung", "brusk", "brust", "bruts", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus",
    "buchu", "bucko", "bucks", "bucku", "budas", "budis", "budos", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy",
    "bufos", "bufty", "buhls", "buhrs", "buiks", "buist", "bukes", "bulbs", "bulgy", "bulks", "bulky", "bulla", "bulls",
    "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunco", "bunde", "bundh", "bunds", "bundt",
    "bundu", "bundy", "bungs", "bungy", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunts", "bunty", "bunya", "buoys",
    "buppy", "buran", "buras", "burbs", "burds", "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks",
    "burls", "burns", "buroo", "burps", "burqa", "burro", "burrs", "burry", "bursa", "burse", "busby", "bused", "buses",
    "busks", "busky", "bussu", "busti", "busts", "busty", "buteo", "butes", "butle", "butoh", "butts", "butty", "butut",
    "butyl", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "byres", "byrls", "byssi", "bytes", "byway",
    "caaed", "cabas", "caber", "cabob", "caboc", "cabre", "cacas", "cacks", "cacky", "cadee", "cades", "cadge", "cadgy",
    "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffs", "caged", "cager", "cages", "cagot", "cahow", "caids",
    "cains", "caird", "cajon", "cajun", "caked", "cakes", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla",
    "calls", "calms", "calmy", "calos", "calpa", "calps", "calve", "calyx", "caman", "camas", "cames", "camis", "camos",
    "campi", "campo", "camps", "campy", "camus", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns",
    "canso", "canst", "canto", "cants", "canty", "capas", "caped", "capes", "capex", "caphs", "capiz", "caple", "capon",
    "capos", "capot", "capri", "capul", "carap", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "cared", "carer",
    "cares", "caret", "carex", "carks", "carle", "carls", "carns", "carny", "carob", "carom", "caron", "carpi", "carps",
    "carrs", "carse", "carta", "carte", "carts", "carvy", "casas", "casco", "cased", "cases", "casks", "casky", "casts",
    "casus", "cates", "cauda", "cauks", "cauld", "cauls", "caums", "caups", "cauri", "causa", "cavas", "caved", "cavel",
    "caver", "caves", "cavie", "cawed", "cawks", "caxon", "ceaze", "cebid", "cecal", "cecum", "ceebs", "ceili", "ceils",
    "celeb", "cella", "celli", "cells", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci",
    "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti",
    "cetes", "cetyl", "cezve", "chace", "chack", "chaco", "chado", "chads", "chaff", "chags", "chals", "chams", "chana",
    "chang", "chank", "chape", "chaps", "chapt", "chara", "chare", "chark", "charr", "chars", "chary", "chats", "chave",
    "chavs", "chawk", "chaws", "chaya", "chays", "cheba", "chedi", "cheka", "chela", "chelp", "chemo", "chems", "chere",
    "chert", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chibs", "chica", "chich", "chico", "chics", "chiel",
    "chiks", "chile", "chimb", "chimo", "chimp", "chine", "ching", "chink", "chino", "chins", "chips", "chirk", "chirl",
    "chirm", "chiro", "chirr", "chirt", "chiru", "chits", "chive", "chivs", "chivy", "chizz", "choco", "chocs", "chode",
    "chogs", "choil", "choli", "chomp", "chons", "choof", "chook", "choom", "choon", "chops", "chota", "chott", "chout",
    "choux", "chowk", "chows", "chubs", "chufa", "chuff", "chugs", "chums", "churl", "churn", "churr", "chuse", "chuts",
    "chyle", "chyme", "chynd", "cibol", "cided", "cides", "ciels", "ciggy", "cilia", "cills", "cimar", "cimex", "cinct",
    "cines", "cinqs", "cions", "cippi", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "cited",
    "citer", "cites", "cives", "civet", "chivy", "civie", "civvy", "clach", "clack", "clade", "clads", "claes", "clags",
    "clame", "clams", "clans", "claps", "clapt", "claro", "clart", "clary", "clast", "clats", "claut", "clave", "clavi",
    "claws", "clays", "cleck", "cleek", "cleep", "clefs", "clegs", "cleik", "clems", "clepe", "clept", "cleve", "clews",
    "clied", "clies", "clift", "clime", "cline", "clint", "clipe", "clips", "clipt", "clits", "cloam", "clods", "cloff",
    "clogs", "cloke", "clomb", "clomp", "clonk", "clons", "cloot", "clope", "clops", "clote", "clots", "clour", "clous",
    "clows", "cloye", "cloys", "cloze", "clubs", "clues", "cluey", "clunk", "clype", "cnida", "coact", "coady", "coala",
    "coals", "coaly", "coapt", "coarb", "coate", "coati", "coats", "cobbs", "cobby", "cobia", "coble", "cobra", "cobza",
    "cocas", "cocci", "cocco", "cocks", "cocky", "cocos", "codas", "codec", "coded", "coden", "coder", "codes", "codex",
    "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign",
    "coils", "coins", "coirs", "coits", "coked", "cokes", "colas", "colby", "colds", "coled", "coles", "coley", "colic",
    "colin", "colls", "colly", "colog", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs",
    "comby", "comer", "comes", "comix", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus", "coned",
    "cones", "coney", "confs", "conga", "conge", "congo", "conia", "conin", "conks", "conky", "conne", "conns", "conte",
    "conto", "conus", "convo", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", "cools", "cooly",
    "coomb", "cooms", "coomy", "coons", "coops", "coopt", "coost", "coots", "cooze", "copal", "copay", "coped", "copen",
    "coper", "copes", "coppy", "copra", "copsy", "coqui", "coram", "corbe", "corby", "cords", "cored", "cores", "corey",
    "corgi", "coria", "corks", "corky", "corms", "corni", "corno", "corns", "cornu", "corps", "corse", "corso", "cosec",
    "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "coted", "cotes", "coths", "cotta",
    "cotts", "coude", "coups", "courb", "courd", "coure", "cours", "couta", "couth", "coved", "coves", "covin", "cowal",
    "cowan", "cowed", "cower", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau",
    "coyed", "coyer", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie", "craal", "crabs", "crags", "craic", "craig",
    "crake", "crame", "crams", "crans", "crape", "craps", "crapy", "crare", "craws", "crays", "creds", "creel", "crees",
    "crems", "crena", "creps", "crepy", "crewe", "crews", "crias", "cribs", "cries", "crims", "crine", "crios", "crise",
    "crith", "crits", "croci", "crocs", "croft", "crogs", "cromb", "crome", "cronk", "crons", "crool", "croon", "crops",
    "crore", "crosa", "crose", "cross", "crost", "croup", "crout", "crow", "crows", "croze", "cruck", "crudo", "cruds",
    "crudy", "crues", "cruet", "cruft", "crunk", "cruor", "crura", "cruse", "crusy", "cruve", "crwth", "cryer", "ctene",
    "cubby", "cubeb", "cubed", "cuber", "cubes", "cubit", "cuddy", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits",
    "cukes", "culch", "culet", "culex", "culls", "cully", "culm", "culms", "culot", "culti", "cults", "culty", "cumec",
    "cundy", "cunei", "cunts", "cupel", "cupid", "cuppa", "cuppy", "curat", "curbs", "curch", "curds", "curdy", "cured",
    "curer", "cures", "curet", "curfs", "curia", "curie", "curli", "curls", "curly", "curns", "curny", "currs", "curry",
    "cursi", "curst", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey",
    "cutie", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cycad", "cycas",
    "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cysts", "cytes", "cyton", "czars", "daces",
    "dacha", "dacks", "dadah", "dadas", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahls", "daiko", "daine",
    "daint", "daker", "daled", "dales", "dalis", "dalle", "dalts", "daman", "damar", "dames", "damme", "damns", "damps",
    "dampy", "dancy", "dangs", "danio", "danks", "danny", "dants", "daraf", "darbs", "darcy", "dared", "darer", "dares",
    "darga", "dargs", "daric", "daris", "darks", "darky", "darns", "darre", "darts", "darzi", "dashi", "dashy", "datal",
    "dated", "dater", "dates", "datos", "datto", "daube", "daubs", "dauby", "dauds", "dault", "daurs", "dauts", "daven",
    "davit", "dawah", "dawds", "dawed", "dawen", "dawks", "dawns", "dawts", "dayan", "daych", "daynt", "dazed", "dazer",
    "dazes", "deads", "deair", "deals", "dealt", "deans", "deare", "dearn", "dears", "deary", "deash", "deave", "deaws",
    "deawy", "debag", "debar", "debby", "debel", "debes", "debts", "debud", "debur", "debus", "debye", "decad", "decaf",
    "decan", "decko", "decks", "decos", "dedal", "deeds", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers",
    "deets", "deeve", "deevs", "defat", "deffo", "defis", "defog", "degas", "degum", "degus", "deice", "deids", "deify",
    "deign", "deils", "deism", "deist", "deked", "dekes", "dekko", "deled", "deles", "delfs", "delft", "delis", "dells",
    "delly", "delos", "delph", "delts", "deman", "demes", "demic", "demit", "demob", "demoi", "demon", "demos", "dempt",
    "denar", "denay", "dench", "denes", "denet", "denis", "dents", "deoxy", "derat", "deray", "dered", "deres", "derig",
    "derma", "derms", "derns", "derny", "deros", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks",
    "desse", "devas", "devel", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie",
    "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoti", "dhows", "dhuti", "diact", "dials",
    "diane", "diazo", "dibbs", "diced", "dicer", "dices", "dicht", "dicks", "dicky", "dicot", "dicta", "dicts", "dicty",
    "diddy", "didie", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "dikas", "diked", "diker",
    "dikes", "dikey", "dildo", "dilli", "dills", "dimbo", "dimer", "dimes", "dimps", "dinar", "dined", "dines", "dinge",
    "dings", "dinic", "dinks", "dinky", "dinna", "dinos", "dints", "diols", "diota", "dippy", "dipso", "diram", "direr",
    "dirke", "dirks", "dirls", "dirts", "disas", "disci", "discs", "dishy", "disks", "disme", "dital", "ditas", "dited",
    "dites", "ditsy", "ditts", "ditzy", "divan", "divas", "dived", "dives", "divis", "divna", "divos", "divot", "divvy",
    "diwan", "dixit", "dizen", "djinn", "djins", "doabs", "doats", "dobby", "dobes", "dobie", "dobla", "dobra", "dobro",
    "docht", "docks", "docos", "docus", "doddy", "dodos", "doeks", "doers", "doest", "doeth", "doffs", "dogan", "doges",
    "dogey", "doggo", "doggy", "dogie", "dohyo", "doilt", "doily", "doits", "dojos", "dolce", "dolci", "doled", "doles",
    "dolia", "dolls", "dolma", "dolor", "dolos", "dolts", "domal", "domed", "domes", "domic", "donah", "donas", "donee",
    "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donsy", "doobs", "dooce", "doody", "dooks", "doole",
    "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped", "doper", "dopes", "dorad",
    "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa",
    "dorse", "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses", "dosha", "dotal", "doted", "doter",
    "dotes", "dotty", "douar", "douce", "doucs", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts",
    "doved", "doven", "dover", "doves", "dovie", "dowak", "dowar", "dowds", "dowdy", "dowed", "dower", "dowie", "dowle",
    "dowls", "dowly", "downa", "downs", "downy", "dowps", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly",
    "dozed", "dozer", "dozes", "drabs", "drack", "draco", "draff", "drags", "drail", "drams", "drant", "drape", "draps",
    "drats", "drave", "draws", "drays", "drear", "dreck", "dreed", "dreer", "drees", "dregs", "dreks", "drent", "drere",
    "drest", "drets", "drew", "dribs", "drice", "dries", "drily", "drips", "dript", "droid", "droil", "droke", "drole",
    "drome", "drony", "droob", "droog", "drook", "drops", "dropt", "drouk", "drows", "drubs", "drugs", "drums", "drupe",
    "druse", "drusy", "druxy", "dryad", "dryas", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "ducal",
    "ducat", "duces", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus",
    "duing", "duits", "dukas", "duked", "dukes", "dukka", "dulce", "dules", "dulia", "dulls", "dulse", "dumas", "dumbo",
    "dumbs", "dumka", "dumky", "dumps", "dumpy", "dunam", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny",
    "dunsh", "dunts", "duomi", "duomo", "duped", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured",
    "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks",
    "dusky", "dusts", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwang", "dwaum", "dweeb", "dwile", "dwine", "dyads",
    "dyers", "dyked", "dykes", "dykey", "dykon", "dylan", "dynel", "dynes", "dzhos", "eagre", "ealed", "eales", "eaned",
    "eards", "eared", "earls", "earns", "earnt", "earst", "eased", "easer", "eases", "easts", "eaten", "eater", "eathe",
    "eaved", "eaves", "ebbed", "ebbet", "ebons", "ebook", "ecads", "eched", "eches", "echos", "ecrus", "edema", "edged",
    "edger", "edges", "eensy", "eeven", "eever", "eevns", "effed", "egads", "egers", "egest", "eggar", "egged", "egger",
    "egmas", "ehing", "eider", "eidos", "eigne", "eiked", "eikon", "eilds", "eisel", "ejido", "ekkas", "elain", "eland",
    "elans", "elchi", "eldin", "elemi", "elfed", "eliad", "elint", "elmen", "eloge", "elogy", "eloin", "elops", "elpee",
    "elsin", "elute", "elvan", "elven", "elver", "elves", "emacs", "embar", "embay", "embed", "embog", "embow", "embox",
    "embus", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew",
    "emmys", "emoji", "emong", "emote", "emove", "empts", "emule", "emure", "emyde", "emyds", "enarm", "enate", "ended",
    "ender", "endew", "endue", "enews", "enfix", "eniac", "enlit", "enmew", "ennog", "enoki", "enols", "enorm", "enows",
    "enrol", "ensew", "ensky", "entia", "enure", "enurn", "envoi", "enzym", "eorls", "eosin", "epact", "epees", "ephah",
    "ephas", "ephod", "ephor", "epics", "epode", "epopt", "epris", "eques", "equid", "erbia", "erect", "erevs", "ergon",
    "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erose", "erred", "erses", "eruct",
    "erugo", "eruvs", "erven", "ervil", "escar", "escot", "esile", "eskar", "esker", "esnes", "esses", "estoc", "estop",
    "estro", "etage", "etape", "etats", "etens", "ethal", "ethne", "ethos", "ethyl", "etics", "etnas", "ettin", "ettle",
    "etude", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evens", "evert", "evets", "evhoe",
    "evils", "evite", "evohe", "ewers", "ewest", "ewhow", "ewked", "exams", "exeat", "execs", "exeem", "exeme", "exfil",
    "exies", "exine", "exing", "exits", "exode", "exome", "exons", "expat", "expos", "exude", "exuls", "exurb", "eyass",
    "eyers", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabby", "faced", "facer", "faces", "facia", "facta",
    "facts", "faddy", "faded", "fader", "fades", "fadge", "fados", "faena", "faery", "faffs", "faffy", "faggy", "fagin",
    "fagot", "faiks", "fails", "faine", "fains", "fairs", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj",
    "falls", "famed", "fames", "fanal", "fands", "fanes", "fanga", "fango", "fangs", "fanks", "fanon", "fanos",
    "fanum", "faqir", "farad", "farci", "farcy", "fards", "fared", "farer", "fares", "farle", "farls", "farms", "faros",
    "farro", "farse", "farts", "fasci", "fasti", "fasts", "fated", "fates", "fatly", "fatso", "fatwa", "faugh", "fauld",
    "fauns", "faurd", "fauts", "fauve", "favas", "favel", "faver", "faves", "favus", "fawns", "fawny", "faxed", "faxes",
    "fayed", "fayer", "fayre", "fayze", "feals", "feare", "fears", "feart", "fease", "feats", "feaze", "feces", "fecht",
    "fecit", "fecks", "fedex", "feebs", "feeds", "feels", "feens", "feers", "feese", "feeze", "fehme", "feint", "feist",
    "felch", "felid", "fells", "felly", "felon", "felts", "felty", "femal", "femes", "femmy", "fends", "fendy", "fenis",
    "fenks", "fenny", "fents", "feods", "feoff", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny",
    "fesse", "festa", "fests", "festy", "fetas", "feted", "fetes", "fetor", "fetta", "fetts", "fetwa", "feuar", "feuds",
    "feued", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fibro", "fices", "fiche", "fichu", "ficin",
    "ficos", "fides", "fidge", "fidos", "fiefs", "fient", "fiere", "fiers", "fiest", "fifed", "fifer", "fifes", "filar",
    "filch", "filed", "files", "filii", "filks", "fille", "fillo", "fills", "filmi", "films", "filos", "filum", "finca",
    "finds", "fined", "fines", "finis", "finks", "finny", "finos", "fiord", "fiqhs", "fique", "fired", "firer", "fires",
    "firie", "firks", "firms", "firns", "firry", "firth", "fiscs", "fisks", "fists", "fisty", "fitch", "fitly", "fitna",
    "fitte", "fitts", "fiver", "fives", "fixed", "fixes", "fixit", "fizzy", "fjeld", "flabs", "flaff", "flags", "flaks",
    "flamm", "flams", "flamy", "flane", "flans", "flaps", "flary", "flats", "flava", "flawn", "flaws", "flawy", "flaxy",
    "flays", "fleam", "fleas", "fleek", "fleer", "flees", "flegs", "fleme", "fleur", "flews", "flexi", "flexo", "fleys",
    "flics", "flied", "flies", "flimp", "flims", "flips", "flirs", "flisk", "flite", "flits", "flitt", "flobs", "flocs",
    "floes", "flogs", "flong", "flops", "flors", "flory", "flosh", "flota", "flote", "flows", "flubs", "flued", "flues",
    "fluey", "fluky", "flump", "fluor", "flurr", "flush", "flute", "fluty", "fluyt", "flyby", "flype", "flyte", "foals",
    "foams", "foddy", "fogie", "fogle", "fohns", "foids", "foils", "foins", "folds", "foley", "folia", "folic", "folie",
    "folks", "folky", "fomes", "fonda", "fonds", "fondu", "fones", "fonly", "fonts", "foods", "foody", "fools", "foots",
    "footy", "foram", "forbs", "forby", "fordo", "fords", "forel", "fores", "forex", "forks", "forky", "forme", "forms",
    "forts", "forza", "forze", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "fount", "fours",
    "fouth", "fovea", "fowls", "fowth", "foxed", "foxes", "foxie", "foyle", "foyne", "frabs", "frack", "fract", "frags",
    "fraim", "franc", "frape", "fraps", "frass", "frate", "frati", "frats", "fraus", "frays", "frees", "freet", "freit",
    "fremd", "frena", "freon", "frere", "frets", "fribs", "frier", "fries", "frigs", "frise", "frisk", "frist", "frith",
    "frits", "fritt", "frize", "frizz", "froes", "frogs", "frons", "frore", "frorn", "frory", "frosh", "frows", "frowy",
    "frugs", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudgy", "fuels",
    "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugus", "fujis", "fulls", "fumed",
    "fumer", "fumes", "fumet", "fundi", "funds", "fundy", "fungs", "funks", "fural", "furan", "furca", "furls", "furol", "furos",
    "furrs", "furth", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fusks", "fusts", "fusty", "fusus",
    "fute", "futz", "fubsy", "fuddy", "fudgy", "fuels", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugus",
    "fujis", "fulls", "fumed", "fumer", "fumes", "fumet", "fundi", "funds", "fundy", "fungs", "funks", "fural", "furan",
    "furca", "furls", "furol", "furos", "furrs", "furth", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil",
    "fusks", "fusts", "fusty", "fusus", "fute", "futz"
];

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const generateBtn = document.getElementById('generate-btn');
    const clearBtn = document.getElementById('clear-btn');
    const targetWordInput = document.getElementById('target-word');
    const resultsContainer = document.getElementById('results-container');
    const statusBar = document.getElementById('status-bar');

    const guessList = WORDLE_GUESSES.filter(word => word.length === 5);
    const solutionList = WORDLE_SOLUTIONS.filter(word => word.length === 5);
    const fullWordSet = new Set([...guessList, ...solutionList]);

    const colors = ['#787c7e', '#c9b458', '#6aaa64'];
    const gridState = Array(6).fill(null).map(() => Array(5).fill(0));
    const gridCells = [];

    function createGrid() {
        gridContainer.innerHTML = '';
        for (let r = 0; r < 6; r++) {
            const row = [];
            for (let c = 0; c < 5; c++) {
                const cell = document.createElement('div');
                cell.classList.add('grid-cell');
                cell.style.backgroundColor = colors[0];
                cell.addEventListener('click', () => toggleColor(r, c));
                gridContainer.appendChild(cell);
                row.push(cell);
            }
            gridCells.push(row);
        }
    }

    function toggleColor(r, c) {
        gridState[r][c] = (gridState[r][c] + 1) % 3;
        gridCells[r][c].style.backgroundColor = colors[gridState[r][c]];
    }

    function clearGrid() {
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 5; c++) {
                gridState[r][c] = 0;
                gridCells[r][c].style.backgroundColor = colors[0];
                gridCells[r][c].textContent = '';
            }
        }
        resultsContainer.innerHTML = '';
        statusBar.textContent = 'Grid cleared. Draw a new pattern.';
    }

    function check_word(guess, target) {
        const pattern = Array(5).fill(0);
        const targetList = target.split('');

        for (let i = 0; i < 5; i++) {
            if (guess[i] === target[i]) {
                pattern[i] = 2;
                targetList[i] = null;
            }
        }

        for (let i = 0; i < 5; i++) {
            if (pattern[i] === 0 && targetList.includes(guess[i])) {
                pattern[i] = 1;
                targetList[targetList.indexOf(guess[i])] = null;
            }
        }
        return pattern;
    }

    function find_word_for_pattern(target_word, desired_pattern, word_list) {
        const shuffled_list = [...word_list].sort(() => 0.5 - Math.random());
        for (const word of shuffled_list) {
            if (word === target_word) continue;
            const pattern = check_word(word, target_word);
            if (JSON.stringify(pattern) === JSON.stringify(desired_pattern)) {
                return word;
            }
        }
        return null;
    }

    function generateWords() {
        const targetWord = targetWordInput.value.toLowerCase();

        if (targetWord.length !== 5) {
            alert("Target word must be exactly 5 letters long.");
            return;
        }

        statusBar.textContent = "Generating... This may take a moment.";

        const solutionWords = [];
        let possible = true;
        const searchList = Array.from(new Set([...fullWordSet, targetWord]));

        for (let r = 0; r < 6; r++) {
            const patternRow = gridState[r];

            if (patternRow.every(p => p === 2)) {
                solutionWords.push(targetWord);
                continue;
            }

            const foundWord = find_word_for_pattern(targetWord, patternRow, searchList);

            if (foundWord) {
                solutionWords.push(foundWord);
            } else {
                statusBar.textContent = `Failed to find a word for pattern in row ${r + 1}.`;
                alert(`Could not find a word for the pattern in row ${r + 1}. This specific pattern might be impossible.`);
                possible = false;
                break;
            }
        }

        if (possible) {
            displayResults(solutionWords);
            statusBar.textContent = "Successfully generated words!";
        }
    }

    function displayResults(words) {
        resultsContainer.innerHTML = '';
        let resultString = '';
        words.forEach((word, i) => {
            for (let c = 0; c < 5; c++) {
                gridCells[i][c].textContent = word[c].toUpperCase();
            }
            resultString += `Guess ${i + 1}: ${word.toUpperCase()}<br>`;
        });
        resultsContainer.innerHTML = resultString;
    }

    generateBtn.addEventListener('click', generateWords);
    clearBtn.addEventListener('click', clearGrid);

    createGrid();
});