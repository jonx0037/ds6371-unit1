import React from 'react';

const SlidesPresentation = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      {/* Question 2 Section */}
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

      {/* Question 3 Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-8">Questions 3 (< .5 hours)</h1>
        
        <div className="space-y-6 text-xl">
          <p>In 1936, the Literary Digest polled 1 out of every 4 Americans and concluded that Alfred Landon would win the presidential election in a landon-slide (pun intended:). Of course, history turned out dramatically different. The magazine combined three sampling sources: subscribers to its magazine, phone number records, and automobile registration records. Comment on the desired population of interest of the survey and what population the magazine actually drew from.</p>

          <div className="pl-8 space-y-4">
            <div className="mt-8">
              <p className="font-semibold">Answer:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Desired Population: All eligible American voters in 1936</li>
                
                <li>Actual Population Sampled: Americans who were:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Magazine subscribers (likely higher income/education)</li>
                    <li>Phone owners (luxury item in 1936)</li>
                    <li>Car owners (another luxury in 1936)</li>
                  </ul>
                </li>
                
                <li>Key Issue: Severe sampling bias
                  <ul className="list-disc pl-6 mt-2">
                    <li>All three sources oversampled wealthy Americans</li>
                    <li>During Great Depression, wealth strongly correlated with political views</li>
                    <li>Missing representation from lower-income voters</li>
                  </ul>
                </li>
                
                <li>Lesson: Large sample size (1 in 4 Americans) does not overcome systematic sampling bias</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidesPresentation;