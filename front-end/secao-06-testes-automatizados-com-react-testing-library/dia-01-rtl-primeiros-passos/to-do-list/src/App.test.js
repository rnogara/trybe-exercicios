import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('testes para implementação do To-Do List', () => {
  it('Verifique que um botão com o texto "Adicionar" está sendo renderizado', () => {
    render(<App />);
    const addBtn = screen.getByTestId('add-btn');
    expect(addBtn).toBeInTheDocument();
    expect(addBtn.type).toBe('button');
  });
  it('Verifique o comportamento de adicionar uma tarefa', () => {
    render(<App />);
    const TASK_TODO = 'Dormir cedo!';
    const task = screen.getByLabelText('Tarefa:');
    expect(task).toBeInTheDocument();
    const addBtn = screen.getByText('Adicionar');
    expect(addBtn).toBeInTheDocument();
    userEvent.type(task, TASK_TODO);
    expect(screen.queryByText(TASK_TODO)).not.toBeInTheDocument();
    userEvent.click(addBtn);
    expect(screen.getByText(TASK_TODO)).toBeInTheDocument();
    expect(task).toHaveValue("");
  });
});
