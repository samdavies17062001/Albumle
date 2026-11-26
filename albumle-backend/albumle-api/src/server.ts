import { app } from "@/app.js";

const port = Number(process.env.PORT) || 3000;

app.listen(port, (error) => {
  if (error) {
    console.error(`Failed to start server on http://localhost:${port}`, error);
    process.exit(1);
  }

  console.log(`Listening on http://localhost:${port}`);
});
