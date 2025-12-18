import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button, SectionHeader } from '../components/Shared';
import { User, CreditCard, LogOut } from 'lucide-react';

export const Account: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const { user, logout } = useAuth();

  if (!user) {
    onNavigate('login');
    return null;
  }

  // Get tier from either 'tier' or 'plan' field
  const userTier = user.tier || user.plan || 'free';
  const displayTier = userTier.charAt(0).toUpperCase() + userTier.slice(1).toLowerCase();
  
  const getTierBadgeColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'pro':
      case 'professional':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'business':
        return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white';
      case 'enterprise':
        return 'bg-gradient-to-r from-gray-800 to-gray-900 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="My Account" align="left" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Profile Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-dark mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-primary" />
              Profile Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">Full Name</label>
                <div className="mt-1 text-lg text-dark">{user.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Email Address</label>
                <div className="mt-1 text-lg text-dark">{user.email}</div>
              </div>
              <div className="pt-4">
                 <Button variant="outline" size="sm" onClick={() => logout()}>
                   <LogOut className="w-4 h-4 mr-2" />
                   Sign Out
                 </Button>
              </div>
            </div>
          </div>

          {/* Subscription Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-dark mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-secondary" />
              Subscription
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-sm text-gray-500">Current Plan</span>
                <div className={`mt-2 px-4 py-2 rounded-lg text-center ${getTierBadgeColor(userTier)}`}>
                  <div className="text-lg font-bold">
                    {displayTier} {userTier.toLowerCase() !== 'free' ? 'Plan' : 'Tier'}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center uppercase tracking-wide">
                  {user.subscriptionStatus || 'Active'}
                </div>
              </div>
              
              {userTier.toLowerCase() === 'free' && (
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={() => onNavigate('pricing')}
                >
                  Upgrade Plan
                </Button>
              )}
              
              {userTier.toLowerCase() !== 'free' && userTier.toLowerCase() !== 'enterprise' && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('pricing')}
                >
                  Manage Subscription
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};