import React from 'react';
import { Card } from '@/components/ui/card';

const CreativityResults = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        Impact of Motivation Type on Creativity Scores: Study Results
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">Key Finding</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p><strong>Mean Score Difference:</strong> 4.1442 points higher in intrinsic group</p>
            <p><strong>Statistical Significance:</strong> p = 0.0058</p>
            <p className="mt-2 text-sm">Based on 10,000 permutations</p>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">Study Groups</h2>
          <div className="space-y-2">
            <p><strong>Intrinsic Motivation (n=24)</strong></p>
            <ul className="list-disc pl-6">
              <li>Inner drive and personal interest</li>
              <li>Mean score: {(15.9 + 4.1442).toFixed(2)}</li>
            </ul>
            <p className="mt-2"><strong>Extrinsic Motivation (n=23)</strong></p>
            <ul className="list-disc pl-6">
              <li>External rewards and incentives</li>
              <li>Mean score: 15.90</li>
            </ul>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">Statistical Analysis</h2>
          <div className="space-y-2">
            <p><strong>Method:</strong> Permutation Test</p>
            <ul className="list-disc pl-6">
              <li>Observed difference: 4.1442</li>
              <li>P-value: 0.0058 (highly significant)</li>
              <li>Test conducted at α = 0.05 level</li>
            </ul>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">Interpretation</h2>
          <div className="space-y-2">
            <ul className="list-disc pl-6">
              <li>Strong evidence for motivation effect</li>
              <li>Less than 1% chance of random occurrence</li>
              <li>Consistent, measurable impact</li>
            </ul>
          </div>
        </Card>

        <Card className="p-4 md:col-span-2">
          <h2 className="text-lg font-semibold mb-3">Business Implications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Key Takeaways:</p>
              <ul className="list-disc pl-6">
                <li>Intrinsic motivation significantly improves creativity</li>
                <li>Effect size of ~4 points represents meaningful improvement</li>
                <li>Results are statistically robust and reliable</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Recommendations:</p>
              <ul className="list-disc pl-6">
                <li>Foster environments that promote internal motivation</li>
                <li>Consider redesigning reward structures</li>
                <li>Balance extrinsic incentives with intrinsic motivators</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreativityResults;