import { Bai05 } from "./Bai05";

export class Bai06 {
  private readonly taskSimulator: Bai05 = new Bai05();

  public runParallelTasks(): Promise<string[]> {
    const tasks: Array<Promise<string>> = [
      this.taskSimulator.simulateTask(1000),
      this.taskSimulator.simulateTask(1500),
      this.taskSimulator.simulateTask(2000),
    ];
    return Promise.all(tasks);
  }

  public async execute(): Promise<string[]> {
    try {
      const results: string[] = await this.runParallelTasks();
      console.log("Promise.all results:", results);
      return results;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai06 error:", error.message);
      } else {
        console.error("Bai06 error:", String(error));
      }
      throw error;
    }
  }
}

new Bai06().execute();
