import { Bai21, Todo } from "./Bai21";

export interface SettledApiResult {
  id: number;
  status: "fulfilled" | "rejected";
  value?: Todo;
  reason?: string;
}

export class Bai30 {
  private readonly api: Bai21 = new Bai21();

  public async fetchAllSettled(ids: number[] = [1, 2, 999999]): Promise<SettledApiResult[]> {
    try {
      const tasks: Array<Promise<Todo>> = ids.map((id: number) => {
        if (id === 999999) {
          return this.api.fetchTodo("https://jsonplaceholder.typicode.com/todos/invalid-id");
        }
        return this.api.fetchTodo(`https://jsonplaceholder.typicode.com/todos/${id}`);
      });

      const settled: Array<PromiseSettledResult<Todo>> = await Promise.allSettled(tasks);

      const report: SettledApiResult[] = settled.map(
        (item: PromiseSettledResult<Todo>, index: number): SettledApiResult => {
          if (item.status === "fulfilled") {
            return {
              id: ids[index],
              status: "fulfilled",
              value: item.value,
            };
          }
          return {
            id: ids[index],
            status: "rejected",
            reason: item.reason instanceof Error ? item.reason.message : String(item.reason),
          };
        }
      );

      report.forEach((entry: SettledApiResult) => {
        if (entry.status === "fulfilled") {
          console.log(`ID ${entry.id}: SUCCESS`, entry.value);
        } else {
          console.log(`ID ${entry.id}: FAILURE`, entry.reason);
        }
      });

      return report;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai30 error:", error.message);
      } else {
        console.error("Bai30 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<SettledApiResult[]> {
    return this.fetchAllSettled();
  }
}

new Bai30().execute();
