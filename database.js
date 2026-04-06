// ══════════════════════════════════════════════════════════════════
//  SUPPL AI — DATABASE
//  Edit this file to add/update supplements, brands, scores & copy.
//  Last exported: 29/03/2026 01:32:03
// ══════════════════════════════════════════════════════════════════

// ──────────────────────────────────────────────
//  SUPPLEMENT CATEGORIES (displayed on cards)
// ──────────────────────────────────────────────
const CATEGORIES = {
    'Caffeine': 'ENERGY',
    'Creatine': 'MUSCLE',
    'Beta-Alanine': 'ENDURANCE',
    'L-Citrulline': 'PUMP',
    'Ashwagandha': 'ADAPTOGEN',
    'BCAAs': 'RECOVERY',
    'Electrolytes': 'HYDRATION',
    'Carbohydrates (Fast)': 'FUEL',
    'Whey Protein': 'PROTEIN',
    'Plant Protein': 'PROTEIN',
    'Omega-3': 'HEALTH',
    'Magnesium': 'RECOVERY',
    'ZMA': 'HORMONE'
};

// ──────────────────────────────────────────────
//  BRAND DATABASE
//  Fields: name, tagline, abbr, url (affiliate link)
// ──────────────────────────────────────────────
const BRANDS = {
  "Whey Protein": [
    { name: "Six Star Whey Protein Powder", tagline: "Triple Chocolate", abbr: "ON", url: "https://www.amazon.com/Six-Star-Protein-Triple-Chocolate/dp/B09SYB2ZQ2/ref=sr_1_8?crid=1F8SHEAHJNHN6&dib=eyJ2IjoiMSJ9.ccdSyil4QFC6zNQ9Mmaa3hdg0-HJ16DM7JaBHohRej4Hvbza6PTiEtFTZFk9O0UPpNlFeSec2FJ3w_EdPLTnX3NVV5zehoEFAELsiWp2sOWJAR8PFi604TYXZsCeINLiiCBtymnAedIQfTbYApVAw8nOzoiz569nJM6d5dZcCKIziQABYKrUMzyOwR1z5TkXgZQhEn08kUjiodulHjsIBA0-74HqCMCkgi4LelgfolJyAB9XlWQasA6rzjmIsvlJN6h5iIio__yxrvwedEdOFBhUJPT1e4e-asqeSOB38YM.DonlHZU2ubkZ06-v8l8u1Or13AF4DIWZMol7LVpQ4k8&dib_tag=se&keywords=whey%2Bprotein&qid=1774765742&rdc=1&sprefix=whey%2Bprotein%2Caps%2C185&sr=8-8&th=1" },
    { name: "C4 Whey Protein Powder", tagline: "Peanut Butter & Chocolate", abbr: "MP", url: "https://www.amazon.com/Cellucor-Protein-Powder-Reeses-Chocolate/dp/B0DJB9VYF3/ref=sr_1_7?crid=1F8SHEAHJNHN6&dib=eyJ2IjoiMSJ9.ccdSyil4QFC6zNQ9Mmaa3hdg0-HJ16DM7JaBHohRej4Hvbza6PTiEtFTZFk9O0UPpNlFeSec2FJ3w_EdPLTnX3NVV5zehoEFAELsiWp2sOWJAR8PFi604TYXZsCeINLiiCBtymnAedIQfTbYApVAw8nOzoiz569nJM6d5dZcCKIziQABYKrUMzyOwR1z5TkXgZQhEn08kUjiodulHjsIBA0-74HqCMCkgi4LelgfolJyAB9XlWQasA6rzjmIsvlJN6h5iIio__yxrvwedEdOFBhUJPT1e4e-asqeSOB38YM.DonlHZU2ubkZ06-v8l8u1Or13AF4DIWZMol7LVpQ4k8&dib_tag=se&keywords=whey%2Bprotein&qid=1774765742&sprefix=whey%2Bprotein%2Caps%2C185&sr=8-7&th=1" },
    { name: "Momentous Essential Grass-Fed Whey Protein Powder", tagline: "Chocolate", abbr: "DY", url: "https://www.amazon.com/Momentous-Essential-Grass-Fed-Protein-Powder/dp/B09F21D98X/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.17106a56-58e7-409a-96ee-b2be7987a708%3Aamzn1.sym.17106a56-58e7-409a-96ee-b2be7987a708&crid=1F8SHEAHJNHN6&cv_ct_cx=whey%2Bprotein&keywords=whey%2Bprotein&pd_rd_i=B09F21D98X&pd_rd_r=6a508f17-2d6b-4c5f-bc70-92a01f9c45ca&pd_rd_w=9NDKD&pd_rd_wg=ZfA06&pf_rd_p=17106a56-58e7-409a-96ee-b2be7987a708&pf_rd_r=X6XTT7F5ZCTQ9AXDPSM5&qid=1774765742&rdc=1&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=whey%2Bprotein%2Caps%2C185&sr=1-1-543a432c-671c-4a3a-a15e-c8d9b2229043-spons&aref=SPrJHsBMDD&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1" }
  ],
  "Plant Protein": [
    { name: "Garden of Life", tagline: "Certified organic, whole-food protein", abbr: "GOL", url: "#" },
    { name: "Vega", tagline: "Plant-based fuel for every body", abbr: "VEG", url: "#" },
    { name: "Myprotein", tagline: "Europe's #1 sports nutrition brand", abbr: "MP", url: "#" },
    { name: "Bulk", tagline: "No nonsense. Just gains.", abbr: "BLK", url: "#" }
  ],
  "Creatine": [
    { name: "Optimum Nutrition", tagline: "The gold standard in creatine monohydrate", abbr: "ON", url: "#" },
    { name: "Myprotein", tagline: "Pure creatine, unbeatable value", abbr: "MP", url: "#" },
    { name: "Bulk", tagline: "Lab-tested, no fluff, full dose", abbr: "BLK", url: "#" },
    { name: "Nutricost", tagline: "Effective. Simple. Affordable.", abbr: "NTC", url: "#" },
    { name: "liburdose", tagline: "", abbr: "", url: "#" }
  ],
  "Caffeine": [
    { name: "Bulk", tagline: "Clean caffeine, pharmaceutical grade", abbr: "BLK", url: "#" },
    { name: "Nutricost", tagline: "No frills, full focus", abbr: "NTC", url: "#" },
    { name: "NOW Foods", tagline: "Trusted natural supplements since 1968", abbr: "NOW", url: "#" },
    { name: "GNC", tagline: "Live well with GNC", abbr: "GNC", url: "#" },
    { name: "liburdose", tagline: "", abbr: "", url: "#" }
  ],
  "Beta-Alanine": [
    { name: "NOW Foods", tagline: "Sports-tested CarnoSyn beta-alanine", abbr: "NOW", url: "#" },
    { name: "Bulk", tagline: "Pure CarnoSyn, full clinical dose", abbr: "BLK", url: "#" },
    { name: "Nutricost", tagline: "Science-backed endurance support", abbr: "NTC", url: "#" },
    { name: "Cellucor", tagline: "Feel the tingle. Feel the gains.", abbr: "CEL", url: "#" }
  ],
  "BCAAs": [
    { name: "Myprotein", tagline: "Instantized 2:1:1 BCAA ratio", abbr: "MP", url: "#" },
    { name: "Optimum Nutrition", tagline: "Gold Standard amino acids", abbr: "ON", url: "#" },
    { name: "Scivation", tagline: "Xtend — the world's #1 BCAA brand", abbr: "SCI", url: "#" },
    { name: "BSN", tagline: "Amino X — advanced amino formula", abbr: "BSN", url: "#" }
  ],
  "Electrolytes": [
    { name: "Liquid I.V.", tagline: "Hydration multiplier technology", abbr: "LIV", url: "#" },
    { name: "LMNT", tagline: "No sugar. Just sodium, potassium, magnesium.", abbr: "LMT", url: "#" },
    { name: "Nuun", tagline: "Clean hydration for every athlete", abbr: "NUN", url: "#" },
    { name: "GNC", tagline: "Performance hydration you can trust", abbr: "GNC", url: "#" }
  ],
  "Omega-3": [
    { name: "Nordic Naturals", tagline: "The world's #1 omega-3 brand", abbr: "NN", url: "#" },
    { name: "NOW Foods", tagline: "Ultra-concentrated EPA+DHA", abbr: "NOW", url: "#" },
    { name: "Thorne", tagline: "Pharmaceutical-grade fish oil", abbr: "THR", url: "#" },
    { name: "Garden of Life", tagline: "Certified sustainable, molecularly distilled", abbr: "GOL", url: "#" }
  ],
  "Magnesium": [
    { name: "Thorne", tagline: "Bisglycinate form for maximum absorption", abbr: "THR", url: "#" },
    { name: "NOW Foods", tagline: "Full-spectrum magnesium support", abbr: "NOW", url: "#" },
    { name: "Life Extension", tagline: "Clinically studied magnesium L-threonate", abbr: "LE", url: "#" },
    { name: "Garden of Life", tagline: "Whole-food organic magnesium blend", abbr: "GOL", url: "#" }
  ],
  "L-Citrulline": [
    { name: "Transparent Labs", tagline: "Clinical doses. Zero proprietary blends.", abbr: "TL", url: "#" },
    { name: "Bulk", tagline: "Fermented, ultra-pure L-Citrulline", abbr: "BLK", url: "#" },
    { name: "NOW Foods", tagline: "Pharmaceutical grade amino acid", abbr: "NOW", url: "#" },
    { name: "Nutricost", tagline: "Pure citrulline at an honest price", abbr: "NTC", url: "#" }
  ],
  "Ashwagandha": [
    { name: "KSM-66", tagline: "The most clinically studied ashwagandha extract", abbr: "KSM", url: "#" },
    { name: "NOW Foods", tagline: "Full-spectrum Sensoril ashwagandha", abbr: "NOW", url: "#" },
    { name: "Thorne", tagline: "Pharma-grade adaptogen for stress and strength", abbr: "THR", url: "#" },
    { name: "Garden of Life", tagline: "Organic certified whole root powder", abbr: "GOL", url: "#" }
  ],
  "ZMA": [
    { name: "NOW Foods", tagline: "Original ZMA zinc, magnesium & B6 formula", abbr: "NOW", url: "#" },
    { name: "Optimum Nutrition", tagline: "Recovery and hormone support blend", abbr: "ON", url: "#" },
    { name: "Bulk", tagline: "High-strength ZMA at great value", abbr: "BLK", url: "#" },
    { name: "GNC", tagline: "Proven sleep and testosterone formula", abbr: "GNC", url: "#" }
  ],
  "Carbohydrates (Fast)": [
    { name: "Maurten", tagline: "The fuel of world champions", abbr: "MAU", url: "#" },
    { name: "SIS", tagline: "Science in Sport — lab-tested carbs", abbr: "SIS", url: "#" },
    { name: "GU Energy", tagline: "Engineered for performance since 1993", abbr: "GU", url: "#" },
    { name: "Myprotein", tagline: "Pure waxy maize starch for endurance", abbr: "MP", url: "#" }
  ]
};

