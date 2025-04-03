import { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheckApp = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    let words = inputText.split(" ");
    let correctedWords = [];
    let firstCorrection = "";

    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        if (!firstCorrection) {
          firstCorrection = `Did you mean: ${customDictionary[lowerCaseWord]}?`;
        }
        correctedWords.push(customDictionary[lowerCaseWord]);
      } else {
        correctedWords.push(word);
      }
    }

    setText(correctedWords.join(" "));
    setSuggestion(firstCorrection);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Type here..."
        value={text}
        onChange={handleChange}
        style={{
          width: "300px",
          height: "100px",
          padding: "8px",
          fontSize: "16px",
        }}
      />
      {suggestion && <p style={{ color: "red" }}>{suggestion}</p>}
    </div>
  );
};

export default SpellCheckApp;
