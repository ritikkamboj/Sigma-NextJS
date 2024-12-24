"use server"
import fs from "fs/promises";


export async function handleAction(e) {
    "use server";
    console.log(e.get("name"), e.get("add"));
    await fs.writeFile("ritk.txt", "I am definetly going to be millionaire ");
}