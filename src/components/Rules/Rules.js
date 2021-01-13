export function isGameOver(cells) {
  const result = cells.every((cell) => {
    return cell !== '';
  });

  return result;
}
