
import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  // This is a simplified syntax highlighter for demonstration purposes.
  const highlightSyntax = (line: string) => {
    return line
      // Keywords
      .replace(/\b(public|class|void|interface|using|namespace|new|return|if|float|int|bool|string|private|protected|virtual|override|abstract|static|get|set|private|foreach|var|in|else|public|class|void|interface|using|namespace|new|return|if|float|int|bool|string|private|protected|virtual|override|abstract|static|get|set|private|foreach|var|in|else|#if|#else|#endif)\b/g, '<span class="text-blue-400">$1</span>')
      // Unity Types & Common C# Types
      .replace(/\b(MonoBehaviour|GameObject|Vector3|Transform|Input|Time|Debug|List)\b/g, '<span class="text-teal-400">$1</span>')
      // Custom Types from the examples
      .replace(/\b(IWeapon|WeaponController|MachineGun|BaseEnemy|MeleeEnemy|IDamageable|IHealable|EnemyCar|Player|IInput|PCInput|PlayerController)\b/g, '<span class="text-green-400">$1</span>')
      // Comments
      .replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
      // Method names (PascalCase followed by parenthesis)
      .replace(/\b([A-Z][a-zA-Z0-9_]+)\(/g, '<span class="text-yellow-300">$1</span>(')
      // Strings
      .replace(/".*?"/g, '<span class="text-orange-400">$&</span>');
  };

  const formattedCode = code.trim().split('\n').map((line, i) => (
    <div key={i} className="flex">
      <span className="text-gray-600 select-none mr-4 w-6 text-right">{i + 1}</span>
      <span className="flex-1" dangerouslySetInnerHTML={{ __html: highlightSyntax(line) || '&nbsp;' }} />
    </div>
  ));

  return (
    <pre className="bg-gray-900/70 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-300 border border-gray-700">
      <code>
        {formattedCode}
      </code>
    </pre>
  );
};

export default CodeBlock;
