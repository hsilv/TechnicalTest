export interface TodoItemProps {
  text: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
}
