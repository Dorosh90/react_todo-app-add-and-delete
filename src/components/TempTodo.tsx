import React, { useState } from 'react';
import { Todo } from '../types/Todo';
import classNames from 'classnames';
import { Loading } from './Loading';

interface Props {
  todo: Todo;
}

export const TempTodo: React.FC<Props> = ({ todo }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      data-cy="Todo"
      className={classNames('todo', {
        completed: todo.completed,
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
        />
      </label>
      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>
      {/* Remove button appears only on hover */}
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => {
          setIsLoading(true);
        }}
      >
        ×
      </button>
      {/* overlay will cover the todo while it is being deleted or updated */}
      <Loading isLoading={isLoading} />
    </div>
  );
};
