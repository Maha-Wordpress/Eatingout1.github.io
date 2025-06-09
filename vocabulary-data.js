// Enhanced Vocabulary Data with Reorganized Structure

const vocabularyData = {
    restaurantTypes: {
        title: "Restaurant Types",
        icon: "fas fa-store",
        categories: {
            fastFood: {
                title: "Fast Food & Quick Service",
                words: [
                    {
                        word: "Fast Food Restaurant",
                        definition: "A restaurant that serves quickly prepared food at low prices",
                        example: "McDonald's and Burger King are popular fast food restaurants.",
                        image: "assets/images/fast_food_restaurant.jpg",
                        audioFile: "fast_food_restaurant.mp3"
                    },
                    {
                        word: "Food Truck",
                        definition: "A mobile restaurant that serves food from a truck or van",
                        example: "The food truck serves delicious tacos on the street corner.",
                        image: "assets/images/food_truck.jpg",
                        audioFile: "food_truck.mp3"
                    },
                    {
                        word: "Drive-Through",
                        definition: "A service where customers order and receive food without leaving their car",
                        example: "I'll get coffee from the drive-through on my way to work.",
                        audioFile: "drive_through.mp3"
                    },
                    {
                        word: "Food Court",
                        definition: "An area with multiple fast food vendors, usually in a mall",
                        example: "The shopping mall has a large food court with many options.",
                        audioFile: "food_court.mp3"
                    },
                    {
                        word: "Coffee Shop",
                        definition: "A small restaurant that primarily serves coffee and light meals",
                        example: "Let's meet at the coffee shop for a quick breakfast.",
                        audioFile: "coffee_shop.mp3"
                    },
                    {
                        word: "Bakery",
                        definition: "A shop that makes and sells bread, cakes, and pastries",
                        example: "The bakery has fresh croissants every morning.",
                        audioFile: "bakery.mp3"
                    }
                ]
            },
            casualDining: {
                title: "Casual & Family Dining",
                words: [
                    {
                        word: "Casual Dining Restaurant",
                        definition: "A restaurant with table service and moderate prices",
                        example: "Applebee's is a casual dining restaurant popular with families.",
                        image: "assets/images/casual_dining_restaurant.jpg",
                        audioFile: "casual_dining_restaurant.mp3"
                    },
                    {
                        word: "Family Restaurant",
                        definition: "A restaurant designed to accommodate families with children",
                        example: "This family restaurant has a kids' menu and high chairs.",
                        audioFile: "family_restaurant.mp3"
                    },
                    {
                        word: "Diner",
                        definition: "A casual restaurant serving simple, hearty American food",
                        example: "The diner is famous for its all-day breakfast menu.",
                        audioFile: "diner.mp3"
                    },
                    {
                        word: "Pizzeria",
                        definition: "A restaurant that specializes in pizza",
                        example: "The local pizzeria makes the best thin-crust pizza in town.",
                        audioFile: "pizzeria.mp3"
                    },
                    {
                        word: "Buffet Restaurant",
                        definition: "A restaurant where customers serve themselves from a variety of dishes",
                        example: "The buffet restaurant has over 50 different dishes to choose from.",
                        audioFile: "buffet_restaurant.mp3"
                    }
                ]
            },
            upscale: {
                title: "Upscale & Specialty",
                words: [
                    {
                        word: "Fine Dining Restaurant",
                        definition: "An upscale restaurant with high-quality food and formal service",
                        example: "We made reservations at a fine dining restaurant for our anniversary.",
                        image: "assets/images/fine_dining_restaurant.jpg",
                        audioFile: "fine_dining_restaurant.mp3"
                    },
                    {
                        word: "Steakhouse",
                        definition: "A restaurant that specializes in grilled steaks and meat dishes",
                        example: "The steakhouse is known for its perfectly cooked ribeye steaks.",
                        audioFile: "steakhouse.mp3"
                    },
                    {
                        word: "Seafood Restaurant",
                        definition: "A restaurant that specializes in fish and seafood dishes",
                        example: "The seafood restaurant serves fresh lobster and salmon.",
                        audioFile: "seafood_restaurant.mp3"
                    },
                    {
                        word: "Italian Restaurant",
                        definition: "A restaurant that serves Italian cuisine like pasta and pizza",
                        example: "The Italian restaurant makes authentic pasta from scratch.",
                        audioFile: "italian_restaurant.mp3"
                    },
                    {
                        word: "Bar",
                        definition: "An establishment that primarily serves alcoholic beverages",
                        example: "The sports bar has big screens showing the game.",
                        audioFile: "bar.mp3"
                    }
                ]
            }
        }
    },

    menuVocabulary: {
        title: "Menu Vocabulary",
        icon: "fas fa-book-open",
        categories: {
            courseTypes: {
                title: "Course Types",
                words: [
                    {
                        word: "Appetizer",
                        definition: "A small dish served before the main course to stimulate appetite",
                        example: "We ordered calamari as an appetizer to share.",
                        audioFile: "appetizer.mp3"
                    },
                    {
                        word: "Main Course",
                        definition: "The primary dish of a meal, usually the largest portion",
                        example: "For my main course, I'll have the grilled salmon.",
                        audioFile: "main_course.mp3"
                    },
                    {
                        word: "Side Dish",
                        definition: "A smaller dish served alongside the main course",
                        example: "The steak comes with mashed potatoes as a side dish.",
                        audioFile: "side_dish.mp3"
                    },
                    {
                        word: "Dessert",
                        definition: "A sweet course served at the end of a meal",
                        example: "The chocolate cake is the most popular dessert here.",
                        audioFile: "dessert.mp3"
                    },
                    {
                        word: "Beverage",
                        definition: "Any drink, including water, soft drinks, coffee, tea, or alcohol",
                        example: "What beverage would you like with your meal?",
                        audioFile: "beverage.mp3"
                    }
                ]
            },
            cookingMethods: {
                title: "Cooking Methods",
                words: [
                    {
                        word: "Grilled",
                        definition: "Cooked over direct heat, usually on a grill",
                        example: "The grilled chicken has a nice smoky flavor.",
                        audioFile: "grilled.mp3"
                    },
                    {
                        word: "Fried",
                        definition: "Cooked in hot oil or fat",
                        example: "The fried fish is crispy on the outside and tender inside.",
                        audioFile: "fried.mp3"
                    },
                    {
                        word: "Baked",
                        definition: "Cooked in an oven using dry heat",
                        example: "The baked potato is served with butter and sour cream.",
                        audioFile: "baked.mp3"
                    },
                    {
                        word: "Steamed",
                        definition: "Cooked using steam from boiling water",
                        example: "The steamed vegetables retain their nutrients and color.",
                        audioFile: "steamed.mp3"
                    },
                    {
                        word: "Sautéed",
                        definition: "Cooked quickly in a small amount of fat over high heat",
                        example: "The sautéed mushrooms are cooked in garlic and butter.",
                        audioFile: "sauteed.mp3"
                    }
                ]
            },
            dietaryLabels: {
                title: "Dietary Labels",
                words: [
                    {
                        word: "Vegetarian",
                        definition: "Food that contains no meat, but may include dairy and eggs",
                        example: "The vegetarian pasta is made with fresh vegetables and cheese.",
                        audioFile: "vegetarian.mp3"
                    },
                    {
                        word: "Vegan",
                        definition: "Food that contains no animal products at all",
                        example: "The vegan burger is made with plant-based ingredients.",
                        audioFile: "vegan.mp3"
                    },
                    {
                        word: "Gluten-Free",
                        definition: "Food that does not contain gluten, safe for people with celiac disease",
                        example: "We have a separate gluten-free menu available.",
                        audioFile: "gluten_free.mp3"
                    },
                    {
                        word: "Spicy",
                        definition: "Food that has a hot, peppery taste",
                        example: "The spicy curry might be too hot for some people.",
                        audioFile: "spicy.mp3"
                    },
                    {
                        word: "Dairy-Free",
                        definition: "Food that contains no milk or milk products",
                        example: "The dairy-free ice cream is made with coconut milk.",
                        audioFile: "dairy_free.mp3"
                    }
                ]
            },
            menuStyles: {
                title: "Menu Styles & Pricing",
                words: [
                    {
                        word: "À la Carte",
                        definition: "Ordering individual dishes separately, each with its own price",
                        example: "You can order à la carte or choose from our set menu.",
                        audioFile: "a_la_carte.mp3"
                    },
                    {
                        word: "Prix Fixe",
                        definition: "A set menu with a fixed price for multiple courses",
                        example: "The prix fixe menu includes appetizer, main course, and dessert.",
                        audioFile: "prix_fixe.mp3"
                    },
                    {
                        word: "Happy Hour",
                        definition: "A time period with discounted drinks and appetizers",
                        example: "Happy hour is from 4 to 6 PM with half-price drinks.",
                        audioFile: "happy_hour.mp3"
                    },
                    {
                        word: "Chef's Special",
                        definition: "A dish specially recommended by the chef, often not on the regular menu",
                        example: "Tonight's chef's special is pan-seared duck with cherry sauce.",
                        audioFile: "chefs_special.mp3"
                    },
                    {
                        word: "Kids' Menu",
                        definition: "A special menu with smaller portions and child-friendly foods",
                        example: "The kids' menu has chicken nuggets and mac and cheese.",
                        audioFile: "kids_menu.mp3"
                    }
                ]
            }
        }
    },

    generalVocabulary: {
        title: "General Restaurant Vocabulary",
        icon: "fas fa-comments",
        categories: {
            staff: {
                title: "Restaurant Staff",
                words: [
                    {
                        word: "Server",
                        definition: "A person who takes orders and serves food to customers",
                        example: "Our server was very friendly and helpful.",
                        audioFile: "server.mp3"
                    },
                    {
                        word: "Host",
                        definition: "A person who greets customers and shows them to their table",
                        example: "The host seated us at a table by the window.",
                        audioFile: "host.mp3"
                    },
                    {
                        word: "Chef",
                        definition: "A professional cook who prepares food in a restaurant",
                        example: "The chef came out to ask how we enjoyed our meal.",
                        audioFile: "chef.mp3"
                    },
                    {
                        word: "Bartender",
                        definition: "A person who prepares and serves drinks at a bar",
                        example: "The bartender makes excellent cocktails.",
                        audioFile: "bartender.mp3"
                    },
                    {
                        word: "Manager",
                        definition: "A person who oversees the restaurant's operations",
                        example: "I spoke to the manager about our dining experience.",
                        audioFile: "manager.mp3"
                    }
                ]
            },
            service: {
                title: "Service Types",
                words: [
                    {
                        word: "Table Service",
                        definition: "Service where a server takes your order and brings food to your table",
                        example: "This restaurant offers full table service.",
                        audioFile: "table_service.mp3"
                    },
                    {
                        word: "Take-Out",
                        definition: "Food ordered to be eaten elsewhere, not in the restaurant",
                        example: "We ordered take-out because we were in a hurry.",
                        audioFile: "take_out.mp3"
                    },
                    {
                        word: "Delivery",
                        definition: "Service where food is brought to your home or office",
                        example: "The restaurant offers free delivery within 5 miles.",
                        audioFile: "delivery.mp3"
                    },
                    {
                        word: "Reservation",
                        definition: "Booking a table in advance",
                        example: "I made a reservation for 7 PM under the name Smith.",
                        audioFile: "reservation.mp3"
                    },
                    {
                        word: "Walk-In",
                        definition: "Arriving at a restaurant without a reservation",
                        example: "Do you accept walk-ins, or do we need a reservation?",
                        audioFile: "walk_in.mp3"
                    }
                ]
            },
            payment: {
                title: "Payment & Tipping",
                words: [
                    {
                        word: "Check",
                        definition: "The bill showing what you owe for your meal",
                        example: "Could we have the check, please?",
                        audioFile: "check.mp3"
                    },
                    {
                        word: "Tip",
                        definition: "Extra money given to service staff for good service",
                        example: "In the US, it's customary to leave a 15-20% tip.",
                        audioFile: "tip.mp3"
                    },
                    {
                        word: "Split the Bill",
                        definition: "Dividing the cost of a meal among multiple people",
                        example: "Let's split the bill four ways.",
                        audioFile: "split_the_bill.mp3"
                    },
                    {
                        word: "Credit Card",
                        definition: "A payment method using a plastic card",
                        example: "Do you accept credit cards?",
                        audioFile: "credit_card.mp3"
                    },
                    {
                        word: "Receipt",
                        definition: "A written record of your payment",
                        example: "Could I have a receipt for my business expenses?",
                        audioFile: "receipt.mp3"
                    }
                ]
            }
        }
    }
};

// Practice words for pronunciation section
const practiceWords = [
    "Restaurant", "Appetizer", "Reservation", "Vegetarian", "Gluten-Free",
    "À la Carte", "Chef's Special", "Take-Out", "Delivery", "Tip",
    "Server", "Host", "Bartender", "Fine Dining", "Casual Dining",
    "Food Truck", "Buffet", "Steakhouse", "Seafood", "Pizzeria"
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { vocabularyData, practiceWords };
}

