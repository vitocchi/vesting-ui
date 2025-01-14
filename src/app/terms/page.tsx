export default function TermsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing or using the Vesting Wallet Explorer (the "Service"), you agree to be bound by these Terms of Use 
            ("Terms"). If you do not agree to these Terms, please do not use the Service.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Disclaimer of Warranties</h2>
          <div className="mb-6">
            <p className="mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND. WE EXPRESSLY DISCLAIM ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The accuracy, completeness, or currency of information displayed on the Service</li>
              <li>The reliability, functionality, or availability of the Service</li>
              <li>The correction of any errors in the Service</li>
              <li>That the Service will meet your specific requirements</li>
            </ul>
            <p className="font-semibold text-gray-800">
              PARTICULARLY IMPORTANT NOTICE: We accept no responsibility or liability for any losses which may be incurred by any person or persons using the whole or part of the contents of the information provided by the Service. 
              We do not accept any liability for any investment decisions or trading made based on the information provided through this Service.
            </p>
          </div>

          <h2 className="text-xl font-semibold mb-4">3. Investment Risks</h2>
          <p className="mb-6">
            Cryptocurrency and blockchain investments involve substantial risk and are not suitable for all investors. 
            Any investment decisions should be made solely based on your own research and judgment. 
            This Service does not provide any investment advice or recommendations.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Limitation of Liability</h2>
          <p className="mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, 
            THE SERVICE, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, DATA, OR OTHER INTANGIBLE LOSSES.
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="mb-6">
            All content, features, and functionality of the Service are owned by us or our licensors and are protected 
            by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold mb-4">6. Modifications to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these Terms at any time without prior notice. Your continued use of the Service 
            following any changes indicates your acceptance of the new Terms.
          </p>

          <h2 className="text-xl font-semibold mb-4">7. Governing Law</h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with the laws of Japan, without regard to its 
            conflict of law provisions.
          </p>

          <div className="mt-8 text-sm text-gray-600">
            Last updated: {new Date().toISOString().split('T')[0]}
          </div>
        </div>
      </div>
    </main>
  );
} 