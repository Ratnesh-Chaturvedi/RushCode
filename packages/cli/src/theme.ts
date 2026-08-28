export type ThemeColors = {
  primary: string;
  planMode: string;
  selection: string;
  thinking: string;
  success: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  dialogSurface: string;
  thinkingBorder: string;
  dimSeparator: string;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export const THEMES: Theme[] = [
  {
    name: "Iron Man",
    colors: {
      primary: "#FFD700",       // Arc Gold
      planMode: "#38BDF8",       // Arc Reactor Cyan
      selection: "#E63946",     // Hot-Rod Red
      thinking: "#38BDF8",      // Arc Reactor Glow
      success: "#4ADE80",       // Target Acquired Green
      error: "#FF3333",         // Critical Damage
      info: "#38BDF8",          // JARVIS Interface
      background: "#120507",    // Deep Armor Maroon
      surface: "#240E12",       // Suit Interior
      dialogSurface: "#0C0305", // HUD Overlay Dark
      thinkingBorder: "#4A1B24",// Deep Crimson Edge
      dimSeparator: "#7A2E3B",  // Armor Joint Accent
    },
  },
  {
    name: "Spider-Man",
    colors: {
      primary: "#E62429",       // Suit Red
      planMode: "#1475E1",       // Suit Blue
      selection: "#1475E1",     // Web-Shooter Blue
      thinking: "#1475E1",      // Spider-Sense Glow
      success: "#22C55E",       // Safe Zone
      error: "#EF4444",         // Danger Alert
      info: "#38BDF8",          // HUD Display
      background: "#0B0F19",    // Dark Alleyway
      surface: "#161D2E",       // Web Pattern Surface
      dialogSurface: "#070A12", // Shadow Base
      thinkingBorder: "#2D3952",// Webing Accent
      dimSeparator: "#415173",  // Grid Lines
    },
  },
  {
    name: "Thor",
    colors: {
      primary: "#38BDF8",       // Lightning Cyan
      planMode: "#F59E0B",       // Mjolnir Brass
      selection: "#60A5FA",     // Bifrost Blue
      thinking: "#38BDF8",      // God of Thunder Lightning
      success: "#34D399",       // Asgardian Glow
      error: "#F87171",         // Ragnarok Flame
      info: "#38BDF8",          // Storm Channel
      background: "#0A0F1D",    // Asgard Sky
      surface: "#151F36",       // Steel Armor Gray
      dialogSurface: "#060A14", // Deep Void
      thinkingBorder: "#2E3F66",// Armor Plate
      dimSeparator: "#485E91",  // Silver Trim
    },
  },
  {
    name: "Black Panther",
    colors: {
      primary: "#A855F7",       // Kinetic Purple
      planMode: "#EC4899",       // Vibranium Pulse
      selection: "#C084FC",     // Absorbed Energy
      thinking: "#A855F7",      // Kinetic Energy Storage
      success: "#10B981",       // Wakandan Herbal Green
      error: "#F43F5E",         // System Breach
      info: "#8B5CF6",          // Kimoyo Bead Signal
      background: "#08080A",    // Habit Black
      surface: "#14141A",       // Vibranium Weave
      dialogSurface: "#040406", // Deep Shadow
      thinkingBorder: "#3B2559",// Kinetic Glow Border
      dimSeparator: "#573B7F",  // Subtle Weave Accent
    },
  },
  {
    name: "Wolverine",
    colors: {
      primary: "#F59E0B",       // Suit Yellow
      planMode: "#3B82F6",       // X-Men Blue
      selection: "#E11D48",     // Berserker Slash Red
      thinking: "#3B82F6",      // Tactical Focus
      success: "#10B981",       // Healing Factor Green
      error: "#EF4444",         // Rage Error
      info: "#60A5FA",          // Visor/Tech Tint
      background: "#14120E",    // Dark Timber Background
      surface: "#242018",       // Leather Jacket Tone
      dialogSurface: "#0D0B09", // Deep Tone
      thinkingBorder: "#4D4029",// Adamantium Sheen Edge
      dimSeparator: "#73603F",  // Steel Separator
    },
  },
  {
    name: "Doctor Strange",
    colors: {
      primary: "#F59E0B",       // Eldritch Spark Orange
      planMode: "#10B981",       // Time Stone Emerald
      selection: "#10B981",     // Agamotto Green
      thinking: "#10B981",      // Eye of Agamotto Active
      success: "#34D399",       // Spell Harmony
      error: "#F43F5E",         // Dark Magic Corruption
      info: "#3B82F6",          // Mirror Dimension Tint
      background: "#0F0B1E",    // Sanctum Outer Realm
      surface: "#1C1633",       // Cloak Red/Purple Base
      dialogSurface: "#090614", // Astral Void
      thinkingBorder: "#46356B",// Mystic Runes Border
      dimSeparator: "#67519B",  // Arcane Circle Accent
    },
  },
  {
    name: "Scarlet Witch",
    colors: {
      primary: "#E11D48",       // Chaos Hex Red
      planMode: "#C084FC",       // Astral Reality Purple
      selection: "#FB7185",     // Energy Wave Crimson
      thinking: "#E11D48",      // Reality Distortion
      success: "#34D399",       // Spell Resolution
      error: "#991B1B",         // Chaos Overload
      info: "#F43F5E",          // Mind Hex Pulse
      background: "#120609",    // Dark Hold Realm
      surface: "#240D14",       // Crimson Habit Surface
      dialogSurface: "#0A0305", // Deep Chaos Void
      thinkingBorder: "#521626",// Hex Border
      dimSeparator: "#7A263D",  // Energy Stream Accent
    },
  },
  {
    name: "Venom",
    colors: {
      primary: "#F8FAFC",       // Symbiote White
      planMode: "#A855F7",       // Alien Viscous Purple
      selection: "#94A3B8",     // Tendril Sheen
      thinking: "#A855F7",      // Hive Mind Pulse
      success: "#22C55E",       // Host Bound
      error: "#E11D48",         // Sonic Weakness Red
      info: "#64748B",          // Neural Link
      background: "#050505",    // Pure Void Black
      surface: "#121212",       // Ooze Surface
      dialogSurface: "#020202", // Inner Host Dark
      thinkingBorder: "#2D2D2D",// Tendril Border
      dimSeparator: "#454545",  // Symbiote Vein
    },
  },
  {
    name: "Captain America",
    colors: {
      primary: "#1475E1",       // Shield Blue
      planMode: "#E62429",       // Shield Red
      selection: "#E62429",     // Red Stripe Accent
      thinking: "#1475E1",      // Tactical Blue Glow
      success: "#22C55E",       // Mission Accomplished
      error: "#EF4444",         // Red Threat Alert
      info: "#38BDF8",          // Star White / Light Blue
      background: "#080D1A",    // Deep Navy
      surface: "#111A2E",       // Suit Fabric Gray-Blue
      dialogSurface: "#050812", // Shadow Base
      thinkingBorder: "#273859",// Shield Trim
      dimSeparator: "#415780",  // Star Emblem Accent
    },
  },
  {
    name: "Hulk",
    colors: {
      primary: "#4ADE80",       // Gamma Green
      planMode: "#A855F7",       // Purple Pants Accent
      selection: "#86EFAC",     // Radiation Glow
      thinking: "#A855F7",      // Inner Rage Pulse
      success: "#22C55E",       // Calmed Down Green
      error: "#EF4444",         // Smash Mode Red
      info: "#38BDF8",          // Lab Tech Blue
      background: "#07120B",    // Dark Gamma Lab
      surface: "#102416",       // Deep Muscle Shade
      dialogSurface: "#040A06", // Dark Core
      thinkingBorder: "#244D2F",// Gamma Surge Border
      dimSeparator: "#38784A",  // Hulking Accent
    },
  },
  {
    name: "Deadpool",
    colors: {
      primary: "#E62429",       // Suit Red
      planMode: "#F59E0B",       // Chimichanga Gold
      selection: "#E62429",     // Leather Red Highlight
      thinking: "#F59E0B",      // Fourth-Wall Break Gold
      success: "#10B981",       // Max Healing Green
      error: "#FF0000",         // Bullet Hole Red
      info: "#60A5FA",          // Katanas Steel Tint
      background: "#0D0A0A",    // Mercenary Dark
      surface: "#1A1212",       // Tactical Leather Surface
      dialogSurface: "#080505", // Deep Shadow
      thinkingBorder: "#4A2020",// Harness Strap Border
      dimSeparator: "#733333",  // Belt Accent
    },
  },
  {
    name: "Loki",
    colors: {
      primary: "#10B981",       // Mischief Emerald Green
      planMode: "#F59E0B",       // Horned Helmet Gold
      selection: "#F59E0B",     // Asgardian Gold Accent
      thinking: "#10B981",      // Illusion Magic Glow
      success: "#34D399",       // TVA Timeline Green
      error: "#F43F5E",         // Pruning Red
      info: "#38BDF8",          // Tesseract Blue
      background: "#07140E",    // Void Dark Green
      surface: "#10261C",       // Leather & Brass Surface
      dialogSurface: "#040C08", // Shadow Base
      thinkingBorder: "#214D38",// Gold-Trimmed Border
      dimSeparator: "#357858",  // Mischief Weave
    },
  },
  {
    name: "Thanos",
    colors: {
      primary: "#A855F7",       // Power Stone Purple
      planMode: "#F59E0B",       // Gauntlet Gold
      selection: "#EC4899",     // Reality Stone Pink
      thinking: "#F59E0B",      // Infinity Gauntlet Active
      success: "#10B981",       // Time Stone Green
      error: "#EF4444",         // Reality Distortion
      info: "#38BDF8",          // Space Stone Blue
      background: "#0C0914",    // Titan Void
      surface: "#1A1529",       // Armor Gold/Purple Surface
      dialogSurface: "#06040A", // Deep Cosmos
      thinkingBorder: "#3E2E5E",// Infinity Metal Border
      dimSeparator: "#604791",  // Cosmic Power Accent
    },
  },
  {
    name: "Daredevil",
    colors: {
      primary: "#EF4444",       // Devil Red
      planMode: "#F59E0B",       // Billy Club Brass
      selection: "#F87171",     // Radar Sense Highlight
      thinking: "#EF4444",      // Radar Echo Pulse
      success: "#10B981",       // Justice Served Green
      error: "#991B1B",         // Blood Red Alarm
      info: "#94A3B8",          // Steel Baton Tint
      background: "#120606",    // Hell's Kitchen Night
      surface: "#241010",       // Crimson Suit Surface
      dialogSurface: "#0A0303", // Alleyway Dark
      thinkingBorder: "#521F1F",// Crimson Leather Edge
      dimSeparator: "#7A3131",  // Suit Stitching Accent
    },
  },
  {
    name: "Ghost Rider",
    colors: {
      primary: "#F97316",       // Hellfire Orange
      planMode: "#FACC15",       // Penance Stare Gold
      selection: "#FB923C",     // Flaming Chain Orange
      thinking: "#F97316",      // Hellfire Ignition
      success: "#34D399",       // Soul Cleansed Green
      error: "#DC2626",         // Damned Flame Red
      info: "#94A3B8",          // Leather & Chrome
      background: "#120804",    // Scorched Earth
      surface: "#24120A",       // Leather & Ash Surface
      dialogSurface: "#0A0402", // Charcoal Base
      thinkingBorder: "#522612",// Fiery Border
      dimSeparator: "#7A3D1E",  // Chain Link Accent
    },
  },
  {
    name: "Moon Knight",
    colors: {
      primary: "#F8FAFC",       // Crescent White
      planMode: "#38BDF8",       // Khonshu Egyptian Blue
      selection: "#CBD5E1",     // Silver Dart Accent
      thinking: "#38BDF8",      // Khonshu Celestial Glow
      success: "#34D399",       // Lunar Blessing Green
      error: "#F43F5E",         // Psych Ward Red
      info: "#94A3B8",          // Mummy Wrap Tint
      background: "#0A0D12",    // Desert Night Sky
      surface: "#141A24",       // Moonlit Suit Surface
      dialogSurface: "#05070A", // Temple Void
      thinkingBorder: "#2C394A",// Silver Crest Edge
      dimSeparator: "#465973",  // Hieroglyph Accent
    },
  },
  {
    name: "Storm",
    colors: {
      primary: "#38BDF8",       // Lightning Bolt Cyan
      planMode: "#F59E0B",       // Sun Burst Gold
      selection: "#93C5FD",     // Frost/Atmosphere Glow
      thinking: "#38BDF8",      // Tempest Surge
      success: "#34D399",       // Nature Restored Green
      error: "#EF4444",         // Category 5 Hurricane Red
      info: "#60A5FA",          // Wind Stream Blue
      background: "#090E17",    // Thundercloud Base
      surface: "#131C2E",       // Dark Suit & Cape Surface
      dialogSurface: "#04070D", // Deep Stratosphere
      thinkingBorder: "#2B3C5E",// Silver Lightning Edge
      dimSeparator: "#445C8F",  // Aura Trim
    },
  },
  {
    name: "Silver Surfer",
    colors: {
      primary: "#E2E8F0",       // Power Cosmic Silver
      planMode: "#60A5FA",       // Galactic Beacon Blue
      selection: "#94A3B8",     // Board Chrome Highlight
      thinking: "#60A5FA",      // Cosmic Energy Channel
      success: "#34D399",       // Life Preserved Green
      error: "#F43F5E",         // Galactus Threat
      info: "#38BDF8",          // Starlight Flare
      background: "#05070A",    // Outer Space Void
      surface: "#101622",       // Nebula Dust Surface
      dialogSurface: "#020305", // Deep Space Base
      thinkingBorder: "#27344A",// Chrome Sheen Edge
      dimSeparator: "#3F5273",  // Cosmic Wave Accent
    },
  },
];

export const DEFAULT_THEME = THEMES.find((t) => t.name === "Iron Man")!;