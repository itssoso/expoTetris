export type Props_Tetromino = {
  shape: any[][],
  color: string,
}

export type Props_Tetrominos = {
  0: Props_Tetromino,
  I: Props_Tetromino,
  L: Props_Tetromino,
  J: Props_Tetromino,
  O: Props_Tetromino,
  S: Props_Tetromino,
  T: Props_Tetromino,
  Z: Props_Tetromino,
}

export const TETROMINOS: Props_Tetrominos = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
    ],
    color: '80, 227, 230',
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0],
    ],
    color: '36, 95, 223',
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L'],
    ],
    color: '223, 173, 36',
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: '223, 217, 36',
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0],
    ],
    color: '48, 211, 56',
  },
  T: {
    shape: [
      ['T', 'T', 'T'],
      [0, 'T', 0],
      [0, 0, 0],
    ],
    color: '132, 61, 36',
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0],
    ],
    color: '227, 78, 78',
  }
}

export const randomTetromino = (): Props_Tetromino => {
  const tetrominos = 'IJLOSTZ'
  const randTetrominos = tetrominos[Math.floor(Math.random() * tetrominos.length)]
  return TETROMINOS[randTetrominos]
}