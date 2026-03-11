export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  screenshots: string[];
  video?: string;
  channels?: string[];
  status: "Production" | "Prototype" | "Graduation Project" | "Nanodegree Project";
  github?: string;
  demo?: string;
  huggingface?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    slug: "ai-radar",
    title: "AI Radar — Competitor Intelligence Platform",
    category: "Full-Stack AI",
    tagline: "One platform, 6 channels — brand & competitor intelligence for as little as $2",
    description:
      "Enter any brand or competitor name and AI Radar scans YouTube, TikTok, Instagram, X, Play Store & App Store — collecting real comments and reviews, then running a 4-stage analysis pipeline to deliver structured reports with strengths, weaknesses, and blind spots per channel. Works for own-brand monitoring and competitive analysis. Deployed in production for a multinational EdTech company across 3 languages.",
    problem:
      "Monitoring brand perception and competitor activity across 6+ platforms requires expensive tools and manual effort. Insights arrive fragmented and stale — marketing, product, and leadership each see a different piece.",
    solution:
      "One input, one report. AI Radar scrapes all 6 channels, classifies sentiment, extracts patterns, and synthesizes strategic takeaways. What used to cost $500+ in scattered tools can now be done for as cheap as $2.",
    impact:
      "Replaced $500+ in tool subscriptions with ~$2 per research cycle. Marketing benchmarks campaigns, product teams prioritize based on real user pain points, and executives get a single-page brief — across 3 languages and 2 regions.",
    metrics: [
      { label: "Solution", value: "6-in-1" },
      { label: "Cost / Cycle", value: "~$2" },
      { label: "Hours Saved", value: "40+" },
    ],
    techStack: [
      "Python",
      "FastAPI",
      "GPT-4o",
      "Apify",
      "React",
      "Vite",
      "Three.js",
      "Railway",
    ],
    screenshots: Array.from({ length: 16 }, (_, i) => `/screenshots/ai-radar/${i + 1}.png`),
    channels: ["YouTube", "TikTok", "Instagram", "X", "Play Store", "App Store"],
    status: "Production",
  },
  {
    slug: "arabic-asr-eou-detector",
    title: "Arabic ASR End-of-Utterance Detector",
    category: "LLM Fine-tuning",
    tagline: "Know exactly when an Arabic speaker is done talking — in 50–100ms",
    description:
      "LoRA-fine-tuned Qwen2-0.5B on 57K+ Saudi Arabic utterances from the SADA 2022 corpus to detect end-of-utterance in real time. Handles Gulf dialect edge cases — hesitations like 'اممم' vs closures like 'شكرا'. Published model and dataset on Hugging Face, and packaged the whole thing as a drop-in LiveKit SDK plugin for production voice agents.",
    problem:
      "LiveKit's turn detector has zero Arabic support — voice agents interrupt mid-sentence or wait too long, killing the conversational flow for Arabic-speaking users.",
    solution:
      "LoRA-fine-tuned Qwen2-0.5B on 57,475 Arabic utterances (complete, truncated, and edge cases), then packaged it as a reusable LiveKit plugin with configurable thresholds for production deployment.",
    impact:
      "Achieved 84.6% accuracy with 50–100ms latency in production inference, enabling natural real-time Arabic conversations in production voice agents. Model and dataset both open-sourced on Hugging Face.",
    metrics: [
      { label: "Inference Acc.", value: "84.6%" },
      { label: "Latency", value: "50–100ms" },
      { label: "Training Samples", value: "57K+" },
    ],
    techStack: [
      "Qwen2-0.5B",
      "LoRA",
      "LiveKit",
      "Hugging Face",
      "Python",
      "LLaMA Factory",
    ],
    screenshots: [],
    video: "/videos/arabic-asr-demo.mp4",
    huggingface: "https://huggingface.co/Moustafa3092/livekit-turn-detector-arabic",
    github: "https://github.com/Moustafa-abdelsattar/livkit_eou",
    status: "Prototype",
  },
  {
    slug: "campaign-automation",
    title: "Social Media Campaign Automation",
    category: "Full-Stack AI",
    tagline: "Smart assistant that ran a 5-week social media giveaway across 3 platforms for Egypt's most popular patisserie (+5M followers) — fully automated",
    description:
      "Built a production system to manage a 5-week social media giveaway across Facebook, Instagram, and TikTok for one of Egypt's most known patisserie brands (+5M followers). The bot fetches comments in real time via webhooks, validates answers using GPT-4, auto-replies publicly with engagement messages, sends winners their promo codes via DM, and sends retry messages to incorrect answers. A live dashboard tracks winners, comment volume per platform, and campaign performance week by week.",
    problem:
      "Running a multi-week giveaway across 3 social platforms for a brand with millions of followers means thousands of comments to read, answers to verify, winners to notify, and codes to distribute — all manually. The team couldn't keep up, and response times killed engagement.",
    solution:
      "Webhook-driven pipeline that processes comments from Facebook, Instagram, and TikTok in real time. GPT-4 validates answers (handling Arabic misspellings, slang, and mixed languages), a concurrency engine handles 20+ comments simultaneously, and the system auto-distributes unique promo codes to winners while replying publicly to drive more engagement. Weekly answer rotation and new-week detection are fully automated.",
    impact:
      "Handled thousands of comments across 5 weeks with zero manual moderation. Winners received promo codes within seconds of commenting. The live dashboard gave the marketing team real-time visibility into campaign performance per platform.",
    metrics: [
      { label: "Platforms", value: "3" },
      { label: "Duration", value: "5 Weeks" },
      { label: "Moderation", value: "Zero Manual" },
    ],
    techStack: ["Python", "FastAPI", "GPT-4", "Meta APIs", "Webhooks", "asyncio", "aiohttp"],
    screenshots: [],
    channels: ["Facebook", "Instagram", "TikTok"],
    status: "Production",
  },
  {
    slug: "venue-booking-assistant",
    title: "Venue Booking AI Assistant",
    category: "AI Chatbot",
    tagline: "RAG-powered chatbot that recommends venues, handles bookings, and captures leads across web and social",
    description:
      "Developed a RAG-powered AI assistant that helps users find and book venues through natural conversation. The bot uses FAISS vector search and cross-encoder reranking over a venue database to retrieve the most relevant options based on user preferences (activity type, location, date, group size), then guides them through booking — all via Facebook Messenger and web. Includes an order capture flow and automated comment replies on social posts.",
    problem:
      "Venue discovery and booking relied on manual back-and-forth between customers and staff. Users had to browse listings, call to check availability, and wait for responses — leading to lost leads and slow conversions.",
    solution:
      "LangGraph-powered conversational agent with tool-calling that extracts user preferences (location, activity, date, group size) through natural dialogue, searches a FAISS-indexed venue database with semantic matching and cross-encoder reranking, and handles the full booking flow — from recommendation to order capture — via Messenger and web.",
    impact:
      "Streamlined venue discovery from minutes of browsing to a single conversation. Automated lead capture and booking reduced response time and freed staff from repetitive inquiries.",
    metrics: [
      { label: "Response Time", value: "<3s" },
      { label: "Venues Indexed", value: "2,000+" },
      { label: "Staff Hours Saved", value: "25+/wk" },
    ],
    techStack: ["Python", "LangGraph", "LangChain", "RAG", "FAISS", "Quart", "Meta APIs", "HuggingFace Embeddings"],
    screenshots: [],
    channels: ["Messenger", "Web"],
    status: "Production",
  },
  {
    slug: "clinic-ai-assistant",
    title: "Healthcare Clinic AI Assistant",
    category: "Full-Stack AI",
    tagline: "AI assistant that handles patient inquiries, books appointments, and sends WhatsApp confirmations — in Italian and English",
    description:
      "Built a full-stack AI system for an Italian healthcare clinic that answers patient questions in Italian and English using RAG over the clinic's website content, checks real-time appointment availability by scraping the booking system, and captures leads (name, email, phone). On booking, the system triggers WhatsApp notifications for confirmations, rescheduling, and cancellations. Includes a real-time admin dashboard to monitor users, live chats, bookings, and key metrics — with an on/off switch to enable or disable the bot instantly.",
    problem:
      "Clinic staff spent hours daily answering the same patient questions, checking appointment slots manually, and following up on bookings via phone — leading to missed leads and long wait times.",
    solution:
      "LangGraph agent with tool-calling that extracts patient info, searches a FAISS-indexed knowledge base for clinic FAQs, scrapes live booking availability, and handles the full appointment flow. WhatsApp Business API sends automated confirmations and reminders. Every interaction is logged to Google Sheets for the admin team.",
    impact:
      "Patients get instant answers and can book appointments 24/7 without calling. Staff no longer handle routine inquiries. WhatsApp confirmations reduced no-shows and the admin dashboard gives full visibility into leads and conversations.",
    metrics: [
      { label: "Availability", value: "24/7" },
      { label: "Response Time", value: "<3s" },
      { label: "Languages", value: "IT / EN" },
    ],
    techStack: ["Python", "LangGraph", "LangChain", "RAG", "FAISS", "GPT-4", "FastAPI", "WhatsApp API"],
    screenshots: [],
    channels: ["Web", "WhatsApp"],
    status: "Production",
  },
  {
    slug: "disaster-response-pipeline",
    title: "Disaster Response Pipeline from Appen",
    category: "Classical ML",
    tagline: "Categorized emergency messages using NLP — 78% F1, 91% precision",
    description:
      "Data Science Nanodegree project at Udacity. Built an end-to-end ETL and ML pipeline that categorizes real emergency messages from Appen into 36 disaster categories. Used TF-IDF for feature extraction and trained Random Forest, Gradient Boosting, and SVM models with imbalanced data handling strategies to optimize classification performance.",
    problem:
      "During disasters, emergency responders receive thousands of messages. Manually categorizing them is too slow — and NLP classification suffers from severe class imbalance and high false-negative risk on critical categories.",
    solution:
      "ETL pipeline to clean and transform raw messages, TF-IDF vectorization, and an ensemble of Random Forest, Gradient Boosting, and SVM classifiers with undersampling to handle imbalanced classes. Deployed as a Flask web app for real-time message classification.",
    impact:
      "Achieved 78% F1-score with 91% precision on critical message categories, enabling faster triage of emergency communications.",
    metrics: [
      { label: "F1-Score", value: "78%" },
      { label: "Precision", value: "91%" },
      { label: "Categories", value: "36" },
    ],
    techStack: [
      "Python",
      "Scikit-learn",
      "NLP",
      "TF-IDF",
      "Random Forest",
      "Gradient Boosting",
      "SVM",
      "ETL",
      "Flask",
    ],
    screenshots: [],
    github: "https://github.com/Moustafa-abdelsattar/Disaster-response-pipeline",
    status: "Nanodegree Project",
  },
  {
    slug: "recommendations-engine",
    title: "Recommendations Engine for IBM Watson Studio",
    category: "RecSys",
    tagline: "Hybrid recommendation engine with SVD",
    description:
      "Data Science Nanodegree project at Udacity. Built a hybrid recommendation engine using rank-based filtering, user–user collaborative filtering, and SVD matrix factorization, with data preprocessing and handling of sparsity and cold-start issues.",
    problem:
      "Content discovery was poor due to inability to learn user preferences from interaction data effectively.",
    solution:
      "Hybrid recommendation engine using rank-based filtering, user–user collaborative filtering, and SVD matrix factorization with cold-start handling.",
    impact:
      "Achieved 98% recommendation accuracy, delivering more relevant and personalized article recommendations.",
    metrics: [
      { label: "Accuracy", value: "98%" },
      { label: "Method", value: "Hybrid SVD" },
      { label: "Cold-start", value: "Handled" },
    ],
    techStack: ["Python", "SVD", "Collaborative Filtering", "Pandas", "NumPy"],
    screenshots: [],
    github: "https://github.com/Moustafa-abdelsattar/IBM-waston-studio-recommendation-engine",
    status: "Nanodegree Project",
  },
  {
    slug: "driver-monitoring-system",
    title: "Driver Monitoring & Lane Departure Warning System",
    category: "Computer Vision",
    tagline: "Real-time driver monitoring and lane departure warning system — mentored by Valeo",
    description:
      "Graduation project mentored by Valeo. Developed a real-time Driver Monitoring System achieving 97% accuracy on low-compute hardware using CNN and VGG16 for driver attention detection. Built a Lane Departure Warning System using classical image processing — Canny Edge Detection and Hough Transform — to detect lane boundaries and assess safe lane departure for parking scenarios.",
    problem:
      "Vehicle safety systems need real-time driver attention monitoring and lane departure detection, but existing solutions require expensive hardware and high compute power.",
    solution:
      "Two-part system: a CNN/VGG16-based driver monitoring module that detects drowsiness, distraction, and attention state in real time, and a lane departure module using Canny edge detection and Hough Transform to identify lane boundaries and warn on unsafe departures — all optimized for low-compute environments.",
    impact:
      "Achieved 97% accuracy in real-time driver monitoring on constrained hardware. Demonstrated at the Valeo Tech Talents Demo Fair as a viable low-cost vehicle integration solution.",
    metrics: [
      { label: "Accuracy", value: "97%" },
      { label: "Processing", value: "Real-time" },
      { label: "Mentor", value: "Valeo" },
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "VGG16",
      "CNN",
      "OpenCV",
      "Mediapipe",
      "Scikit-learn",
    ],
    screenshots: [],
    status: "Graduation Project",
  },
];

