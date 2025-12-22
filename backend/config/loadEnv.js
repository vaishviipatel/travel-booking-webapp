import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Always load backend/.env
dotenv.config({ path: join(__dirname, "..", ".env") });

console.log("🔧 .env Loaded from:", join(__dirname, "..", ".env"));
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_APP_PASS length:", process.env.GMAIL_APP_PASS?.length);
