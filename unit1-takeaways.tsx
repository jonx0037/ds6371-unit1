import React from 'react';
import { Card } from '@/components/ui/card';

const UnitTakeaways = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Unit 1: Key Takeaways</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="font-semibold text-lg mb-2">Research Design Principles</h3>
          <div className="bg-blue-50 p-4 rounded-md">
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-gray-800">
                <span className="font-medium">Random Assignment vs Random Sampling:</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Random assignment enables causal inference</li>
                  <li>Random sampling enables population generalization</li>
                </ul>
              </li>
              <li className="text-gray-800">
                <span className="font-medium">Sample Size vs Sampling Method:</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Large sample size doesn't fix biased sampling</li>
                  <li>Representative samples matter more than size alone</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Statistical Testing</h3>
          <div className="bg-green-50 p-4 rounded-md">
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-gray-800">
                <span className="font-medium">Permutation Tests:</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Powerful non-parametric alternative to t-tests</li>
                  <li>Based on randomization of group labels</li>
                  <li>Particularly useful when normality is questionable</li>
                </ul>
              </li>
              <li className="text-gray-800">
                <span className="font-medium">P-values:</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Interpret in context of study design</li>
                  <li>Statistical significance ≠ practical significance</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Scope of Inference</h3>
          <div className="bg-yellow-50 p-4 rounded-md">
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-gray-800">
                <span className="font-medium">Causation requires:</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Random assignment to treatments</li>
                  <li>Control of confounding variables</li>
                </ul>
              </li>
              <li className="text-gray-800">
                <span className="font-medium">Generalization requires:</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Random sampling from target population</li>
                  <li>Representative sample characteristics</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <div className="bg-purple-50 p-4 rounded-md mt-4">
          <p className="font-medium text-gray-700">💡 Remember:</p>
          <p className="text-gray-600 mt-2">These concepts form the foundation for understanding more advanced statistical methods and research design principles in future units.</p>
        </div>
      </div>
    </Card>
  );
};

export default UnitTakeaways;