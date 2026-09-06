import { Bai21, Todo } from "./Bai21";

export class Bai22 {
  private readonly api: Bai21 = new Bai21();

  public async fetchMultipleTodos(ids: number[] = [1, 2, 3]): Promise<Todo[]> {
    try {
      const tasks: Array<Promise<Todo>> = ids.map((id: number) =>
        this.api.fetchTodo(`https://jsonplaceholder.typicode.com/todos/${id}`)
      );
      const todos: Todo[] = await Promise.all(tasks);
      todos.forEach((todo: Todo) => console.log("Todo result:", todo));
      return todos;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai22 error:", error.message);
      } else {
        console.error("Bai22 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<Todo[]> {
    return this.fetchMultipleTodos();
  }
}

new Bai22().execute();
