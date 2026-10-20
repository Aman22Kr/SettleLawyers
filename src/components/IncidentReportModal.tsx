import React, { useState } from 'react';
import { X, AlertOctagon, CheckCircle2, ShieldCheck, Clock, PhoneCall } from 'lucide-react';
import { useApp, HarassmentIncident } from '../context/AppContext';

interface IncidentReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IncidentReportModal: React.FC<IncidentReportModalProps> = ({ isOpen, onClose }) => {
  const { addHarassmentIncident } = useApp();

  const [bankName, setBankName] = useState('');
  const [agentPhoneOrName, setAgentPhoneOrName] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(() => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  });
  const [typeOfViolation, setTypeOfViolation] = useState<HarassmentIncident['typeOfViolation']>('outside_hours');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bankName.trim() || !agentPhoneOrName.trim()) return;

    addHarassmentIncident({
      bankName: bankName.trim(),
      agentPhoneOrName: agentPhoneOrName.trim(),
      date,
      time,
      typeOfViolation,
      description: description.trim() || 'No additional notes provided.',
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      // Reset
      setBankName('');
      setAgentPhoneOrName('');
      setDescription('');
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AlertOctagon className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-base">Log Recovery Agent Harassment</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Incident Successfully Recorded</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              This violation has been saved to your local browser case dossier. Our legal notice generator can attach this evidence when serving the formal cease & desist notice to the bank.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm">
            <p className="text-xs text-slate-500 leading-relaxed">
              Documenting exact details creates legal leverage under RBI Circular <strong>RBI/2022-23/108</strong>. Your logs remain private in your browser storage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Bank / NBFC Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HDFC / Bajaj / RBL"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Agent Phone / Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 98XXX XXXXX or Name"
                  value={agentPhoneOrName}
                  onChange={(e) => setAgentPhoneOrName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Time of Call / Visit
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Type of Violation
              </label>
              <select
                value={typeOfViolation}
                onChange={(e) => setTypeOfViolation(e.target.value as any)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
              >
                <option value="outside_hours">Called outside 8:00 AM – 7:00 PM hours (RBI violation)</option>
                <option value="abusive_language">Abusive / profane / threatening language</option>
                <option value="called_family">Called relatives / friends / employer without consent</option>
                <option value="home_threat">Doorstep visit without ID / aggressive home behavior</option>
                <option value="workplace_visit">Created scene or visited workplace</option>
                <option value="other">Other regulatory infraction</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Incident Description / Exact Words Used
              </label>
              <textarea
                rows={3}
                placeholder="Describe what the agent said or did, whether audio was recorded, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs"
              >
                Record Incident in Dossier
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
