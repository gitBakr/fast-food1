export default {
  common: {
    order: "اطلب",
    close: "إغلاق",
    next: "التالي",
    back: "رجوع",
    confirm: "تأكيد الطلب"
  },
  menu: {
    title: "قائمتنا",
    popular: "ساندويتشاتنا الشعبية",
    price_from: "ابتداءً من",
    currency: "€",
    categories: {
      classics: "السندويتشات الكلاسيكية",
      vegetarian: "نباتي",
      specialties: "تخصصاتنا"
    }
  },
  menuItems: {
    classique: {
      name: "الكلاسيكي",
      description: "لحم، جبنة، خس، طماطم، مايونيز منزلي",
      category: "السندويتشات الكلاسيكية",
      supplements: {
        "Double viande": "لحم مضاعف",
        "Fromage supplémentaire": "جبنة إضافية",
        "Bacon": "لحم مقدد"
      }
    },
    vegetarien: {
      name: "النباتي",
      description: "خضروات مشوية، حمص، جرجير، صلصة طحينة",
      category: "نباتي",
      supplements: {
        "Double portion légumes": "خضار مضاعف",
        "Avocat": "أفوكادو",
        "Fromage végétal": "جبنة نباتية"
      }
    },
    chicken: {
      name: "دجاج ديلوكس",
      description: "دجاج مشوي، جبنة شيدر ذائبة، لحم مقدد، صلصة باربيكيو",
      category: "تخصصاتنا"
    },
    italian: {
      name: "الإيطالي",
      description: "لحم بارما، موزاريلا، طماطم مجففة، صلصة بيستو",
      category: "تخصصاتنا"
    },
    salmon: {
      name: "النرويجي",
      description: "سلمون مدخن، جبنة كريمية، أفوكادو، خيار، شبت",
      category: "تخصصاتنا"
    },
    gourmet: {
      name: "الفاخر",
      description: "دجاج مشوي، أفوكادو، لحم مقدد، طماطم مجففة، صلصة خاصة",
      category: "تخصصاتنا",
      supplements: {
        "Double poulet": "دجاج مضاعف",
        "Extra avocat": "أفوكادو إضافي",
        "Double bacon": "لحم مقدد مضاعف"
      }
    }
  },
  orderModal: {
    delivery: {
      title: "اختيار التوصيل والكمية",
      onSite: "في المطعم",
      takeaway: "للمنزل",
      delivery: "توصيل منزلي",
      type: "نوع التوصيل"
    },
    quantity: {
      label: "الكمية",
      delivery_fee: "رسوم التوصيل"
    },
    customization: {
      title: "تخصيص مجاني",
      free_sauces: "الصلصات المجانية",
      free_vegetables: "الخضروات المجانية"
    },
    drinks: {
      title: "اختيار المشروبات"
    },
    desserts: {
      title: "اختيار الحلويات"
    },
    customer_info: {
      title: "معلوماتك",
      name: "الاسم *",
      phone: "الهاتف *",
      delivery_address: "عنوان التوصيل *",
      special_instructions: "تعليمات خاصة"
    },
    summary: {
      unit_price: "سعر الوحدة",
      quantity: "الكمية",
      subtotal: "المجموع الفرعي",
      delivery_fee: "رسوم التوصيل",
      total: "المجموع"
    },
    test_data: "بيانات تجريبية"
  },
  navbar: {
    home: "الرئيسية",
    menu: "القائمة",
    specialties: "التخصصات",
    about: "من نحن",
    contact: "اتصل بنا",
    order_now: "اطلب الآن",
    brand: {
      first: "فاست",
      second: "فود"
    }
  },
  hero: {
    title: "استمتع بسندويشاتنا اللذيذة",
    subtitle: "مصنوعة من مكونات طازجة وعالية الجودة",
    order_button: "اطلب الآن",
    discover_button: "اكتشف القائمة",
    features: {
      fresh: {
        title: "مكونات طازجة",
        description: "منتجات محلية وموسمية"
      },
      quick: {
        title: "تحضير فوري",
        description: "كل سندويش يحضر عند الطلب"
      },
      delivery: {
        title: "توصيل سريع",
        description: "التوصيل في 30 دقيقة أو أقل"
      }
    }
  },
  whyUs: {
    title: "لماذا تختارنا؟",
    reasons: {
      quality: {
        title: "جودة ممتازة",
        description: "مكونات طازجة مختارة بعناية لجودة استثنائية"
      },
      speed: {
        title: "خدمة سريعة",
        description: "تحضير سريع وتوصيل خلال 30 دقيقة"
      },
      price: {
        title: "أسعار معقولة",
        description: "أسعار تنافسية للجودة المثلى"
      },
      hygiene: {
        title: "نظافة مضمونة",
        description: "التزام صارم بمعايير سلامة وصحة الغذاء"
      }
    }
  },
  confirmation: {
    title: "تم تأكيد الطلب!",
    thank_you: "شكراً {{name}}!",
    order_number: "رقم الطلب: #{{number}}",
    delivery_type: "نوع الطلب",
    total: "المبلغ الإجمالي",
    estimated_time: "الوقت المتوقع",
    sms_notification: "ستتلقى رسالة نصية قصيرة للتأكيد مع تفاصيل طلبك"
  },
  supplements: {
    meat: {
      double: "لحم مضاعف",
      bacon: "لحم مقدد"
    },
    cheese: {
      extra: "جبنة إضافية",
      vegetal: "جبنة نباتية"
    },
    veggies: {
      avocado: "أفوكادو",
      double: "خضار مضاعف"
    }
  },
  footer: {
    company: {
      title: "شركتنا",
      about: "من نحن",
      contact: "اتصل بنا",
      careers: "وظائف",
      privacy: "الخصوصية"
    },
    services: {
      title: "خدماتنا",
      delivery: "توصيل",
      takeaway: "طلب خارجي",
      catering: "تموين الحفلات",
      events: "المناسبات"
    },
    contact: {
      title: "معلومات الاتصال",
      address: "١٢٣ شارع السلام، لندن",
      phone: "٠١٢٣٤٥٦٧٨٩",
      email: "contact@fastfood.com",
      hours: "نفتح ٧ أيام في الأسبوع من ١١ صباحاً حتى ١١ مساءً"
    },
    social: {
      title: "تابعنا",
      facebook: "فيسبوك",
      instagram: "انستغرام",
      twitter: "تويتر"
    },
    rights: "© ٢٠٢٤ فاست فود. جميع الحقوق محفوظة"
  }
}; 