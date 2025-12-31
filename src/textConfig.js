const textConfig = {
  landing: {
    title: "Hey Jigglypuff! 💕",
    subtitle: "I Wanted to do something special for you, so I made something special just for you...",
    lastLine: "Click below to see what it is! ✨",
    button: "Open My Heart 💖",
    footer: "Made with love, only for you 💕",
    },
    landing: {
      title: "Happy New Year 2026! 🎉",
      subtitle: "Wishing you joy, success, and endless happiness in the coming year!",
      lastLine: "Click below to start your New Year journey! ✨",
      button: "Begin Celebration 🎊",
      footer: "Cheers to a wonderful 2026! 🎉",
    },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Love Letter 💌",
    headerSubtitle: "From my heart to yours",
    letterHeaderTitle: "My pehla pyaar",
    letterMessage: `My dearest love,

Every moment with you feels like a beautiful dream that I never want to wake up from.

I want you to know that you are the most precious person in my life. Every day with you is a gift, and I'm grateful for every second we share together. You make me want to be the best version of myself.
`,
    letterSignature: "💕`",
    envelopeClickHint: "Click to open the envelope",
    specialDeliveryText: "Special Delivery 💌",
    continueButton: "Continue To See More ✨"
    },
    letter: {
      headerTitle: "A New Year Letter 💌",
      headerSubtitle: "Warm wishes for 2026",
      letterHeaderTitle: "Dear Friend",
      letterMessage: `Dear Friend,

  As the year turns, may your days be filled with laughter, love, and new adventures. May every dream you chase bring you closer to happiness and every moment be a memory worth cherishing.

  Wishing you a fantastic 2026 ahead!\n\nHappy New Year! 🎉\n`,
      letterSignature: "Cheers! 🎉",
      envelopeClickHint: "Click to open your New Year wish",
      specialDeliveryText: "Special Delivery 🎉",
      continueButton: "Continue To Celebrate ✨"
    },

  chillZone: {
    heading: "A Dedicated Playlist For You",
    subheading: "I Hope You'll Like It",
    chooseTrackHint: "Choose a track to start vibing ✨",
    continueButton: "Continue to Next ✨",
    tracks: [
      { id: 1, title: "Dil Cheeze Tujhe Dedi", caption: "You own this heart — dedicated to you 💞" },
      { id: 2, title: "If the world was ending", caption: "Even if the world ends, I'd still find you 🤍" },
      { id: 3, title: "Dil ka Jo Haal hai", caption: "Tu Kaare Dil Bekarar 💞" }
    ]
    },
    chillZone: {
      heading: "New Year Playlist",
      subheading: "Celebrate with these festive tracks!",
      chooseTrackHint: "Choose a song to start the party ✨",
      continueButton: "Continue to Next ✨",
      tracks: [
        { id: 1, title: "Happy New Year - ABBA", caption: "Classic vibes for a fresh start! 🎊" },
        { id: 2, title: "Auld Lang Syne", caption: "Remember the good times and friends! 🎉" },
        { id: 3, title: "Firework - Katy Perry", caption: "Shine bright in 2026! 🎉" }
      ]
    },

  cards: {
    heading: "Some Special Cards For You",
    subheading: "Click each card to reveal a special message!",
    tapLabel: "✨ Tap!",
    progress: {
      start: "Start by tapping any card above ✨",
      discovered: (n, total) => `${n} of ${total} messages discovered! Keep exploring 💕`,
      complete: "Amazing! You've discovered all the messages! 🎉"
    },
    popup: {
      title: "All Messages Unlocked!",
      message: "Each message is a piece of my heart that belongs to you forever. ✨",
      openFinal: "Open the Final Letter 💌",
      stay: "Stay here a bit longer"
    },
    cardMessages: [
      "You're my favorite kind of memory — the one that makes me smile without even realizing it. 💖",
      "I did like you and i still respect what you said about being good friends. ✨",
      "The little things you do — your expressions, your laughter, the way you talk — they've all become my favorite details. 🌸"
    ]
    },
    cards: {
      heading: "New Year Wishes",
      subheading: "Tap each card for a special New Year message!",
      tapLabel: "✨ Tap!",
      progress: {
        start: "Start by tapping any card above ✨",
        discovered: (n, total) => `${n} of ${total} wishes discovered! Keep celebrating! 🎉`,
        complete: "Awesome! You've revealed all the wishes! 🎊"
      },
      popup: {
        title: "All Wishes Unlocked!",
        message: "May every wish come true for you in 2026! ✨",
        openFinal: "Open the Final Letter 💌",
        stay: "Stay and celebrate more!"
      },
      cardMessages: [
        "May your year be filled with new hopes, new joy, and new beginnings! 🎉",
        "Wishing you health, wealth, and happiness in 2026! 🎊",
        "May every day sparkle with positivity and love! 🎉"
      ]
    },

  finalLetter: {
    title: "Final Love Letter",
    sealingText: "Sealing your letter...",
    sealButton: "Seal this Letter 💌",
    restartButton: "Restart",
    sealedTitle: "Letter Sealed with Love",
    sealedSubtitle: "I Love You Always",
    typedDefault: "Always Yours 💕",
    experienceAgain: "Experience Again ✨",
    sendKissButton: "Send a Virtual Kiss 💋",
    dateLocale: "en-US",
    // Letter content
    letterGreeting: "My sweetest darling,",
    letterParagraphs: [
      "You're the calm I reach for and the laugh that brightens my day.",
      "I hope this tiny world made you smile — and whispered how much you mean to me.",
      "Only 2.5 months left... and I can't imagine these days without you. I love you so much and every moment with you is priceless.",
      "You are amazing in every way... and honestly, I feel like I haven't good enough for you."
    ],
    sealingNote: "Sealing will finish the experience."
    },
    finalLetter: {
      title: "Final New Year Wish",
      sealingText: "Sealing your wish...",
      sealButton: "Seal this Wish 🎉",
      restartButton: "Restart",
      sealedTitle: "Wish Sealed for 2026",
      sealedSubtitle: "Wishing You a Wonderful Year!",
      typedDefault: "Happy New Year! 🎊",
      experienceAgain: "Experience Again ✨",
      sendKissButton: "Send a Virtual Hug 🤗",
      dateLocale: "en-US",
      // Letter content
      letterGreeting: "Dear Patidev ji,",
      letterParagraphs: [
        "May 2026 bring you endless opportunities and beautiful moments.",
        "Celebrate every day, cherish every memory, and keep moving forward with hope.",
        "Thank you for being part of my journey. Here's to new adventures together!",
        "Wishing you a year as bright and wonderful as you are."
      ],
      sealingNote: "Sealing will finish the celebration."
    },

  common: {
    continue: "Continue to Next ✨",
    close: "Close",
    ok: "OK"
    }
};

export default textConfig;
