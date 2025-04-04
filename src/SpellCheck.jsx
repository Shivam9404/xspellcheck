import { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheckApp = () => {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState(null);

  const handleChange = (e) => {
    let inputText = e.target.value;
    let words = inputText.split(" ");
    let correctedWords = [];
    let firstCorrection = null;

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      const lowerCaseWord = word.toLowerCase();

      if (customDictionary[lowerCaseWord]) {
        if (!firstCorrection) {
          firstCorrection = (
            <>
              Did you mean: <b>{customDictionary[lowerCaseWord]}?</b>
            </>
          );
        }
        correctedWords.push(i === words.length - 1 ? word : customDictionary[lowerCaseWord]);
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
      {suggestion && <p style={{ color: "black" }}>{suggestion}</p>}
    </div>
  );
};

export default SpellCheckApp;
