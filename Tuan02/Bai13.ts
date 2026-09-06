import { Bai03 } from "./Bai03";

export class Bai13 {
  private readonly bai3: Bai03 = new Bai03();

  public async handleRejection(): Promise<string> {
    try {
      await this.bai3.rejectAfterOneSecond();
      return "Unexpected success";
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Handled error:", error.message);
        return error.message;
      }
      console.error("Handled error:", String(error));
      return String(error);
    }
  }

  public async execute(): Promise<string> {
    return this.handleRejection();
  }
}

new Bai13().execute();
