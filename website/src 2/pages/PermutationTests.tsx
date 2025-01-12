import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';

interface PermutationResult {
  permutation: number;
  difference: number;
}

interface Results {
  observedDiff: number;
  pValue: number;
  distribution: PermutationResult[];
}

const PermutationAnalysis = () => {
  const [results, setResults] = useState<Results>({
    observedDiff: 0,
    pValue: 0,
    distribution: []
  });

  useEffect(() => {
    // Sample data to demonstrate implementation
    const extrinsicScores = [71.53, 72.1, 70.8, 69.5, 68.2, 73.4, 70.9];
    const intrinsicScores = [77.44, 75.8, 76.5, 74.2, 75.3, 76.2, 75.0];
    
    const runPermutationTest = () => {
      try {
        // Calculate observed difference
        const extrinsicMean = extrinsicScores.reduce((a, b) => a + b, 0) / extrinsicScores.length;
        const intrinsicMean = intrinsicScores.reduce((a, b) => a + b, 0) / intrinsicScores.length;
        const observedDiff = intrinsicMean - extrinsicMean;

        // Perform permutation test
        const numPermutations = 1000;
        const allData = [...extrinsicScores, ...intrinsicScores];
        const n1 = extrinsicScores.length;
        const diffDistribution = [];

        for (let i = 0; i < numPermutations; i++) {
          const shuffled = [...allData].sort(() => Math.random() - 0.5);
          const group1 = shuffled.slice(0, n1);
          const group2 = shuffled.slice(n1);
          
          const mean1 = group1.reduce((a, b) => a + b, 0) / n1;
          const mean2 = group2.reduce((a, b) => a + b, 0) / (allData.length - n1);
          
          diffDistribution.push({
            permutation: i,
            difference: mean2 - mean1
          });
        }

        const pValue = diffDistribution.filter(d => 
          Math.abs(d.difference) >= Math.abs(observedDiff)
        ).length / numPermutations;

        setResults({
          observedDiff,
          pValue,
          distribution: diffDistribution
        });
      } catch (error) {
        console.error("Error in permutation test:", error);
      }
    };

    runPermutationTest();
  }, []);

  return (
    <Card className="w-full p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Permutation Test Analysis</h2>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Results:</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p><strong>Observed Difference in Means:</strong> {results.observedDiff.toFixed(4)}</p>
            <p><strong>P-value:</strong> {results.pValue.toFixed(4)}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Permutation Distribution:</h3>
          <div className="bg-white rounded-lg h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={results.distribution} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="permutation" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="difference" 
                  stroke="#8884d8" 
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Interpretation:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>The observed difference between intrinsic and extrinsic motivation groups is {results.observedDiff.toFixed(4)} points</li>
            <li>The p-value of {results.pValue.toFixed(4)} indicates {results.pValue < 0.05 ? 'strong' : 'insufficient'} evidence against the null hypothesis</li>
            <li>The distribution plot shows the spread of differences we would expect under the null hypothesis</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default PermutationAnalysis;
