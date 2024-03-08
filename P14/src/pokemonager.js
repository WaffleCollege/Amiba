const allPokemon = window.allPokemon;

window.pokemonager = {
  findNames: () => {
    // 1問目のコードをここに書きましょう
    return allPokemon.map(a => a.Name);
  },

  findByResistance: attack => {
    // 2問目のコードをここに書きましょう
    return allPokemon.filter(a => a.Resistant.includes(attack));
  },

  findNamesByResistance: attack => {
    // 3問目のコードをここに書きましょう
    return allPokemon
      .filter(a => a.Resistant.includes(attack))
      .map(a => a.Name);
  },

  avgMaxCP: () => {
    // 4問目のコードをここに書きましょう
    const num = allPokemon.length;
    return (
      allPokemon
        .filter(a => a.MaxCP > 0)
        .map(a => a.MaxCP)
        .reduce((acc, cur) => acc + cur) / num
    );
  },

  countedWeaknesses: () => {
    // 5問目のコードをここに書きましょう
    const weaknessesCount = {};
    pokemon.forEach(p => {
      p.Weaknesses.forEach(w => {
        if (weaknessesCount[w]) {
          weaknessesCount[w]++;
        } else {
          weaknessesCount[w] = 1;
        }
      });
    });
    return weaknessesCount;
  }
};
