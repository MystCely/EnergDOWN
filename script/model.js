const model = {
    app: {
        currentPage: "welcomePage",
    },
    viewState: {
        homePage: {
            post: "",
            profilePic: "",
            likeCount: 0,
            dislikeCount: 0,
            comments: "",
            commentsCount: 0,
            search: "",
        },

        logPage: {
            title: "Log",
            customDrink: "",
            journal: [],
            reflections: [],
            timeAsleep: {
                currentDay: "",
                totalHours: "",
                totalMinutes: "",
            },
        },

        profilePage: {
            barChart: {
                quantity: 0,
                days: 0,
            },

            progress: {
                todaysCaffeine: 0,
                totalCaffeine: 0,
            },

            personalGoal: { // do we need this ?
                goalList: [],
                daily: [""],
                weekly: [""],
                monthly: [""],
            },
        },

        signUpPage: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            birthday: "",
            password: "",
            confirmPassword: "",
        },

        logInPage: {
            username: "",
            password: "",
        },

    },

    data: {
        drinkList: [
            {name: "Normal cup of coffee", size: "240ml", caffein: "95mg"},
            {name: "Normal cup of tea", size: "180ml", caffein: "40mg"},
            {name: "Starbucks Cappuccino", size: "220ml", caffein: "90mg"},
            {name: "Espresso Shot", size: "30ml", caffein: "63mg"},
            {name: "Standard Redbull", size: "250ml", caffein: "80mg"},
            {name: "Monster", size: "500ml", caffein: "160mg"},
            {name: "Monster Ultra", size: "500ml", caffein: "150mg"},
        ],

        pepTalks: [
            "I believe in you.",
            "The past has no power over you anymore.",
            "You are in charge of your life story.",
            "You are stronger than your temptation.",
            "You have the courage to move forward.",
            "I know you can overcome this.",
            "No challenge is too great for you to handle.",
            "It's so impressive how far you've come already.",
            "I can see the progress you're making.",
            "You are in charge of what happens next.",
            "If I set my mind to it, I can do it.",
            "Every day, in every way, you are getting better.",
            "You are strong enough to get through this.",
            "I am by your side every step of the way.",
            "I am cheering for you.",
        ],

        users: [
            {admin: true, username: "Linn", password: "jegElskerFugler321"},
        ],
    },

    settings: {
        userSettings: {
            changePassword: "",
            changeUsername: "",
            changeEmail: "",
        },
        notification: false,
    },
}