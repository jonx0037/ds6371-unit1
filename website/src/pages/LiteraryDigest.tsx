import { Card } from '../components/ui/card';

const LiteraryDigestAnalysis = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Literary Digest Poll Analysis (1936)</h2>
      
      <div className="space-y-4">
        <section>
          <h3 className="font-semibold text-lg mb-2">Historical Context</h3>
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="text-gray-800">The 1936 Literary Digest poll is one of the most famous examples of sampling bias in statistical history. The magazine conducted a massive presidential election survey that predicted:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Republican Alf Landon would win with 57% of votes</li>
              <li>Democrat Franklin D. Roosevelt would receive 43% of votes</li>
            </ul>
            <p className="mt-2 text-gray-800">The actual election result was the opposite: Roosevelt won by a landslide with 62% of the votes, while Landon received only 38%.</p>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Population of Interest</h3>
          <p className="text-gray-800">The desired population was all eligible American voters who would participate in the 1936 presidential election.</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Poll Methodology</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Sample Size and Sources</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mailed out 10 million questionnaires</li>
              <li>Received 2.4 million responses</li>
              <li>Contact lists came from:</li>
              <ul className="list-circle pl-6 space-y-1">
                <li>Magazine subscribers (likely higher income and education)</li>
                <li>Phone owners (during Great Depression, phones were luxury items)</li>
                <li>Car owners (automobiles were also indicators of wealth in 1936)</li>
                <li>Country club memberships</li>
              </ul>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Statistical Issues</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Sampling Bias</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sample was not representative of general voting population</li>
                <li>Wealthier Americans tended to favor Republican candidate Landon</li>
                <li>Poll missed many lower-income voters who supported Roosevelt</li>
                <li>Large sample size (2.4M responses) didn't correct for biased sampling frame</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Non-Response Bias</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Only 24% of surveys were returned</li>
                <li>Response rate likely varied by demographic groups</li>
                <li>No analysis of non-respondents was conducted</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-yellow-50 p-4 rounded-md">
          <h3 className="font-semibold text-lg mb-2">Key Lessons for Modern Statistics</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sample Quality Over Quantity:</strong> A large sample size cannot overcome systematic bias in sampling methodology</li>
            <li><strong>Representative Sampling:</strong> Ensure the sampling frame covers all segments of the target population</li>
            <li><strong>Non-Response Analysis:</strong> Consider who isn't responding and how that might affect results</li>
            <li><strong>Demographic Weighting:</strong> Modern polls use demographic weighting to adjust for sampling biases</li>
          </ul>
        </section>
      </div>
    </Card>
  );
};

export default LiteraryDigestAnalysis;
