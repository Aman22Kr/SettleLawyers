export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  badge: string;
  features: string[];
  legalFramework: string;
  imageKey: 'serviceHarassment' | 'serviceCourtDefense' | 'serviceDebtSettlement';
}

export interface LoanCategory {
  id: string;
  name: string;
  avgSavings: string;
  timeframe: string;
  description: string;
  commonIssues: string[];
}

export interface CaseStudy {
  id: string;
  clientInitials: string;
  city: string;
  lenderType: string;
  originalDebt: number;
  settledAmount: number;
  savingsPercentage: number;
  durationMonths: number;
  caseType: string;
  outcomeNote: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'RBI Guidelines' | 'Anti-Harassment' | 'Legal Defense' | 'Debt Settlement';
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface RbiRule {
  id: string;
  number: string;
  title: string;
  summary: string;
  officialCircular: string;
  actionableStep: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Anti-Harassment' | 'Settlement' | 'Legal';
}

export const BRAND_INFO = {
  name: 'SettleLawers',
  tagline: 'Legal Debt Settlement & Anti-Harassment Shield',
  subtitle: 'Defending borrowers against abusive recovery while negotiating legitimate RBI-backed one-time settlements.',
  phone: '+91 93115 75745',
  helpline: '+91 93115 75746',
  email: 'support@settlelawers.com',
  address: 'Commercial Block A, Yusuf Sarai, Green Park, South Delhi, 110016',
  hours: 'Mon – Sat: 9:30 AM – 7:00 PM (Emergency Call Shield 24/7)',
  experienceYears: '12+',
  casesResolved: '9,450+',
  totalDebtSettled: '₹48+ Cr',
  avgSavings: '55%',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'anti-harassment',
    slug: 'anti-harassment',
    title: 'Anti-Harassment Shield',
    shortDesc: 'Immediate cessation of aggressive recovery agent visits, threatening WhatsApp messages, and non-stop phone calls.',
    longDesc: 'When debt defaults occur, third-party recovery agents frequently violate RBI fair practice codes through unannounced home visits, abusive language, and contacting relatives or employers. SettleLawers activates an immediate legal shield: we serve formal legal representation notices to lending banks, divert creditor communications through our legal desk, and deploy police & ombudsman complaints if harassment persists.',
    badge: 'Immediate Protection',
    features: [
      'Formal Cease & Desist notices dispatched to bank nodal officers',
      'Legal call diversion protocol to route recovery agents to our advocates',
      'Legal helpline support for unexpected doorstep recovery visits',
      'Filing criminal intimidation complaints under IPC / Bharatiya Nyaya Sanhita where warranted',
      'Strict enforcement of RBI 8:00 AM – 7:00 PM contact boundary rules',
    ],
    legalFramework: 'RBI Master Circular on Recovery Agents & Fair Practices Code (RBI/2022-23/108)',
    imageKey: 'serviceHarassment',
  },
  {
    id: 'legal-defense',
    slug: 'legal-defense',
    title: 'Legal Protection Shield',
    shortDesc: 'Senior advocate defense against Section 138 cheque bounce, Section 25 PSSA, Lok Adalat, and civil summary suits.',
    longDesc: 'Lending institutions often initiate punitive legal proceedings to pressurize defaulted borrowers. SettleLawers provides seasoned court advocates who represent you before Magistrates, Civil Courts, Debt Recovery Tribunals (DRT), and Arbitrators. We examine the veracity of loan claims, draft rigorous replies to demand notices, and prevent ex-parte recovery orders.',
    badge: 'Court & Tribunal Defense',
    features: [
      'Comprehensive reply drafting to formal legal notices within statutory deadlines',
      'Defense in Section 138 Negotiable Instruments Act (Cheque Bounce) matters',
      'Defense in Section 25 Payment and Settlement Systems Act (NACH/e-Mandate bounce)',
      'Representation in Arbitral proceedings and quashing unilateral awards',
      'Strategic representation during Lok Adalat settlement sessions',
    ],
    legalFramework: 'Negotiable Instruments Act 1881 & Arbitration & Conciliation Act 1996',
    imageKey: 'serviceCourtDefense',
  },
  {
    id: 'loan-settlement',
    slug: 'loan-settlement',
    title: 'Loan Settlement Shield',
    shortDesc: 'Strategic RBI-compliant One-Time Settlement (OTS) negotiations to eliminate unpaid debt for 40%–60% of outstanding.',
    longDesc: 'Accumulated compound interest, penal charges, and processing fees inflate delinquent loan balances beyond repayment capability. Our financial attorneys negotiate directly with bank credit committees under RBI prudential settlement frameworks. We secure a legally binding Settlement Sanction Letter, manage escrow savings, and ensure the bank delivers an unconditional No Dues Certificate (NDC).',
    badge: '40% – 60% Reduction',
    features: [
      'Direct bilateral negotiation with bank authorized settlement committees',
      'Waiver of exorbitant late charges, compounding interest, and penalty penalties',
      'Structured installment payment schedules for agreed OTS balances',
      'Verification of official bank seal & sanction letter authenticity before payment',
      'Issuance of formal No Dues Certificate (NDC) and closure of loan account',
    ],
    legalFramework: 'RBI Prudential Framework for Resolution of Stressed Assets (June 7, 2019 Circular)',
    imageKey: 'serviceDebtSettlement',
  },
];

