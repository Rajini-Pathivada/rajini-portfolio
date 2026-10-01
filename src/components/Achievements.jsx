
import "./Achievements.css";

import { SiLeetcode } from "react-icons/si";

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <h2>Achievements</h2>

        <div className="achievement-card">
          <div className="achievement-icon">
            <SiLeetcode />
          </div>

          <div className="achievement-content">
            <h3>130+ DSA Problems Solved</h3>

            <p>
              Solved 130+ Data Structures and Algorithms problems on
              LeetCode, strengthening problem-solving skills across
              arrays, strings, linked lists, stacks, queues, trees,
              graphs, recursion, greedy algorithms, and more.
            </p>

            <a
              href="https://leetcode.com/u/Rajini_Pathivada/"
              target="_blank"
              rel="noreferrer"
              className="leetcode-button"
            >
              View LeetCode Profile
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
