import { Bai01 } from "./Bai01";

export class Bai11 {
  private readonly bai1: Bai01 = new Bai01();

  public async getHelloAsync(): Promise<string> {
    try {
      const message: string = await this.bai1.createHelloAsync();
      return message;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai11 error:", error.message);
      } else {
        console.error("Bai11 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<string> {
    try {
      const message: string = await this.getHelloAsync();
      console.log(message);
      return message;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai11 execute error:", error.message);
      } else {
        console.error("Bai11 execute error:", String(error));
      }
      throw error;
    }
  }
}

new Bai11().execute();
