export const topbarTitles: Record<string, [string, string]> = {
  'home': ['Dashboard', 'Track your pregnancy journey'],
  'ate-bb': ['Ate BB', 'Your virtual pregnancy companion'],
  'gabay': ['Gabay', 'Trusted health content for moms'],
  'konsulta': ['Konsulta', 'Find clinics and OB-GYNs near you'],
  'metrics': ['Metrics', 'Track your health journey'],
  'article': ['Article', 'Read health content']
}

export const articleData = [
  {
    emoji: '🥦', source: 'Dr. Maria Santos, OB-GYN', date: 'April 5, 2026',
    title: 'Nutrition Tips for a Healthy Pregnancy',
    content: `Proper nutrition during pregnancy is essential for both mom and baby. Here are key tips to keep you and your little one healthy:

ESSENTIAL NUTRIENTS

• Folic Acid — found in leafy greens, helps prevent neural tube defects
• Iron — important for blood production, found in lean meats and beans
• Calcium — crucial for baby's bone development, found in dairy and malunggay

FILIPINO SUPERFOODS FOR PREGNANCY

• Malunggay (Moringa) — rich in iron, calcium, and vitamins
• Kangkong — high in fiber and essential vitamins
• Monggo (Mung beans) — excellent source of protein and iron
• Bangus and Tilapia — great omega-3 sources when well-cooked

TIPS FOR EVERYDAY EATING

1. Eat small, frequent meals to manage nausea
2. Stay hydrated — aim for 8–10 glasses of water daily
3. Avoid raw or undercooked foods
4. Limit caffeine intake to less than 200mg per day
5. Take your prenatal vitamins as prescribed by your OB-GYN`
  },
  {
    emoji: '🧘', source: 'PhilHealth Wellness Center', date: 'April 3, 2026',
    title: 'Safe Exercises During Pregnancy',
    content: `Staying active during pregnancy has many benefits — reduced back pain, better sleep, improved mood, and easier labor.

SAFE ACTIVITIES

• Walking — low impact and easy to do anywhere, aim for 30 min/day
• Swimming — great for relieving joint pressure and staying cool
• Prenatal yoga — improves flexibility, relaxation, and breathing
• Light stretching — helps with muscle tension and posture

IMPORTANT GUIDELINES

1. Always consult your OB-GYN before starting any exercise
2. Avoid exercises lying flat on your back after the first trimester
3. Stay hydrated and don't overheat
4. Stop immediately if you feel dizzy, short of breath, or in pain
5. Avoid contact sports and activities with fall risk

WARNING SIGNS TO STOP

• Vaginal bleeding or fluid leaking
• Chest pain or difficulty breathing
• Decreased baby movement
• Contractions before 37 weeks`
  },
  {
    emoji: '🩺', source: 'Manila Medical Center', date: 'April 1, 2026',
    title: 'Understanding Prenatal Checkups',
    content: `Regular prenatal checkups are crucial for monitoring your health and baby's development throughout your pregnancy.

CHECKUP SCHEDULE

• Weeks 4–28: Monthly visits (once a month)
• Weeks 28–36: Every two weeks
• Weeks 36–40: Weekly visits

WHAT TO EXPECT AT EACH VISIT

• Blood pressure and weight monitoring
• Urine tests for protein and glucose levels
• Baby's heartbeat check with a doppler
• Fundal height measurement
• Ultrasound scans at key milestones

QUESTIONS TO ASK YOUR DOCTOR

1. Is my weight gain on track?
2. What tests do I need this trimester?
3. Are my symptoms normal?
4. What warning signs should I watch for at home?`
  },
  {
    emoji: '💊', source: 'DOH Philippines', date: 'March 28, 2026',
    title: 'Prenatal Vitamins: What You Need',
    content: `Taking the right prenatal vitamins is one of the most important things you can do for your pregnancy.

KEY VITAMINS AND WHY THEY MATTER

• Folic Acid (400–800 mcg) — prevents neural tube defects, start before conception if possible
• Iron (27 mg) — prevents anemia, supports increased blood volume
• Calcium (1,000 mg) — builds baby's bones and teeth
• Vitamin D (600 IU) — helps absorb calcium and supports immune function
• Omega-3 DHA — supports baby's brain and eye development

WHEN TO TAKE THEM

• Take your prenatal vitamins at the same time each day for consistency
• Take with food to reduce nausea
• If you experience constipation, try taking them at night

FREE VITAMINS THROUGH PHILHEALTH

• PhilHealth covers free iron and folic acid supplements through RHUs
• Bring your health card to your nearest Rural Health Unit (RHU)`
  }
]

export const botAnswers: Record<string, string> = {
  'back pain': 'Yes, mommy! Back pain is very common during pregnancy, especially in the 2nd and 3rd trimesters. Your growing belly shifts your center of gravity. Try gentle stretches, a pregnancy pillow when sleeping, and comfortable shoes. If the pain is severe, please see your OB-GYN right away. 💕',
  'eat': 'Great question, mommy! Focus on: leafy greens like malunggay and kangkong, lean proteins like fish and chicken, whole grains like brown rice, fruits, and plenty of water. Limit caffeine and avoid raw foods. Eat small, frequent meals to help with nausea. Don\'t forget your prenatal vitamins! 🥦',
  'doctor': 'See your doctor immediately if you experience: severe headaches, blurred vision, sudden swelling, vaginal bleeding, severe abdominal pain, reduced baby movement, or fever above 38°C. Regular checkups should be monthly until week 28, then every 2 weeks until week 36, then weekly. 🏥',
  'kick': 'Kick counting is important starting week 28! Choose a time when baby is usually active (often after eating). Lie on your side and count movements. You should feel 10 movements within 2 hours. If you notice decreased movement, drink cold water, eat something sweet, and try again. Contact your doctor if movements decrease significantly. 👶',
  'nausea': 'Nausea or "morning sickness" is very common in the first trimester and can sometimes last longer. Try eating small, frequent meals, ginger tea, plain crackers before getting up, and staying hydrated. Avoid strong smells. If vomiting is severe or you can\'t keep food down, please see your doctor. 🤢',
  'sleep': 'Sleep is so important for you and baby! Try sleeping on your left side (this improves blood flow), use a pregnancy pillow between your knees, keep your room cool and dark, and establish a bedtime routine. Avoid screens 1 hour before bed. You deserve rest, mommy! 😴',
}

export function getResponse(text: string): string {
  const lower = text.toLowerCase()
  for (const [key, ans] of Object.entries(botAnswers)) {
    if (lower.includes(key)) return ans
  }
  return 'That\'s a great question, mommy! For specific medical concerns, please consult with your OB-GYN. In the meantime, try the quick questions below for common topics, or visit Konsulta to find a clinic near you. 💕'
}

export const clinicsData = [
  {
    name: 'Chong Hua Hospital – OB-GYN Dept.',
    rating: 4.9,
    reviews: 512,
    address: 'Don Mariano Cui St., Cebu City',
    hours: '7:00 AM – 6:00 PM',
    distance: '1.2 km'
  },
  {
    name: 'Cebu Doctors\' University Hospital',
    rating: 4.8,
    reviews: 348,
    address: 'Osmena Blvd., Cebu City',
    hours: '8:00 AM – 5:00 PM',
    distance: '2.1 km'
  },
  {
    name: 'PhilHealth Maternity Clinic Cebu',
    rating: 4.5,
    reviews: 89,
    address: 'M.J. Cuenco Ave., Cebu City',
    hours: '8:00 AM – 4:00 PM',
    distance: '3.4 km'
  }
]
