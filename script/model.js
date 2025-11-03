const model = {
    app: {
        currentPage: "welcomeView",
    },
    viewState: {
      homeView: {
            post: "",
            profilePic: "",
            likeCount: 0,
            dislikeCount: 0,
            comments: "",
            commentsCount: 0,
            search: "",
        },

      logView: {
            title: "Log",
            customDrink: {},
            customSleep: {},
            journal: [],
            reflections: [],
        },

      profileView: {
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
                daily: {
                    Monday: [],
                    Tuesday: [],
                    Wednesday: [],
                    Thursday: [],
                    Friday: [],
                    Saturday: [],
                    Sunday: []
                },
                weekly: [""],
                monthly: [""],
                archivedGoals: [""],
                
            },

            weekLog: {
                Monday: 0,
                Tuesday: 0,
                Wednesday: 0,
                Thursday: 0,
                Friday: 0,
                Saturday: 0,
                Sunday: 0

            },

            selectedDay: "Monday",
        },

      signUpView: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            birthday: "",
            password: "",
            confirmPassword: "",
        },

      logInView: {
            username: "",
            password: "",
        },

    },

    data: {
        drinkList: [
            {name: "Normal cup of coffee", size: "240ml", caffeine: "95mg"},
            {name: "Normal cup of tea", size: "180ml", caffeine: "40mg"},
            {name: "Starbucks Cappuccino", size: "220ml", caffeine: "90mg"},
            {name: "Espresso Shot", size: "30ml", caffeine: "63mg"},
            {name: "Standard Redbull", size: "250ml", caffeine: "80mg"},
            {name: "Monster", size: "500ml", caffeine: "160mg"},
            {name: "Monster Ultra", size: "500ml", caffeine: "150mg"},
        ],

        sleepList: [],
        logList: [],

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