import React from 'react';
import { Card } from '@/components/ui/card';

const CreativityResultsClient = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center mb-8">
        Does the Type of Motivation Impact Creativity?
      </h1>

      <Card className="p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Key Finding</h2>
        <p className="text-xl text-center p-4 bg-blue-50 rounded-lg">
          People with intrinsic motivation scored about 4 points higher on creativity tasks 
          compared to those with extrinsic motivation
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">What We Studied</h2>
          <div className="space-y-2">
            <p>We compared two approaches to motivation:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Intrinsic Motivation:</strong> Inner drive and personal interest</li>
              <li><strong>Extrinsic Motivation:</strong> External rewards and incentives</li>
            </ul>
            <p className="mt-4 text-sm">Based on 47 participants: 24 intrinsically motivated, 23 extrinsically motivated</p>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">What This Means</h2>
          <div className="space-y-2">
            <ul className="list-disc pl-6 space-y-2">
              <li>The difference is statistically significant</li>
              <li>This result is unlikely to have occurred by chance</li>
              <li>We can be confident that the type of motivation matters</li>
            </ul>
          </div>
        </Card>

        <Card className="p-4 md:col-span-2">
          <h2 className="text-lg font-semibold mb-3">Practical Implications</h2>
          <div className="space-y-3">
            <p className="font-medium">Based on these findings, we recommend:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Focus on building intrinsic motivation in creative tasks</li>
              <li>Consider ways to develop personal interest and engagement</li>
              <li>Look beyond just external rewards when seeking creative solutions</li>
            </ul>
          </div>
        </Card>

        <Card className="p-4 md:col-span-2 bg-gray-50">
          <h2 className="text-lg font-semibold mb-3">Study Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Method:</p>
              <ul className="list-disc pl-6">
                <li>Randomized study design</li>
                <li>Creativity scored by independent judges</li>
                <li>Results verified through rigorous statistical testing</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Confidence in Results:</p>
              <ul className="list-disc pl-6">
                <li>Less than 1% chance this difference is due to random chance</li>
                <li>Results align with previous research on motivation</li>
                <li>Analysis accounts for various potential biases</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreativityResultsClient;