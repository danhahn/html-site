import React from "react";
import Icon from "react-fontawesome";
import Banner from "../components/Banner";

import ExtendLayout from "../components/ExtendLayout";
import styles from "../scss/tags.module.scss";
import tips from "../utils/tips";

const Htmltips = () => {
  return (
    <div>
      <Banner title={tips.title} />
      <ExtendLayout>
        <div className={styles.tags}>
          <h2>Useful VS Code Plugins</h2>

          <p>
            To install a plugin in VS code click the "plugin" icon on the left
            side navigation.
          </p>

          <p>Use the search bar at the top of the column to search</p>

          <p>
            Once you have found the plugin you want just click the install
            button.
          </p>

          <ul>
            <li>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings"
                target="_blank"
              >
                Atom Keymap
              </a>
            </li>
            <li>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
                target="_blank"
              >
                Auto Rename Tag
              </a>
            </li>
          </ul>

          <h2>Tips</h2>

          <p dangerouslySetInnerHTML={{ __html: tips.intro }} />

          <div className={styles.overflow}>
            <table className="table">
              <tbody>
                <tr className="header">
                  <th>Tip</th>
                  <th>Description</th>
                </tr>
                {tips.tips.map(tip => (
                  <tr className="template" key={tip.tip}>
                    <td>{tip.tip}</td>
                    <td dangerouslySetInnerHTML={{ __html: tip.desc }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ExtendLayout>
    </div>
  );
};

export default Htmltips;
