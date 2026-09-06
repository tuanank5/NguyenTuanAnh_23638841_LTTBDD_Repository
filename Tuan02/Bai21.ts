export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class Bai21 {
  public readonly defaultUrl: string = "https://jsonplaceholder.typicode.com/todos/1";

  public async fetchTodo(url: string = this.defaultUrl): Promise<Todo> {
    try {
      const response: Response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Todo = (await response.json()) as Todo;
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai21 error:", error.message);
      } else {
        console.error("Bai21 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<Todo> {
    try {
      const todo: Todo = await this.fetchTodo();
      console.log("Todo:", todo);
      return todo;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai21 execute error:", error.message);
      } else {
        console.error("Bai21 execute error:", String(error));
      }
      throw error;
    }
  }
}

new Bai21().execute();