// ──────────────────────────────────────────────
//  GOAL IMPACT SCORES
// ──────────────────────────────────────────────
function computeScore(supp, goals, data) {
  const g = goals;
  const scores = {
    'Caffeine':             g.includes('Peak Performance') || g.includes('Endurance') ? 95 : g.includes('Build Muscle') ? 85 : 75,
    'Creatine':             g.includes('Build Muscle') ? 98 : g.includes('Peak Performance') ? 90 : g.includes('Body Recomposition') ? 88 : 80,
    'Beta-Alanine':         g.includes('Endurance') ? 92 : data.trainingStyle.includes('HIIT') ? 90 : g.includes('Build Muscle') ? 80 : 75,
    'L-Citrulline':         g.includes('Peak Performance') ? 92 : g.includes('Build Muscle') ? 88 : g.includes('Endurance') ? 85 : 78,
    'Ashwagandha':          g.includes('General Health') ? 85 : g.includes('Lose Weight') ? 78 : 72,
    'BCAAs':                g.includes('Endurance') ? 88 : g.includes('Build Muscle') ? 82 : 78,
    'Electrolytes':         data.trainingStyle.includes('Cycling') ? 92 : g.includes('Endurance') ? 90 : data.trainingStyle.includes('HIIT') ? 88 : 78,
    'Carbohydrates (Fast)': g.includes('Endurance') ? 95 : data.trainingStyle.includes('Cycling') ? 92 : 78,
    'Whey Protein':         g.includes('Build Muscle') ? 98 : g.includes('Body Recomposition') ? 92 : g.includes('Lose Weight') ? 85 : 80,
    'Plant Protein':        g.includes('Build Muscle') ? 98 : g.includes('Body Recomposition') ? 92 : g.includes('Lose Weight') ? 85 : 80,
    'Omega-3':              g.includes('General Health') ? 88 : g.includes('Lose Weight') ? 82 : 75,
    'Magnesium':            ['Evening','Night'].includes(data.trainingTime) ? 90 : g.includes('General Health') ? 85 : 78,
    'ZMA':                  g.includes('Build Muscle') ? 82 : g.includes('Peak Performance') ? 80 : 75
  };
  return scores[supp] || 75;
}

