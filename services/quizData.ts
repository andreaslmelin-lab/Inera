import { Chapter, QuestionType } from '../types';

export const quizData: Chapter[] = [
  // Kapitel 1: Grunderna
  {
    chapterNumber: 1,
    title: 'Introduktion till MDR & UX',
    questions: [
      { 
        id: 101, 
        questionText: 'Vad står förkortningen MDR för i detta sammanhang?', 
        options: [
          { text: 'Medical Device Regulation', isCorrect: true }, 
          { text: 'Medical Design Research', isCorrect: false }, 
          { text: 'Minimal Data Requirement', isCorrect: false }, 
          { text: 'Medical Doctor Report', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'MDR står för Medical Device Regulation, EU:s förordning för medicintekniska produkter som skärper kraven på säkerhet.' 
      },
      { 
        id: 102, 
        questionText: 'Vilket är det primära syftet med användbarhet enligt MDR?', 
        options: [
          { text: 'Att öka produktens vinst', isCorrect: false }, 
          { text: 'Att minimera användarrisk', isCorrect: true }, 
          { text: 'Att göra designen snyggare', isCorrect: false }, 
          { text: 'Att förenkla för säljaren', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Enligt MDR är syftet med användbarhet att identifiera och minimera risker som kan uppstå på grund av hur produkten används.' 
      },
      { 
        id: 103, 
        questionText: 'Vilken standard är central för användbarhet i medicinteknik?', 
        options: [
          { text: 'ISO 9001', isCorrect: false }, 
          { text: 'ISO 14971', isCorrect: false }, 
          { text: 'IEC 62366-1', isCorrect: true }, 
          { text: 'ISO 13485', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'IEC 62366-1 specificerar processen för "usability engineering" för att säkerställa att en produkt är säker att använda.' 
      },
      { 
        id: 104, 
        questionText: 'Vad beskriver en "användningsspecifikation" (use spec)?', 
        options: [
          { text: 'En lista över tekniska krav', isCorrect: false }, 
          { text: 'Avsedd miljö och målgrupp', isCorrect: true }, 
          { text: 'En plan för marknadsföring', isCorrect: false }, 
          { text: 'En guide för kundsupporten', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Användningsspecifikationen definierar vem som ska använda produkten, på vilken patientgrupp, och i vilken miljö.' 
      },
      { 
        id: 105, 
        questionText: 'Kan en fristående app klassas som medicinteknik?', 
        options: [
          { text: 'Ja, vid medicinskt syfte', isCorrect: true }, 
          { text: 'Nej, mjukvara är undantag', isCorrect: false }, 
          { text: 'Bara om den säljs i butik', isCorrect: false }, 
          { text: 'Bara om den har hårdvara', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Ja, "Software as a Medical Device" (SaMD) faller under MDR om den har ett avsett medicinskt syfte.' 
      },
    ],
  },
  // Kapitel 2: Designprocessen
  {
    chapterNumber: 2,
    title: 'Användarcentrerad Design',
    questions: [
      { 
        id: 201, 
        questionText: 'Vad innebär en formativ utvärdering?', 
        options: [
          { text: 'En slutgiltig validering', isCorrect: false }, 
          { text: 'Löpande tester i designen', isCorrect: true }, 
          { text: 'En analys av marknaden', isCorrect: false }, 
          { text: 'En granskning av källkod', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Formativ utvärdering är tester som görs löpande under utvecklingen för att identifiera problem tidigt.' 
      },
      { 
        id: 202, 
        questionText: 'Vad skiljer en användare från en patient?', 
        options: [
          { text: 'Det är exakt samma sak', isCorrect: false }, 
          { text: 'Användaren styr enheten', isCorrect: true }, 
          { text: 'Patienten betalar alltid', isCorrect: false }, 
          { text: 'Användaren är en läkare', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Användaren interagerar med produkten, medan patienten är den som behandlingen eller diagnosen gäller.' 
      },
      { 
        id: 203, 
        questionText: 'Vad är en "persona" i UX-sammanhang?', 
        options: [
          { text: 'En riktig testdeltagare', isCorrect: false }, 
          { text: 'En fiktiv användarprofil', isCorrect: true }, 
          { text: 'En person i projektet', isCorrect: false }, 
          { text: 'En juridisk term i MDR', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Personas hjälper teamet att förstå och känna empati för slutanvändarnas mål och behov.' 
      },
      { 
        id: 204, 
        questionText: 'Varför definieras användningsmiljön?', 
        options: [
          { text: 'För att välja rätt färger', isCorrect: false }, 
          { text: 'För att förstå kontexten', isCorrect: true }, 
          { text: 'För att bestämma priset', isCorrect: false }, 
          { text: 'Det är inte obligatoriskt', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Miljön (t.ex. buller eller stress) påverkar hur produkten används och vilka risker som finns.' 
      },
      { 
        id: 205, 
        questionText: 'Vad är syftet med heuristisk utvärdering?', 
        options: [
          { text: 'Test med slutanvändare', isCorrect: false }, 
          { text: 'Expertgranskning av UI', isCorrect: true }, 
          { text: 'Mätning av prestandan', isCorrect: false }, 
          { text: 'Skriva dokumentationen', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Heuristisk utvärdering låter experter granska ett gränssnitt mot etablerade användbarhetsprinciper.' 
      },
    ],
  },
  // Kapitel 3: Riskhantering
  {
    chapterNumber: 3,
    title: 'Riskhantering & Användbarhet',
    questions: [
        { 
          id: 301, 
          questionText: 'Vilken standard styr riskhanteringen?', 
          options: [
          { text: 'IEC 62366-1', isCorrect: false }, 
          { text: 'ISO 14971', isCorrect: true }, 
          { text: 'ISO 9001', isCorrect: false }, 
          { text: 'ISO 13485', isCorrect: false }
          ], 
          type: QuestionType.Single, 
          recap: 'ISO 14971 är den harmoniserade standarden för riskhantering för medicintekniska produkter.' 
        },
        { 
          id: 302, 
          questionText: 'Vad definierar ett "use error"?', 
          options: [
            { text: 'Ett tekniskt mjukvarufel', isCorrect: false }, 
            { text: 'Oavsiktligt användarfel', isCorrect: true }, 
            { text: 'Medvetet felaktigt bruk', isCorrect: false }, 
            { text: 'Ett fel i manualens text', isCorrect: false }
          ], 
          type: QuestionType.Single, 
          recap: 'Use error är oavsiktliga handlingar av användaren som leder till ett annat resultat än det avsedda.' 
        },
        { 
          id: 303, 
          questionText: 'Vad är "förutsebart missbruk"?', 
          options: [
            { text: 'Att hacka mjukvaran', isCorrect: false }, 
            { text: 'Ej avsedd användning', isCorrect: true }, 
            { text: 'Att tappa enheten', isCorrect: false }, 
            { text: 'Att inte läsa guiden', isCorrect: false }
          ], 
          type: QuestionType.Single, 
          recap: 'Det är användning på ett sätt tillverkaren inte avsett, men som man rimligen kan förutse.' 
        },
        { 
          id: 304, 
          questionText: 'Vad är en "kritisk uppgift" i UI?', 
          options: [
            { text: 'Den vanligaste uppgiften', isCorrect: false }, 
            { text: 'Uppgift med skaderisk', isCorrect: true }, 
            { text: 'Den svåraste koden', isCorrect: false }, 
            { text: 'En tidskrävande del', isCorrect: false }
          ], 
          type: QuestionType.Single, 
          recap: 'En kritisk uppgift är en handling som, om den utförs fel, kan leda till allvarlig skada.' 
        },
        { 
          id: 305, 
          questionText: 'Hur samverkar risk och UX?', 
          options: [
            { text: 'De är helt separata', isCorrect: false }, 
            { text: 'UX identifierar risker', isCorrect: true }, 
            { text: 'Risk är bara hårdvara', isCorrect: false }, 
            { text: 'UX är bara estetik', isCorrect: false }
          ], 
          type: QuestionType.Single, 
          recap: 'Användbarhetsprocessen identifierar användarrelaterade risker som matas in i riskhanteringen.' 
        },
    ],
  },
  // Kapitel 4: Klinisk utvärdering
  {
    chapterNumber: 4,
    title: 'Klinisk Utvärdering',
    questions: [
      { 
        id: 401, 
        questionText: 'Vad är syftet med klinisk utvärdering?', 
        options: [
          { text: 'Att bevisa säkerhet/nytta', isCorrect: true }, 
          { text: 'Att testa koden för buggar', isCorrect: false }, 
          { text: 'Att välja rätt färgschema', isCorrect: false }, 
          { text: 'Att sänka produktionskostnad', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Klinisk utvärdering är en kontinuerlig process för att samla in och analysera kliniska data.' 
      },
      { 
        id: 402, 
        questionText: 'När krävs kliniska prövningar?', 
        options: [
          { text: 'Alltid för alla produkter', isCorrect: false }, 
          { text: 'Vid brist på befintlig data', isCorrect: true }, 
          { text: 'Bara om produkten är dyr', isCorrect: false }, 
          { text: 'Om VD:n bestämmer det', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Kliniska prövningar krävs om man inte kan påvisa säkerhet och prestanda genom befintlig litteratur.' 
      },
      { 
        id: 403, 
        questionText: 'Vad innebär "ekvivalens" i MDR?', 
        options: [
          { text: 'Jämförelse med liknande enhet', isCorrect: true }, 
          { text: 'Att alla priser är samma', isCorrect: false }, 
          { text: 'Att koden är identisk', isCorrect: false }, 
          { text: 'Att färgen är densamma', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Ekvivalens innebär att man jämför sin produkt med en redan godkänd produkt med liknande egenskaper.' 
      },
      { 
        id: 404, 
        questionText: 'Vilka data räknas som kliniska?', 
        options: [
          { text: 'Publicerad litteratur', isCorrect: true }, 
          { text: 'Egna kliniska studier', isCorrect: true }, 
          { text: 'Marknadsföringsmaterial', isCorrect: false }, 
          { text: 'Användarmanualens text', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'Kliniska data kan komma från vetenskaplig litteratur, kliniska prövningar eller klinisk erfarenhet.' 
      },
      { 
        id: 405, 
        questionText: 'Vem ansvarar för utvärderingen?', 
        options: [
          { text: 'Tillverkaren av produkten', isCorrect: true }, 
          { text: 'Slutanvändaren (läkaren)', isCorrect: false }, 
          { text: 'Patienten som behandlas', isCorrect: false }, 
          { text: 'Webbutvecklaren i teamet', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Det är alltid tillverkarens ansvar att genomföra och dokumentera den kliniska utvärderingen.' 
      },
    ],
  },
  // Kapitel 5: Post-Market Surveillance
  {
    chapterNumber: 5,
    title: 'Marknadskontroll (PMS)',
    questions: [
      { 
        id: 501, 
        questionText: 'Vad är syftet med Post-Market Surveillance (PMS)?', 
        options: [
          { text: 'Att samla erfarenhet efteråt', isCorrect: true }, 
          { text: 'Att sälja fler licenser', isCorrect: false }, 
          { text: 'Att spionera på konkurrenter', isCorrect: false }, 
          { text: 'Att hitta nya målgrupper', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Post-Market Surveillance (PMS) handlar om att systematiskt samla in erfarenheter från marknaden.' 
      },
      { 
        id: 502, 
        questionText: 'Vad är en "vaksamhetsrapport"?', 
        options: [
          { text: 'Rapport om allvarlig händelse', isCorrect: true }, 
          { text: 'En rapport om försäljning', isCorrect: false }, 
          { text: 'En lista på nya funktioner', isCorrect: false }, 
          { text: 'En guide för installation', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Vaksamhet (Vigilance) innebär att rapportera allvarliga tillbud till berörda myndigheter.' 
      },
      { 
        id: 503, 
        questionText: 'Vad innebär Post-Market Clinical Follow-up (PMCF)?', 
        options: [
          { text: 'Klinisk uppföljning efteråt', isCorrect: true }, 
          { text: 'En metod för snabb kodning', isCorrect: false }, 
          { text: 'En plan för reklamationer', isCorrect: false }, 
          { text: 'Ett sätt att mäta hastighet', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Post-Market Clinical Follow-up (PMCF) är en del av PMS som fokuserar på kliniska data.' 
      },
      { 
        id: 504, 
        questionText: 'Vilka källor används i Post-Market Surveillance (PMS)?', 
        options: [
          { text: 'Användarfeedback/klagomål', isCorrect: true }, 
          { text: 'Vetenskapliga databaser', isCorrect: true }, 
          { text: 'Sociala medier-likes', isCorrect: false }, 
          { text: 'Antal nedladdningar', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'PMS-data kommer från klagomål, litteratur, register och direkt feedback från användare.' 
      },
      { 
        id: 505, 
        questionText: 'Hur ofta ska Periodic Safety Update Report (PSUR) uppdateras?', 
        options: [
          { text: 'Minst en gång per år (klass II)', isCorrect: true }, 
          { text: 'Bara när något går fel', isCorrect: false }, 
          { text: 'Varje gång koden ändras', isCorrect: false }, 
          { text: 'En gång vart tionde år', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Periodic Safety Update Report (PSUR) sammanfattar PMS-data och ska uppdateras regelbundet.' 
      },
    ],
  },
  // Kapitel 6: Avancerad Risk
  {
    chapterNumber: 6,
    title: 'Avancerad Risk & Design',
    questions: [
      { 
        id: 601, 
        questionText: 'Vilka är exempel på UX-riskkontroller?', 
        options: [
          { text: 'Bekräftelsesteg i UI', isCorrect: true }, 
          { text: 'Tydligare varningar', isCorrect: true }, 
          { text: 'Snabbare processor', isCorrect: false }, 
          { text: 'Byta färg på loggan', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'Riskkontroll handlar om att designa bort risken genom t.ex. bekräftelsesteg eller tydlig info.' 
      },
      { 
        id: 602, 
        questionText: 'Vad ökar kognitiv belastning?', 
        options: [
          { text: 'Dålig placering av info', isCorrect: true }, 
          { text: 'Ologiska arbetsflöden', isCorrect: true }, 
          { text: 'Färgen på väggarna', isCorrect: false }, 
          { text: 'Ljudet från fläkten', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'Allt som tvingar användaren att tänka efter, leta efter information eller tolka signaler ökar den kognitiva belastningen.' 
      },
      { 
        id: 603, 
        questionText: 'Vilka principer gäller för larm?', 
        options: [
          { text: 'Larm ska prioriteras', isCorrect: true }, 
          { text: 'Larm ska ge vägledning', isCorrect: true }, 
          { text: 'Larm ska vara maxvolym', isCorrect: false }, 
          { text: 'Larm ska vara dolda', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'Effektiv larmdesign fokuserar på att göra larmen meningsfulla, prioriterade och informativa.' 
      },
      { 
        id: 604, 
        questionText: 'Vad ingår i användargränssnittet?', 
        options: [
          { text: 'Fysiska knappar', isCorrect: true }, 
          { text: 'Instruktionsmanual', isCorrect: true }, 
          { text: 'Produktens pris', isCorrect: false }, 
          { text: 'Företagets namn', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'UI är alla punkter där användaren interagerar med produkten, inklusive manualer och etiketter.' 
      },
      { 
        id: 605, 
        questionText: 'När är tillgänglighet extra viktigt?', 
        options: [
          { text: 'Vid nedsatt syn/hörsel', isCorrect: true }, 
          { text: 'Vid kognitiv nedsättning', isCorrect: true }, 
          { text: 'Bara för unga användare', isCorrect: false }, 
          { text: 'Bara för sjukhusmiljö', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'Tillgänglighet är avgörande för produkter avsedda för grupper med kända funktionsnedsättningar.' 
      },
    ],
  },
  // Kapitel 7: Cybersäkerhet
  {
    chapterNumber: 7,
    title: 'Cybersäkerhet & UX',
    questions: [
      { 
        id: 701, 
        questionText: 'Varför är cybersäkerhet en UX-fråga?', 
        options: [
          { text: 'Krånglig login ger risk', isCorrect: true }, 
          { text: 'Det är bara en IT-fråga', isCorrect: false }, 
          { text: 'Det påverkar batteritid', isCorrect: false }, 
          { text: 'Det gör appen snyggare', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Om säkerhetsåtgärder är för krångliga kommer användare hitta osäkra genvägar, vilket skapar risk.' 
      },
      { 
        id: 702, 
        questionText: 'Vad innebär "Security by Design"?', 
        options: [
          { text: 'Säkerhet från början', isCorrect: true }, 
          { text: 'Att lägga på ett lösenord', isCorrect: false }, 
          { text: 'Att dölja all källkod', isCorrect: false }, 
          { text: 'Att ha en snygg brandvägg', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Security by Design innebär att säkerhet integreras i hela utvecklingsprocessen, inte läggs på i slutet.' 
      },
      { 
        id: 703, 
        questionText: 'Vilka är vanliga hot mot Software as a Medical Device (SaMD)?', 
        options: [
          { text: 'Obehörig dataåtkomst', isCorrect: true }, 
          { text: 'Manipulation av data', isCorrect: true }, 
          { text: 'Dålig internetuppkoppling', isCorrect: false }, 
          { text: 'Lågt lagringsutrymme', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'Hot inkluderar intrång, datastöld och manipulation av medicinsk information eller enhetens funktion.' 
      },
      { 
        id: 704, 
        questionText: 'Vad är syftet med en sårbarhetsanalys?', 
        options: [
          { text: 'Hitta svaga punkter i systemet', isCorrect: true }, 
          { text: 'Mäta hur snabbt koden körs', isCorrect: false }, 
          { text: 'Räkna antal rader källkod', isCorrect: false }, 
          { text: 'Välja rätt molnleverantör', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Sårbarhetsanalys identifierar tekniska brister som kan utnyttjas av en angripare.' 
      },
      { 
        id: 705, 
        questionText: 'Hur påverkar uppdateringar säkerheten?', 
        options: [
          { text: 'De lagar kända sårbarheter', isCorrect: true }, 
          { text: 'De gör alltid appen segare', isCorrect: false }, 
          { text: 'De är valfria enligt MDR', isCorrect: false }, 
          { text: 'De ändrar bara utseendet', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Regelbundna uppdateringar är nödvändiga för att skydda mot nya hot och sårbarheter.' 
      },
    ],
  },
  // Kapitel 8: Dokumentation
  {
    chapterNumber: 8,
    title: 'Dokumentation & Granskning',
    questions: [
      { 
        id: 801, 
        questionText: 'Vad är en "Teknisk Fil"?', 
        options: [
          { text: 'All dokumentation för produkten', isCorrect: true }, 
          { text: 'En fil med all källkod', isCorrect: false }, 
          { text: 'En manual för reparatörer', isCorrect: false }, 
          { text: 'En lista på alla anställda', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Den tekniska filen innehåller all dokumentation som bevisar att produkten uppfyller MDR-kraven.' 
      },
      { 
        id: 802, 
        questionText: 'Vad är ett "Anmält Organ" (Notified Body, NB)?', 
        options: [
          { text: 'Oberoende granskningsinstans', isCorrect: true }, 
          { text: 'En statlig myndighet i EU', isCorrect: false }, 
          { text: 'En avdelning på sjukhuset', isCorrect: false }, 
          { text: 'Ett organ i människokroppen', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Notified Bodies (NB) är organisationer som granskar och certifierar medicintekniska produkter.' 
      },
      { 
        id: 803, 
        questionText: 'Vad innebär CE-märkning?', 
        options: [
          { text: 'Produkten följer EU-krav', isCorrect: true }, 
          { text: 'Produkten är tillverkad i EU', isCorrect: false }, 
          { text: 'Produkten är bäst i test', isCorrect: false }, 
          { text: 'Produkten är gratis för alla', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'CE-märket visar att tillverkaren intygar att produkten uppfyller alla tillämpliga EU-direktiv eller förordningar.' 
      },
      { 
        id: 804, 
        questionText: 'Vilka delar ingår i UX-filen?', 
        options: [
          { text: 'Användningsspecifikation', isCorrect: true }, 
          { text: 'Utvärderingsrapporter', isCorrect: true }, 
          { text: 'Marknadsföringsplanen', isCorrect: false }, 
          { text: 'Budget för projektet', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'Usability Engineering File (UEF) dokumenterar hela användbarhetsprocessen enligt IEC 62366-1.' 
      },
      { 
        id: 805, 
        questionText: 'Hur länge ska dokument sparas?', 
        options: [
          { text: 'Minst 10 år efter sista enhet', isCorrect: true }, 
          { text: 'Tills produkten slutar säljas', isCorrect: false }, 
          { text: 'I exakt två år efter release', isCorrect: false }, 
          { text: 'Det finns inga krav på tid', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Tillverkaren måste behålla den tekniska dokumentationen i minst 10 år efter att den sista produkten släppts ut på marknaden.' 
      },
    ],
  },
  // Kapitel 9: Standarder
  {
    chapterNumber: 9,
    title: 'Standarder & Harmonisering',
    questions: [
      { 
        id: 901, 
        questionText: 'Vad är en "harmoniserad standard"?', 
        options: [
          { text: 'Standard erkänd av EU', isCorrect: true }, 
          { text: 'En standard för musikterapi', isCorrect: false }, 
          { text: 'En standard som alla gillar', isCorrect: false }, 
          { text: 'En standard för färgval', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Harmoniserade standarder ger en "presumtion om överensstämmelse" med de väsentliga kraven i MDR.' 
      },
      { 
        id: 902, 
        questionText: 'Vad reglerar ISO 13485?', 
        options: [
          { text: 'Kvalitetsledningssystem', isCorrect: true }, 
          { text: 'Programvarans livscykel', isCorrect: false }, 
          { text: 'Riskhanteringens process', isCorrect: false }, 
          { text: 'Användbarhetens metoder', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'ISO 13485 är den internationella standarden för kvalitetsledningssystem specifikt för medicinteknik.' 
      },
      { 
        id: 903, 
        questionText: 'Vad reglerar IEC 62304?', 
        options: [
          { text: 'Mjukvarans livscykel', isCorrect: true }, 
          { text: 'Hårdvarans hållfasthet', isCorrect: false }, 
          { text: 'Sjukhusens elsystem', isCorrect: false }, 
          { text: 'Patienternas integritet', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'IEC 62304 definierar livscykelkrav för utveckling av medicinteknisk mjukvara.' 
      },
      { 
        id: 904, 
        questionText: 'Varför följa standarder?', 
        options: [
          { text: 'Det underlättar godkännande', isCorrect: true }, 
          { text: 'Det garanterar hög vinst', isCorrect: false }, 
          { text: 'Det gör koden snabbare', isCorrect: false }, 
          { text: 'Det är ett lagkrav (indirekt)', isCorrect: true }
        ], 
        type: QuestionType.Multiple, 
        recap: 'Att följa standarder är det enklaste sättet att visa att man uppfyller de juridiska kraven i MDR.' 
      },
      { 
        id: 905, 
        questionText: 'Vad är General Safety and Performance Requirements (GSPR) i Medical Device Regulation (MDR)?', 
        options: [
          { text: 'Väsentliga krav på säkerhet', isCorrect: true }, 
          { text: 'En guide för bra design', isCorrect: false }, 
          { text: 'Ett nytt filformat för bilder', isCorrect: false }, 
          { text: 'En förkortning för GPS-data', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'General Safety and Performance Requirements (GSPR) är de grundläggande kraven som alla produkter måste uppfylla.' 
      },
    ],
  },
  // Kapitel 10: Framtiden
  {
    chapterNumber: 10,
    title: 'Framtiden & AI i MDR',
    questions: [
      { 
        id: 1001, 
        questionText: 'Hur påverkar AI medicintekniska produkter?', 
        options: [
          { text: 'Ger nya utmaningar i validering', isCorrect: true }, 
          { text: 'Gör all dokumentation onödig', isCorrect: false }, 
          { text: 'Ersätter alla läkare direkt', isCorrect: false }, 
          { text: 'Kräver ingen riskhantering', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'AI och maskininlärning skapar nya utmaningar kring hur man validerar algoritmer som förändras över tid.' 
      },
      { 
        id: 1002, 
        questionText: 'Vad är "svart låda"-problemet?', 
        options: [
          { text: 'Svårt att förstå AI-beslut', isCorrect: true }, 
          { text: 'Att servern står i ett mörkt rum', isCorrect: false }, 
          { text: 'Att koden är skriven i Python', isCorrect: false }, 
          { text: 'Ett fel i flygplanets logg', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Det handlar om bristen på transparens i hur vissa AI-modeller kommer fram till sina resultat.' 
      },
      { 
        id: 1003, 
        questionText: 'Vad krävs för AI-baserad Software as a Medical Device (SaMD)?', 
        options: [
          { text: 'Högkvalitativ träningsdata', isCorrect: true }, 
          { text: 'Kontinuerlig övervakning', isCorrect: true }, 
          { text: 'Att AI:n har ett eget namn', isCorrect: false }, 
          { text: 'Att den körs på en superdator', isCorrect: false }
        ], 
        type: QuestionType.Multiple, 
        recap: 'AI-produkter kräver strikt kontroll över träningsdata och hur modellen presterar i verklig miljö.' 
      },
      { 
        id: 1004, 
        questionText: 'Vad innebär "Human-in-the-loop"?', 
        options: [
          { text: 'Människa granskar AI-beslut', isCorrect: true }, 
          { text: 'Att användaren är fast i en loop', isCorrect: false }, 
          { text: 'Ett träningspass för personal', isCorrect: false }, 
          { text: 'Att koden körs av en människa', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'Det innebär att en människa har sista ordet eller övervakar de beslut som AI-systemet föreslår.' 
      },
      { 
        id: 1005, 
        questionText: 'Vilken ny förordning kompletterar?', 
        options: [
          { text: 'AI Act (EU:s AI-förordning)', isCorrect: true }, 
          { text: 'GDPR (Dataskyddsförordning)', isCorrect: false }, 
          { text: 'MDR 2.0 (Uppdaterad version)', isCorrect: false }, 
          { text: 'ISO 9002 (Ny kvalitetsstandard)', isCorrect: false }
        ], 
        type: QuestionType.Single, 
        recap: 'EU:s AI Act kommer att ställa ytterligare krav på AI-system, särskilt de som klassas som högriskprodukter.' 
      },
    ],
  },
];
