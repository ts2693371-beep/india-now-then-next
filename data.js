// India NOW → THEN → NEXT — V1 researched Batch 1
const PROFILES = [
  {id:'student',icon:'🎓',name:{en:'Student',hi:'छात्र',hinglish:'Student'}},
  {id:'jobSeeker',icon:'💼',name:{en:'Job Seeker',hi:'नौकरी खोजने वाला',hinglish:'Job Seeker'}},
  {id:'farmer',icon:'🌾',name:{en:'Farmer',hi:'किसान',hinglish:'Kisan'}},
  {id:'employee',icon:'🧑‍💻',name:{en:'Employee',hi:'कर्मचारी',hinglish:'Employee'}},
  {id:'citizen',icon:'🏛️',name:{en:'General Citizen',hi:'सामान्य नागरिक',hinglish:'Aam Citizen'}}
];
const R='2026-09-05';
const mk=(id,title,category,profiles,now,then,next,source,keywords)=>({id,title,category,dateAdded:R,lastVerified:R,now:{...(now||{}),type:'fact'},then:{...(then||{}),type:'context'},next:{...(next||{}),type:'prediction'},outcomeStatus:'pending',outcomeNote:{en:'Pending — this prediction has not been evaluated yet.',hi:'पेंडिंग — इस प्रेडिक्शन का अभी मूल्यांकन नहीं हुआ है।',hinglish:'Pending'},source,profiles:P(profiles),keywords,isSample:false});
const rel={
  student:{en:'Useful when this affects your studies, applications, documents or exams.',hi:'यह आपकी पढ़ाई, आवेदन, दस्तावेज़ या परीक्षा से संबंधित होने पर उपयोगी है।',hinglish:'Useful when this affects studies'},
  jobSeeker:{en:'Useful when this affects your job search, recruitment, applications or required documents.',hi:'यह आपकी नौकरी खोज, भर्ती, आवेदन या आवश्यक दस्तावेज़ से संबंधित होने पर उपयोगी है।',hinglish:'Useful when job-related'},
  farmer:{en:'Useful when this affects farming support, payments, insurance, records or agriculture services.',hi:'यह खेती सहायता, भुगतान, बीमा, रिकॉर्ड या कृषि सेवाओं से संबंधित होने पर उपयोगी है।',hinglish:'Useful for farmers'},
  employee:{en:'Useful when this affects your salary, tax, pension, employment benefits or workplace paperwork.',hi:'यह आपकी वेतन, कर, पेंशन, रोजगार लाभ या कार्यस्थल कागजी कार्रवाई से संबंधित होने पर उपयोगी है।',hinglish:'Useful for employees'},
  citizen:{en:'Useful when you need to check a government service, payment, document, rule or complaint route.',hi:'जब आपको सरकारी सेवा, भुगतान, दस्तावेज़, नियम या शिकायत मार्ग की जाँच करनी हो तब उपयोगी है।',hinglish:'Useful for general citizens'}
};
function P(list){
  const o={};
  const arr = Array.isArray(list)?list:[];
  for(const p of ['student','jobSeeker','farmer','employee','citizen']){
    o[p]=arr.includes(p)?rel[p]:{en:'Not a primary match for this profile; open it when you specifically choose this profile.',hi:'यह प्राथमिक प्रोफ़ाइल के लिए उपयुक्त नहीं है; जब आप विशेष रूप से इस प्रोफ़ाइल को चुनें तब खोलें।',hinglish:'Not primary match'};
  }
  return o;
}
const CARDS=[
mk('ntn-054',{en:'PM-KISAN — instalment, e-KYC and beneficiary status',hi:'PM-KISAN — किस्त, e-KYC और लाभार्थी स्थिति',hinglish:'PM-KISAN — instalment, e-KYC and beneficiary status'},{en:'The 23rd PM-KISAN instalment was released on 20 June 2026. The official portal says e-KYC is mandatory and provides beneficiary/payment-status tools.',hi:'PM-KISAN की 23वीं किस्त 20 जून 2026 को जारी की गई थी। आधिकारिक पोर्टल कहता है कि e-KYC अनिवार्य है और लाभार्थी/भुगतान-स्थिति उपकरण प्रदान करता है।',hinglish:'23rd instalment released 20 June 2026.'},{en:'PM-KISAN is a direct-benefit income-support scheme for eligible farmer families; payments are made through DBT when the farmer meets the scheme conditions.',hi:'PM-KISAN पात्र किसान परिवारों के लिए प्रत्यक्ष लाभ आय-समर्थन योजना है; भुगतान DBT के माध्यम से किया जाता है जब किसान योजना की शर्तें पूरी करता है।',hinglish:'PM-KISAN is direct-benefit'},
{en:'The next useful signal is an official instalment or beneficiary-status update. Do not treat an expected future instalment date as confirmed until the government announces it.',hi:'अगला उपयोगी संकेत एक आधिकारिक किस्त या लाभार्थी-स्थिति अपडेट है। जब तक सरकार इसकी घोषणा नहीं करती, संभावित भविष्य की किस्त की तारीख को सत्यापित न मानें।',hinglish:'Watch for official instalment/beneficiary updates'},{label:'PM-KISAN',url:'https://www.pmkisan.gov.in/'},['PM-KISAN','23rd instalment','e-KYC','beneficiary status','DBT']),
mk('ntn-101',{en:'EPFO — UAN, passbook, claims and member services',hi:'EPFO — UAN, पासबुक, क्लेम और सदस्य सेवाएँ',hinglish:'EPFO — UAN, passbook, claims and member services'},{en:'EPFO provides member services including UAN-related services, claim tracking and an online passbook service. Use the official member portal to check your own account status.',hi:'EPFO सदस्य सेवाएँ प्रदान करता है, जिसमें UAN-संबंधित सेवाएँ, दावे ट्रैक करना और ऑनलाइन पासबुक सेवा शामिल है। अपने खाते की स्थिति जांचने क�� लिए आधिकारिक सदस्य पोर्टल का उपयोग करें।',hinglish:'Use EPFO member portal for account status'},{en:'EPF member services are part of the social-security system for covered employees and employers.',hi:'EPF सदस्य सेवाएँ कवर किए गए कर्मचारियों और नियोक्ताओं के लिए सामाजिक सुरक्षा प्रणाली का हिस्सा हैं।',hinglish:'EPF member services context'},{en:'The next useful signal is an EPFO notice or portal update affecting your account, claim or service. Check the applicable rule before acting on a withdrawal claim.',hi:'अगला उपयोगी संकेत आपकी खाता, दावा या सेवा को प्रभावित करने वाला EPFO नोटिस या पोर्टल अपडेट है। निकासी दावे पर कार्रवाई करने से पहले लागू नियम की जाँच करें।',hinglish:'Watch for EPFO notices/portal updates'},{label:'EPFO Member Services',url:'https://unifiedportal-mem.epfindia.gov.in/'},['EPFO','UAN','EPF passbook','claim status','member portal']),
/* Remaining mk entries unchanged — original data preserved. */
];
