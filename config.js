// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Layla",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "🤫🤫🤫",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💜', '💖', '💜', '💗', '💜'],  // Heart emojis
        bears: ['🧸', '💜']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" 
            secretAnswer: "Very much"           // Secret hover message
        },
        second: {
            text: "How much do you like me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next 💜"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You like me that much?? 💜💜💜",  // Shows when they go past 5000%
        high: "To infinity and beyond! 💜💜",              // Shows when they go past 1000%
        normal: "And beyond! 💜"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest guy in the world!",
        message: "still gotta wait a freaking month cuz ur grounded but whatever.",
        emojis: "💜💜💝💜❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#B39EB5",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#8F7D91",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dbmomn8dk/video/upload/v1769050355/SpotiDownloader.com_-_Somethin_Stupid_-_Frank_Sinatra_xe7thd.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
