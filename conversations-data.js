// Real-Life Restaurant Conversations Data

const conversationsData = [
    {
        id: "reservation",
        title: "Making a Reservation",
        description: "Learn how to book a table at a restaurant",
        difficulty: "Beginner",
        duration: "2 minutes",
        characters: ["Sarah (Customer)", "Host (Restaurant)"],
        dialogue: [
            {
                speaker: "Host",
                text: "Good afternoon, Mario's Italian Restaurant. How can I help you?",
                timestamp: 0
            },
            {
                speaker: "Sarah",
                text: "Hi, I'd like to make a reservation for tonight, please.",
                timestamp: 3
            },
            {
                speaker: "Host",
                text: "Certainly! What time would you prefer?",
                timestamp: 6
            },
            {
                speaker: "Sarah",
                text: "Around 7:30 PM, if possible.",
                timestamp: 8
            },
            {
                speaker: "Host",
                text: "Let me check... Yes, we have availability at 7:30. How many people will be in your party?",
                timestamp: 10
            },
            {
                speaker: "Sarah",
                text: "Four people, please.",
                timestamp: 15
            },
            {
                speaker: "Host",
                text: "Perfect. Do you have any special requests? Perhaps a table by the window or any dietary restrictions I should note?",
                timestamp: 17
            },
            {
                speaker: "Sarah",
                text: "Actually, yes. One person in our group is vegetarian, and another has a gluten allergy. Do you have gluten-free options?",
                timestamp: 23
            },
            {
                speaker: "Host",
                text: "Absolutely! We have several vegetarian dishes and a separate gluten-free menu. I'll make a note of that. May I have your name and phone number?",
                timestamp: 30
            },
            {
                speaker: "Sarah",
                text: "Sarah Johnson, and my number is 555-0123.",
                timestamp: 37
            },
            {
                speaker: "Host",
                text: "Excellent, Ms. Johnson. So that's a table for four at 7:30 PM tonight, with vegetarian and gluten-free options noted. We'll see you then!",
                timestamp: 40
            },
            {
                speaker: "Sarah",
                text: "Thank you so much!",
                timestamp: 47
            }
        ],
        questions: [
            {
                question: "What time did Sarah request for her reservation?",
                options: ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"],
                correct: 1,
                explanation: "Sarah asked for 'around 7:30 PM, if possible.'"
            },
            {
                question: "How many people are in Sarah's party?",
                options: ["Two", "Three", "Four", "Five"],
                correct: 2,
                explanation: "Sarah said 'Four people, please.'"
            },
            {
                question: "What dietary restrictions did she mention?",
                options: ["Vegetarian only", "Gluten allergy only", "Vegetarian and gluten allergy", "No restrictions"],
                correct: 2,
                explanation: "She mentioned one vegetarian person and another with a gluten allergy."
            },
            {
                question: "What special menus does the restaurant offer?",
                options: ["Only vegetarian", "Only gluten-free", "Both vegetarian and gluten-free", "No special menus"],
                correct: 2,
                explanation: "The host mentioned 'several vegetarian dishes and a separate gluten-free menu.'"
            }
        ],
        vocabulary: ["reservation", "vegetarian", "gluten-free", "dietary restrictions", "availability"]
    },
    
    {
        id: "ordering",
        title: "Ordering Food",
        description: "Practice ordering food and asking about menu items",
        difficulty: "Intermediate",
        duration: "3 minutes",
        characters: ["Jennifer (Server)", "Mike", "Sarah", "Lisa", "Tom"],
        dialogue: [
            {
                speaker: "Jennifer",
                text: "Are you ready to order, or do you need a few more minutes?",
                timestamp: 0
            },
            {
                speaker: "Mike",
                text: "I think we're ready. Could you tell us about tonight's chef's special?",
                timestamp: 3
            },
            {
                speaker: "Jennifer",
                text: "Certainly! Tonight we have pan-seared salmon with lemon herb butter, served with roasted vegetables and wild rice. It's one of our most popular dishes.",
                timestamp: 6
            },
            {
                speaker: "Lisa",
                text: "That sounds delicious! Is the salmon grilled or pan-seared?",
                timestamp: 14
            },
            {
                speaker: "Jennifer",
                text: "It's pan-seared, which gives it a nice crispy skin while keeping the inside tender and flaky.",
                timestamp: 17
            },
            {
                speaker: "Tom",
                text: "I'm looking at the pasta section. Is the carbonara made with real cream?",
                timestamp: 22
            },
            {
                speaker: "Jennifer",
                text: "Actually, traditional carbonara doesn't use cream - it's made with eggs, cheese, and pancetta. But if you prefer a cream-based pasta, I'd recommend our fettuccine alfredo.",
                timestamp: 26
            },
            {
                speaker: "Sarah",
                text: "I'm looking at the gluten-free menu. Can the chicken parmesan be made gluten-free?",
                timestamp: 35
            },
            {
                speaker: "Jennifer",
                text: "Yes! We use gluten-free breadcrumbs and serve it over gluten-free pasta. It's very popular.",
                timestamp: 39
            },
            {
                speaker: "Mike",
                text: "Great! I'll have the chef's special salmon.",
                timestamp: 44
            },
            {
                speaker: "Lisa",
                text: "I'll try the carbonara, please.",
                timestamp: 46
            },
            {
                speaker: "Tom",
                text: "Make that two carbonaras.",
                timestamp: 48
            },
            {
                speaker: "Sarah",
                text: "And I'll have the gluten-free chicken parmesan.",
                timestamp: 50
            },
            {
                speaker: "Jennifer",
                text: "Excellent choices! How would you like the salmon cooked?",
                timestamp: 53
            },
            {
                speaker: "Mike",
                text: "Medium, please.",
                timestamp: 56
            }
        ],
        questions: [
            {
                question: "What is tonight's chef's special?",
                options: ["Grilled chicken", "Pan-seared salmon", "Beef steak", "Pasta carbonara"],
                correct: 1,
                explanation: "The chef's special is 'pan-seared salmon with lemon herb butter.'"
            },
            {
                question: "How is the salmon prepared?",
                options: ["Grilled", "Pan-seared", "Baked", "Fried"],
                correct: 1,
                explanation: "The server specifically mentioned it's 'pan-seared.'"
            },
            {
                question: "What makes traditional carbonara different from cream-based pasta?",
                options: ["It uses cream", "It uses eggs and cheese", "It has no sauce", "It's vegetarian"],
                correct: 1,
                explanation: "Traditional carbonara is 'made with eggs, cheese, and pancetta' not cream."
            },
            {
                question: "How many people ordered carbonara?",
                options: ["One", "Two", "Three", "Four"],
                correct: 1,
                explanation: "Lisa ordered carbonara, then Tom said 'Make that two carbonaras.'"
            }
        ],
        vocabulary: ["chef's special", "pan-seared", "carbonara", "gluten-free", "medium"]
    },

    {
        id: "fastfood",
        title: "Fast Food Drive-Through",
        description: "Learn how to order at a fast food drive-through",
        difficulty: "Beginner",
        duration: "1.5 minutes",
        characters: ["Employee", "Customer"],
        dialogue: [
            {
                speaker: "Employee",
                text: "Welcome to Burger Palace! May I take your order?",
                timestamp: 0
            },
            {
                speaker: "Customer",
                text: "Hi! Could I get a number 2 combo meal, please?",
                timestamp: 3
            },
            {
                speaker: "Employee",
                text: "That's our cheeseburger combo. What size would you like - small, medium, or large?",
                timestamp: 6
            },
            {
                speaker: "Customer",
                text: "Medium, please.",
                timestamp: 10
            },
            {
                speaker: "Employee",
                text: "And what would you like to drink with that?",
                timestamp: 12
            },
            {
                speaker: "Customer",
                text: "A Coke, please.",
                timestamp: 14
            },
            {
                speaker: "Employee",
                text: "Would you like to make that a diet Coke?",
                timestamp: 16
            },
            {
                speaker: "Customer",
                text: "No, regular is fine.",
                timestamp: 18
            },
            {
                speaker: "Employee",
                text: "Great! Would you like to add any extras today? Maybe some apple pies or cookies?",
                timestamp: 20
            },
            {
                speaker: "Customer",
                text: "Actually, could I substitute the fries for onion rings?",
                timestamp: 24
            },
            {
                speaker: "Employee",
                text: "Absolutely! There's a small upcharge of 50 cents for that substitution. Is that okay?",
                timestamp: 27
            },
            {
                speaker: "Customer",
                text: "That's fine.",
                timestamp: 32
            },
            {
                speaker: "Employee",
                text: "Perfect! So that's one medium cheeseburger combo with onion rings and a regular Coke. Your total is $8.47. Please drive to the first window.",
                timestamp: 34
            }
        ],
        questions: [
            {
                question: "What combo meal did the customer order?",
                options: ["Number 1", "Number 2", "Number 3", "Number 4"],
                correct: 1,
                explanation: "The customer asked for 'a number 2 combo meal.'"
            },
            {
                question: "What size did they choose?",
                options: ["Small", "Medium", "Large", "Extra Large"],
                correct: 1,
                explanation: "The customer said 'Medium, please.'"
            },
            {
                question: "What substitution did they request?",
                options: ["Fries for salad", "Fries for onion rings", "Coke for water", "No substitution"],
                correct: 1,
                explanation: "They asked to 'substitute the fries for onion rings.'"
            },
            {
                question: "What was the total price?",
                options: ["$7.97", "$8.47", "$8.97", "$9.47"],
                correct: 1,
                explanation: "The employee said 'Your total is $8.47.'"
            }
        ],
        vocabulary: ["combo meal", "substitute", "upcharge", "drive-through", "total"]
    },

    {
        id: "buffet",
        title: "Buffet Restaurant",
        description: "Experience dining at a buffet restaurant",
        difficulty: "Intermediate",
        duration: "2.5 minutes",
        characters: ["Host", "Mom", "Dad", "Kids"],
        dialogue: [
            {
                speaker: "Host",
                text: "Welcome to Golden Corral! How many in your party today?",
                timestamp: 0
            },
            {
                speaker: "Dad",
                text: "Four - two adults and two children.",
                timestamp: 3
            },
            {
                speaker: "Host",
                text: "Perfect! Our buffet price for adults is $12.99, and children under 12 eat for $6.99. Drinks are included. Right this way!",
                timestamp: 5
            },
            {
                speaker: "Mom",
                text: "Remember, only take what you can eat. You can always come back for more.",
                timestamp: 12
            },
            {
                speaker: "Kid 1",
                text: "Mom, what's that?",
                timestamp: 16
            },
            {
                speaker: "Mom",
                text: "That's the salad bar. You can make your own salad with all these fresh vegetables.",
                timestamp: 18
            },
            {
                speaker: "Kid 2",
                text: "Where are the chicken nuggets?",
                timestamp: 22
            },
            {
                speaker: "Dad",
                text: "They're over at the hot food section. Let's walk around and see everything first.",
                timestamp: 24
            },
            {
                speaker: "Mom",
                text: "Look, they have a whole section for desserts! Ice cream, cakes, and cookies.",
                timestamp: 28
            },
            {
                speaker: "Dad",
                text: "And there's a grill where they cook fresh steaks and burgers to order.",
                timestamp: 32
            },
            {
                speaker: "Host",
                text: "How is everything? Can I get you anything?",
                timestamp: 36
            },
            {
                speaker: "Mom",
                text: "This is our first time here. How does the grill section work?",
                timestamp: 38
            },
            {
                speaker: "Host",
                text: "Just tell the cook how you'd like your meat prepared - rare, medium, or well-done. It takes about 5-10 minutes.",
                timestamp: 42
            }
        ],
        questions: [
            {
                question: "How much does the buffet cost for adults?",
                options: ["$11.99", "$12.99", "$13.99", "$14.99"],
                correct: 1,
                explanation: "The host said 'Our buffet price for adults is $12.99.'"
            },
            {
                question: "What's included with the buffet price?",
                options: ["Food only", "Food and drinks", "Drinks only", "Nothing extra"],
                correct: 1,
                explanation: "The host mentioned 'Drinks are included.'"
            },
            {
                question: "What advice did Mom give the kids?",
                options: ["Eat everything", "Only take what you can eat", "Try everything once", "Don't eat too much"],
                correct: 1,
                explanation: "Mom said 'only take what you can eat. You can always come back for more.'"
            },
            {
                question: "How long does it take to cook food at the grill?",
                options: ["3-5 minutes", "5-10 minutes", "10-15 minutes", "15-20 minutes"],
                correct: 1,
                explanation: "The host said 'It takes about 5-10 minutes.'"
            }
        ],
        vocabulary: ["buffet", "salad bar", "hot food section", "grill", "well-done"]
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { conversationsData };
}

