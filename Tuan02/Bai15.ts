import { Bai14 } from "./Bai14";

export class Bai15 {
  private readonly multiplier: Bai14 = new Bai14();

  public async runSequentially(values: number[] = [1, 2, 3]): Promise<number[]> {
    const results: number[] = [];
    try {
      for (const value of values) {
        const tripled: number = await this.multiplier.tripleAfterDelay(value);
        results.push(tripled);
        console.log(`Sequential step for ${value}:`, tripled);
      }
      return results;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai15 error:", error.message);
      } else {
        console.error("Bai15 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<number[]> {
    return this.runSequentially();
  }
}

new Bai15().execute();
