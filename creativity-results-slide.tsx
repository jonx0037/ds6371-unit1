import React from 'react';
import { Card } from '@/components/ui/card';

const CreativityResults = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        Activity 5: Creativity Study Permutation Test Results
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">Study Overview</h2>
          <div className="space-y-2">
            <p><strong>Research Question:</strong> Does type of motivation affect creativity scores?</p>
            <p><strong>Groups:</strong></p>
            <ul className="list-disc pl-6">
              <li>Intrinsic Motivation (n=24)</li>
              <li>Extrinsic Motivation (n=23)</li>
            </ul>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">Hypotheses</h2>
          <div className="space-y-2">
            <p><strong>H₀:</strong> No difference in mean creativity scores between motivation types</p>
            <p><strong>Hₐ:</strong> Mean creativity scores differ between motivation types</p>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">Test Results</h2>
          <div className="space-y-2">
            <p><strong>Observed Difference:</strong> 4.1442</p>
            <p className="text-sm">(Intrinsic minus Extrinsic)</p>
            <p><strong>P-value:</strong> 0.0058</p>
            <p><strong>Permutations:</strong> 10,000</p>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">Statistical Conclusion</h2>
          <div className="space-y-2">
            <p>At α = 0.05, reject H₀</p>
            <p className="text-sm mt-2">There is significant evidence of a difference in mean creativity scores between intrinsic and extrinsic motivation groups.</p>
          </div>
        </Card>

        <Card className="p-4 md:col-span-2">
          <h2 className="text-lg font-semibold mb-3">Context & Interpretation</h2>
          <div className="space-y-2">
            <ul className="list-disc pl-6">
              <li>Intrinsic motivation group scored higher on average (positive difference)</li>
              <li>Very small p-value (0.0058) indicates strong evidence against H₀</li>
              <li>Results based on 10,000 random permutations of group labels</li>
              <li>Analysis does not rely on normality assumption</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreativityResults;