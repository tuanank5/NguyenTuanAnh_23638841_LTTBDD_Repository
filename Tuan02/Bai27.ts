import { Bai21, Todo } from "./Bai21";

export class Bai27 {
  private readonly api: Bai21 = new Bai21();

  public async fetchWithRetry(url: string, retries: number): Promise<Todo> {
    let lastError: unknown;

    for (let attempt: number = 1; attempt <= retries; attempt++) {
      try {
        console.log(`Attempt ${attempt}/${retries}: ${url}`);
        const todo: Todo = await this.api.fetchTodo(url);
        return todo;
      } catch (error: unknown) {
        lastError = error;
        if (error instanceof Error) {
          console.error(`Attempt ${attempt} failed:`, error.message);
        } else {
          console.error(`Attempt ${attempt} failed:`, String(error));
        }
        if (attempt === retries) {
          break;
        }
      }
    }

    throw lastError instanceof Error
      ? lastError
      : new Error(`Failed after ${retries} retries`);
  }

  public async execute(): Promise<Todo> {
    try {
      const todo: Todo = await this.fetchWithRetry(
        "https://jsonplaceholder.typicode.com/todos/1",
        3
      );
      console.log("fetchWithRetry success:", todo);
      return todo;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai27 execute error:", error.message);
      } else {
        console.error("Bai27 execute error:", String(error));
      }
      throw error;
    }
  }
}

new Bai27().execute();