// ──────────────────────────────────────────────
//  WHY TEXT
// ──────────────────────────────────────────────
function getWhyText(supp, goals, data) {
  const texts = {
    'Caffeine': `Caffeine directly enhances focus, reaction time, and power output — key factors for your ${goals[0]} goal. By blocking adenosine receptors it reduces perceived effort, letting you push harder and longer in every session.`,
    'Creatine': goals.includes('Build Muscle')
      ? `Creatine saturates your muscle cells with phosphocreatine, directly boosting your strength output and enabling the progressive overload needed to build muscle mass.`
      : `Creatine replenishes ATP stores rapidly, translating to more reps, more power, and better performance — precisely what your ${goals[0]} goal demands.`,
    'Beta-Alanine': goals.includes('Endurance')
      ? `Beta-alanine buffers lactic acid buildup in muscle tissue, extending your time to fatigue — the critical limiting factor in endurance training.`
      : `Beta-alanine increases muscle carnosine levels, delaying the burn during high-intensity intervals and helping you sustain peak output across more sets.`,
    'L-Citrulline': goals.includes('Build Muscle')
      ? `L-Citrulline drives nitric oxide production for exceptional muscle pumps and increased blood flow to working muscles, directly enhancing nutrient delivery for muscle growth.`
      : `L-Citrulline amplifies nitric oxide synthesis, reducing fatigue and improving aerobic efficiency — critical for your ${goals[0]} goal.`,
    'Ashwagandha': goals.includes('General Health')
      ? `Ashwagandha (KSM-66) reduces cortisol by up to 28%, improves sleep quality, and supports healthy testosterone levels — foundational pillars of overall health and recovery.`
      : `Ashwagandha blunts cortisol spikes after ${data.trainingTime?.toLowerCase() || 'evening'} training, promoting deeper sleep and faster recovery while supporting body composition goals.`,
    'BCAAs': goals.includes('Build Muscle')
      ? `BCAAs (especially leucine) directly trigger muscle protein synthesis. Taking them during long sessions prevents muscle catabolism and primes your body for growth.`
      : `BCAAs reduce exercise-induced muscle damage and mental fatigue during sessions exceeding 60 minutes, helping you maintain form and intensity throughout.`,
    'Electrolytes': data.trainingStyle.includes('HIIT') || goals.includes('Endurance')
      ? `High-intensity and endurance training causes significant electrolyte losses through sweat. Replenishing sodium, potassium, and magnesium during exercise maintains power output and prevents cramping.`
      : `Even moderate sweat losses impair performance by 2–3%. Electrolytes maintain fluid balance and nerve conduction, keeping you sharp and powerful throughout your session.`,
    'Carbohydrates (Fast)': goals.includes('Endurance')
      ? `Fast-acting carbohydrates are the primary fuel for endurance work. Consuming 30–60 g per hour prevents glycogen depletion — the primary cause of hitting the wall in endurance events.`
      : `During long sessions, fast carbs maintain blood glucose and muscle glycogen, preserving performance quality and preventing premature fatigue.`,
    'Whey Protein': goals.includes('Build Muscle')
      ? `Whey protein delivers a rapid spike of leucine — the master trigger for muscle protein synthesis. Its fast absorption makes it ideal post-workout when your muscles are primed for growth.`
      : goals.includes('Lose Weight')
      ? `Whey protein is the most satiety-inducing macronutrient per calorie. Post-workout consumption preserves lean muscle during a deficit, ensuring you lose fat, not muscle.`
      : `Whey protein provides all essential amino acids in optimal ratios, accelerating muscle repair after training and supporting your body composition goals.`,
    'Plant Protein': `Plant protein delivers a complete amino acid profile from whole-food sources, supporting muscle repair and recovery without animal products — perfectly aligned with your dietary choices and ${goals[0]} goal.`,
    'Omega-3': goals.includes('General Health')
      ? `Omega-3 EPA+DHA are the most well-researched supplements for cardiovascular health, inflammation reduction, and cognitive function — three pillars of long-term wellbeing.`
      : `Omega-3 reduces exercise-induced inflammation and muscle soreness, accelerating recovery between sessions and supporting your ${goals[0]} journey.`,
    'Magnesium': ['Evening','Night'].includes(data.trainingTime)
      ? `Evening training elevates cortisol at a time when it should be declining. Magnesium glycinate rebalances this, improving sleep quality, reducing overnight muscle tension, and enhancing recovery.`
      : `Magnesium is depleted by intense training and is a cofactor in over 300 enzymatic reactions including ATP production, protein synthesis, and muscle relaxation — critical for ${goals[0]}.`,
    'ZMA': `ZMA's synergistic combination of zinc, magnesium, and B6 supports testosterone and IGF-1 levels during sleep — the optimal hormonal window for muscle repair and growth during your ${goals[0]} phase.`
  };
  return texts[supp] || `${supp} is a well-researched supplement that directly supports your ${goals.join(', ')} goals through its evidence-based mechanisms.`;
}

