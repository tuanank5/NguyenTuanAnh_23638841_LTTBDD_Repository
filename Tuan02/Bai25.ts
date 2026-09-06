export class Bai25 {
  public async downloadFile(fileName: string = "report.pdf"): Promise<string> {
    try {
      console.log(`Downloading ${fileName}...`);
      await new Promise<void>((resolve: () => void) => {
        setTimeout(resolve, 3000);
      });
      const message: string = `Download complete: ${fileName}`;
      console.log(message);
      return message;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Bai25 error:", error.message);
      } else {
        console.error("Bai25 error:", String(error));
      }
      throw error;
    }
  }

  public async execute(): Promise<string> {
    return this.downloadFile();
  }
}

new Bai25().execute();
