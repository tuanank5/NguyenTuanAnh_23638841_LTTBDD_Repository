export class Bai09 {
  private readonly source: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public readAndFilterEven(numbers: number[] = this.source): Promise<number[]> {
    return new Promise<number[]>((resolve: (value: number[]) => void) => {
      setTimeout(() => {
        const evens: number[] = numbers.filter((n: number) => n % 2 === 0);
        resolve(evens);
      }, 1000);
    });
  }

  public async execute(): Promise<number[]> {
    try {
      const evens: number[] = await this.readAndFilterEven();
      console.log("Even numbers:", evens);
      return evens;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai09 error:", error.message);
      } else {
        console.error("Bai09 error:", String(error));
      }
      throw error;
    }
  }
}

new Bai09().execute();
