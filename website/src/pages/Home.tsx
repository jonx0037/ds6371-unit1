
export default function Home() {
  return (
    <div className="prose max-w-none">
      <h1>DS 6371 - Unit 1</h1>
      <p>
        Welcome to the Unit 1 presentation for DS 6371 - Statistical Foundations for Data Science.
        This presentation covers three main topics:
      </p>
      <ul>
        <li>
          <strong>Creativity Study</strong> - An analysis of creativity scores between different groups
        </li>
        <li>
          <strong>Literary Digest</strong> - A historical case study in sampling bias
        </li>
        <li>
          <strong>Permutation Tests</strong> - Understanding and implementing permutation testing
        </li>
      </ul>
      <p>
        Select a topic from the navigation menu above to explore the detailed analysis and findings.
      </p>
      <hr className="my-6" />
      <div>
        <h2>Contact & Resources</h2>
        <ul>
          <li>Email: <a href="mailto:jarocha@smu.edu">jarocha@smu.edu</a></li>
          <li>GitHub Repository: <a href="https://github.com/jonx0037/ds6371-unit1" target="_blank" rel="noopener noreferrer">github.com/jonx0037/ds6371-unit1</a></li>
        </ul>
      </div>
    </div>
  );
}
