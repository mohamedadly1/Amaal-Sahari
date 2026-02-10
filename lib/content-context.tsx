"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define content structure for ALL editable sections across the site
export interface SiteContent {
  // HOME PAGE SECTIONS
  hero: {
    videoUrl: string
    en: {
      tagline: string
      headline: string
      highlightedText: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
    }
    ar: {
      tagline: string
      headline: string
      highlightedText: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
    }
  }
  kpis: {
    items: Array<{
      id: string
      value: string
      en: { label: string }
      ar: { label: string }
    }>
  }
  testimonials: {
    items: Array<{
      id: string
      rating: number
      en: { quote: string; author: string; company: string }
      ar: { quote: string; author: string; company: string }
    }>
  }
  caseStudies: {
    items: Array<{
      id: string
      imageUrl: string
      en: { title: string; description: string; metrics: string }
      ar: { title: string; description: string; metrics: string }
    }>
  }
  whyChooseUs: {
    imageUrl: string
    items: Array<{
      id: string
      en: { title: string; description: string }
      ar: { title: string; description: string }
    }>
  }
  valueHighlights: {
    pillars: Array<{
      id: string
      imageUrl: string
      en: { title: string; description: string }
      ar: { title: string; description: string }
    }>
  }
  services: {
    items: Array<{
      id: string
      slug: string
      imageUrl: string
      en: { title: string; description: string }
      ar: { title: string; description: string }
    }>
  }

  // ABOUT PAGE
  about: {
    heroImageUrl: string
    en: {
      title: string
      subtitle: string
      visionTitle: string
      visionDescription: string
      visionPoints: string[]
      missionTitle: string
      missionDescription: string
      missionPoints: string[]
      valuesTitle: string
      valuesSubtitle: string
    }
    ar: {
      title: string
      subtitle: string
      visionTitle: string
      visionDescription: string
      visionPoints: string[]
      missionTitle: string
      missionDescription: string
      missionPoints: string[]
      valuesTitle: string
      valuesSubtitle: string
    }
    coreValues: Array<{
      id: string
      icon: string
      en: { title: string; description: string }
      ar: { title: string; description: string }
    }>
  }

  // BLOG PAGE
  blog: {
    posts: Array<{
      id: string
      imageUrl: string
      date: string
      en: { title: string; excerpt: string; author: string; category: string }
      ar: { title: string; excerpt: string; author: string; category: string }
    }>
  }

  // CAREERS PAGE
  careers: {
    positions: Array<{
      id: string
      en: { title: string; department: string; location: string; description: string }
      ar: { title: string; department: string; location: string; description: string }
    }>
  }

  // FAQs PAGE
  faqs: {
    items: Array<{
      id: string
      en: { question: string; answer: string }
      ar: { question: string; answer: string }
    }>
  }

  // CONTACT INFO
  contact: {
    email: string
    phone: string
    whatsapp: string
    address: {
      en: string
      ar: string
    }
    locations: Array<{
      id: string
      phone: string
      email: string
      en: { city: string; address: string }
      ar: { city: string; address: string }
    }>
  }

  // FOOTER
  footer: {
    stats: Array<{
      id: string
      value: string
      en: { label: string }
      ar: { label: string }
    }>
  }

  // SEO SETTINGS
  seo: {
    general: {
      defaultMetaTitle: string
      defaultMetaDescription: string
      metaKeywords: string
      faviconUrl: string
    }
    pages: Array<{
      id: string
      slug: string
      metaTitle: string
      metaDescription: string
      metaKeywords: string
      canonicalUrl: string
      ogImage: string
      twitterCard: string
    }>
    integrations: {
      googleSearchConsoleId: string
      googleAnalyticsId: string
      googleTagManagerId: string
    }
  }

  // WHATSAPP CONTROL
  whatsapp: {
    enabled: boolean
    phoneNumber: string
    prefilledMessage: string
    position: "left" | "right"
    customIconUrl: string
  }

