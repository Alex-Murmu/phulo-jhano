import { Activity, Baby, Bone, Brain, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import doctorsMarkdown from "../content/doctors.md?raw";
import facilitiesMarkdown from "../content/facilities.md?raw";
import managementMarkdown from "../content/management.md?raw";
import schemesMarkdown from "../content/schemes.md?raw";

function readMarkdownData(markdown, label) {
  const match = markdown.match(/```json\s*([\s\S]*?)\s*```/i);
  if (!match) throw new Error(`Missing JSON data block in ${label}`);
  try {
    return JSON.parse(match[1]);
  } catch (error) {
    throw new Error(`Invalid JSON data block in ${label}: ${error.message}`);
  }
}

export const services = [
  { icon: HeartPulse, title: "Heart & vascular", hi: "हृदय एवं रक्त वाहिका", text: "Advanced care for your heart, from prevention to recovery.", hitext: "रोकथाम से स्वास्थ्य लाभ तक आपके हृदय की उन्नत देखभाल।", image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=800&q=85", tone: "coral" },
  { icon: Brain, title: "Neurology", hi: "न्यूरोलॉजी", text: "Specialist diagnosis and treatment for every stage of life.", hitext: "जीवन के हर चरण के लिए विशेषज्ञ जांच और उपचार।", image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=85", tone: "lavender" },
  { icon: Bone, title: "Orthopedics", hi: "हड्डी एवं जोड़", text: "Move freely again with personalized bone and joint care.", hitext: "व्यक्तिगत हड्डी और जोड़ की देखभाल के साथ फिर से स्वतंत्र चलें।", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85", tone: "blue" },
  { icon: Baby, title: "Women's health", hi: "महिला स्वास्थ्य", text: "Compassionate, complete care for every chapter.", hitext: "जीवन के हर पड़ाव पर संवेदनशील और संपूर्ण देखभाल।", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=85", tone: "gold" },
];

const legacyDoctors = [
  { name: "Dr. Amara Iyer", specialty: "Cardiology", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=85", education: "MBBS, MD (Medicine), DM (Cardiology)", experience: "14+ years", registration: "Medical Council Reg. PJMC-1042", languages: "English, Hindi, Bengali", availability: "Mon, Wed & Fri · 9:00 AM – 2:00 PM", expertise: "Preventive cardiology, hypertension, echocardiography and heart failure care" },
  { name: "Dr. Jonah Klein", specialty: "Neurology", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=85", education: "MBBS, MD (Medicine), DM (Neurology)", experience: "11+ years", registration: "Medical Council Reg. PJMC-1178", languages: "English, Hindi, Bengali", availability: "Tue, Thu & Sat · 10:00 AM – 3:00 PM", expertise: "Stroke care, epilepsy, headaches, movement disorders and neuro-rehabilitation" },
  { name: "Dr. Priya Shah", specialty: "Pediatrics", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=85", education: "MBBS, MD (Pediatrics)", experience: "9+ years", registration: "Medical Council Reg. PJMC-1264", languages: "English, Hindi, Bengali, Santhali", availability: "Mon – Sat · 8:30 AM – 1:30 PM", expertise: "Newborn care, childhood immunisation, nutrition and adolescent health" },
];

const legacyFacilities = [
  { title: "Emergency & trauma care", hi: "आपातकालीन एवं ट्रॉमा सेवा", image: "https://dumkamedicalcollege.org/assets/hospital3-D9rF4IYy.webp" },
  { title: "Modern diagnostic labs", hi: "आधुनिक जांच प्रयोगशालाएं", image: "https://dumkamedicalcollege.org/assets/hospital4-BdauQ0uL.webp" },
  { title: "Teaching & learning", hi: "शिक्षण एवं प्रशिक्षण", image: "https://dumkamedicalcollege.org/assets/hospital5-B7sn4mvM.webp" },
];

export const quickLinks = [
  { icon: Activity, title: "Find a department", hi: "विभाग खोजें" },
  { icon: Stethoscope, title: "Meet our doctors", hi: "डॉक्टरों से मिलें" },
  { icon: ShieldCheck, title: "Patient services", hi: "मरीज सेवाएं" },
];

const leadershipPortraits = [
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=320&q=85",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=320&q=85",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=320&q=85",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=320&q=85",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=320&q=85",
  "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&w=320&q=85"
];

const legacyHospitalLeadership = {
  management: [
    { name: "Dr. Gajendra Kumar Singh", role: "Principal, Phulo Jhano Medical College", hiRole: "प्राचार्य, फूलो झानो मेडिकल कॉलेज", image: leadershipPortraits[0] },
    { name: "Dr. Ruben Hembrom", role: "Medical Superintendent, Hospital", hiRole: "चिकित्सा अधीक्षक, अस्पताल", image: leadershipPortraits[1] },
    { name: "Dr. Lakhan Soren", role: "Deputy Superintendent", hiRole: "उप चिकित्सा अधीक्षक", image: leadershipPortraits[2] }
  ],
  departments: [
    ["Anatomy", "Dr. Nand Kishor Karmali"], ["Biochemistry", "Dr. Sashi Bala Nag"], ["Physiology", "Dr. Punam Mehta"],
    ["Pathology", "Dr. Budhan Baitha"], ["Microbiology", "Dr. Vikash Oraon"], ["Pharmacology", "Dr. Manoj Kumar Purty"],
    ["Forensic Medicine (FMT)", "Dr. Gautam Kumar"], ["Community Medicine (PSM)", "Dr. Mrinal Ranjan Srivastava"],
    ["General Surgery", "Dr. Babu Mani Baski"], ["General Medicine", "Dr. Lal Babu Tudu"], ["Obstetrics & Gynaecology", "Dr. Rani Soren"],
    ["Paediatrics", "Dr. Simple Shalini Minz"], ["Orthopaedics", "Dr. Pappu Marandi"], ["Dentistry", "Dr. Ruchi Mitra"],
    ["Psychiatry", "Dr. Ram Sakal Hansda"], ["ENT", "Dr. Alok Kumar"], ["Anaesthesiology", "Dr. Priyanka Hansda"]
  ].map(([department, name], index) => ({ department, name, image: leadershipPortraits[index % leadershipPortraits.length] })),
  district: [
    { name: "Dr. Sushanto Kumar Manjhi", role: "Civil Surgeon, Dumka", hiRole: "सिविल सर्जन, दुमका", image: leadershipPortraits[3] },
    { name: "Dr. Vanita Marandi", role: "District Tuberculosis Officer", hiRole: "जिला क्षय रोग अधिकारी", image: leadershipPortraits[4] }
  ],
  contacts: [
    ["Principal's office", "principal.medicalcollege.dumka@gmail.com"], ["Principal's office (alternate)", "principal.pjmc@gmail.com"],
    ["Superintendent's office", "superintendentdmch@gmail.com"], ["Hospital listing", "93347 37811"], ["Medical college", "06434-295024"]
  ],
  sources: [
    ["Phulo Jhano Medical College official website", "https://dumkamedicalcollege.org/"],
    ["Dumka district government website", "https://dumka.nic.in/"],
    ["District-level officers directory", "https://dumka.nic.in/divisions/district-level-officers/page/2/"],
    ["March 2026 faculty list (PDF)", "https://dumkamedicalcollege.org/wp-content/uploads/2026/03/PJMCH-Faculty-for-Wbsite.pdf"]
  ]
};

export const doctors = readMarkdownData(doctorsMarkdown, "doctors.md");
export const facilities = readMarkdownData(facilitiesMarkdown, "facilities.md");
export const hospitalLeadership = readMarkdownData(managementMarkdown, "management.md");

export const hospitalServiceGroups = [
  {
    title: "Medical departments",
    hi: "चिकित्सा विभाग",
    intro: "Core departments and specialist consultations available through the medical-college hospital. OPD schedules should be confirmed before visiting.",
    hiIntro: "मेडिकल कॉलेज अस्पताल के मुख्य विभाग और विशेषज्ञ परामर्श। आने से पहले ओपीडी समय की पुष्टि करें।",
    items: ["General Medicine", "General Surgery", "Obstetrics and Gynaecology", "Paediatrics", "Anaesthesiology", "Ophthalmology", "Dental department", "Specialist consultations", "Orthopaedics", "ENT", "Dermatology", "Psychiatry"],
    hiItems: ["सामान्य चिकित्सा", "सामान्य सर्जरी", "प्रसूति एवं स्त्री रोग", "बाल चिकित्सा", "एनेस्थीसियोलॉजी", "नेत्र रोग", "दंत विभाग", "विशेषज्ञ परामर्श", "हड्डी रोग", "ईएनटी", "त्वचा रोग", "मनोचिकित्सा"],
    image: "https://images.unsplash.com/photo-1638202993928-7d113b8d5a4f?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1638202993928-7d113b8d5a4f?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=1000&q=85"],
    tone: "coral"
  },
  {
    title: "Emergency and critical care",
    hi: "आपातकालीन एवं गंभीर देखभाल",
    intro: "Round-the-clock emergency support with critical-care and inpatient services.",
    hiIntro: "चौबीसों घंटे आपातकालीन सहायता, गंभीर देखभाल और भर्ती सेवाएं।",
    items: ["24-hour emergency services", "Intensive Care Unit (ICU)", "Medical ICU", "Surgical ICU", "Burn unit", "Labour room complex", "Special Newborn Care Unit (SNCU)", "Neonatal care", "Medical wards", "Surgical wards"],
    hiItems: ["24 घंटे आपातकालीन सेवा", "आईसीयू", "मेडिकल आईसीयू", "सर्जिकल आईसीयू", "बर्न यूनिट", "लेबर रूम परिसर", "विशेष नवजात शिशु देखभाल इकाई", "नवजात देखभाल", "मेडिकल वार्ड", "सर्जिकल वार्ड"],
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85"],
    tone: "blue"
  },
  {
    title: "Diagnostic and testing facilities",
    hi: "जांच एवं निदान सुविधाएं",
    intro: "Testing and imaging support for diagnosis, treatment planning, and follow-up care.",
    hiIntro: "निदान, उपचार योजना और फॉलो-अप के लिए जांच एवं इमेजिंग सुविधाएं।",
    items: ["Blood tests", "Laboratory services", "Microbiology laboratory", "X-ray", "Ultrasound (USG)", "CT scan services", "ECG", "Other imaging services", "Manipal HealthMap diagnostic centre"],
    hiItems: ["रक्त जांच", "प्रयोगशाला सेवाएं", "माइक्रोबायोलॉजी प्रयोगशाला", "एक्स-रे", "अल्ट्रासाउंड (यूएसजी)", "सीटी स्कैन", "ईसीजी", "अन्य इमेजिंग सेवाएं", "मणिपाल हेल्थमैप डायग्नोस्टिक सेंटर"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85"],
    tone: "lavender"
  },
  {
    title: "Surgery and operation facilities",
    hi: "सर्जरी एवं ऑपरेशन सुविधाएं",
    intro: "Operation and anaesthesia services for general and obstetric procedures.",
    hiIntro: "सामान्य और प्रसूति प्रक्रियाओं के लिए ऑपरेशन एवं एनेस्थीसिया सेवाएं।",
    items: ["General operation theatre", "Obstetrics and Gynaecology OT", "General surgical procedures", "Obstetric surgeries", "Anaesthesia services", "Burn treatment"],
    hiItems: ["सामान्य ऑपरेशन थिएटर", "प्रसूति एवं स्त्री रोग ऑपरेशन थिएटर", "सामान्य सर्जिकल प्रक्रियाएं", "प्रसूति सर्जरी", "एनेस्थीसिया सेवाएं", "बर्न उपचार"],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85"],
    tone: "gold"
  },
  {
    title: "Specialised treatment facilities",
    hi: "विशेषीकृत उपचार सुविधाएं",
    intro: "Specialist treatment and support units for continuing hospital care.",
    hiIntro: "अस्पताल में निरंतर उपचार और सहायता के लिए विशेष इकाइयां।",
    items: ["Dialysis unit", "ICU care", "Burn treatment unit", "Nutrition Rehabilitation Centre (NRC)", "SNCU", "Labour Management Unit (LMU)", "Blood bank", "Maternity services"],
    hiItems: ["डायलिसिस यूनिट", "आईसीयू देखभाल", "बर्न उपचार इकाई", "पोषण पुनर्वास केंद्र", "एसएनसीयू", "लेबर मैनेजमेंट यूनिट", "ब्लड बैंक", "मातृत्व सेवाएं"],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=85"],
    tone: "mint"
  },
  {
    title: "Mother and child healthcare",
    hi: "माता एवं शिशु स्वास्थ्य",
    intro: "Continuity of care for pregnancy, delivery, newborns, children, and families.",
    hiIntro: "गर्भावस्था, प्रसव, नवजात, बच्चों और परिवारों के लिए निरंतर देखभाल।",
    items: ["Pregnancy checkups (ANC)", "Normal delivery", "Maternity care", "Child healthcare", "Newborn care", "Immunisation and vaccination", "Family planning", "Labour room services", "Special newborn care"],
    hiItems: ["गर्भावस्था जांच (एएनसी)", "सामान्य प्रसव", "मातृत्व देखभाल", "बाल स्वास्थ्य", "नवजात देखभाल", "टीकाकरण", "परिवार नियोजन", "लेबर रूम सेवाएं", "विशेष नवजात देखभाल"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1000&q=85"],
    tone: "peach"
  },
  {
    title: "Other facilities and infrastructure",
    hi: "अन्य सुविधाएं एवं आधारभूत संरचना",
    intro: "Patient-focused facilities that support a safe and accessible hospital experience.",
    hiIntro: "सुरक्षित और सुलभ अस्पताल अनुभव के लिए मरीज-केंद्रित सुविधाएं।",
    items: ["OPD", "IPD admission", "24-hour water supply", "RO drinking water", "Separate male and female toilets", "Patient waiting areas", "Medicine storage", "Biomedical waste management", "Internet and computer facilities", "ASHA worker support"],
    hiItems: ["ओपीडी", "आईपीडी भर्ती", "24 घंटे जल आपूर्ति", "आरओ पेयजल", "अलग पुरुष एवं महिला शौचालय", "मरीज प्रतीक्षा क्षेत्र", "दवा भंडारण", "बायोमेडिकल कचरा प्रबंधन", "इंटरनेट एवं कंप्यूटर सुविधा", "आशा कार्यकर्ता सहयोग"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=85"],
    tone: "slate"
  },
  {
    title: "Government schemes and financial assistance",
    hi: "सरकारी योजनाएं एवं वित्तीय सहायता",
    intro: "Ask the hospital help desk about eligibility, documentation, and current availability.",
    hiIntro: "पात्रता, दस्तावेज और वर्तमान उपलब्धता के लिए अस्पताल हेल्प डेस्क से पूछें।",
    items: ["Ayushman Bharat – PM-JAY", "Janani Suraksha Yojana (JSY)", "Janani Shishu Suraksha Karyakram (JSSK)", "Family planning programmes", "National immunisation programme"],
    hiItems: ["आयुष्मान भारत – पीएम-जेएवाई", "जननी सुरक्षा योजना", "जननी शिशु सुरक्षा कार्यक्रम", "परिवार नियोजन कार्यक्रम", "राष्ट्रीय टीकाकरण कार्यक्रम"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
    images: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85"],
    tone: "green"
  }
];

export const governmentSchemes = readMarkdownData(schemesMarkdown, "schemes.md");
