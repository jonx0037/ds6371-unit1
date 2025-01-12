import React from 'react';
import { Card } from '@/components/ui/card';

const PresentationTemplate = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">FLS Unit 1 - Slide Structure</h2>
        
        <div className="space-y-4">
          <section>
            <h3 className="font-semibold">Title Slide</h3>
            <p>- Title: "Unit 1 For Live Session Assignment"</p>
            <p>- Your Name</p>
            <p>- Date</p>
          </section>

          <section>
            <h3 className="font-semibold">Question 1 (≤ 1 hour)</h3>
            <p>Quick Quiz Questions:</p>
            <ul className="list-disc pl-6">
              <p>- QQ1</p>
              <p>- QQ2</p>
              <p>- QQ3</p>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold">Question 2 (≤ 0.5 hours)</h3>
            <p>- Difference between randomized experiment and random sample</p>
            <p>- Discussion of causal inference</p>
          </section>

          <section>
            <h3 className="font-semibold">Question 3 (≤ 0.5 hours)</h3>
            <p>- Literary Digest poll analysis</p>
            <p>- Population of interest vs actual sample population</p>
          </section>

          <section>
            <h3 className="font-semibold">Question 4 (≤ 1 hour)</h3>
            <p>Fertilizer study scope of inference:</p>
            <p>- Scenario A analysis</p>
            <p>- Scenario B analysis</p>
          </section>

          <section>
            <h3 className="font-semibold">Question 5 (2-3 hours)</h3>
            <p>Creativity Study permutation test:</p>
            <p>- Analysis setup</p>
            <p>- Code implementation</p>
            <p>- Results interpretation</p>
          </section>

          <section>
            <h3 className="font-semibold">Question 6: Takeaways (≤ 1.5 hours)</h3>
            <p>Minimum 4 key takeaways from the unit</p>
          </section>

          <section>
            <h3 className="font-semibold">Question 7: Questions</h3>
            <p>Questions and discussion topics for live session</p>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default PresentationTemplate;
