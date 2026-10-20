import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ConsultationSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  totalDebt: number;
  lenderNames: string;
  situation: 'calls_harassment' | 'home_visits' | 'legal_notice' | 'drt_court' | 'want_settlement';
  notes?: string;
  createdAt: string;
  status: 'Pending Legal Review' | 'Shield Assigned' | 'In Discussion';
}

export interface HarassmentIncident {
  id: string;
  date: string;
  time: string;
  bankName: string;
  agentPhoneOrName: string;
  typeOfViolation: 'outside_hours' | 'abusive_language' | 'called_family' | 'home_threat' | 'workplace_visit' | 'other';
  description: string;
  loggedAt: string;
}

export interface SavedSettlementPlan {
  id: string;
  loanName: string;
  originalDebt: number;
  estimatedSettlement: number;
  estimatedSavings: number;
  monthlySavingsTarget: number;
  targetMonths: number;
  createdAt: string;
}

interface AppContextType {
  consultations: ConsultationSubmission[];
  addConsultation: (item: Omit<ConsultationSubmission, 'id' | 'createdAt' | 'status'>) => string;
  removeConsultation: (id: string) => void;
  harassmentIncidents: HarassmentIncident[];
  addHarassmentIncident: (item: Omit<HarassmentIncident, 'id' | 'loggedAt'>) => string;
  removeHarassmentIncident: (id: string) => void;
  savedPlans: SavedSettlementPlan[];
  saveSettlementPlan: (plan: Omit<SavedSettlementPlan, 'id' | 'createdAt'>) => string;
  removeSettlementPlan: (id: string) => void;
  bookmarkedArticles: string[];
  toggleBookmarkArticle: (slug: string) => void;
  isArticleBookmarked: (slug: string) => boolean;
  searchHistory: string[];
  addSearchQuery: (q: string) => void;
  clearSearchHistory: () => void;
  isEmergencyBannerDismissed: boolean;
  dismissEmergencyBanner: () => void;
  clearAllLocalData: () => void;
}

const STORAGE_KEYS = {
  CONSULTATIONS: 'settlelawers_consultations_v1',
  INCIDENTS: 'settlelawers_incidents_v1',
  PLANS: 'settlelawers_plans_v1',
  BOOKMARKS: 'settlelawers_bookmarks_v1',
  SEARCH: 'settlelawers_search_history_v1',
  EMERGENCY_BANNER: 'settlelawers_banner_dismissed_v1',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

function safeGetStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.warn(`Error reading localStorage for key "${key}":`, err);
    return fallback;
  }
}

function safeSetStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Error setting localStorage for key "${key}":`, err);
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consultations, setConsultations] = useState<ConsultationSubmission[]>(() =>
    safeGetStorage<ConsultationSubmission[]>(STORAGE_KEYS.CONSULTATIONS, [
      {
        id: 'demo-cons-01',
        name: 'Aman Kumar',
        phone: '+91 98765 43210',
        email: 'aman.kumar@example.com',
        city: 'New Delhi',
        totalDebt: 950000,
        lenderNames: 'HDFC Bank, ICICI Bank, Bajaj Finserv',
        situation: 'calls_harassment',
        notes: 'Recovery agents calling repeatedly before 8 AM. Need legal call diversion.',
        createdAt: '2026-10-18T10:30:00.000Z',
        status: 'Shield Assigned',
      },
    ])
  );

  const [harassmentIncidents, setHarassmentIncidents] = useState<HarassmentIncident[]>(() =>
    safeGetStorage<HarassmentIncident[]>(STORAGE_KEYS.INCIDENTS, [
      {
        id: 'demo-inc-01',
        date: '2026-10-19',
        time: '21:15',
        bankName: 'Private FinTech NBFC',
        agentPhoneOrName: 'Recovery Agent Vikram',
        typeOfViolation: 'outside_hours',
        description: 'Received threatening WhatsApp call at 9:15 PM threatening to contact office HR.',
        loggedAt: '2026-10-19T15:45:00.000Z',
      },
    ])
  );

  const [savedPlans, setSavedPlans] = useState<SavedSettlementPlan[]>(() =>
    safeGetStorage<SavedSettlementPlan[]>(STORAGE_KEYS.PLANS, [
      {
        id: 'demo-plan-01',
        loanName: 'Credit Cards & Personal Loan Consolidation',
        originalDebt: 1200000,
        estimatedSettlement: 540000,
        estimatedSavings: 660000,
        monthlySavingsTarget: 90000,
        targetMonths: 6,
        createdAt: '2026-10-18T14:20:00.000Z',
      },
    ])
  );

  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>(() =>
    safeGetStorage<string[]>(STORAGE_KEYS.BOOKMARKS, ['what-to-do-when-recovery-agents-visit-home'])
  );

  const [searchHistory, setSearchHistory] = useState<string[]>(() =>
    safeGetStorage<string[]>(STORAGE_KEYS.SEARCH, ['RBI 7pm rule', 'Section 138 defense'])
  );

  const [isEmergencyBannerDismissed, setIsEmergencyBannerDismissed] = useState<boolean>(() =>
    safeGetStorage<boolean>(STORAGE_KEYS.EMERGENCY_BANNER, false)
  );

  // Sync state to localStorage
  useEffect(() => {
    safeSetStorage(STORAGE_KEYS.CONSULTATIONS, consultations);
  }, [consultations]);

  useEffect(() => {
    safeSetStorage(STORAGE_KEYS.INCIDENTS, harassmentIncidents);
  }, [harassmentIncidents]);

  useEffect(() => {
    safeSetStorage(STORAGE_KEYS.PLANS, savedPlans);
  }, [savedPlans]);

  useEffect(() => {
    safeSetStorage(STORAGE_KEYS.BOOKMARKS, bookmarkedArticles);
  }, [bookmarkedArticles]);

  useEffect(() => {
    safeSetStorage(STORAGE_KEYS.SEARCH, searchHistory);
  }, [searchHistory]);

  useEffect(() => {
    safeSetStorage(STORAGE_KEYS.EMERGENCY_BANNER, isEmergencyBannerDismissed);
  }, [isEmergencyBannerDismissed]);

  const addConsultation = (item: Omit<ConsultationSubmission, 'id' | 'createdAt' | 'status'>): string => {
    const id = `cons-${Date.now()}`;
    const newEntry: ConsultationSubmission = {
      ...item,
      id,
      createdAt: new Date().toISOString(),
      status: 'Pending Legal Review',
    };
    setConsultations((prev) => [newEntry, ...prev]);
    return id;
  };

  const removeConsultation = (id: string) => {
    setConsultations((prev) => prev.filter((c) => c.id !== id));
  };

  const addHarassmentIncident = (item: Omit<HarassmentIncident, 'id' | 'loggedAt'>): string => {
    const id = `inc-${Date.now()}`;
    const newIncident: HarassmentIncident = {
      ...item,
      id,
      loggedAt: new Date().toISOString(),
    };
    setHarassmentIncidents((prev) => [newIncident, ...prev]);
    return id;
  };

  const removeHarassmentIncident = (id: string) => {
    setHarassmentIncidents((prev) => prev.filter((i) => i.id !== id));
  };

  const saveSettlementPlan = (plan: Omit<SavedSettlementPlan, 'id' | 'createdAt'>): string => {
    const id = `plan-${Date.now()}`;
    const newPlan: SavedSettlementPlan = {
      ...plan,
      id,
      createdAt: new Date().toISOString(),
    };
    setSavedPlans((prev) => [newPlan, ...prev]);
    return id;
  };

  const removeSettlementPlan = (id: string) => {
    setSavedPlans((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleBookmarkArticle = (slug: string) => {
    setBookmarkedArticles((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isArticleBookmarked = (slug: string) => bookmarkedArticles.includes(slug);

  const addSearchQuery = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setSearchHistory((prev) => [trimmed, ...prev.filter((item) => item.toLowerCase() !== trimmed.toLowerCase())].slice(0, 8));
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  const dismissEmergencyBanner = () => {
    setIsEmergencyBannerDismissed(true);
  };

  const clearAllLocalData = () => {
    setConsultations([]);
    setHarassmentIncidents([]);
    setSavedPlans([]);
    setBookmarkedArticles([]);
    setSearchHistory([]);
    Object.values(STORAGE_KEYS).forEach((k) => {
      try {
        localStorage.removeItem(k);
      } catch (e) {
        // ignore
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        consultations,
        addConsultation,
        removeConsultation,
        harassmentIncidents,
        addHarassmentIncident,
        removeHarassmentIncident,
        savedPlans,
        saveSettlementPlan,
        removeSettlementPlan,
        bookmarkedArticles,
        toggleBookmarkArticle,
        isArticleBookmarked,
        searchHistory,
        addSearchQuery,
        clearSearchHistory,
        isEmergencyBannerDismissed,
        dismissEmergencyBanner,
        clearAllLocalData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
