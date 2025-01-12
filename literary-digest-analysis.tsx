import React from 'react';
import { Card } from '@/components/ui/card';

const LiteraryDigestAnalysis = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Literary Digest Poll Analysis (1936)</h2>
      
      <div className="space-y-4">
        <section>
          <h3 className="font-semibold text-lg mb-2">Population of Interest</h3>
          <p className="text-gray-800">The desired population was all eligible American voters who would participate in the 1936 presidential election.</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Actual Sampled Population</h3>
          <p className="text-gray-800">The magazine sampled from a much wealthier subset of Americans:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Magazine subscribers (likely higher income and education)</li>
            <li>Phone owners (during Great Depression, phones were luxury items)</li>
            <li>Car owners (automobiles were also indicators of wealth in 1936)</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Key Issues</h3>
          <p className="text-gray-800">This created significant sampling bias because:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Sample was not representative of general voting population</li>
            <li>Wealthier Americans tended to favor Republican candidate Landon</li>
            <li>Poll missed many lower-income voters who supported Roosevelt</li>
            <li>Large sample size (1 in 4 Americans) didn't correct for biased sampling frame</li>
          </ul>
        </section>
      </div>
    </Card>
  );
};

export default LiteraryDigestAnalysis;