export const LOAN_CATEGORIES: LoanCategory[] = [
  {
    id: 'credit-card',
    name: 'Credit Card Debt',
    avgSavings: '50% – 70%',
    timeframe: '2 to 4 Months',
    description: 'Unsecured credit card balances carry crippling 42%–48% annual APRs. We freeze compounding charges and settle principal debt.',
    commonIssues: ['Relentless collection calls', 'Threats of civil arrest', 'High compounding finance charges'],
  },
  {
    id: 'personal-loan',
    name: 'Unsecured Personal Loans',
    avgSavings: '45% – 60%',
    timeframe: '3 to 6 Months',
    description: 'Personal loans from major scheduled commercial banks and NBFCs resolved via formal compromise settlement agreements.',
    commonIssues: ['Section 25 NACH mandate notices', 'Recovery agent home visits', 'Workplace contact harassment'],
  },
  {
    id: 'fintech-apps',
    name: 'Digital Lending & FinTech Apps',
    avgSavings: '55% – 75%',
    timeframe: '1 to 3 Months',
    description: 'Defending borrowers trapped in predatory short-term app loans and instant digital credit with extortionate terms.',
    commonIssues: ['Contact book hacking threats', 'Morphed photo blackmail', 'Unregistered Chinese loan apps'],
  },
  {
    id: 'business-loan',
    name: 'MSME & Business Loans',
    avgSavings: '40% – 55%',
    timeframe: '4 to 8 Months',
    description: 'Working capital and unsecured business debt resolution tailored for proprietors, partnerships, and micro-enterprises.',
    commonIssues: ['Supplier credit panic', 'Arbitration notices', 'Bank account freezing attempts'],
  },
  {
    id: 'auto-vehicle',
    name: 'Auto & Vehicle Loans',
    avgSavings: '35% – 50%',
    timeframe: '2 to 5 Months',
    description: 'Legal intervention to prevent illegal vehicle repossessions by hired musclemen without court orders.',
    commonIssues: ['Forcible vehicle seizure on roads', 'Tow-away threats', 'Asset auction notices'],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    clientInitials: 'R. K.',
    city: 'New Delhi',
    lenderType: '2 Private Banks (Cards & Personal Loan)',
    originalDebt: 1480000,
    settledAmount: 560000,
    savingsPercentage: 62,
    durationMonths: 4,
    caseType: 'Credit Card & Personal Loan Settlement',
    outcomeNote: 'Ceased 45+ daily recovery calls in 48 hours. Secured written settlement sanction letter and dual No Dues Certificates.',
  },
  {
    id: 'case-02',
    clientInitials: 'P. M.',
    city: 'Bengaluru',
    lenderType: 'Leading NBFC',
    originalDebt: 850000,
    settledAmount: 380000,
    savingsPercentage: 55,
    durationMonths: 3,
    caseType: 'Sec 138 Legal Notice Defense & OTS',
    outcomeNote: 'Defended Section 138 cheque bounce notice with reply showing procedural defects. Reached OTS before formal Magistrate filing.',
  },
  {
    id: 'case-03',
    clientInitials: 'A. S.',
    city: 'Mumbai',
    lenderType: '3 Digital Lending FinTechs',
    originalDebt: 520000,
    settledAmount: 195000,
    savingsPercentage: 63,
    durationMonths: 2,
    caseType: 'Anti-Harassment & App Loan Resolution',
    outcomeNote: 'Filed formal cyber-cell and RBI Ombudsman complaint against abusive recovery agents; settled remaining principal within 60 days.',
  },
  {
    id: 'case-04',
    clientInitials: 'S. N.',
    city: 'Pune',
    lenderType: 'Commercial Bank MSME Credit',
    originalDebt: 2200000,
    settledAmount: 990000,
    savingsPercentage: 55,
    durationMonths: 5,
    caseType: 'Business Loan Compromise Settlement',
    outcomeNote: 'Negotiated staggered 3-month payment plan with Zonal Credit Committee; secured clean account release without asset attachment.',
  },
];

