import { Bai05 } from "./Bai05";

export class Bai07 {
  private readonly taskSimulator: Bai05 = new Bai05();

  public raceTasks(): Promise<string> {
    const tasks: Array<Promise<string>> = [
      this.taskSimulator.simulateTask(3000),
      this.taskSimulator.simulateTask(1000),
      this.taskSimulator.simulateTask(2000),
    ];
    return Promise.race(tasks);
  }

  public async execute(): Promise<string> {
    try {
      const winner: string = await this.raceTasks();
      console.log("Promise.race winner:", winner);
      return winner;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai07 error:", error.message);
      } else {
        console.error("Bai07 error:", String(error));
      }
      throw error;
    }
  }
}

new Bai07().execute();
