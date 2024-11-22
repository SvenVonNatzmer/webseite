

// API in dein Nuxt-Projekt integrieren, erstelle  Datei im Verzeichnis server: products.js:
// API ist dann unter http://localhost:3000/api/products verfügbar


/* Ersre einfache API für den Test
export default defineEventHandler(() => {
    return [
      { id: 1, title: "Produkt 1", description: "Beschreibung von Produkt 1", price: 10 },
      { id: 2, title: "Produkt 2", description: "Beschreibung von Produkt 2", price: 20 },
      { id: 3, title: "Produkt 3", description: "Beschreibung von Produkt 3", price: 30 },
    ];
  });

  <!--
  
  Quellenangabe:
  - Das Skript basiert auf den Vorgaben und der Grundlage von Prof. Dr. Christian Krauss, Professor für Wirtschaftsinformatik – insbesondere Web Engineering und Programmierung.
  - Das Grundgerüst wurde von www.w3schools.com bereitgestellt.
  - Anpassungen und Ergänzungen wurden durch chatgpt.com vorgenommen.
  - Weitere Anpassungen und Tests wurden vom Autor Sven von Natzmer durchgeführt.
-->

*/

// Angepasste API mit etwas Text von Chatgtp:

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Beratung zu Textgenerierung & Sprachverarbeitung',
      image: 'static/images/Textgenerierung.jpg',
      description: 'Wir bieten maßgeschneiderte Lösungen zur Integration von KI-basierten Textverarbeitungsmodellen in Ihre Systeme. Optimieren Sie Ihre Kommunikation mit Chatbots und virtuellen Assistenten für automatisierte Interaktionen und verbessern Sie die Kundenbindung durch personalisierte Sprachlösungen.',
      services: [
        'Integration von KI-basierten Textverarbeitungsmodellen in Ihre Systeme.',
        'Entwicklung von Chatbots und virtuellen Assistenten für automatisierte Kommunikation.',
        'Optimierung von Kundeninteraktionen durch personalisierte Sprachlösungen.'
      ],
      price: 'ab 1500 €',
      detailedDescription: 'Unsere Beratung und Entwicklung von maßgeschneiderten Textverarbeitungsmodellen bietet Ihnen die Möglichkeit, Ihre Kundeninteraktionen zu automatisieren und Ihre Effizienz zu steigern. Wir helfen Ihnen, spezifische Anforderungen zu definieren und setzen Lösungen basierend auf modernster KI-Technologie um.'
    },
    {
      id: 2,
      title: 'Bildgenerierung & Designautomatisierung',
      image: 'static/images/Bildgenerierung.jpg',
      description: 'Nutzen Sie KI-Werkzeuge zur automatisierten Bildbearbeitung und -erstellung. Wir unterstützen Sie bei der Erstellung von Marketingmaterialien und visuellen Designs und bieten Schulungen zur Nutzung von KI-Design-Tools in Ihrem Team.',
      services: [
        'Implementierung von KI-Werkzeugen für automatisierte Bildbearbeitung und -erstellung.',
        'Unterstützung bei der Erstellung von Marketingmaterialien und visuellen Designs.',
        'Schulungen zur Nutzung von KI-Design-Tools in Ihrem Team.'
      ],
      price: 'ab 2000 €',
      detailedDescription: 'Mit unserer Unterstützung bei der Bildgenerierung und Designautomatisierung können Sie Ihre Marketingkampagnen effizienter gestalten und schnell ansprechendes visuelles Material produzieren. Wir helfen Ihnen, KI-Design-Tools zu implementieren, die Ihre kreativen Prozesse optimieren.'
    },
    {
      id: 3,
      title: 'Datenanalyse & KI-gestützte Entscheidungsfindung',
      image: 'static/images/Analyse.jpg',
      description: 'Wir helfen Ihnen bei der Analyse und Visualisierung komplexer Datensätze mit modernsten Tools. Wir erstellen Prognosemodelle und unterstützen strategische Entscheidungen, indem wir Workflows durch automatisierte Datenverarbeitung optimieren.',
      services: [
        'Analyse und Visualisierung komplexer Datensätze mit modernsten Tools.',
        'Erstellung von Prognosemodellen zur Unterstützung strategischer Entscheidungen.',
        'Optimierung von Workflows durch automatisierte Datenverarbeitung.'
      ],
      price: 'ab 3000 €',
      detailedDescription: 'Unsere Expertise in der Datenanalyse ermöglicht es Ihnen, präzise Prognosemodelle zu entwickeln und fundierte Entscheidungen auf der Grundlage von komplexen Datenmengen zu treffen. Wir optimieren Ihre internen Prozesse durch Automatisierung und Visualisierung.'
    },
    {
      id: 4,
      title: 'Sprach- und Audioverarbeitung',
      image: 'static/images/Audio.jpg',
      description: 'Wir integrieren fortschrittliche Spracherkennung und -transkription für Ihre Dokumentationsprozesse und entwickeln maßgeschneiderte Lösungen für Audioanalyse und -bearbeitung. Unsere Tools ermöglichen die nahtlose Integration in Ihre Kommunikationsplattformen.',
      services: [
        'Implementierung von Spracherkennung und -transkription für Dokumentationsprozesse.',
        'Entwicklung maßgeschneiderter Lösungen für Audioanalyse und -bearbeitung.',
        'Integration von KI-gestützten Tools in Ihre Kommunikationsplattformen.'
      ],
      price: 'ab 2500 €',
      detailedDescription: 'Unsere Lösungen im Bereich Sprach- und Audioverarbeitung bieten eine präzise Transkription von Audioinhalten und helfen Ihnen, die Effizienz Ihrer Dokumentationsprozesse zu steigern. Wir integrieren fortschrittliche Technologien in Ihre bestehenden Kommunikationslösungen.'
    },
    {
      id: 5,
      title: 'Softwareentwicklung & Codeoptimierung',
      image: 'static/images/code.jpg',
      description: 'Automatisieren Sie Ihre Entwicklungsprozesse mit KI-gestützten Tools. Wir helfen Ihnen bei der Erstellung von Prototypen und spezifischen Softwarelösungen sowie der Optimierung bestehender Software durch KI-basierte Analysen.',
      services: [
        'Automatisierung von Entwicklungsprozessen durch KI-gestützte Tools.',
        'Erstellung von Prototypen und Lösungen für spezifische Softwareanforderungen.',
        'Optimierung bestehender Software durch KI-basierte Analysen.'
      ],
      price: 'ab 4000 €',
      detailedDescription: 'Unsere maßgeschneiderten Softwarelösungen unterstützen Sie bei der Optimierung und Automatisierung Ihrer Entwicklungsprozesse. Durch den Einsatz von KI-Technologien steigern wir die Effizienz Ihrer bestehenden Software und entwickeln innovative Lösungen für Ihre speziellen Anforderungen.'
    },
    {
      id: 6,
      title: 'Schulungen & Weiterbildungen',
      image: 'static/images/schule.jpg',
      description: 'Wir bieten Workshops zur Einführung in KI-Frameworks wie TensorFlow und PyTorch sowie Trainings zur Anwendung moderner KI-Tools im Arbeitsalltag. Unsere Beratung hilft Ihnen bei der effizienten Nutzung von Cloud- und Entwicklungsplattformen.',
      services: [
        'Workshops zur Einführung in KI-Frameworks wie TensorFlow und PyTorch.',
        'Trainings zur Anwendung moderner KI-Tools im Arbeitsalltag.',
        'Beratung zur effizienten Nutzung von Cloud- und Entwicklungsplattformen.'
      ],
      price: 'ab 1000 €',
      detailedDescription: 'Unsere praxisorientierten Schulungen bieten Ihnen die Möglichkeit, Ihre Mitarbeiter in die Anwendung moderner KI-Technologien einzuführen. Wir fokussieren uns auf die Nutzung von Frameworks wie TensorFlow und PyTorch sowie auf die Integration dieser Tools in Ihren Arbeitsalltag.'
    }
  ]
})