export const RBI_RULES: RbiRule[] = [
  {
    id: 'rbi-1',
    number: '01',
    title: 'Strict Time Window for Contact',
    summary: 'Recovery agents cannot call or visit borrowers before 8:00 AM or after 7:00 PM under any circumstances.',
    officialCircular: 'RBI/2022-23/108 DOR.ORG.REC.65/21.04.158/2022-23',
    actionableStep: 'Record call timestamp and phone number. Log in SettleLawers incident tracker for immediate formal legal notice.',
  },
  {
    id: 'rbi-2',
    number: '02',
    title: 'Absolute Ban on Intimidation & Verbal Abuse',
    summary: 'Any threat of violence, abusive or derogatory language, or public humiliation is strictly prohibited and constitutes a criminal offense.',
    officialCircular: 'RBI Master Directions on Non-Banking Financial Company - Systemically Important Non-Deposit taking Company',
    actionableStep: 'Keep audio recordings. SettleLawers files Section 503/506 IPC criminal intimidation complaint alongside bank disciplinary summons.',
  },
  {
    id: 'rbi-3',
    number: '03',
    title: 'Privacy & Ban on Contacting Relatives/Employers',
    summary: 'Lenders and agents are strictly forbidden from contacting your friends, family members, or workplace colleagues to disclose debt.',
    officialCircular: 'RBI Fair Practices Code for Lenders - Guidelines on Privacy Protection',
    actionableStep: 'Collect call records of contacted relatives. SettleLawers issues a direct defamation and privacy violation notice to bank headquarters.',
  },
  {
    id: 'rbi-4',
    number: '04',
    title: 'Mandatory Identity Card & Authorization Letter',
    summary: 'Any recovery personnel visiting in person must carry a photo identity card and an official bank-issued authority letter naming the borrower.',
    officialCircular: 'RBI Guidelines on Managing Risks and Code of Conduct in Outsourcing of Financial Services',
    actionableStep: 'Never permit entry into your private residence without inspecting official credentials. Instruct them to communicate only with SettleLawers.',
  },
  {
    id: 'rbi-5',
    number: '05',
    title: 'Borrower Right to Dispute & Transparent Balance Audit',
    summary: 'Borrowers have the statutory right to request a complete breakup of principal, normal interest, and disputed penal charges.',
    officialCircular: 'RBI Guidelines on Fair Lending Practices - Penal Charges in Loan Accounts',
    actionableStep: 'We request an official Account Ledger. Unfair and compounding late fees are scrubbed during compromise settlement negotiations.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'what-to-do-when-recovery-agents-visit-home',
    title: 'What to Do When Bank Recovery Agents Visit Your Home: A Legal Step-by-Step Guide',
    category: 'Anti-Harassment',
    readTime: '6 min read',
    date: 'March 14, 2026',
    excerpt: 'Know your statutory rights when collection agents arrive at your doorstep. Step-by-step instructions on documenting visits and legal remedies.',
    content: [
      'Defaulting on a bank loan or credit card is a civil dispute, never a criminal offense. Under Indian jurisprudence, no police officer or recovery agent can arrest you for genuine financial distress.',
      'According to the Reserve Bank of India (RBI) Master Directions on Fair Practices Code, recovery agents must adhere to strict guidelines. They cannot arrive before 8:00 AM or after 7:00 PM, and they cannot enter your premises without your consent.',
      'Step 1: Always ask the visiting agent for two mandatory documents: an official photo identity card issued by the agency/bank, and the official written Authorization Letter from the bank naming your specific loan account.',
      'Step 2: Remain calm and do not engage in shouting matches. State firmly: "I am represented by legal counsel at SettleLawers. All communications must be routed through my lawyers." Give them our legal desk number.',
      'Step 3: If the agent uses threatening language or refuses to leave, notify them that you are recording the interaction under Section 65B of the Indian Evidence Act. File a police complaint for criminal trespass if they insist on staying.',
    ],
    keyTakeaways: [
      'Debt default is a civil dispute; you cannot be arrested for inability to pay.',
      'Demanding ID proof and bank authorization letter is your legal right.',
      'Harassment at home or workplace violates RBI circular RBI/2022-23/108.',
    ],
  },
  {
    id: 'blog-2',
    slug: 'understanding-rbi-one-time-settlement-guidelines',
    title: 'Understanding RBI One-Time Settlement (OTS) Frameworks: How to Legally Settle for Less',
    category: 'Debt Settlement',
    readTime: '7 min read',
    date: 'February 28, 2026',
    excerpt: 'How commercial banks write off accrued interest and agree to compromise settlements under official RBI Prudential Frameworks.',
    content: [
      'Many borrowers incorrectly believe that banks never negotiate on unpaid balances. In reality, under RBI guidelines on Non-Performing Assets (NPAs), banks are actively incentivized to recover bad debts through compromise settlements (OTS).',
      'When an unsecured account is 90+ days past due, banks must allocate provisioning reserves. Carrying non-recoverable balances damages bank capital adequacy ratios. Hence, bank settlement committees have discretionary authority to waive 40% to 60% of outstanding debt.',
      'The difference between a generic settlement agency and an advocate-led firm like SettleLawers is our ability to scrutinize loan agreements, dispute unfair penal interest, and negotiate from legal strength.',
      'Never transfer settlement funds without inspecting an authentic, digitally verified Settlement Sanction Letter issued directly by the bank on official letterhead.',
    ],
    keyTakeaways: [
      'Banks have official OTS committees authorized to waive late fees and interest.',
      'Unsecured credit cards and personal loans typically settle for 40% to 55% of outstanding.',
      'Always secure the written bank sanction letter prior to making the final payment.',
    ],
  },
  {
    id: 'blog-3',
    slug: 'section-138-cheque-bounce-notice-defense',
    title: 'Received a Section 138 Cheque Bounce Notice? Here Is How Our Advocates Respond',
    category: 'Legal Defense',
    readTime: '8 min read',
    date: 'February 12, 2026',
    excerpt: 'Demystifying Section 138 of the Negotiable Instruments Act. Why timely legal replies protect you from warrant issuance and civil penalties.',
    content: [
      'A Section 138 notice under the Negotiable Instruments Act is the most common legal weapon deployed by lenders when security cheques or NACH auto-debit mandates bounce.',
      'You have exactly 15 days from the date of receiving the notice to respond. Failure to respond or formulate a proper legal defense can lead to a formal criminal complaint before the Metropolitan Magistrate court.',
      'Our senior advocates inspect key technical parameters: Was the cheque issued as a blank security cheque rather than for a legally enforceable debt at the time of issuance? Was the demand notice served within the mandatory 30-day window?',
      'Drafting an assertive legal reply dismantles false claims and establishes a solid foundation for mediation and an amicable one-time settlement.',
    ],
    keyTakeaways: [
      'Statutory 15-day timeline to respond to Section 138 notices is critical.',
      'Security cheques deposited without prior balance confirmation can be challenged.',
      'A well-drafted legal response often compels the bank to offer Lok Adalat settlement.',
    ],
  },
  {
    id: 'blog-4',
    slug: 'rebuilding-cibil-score-after-loan-settlement',
    title: 'How to Rebuild Your CIBIL Score and Credit Health After a Debt Settlement',
    category: 'RBI Guidelines',
    readTime: '5 min read',
    date: 'January 20, 2026',
    excerpt: 'The truth about "Settled" status in credit bureau reports and the exact 12-month roadmap to restore your creditworthiness.',
    content: [
      'When an account is settled for less than the total outstanding balance, the lending bank reports the account status to credit bureaus (CIBIL, Experian, Equifax, CRIF) as "Settled" or "Post-Writeoff Settled".',
      'While this temporarily lowers your score, it completely halts the monthly "Days Past Due" (DPD) bleed that continuously destroys your credit when accounts are delinquent.',
      'Once your No Dues Certificate is logged with the bureau, the account is marked closed with zero active liability.',
      'You can systematically rebuild your score within 12 to 18 months by taking a secured credit card against a fixed deposit, keeping credit utilization below 25%, and maintaining impeccable repayment on small utility bills.',
    ],
    keyTakeaways: [
      'Settling halts compounding DPD penalties and stops future litigation.',
      'Obtaining and verifying the No Dues Certificate is the mandatory first step.',
      'Secured credit cards allow you to restore 750+ CIBIL score in 12–18 months.',
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Anti-Harassment',
    question: 'How quickly can SettleLawers stop recovery agent calls and home visits?',
    answer: 'Within 24 to 48 hours of onboarding, our advocates serve formal Notices of Legal Representation to the bank nodal officers and recovery desk. Under RBI circulars, once you have appointed legal counsel, lenders must route communications through our office.',
  },
  {
    category: 'Anti-Harassment',
    question: 'Can recovery agents visit my office or call my colleagues and family members?',
    answer: 'Absolutely not. This is a severe violation of the RBI Fair Practices Code and your constitutional right to privacy. SettleLawers immediately lodges complaints with the RBI Ombudsman, bank compliance officers, and relevant cyber crime cells for immediate disciplinary action.',
  },
  {
    category: 'Settlement',
    question: 'How much money can I actually save through a One-Time Settlement (OTS)?',
    answer: 'Depending on the lender, loan category, and aging of default, settlements typically range from 40% to 55% of the total outstanding amount, saving borrowers between 45% and 60%. All exorbitant penal interest and late fees are systematically waived.',
  },
  {
    category: 'Settlement',
    question: 'Do I pay the settlement money to SettleLawers or to the bank?',
    answer: 'You NEVER pay the settlement money to SettleLawers or any agency. Settlement funds are paid DIRECTLY to your own loan account at the lending bank, but ONLY after you and our advocates have verified the bank\'s written, stamped Settlement Sanction Letter.',
  },
  {
    category: 'Legal',
    question: 'What happens if the bank files a court case or sends a Section 138 notice?',
    answer: 'Our panel of Bar Council registered advocates represents you in court, drafts formal replies to demand notices, files appearance memos, and presents your case before the Magistrate or Lok Adalat bench to secure an amicable settlement.',
  },
  {
    category: 'General',
    question: 'How does SettleLawers charge for its legal services?',
    answer: 'We maintain complete transparency with a flat, modest retainer fee divided into predictable monthly milestones. We do not demand surprise percentage commissions or hidden charges.',
  },
];
