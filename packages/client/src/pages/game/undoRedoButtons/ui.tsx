import { Button, Space } from 'antd';
import { useStore } from 'effector-react';
import { undo, redo } from 'entities/game-drive';
import { $undoRedoPossible } from 'entities/game-drive';
import { FC, PropsWithChildren } from 'react';

export const UndoRedoButtons: FC<PropsWithChildren> = () => {
  const { canUndo, canRedo } = useStore($undoRedoPossible);

  const undoHandler = () => {
    undo();
  };

  const redoHandler = () => {
    redo();
  };

  return (
    <Space>
      <Button disabled={!canUndo} onClick={undoHandler}>
        Undo
      </Button>
      <Button disabled={!canRedo} onClick={redoHandler}>
        Redo
      </Button>
    </Space>
  );
};