export const experiences: Experience[] = [
  {
    role: "AI Engineer",
    company: "51Talk",
    period: "Jan 2025 – Present",
    location: "Cairo, Egypt",
    bullets: [
      "Built AI Radar, a centralized platform tracking customer reviews and engagement across 6 social media platforms, automating performance reporting and insights generation.",
      "Developed an end-to-end ML pipeline to process customer service calls (speech-to-text, sentiment analysis, labeling, and tagging) to enhance quality monitoring and data-driven decisions.",
      "Contributed to building a voice assistant agent that proactively calls customers with automated class reminders, improving operational efficiency and engagement.",
      "Partnered with Sales, Marketing, and HR to design and deploy AI-driven automation solutions that reduced manual reporting effort and operational costs.",
    ],
  },
  {
    role: "AI Engineer",
    company: "HumAI",
    period: "Mar 2024 – Jan 2025",
    location: "Remote, Egypt",
    bullets: [
      "Built a smart assistant for a social media campaign across Facebook, Instagram, and TikTok that replied to comments and DMs, validated user answers, and distributed rewards.",
      "Developed AI assistants for venue booking and healthcare platforms that recommend locations, manage reservations, and schedule patient appointments.",
      "Integrated live dashboards into these systems to help clients track campaign performance and incoming leads in real time without manual reporting.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Applied AI & LLM Development",
    skills: [
      "LLMs",
      "RAG",
      "Fine-tuning (LoRA/QLoRA)",
      "Prompt Engineering",
      "Embeddings",
      "Sentence Transformers",
      "AI Agents (CrewAI)",
      "MCPs",
      "ASR Pipelines (STT/TTS)",
      "NLP",
      "LangChain",
      "LangGraph",
      "Classical ML",
      "Claude Code CLI",
    ],
  },
  {
    title: "Backend, Data & UI Development",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "Vector Databases (FAISS)",
      "ETL",
      "Git",
      "META APIs",
      "React",
    ],
  },
  {
    title: "Deployment & AI Operations",
    skills: [
      "Railway",
      "Docker",
      "AWS",
      "LLMOps (LangSmith, Langfuse)",
    ],
  },
];

export const certifications = [
  { name: "Valeo Tech Talents Demo Fair", issuer: "Valeo" },
  { name: "Data Science Nanodegree", issuer: "Udacity" },
  { name: "Applied Data Science Lab", issuer: "WorldQuant University" },
  { name: "Google Data Analytics", issuer: "Google" },
];
