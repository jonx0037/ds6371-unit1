import React from 'react';
import { Card } from '@/components/ui/card';

const CreativityAnalysis = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Activity 5: Creativity Study Permutation Test</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="font-semibold text-lg mb-2">Study Overview</h3>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="text-gray-800">Testing the effect of motivation type (intrinsic vs. extrinsic) on creativity scores</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Null Hypothesis (H₀): No difference in mean creativity scores between groups</li>
              <li>Alternative Hypothesis (Hₐ): Mean creativity scores differ between groups</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Key Steps in Permutation Test</h3>
          <div className="space-y-3">
            <div className="pl-4 border-l-4 border-green-200">
              <p className="font-medium">1. Calculate Observed Difference</p>
              <p className="text-gray-700">Find mean difference between intrinsic and extrinsic groups</p>
            </div>
            
            <div className="pl-4 border-l-4 border-green-200">
              <p className="font-medium">2. Permutation Process</p>
              <ul className="list-disc pl-6">
                <li>Randomly shuffle motivation labels</li>
                <li>Recalculate mean difference</li>
                <li>Repeat many times (e.g., 10,000)</li>
              </ul>
            </div>
            
            <div className="pl-4 border-l-4 border-green-200">
              <p className="font-medium">3. Calculate P-value</p>
              <p className="text-gray-700">Proportion of permuted differences as extreme as observed</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Implementation Tips</h3>
          <ul className="space-y-2 text-gray-800">
            <li>➊ Review the provided R/SAS code carefully</li>
            <li>➋ Run code multiple times to understand output</li>
            <li>➌ Pay attention to seed setting for reproducibility</li>
            <li>➍ Validate results against t-test output</li>
            <li>➎ Document questions for live session discussion</li>
          </ul>
        </section>

        <section className="bg-yellow-50 p-4 rounded-md">
          <h3 className="font-semibold text-lg mb-2">Expected Learning Outcomes</h3>
          <ul className="list-disc pl-6">
            <li>Understanding permutation test mechanics</li>
            <li>Implementing statistical analysis in code</li>
            <li>Interpreting results in context</li>
            <li>Comparing parametric vs non-parametric approaches</li>
          </ul>
        </section>
      </div>
    </Card>
  );
};

export default CreativityAnalysis;