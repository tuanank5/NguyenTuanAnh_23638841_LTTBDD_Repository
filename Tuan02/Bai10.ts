import { Bai04 } from "./Bai04";

export class Bai10 {
  private readonly randomProvider: Bai04 = new Bai04();

  public execute(): Promise<void> {
    return this.randomProvider
      .getRandomNumber()
      .then((value: number) => {
        console.log("Success value:", value);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error("Caught:", error.message);
        } else {
          console.error("Caught:", String(error));
        }
      })
      .finally(() => {
        console.log("Done");
      });
  }
}

new Bai10().execute();