  // SOCIAL MEDIA CONTROL
  socialMedia: {
    items: Array<{
      id: string
      platform: "facebook" | "messenger" | "instagram" | "linkedin" | "twitter" | "youtube" | "tiktok" | "snapchat"
      enabled: boolean
      url: string
      customIconUrl: string
      position: "header" | "footer" | "floating"
      openInNewTab: boolean
    }>
  }
}

// Default content pulled from the existing site
const defaultContent: SiteContent = {
  hero: {
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Generation_Based_on_Concept-BXqzVhY44Hicwtxk40zzShyS4UvRHY.mp4",
    en: {
      tagline: "OUR PREMIUM SERVICES",
      headline: "We Provide ",
      highlightedText: "Integrated Solutions",
      subtitle: "Comprehensive services to enhance your workplace environment and employee comfort",
      ctaPrimary: "Explore Services",
      ctaSecondary: "Get a Quote",
    },
    ar: {
      tagline: "خدماتنا المتميزة",
      headline: "نحن نقدم ",
      highlightedText: "حلولاً متكاملة",
      subtitle: "خدمات شاملة لتحسين بيئة عملك وراحة موظفيك",
      ctaPrimary: "استكشف الخدمات",
      ctaSecondary: "احصل على عرض سعر",
    },
  },
  kpis: {
    items: [
      { id: "1", value: "500+", en: { label: "Sites Served" }, ar: { label: "المواقع المخدومة" } },
      { id: "2", value: "10,000+", en: { label: "Monthly Inspections" }, ar: { label: "الفحوصات الشهرية" } },
      { id: "3", value: "2 hours", en: { label: "Avg Response Time" }, ar: { label: "متوسط وقت الاستجابة" } },
      { id: "4", value: "98%", en: { label: "Client Satisfaction" }, ar: { label: "رضا العملاء" } },
    ],
  },
  testimonials: {
    items: [
      {
        id: "1",
        rating: 5,
        en: {
          quote: "Exceptional service and professionalism. Our office has never looked better.",
          author: "Sarah Johnson",
          company: "Tech Innovations Inc.",
        },
        ar: {
          quote: "خدمة استثنائية واحترافية. لم يبدو مكتبنا أفضل من أي وقت مضى.",
          author: "سارة جونسون",
          company: "شركة الابتكارات التقنية",
        },
      },
      {
        id: "2",
        rating: 5,
        en: {
          quote: "Reliable, efficient, and truly care about our workspace. Highly recommended.",
          author: "Michael Chen",
          company: "Global Consulting Group",
        },
        ar: {
          quote: "موثوقة وفعالة وتهتم حقاً بمساحة عملنا. موصى به بشدة.",
          author: "مايكل تشن",
          company: "مجموعة الاستشارات العالمية",
        },
      },
      {
        id: "3",
        rating: 5,
        en: {
          quote: "Outstanding attention to detail and consistent quality. A true partner.",
          author: "Emma Rodriguez",
          company: "Premium Hospitality Co.",
        },
        ar: {
          quote: "اهتمام استثنائي بالتفاصيل وجودة متسقة. شريك حقيقي.",
          author: "إيما رودريغيز",
          company: "شركة الضيافة الممتازة",
        },
      },
    ],
  },
  caseStudies: {
    items: [
      {
        id: "1",
        imageUrl: "/images/case-study-corporate-transformation.jpg",
        en: {
          title: "Corporate Office Transformation",
          description: "Reduced cleaning complaints by 95% and improved employee satisfaction",
          metrics: "95% reduction in complaints",
        },
        ar: {
          title: "تحويل مكتب الشركة",
          description: "تقليل شكاوى التنظيف بنسبة 95% وتحسين رضا الموظفين",
          metrics: "تقليل 95% من الشكاوى",
        },
      },
      {
        id: "2",
        imageUrl: "/images/case-study-hospitality-excellence.jpg",
        en: {
          title: "Hospitality Excellence",
          description: "Faster response times and improved guest experience ratings",
          metrics: "40% faster response time",
        },
        ar: {
          title: "تميز الضيافة",
          description: "أوقات استجابة أسرع وتحسين تقييمات تجربة الضيوف",
          metrics: "وقت استجابة أسرع بنسبة 40%",
        },
      },
      {
        id: "3",
        imageUrl: "/images/case-study-facility-optimization.jpg",
        en: {
          title: "Facility Optimization",
          description: "Streamlined operations and cost savings through integrated services",
          metrics: "30% cost reduction",
        },
        ar: {
          title: "تحسين المرافق",
          description: "تبسيط العمليات وتوفير التكاليف من خلال الخدمات المتكاملة",
          metrics: "تقليل التكاليف بنسبة 30%",
        },
      },
    ],
  },
  whyChooseUs: {
    imageUrl: "/images/hospitality-excellence-why-us.jpg",
    items: [
      {
        id: "1",
        en: { title: "Experienced Team", description: "Over 15 years of industry expertise with certified professionals" },
        ar: { title: "فريق ذو خبرة", description: "أكثر من 15 عامًا من الخبرة في الصناعة مع محترفين معتمدين" },
      },
      {
        id: "2",
        en: { title: "24/7 Support", description: "Round-the-clock customer service and emergency response" },
        ar: { title: "دعم على مدار الساعة", description: "خدمة عملاء على مدار الساعة واستجابة للطوارئ" },
      },
      {
        id: "3",
        en: { title: "Quality Guaranteed", description: "Strict quality control measures and satisfaction guarantee" },
        ar: { title: "جودة مضمونة", description: "تدابير صارمة لمراقبة الجودة وضمان الرضا" },
      },
      {
        id: "4",
        en: { title: "Eco-Friendly", description: "Sustainable practices and environmentally safe products" },
        ar: { title: "صديق للبيئة", description: "ممارسات مستدامة ومنتجات آمنة بيئياً" },
      },
    ],
  },
  valueHighlights: {
    pillars: [
      {
        id: "1",
        imageUrl: "/images/hygiene-excellence.png",
        en: { title: "Hygiene Excellence", description: "Maintaining highest cleanliness standards" },
        ar: { title: "التميز في النظافة", description: "الحفاظ على أعلى معايير النظافة" },
      },
      {
        id: "2",
        imageUrl: "/images/reliability.png",
        en: { title: "Reliability", description: "Consistent and dependable service delivery" },
        ar: { title: "الموثوقية", description: "تقديم خدمة متسقة وموثوقة" },
      },
      {
        id: "3",
        imageUrl: "/images/sustainability.png",
        en: { title: "Sustainability", description: "Eco-friendly practices and green solutions" },
        ar: { title: "الاستدامة", description: "ممارسات صديقة للبيئة وحلول خضراء" },
      },
      {
        id: "4",
        imageUrl: "/images/compliance.png",
        en: { title: "Compliance", description: "Full regulatory and safety compliance" },
        ar: { title: "الامتثال", description: "الامتثال الكامل للوائح والسلامة" },
      },
    ],
  },
  services: {
    items: [
      {
        id: "1",
        slug: "housekeeping-janitorial",
        imageUrl: "/images/housekeeping-janitorial.png",
        en: { title: "Housekeeping & Janitorial", description: "Professional cleaning services for your premises" },
        ar: { title: "التدبير المنزلي والنظافة", description: "خدمات تنظيف احترافية لمبانيك" },
      },
      {
        id: "2",
        slug: "hospitality-services",
        imageUrl: "/images/hospitality-services.png",
        en: { title: "Hospitality Services", description: "Premium hospitality and guest services" },
        ar: { title: "خدمات الضيافة", description: "خدمات ضيافة وضيوف متميزة" },
      },
      {
        id: "3",
        slug: "landscaping-plants",
        imageUrl: "/images/landscaping-plants.png",
        en: { title: "Landscaping & Plants", description: "Beautiful outdoor spaces and greenery" },
        ar: { title: "تنسيق الحدائق والنباتات", description: "مساحات خارجية جميلة ومساحات خضراء" },
      },
      {
        id: "4",
        slug: "pest-control",
        imageUrl: "/images/pest-control-outdoor.png",
        en: { title: "Pest Control", description: "Effective pest management solutions" },
        ar: { title: "مكافحة الآفات", description: "حلول فعالة لإدارة الآفات" },
      },
      {
        id: "5",
        slug: "facade-cleaning",
        imageUrl: "/images/facade-cleaning.png",
        en: { title: "Facade Cleaning", description: "Professional exterior cleaning services" },
        ar: { title: "تنظيف الواجهات", description: "خدمات تنظيف خارجية احترافية" },
      },
      {
        id: "6",
        slug: "waste-management",
        imageUrl: "/images/waste-management.png",
        en: { title: "Waste Management", description: "Efficient waste disposal and recycling" },
        ar: { title: "إدارة النفايات", description: "التخلص الفعال من النفايات وإعادة التدوير" },
      },
      {
        id: "7",
        slug: "manned-security",
        imageUrl: "/images/manned-security.png",
        en: { title: "Manned Security", description: "Professional security personnel services" },
        ar: { title: "الأمن المأهول", description: "خدمات أفراد الأمن المحترفين" },
      },
    ],
  },
  about: {
    heroImageUrl: "/images/vision-innovation.png",
    en: {
      title: "About Amaal Sahari",
      subtitle: "Comprehensive facility management services providing integrated workplace solutions that enhance productivity and comfort",
      visionTitle: "Our Vision",
      visionDescription: "To be the leading provider of integrated facility management solutions that transform workplaces into thriving ecosystems where employees flourish and businesses excel.",
      visionPoints: [
        "Create sustainable, healthy work environments",
        "Drive innovation in facility management",
        "Build lasting partnerships with our clients",
        "Empower our team to deliver excellence",
      ],
      missionTitle: "Our Mission",
      missionDescription: "To deliver comprehensive, innovative facility management services that enhance productivity, comfort, and brand value while maintaining the highest standards of sustainability and employee wellbeing.",
      missionPoints: [
        "Deliver exceptional customer service",
        "Maintain highest safety and quality standards",
        "Promote environmental sustainability",
        "Foster a culture of continuous improvement",
      ],
      valuesTitle: "Our Core Values",
      valuesSubtitle: "The principles that guide every decision and action we take",
    },
    ar: {
      title: "عن أمال الصحاري",
      subtitle: "خدمات شاملة لإدارة المرافق توفر بيئات عمل متكاملة تعزز الإنتاجية والراحة",
      visionTitle: "رؤيتنا",
      visionDescription: "أن نكون المزود الرائد لحل��ل إدارة المرافق المتكاملة التي تحول أماكن العمل إلى نظم بيئية مزدهرة حيث يزدهر الموظفون وتتفوق الشركات.",
      visionPoints: [
        "إنشاء بيئات عمل مستدامة وصحية",
        "تحفيز الابتكار في إدارة المرافق",
        "بناء شراكات دائمة ��ع عملائنا",
        "تمكين فريقنا لتحقيق التميز",
      ],
      missionTitle: "مهمتنا",
      missionDescription: "تقديم خدمات إدارة مرافق شاملة ومبتكرة تعزز الإنتاجية والراحة والقيمة التجارية مع الحفاظ على أعلى معايير الاستدامة وصحة الموظفين.",
      missionPoints: [
        "تقديم خدمة عملاء استثنائية",
        "الحفاظ على أعلى معايير السلامة والجودة",
        "تعزيز الاستدامة البيئية",
        "غرس ثقافة التحسين المستمر",
      ],
      valuesTitle: "قيمنا الأساسية",
      valuesSubtitle: "المبادئ التي توجه كل قرار وإجراء نتخذه",
    },
    coreValues: [
      {
        id: "1",
        icon: "Heart",
        en: { title: "Care", description: "We genuinely care about our clients, employees, and the environment" },
        ar: { title: "الرعاية", description: "نهتم براعاية عملائنا وموظفينا والبيئة" },
      },
      {
        id: "2",
        icon: "Zap",
        en: { title: "Excellence", description: "We strive for excellence in everything we do" },
        ar: { title: "التميز", description: "نسعى للتميز في كل ما نقوم به" },
      },
      {
        id: "3",
        icon: "Users",
        en: { title: "Teamwork", description: "We believe in the power of collaboration and teamwork" },
        ar: { title: "العمل الجماعي", description: "نؤمن بقوة التعاون والعمل الجماعي" },
      },
      {
        id: "4",
        icon: "Globe",
        en: { title: "Sustainability", description: "We are committed to sustainable and eco-friendly practices" },
        ar: { title: "الاستدامة", description: "نلتزم بالممارسات المستدامة والصديقة للبيئة" },
      },
    ],
  },
  blog: {
    posts: [
      {
        id: "1",
        imageUrl: "/images/office-cleaning.png",
        date: "2025-01-15",
        en: { title: "The Importance of Cleanliness in the Workplace", excerpt: "Learn how to improve your workplace environment by maintaining high cleanliness standards.", author: "Ahmed Mohamed", category: "Cleanliness" },
        ar: { title: "أهمية النظافة في مكان العمل", excerpt: "تعرف على كيفية تحسين بيئة العمل من خلال الحفاظ على معايير النظافة العالية.", author: "أحمد محمد", category: "النظافة" },
      },
      {
        id: "2",
        imageUrl: "/images/recycling-waste-management.png",
        date: "2025-01-10",
        en: { title: "Sustainable Waste Management Strategies", excerpt: "Explore best practices for managing waste in an eco-friendly and cost-effective manner.", author: "Fatima Ali", category: "Environment" },
        ar: { title: "استراتيجيات إدارة النفايات المستدامة", excerpt: "استكشف أفضل الممارسات لإدارة النفايات بطريقة صديقة للبيئة وفعالة.", author: "فاطمة علي", category: "البيئة" },
      },
      {
        id: "3",
        imageUrl: "/images/security-professional.png",
        date: "2025-01-05",
        en: { title: "Security and Safety in Commercial Facilities", excerpt: "Important tips for enhancing security and safety in your commercial facilities.", author: "Mahmoud Ahmed", category: "Security" },
        ar: { title: "الأمن والسلامة في المرافق التجارية", excerpt: "نصائح مهمة لتحسين الأمن والسلامة في مرافقك التجارية.", author: "محمود أحمد", category: "الأمن" },
      },
      {
        id: "4",
        imageUrl: "/images/business-meeting.png",
        date: "2024-12-28",
        en: { title: "High-Quality Hospitality Services", excerpt: "How to provide exceptional hospitality services to your guests and employees.", author: "Layla Mahmoud", category: "Hospitality" },
        ar: { title: "الخدمات الفندقية ذات الجودة العالية", excerpt: "كيفية توفير خدمات فندقية متميزة لضيوفك وموظفيك.", author: "ليلى محمود", category: "الخدمات الفندقية" },
      },
    ],
  },
  careers: {
    positions: [
      {
        id: "1",
        en: { title: "Operations Manager", department: "Operations", location: "Cairo, Egypt", description: "We're looking for an experienced Operations Manager to oversee our team and coordinate services efficiently." },
        ar: { title: "مدير العمليات", department: "العمليات", location: "القاهرة، مصر", description: "نحتاج إلى مدير عمليات ذو خبرة لإدارة فريقنا وتنسيق الخدمات بكفاءة." },
      },
      {
        id: "2",
        en: { title: "Cleaning Services Specialist", department: "Services", location: "Cairo, Egypt", description: "Join our specialized team providing advanced cleaning and maintenance services." },
        ar: { title: "متخصص في خدمات التنظيف", department: "الخدمات", location: "القاهرة، مصر", description: "انضم إلى فريقنا المتخصص في خدمات التنظيف والصيانة المتقدمة." },
      },
      {
        id: "3",
        en: { title: "HR Manager", department: "Human Resources", location: "Cairo, Egypt", description: "Seeking an HR Manager to handle recruitment and career development." },
        ar: { title: "مسؤول الموارد البشرية", department: "الموارد البشرية", location: "القاهرة، مصر", description: "ابحث عن مسؤول موارد بشرية لإدارة التوظيف والتطوير الوظيفي." },
      },
    ],
  },
  faqs: {
    items: [
      {
        id: "1",
        en: { question: "What cleaning services do you offer?", answer: "We offer comprehensive cleaning services including daily cleaning, deep cleaning, window and facade cleaning, and outdoor area management." },
        ar: { question: "ما هي خدمات التنظيف المتوفرة؟", answer: "نقدم مجموعة شاملة من خدمات التنظيف بما في ذلك التنظيف اليومي، والتنظيف العميق، وتنظيف النوافذ والواجهات، وإدارة المنطقة الخارجية." },
      },
      {
        id: "2",
        en: { question: "Do you provide security services?", answer: "Yes, we provide armed and unarmed security services, area surveillance, and security patrols to ensure your facility's safety." },
        ar: { question: "هل توفرون خدمات الأمن؟", answer: "نعم، نوفر خدمات الأمن المسلح وغير المسلح، ومراقبة المنطقة، والدوريات الأمنية لضمان سلامة مرفقك." },
      },
      {
        id: "3",
        en: { question: "Can services be customized to our needs?", answer: "Absolutely, we understand that each client has unique needs. We offer customized solutions tailored to your specific business requirements." },
        ar: { question: "هل يمكن تخصيص الخدمات حسب احتياجات��؟", answer: "بالتأكيد، نتفهم أن كل عميل له احتياجات فريدة. نقدم حلولاً مخصصة مصممة خصيصاً لتلبية متطلبات عملك." },
      },
      {
        id: "4",
        en: { question: "What are your service hours?", answer: "We operate 24/7. You can reach us anytime for immediate support and emergency services." },
        ar: { question: "ما هي ساعات عمل الخدمة؟", answer: "نحن نعمل على مدار 24 ساعة، 7 أيام في الأسبوع. يمكنك الاتصال بنا في أي وقت للحصول على الدعم الفوري والخدمات الطارئة." },
      },
      {
        id: "5",
        en: { question: "How can I get a quote?", answer: "You can contact us via phone or email, or fill out a form on our website. Our team will respond within 24 hours." },
        ar: { question: "كيف يمكنني الحصول على عرض سعر؟", answer: "يمكنك الاتصال بنا عبر الهاتف أو البريد الإلكتروني أو ملء نموذج على موقعنا. سيقوم فريقنا بالاستجابة في غضون 24 ساعة." },
      },
      {
        id: "6",
        en: { question: "Do you provide guarantees on service quality?", answer: "Yes, we maintain high quality standards. If you're unsatisfied with any service, we'll correct it immediately at no additional cost." },
        ar: { question: "هل توفرون ضمانات على جودة الخدمة؟", answer: "نعم، نلتزم بمعايير جودة عالية. إذا لم تكن راضياً عن الخدمة، سنعمل على تصحيح الموقف فوراً بدون رسوم إضافية." },
      },
    ],
  },
  contact: {
    email: "info@amaalsahari.com",
    phone: "+201021454545",
    whatsapp: "+201021454545",
    address: {
      en: "United Arab Emirates",
      ar: "الإمارات العربية المتحدة",
    },
    locations: [
      {
        id: "1",
        phone: "+971 4 XXX XXXX",
        email: "dubai@softservices.ae",
        en: { city: "Dubai", address: "Dubai Business Center, Sheikh Zayed Road" },
        ar: { city: "دبي", address: "مركز دبي التجاري، شارع الشيخ زايد" },
      },
      {
        id: "2",
        phone: "+971 2 XXX XXXX",
        email: "abudhabi@softservices.ae",
        en: { city: "Abu Dhabi", address: "Union Tower, Al Marjan Island" },
        ar: { city: "أبو ظبي", address: "برج الاتحاد، جزيرة الماريه" },
      },
      {
        id: "3",
        phone: "+971 6 XXX XXXX",
        email: "sharjah@softservices.ae",
        en: { city: "Sharjah", address: "Industrial Area, Sharjah" },
        ar: { city: "الشارقة", address: "منطقة الصناعية، الشارقة" },
      },
    ],
  },
  footer: {
    stats: [
      { id: "1", value: "500+", en: { label: "Sites Served" }, ar: { label: "المواقع المخدومة" } },
      { id: "2", value: "10,000+", en: { label: "Monthly Inspections" }, ar: { label: "الفحوصات الشهرية" } },
      { id: "3", value: "2 hours", en: { label: "Avg Response Time" }, ar: { label: "متوسط وقت الاستجابة" } },
      { id: "4", value: "98%", en: { label: "Client Satisfaction" }, ar: { label: "رضا العملاء" } },
    ],
  },
  seo: {
    general: {
      defaultMetaTitle: "Amaal Sahari - Integrated Facility Management Solutions",
      defaultMetaDescription: "Comprehensive facility management services providing integrated workplace solutions that enhance productivity and comfort",
      metaKeywords: "facility management, cleaning services, security, workplace solutions",
      faviconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amaal%20Sahari%20Web%20Logo-JeTkcT88yuJW3ZTgu8RnID1sBhHFbs.png",
    },
    pages: [],
    integrations: {
      googleSearchConsoleId: "",
      googleAnalyticsId: "",
      googleTagManagerId: "",
    },
  },
  whatsapp: {
    enabled: true,
    phoneNumber: "+201021454545",
    prefilledMessage: "Hello, I'm interested in your facility management services.",
    position: "right",
    customIconUrl: "",
  },
  socialMedia: {
    items: [
      { id: "1", platform: "facebook", enabled: true, url: "https://facebook.com", customIconUrl: "", position: "footer", openInNewTab: true },
      { id: "2", platform: "instagram", enabled: true, url: "https://instagram.com", customIconUrl: "", position: "footer", openInNewTab: true },
      { id: "3", platform: "linkedin", enabled: true, url: "https://linkedin.com", customIconUrl: "", position: "footer", openInNewTab: true },
      { id: "4", platform: "twitter", enabled: true, url: "https://twitter.com", customIconUrl: "", position: "footer", openInNewTab: true },
      { id: "5", platform: "youtube", enabled: true, url: "https://youtube.com", customIconUrl: "", position: "footer", openInNewTab: true },
    ],
  },
}

interface ContentContextType {
  content: SiteContent
  updateContent: (newContent: Partial<SiteContent>) => void
  updateSection: <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => void
  updateContact: (contact: SiteContent["contact"]) => void
  resetToDefault: () => void
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

const STORAGE_KEY = "site_content"

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setContent({ ...defaultContent, ...parsed })
      } catch (e) {
        console.error("Failed to parse saved content:", e)
      }
    }
  }, [])

  const saveContent = (newContent: SiteContent) => {
    setContent(newContent)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent))
  }

  const updateContent = (newContent: Partial<SiteContent>) => {
    const updated = { ...content, ...newContent }
    saveContent(updated)
  }

  const updateSection = <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => {
    saveContent({ ...content, [section]: data })
  }

  const updateContact = (contact: SiteContent["contact"]) => {
    saveContent({ ...content, contact })
  }

  const resetToDefault = () => {
    setContent(defaultContent)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <ContentContext.Provider
      value={{
        content,
        updateContent,
        updateSection,
        updateContact,
        resetToDefault,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error("useContent must be used within ContentProvider")
  }
  return context
}
