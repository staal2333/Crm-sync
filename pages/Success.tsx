import React from 'react';
import { CheckCircle2, Download, ArrowRight, Mail } from 'lucide-react';
import { Button } from '../components/Shared';

export const Success: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl text-center">
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-dark">
            Payment Successful!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for subscribing to CRMSYNC. Your account has been upgraded.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg text-left">
            <h3 className="font-semibold text-blue-900 flex items-center text-sm mb-2">
              <Download className="h-4 w-4 mr-2" />
              Next Steps
            </h3>
            <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1 ml-1">
              <li>If you haven't already, install the extension.</li>
              <li>Open Gmail and sign in with this email.</li>
              <li>Your Pro/Business features are now active!</li>
            </ol>
          </div>

          <Button className="w-full" onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}>
            Download Extension
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="text-xs text-gray-500 mt-4">
            Need help? <a href="mailto:support@crmsync.com" className="text-primary hover:underline">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};
