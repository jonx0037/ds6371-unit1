import React from 'react';

const QuestionSlide = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      {/* Question 2 Slide */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-8">Question 2 (≤ .5 hours)</h1>
        
        <div className="space-y-6 text-xl">
          <p>What is the difference between a randomized experiment and a random sample? Under what type of study/sample can a causal inference be made?</p>

          <div className="pl-8 space-y-4">
            <div className="mt-8">
              <p className="font-semibold">Answer:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>A random sample is when units are randomly selected from a population to participate in a study. This allows for generalization to the broader population.</li>
                
                <li>A randomized experiment is when subjects (who may or may not have been randomly sampled) are randomly assigned to different treatment groups. This controls for confounding variables.</li>
                
                <li>Causal inference can only be made from randomized experiments because random assignment creates groups that are probabilistically similar in all ways except for the treatment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSlide;
