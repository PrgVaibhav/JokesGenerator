const hindiJokes = [
    "पति- आज मैं बहुत टेंशन में🙄 हूं मूड खराब है और सिर भी दुख रहा है पत्नी- 👸अच्छा…! खैर ये सब छोड़ो, देखो मेरा नया पर्स🙅‍♀️",
    "अगर बेवफाओं के सर पर सींग होते.. तो मेरी वाली आज बारासिंगा होती.. – बेदर्द आशिक 😂",
    "सुबह-सुबह पत्नी नींद से उठते ही बोली, “अजी सुनते हो?”  पति, “बोलो! क्या हुआ?”😋  पत्नी, “मुझे सपना आया कि आप मेरे लिए हीरों का हार लेकर आए हो।”    पति, ठीक है, तो वापिस सो जा और पहन ले।”    😋😁",
    "लड़का : सुना है आपकी मुस्कान बड़ी कातिल है आपकी मुस्कुराहट पर हर कोई मरता है लड़की : लोग तो यही कहते हैं लड़का : तो एक दिन टाइम निकालकर घर चली आना एक चूहे ने बड़ा परेशान करके रखा है 😂😂😂",
    "पिता ( बेटे से ) – देखों बेटे , जुआ नहीं खेलते | यह ऐसी आदत हैं कि यदि इसमें आज जीतोगे तो कल हारोगे , परसों जीतोगे तो उससे अगले दिन हार जाओगे | बेटा – बस , पिताजी ! मैं समझ गया , आगे से मैं एक दिन छौड़कर खेला करूंगा |😂😂😂",
    "अफ्रीका में काले बोयफ़्रेंड ने अपनी काली गर्लफ्रेंड को काली रात में काले समंदर के पास बड़े रोमॅंटिक मूड में पूछा…! तू बैठी है या…. चली गई…?",
    "Wife – तुम्हारे इस नरक में तुम्हारी गुलामी करते – करते मैं तंग आ गई। लगता है पिछले जन्म में मैंने बहुत बुरे कर्म किये होंगे। Husband – तो अब तो अच्छे कर लो। मायके जाओ और मेरे घर को स्वर्ग बनाओ।",
    "संता – आज कल मेरा दिमाग बहुत तेज चल रहा है, बंता- कैसे पाजी?  संता – मैंने अब सर्दी में एसी लगवा लिया है, बंता – अबे इतनी सर्दी मे एसी? संता – भाई मैंने एसी उल्टा लगवाया है, वो गर्म हवा अंदर देगा, ठंडी हवा बाहर 🙂 🙂",
    "पत्नी : तुम्हें मेरे साथ 10 साल का समय कैसा लगा ? पति : एक सेकंड के बराबर…  पत्नी : मेरे लिए 10000 रुपए कितने होते हैं ..? पति : एक रुपए के सिक्के के बराबर.. पत्नी : तो मुझे एक रुपए का सिक्का दो.. पति : एक सेकंड तक वेट करो..",
    "पत्नी (फोन पर): घर जल्दी आइए, मुर्गा बनाऊंगी। 🧘‍♀️  पति (मन मे): पता नहीं खाने की बात हो रही है या जैसे स्कूल में मुर्गा बनाया जाता था, उसकी।  🤣🤣🤣🤣",
    "पत्नी: अजी सुनते हो, आपका दोस्त एक पागल लड़की से शादी करने जा रहा है…उसे रोकते क्यों नहीं ? पति: क्यों रोकूं ? उस दोस्त ने मुझे रोका था क्या ?",
    "Wife – डोक्टर ने मुझे आराम करने के लिए स्विजर्लेंद या अमेरिका जाने के लिए बोला है तो हम कहा जायेंगे ?😅  Husband – दुसरे डोक्टर के पास |",
    "पती पत्नी के बीच लड़ाई हुई… पत्नी बाजार जाके जहर लाई और खा लिया…. लेकिन वो मरी नही बिमार हो गई.  पति गुस्से से बोला… सौ बार कहा है चीजें देख कर खरीदा करो, पैसे भी गये, काम भी नही हुआ।",
    "एक आदमी घबराया सा अपने बेटे को अस्पताल लाया| आदमी – डॉक्टर साहब मेरा बेटा बेहोश हो गया है|  डॉक्टर – क्यों क्या हुआ ? आदमी – पता नहीं पहले तो 2 बजे तक जागता था आज 8 बजे ही आँख बंद करके पड़ा है| अचानक बेटा उठा – अरे मुझे कहाँ उठा लाये आज मोबाइल खराब है इसलिए 8 बजे ही सो गया था 🙂 🙂",
    
]

function randomHindiJokes(){
    var randomNumber = Math.floor(Math.random() * (hindiJokes.length));
    document.getElementById("displayHindiJokes").innerHTML = hindiJokes[randomNumber];
}