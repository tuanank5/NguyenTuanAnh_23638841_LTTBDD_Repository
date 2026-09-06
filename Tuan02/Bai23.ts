import { Todo } from "./Bai21";

export class Bai23 {
  private readonly listUrl: string = "https://jsonplaceholder.typicode.com/todos";

  public async fetchCompletedTodos(): Promise<Todo[]> {
    try {
      const response: Response = await fetch(this.listUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const todos: Todo[] = (await response.json()) as Todo[];
      const completed: Todo[] = todos.filter((todo: Todo) => todo.completed);
      return completed;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai23 error:", error.message);
      } else {
        console.error("Bai23 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<Todo[]> {
    try {
      const completed: Todo[] = await this.fetchCompletedTodos();
      console.log(`Completed todos: ${completed.length}`);
      console.log(completed);
      return completed;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai23 execute error:", error.message);
      } else {
        console.error("Bai23 execute error:", String(error));
      }
      throw error;
    }
  }
}

new Bai23().execute();
