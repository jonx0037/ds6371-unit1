import React from 'react';
import { Card } from '@/components/ui/card';

const QuizSlides = () => {
  return (
    <div className="space-y-8">
      {/* Title Slide */}
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Unit 1 For Live Session Assignment</h1>
        <p className="text-lg">[Your Name]</p>
        <p className="text-lg">[Date]</p>
      </Card>

      {/* QQ1 Slide */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Quick Quiz Question 1: Study Design</h2>
        <div className="space-y-4">
          <p className="font-semibold">Question:</p>
          <p>Why were poems given to judges in random order in the creativity study?</p>
          
          <p className="font-semibold">Analysis:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Random ordering prevents systematic bias in judging</li>
            <li>Judges may become more lenient or strict over time</li>
            <li>Order effects could confound with treatment effects</li>
          </ul>
          
          <p className="font-semibold">Conclusion:</p>
          <p>Randomization ensures that any differences in creativity scores can be attributed to the motivation treatment rather than the order of judging.</p>
        </div>
      </Card>

      {/* QQ2 Slide */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Quick Quiz Question 2: Statistical Design</h2>
        <div className="space-y-4">
          <p className="font-semibold">Key Concepts:</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Random Sampling</h3>
              <ul className="list-disc pl-6">
                <li>Enables generalization</li>
                <li>Representative of population</li>
                <li>External validity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Random Assignment</h3>
              <ul className="list-disc pl-6">
                <li>Enables causal inference</li>
                <li>Balances confounding variables</li>
                <li>Internal validity</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* QQ3 Slide */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Quick Quiz Question 3: Study Validity</h2>
        <div className="space-y-4">
          <p className="font-semibold">Case Study: 1930 Milk Supplement Study</p>
          
          <div className="space-y-2">
            <p className="font-semibold">Issues Identified:</p>
            <ul className="list-disc pl-6">
              <li>Pre-existing group differences</li>
              <li>Evidence of non-random assignment</li>
              <li>Potential selection bias by teachers</li>
            </ul>
          </div>
          
          <div className="mt-4">
            <p className="font-semibold">Impact on Study Validity:</p>
            <ul className="list-disc pl-6">
              <li>Cannot establish causation</li>
              <li>Results are questionable</li>
              <li>Demonstrates importance of proper randomization</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};


      {/* Question 2 Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Question 2: Randomized Experiments vs Random Samples</h2>
        <div className="space-y-4">
          <p className="font-semibold">Key Differences:</p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Random Sample</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Units are randomly selected from a population</li>
                <li>Purpose: Make inferences about the population</li>
                <li>Allows for generalization of results</li>
                <li>Addresses question of "What is true for the population?"</li>
              </ul>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Randomized Experiment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Units are randomly assigned to treatments</li>
                <li>Purpose: Compare effect of treatments</li>
                <li>Allows for causal inference</li>
                <li>Addresses question of "Does the treatment cause an effect?"</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-semibold">Causal Inference:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Can only be made from randomized experiments</li>
              <li>Random assignment balances confounding variables</li>
              <li>Creates comparable groups that differ only in treatment</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="font-semibold">Key Takeaway:</p>
            <p>While random sampling helps us generalize findings to a larger population, only random assignment in experiments allows us to make causal inferences about treatment effects.</p>
          </div>
        </div>
      </Card>
      

      {/* Question 2 - Randomized Experiment vs Random Sample */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Question 2: Random Sampling vs Randomized Experiments</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Random Sampling</h3>
            <div className="space-y-2">
              <p className="font-medium">Purpose:</p>
              <ul className="list-disc pl-6">
                <li>To select units from a population for study</li>
                <li>Ensures representativeness of the sample</li>
                <li>Allows generalization to the population</li>
              </ul>
              
              <p className="font-medium mt-4">Key Features:</p>
              <ul className="list-disc pl-6">
                <li>Each unit has equal chance of selection</li>
                <li>Focuses on external validity</li>
                <li>Addresses question: "What is true about the population?"</li>
              </ul>
            </div>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Randomized Experiment</h3>
            <div className="space-y-2">
              <p className="font-medium">Purpose:</p>
              <ul className="list-disc pl-6">
                <li>To assign treatments to study units</li>
                <li>Controls for confounding variables</li>
                <li>Enables causal inference</li>
              </ul>
              
              <p className="font-medium mt-4">Key Features:</p>
              <ul className="list-disc pl-6">
                <li>Random assignment to treatments</li>
                <li>Focuses on internal validity</li>
                <li>Addresses question: "Does this cause that?"</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold">Causal Inference:</p>
          <p>Causal inference can only be made from randomized experiments. This is because random assignment creates groups that are probabilistically similar in all ways except for the treatment, allowing us to attribute differences in outcomes to the treatment itself.</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Example:</p>
          <p>Consider a medical study:</p>
          <ul className="list-disc pl-6">
            <li><span className="font-medium">Random Sample:</span> Selecting participants from the population to study</li>
            <li><span className="font-medium">Randomized Experiment:</span> Randomly assigning those participants to treatment or control groups</li>
          </ul>
        </div>
      </Card>

export default QuizSlides;
