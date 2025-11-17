// src/data/consultationDetail.js
const consultationDetail = {
  title: "Full Analysis",
  astrologer: "By Astrologer KM Sinha",
  price: "INR 6018",
  rating: 4.9,
  totalReviews: 12,
  offer: "20% OFF",
  features: [
    "Expert Astrologers",
    "Personalized Solutions",
    "24/7 Support"
  ],
  shortDescription: "Understanding Kundali involves finding the Ascendant, understanding the 12 houses representing different facets of life, and noting the planetary positions in each house to gain insights into one’s destiny and qualities of life",
  longDescription: `Kundali Expert Consultation Services offers comprehensive analysis and guidance for one year. For a fee of 10,620/- INR, including GST, clients receive a full Kundali analysis valid for one year. This package includes four consultations: the first via telephone, video call, or personal consultation lasting 45 minutes, and three follow-up telephonic consultations, each lasting 20 minutes. Clients can ask unlimited questions and will receive customized horoscopes with daily, weekly, and monthly reports, as well as all Rashi Parivartan reports.`,
  reviews: [
    { id: 1, name: "Prateek", date: "23/05/2025", rating: 5, text: "Good session" },
    { id: 2, name: "Prateek", date: "23/05/2025", rating: 5, text: "Good session" },
    { id: 3, name: "Prateek", date: "23/05/2025", rating: 5, text: "Good session" }
  ],
  ratingDistribution: [
    { stars: 5, percentage: 66.7 },
    { stars: 4, percentage: 100 },
    { stars: 3, percentage: 90 },
    { stars: 2, percentage: 95 },
    { stars: 1, percentage: 40 }
  ],
  faqs: [
    {
      id: 1,
      question: "What does the package for 6018/- INR include?",
      answer: "It includes one or two questions consultation valid for one year. Four consultations in total: one 15-minute telephonic call and three 15-minute follow-up telephonic consultations."
    },
    {
      id: 2,
      question: "What additional benefits are provided with this package?",
      answer: "You will receive a customized horoscope. Daily, weekly, and monthly horoscope reports are included. All Rashi Parivartan reports are also provided."
    },
    {
      id: 3,
      question: "How long is the validity of the package?",
      answer: "The package is valid for one year from the date of purchase."
    },
    {
      id: 4,
      question: "How are the consultations conducted?",
      answer: "The first consultation is conducted via a 15-minute telephonic call. Follow-up consultations are also conducted via telephonic calls, each lasting 15 minutes."
    }
  ]
}

export default consultationDetail