export interface TodoEditModalProps {
  text: string;
  onSave: (newText: string) => void;
  onCancel: () => void;
  className?: string;
}
