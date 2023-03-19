import { Button, Space } from 'antd';
import { useUnit } from 'effector-react';
import { undo, redo } from 'entities/game-drive';
import { $undoRedoPossible } from 'entities/game-drive';
import { FC, PropsWithChildren } from 'react';

export const UndoRedoButtons: FC<PropsWithChildren> = () => {
  const { canUndo, canRedo } = useUnit($undoRedoPossible);
  return (
    <Space>
      <Button disabled={!canUndo} onClick={undo}>
        Undo
      </Button>
      <Button disabled={!canRedo} onClick={redo}>
        Redo
      </Button>
    </Space>
  );
};
