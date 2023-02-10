export function distinctNames (ideas: string[]): number {
  const seen: Record<string, true> = {};
  let pairings = 0;

  ideas.forEach(word => seen[word] = true);
  ideas.forEach(first => {
    ideas.forEach(second => {
      if (first === second) return;

      const [sFirst, sSecond] = swapLetters([first, second]);
      if (seen.hasOwnProperty(sFirst)) return;
      if (seen.hasOwnProperty(sSecond)) return;

      pairings += 1;
    });
  });

  return pairings;
}

function swapLetters ([first, second]: string[]): [string, string] {
  return [
    second[0] + first.slice(1),
    first[0] + second.slice(1),
  ];
}
