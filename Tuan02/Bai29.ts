import { Bai05 } from "./Bai05";

export class Bai29 {
  private readonly taskSimulator: Bai05 = new Bai05();

  public async queueProcess(delays: number[] = [400, 600, 800, 1000, 1200]): Promise<string[]> {
    const results: string[] = [];
    try {
      for (let index: number = 0; index < delays.length; index++) {
        const delay: number = delays[index];
        const raw: string = await this.taskSimulator.simulateTask(delay);
        const labeled: string = `Queue task ${index + 1}: ${raw}`;
        console.log(labeled);
        results.push(labeled);
      }
      console.log("queueProcess complete:", results);
      return results;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai29 error:", error.message);
      } else {
        console.error("Bai29 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<string[]> {
    return this.queueProcess();
  }
}

new Bai29().execute();
