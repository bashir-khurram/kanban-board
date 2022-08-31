export interface BoardColumns {
  todo: Column;
  impl: Column;
  done: Column;
}

export interface Column {
  title: string;
  tasks: string[];
}

export interface TaskChange {
  task: string;
  operation: 'edit' | 'delete';
}

export const BOARD_COLUMNS_KEY = 'board-columns';
