import { Card } from '../components/ui/card';

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
              <li>Null Hypothesis (H₀): No difference in mean creativity scores between groups (μᵢₙₜᵣᵢₙₛᵢ = μₑₓₜᵣᵢₙₛᵢ)</li>
              <li>Alternative Hypothesis (Hₐ): Mean creativity scores differ between groups (μᵢₙₜᵣᵢₙₛᵢ ≠ μₑₓₜᵣᵢₙₛᵢ)</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Study Data</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Extrinsic Group (n=23)</h4>
              <p className="text-sm text-gray-700">Scores: 5.0, 5.4, 6.1, 10.9, 11.8, 12.0, 12.3, 14.8, 15.0, 16.8, 17.2, 17.2, 17.4, 17.5, 18.5, 18.7, 18.7, 19.2, 19.5, 20.7, 21.2, 22.1, 24.0</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Intrinsic Group (n=24)</h4>
              <p className="text-sm text-gray-700">Scores: 12.0, 12.0, 12.9, 13.6, 16.6, 17.2, 17.5, 18.2, 19.1, 19.3, 19.8, 20.3, 20.5, 20.6, 21.3, 21.6, 22.1, 22.2, 22.6, 23.1, 24.0, 24.3, 26.7, 29.7</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Analysis Implementation</h3>
          <div className="space-y-3">
            <div className="pl-4 border-l-4 border-green-200">
              <p className="font-medium">1. Calculate Observed Difference</p>
              <p className="text-gray-700">Mean difference between intrinsic and extrinsic groups: <span className="font-mono bg-gray-100 px-1 rounded">4.14 points</span></p>
            </div>
            
            <div className="pl-4 border-l-4 border-green-200">
              <p className="font-medium">2. Permutation Process</p>
              <ul className="list-disc pl-6">
                <li>Randomly shuffle motivation labels</li>
                <li>Recalculate mean difference</li>
                <li>Repeat 10,000 times</li>
                <li>Track differences to build null distribution</li>
              </ul>
            </div>
            
            <div className="pl-4 border-l-4 border-green-200">
              <p className="font-medium">3. Statistical Results</p>
              <ul className="list-disc pl-6">
                <li>P-value: 0.0058 (using seed=2)</li>
                <li>Interpretation: Strong evidence against null hypothesis</li>
                <li>Decision: Reject H₀ at α = 0.05 level</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Implementation Code</h3>
          <div className="bg-gray-50 p-4 rounded-md space-y-4">
            <div>
              <h4 className="font-medium mb-2">R Implementation</h4>
              <pre className="text-sm bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto">
{`# Calculate observed difference
xbars <- creativity %>% 
  group_by(Treatment_S) %>% 
  summarize(mean = mean(Score))

xbarDiff <- xbars$mean[xbars$Treatment_S == "Intrinsic"] - 
            xbars$mean[xbars$Treatment_S == "Extrinsic"]

# Run permutation test
set.seed(2)
n_permutations <- 10000
xbarDiffHolder <- numeric(n_permutations)

for(i in 1:n_permutations) {
  shuffled_labels <- sample(creativity$Treatment_S, nrow(creativity))
  temp_data <- creativity
  temp_data$Treatment_S <- shuffled_labels
  
  temp_means <- temp_data %>%
    group_by(Treatment_S) %>%
    summarize(mean = mean(Score))
  
  xbarDiffHolder[i] <- temp_means$mean[temp_means$Treatment_S == "Intrinsic"] -
                       temp_means$mean[temp_means$Treatment_S == "Extrinsic"]
}

# Calculate p-value (two-sided test)
p_value <- mean(abs(xbarDiffHolder) >= abs(xbarDiff))`}
              </pre>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 p-4 rounded-md">
          <h3 className="font-semibold text-lg mb-2">Conclusions</h3>
          <ul className="list-disc pl-6">
            <li>Statistical evidence suggests a significant difference in creativity scores between motivation groups</li>
            <li>The intrinsic motivation group showed higher creativity scores on average</li>
            <li>Results demonstrate the importance of motivation type in creative performance</li>
            <li>Implementation showcases both statistical rigor and practical significance</li>
          </ul>
        </section>
      </div>
    </Card>
  );
};

export default CreativityAnalysis;
