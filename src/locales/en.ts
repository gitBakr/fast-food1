export default {
  common: {
    order: "Order",
    close: "Close",
    next: "Next",
    back: "Back",
    confirm: "Confirm order"
  },
  menu: {
    title: "Our Menu",
    popular: "Our popular sandwiches",
    price_from: "From",
    currency: "€",
    categories: {
      classics: "Classic Sandwiches",
      vegetarian: "Vegetarian",
      specialties: "Specialties"
    }
  },
  orderModal: {
    steps: {
      delivery: "Delivery",
      customization: "Customization",
      drinks: "Drinks",
      desserts: "Desserts",
      customer_info: "Your details"
    },
    delivery: {
      title: "Delivery and quantity",
      onSite: "Dine in",
      takeaway: "Takeaway",
      delivery: "Home delivery",
      type: "Delivery type",
      fee: "Delivery fee"
    },
    quantity: {
      label: "Quantity",
      delivery_fee: "Delivery fee"
    },
    customization: {
      title: "Free customization",
      free_sauces: "Free sauces",
      free_vegetables: "Free vegetables",
      select_sauces: "Select your sauces",
      select_vegetables: "Select your vegetables"
    },
    customer_info: {
      title: "Your information",
      name: "Name *",
      phone: "Phone *",
      delivery_address: "Delivery address *",
      special_instructions: "Special instructions",
      required_fields: "* Required fields"
    },
    summary: {
      title: "Order summary",
      unit_price: "Unit price",
      quantity: "Quantity",
      subtotal: "Subtotal",
      delivery_fee: "Delivery fee",
      total: "Total",
      includes_delivery: "Includes delivery fee"
    },
    buttons: {
      next: "Next",
      back: "Back",
      confirm: "Confirm order",
      add_to_order: "Add to order"
    },
    validation: {
      required_name: "Please enter your name",
      required_phone: "Please enter your phone number",
      required_address: "Please enter your delivery address",
      invalid_phone: "Please enter a valid phone number"
    },
    test_data: "Test data",
    sauces: {
      title: "Available sauces",
      mayonnaise: "Mayonnaise",
      ketchup: "Ketchup",
      mustard: "Mustard",
      bbq: "BBQ Sauce",
      andalouse: "Andalouse Sauce",
      samurai: "Samurai Sauce"
    },
    vegetables: {
      title: "Free vegetables",
      lettuce: "Lettuce",
      tomatoes: "Tomatoes",
      onions: "Onions",
      pickles: "Pickles",
      olives: "Olives",
      cucumber: "Cucumber"
    },
    items: {
      drinks: {
        coca_cola: "Coca-Cola 33cl",
        fanta: "Fanta Orange 33cl",
        sprite: "Sprite 33cl",
        water: "Mineral Water 50cl",
        ice_tea: "Ice Tea 33cl",
        orangina: "Orangina 33cl"
      },
      desserts: {
        brownie: "Brownie",
        cookie: "Cookie",
        tiramisu: "Tiramisu",
        chocolate_mousse: "Chocolate Mousse",
        fresh_fruit: "Fresh Fruit"
      }
    },
    errors: {
      required_field: "This field is required",
      invalid_phone: "Please enter a valid phone number",
      min_quantity: "Minimum quantity is 1",
      max_quantity: "Maximum quantity is 10"
    },
    actions: {
      add: "Add",
      remove: "Remove",
      clear: "Clear all",
      select: "Select"
    }
  },
  navbar: {
    home: "Home",
    menu: "Menu",
    specialties: "Specialties",
    about: "About",
    contact: "Contact",
    order_now: "Order Now",
    brand: {
      first: "FAST",
      second: "FOOD"
    }
  },
  hero: {
    title: "Savor our delicious sandwiches",
    subtitle: "Made with fresh, quality ingredients",
    order_button: "Order now",
    discover_button: "Discover menu",
    features: {
      fresh: {
        title: "Fresh Ingredients",
        description: "Local and seasonal products"
      },
      quick: {
        title: "Made to Order",
        description: "Each sandwich prepared on demand"
      },
      delivery: {
        title: "Fast Delivery",
        description: "Delivered in 30 minutes or less"
      }
    }
  },
  whyUs: {
    title: "Why Choose Us?",
    reasons: {
      quality: {
        title: "Premium Quality",
        description: "Fresh ingredients carefully selected for exceptional quality"
      },
      speed: {
        title: "Fast Service",
        description: "Express preparation and delivery within 30 minutes"
      },
      price: {
        title: "Affordable Prices",
        description: "Competitive prices for optimal quality"
      },
      hygiene: {
        title: "Guaranteed Hygiene",
        description: "Strict adherence to food safety and hygiene standards"
      }
    }
  },
  confirmation: {
    title: "Order Confirmed!",
    thank_you: "Thank you {{name}}!",
    order_number: "Order number: #{{number}}",
    delivery_type: "Order type",
    total: "Total amount",
    estimated_time: "Estimated time",
    sms_notification: "You will receive a confirmation SMS with your order details shortly"
  },
  menuItems: {
    classique: {
      name: "The Classic",
      description: "Ham, cheese, lettuce, tomatoes, homemade mayonnaise",
      category: "Classic Sandwiches",
      supplements: {
        "Double viande": "Double meat",
        "Fromage supplémentaire": "Extra cheese",
        "Bacon": "Bacon"
      }
    },
    vegetarien: {
      name: "The Vegetarian",
      description: "Grilled vegetables, hummus, arugula, tahini sauce",
      category: "Vegetarian",
      supplements: {
        "Double portion légumes": "Double vegetables",
        "Avocat": "Avocado",
        "Fromage végétal": "Vegan cheese"
      }
    },
    gourmet: {
      name: "The Gourmet",
      description: "Grilled chicken, avocado, bacon, sun-dried tomatoes, special sauce",
      category: "Specialties",
      supplements: {
        "Double poulet": "Double chicken",
        "Extra avocat": "Extra avocado",
        "Double bacon": "Double bacon"
      }
    }
  },
  supplements: {
    meat: {
      double: "Double meat",
      bacon: "Bacon"
    },
    cheese: {
      extra: "Extra cheese",
      vegetal: "Vegan cheese"
    },
    veggies: {
      avocado: "Avocado",
      double: "Double vegetables"
    }
  },
  footer: {
    company: {
      title: "Our Company",
      about: "About",
      contact: "Contact",
      careers: "Careers",
      privacy: "Privacy"
    },
    services: {
      title: "Our Services",
      delivery: "Delivery",
      takeaway: "Takeaway",
      catering: "Catering",
      events: "Events"
    },
    contact: {
      title: "Contact Us",
      address: "123 Peace Street, London",
      phone: "01 23 45 67 89",
      email: "contact@fastfood.com",
      hours: "Open 7 days a week from 11am to 11pm"
    },
    social: {
      title: "Follow Us",
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter"
    },
    rights: "© 2024 Fast Food. All rights reserved."
  }
}; 