const constants = require('../utils/constants');
const mongoose = require('mongoose');
const Condition = require('../models/condition');
const User = require('../models/user');
const Case = require('../models/case');

async function main() {
  console.info('Started seeder!');

  await mongoose.connect(constants.database.uri);

  await Condition.deleteMany({});
  console.info('Conditions collection cleaned!');
  await Condition.insertMany(conditionsData);
  console.info(`Loaded ${conditionsData.length} conditions!`);

  await User.deleteMany({});
  console.info('Users collection cleaned!');
  await User.insertMany(usersData);
  console.info(`Loaded ${usersData.length} users!`);

  await Case.deleteMany({});
  console.info('Cases collection cleaned!');
  await Case.insertMany(casesData);
  console.info(`Loaded ${casesData.length} cases!`);

  console.info('Finished!');
  process.exit(0);

}

main().catch(console.error);

const casesData = [
  {
    description: `Patient  is an 42 year old  male.    Chief Complaint: Establish Care and Physical    HPI      Hemorrhoids  Bothersome  Comes and goes  Especially with sedentary life style  Recently worse  Couple nights where almost wakes patient up  Gets intermittently constipated  High fiber diet    Patient Active Problem    Diagnoses Code
 -  Hemorrhoids 455.6E       No outpatient prescriptions have been marked as taking for the  encounter (Office Visit) with ,  C.     Allergies   Allergen Reactions
 -  Pcn (Penicillins)
 -  Morphine        No past medical history on file.  Past Surgical History   Procedure Date
 -  Hx knee surgery      Arthroscopy age 15 for torn meniscus       Family History   Problem Relation  of Onset
 -  Cancer Mother      Breast
 -  Hypertension Mother
 -  Hypertension Father      History   Substance Use Topics
 -  Smoking status: Never Smoker
 -  Smokeless tobacco: Not on file`
  },
  {
    description: `Patient  is an 45 year old  female.    Chief Complaint:  Problem    HPI  states that about one month ago she woke up with redness and swelling to her left eye.  She went to see an ophthalmologist who prescribed her naphazoline.  She states that this relieves the redness only temporarily.  She also states that this morning she awoke with more crusting to the left eye.  The eye is not particularly itchy, but seems more irritated today.  She has not had any sick contacts.          Review of Systems   Constitutional: Negative for fever.   Eyes: Positive for discharge and redness. Negative for blurred vision, double vision and photophobia.   Skin: Negative for itching.   Neurological: Positive for headaches.         Objective:     BP 100/69  -Strict ER precautions reviewed with patient should symptoms persist or worsen (specific signs reviewed verbally).  Good communication established and plan agreed upon by patient.`
  },
  {
    description: `Patient presents with Flank Pain. The patient is a 51-year-old female, no significant past medical history, presents to the emergency department with left-sided flank pain ongoing ??1 month now with abdominal pain. The pain is intermittent, but has been worsening. She reports new onset nausea, vomiting, diarrhea for the last 2 days. She reports multiple episodes of nonbloody emesis starting yesterday. She has also had multiple episodes of nonbloody diarrhea. She has gone to see her primary care doctor twice since symptoms began. She was found to have mildly elevated creatinine and was referred to a nephrologist. However, the nephrologist is not willing to see her until . The patient feels she cannot wait that long especially in light of these new symptoms. She then followed up with her primary care doctor again and he prescribed Zofran and loperamide but offered her no other solutions. The pain has since increased as well. She denies any fevers, chills. She denies urinary symptoms including burning with urination, frequency, hematuria.`
  }
]

const usersData = [{
  name: 'Dr Joe Smith',
  email: 'joe.smith@mail.com',
  password: '12345'
}];