// ──────────────────────────────────────────────
//  DOSE DATA
// ──────────────────────────────────────────────
function getDoseData(supp, data) {
  const weight = data.weightKg || 75;
  const table = {
    'Caffeine':             { dose: weight < 70 ? '150 mg' : '200 mg', when: '30–45 min before workout', frequency: 'Per session (max 1×/day)' },
    'Creatine':             { dose: '5 g',          when: 'Any time — consistency matters most', frequency: 'Daily (loading not required)' },
    'Beta-Alanine':         { dose: '3.2 g',        when: '30 min before workout', frequency: 'Daily (tingling is normal)' },
    'L-Citrulline':         { dose: '6–8 g',        when: '30–45 min before workout', frequency: 'Per session' },
    'Ashwagandha':          { dose: '600 mg',        when: ['Evening','Night'].includes(data.trainingTime) ? '30–60 min before workout (close to sleep — ideal)' : '30–60 min before workout, with food', frequency: 'Daily' },
    'BCAAs':                { dose: '10 g',          when: 'Sip throughout your session', frequency: 'Per session (>45 min)' },
    'Electrolytes':         { dose: '1 serving',     when: 'Mix in water — drink during workout', frequency: 'Per session' },
    'Carbohydrates (Fast)': { dose: '30–60 g/hour', when: 'Consume continuously during activity', frequency: 'Per session (>60 min)' },
    'Whey Protein':         { dose: '25–30 g',       when: 'Within 30 min post-workout', frequency: 'Per session' },
    'Plant Protein':        { dose: '25–30 g',       when: 'Within 30 min post-workout', frequency: 'Per session' },
    'Omega-3':              { dose: '1–2 g EPA+DHA', when: 'With a fatty meal', frequency: 'Daily' },
    'Magnesium':            { dose: '300–400 mg',    when: '30–60 min before bed', frequency: 'Daily' },
    'ZMA':                  { dose: '1 serving',     when: 'On empty stomach, 30–60 min before bed', frequency: 'Daily' }
  };
  return table[supp] || { dose: '1 serving', when: 'As directed', frequency: 'Daily' };
}