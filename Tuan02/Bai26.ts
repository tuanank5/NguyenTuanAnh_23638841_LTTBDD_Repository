export class Bai26 {
  public async waitFiveSeconds(): Promise<string> {
    try {
      console.log("Waiting 5 seconds...");
      await new Promise<void>((resolve: () => void) => {
        setTimeout(resolve, 5000);
      });
      const message: string = "Wait finished after 5 seconds";
      console.log(message);
      return message;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai26 error:", error.message);
      } else {
        console.error("Bai26 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<string> {
    return this.waitFiveSeconds();
  }
}

new Bai26().execute();
