export class Bai14 {
  public async tripleAfterDelay(value: number): Promise<number> {
    try {
      await new Promise<void>((resolve: () => void) => {
        setTimeout(resolve, 1000);
      });
      return value * 3;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai14 error:", error.message);
      } else {
        console.error("Bai14 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(value: number = 5): Promise<number> {
    try {
      const result: number = await this.tripleAfterDelay(value);
      console.log(`${value} × 3 =`, result);
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai14 execute error:", error.message);
      } else {
        console.error("Bai14 execute error:", String(error));
      }
      throw error;
    }
  }
}

new Bai14().execute();
