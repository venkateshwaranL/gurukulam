---
title: 'அடிப்படை வரையறைகள்'
date: 2018-11-14T19:02:50-07:00
draft: false
weight: 2
extensions:
     - katex
---



#### 12.2 அடிப்படை வரையறைகள்(Basic definitions)

நிகழ்தகவுக் கோட்பாட்டைக் கற்பதற்கு முன்பு நாம் முந்தையை வகுப்புகளில் அடிக்கடி
பயன்படுத்திய சில வரையறைகளை நினைவு கூர்வோம்.

{{< box title="வரையறை 12.1" type="objective" >}}
ஒரு செயல்பாடு வரையறுக்கப்பட்ட முடிவுகளைக் கொண்டிருக்குமேயானால்,
அச்செயல்பாட்டினைச் சோதனை (experiment) என வரையறுக்கலாம்.

{{< /box >}}

{{< box title="வரையறை 12.2" type="objective" >}}
நிர்ணயிக்கப்பட்ட சோதனை (Deterministic Experiment): ஒரே மாதிரியான சூழ்நிலையில்,
ஒரு சோதனையின் முடிவுகளை முன்கூட்டியே உறுதியாகக் கணிக்க முடியுமாயின், அது
நிர்ணயிக்கப்பட்ட சோதனையாகும்.

{{< /box >}}

{{< box title="வரையறை 12.3" type="objective" >}}
சமவாய்ப்புச் சோதனை (Random Experiment or non deterministic) என்பது

(i) ஒரு சோதனையில்கிடைக்கக் கூடியஎல்லாதவிதச் சாத்தியக் கூறுகளைமுன்கூட்டியே
அறிந்திருக்க முடியும்.

(ii) சோதனைக்கு முன்பே முடிவினைக் கணிக்க இயலாது மற்றும்

(iii) ஒரே மாதிரியான சூழ்நிலையில் இச்சோதனையை மீண்டும் மீண்டும் பயன்படுத்த
இயலும்.

{{< /box >}}

ஒரு பகடையை “உருட்டுவது”, ஒரு நாணயத்தைச் “சுண்டுவது” முதலியன சமவாய்ப்புச்
சோதனைக்கு உதாரணங்களாகும்.

{{< box title="வரையறை 12.4" type="objective" >}}
ஒரு சமவாய்ப்புச் சோதனையில் கிடைக் கூடிய அடிப்படை நிகழ்வுகளை (முடிவுகளை)
மேலும் பிரிக்க இயலாது எனில் அது ஒரு **சாதாரண நிகழ்ச்சியாகும்** (simple event).

{{< /box >}}

{{< box title="வரையறை 12.5" type="objective" >}}
சமவாய்ப்புச் சோதனையின் எல்லா நிகழ்வுகளையும் கொண்ட கணமானது **கூறுவெளி** (Sample
space) எனப்படும். ஒரு கூறுவெளியின் ஒவ்வொரு நிகழ்வும் சாதாரண நிகழ்வாகும்.

{{< /box >}}

#### விளக்க எடுத்துக்காட்டு 12.1
(1) (i) ஒரு பகடையை ஒருமுறை உருட்டிக் கிடைக்கக்கூடிய கூறுவெளியானது
\\(s=\lbrace1,2,3,4,5,6\rbrace\\)

(ii) ஒரு நாணயத்தைச் சுண்டினால் கிடைக்கும் கூறுவெளி\\(s={H,T}\\)

(2) (i) தலைவிழும் வரை ஒரு நாணயத்தை எத்தனை முறை சுண்ட வேண்டும் என முன்பே
அறிய இயலாது. இச்சோதனையின் கூறுவெளி\\(S={H,TH,TTH,TTTH,...}\\) என்ற
முடிவுறாக் கணம் ஆகும்.

(ii) தொடர்வண்டிப் பயணச்சீட்டு வாங்கப் பயணச்சீட்டு வழங்கும் இடத்தில் காத்திருக்கும்
பயணிகளின் எண்ணிக்கைக்குத் தொடர்புடைய கூறுவெளியானது \\(S=\lbrace0,1,2,...\rbrace\\)

(3) (i) சமவாய்ப்பு முறையில் 0-க்கும் 1-க்கும் இடையில் ஒரு எண்ணைத் தேர்ந்தெடுக்க
அமையும் சோதனையின் கூறுவெளி \\(S=\lbrace x:0 < x <1\rbrace\\).

(ii) ஒரு மின் விளக்கின் ஆயுள் காலத்தைக் காட்டும் (t மணிநேரத்தில்) நிகழ்ச்சியின்
கூறுவெளி\\(S=\lbrace t:0 < t <1000\rbrace\\)

எடுத்துகாட்டு (2) மற்றும் (3) ல் அமைந்துள்ள இரு வகையான முடிவுறா கணங்களை
வேறுபடுத்தும்போது, அதில் ஒன்று மற்றொன்றைவிடக் குறிப்பிடத்தக்க அதிக உறுப்புகளைப்
பெற்றுள்ளது என அறியலாம். குறிப்பாக (2) ல் உள்ள கூறுவெளி S-ல் உள்ள உறுப்புகள்
எண்ணிடத்தக்கவை. ஆனால் (3) ல் உள்ள கூறுவெளியின் உறுப்புகள் எண்ணிடத்தக்கதல்ல.
எண்ணிடத்தக்க மற்றும் முடிவற்ற (countably infinite) கணங்களின் உறுப்புகளைப் பட்டியலிட்டு
அவைகளை இயல் எண்கள் கணம் N-உடன் ஒன்றுக் கொன்று தொடர்புபடுத்தலாம். ஆனால்
எண்ணணிடத்தக்க இயலாத கணங்களை இவ்வாறு தொடர்புபடுத்த இயலாது.

மேலே உள்ள எடுத்துக்காட்டுகள் மூலம் ஒரு கூறுவெளியில் உள்ள உறுப்புகள்
எண்ணிடத்தக்கவையாக அல்லது எண்ணிடத்தக்கவை அல்லாதவையாக இருக்கும் என்பது தெளிவாகிறது.






