export default function TextReveal({ text, as: Tag = "span", className = "", delay = 0, stagger = 0.08, blur = 6, yOffset = "20%" }) {
  const words = Array.isArray(text) ? text : String(text).split(" ");
  return <Tag className={`text-reveal ${className}`} aria-label={words.join(" ")} style={{ "--reveal-delay": `${delay}s`, "--reveal-blur": `${blur}px`, "--reveal-y": yOffset }}>
    {words.map((word, index) => <span className="text-reveal-word" style={{ "--word-delay": `${delay + index * stagger}s` }} key={`${word}-${index}`}>{word}{index < words.length - 1 ? "\u00a0" : ""}</span>)}
  </Tag>;
}