const conditionsData = [
  {
    "code": "A09",
    "description": "Infectious gastroenteritis and colitis, unspecified"
  },
  {
    "code": "A64",
    "description": "Unspecified sexually transmitted disease"
  },
  {
    "code": "B300",
    "description": "Keratoconjunctivitis due to adenovirus"
  },
  {
    "code": "B302",
    "description": "Viral pharyngoconjunctivitis"
  },
  {
    "code": "B308",
    "description": "Other viral conjunctivitis"
  },
  {
    "code": "B309",
    "description": "Viral conjunctivitis, unspecified"
  },
  {
    "code": "B373",
    "description": "Candidiasis of vulva and vagina"
  },
  {
    "code": "B9789",
    "description": "Other viral agents as the cause of diseases classified elsewhere"
  },
  {
    "code": "E860",
    "description": "Dehydration"
  },
  {
    "code": "F340",
    "description": "Cyclothymic disorder"
  },
  {
    "code": "F341",
    "description": "Dysthymic disorder"
  },
  {
    "code": "F39",
    "description": "Unspecified mood [affective] disorder"
  },
  {
    "code": "F411",
    "description": "Generalized anxiety disorder"
  },
  {
    "code": "F418",
    "description": "Other specified anxiety disorders"
  },
  {
    "code": "F419",
    "description": "Anxiety disorder, unspecified"
  },
  {
    "code": "F4321",
    "description": "Adjustment disorder with depressed mood"
  },
  {
    "code": "G43001",
    "description": "Migraine without aura, not intractable, with status migrainosus"
  },
  {
    "code": "G43009",
    "description": "Migraine without aura, not intractable, without status migrainosus"
  },
  {
    "code": "G43019",
    "description": "Migraine without aura, intractable, without status migrainosus"
  },
  {
    "code": "G43501",
    "description": "Persistent migraine aura without cerebral infarction, not intractable, with status migrainosus"
  },
  {
    "code": "G43509",
    "description": "Persistent migraine aura without cerebral infarction, not intractable, without status migrainosus"
  },
  {
    "code": "G43519",
    "description": "Persistent migraine aura without cerebral infarction, intractable, without status migrainosus"
  },
  {
    "code": "G43701",
    "description": "Chronic migraine without aura, not intractable, with status migrainosus"
  },
  {
    "code": "G43709",
    "description": "Chronic migraine without aura, not intractable, without status migrainosus"
  },
  {
    "code": "G43711",
    "description": "Chronic migraine without aura, intractable, with status migrainosus"
  },
  {
    "code": "G43719",
    "description": "Chronic migraine without aura, intractable, without status migrainosus"
  },
  {
    "code": "G43809",
    "description": "Other migraine, not intractable, without status migrainosus"
  },
  {
    "code": "G43811",
    "description": "Other migraine, intractable, with status migrainosus"
  },
  {
    "code": "G43819",
    "description": "Other migraine, intractable, without status migrainosus"
  },
  {
    "code": "G43829",
    "description": "Menstrual migraine, not intractable, without status migrainosus"
  },
  {
    "code": "G43909",
    "description": "Migraine, unspecified, not intractable, without status migrainosus"
  },
  {
    "code": "G43911",
    "description": "Migraine, unspecified, intractable, with status migrainosus"
  },
  {
    "code": "G43919",
    "description": "Migraine, unspecified, intractable, without status migrainosus"
  },
  {
    "code": "G44209",
    "description": "Tension-type headache, unspecified, not intractable"
  },
  {
    "code": "G44219",
    "description": "Episodic tension-type headache, not intractable"
  },
  {
    "code": "G4700",
    "description": "Insomnia, unspecified"
  },
  {
    "code": "G4701",
    "description": "Insomnia due to medical condition"
  },
  {
    "code": "G5600",
    "description": "Carpal tunnel syndrome, unspecified upper limb"
  },
  {
    "code": "H10029",
    "description": "Other mucopurulent conjunctivitis, unspecified eye"
  },
  {
    "code": "H1033",
    "description": "Unspecified acute conjunctivitis, bilateral"
  },
  {
    "code": "H1044",
    "description": "Vernal conjunctivitis"
  },
  {
    "code": "H1045",
    "description": "Other chronic allergic conjunctivitis"
  },
  {
    "code": "H10509",
    "description": "Unspecified blepharoconjunctivitis, unspecified eye"
  },
  {
    "code": "H10819",
    "description": "Pingueculitis, unspecified eye"
  },
  {
    "code": "H1089",
    "description": "Other conjunctivitis"
  },
  {
    "code": "H109",
    "description": "Unspecified conjunctivitis"
  },
  {
    "code": "H6020",
    "description": "Malignant otitis externa, unspecified ear"
  },
  {
    "code": "H60339",
    "description": "Swimmer's ear, unspecified ear"
  },
  {
    "code": "H60399",
    "description": "Other infective otitis externa, unspecified ear"
  },
  {
    "code": "H6500",
    "description": "Acute serous otitis media, unspecified ear"
  },
  {
    "code": "H65119",
    "description": "Acute and subacute allergic otitis media (mucoid) (sanguinous) (serous), unspecified ear"
  },
  {
    "code": "H65199",
    "description": "Other acute nonsuppurative otitis media, unspecified ear"
  },
  {
    "code": "H6520",
    "description": "Chronic serous otitis media, unspecified ear"
  },
  {
    "code": "H65499",
    "description": "Other chronic nonsuppurative otitis media, unspecified ear"
  },
  {
    "code": "H6590",
    "description": "Unspecified nonsuppurative otitis media, unspecified ear"
  },
  {
    "code": "H66009",
    "description": "Acute suppurative otitis media without spontaneous rupture of ear drum, unspecified ear"
  },
  {
    "code": "H66019",
    "description": "Acute suppurative otitis media with spontaneous rupture of ear drum, unspecified ear"
  },
  {
    "code": "H663X9",
    "description": "Other chronic suppurative otitis media, unspecified ear"
  },
  {
    "code": "H6640",
    "description": "Suppurative otitis media, unspecified, unspecified ear"
  },
  {
    "code": "H6690",
    "description": "Otitis media, unspecified, unspecified ear"
  },
  {
    "code": "J00",
    "description": "Acute nasopharyngitis [common cold]"
  },
  {
    "code": "J0100",
    "description": "Acute maxillary sinusitis, unspecified"
  },
  {
    "code": "J0110",
    "description": "Acute frontal sinusitis, unspecified"
  },
  {
    "code": "J0130",
    "description": "Acute sphenoidal sinusitis, unspecified"
  },
  {
    "code": "J0140",
    "description": "Acute pansinusitis, unspecified"
  },
  {
    "code": "J0190",
    "description": "Acute sinusitis, unspecified"
  },
  {
    "code": "J029",
    "description": "Acute pharyngitis, unspecified"
  },
  {
    "code": "J060",
    "description": "Acute laryngopharyngitis"
  },
  {
    "code": "J069",
    "description": "Acute upper respiratory infection, unspecified"
  },
  {
    "code": "J209",
    "description": "Acute bronchitis, unspecified"
  },
  {
    "code": "J301",
    "description": "Allergic rhinitis due to pollen"
  },
  {
    "code": "J3081",
    "description": "Allergic rhinitis due to animal (cat) (dog) hair and dander"
  },
  {
    "code": "J36",
    "description": "Peritonsillar abscess"
  },
  {
    "code": "J40",
    "description": "Bronchitis, not specified as acute or chronic"
  },
  {
    "code": "J411",
    "description": "Mucopurulent chronic bronchitis"
  },
  {
    "code": "J42",
    "description": "Unspecified chronic bronchitis"
  },
  {
    "code": "J45901",
    "description": "Unspecified asthma with (acute) exacerbation"
  },
  {
    "code": "J45902",
    "description": "Unspecified asthma with status asthmaticus"
  },
  {
    "code": "K210",
    "description": "Gastro-esophageal reflux disease with esophagitis"
  },
  {
    "code": "K219",
    "description": "Gastro-esophageal reflux disease without esophagitis"
  },
  {
    "code": "K2900",
    "description": "Acute gastritis without bleeding"
  },
  {
    "code": "K2920",
    "description": "Alcoholic gastritis without bleeding"
  },
  {
    "code": "K2960",
    "description": "Other gastritis without bleeding"
  },
  {
    "code": "K5900",
    "description": "Constipation, unspecified"
  },
  {
    "code": "K5901",
    "description": "Slow transit constipation"
  },
  {
    "code": "K5902",
    "description": "Outlet dysfunction constipation"
  },
  {
    "code": "K649",
    "description": "Unspecified hemorrhoids"
  },
  {
    "code": "K8019",
    "description": "Calculus of gallbladder with other cholecystitis with obstruction"
  },
  {
    "code": "K8020",
    "description": "Calculus of gallbladder without cholecystitis without obstruction"
  },
  {
    "code": "K8021",
    "description": "Calculus of gallbladder without cholecystitis with obstruction"
  },
  {
    "code": "K8042",
    "description": "Calculus of bile duct with acute cholecystitis without obstruction"
  },
  {
    "code": "K8050",
    "description": "Calculus of bile duct without cholangitis or cholecystitis without obstruction"
  },
  {
    "code": "K8051",
    "description": "Calculus of bile duct without cholangitis or cholecystitis with obstruction"
  },
  {
    "code": "L240",
    "description": "Irritant contact dermatitis due to detergents"
  },
  {
    "code": "L242",
    "description": "Irritant contact dermatitis due to solvents"
  },
  {
    "code": "L250",
    "description": "Unspecified contact dermatitis due to cosmetics"
  },
  {
    "code": "L251",
    "description": "Unspecified contact dermatitis due to drugs in contact with skin"
  },
  {
    "code": "L253",
    "description": "Unspecified contact dermatitis due to other chemical products"
  },
  {
    "code": "L255",
    "description": "Unspecified contact dermatitis due to plants, except food"
  },
  {
    "code": "L259",
    "description": "Unspecified contact dermatitis, unspecified cause"
  },
  {
    "code": "M25539",
    "description": "Pain in unspecified wrist"
  },
  {
    "code": "M5430",
    "description": "Sciatica, unspecified side"
  },
  {
    "code": "N730",
    "description": "Acute parametritis and pelvic cellulitis"
  },
  {
    "code": "N733",
    "description": "Female acute pelvic peritonitis"
  },
  {
    "code": "N739",
    "description": "Female pelvic inflammatory disease, unspecified"
  },
  {
    "code": "N912",
    "description": "Amenorrhea, unspecified"
  },
  {
    "code": "N920",
    "description": "Excessive and frequent menstruation with regular cycle"
  },
  {
    "code": "N921",
    "description": "Excessive and frequent menstruation with irregular cycle"
  },
  {
    "code": "N924",
    "description": "Excessive bleeding in the premenopausal period"
  },
  {
    "code": "N930",
    "description": "Postcoital and contact bleeding"
  },
  {
    "code": "N946",
    "description": "Dysmenorrhea, unspecified"
  },
  {
    "code": "R079",
    "description": "Chest pain, unspecified"
  },
  {
    "code": "R109",
    "description": "Unspecified abdominal pain"
  },
  {
    "code": "R21",
    "description": "Rash and other nonspecific skin eruption"
  },
  {
    "code": "R42",
    "description": "Dizziness and giddiness"
  },
  {
    "code": "S53449A",
    "description": "Ulnar collateral ligament sprain of unspecified elbow, initial encounter"
  },
  {
    "code": "S63519A",
    "description": "Sprain of carpal joint of unspecified wrist, initial encounter"
  },
  {
    "code": "S63599A",
    "description": "Other specified sprain of unspecified wrist, initial encounter"
  },
  {
    "code": "S638X9A",
    "description": "Sprain of other part of unspecified wrist and hand, initial encounter"
  },
  {
    "code": "S93419A",
    "description": "Sprain of calcaneofibular ligament of unspecified ankle, initial encounter"
  },
  {
    "code": "S93429A",
    "description": "Sprain of deltoid ligament of unspecified ankle, initial encounter"
  },
  {
    "code": "S93439A",
    "description": "Sprain of tibiofibular ligament of unspecified ankle, initial encounter"
  }
];