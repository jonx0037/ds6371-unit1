import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '../components/ui/card';

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
        <section>
          <h2 className="text-2xl font-bold">Understanding Permutation Tests</h2>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h3 className="font-semibold mb-2">What is a Permutation Test?</h3>
            <p className="text-gray-800">A permutation test is a type of non-parametric statistical test where the distribution of the test statistic under the null hypothesis is obtained by calculating all possible values of the test statistic under rearrangements of the labels on the observed data points.</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold">Key Concepts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Null Hypothesis</h4>
              <p className="text-gray-700">Under H₀, group labels are arbitrary and exchangeable because the treatment has no effect. If true, randomly reassigning labels shouldn't substantially change the test statistic.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Test Statistic</h4>
              <p className="text-gray-700">A value that measures the difference between groups. Common choices include difference in means, medians, or other summary statistics.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold">Live Implementation Results</h3>
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p><strong>Observed Difference in Means:</strong> {results.observedDiff.toFixed(4)}</p>
            <p><strong>P-value:</strong> {results.pValue.toFixed(4)}</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold">Permutation Distribution</h3>
          <div className="bg-white rounded-lg h-96 mt-4">
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
        </section>

        <section>
          <h3 className="text-xl font-semibold">Statistical Interpretation</h3>
          <div className="space-y-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Results Analysis</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>The observed difference between groups is {results.observedDiff.toFixed(4)} points</li>
                <li>P-value of {results.pValue.toFixed(4)} represents the proportion of permuted differences as extreme as observed</li>
                <li>{results.pValue < 0.05 ? 'Strong' : 'Insufficient'} evidence against the null hypothesis at α = 0.05 level</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Advantages of Permutation Tests</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>No assumptions about underlying distributions</li>
                <li>Exact p-values for small samples</li>
                <li>Intuitive interpretation of results</li>
                <li>Flexible application to various test statistics</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Card>
  );
};

export default PermutationAnalysis;
