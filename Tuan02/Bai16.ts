import { Bai14 } from "./Bai14";

export class Bai16 {
  private readonly multiplier: Bai14 = new Bai14();

  public async runInParallel(values: number[] = [1, 2, 3]): Promise<number[]> {
    try {
      const tasks: Array<Promise<number>> = values.map((value: number) =>
        this.multiplier.tripleAfterDelay(value)
      );
      const results: number[] = await Promise.all(tasks);
      console.log("Parallel results:", results);
      return results;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai16 error:", error.message);
      } else {
        console.error("Bai16 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<number[]> {
    return this.runInParallel();
  }
}

new Bai16().execute();
